(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Su(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const gt={},os=[],Zn=()=>{},dp=()=>!1,ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yu=t=>t.startsWith("onUpdate:"),Bt=Object.assign,Mu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},r_=Object.prototype.hasOwnProperty,ct=(t,e)=>r_.call(t,e),He=Array.isArray,ls=t=>Ho(t)==="[object Map]",pp=t=>Ho(t)==="[object Set]",Xe=t=>typeof t=="function",Ct=t=>typeof t=="string",Ki=t=>typeof t=="symbol",St=t=>t!==null&&typeof t=="object",mp=t=>(St(t)||Xe(t))&&Xe(t.then)&&Xe(t.catch),gp=Object.prototype.toString,Ho=t=>gp.call(t),s_=t=>Ho(t).slice(8,-1),_p=t=>Ho(t)==="[object Object]",Eu=t=>Ct(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ys=Su(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zo=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},a_=/-\w/g,Tn=zo(t=>t.replace(a_,e=>e.slice(1).toUpperCase())),o_=/\B([A-Z])/g,Dr=zo(t=>t.replace(o_,"-$1").toLowerCase()),Vo=zo(t=>t.charAt(0).toUpperCase()+t.slice(1)),cl=zo(t=>t?`on${Vo(t)}`:""),zi=(t,e)=>!Object.is(t,e),ul=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vp=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},l_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},c_=t=>{const e=Ct(t)?Number(t):NaN;return isNaN(e)?t:e};let wf;const Go=()=>wf||(wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bu(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Ct(i)?d_(i):bu(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Ct(t)||St(t))return t}const u_=/;(?![^(]*\))/g,f_=/:([^]+)/,h_=/\/\*[^]*?\*\//g;function d_(t){const e={};return t.replace(h_,"").split(u_).forEach(n=>{if(n){const i=n.split(f_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Rr(t){let e="";if(Ct(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=Rr(t[n]);i&&(e+=i+" ")}else if(St(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const p_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",m_=Su(p_);function xp(t){return!!t||t===""}const Sp=t=>!!(t&&t.__v_isRef===!0),ra=t=>Ct(t)?t:t==null?"":He(t)||St(t)&&(t.toString===gp||!Xe(t.toString))?Sp(t)?ra(t.value):JSON.stringify(t,yp,2):String(t),yp=(t,e)=>Sp(e)?yp(t,e.value):ls(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[fl(i,s)+" =>"]=r,n),{})}:pp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>fl(n))}:Ki(e)?fl(e):St(e)&&!He(e)&&!_p(e)?String(e):e,fl=(t,e="")=>{var n;return Ki(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $t;class Mp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){++this._on===1&&(this.prevScope=$t,$t=this)}off(){this._on>0&&--this._on===0&&($t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Tu(t){return new Mp(t)}function Ep(){return $t}function g_(t,e=!1){$t&&$t.cleanups.push(t)}let vt;const hl=new WeakSet;class bp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,hl.has(this)&&(hl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Af(this),Ap(this);const e=vt,n=On;vt=this,On=!0;try{return this.fn()}finally{Rp(this),vt=e,On=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ru(e);this.deps=this.depsTail=void 0,Af(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?hl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){lc(this)&&this.run()}get dirty(){return lc(this)}}let Tp=0,$s,qs;function wp(t,e=!1){if(t.flags|=8,e){t.next=qs,qs=t;return}t.next=$s,$s=t}function wu(){Tp++}function Au(){if(--Tp>0)return;if(qs){let e=qs;for(qs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$s;){let e=$s;for($s=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Ap(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Rp(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Ru(i),__(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function lc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Cp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Cp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===sa)||(t.globalVersion=sa,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!lc(t))))return;t.flags|=2;const e=t.dep,n=vt,i=On;vt=t,On=!0;try{Ap(t);const r=t.fn(t._value);(e.version===0||zi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{vt=n,On=i,Rp(t),t.flags&=-3}}function Ru(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Ru(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function __(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let On=!0;const Pp=[];function Mi(){Pp.push(On),On=!1}function Ei(){const t=Pp.pop();On=t===void 0?!0:t}function Af(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=vt;vt=void 0;try{e()}finally{vt=n}}}let sa=0;class v_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Cu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!vt||!On||vt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==vt)n=this.activeLink=new v_(vt,this),vt.deps?(n.prevDep=vt.depsTail,vt.depsTail.nextDep=n,vt.depsTail=n):vt.deps=vt.depsTail=n,Lp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=vt.depsTail,n.nextDep=void 0,vt.depsTail.nextDep=n,vt.depsTail=n,vt.deps===n&&(vt.deps=i)}return n}trigger(e){this.version++,sa++,this.notify(e)}notify(e){wu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Au()}}}function Lp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Lp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const To=new WeakMap,br=Symbol(""),cc=Symbol(""),aa=Symbol("");function qt(t,e,n){if(On&&vt){let i=To.get(t);i||To.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Cu),r.map=i,r.key=n),r.track()}}function pi(t,e,n,i,r,s){const a=To.get(t);if(!a){sa++;return}const o=l=>{l&&l.trigger()};if(wu(),e==="clear")a.forEach(o);else{const l=He(t),c=l&&Eu(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===aa||!Ki(h)&&h>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(aa)),e){case"add":l?c&&o(a.get("length")):(o(a.get(br)),ls(t)&&o(a.get(cc)));break;case"delete":l||(o(a.get(br)),ls(t)&&o(a.get(cc)));break;case"set":ls(t)&&o(a.get(br));break}}Au()}function x_(t,e){const n=To.get(t);return n&&n.get(e)}function Br(t){const e=tt(t);return e===t?e:(qt(e,"iterate",aa),bn(t)?e:e.map(Ht))}function Wo(t){return qt(t=tt(t),"iterate",aa),t}const S_={__proto__:null,[Symbol.iterator](){return dl(this,Symbol.iterator,Ht)},concat(...t){return Br(this).concat(...t.map(e=>He(e)?Br(e):e))},entries(){return dl(this,"entries",t=>(t[1]=Ht(t[1]),t))},every(t,e){return ni(this,"every",t,e,void 0,arguments)},filter(t,e){return ni(this,"filter",t,e,n=>n.map(Ht),arguments)},find(t,e){return ni(this,"find",t,e,Ht,arguments)},findIndex(t,e){return ni(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ni(this,"findLast",t,e,Ht,arguments)},findLastIndex(t,e){return ni(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ni(this,"forEach",t,e,void 0,arguments)},includes(...t){return pl(this,"includes",t)},indexOf(...t){return pl(this,"indexOf",t)},join(t){return Br(this).join(t)},lastIndexOf(...t){return pl(this,"lastIndexOf",t)},map(t,e){return ni(this,"map",t,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...t){return Is(this,"push",t)},reduce(t,...e){return Rf(this,"reduce",t,e)},reduceRight(t,...e){return Rf(this,"reduceRight",t,e)},shift(){return Is(this,"shift")},some(t,e){return ni(this,"some",t,e,void 0,arguments)},splice(...t){return Is(this,"splice",t)},toReversed(){return Br(this).toReversed()},toSorted(t){return Br(this).toSorted(t)},toSpliced(...t){return Br(this).toSpliced(...t)},unshift(...t){return Is(this,"unshift",t)},values(){return dl(this,"values",Ht)}};function dl(t,e,n){const i=Wo(t),r=i[e]();return i!==t&&!bn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const y_=Array.prototype;function ni(t,e,n,i,r,s){const a=Wo(t),o=a!==t&&!bn(t),l=a[e];if(l!==y_[e]){const f=l.apply(t,s);return o?Ht(f):f}let c=n;a!==t&&(o?c=function(f,h){return n.call(this,Ht(f),h,t)}:n.length>2&&(c=function(f,h){return n.call(this,f,h,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Rf(t,e,n,i){const r=Wo(t);let s=n;return r!==t&&(bn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,Ht(o),l,t)}),r[e](s,...i)}function pl(t,e,n){const i=tt(t);qt(i,"iterate",aa);const r=i[e](...n);return(r===-1||r===!1)&&Iu(n[0])?(n[0]=tt(n[0]),i[e](...n)):r}function Is(t,e,n=[]){Mi(),wu();const i=tt(t)[e].apply(t,n);return Au(),Ei(),i}const M_=Su("__proto__,__v_isRef,__isVue"),Ip=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ki));function E_(t){Ki(t)||(t=String(t));const e=tt(this);return qt(e,"has",t),e.hasOwnProperty(t)}class Dp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?D_:Op:s?Fp:Up).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=He(e);if(!r){let l;if(a&&(l=S_[n]))return l;if(n==="hasOwnProperty")return E_}const o=Reflect.get(e,n,Rt(e)?e:i);if((Ki(n)?Ip.has(n):M_(n))||(r||qt(e,"get",n),s))return o;if(Rt(o)){const l=a&&Eu(n)?o:o.value;return r&&St(l)?fc(l):l}return St(o)?r?fc(o):ba(o):o}}class Np extends Dp{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=Xi(s);if(!bn(i)&&!Xi(i)&&(s=tt(s),i=tt(i)),!He(e)&&Rt(s)&&!Rt(i))return l||(s.value=i),!0}const a=He(e)&&Eu(n)?Number(n)<e.length:ct(e,n),o=Reflect.set(e,n,i,Rt(e)?e:r);return e===tt(r)&&(a?zi(i,s)&&pi(e,"set",n,i):pi(e,"add",n,i)),o}deleteProperty(e,n){const i=ct(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&pi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Ki(n)||!Ip.has(n))&&qt(e,"has",n),i}ownKeys(e){return qt(e,"iterate",He(e)?"length":br),Reflect.ownKeys(e)}}class b_ extends Dp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const T_=new Np,w_=new b_,A_=new Np(!0);const uc=t=>t,Ua=t=>Reflect.getPrototypeOf(t);function R_(t,e,n){return function(...i){const r=this.__v_raw,s=tt(r),a=ls(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?uc:e?wo:Ht;return!e&&qt(s,"iterate",l?cc:br),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Fa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function C_(t,e){const n={get(r){const s=this.__v_raw,a=tt(s),o=tt(r);t||(zi(r,o)&&qt(a,"get",r),qt(a,"get",o));const{has:l}=Ua(a),c=e?uc:t?wo:Ht;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&qt(tt(r),"iterate",br),r.size},has(r){const s=this.__v_raw,a=tt(s),o=tt(r);return t||(zi(r,o)&&qt(a,"has",r),qt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=tt(o),c=e?uc:t?wo:Ht;return!t&&qt(l,"iterate",br),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Bt(n,t?{add:Fa("add"),set:Fa("set"),delete:Fa("delete"),clear:Fa("clear")}:{add(r){!e&&!bn(r)&&!Xi(r)&&(r=tt(r));const s=tt(this);return Ua(s).has.call(s,r)||(s.add(r),pi(s,"add",r,r)),this},set(r,s){!e&&!bn(s)&&!Xi(s)&&(s=tt(s));const a=tt(this),{has:o,get:l}=Ua(a);let c=o.call(a,r);c||(r=tt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?zi(s,u)&&pi(a,"set",r,s):pi(a,"add",r,s),this},delete(r){const s=tt(this),{has:a,get:o}=Ua(s);let l=a.call(s,r);l||(r=tt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&pi(s,"delete",r,void 0),c},clear(){const r=tt(this),s=r.size!==0,a=r.clear();return s&&pi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=R_(r,t,e)}),n}function Pu(t,e){const n=C_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ct(n,r)&&r in i?n:i,r,s)}const P_={get:Pu(!1,!1)},L_={get:Pu(!1,!0)},I_={get:Pu(!0,!1)};const Up=new WeakMap,Fp=new WeakMap,Op=new WeakMap,D_=new WeakMap;function N_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function U_(t){return t.__v_skip||!Object.isExtensible(t)?0:N_(s_(t))}function ba(t){return Xi(t)?t:Lu(t,!1,T_,P_,Up)}function Bp(t){return Lu(t,!1,A_,L_,Fp)}function fc(t){return Lu(t,!0,w_,I_,Op)}function Lu(t,e,n,i,r){if(!St(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=U_(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function Vi(t){return Xi(t)?Vi(t.__v_raw):!!(t&&t.__v_isReactive)}function Xi(t){return!!(t&&t.__v_isReadonly)}function bn(t){return!!(t&&t.__v_isShallow)}function Iu(t){return t?!!t.__v_raw:!1}function tt(t){const e=t&&t.__v_raw;return e?tt(e):t}function Du(t){return!ct(t,"__v_skip")&&Object.isExtensible(t)&&vp(t,"__v_skip",!0),t}const Ht=t=>St(t)?ba(t):t,wo=t=>St(t)?fc(t):t;function Rt(t){return t?t.__v_isRef===!0:!1}function Hn(t){return kp(t,!1)}function Nu(t){return kp(t,!0)}function kp(t,e){return Rt(t)?t:new F_(t,e)}class F_{constructor(e,n){this.dep=new Cu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:tt(e),this._value=n?e:Ht(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||bn(e)||Xi(e);e=i?e:tt(e),zi(e,n)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function xi(t){return Rt(t)?t.value:t}const O_={get:(t,e,n)=>e==="__v_raw"?t:xi(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Rt(r)&&!Rt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Hp(t){return Vi(t)?t:new Proxy(t,O_)}function B_(t){const e=He(t)?new Array(t.length):{};for(const n in t)e[n]=H_(t,n);return e}class k_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return x_(tt(this._object),this._key)}}function H_(t,e,n){const i=t[e];return Rt(i)?i:new k_(t,e,n)}class z_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Cu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=sa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&vt!==this)return wp(this,!0),!0}get value(){const e=this.dep.track();return Cp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function V_(t,e,n=!1){let i,r;return Xe(t)?i=t:(i=t.get,r=t.set),new z_(i,r,n)}const Oa={},Ao=new WeakMap;let pr;function G_(t,e=!1,n=pr){if(n){let i=Ao.get(n);i||Ao.set(n,i=[]),i.push(t)}}function W_(t,e,n=gt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=v=>r?v:bn(v)||r===!1||r===0?ki(v,1):ki(v);let u,f,h,p,_=!1,x=!1;if(Rt(t)?(f=()=>t.value,_=bn(t)):Vi(t)?(f=()=>c(t),_=!0):He(t)?(x=!0,_=t.some(v=>Vi(v)||bn(v)),f=()=>t.map(v=>{if(Rt(v))return v.value;if(Vi(v))return c(v);if(Xe(v))return l?l(v,2):v()})):Xe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(h){Mi();try{h()}finally{Ei()}}const v=pr;pr=u;try{return l?l(t,3,[p]):t(p)}finally{pr=v}}:f=Zn,e&&r){const v=f,I=r===!0?1/0:r;f=()=>ki(v(),I)}const g=Ep(),d=()=>{u.stop(),g&&g.active&&Mu(g.effects,u)};if(s&&e){const v=e;e=(...I)=>{v(...I),d()}}let y=x?new Array(t.length).fill(Oa):Oa;const M=v=>{if(!(!(u.flags&1)||!u.dirty&&!v))if(e){const I=u.run();if(r||_||(x?I.some((L,R)=>zi(L,y[R])):zi(I,y))){h&&h();const L=pr;pr=u;try{const R=[I,y===Oa?void 0:x&&y[0]===Oa?[]:y,p];y=I,l?l(e,3,R):e(...R)}finally{pr=L}}}else u.run()};return o&&o(M),u=new bp(f),u.scheduler=a?()=>a(M,!1):M,p=v=>G_(v,!1,u),h=u.onStop=()=>{const v=Ao.get(u);if(v){if(l)l(v,4);else for(const I of v)I();Ao.delete(u)}},e?i?M(!0):y=u.run():a?a(M.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function ki(t,e=1/0,n){if(e<=0||!St(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Rt(t))ki(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)ki(t[i],e,n);else if(pp(t)||ls(t))t.forEach(i=>{ki(i,e,n)});else if(_p(t)){for(const i in t)ki(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ki(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ta(t,e,n,i){try{return i?t(...i):t()}catch(r){Xo(r,e,n)}}function zn(t,e,n,i){if(Xe(t)){const r=Ta(t,e,n,i);return r&&mp(r)&&r.catch(s=>{Xo(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(zn(t[s],e,n,i));return r}}function Xo(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||gt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){Mi(),Ta(s,null,10,[t,l,c]),Ei();return}}X_(t,n,r,i,a)}function X_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const tn=[];let Yn=-1;const cs=[];let Fi=null,ts=0;const zp=Promise.resolve();let Ro=null;function Uu(t){const e=Ro||zp;return t?e.then(this?t.bind(this):t):e}function Y_(t){let e=Yn+1,n=tn.length;for(;e<n;){const i=e+n>>>1,r=tn[i],s=oa(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Fu(t){if(!(t.flags&1)){const e=oa(t),n=tn[tn.length-1];!n||!(t.flags&2)&&e>=oa(n)?tn.push(t):tn.splice(Y_(e),0,t),t.flags|=1,Vp()}}function Vp(){Ro||(Ro=zp.then(Wp))}function $_(t){He(t)?cs.push(...t):Fi&&t.id===-1?Fi.splice(ts+1,0,t):t.flags&1||(cs.push(t),t.flags|=1),Vp()}function Cf(t,e,n=Yn+1){for(;n<tn.length;n++){const i=tn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;tn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Gp(t){if(cs.length){const e=[...new Set(cs)].sort((n,i)=>oa(n)-oa(i));if(cs.length=0,Fi){Fi.push(...e);return}for(Fi=e,ts=0;ts<Fi.length;ts++){const n=Fi[ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fi=null,ts=0}}const oa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Wp(t){try{for(Yn=0;Yn<tn.length;Yn++){const e=tn[Yn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ta(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yn<tn.length;Yn++){const e=tn[Yn];e&&(e.flags&=-2)}Yn=-1,tn.length=0,Gp(),Ro=null,(tn.length||cs.length)&&Wp()}}let Dn=null,Xp=null;function Co(t){const e=Dn;return Dn=t,Xp=t&&t.type.__scopeId||null,e}function ds(t,e=Dn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Io(-1);const s=Co(e);let a;try{a=t(...r)}finally{Co(s),i._d&&Io(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function rr(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Mi(),zn(l,n,8,[t.el,o,t,e]),Ei())}}const q_=Symbol("_vte"),Yp=t=>t.__isTeleport,di=Symbol("_leaveCb"),Ba=Symbol("_enterCb");function j_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nr(()=>{t.isMounted=!0}),tm(()=>{t.isUnmounting=!0}),t}const Sn=[Function,Array],$p={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Sn,onEnter:Sn,onAfterEnter:Sn,onEnterCancelled:Sn,onBeforeLeave:Sn,onLeave:Sn,onAfterLeave:Sn,onLeaveCancelled:Sn,onBeforeAppear:Sn,onAppear:Sn,onAfterAppear:Sn,onAppearCancelled:Sn},qp=t=>{const e=t.subTree;return e.component?qp(e.component):e},K_={name:"BaseTransition",props:$p,setup(t,{slots:e}){const n=bi(),i=j_();return()=>{const r=e.default&&Zp(e.default(),!0);if(!r||!r.length)return;const s=jp(r),a=tt(t),{mode:o}=a;if(i.isLeaving)return ml(s);const l=Pf(s);if(!l)return ml(s);let c=hc(l,a,i,n,f=>c=f);l.type!==nn&&la(l,c);let u=n.subTree&&Pf(n.subTree);if(u&&u.type!==nn&&!vr(u,l)&&qp(n).type!==nn){let f=hc(u,a,i,n);if(la(u,f),o==="out-in"&&l.type!==nn)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},ml(s);o==="in-out"&&l.type!==nn?f.delayLeave=(h,p,_)=>{const x=Kp(i,u);x[String(u.key)]=u,h[di]=()=>{p(),h[di]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function jp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==nn){e=n;break}}return e}const Z_=K_;function Kp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function hc(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:_,onLeaveCancelled:x,onBeforeAppear:g,onAppear:d,onAfterAppear:y,onAppearCancelled:M}=e,v=String(t.key),I=Kp(n,t),L=(E,T)=>{E&&zn(E,i,9,T)},R=(E,T)=>{const F=T[1];L(E,T),He(E)?E.every(B=>B.length<=1)&&F():E.length<=1&&F()},O={mode:a,persisted:o,beforeEnter(E){let T=l;if(!n.isMounted)if(s)T=g||l;else return;E[di]&&E[di](!0);const F=I[v];F&&vr(t,F)&&F.el[di]&&F.el[di](),L(T,[E])},enter(E){let T=c,F=u,B=f;if(!n.isMounted)if(s)T=d||c,F=y||u,B=M||f;else return;let W=!1;const ie=E[Ba]=ae=>{W||(W=!0,ae?L(B,[E]):L(F,[E]),O.delayedLeave&&O.delayedLeave(),E[Ba]=void 0)};T?R(T,[E,ie]):ie()},leave(E,T){const F=String(t.key);if(E[Ba]&&E[Ba](!0),n.isUnmounting)return T();L(h,[E]);let B=!1;const W=E[di]=ie=>{B||(B=!0,T(),ie?L(x,[E]):L(_,[E]),E[di]=void 0,I[F]===t&&delete I[F])};I[F]=t,p?R(p,[E,W]):W()},clone(E){const T=hc(E,e,n,i,r);return r&&r(T),T}};return O}function ml(t){if(Yo(t))return t=Yi(t),t.children=null,t}function Pf(t){if(!Yo(t))return Yp(t.type)&&t.children?jp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Xe(n.default))return n.default()}}function la(t,e){t.shapeFlag&6&&t.component?(t.transition=e,la(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Zp(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===zt?(a.patchFlag&128&&r++,i=i.concat(Zp(a.children,e,o))):(e||a.type!==nn)&&i.push(o!=null?Yi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function cn(t,e){return Xe(t)?Bt({name:t.name},e,{setup:t}):t}function Jp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function fo(t){const e=bi(),n=Nu(null);if(e){const r=e.refs===gt?e.refs={}:e.refs;Object.defineProperty(r,t,{enumerable:!0,get:()=>n.value,set:s=>n.value=s})}return n}const Po=new WeakMap;function js(t,e,n,i,r=!1){if(He(t)){t.forEach((_,x)=>js(_,e&&(He(e)?e[x]:e),n,i,r));return}if(Ks(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&js(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Vu(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===gt?o.refs={}:o.refs,f=o.setupState,h=tt(f),p=f===gt?dp:_=>ct(h,_);if(c!=null&&c!==l){if(Lf(e),Ct(c))u[c]=null,p(c)&&(f[c]=null);else if(Rt(c)){c.value=null;const _=e;_.k&&(u[_.k]=null)}}if(Xe(l))Ta(l,o,12,[a,u]);else{const _=Ct(l),x=Rt(l);if(_||x){const g=()=>{if(t.f){const d=_?p(l)?f[l]:u[l]:l.value;if(r)He(d)&&Mu(d,s);else if(He(d))d.includes(s)||d.push(s);else if(_)u[l]=[s],p(l)&&(f[l]=u[l]);else{const y=[s];l.value=y,t.k&&(u[t.k]=y)}}else _?(u[l]=a,p(l)&&(f[l]=a)):x&&(l.value=a,t.k&&(u[t.k]=a))};if(a){const d=()=>{g(),Po.delete(t)};d.id=-1,Po.set(t,d),dn(d,n)}else Lf(t),g()}}}function Lf(t){const e=Po.get(t);e&&(e.flags|=8,Po.delete(t))}Go().requestIdleCallback;Go().cancelIdleCallback;const Ks=t=>!!t.type.__asyncLoader,Yo=t=>t.type.__isKeepAlive;function J_(t,e){Qp(t,"a",e)}function Q_(t,e){Qp(t,"da",e)}function Qp(t,e,n=jt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if($o(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Yo(r.parent.vnode)&&e0(i,e,n,r),r=r.parent}}function e0(t,e,n,i){const r=$o(e,t,i,!0);Ts(()=>{Mu(i[e],r)},n)}function $o(t,e,n=jt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{Mi();const o=Aa(n),l=zn(e,n,t,a);return o(),Ei(),l});return i?r.unshift(s):r.push(s),s}}const Ti=t=>(e,n=jt)=>{(!ua||t==="sp")&&$o(t,(...i)=>e(...i),n)},t0=Ti("bm"),Nr=Ti("m"),n0=Ti("bu"),em=Ti("u"),tm=Ti("bum"),Ts=Ti("um"),i0=Ti("sp"),r0=Ti("rtg"),s0=Ti("rtc");function a0(t,e=jt){$o("ec",t,e)}const nm="components";function Tr(t,e){return im(nm,t,!0,e)||t}const o0=Symbol.for("v-ndc");function l0(t){return Ct(t)&&im(nm,t,!1)||t}function im(t,e,n=!0,i=!1){const r=Dn||jt;if(r){const s=r.type;{const o=J0(s,!1);if(o&&(o===e||o===Tn(e)||o===Vo(Tn(e))))return s}const a=If(r[t]||s[t],e)||If(r.appContext[t],e);return!a&&i?s:a}}function If(t,e){return t&&(t[e]||t[Tn(e)]||t[Vo(Tn(e))])}function c0(t,e,n,i){let r;const s=n,a=He(t);if(a||Ct(t)){const o=a&&Vi(t);let l=!1,c=!1;o&&(l=!bn(t),c=Xi(t),t=Wo(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?wo(Ht(t[u])):Ht(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(St(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const dc=t=>t?Mm(t)?Vu(t):dc(t.parent):null,Zs=Bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dc(t.parent),$root:t=>dc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>sm(t),$forceUpdate:t=>t.f||(t.f=()=>{Fu(t.update)}),$nextTick:t=>t.n||(t.n=Uu.bind(t.proxy)),$watch:t=>L0.bind(t)}),gl=(t,e)=>t!==gt&&!t.__isScriptSetup&&ct(t,e),u0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(gl(i,e))return a[e]=1,i[e];if(r!==gt&&ct(r,e))return a[e]=2,r[e];if((c=t.propsOptions[0])&&ct(c,e))return a[e]=3,s[e];if(n!==gt&&ct(n,e))return a[e]=4,n[e];pc&&(a[e]=0)}}const u=Zs[e];let f,h;if(u)return e==="$attrs"&&qt(t.attrs,"get",""),u(t);if((f=o.__cssModules)&&(f=f[e]))return f;if(n!==gt&&ct(n,e))return a[e]=4,n[e];if(h=l.config.globalProperties,ct(h,e))return h[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return gl(r,e)?(r[e]=n,!0):i!==gt&&ct(i,e)?(i[e]=n,!0):ct(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s,type:a}},o){let l,c;return!!(n[o]||t!==gt&&o[0]!=="$"&&ct(t,o)||gl(e,o)||(l=s[0])&&ct(l,o)||ct(i,o)||ct(Zs,o)||ct(r.config.globalProperties,o)||(c=a.__cssModules)&&c[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ct(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Df(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let pc=!0;function f0(t){const e=sm(t),n=t.proxy,i=t.ctx;pc=!1,e.beforeCreate&&Nf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:_,activated:x,deactivated:g,beforeDestroy:d,beforeUnmount:y,destroyed:M,unmounted:v,render:I,renderTracked:L,renderTriggered:R,errorCaptured:O,serverPrefetch:E,expose:T,inheritAttrs:F,components:B,directives:W,filters:ie}=e;if(c&&h0(c,i,null),a)for(const J in a){const $=a[J];Xe($)&&(i[J]=$.bind(n))}if(r){const J=r.call(n,n);St(J)&&(t.data=ba(J))}if(pc=!0,s)for(const J in s){const $=s[J],pe=Xe($)?$.bind(n,n):Xe($.get)?$.get.bind(n,n):Zn,ve=!Xe($)&&Xe($.set)?$.set.bind(n):Zn,we=Tt({get:pe,set:ve});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>we.value,set:Fe=>we.value=Fe})}if(o)for(const J in o)rm(o[J],i,n,J);if(l){const J=Xe(l)?l.call(n):l;Reflect.ownKeys(J).forEach($=>{ho($,J[$])})}u&&Nf(u,t,"c");function ee(J,$){He($)?$.forEach(pe=>J(pe.bind(n))):$&&J($.bind(n))}if(ee(t0,f),ee(Nr,h),ee(n0,p),ee(em,_),ee(J_,x),ee(Q_,g),ee(a0,O),ee(s0,L),ee(r0,R),ee(tm,y),ee(Ts,v),ee(i0,E),He(T))if(T.length){const J=t.exposed||(t.exposed={});T.forEach($=>{Object.defineProperty(J,$,{get:()=>n[$],set:pe=>n[$]=pe,enumerable:!0})})}else t.exposed||(t.exposed={});I&&t.render===Zn&&(t.render=I),F!=null&&(t.inheritAttrs=F),B&&(t.components=B),W&&(t.directives=W),E&&Jp(t)}function h0(t,e,n=Zn){He(t)&&(t=mc(t));for(const i in t){const r=t[i];let s;St(r)?"default"in r?s=Bn(r.from||i,r.default,!0):s=Bn(r.from||i):s=Bn(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Nf(t,e,n){zn(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function rm(t,e,n,i){let r=i.includes(".")?_m(n,i):()=>n[i];if(Ct(t)){const s=e[t];Xe(s)&&Si(r,s)}else if(Xe(t))Si(r,t.bind(n));else if(St(t))if(He(t))t.forEach(s=>rm(s,e,n,i));else{const s=Xe(t.handler)?t.handler.bind(n):e[t.handler];Xe(s)&&Si(r,s,t)}}function sm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Lo(l,c,a,!0)),Lo(l,e,a)),St(e)&&s.set(e,l),l}function Lo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Lo(t,s,n,!0),r&&r.forEach(a=>Lo(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=d0[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const d0={data:Uf,props:Ff,emits:Ff,methods:Gs,computed:Gs,beforeCreate:Jt,created:Jt,beforeMount:Jt,mounted:Jt,beforeUpdate:Jt,updated:Jt,beforeDestroy:Jt,beforeUnmount:Jt,destroyed:Jt,unmounted:Jt,activated:Jt,deactivated:Jt,errorCaptured:Jt,serverPrefetch:Jt,components:Gs,directives:Gs,watch:m0,provide:Uf,inject:p0};function Uf(t,e){return e?t?function(){return Bt(Xe(t)?t.call(this,this):t,Xe(e)?e.call(this,this):e)}:e:t}function p0(t,e){return Gs(mc(t),mc(e))}function mc(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Jt(t,e){return t?[...new Set([].concat(t,e))]:e}function Gs(t,e){return t?Bt(Object.create(null),t,e):e}function Ff(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:Bt(Object.create(null),Df(t),Df(e??{})):e}function m0(t,e){if(!t)return e;if(!e)return t;const n=Bt(Object.create(null),t);for(const i in e)n[i]=Jt(t[i],e[i]);return n}function am(){return{app:null,config:{isNativeTag:dp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let g0=0;function _0(t,e){return function(i,r=null){Xe(i)||(i=Bt({},i)),r!=null&&!St(r)&&(r=null);const s=am(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:g0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ev,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Xe(u.install)?(a.add(u),u.install(c,...f)):Xe(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||et(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),t(p,u,h),l=!0,c._container=u,u.__vue_app__=c,Vu(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(zn(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=wr;wr=c;try{return u()}finally{wr=f}}};return c}}let wr=null;function ho(t,e){if(jt){let n=jt.provides;const i=jt.parent&&jt.parent.provides;i===n&&(n=jt.provides=Object.create(i)),n[t]=e}}function Bn(t,e,n=!1){const i=bi();if(i||wr){let r=wr?wr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Xe(e)?e.call(i&&i.proxy):e}}function v0(){return!!(bi()||wr)}const om={},lm=()=>Object.create(om),cm=t=>Object.getPrototypeOf(t)===om;function x0(t,e,n,i=!1){const r={},s=lm();t.propsDefaults=Object.create(null),um(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:Bp(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function S0(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=tt(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(qo(t.emitsOptions,h))continue;const p=e[h];if(l)if(ct(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const _=Tn(h);r[_]=gc(l,o,_,p,t,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{um(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!ct(e,f)&&((u=Dr(f))===f||!ct(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=gc(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ct(e,f))&&(delete s[f],c=!0)}c&&pi(t.attrs,"set","")}function um(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ys(l))continue;const c=e[l];let u;r&&ct(r,u=Tn(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:qo(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=tt(n),c=o||gt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=gc(r,l,f,c[f],t,!ct(c,f))}}return a}function gc(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=ct(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Xe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Aa(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Dr(n))&&(i=!0))}return i}const y0=new WeakMap;function fm(t,e,n=!1){const i=n?y0:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!Xe(t)){const u=f=>{l=!0;const[h,p]=fm(f,e,!0);Bt(a,h),p&&o.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return St(t)&&i.set(t,os),os;if(He(s))for(let u=0;u<s.length;u++){const f=Tn(s[u]);Of(f)&&(a[f]=gt)}else if(s)for(const u in s){const f=Tn(u);if(Of(f)){const h=s[u],p=a[f]=He(h)||Xe(h)?{type:h}:Bt({},h),_=p.type;let x=!1,g=!0;if(He(_))for(let d=0;d<_.length;++d){const y=_[d],M=Xe(y)&&y.name;if(M==="Boolean"){x=!0;break}else M==="String"&&(g=!1)}else x=Xe(_)&&_.name==="Boolean";p[0]=x,p[1]=g,(x||ct(p,"default"))&&o.push(f)}}const c=[a,o];return St(t)&&i.set(t,c),c}function Of(t){return t[0]!=="$"&&!Ys(t)}const Ou=t=>t==="_"||t==="_ctx"||t==="$stable",Bu=t=>He(t)?t.map($n):[$n(t)],M0=(t,e,n)=>{if(e._n)return e;const i=ds((...r)=>Bu(e(...r)),n);return i._c=!1,i},hm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Ou(r))continue;const s=t[r];if(Xe(s))e[r]=M0(r,s,i);else if(s!=null){const a=Bu(s);e[r]=()=>a}}},dm=(t,e)=>{const n=Bu(e);t.slots.default=()=>n},pm=(t,e,n)=>{for(const i in e)(n||!Ou(i))&&(t[i]=e[i])},E0=(t,e,n)=>{const i=t.slots=lm();if(t.vnode.shapeFlag&32){const r=e._;r?(pm(i,e,n),n&&vp(i,"_",r,!0)):hm(e,i)}else e&&dm(t,e)},b0=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=gt;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:pm(r,e,n):(s=!e.$stable,hm(e,r)),a=e}else e&&(dm(t,e),a={default:1});if(s)for(const o in r)!Ou(o)&&a[o]==null&&delete r[o]},dn=k0;function T0(t){return w0(t)}function w0(t,e){const n=Go();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=Zn,insertStaticContent:_}=t,x=(D,N,S,ne=null,Z=null,K=null,w=void 0,C=null,U=!!N.dynamicChildren)=>{if(D===N)return;D&&!vr(D,N)&&(ne=z(D),Fe(D,Z,K,!0),D=null),N.patchFlag===-2&&(U=!1,N.dynamicChildren=null);const{type:k,ref:he,shapeFlag:b}=N;switch(k){case wa:g(D,N,S,ne);break;case nn:d(D,N,S,ne);break;case vl:D==null&&y(N,S,ne,w);break;case zt:B(D,N,S,ne,Z,K,w,C,U);break;default:b&1?I(D,N,S,ne,Z,K,w,C,U):b&6?W(D,N,S,ne,Z,K,w,C,U):(b&64||b&128)&&k.process(D,N,S,ne,Z,K,w,C,U,oe)}he!=null&&Z?js(he,D&&D.ref,K,N||D,!N):he==null&&D&&D.ref!=null&&js(D.ref,null,K,D,!0)},g=(D,N,S,ne)=>{if(D==null)i(N.el=o(N.children),S,ne);else{const Z=N.el=D.el;N.children!==D.children&&c(Z,N.children)}},d=(D,N,S,ne)=>{D==null?i(N.el=l(N.children||""),S,ne):N.el=D.el},y=(D,N,S,ne)=>{[D.el,D.anchor]=_(D.children,N,S,ne,D.el,D.anchor)},M=({el:D,anchor:N},S,ne)=>{let Z;for(;D&&D!==N;)Z=h(D),i(D,S,ne),D=Z;i(N,S,ne)},v=({el:D,anchor:N})=>{let S;for(;D&&D!==N;)S=h(D),r(D),D=S;r(N)},I=(D,N,S,ne,Z,K,w,C,U)=>{N.type==="svg"?w="svg":N.type==="math"&&(w="mathml"),D==null?L(N,S,ne,Z,K,w,C,U):E(D,N,Z,K,w,C,U)},L=(D,N,S,ne,Z,K,w,C)=>{let U,k;const{props:he,shapeFlag:b,transition:m,dirs:P}=D;if(U=D.el=a(D.type,K,he&&he.is,he),b&8?u(U,D.children):b&16&&O(D.children,U,null,ne,Z,_l(D,K),w,C),P&&rr(D,null,ne,"created"),R(U,D,D.scopeId,w,ne),he){for(const j in he)j!=="value"&&!Ys(j)&&s(U,j,null,he[j],K,ne);"value"in he&&s(U,"value",null,he.value,K),(k=he.onVnodeBeforeMount)&&Gn(k,ne,D)}P&&rr(D,null,ne,"beforeMount");const V=A0(Z,m);V&&m.beforeEnter(U),i(U,N,S),((k=he&&he.onVnodeMounted)||V||P)&&dn(()=>{k&&Gn(k,ne,D),V&&m.enter(U),P&&rr(D,null,ne,"mounted")},Z)},R=(D,N,S,ne,Z)=>{if(S&&p(D,S),ne)for(let K=0;K<ne.length;K++)p(D,ne[K]);if(Z){let K=Z.subTree;if(N===K||xm(K.type)&&(K.ssContent===N||K.ssFallback===N)){const w=Z.vnode;R(D,w,w.scopeId,w.slotScopeIds,Z.parent)}}},O=(D,N,S,ne,Z,K,w,C,U=0)=>{for(let k=U;k<D.length;k++){const he=D[k]=C?Oi(D[k]):$n(D[k]);x(null,he,N,S,ne,Z,K,w,C)}},E=(D,N,S,ne,Z,K,w)=>{const C=N.el=D.el;let{patchFlag:U,dynamicChildren:k,dirs:he}=N;U|=D.patchFlag&16;const b=D.props||gt,m=N.props||gt;let P;if(S&&sr(S,!1),(P=m.onVnodeBeforeUpdate)&&Gn(P,S,N,D),he&&rr(N,D,S,"beforeUpdate"),S&&sr(S,!0),(b.innerHTML&&m.innerHTML==null||b.textContent&&m.textContent==null)&&u(C,""),k?T(D.dynamicChildren,k,C,S,ne,_l(N,Z),K):w||$(D,N,C,null,S,ne,_l(N,Z),K,!1),U>0){if(U&16)F(C,b,m,S,Z);else if(U&2&&b.class!==m.class&&s(C,"class",null,m.class,Z),U&4&&s(C,"style",b.style,m.style,Z),U&8){const V=N.dynamicProps;for(let j=0;j<V.length;j++){const q=V[j],Se=b[q],fe=m[q];(fe!==Se||q==="value")&&s(C,q,Se,fe,Z,S)}}U&1&&D.children!==N.children&&u(C,N.children)}else!w&&k==null&&F(C,b,m,S,Z);((P=m.onVnodeUpdated)||he)&&dn(()=>{P&&Gn(P,S,N,D),he&&rr(N,D,S,"updated")},ne)},T=(D,N,S,ne,Z,K,w)=>{for(let C=0;C<N.length;C++){const U=D[C],k=N[C],he=U.el&&(U.type===zt||!vr(U,k)||U.shapeFlag&198)?f(U.el):S;x(U,k,he,null,ne,Z,K,w,!0)}},F=(D,N,S,ne,Z)=>{if(N!==S){if(N!==gt)for(const K in N)!Ys(K)&&!(K in S)&&s(D,K,N[K],null,Z,ne);for(const K in S){if(Ys(K))continue;const w=S[K],C=N[K];w!==C&&K!=="value"&&s(D,K,C,w,Z,ne)}"value"in S&&s(D,"value",N.value,S.value,Z)}},B=(D,N,S,ne,Z,K,w,C,U)=>{const k=N.el=D?D.el:o(""),he=N.anchor=D?D.anchor:o("");let{patchFlag:b,dynamicChildren:m,slotScopeIds:P}=N;P&&(C=C?C.concat(P):P),D==null?(i(k,S,ne),i(he,S,ne),O(N.children||[],S,he,Z,K,w,C,U)):b>0&&b&64&&m&&D.dynamicChildren?(T(D.dynamicChildren,m,S,Z,K,w,C),(N.key!=null||Z&&N===Z.subTree)&&mm(D,N,!0)):$(D,N,S,he,Z,K,w,C,U)},W=(D,N,S,ne,Z,K,w,C,U)=>{N.slotScopeIds=C,D==null?N.shapeFlag&512?Z.ctx.activate(N,S,ne,w,U):ie(N,S,ne,Z,K,w,U):ae(D,N,U)},ie=(D,N,S,ne,Z,K,w)=>{const C=D.component=$0(D,ne,Z);if(Yo(D)&&(C.ctx.renderer=oe),q0(C,!1,w),C.asyncDep){if(Z&&Z.registerDep(C,ee,w),!D.el){const U=C.subTree=et(nn);d(null,U,N,S),D.placeholder=U.el}}else ee(C,D,N,S,Z,K,w)},ae=(D,N,S)=>{const ne=N.component=D.component;if(O0(D,N,S))if(ne.asyncDep&&!ne.asyncResolved){J(ne,N,S);return}else ne.next=N,ne.update();else N.el=D.el,ne.vnode=N},ee=(D,N,S,ne,Z,K,w)=>{const C=()=>{if(D.isMounted){let{next:b,bu:m,u:P,parent:V,vnode:j}=D;{const Ae=gm(D);if(Ae){b&&(b.el=j.el,J(D,b,w)),Ae.asyncDep.then(()=>{D.isUnmounted||C()});return}}let q=b,Se;sr(D,!1),b?(b.el=j.el,J(D,b,w)):b=j,m&&ul(m),(Se=b.props&&b.props.onVnodeBeforeUpdate)&&Gn(Se,V,b,j),sr(D,!0);const fe=kf(D),Ee=D.subTree;D.subTree=fe,x(Ee,fe,f(Ee.el),z(Ee),D,Z,K),b.el=fe.el,q===null&&B0(D,fe.el),P&&dn(P,Z),(Se=b.props&&b.props.onVnodeUpdated)&&dn(()=>Gn(Se,V,b,j),Z)}else{let b;const{el:m,props:P}=N,{bm:V,m:j,parent:q,root:Se,type:fe}=D,Ee=Ks(N);sr(D,!1),V&&ul(V),!Ee&&(b=P&&P.onVnodeBeforeMount)&&Gn(b,q,N),sr(D,!0);{Se.ce&&Se.ce._def.shadowRoot!==!1&&Se.ce._injectChildStyle(fe);const Ae=D.subTree=kf(D);x(null,Ae,S,ne,D,Z,K),N.el=Ae.el}if(j&&dn(j,Z),!Ee&&(b=P&&P.onVnodeMounted)){const Ae=N;dn(()=>Gn(b,q,Ae),Z)}(N.shapeFlag&256||q&&Ks(q.vnode)&&q.vnode.shapeFlag&256)&&D.a&&dn(D.a,Z),D.isMounted=!0,N=S=ne=null}};D.scope.on();const U=D.effect=new bp(C);D.scope.off();const k=D.update=U.run.bind(U),he=D.job=U.runIfDirty.bind(U);he.i=D,he.id=D.uid,U.scheduler=()=>Fu(he),sr(D,!0),k()},J=(D,N,S)=>{N.component=D;const ne=D.vnode.props;D.vnode=N,D.next=null,S0(D,N.props,ne,S),b0(D,N.children,S),Mi(),Cf(D),Ei()},$=(D,N,S,ne,Z,K,w,C,U=!1)=>{const k=D&&D.children,he=D?D.shapeFlag:0,b=N.children,{patchFlag:m,shapeFlag:P}=N;if(m>0){if(m&128){ve(k,b,S,ne,Z,K,w,C,U);return}else if(m&256){pe(k,b,S,ne,Z,K,w,C,U);return}}P&8?(he&16&&Me(k,Z,K),b!==k&&u(S,b)):he&16?P&16?ve(k,b,S,ne,Z,K,w,C,U):Me(k,Z,K,!0):(he&8&&u(S,""),P&16&&O(b,S,ne,Z,K,w,C,U))},pe=(D,N,S,ne,Z,K,w,C,U)=>{D=D||os,N=N||os;const k=D.length,he=N.length,b=Math.min(k,he);let m;for(m=0;m<b;m++){const P=N[m]=U?Oi(N[m]):$n(N[m]);x(D[m],P,S,null,Z,K,w,C,U)}k>he?Me(D,Z,K,!0,!1,b):O(N,S,ne,Z,K,w,C,U,b)},ve=(D,N,S,ne,Z,K,w,C,U)=>{let k=0;const he=N.length;let b=D.length-1,m=he-1;for(;k<=b&&k<=m;){const P=D[k],V=N[k]=U?Oi(N[k]):$n(N[k]);if(vr(P,V))x(P,V,S,null,Z,K,w,C,U);else break;k++}for(;k<=b&&k<=m;){const P=D[b],V=N[m]=U?Oi(N[m]):$n(N[m]);if(vr(P,V))x(P,V,S,null,Z,K,w,C,U);else break;b--,m--}if(k>b){if(k<=m){const P=m+1,V=P<he?N[P].el:ne;for(;k<=m;)x(null,N[k]=U?Oi(N[k]):$n(N[k]),S,V,Z,K,w,C,U),k++}}else if(k>m)for(;k<=b;)Fe(D[k],Z,K,!0),k++;else{const P=k,V=k,j=new Map;for(k=V;k<=m;k++){const Ie=N[k]=U?Oi(N[k]):$n(N[k]);Ie.key!=null&&j.set(Ie.key,k)}let q,Se=0;const fe=m-V+1;let Ee=!1,Ae=0;const ue=new Array(fe);for(k=0;k<fe;k++)ue[k]=0;for(k=P;k<=b;k++){const Ie=D[k];if(Se>=fe){Fe(Ie,Z,K,!0);continue}let De;if(Ie.key!=null)De=j.get(Ie.key);else for(q=V;q<=m;q++)if(ue[q-V]===0&&vr(Ie,N[q])){De=q;break}De===void 0?Fe(Ie,Z,K,!0):(ue[De-V]=k+1,De>=Ae?Ae=De:Ee=!0,x(Ie,N[De],S,null,Z,K,w,C,U),Se++)}const Re=Ee?R0(ue):os;for(q=Re.length-1,k=fe-1;k>=0;k--){const Ie=V+k,De=N[Ie],xe=N[Ie+1],ze=Ie+1<he?xe.el||xe.placeholder:ne;ue[k]===0?x(null,De,S,ze,Z,K,w,C,U):Ee&&(q<0||k!==Re[q]?we(De,S,ze,2):q--)}}},we=(D,N,S,ne,Z=null)=>{const{el:K,type:w,transition:C,children:U,shapeFlag:k}=D;if(k&6){we(D.component.subTree,N,S,ne);return}if(k&128){D.suspense.move(N,S,ne);return}if(k&64){w.move(D,N,S,oe);return}if(w===zt){i(K,N,S);for(let b=0;b<U.length;b++)we(U[b],N,S,ne);i(D.anchor,N,S);return}if(w===vl){M(D,N,S);return}if(ne!==2&&k&1&&C)if(ne===0)C.beforeEnter(K),i(K,N,S),dn(()=>C.enter(K),Z);else{const{leave:b,delayLeave:m,afterLeave:P}=C,V=()=>{D.ctx.isUnmounted?r(K):i(K,N,S)},j=()=>{K._isLeaving&&K[di](!0),b(K,()=>{V(),P&&P()})};m?m(K,V,j):j()}else i(K,N,S)},Fe=(D,N,S,ne=!1,Z=!1)=>{const{type:K,props:w,ref:C,children:U,dynamicChildren:k,shapeFlag:he,patchFlag:b,dirs:m,cacheIndex:P}=D;if(b===-2&&(Z=!1),C!=null&&(Mi(),js(C,null,S,D,!0),Ei()),P!=null&&(N.renderCache[P]=void 0),he&256){N.ctx.deactivate(D);return}const V=he&1&&m,j=!Ks(D);let q;if(j&&(q=w&&w.onVnodeBeforeUnmount)&&Gn(q,N,D),he&6)_e(D.component,S,ne);else{if(he&128){D.suspense.unmount(S,ne);return}V&&rr(D,null,N,"beforeUnmount"),he&64?D.type.remove(D,N,S,oe,ne):k&&!k.hasOnce&&(K!==zt||b>0&&b&64)?Me(k,N,S,!1,!0):(K===zt&&b&384||!Z&&he&16)&&Me(U,N,S),ne&&je(D)}(j&&(q=w&&w.onVnodeUnmounted)||V)&&dn(()=>{q&&Gn(q,N,D),V&&rr(D,null,N,"unmounted")},S)},je=D=>{const{type:N,el:S,anchor:ne,transition:Z}=D;if(N===zt){se(S,ne);return}if(N===vl){v(D);return}const K=()=>{r(S),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(D.shapeFlag&1&&Z&&!Z.persisted){const{leave:w,delayLeave:C}=Z,U=()=>w(S,K);C?C(D.el,K,U):U()}else K()},se=(D,N)=>{let S;for(;D!==N;)S=h(D),r(D),D=S;r(N)},_e=(D,N,S)=>{const{bum:ne,scope:Z,job:K,subTree:w,um:C,m:U,a:k}=D;Bf(U),Bf(k),ne&&ul(ne),Z.stop(),K&&(K.flags|=8,Fe(w,D,N,S)),C&&dn(C,N),dn(()=>{D.isUnmounted=!0},N)},Me=(D,N,S,ne=!1,Z=!1,K=0)=>{for(let w=K;w<D.length;w++)Fe(D[w],N,S,ne,Z)},z=D=>{if(D.shapeFlag&6)return z(D.component.subTree);if(D.shapeFlag&128)return D.suspense.next();const N=h(D.anchor||D.el),S=N&&N[q_];return S?h(S):N};let re=!1;const le=(D,N,S)=>{D==null?N._vnode&&Fe(N._vnode,null,null,!0):x(N._vnode||null,D,N,null,null,null,S),N._vnode=D,re||(re=!0,Cf(),Gp(),re=!1)},oe={p:x,um:Fe,m:we,r:je,mt:ie,mc:O,pc:$,pbc:T,n:z,o:t};return{render:le,hydrate:void 0,createApp:_0(le)}}function _l({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function A0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function mm(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=Oi(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&mm(a,o)),o.type===wa&&o.patchFlag!==-1&&(o.el=a.el),o.type===nn&&!o.el&&(o.el=a.el)}}function R0(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function gm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gm(e)}function Bf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const C0=Symbol.for("v-scx"),P0=()=>Bn(C0);function ku(t,e){return Hu(t,null,e)}function Si(t,e,n){return Hu(t,e,n)}function Hu(t,e,n=gt){const{immediate:i,deep:r,flush:s,once:a}=n,o=Bt({},n),l=e&&i||!e&&s!=="post";let c;if(ua){if(s==="sync"){const p=P0();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=Zn,p.resume=Zn,p.pause=Zn,p}}const u=jt;o.call=(p,_,x)=>zn(p,u,_,x);let f=!1;s==="post"?o.scheduler=p=>{dn(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,_)=>{_?p():Fu(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=W_(t,e,o);return ua&&(c?c.push(h):l&&h()),h}function L0(t,e,n){const i=this.proxy,r=Ct(t)?t.includes(".")?_m(i,t):()=>i[t]:t.bind(i,i);let s;Xe(e)?s=e:(s=e.handler,n=e);const a=Aa(this),o=Hu(r,s.bind(i),n);return a(),o}function _m(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const I0=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Tn(e)}Modifiers`]||t[`${Dr(e)}Modifiers`];function D0(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||gt;let r=n;const s=e.startsWith("update:"),a=s&&I0(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Ct(u)?u.trim():u)),a.number&&(r=n.map(l_)));let o,l=i[o=cl(e)]||i[o=cl(Tn(e))];!l&&s&&(l=i[o=cl(Dr(e))]),l&&zn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,zn(c,t,6,r)}}const N0=new WeakMap;function vm(t,e,n=!1){const i=n?N0:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!Xe(t)){const l=c=>{const u=vm(c,e,!0);u&&(o=!0,Bt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(St(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>a[l]=null):Bt(a,s),St(t)&&i.set(t,a),a)}function qo(t,e){return!t||!ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),ct(t,e[0].toLowerCase()+e.slice(1))||ct(t,Dr(e))||ct(t,e))}function kf(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:_,inheritAttrs:x}=t,g=Co(t);let d,y;try{if(n.shapeFlag&4){const v=r||i,I=v;d=$n(c.call(I,v,u,f,p,h,_)),y=o}else{const v=e;d=$n(v.length>1?v(f,{attrs:o,slots:a,emit:l}):v(f,null)),y=e.props?o:U0(o)}}catch(v){Js.length=0,Xo(v,t,1),d=et(nn)}let M=d;if(y&&x!==!1){const v=Object.keys(y),{shapeFlag:I}=M;v.length&&I&7&&(s&&v.some(yu)&&(y=F0(y,s)),M=Yi(M,y,!1,!0))}return n.dirs&&(M=Yi(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&la(M,n.transition),d=M,Co(g),d}const U0=t=>{let e;for(const n in t)(n==="class"||n==="style"||ko(n))&&((e||(e={}))[n]=t[n]);return e},F0=(t,e)=>{const n={};for(const i in t)(!yu(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function O0(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Hf(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!qo(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Hf(i,a,c):!0:!!a;return!1}function Hf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!qo(n,s))return!0}return!1}function B0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const xm=t=>t.__isSuspense;function k0(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):$_(t)}const zt=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),nn=Symbol.for("v-cmt"),vl=Symbol.for("v-stc"),Js=[];let pn=null;function ut(t=!1){Js.push(pn=t?null:[])}function H0(){Js.pop(),pn=Js[Js.length-1]||null}let ca=1;function Io(t,e=!1){ca+=t,t<0&&pn&&e&&(pn.hasOnce=!0)}function Sm(t){return t.dynamicChildren=ca>0?pn||os:null,H0(),ca>0&&pn&&pn.push(t),t}function xt(t,e,n,i,r,s){return Sm(Pt(t,e,n,i,r,s,!0))}function jo(t,e,n,i,r){return Sm(et(t,e,n,i,r,!0))}function Do(t){return t?t.__v_isVNode===!0:!1}function vr(t,e){return t.type===e.type&&t.key===e.key}const ym=({key:t})=>t??null,po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ct(t)||Rt(t)||Xe(t)?{i:Dn,r:t,k:e,f:!!n}:t:null);function Pt(t,e=null,n=null,i=0,r=null,s=t===zt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ym(e),ref:e&&po(e),scopeId:Xp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Dn};return o?(zu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Ct(n)?8:16),ca>0&&!a&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const et=z0;function z0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===o0)&&(t=nn),Do(t)){const o=Yi(t,e,!0);return n&&zu(o,n),ca>0&&!s&&pn&&(o.shapeFlag&6?pn[pn.indexOf(t)]=o:pn.push(o)),o.patchFlag=-2,o}if(Q0(t)&&(t=t.__vccOpts),e){e=V0(e);let{class:o,style:l}=e;o&&!Ct(o)&&(e.class=Rr(o)),St(l)&&(Iu(l)&&!He(l)&&(l=Bt({},l)),e.style=bu(l))}const a=Ct(t)?1:xm(t)?128:Yp(t)?64:St(t)?4:Xe(t)?2:0;return Pt(t,e,n,i,r,a,s,!0)}function V0(t){return t?Iu(t)||cm(t)?Bt({},t):t:null}function Yi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?W0(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ym(c),ref:e&&e.ref?n&&s?He(s)?s.concat(po(e)):[s,po(e)]:po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==zt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yi(t.ssContent),ssFallback:t.ssFallback&&Yi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&la(u,l.clone(u)),u}function G0(t=" ",e=0){return et(wa,null,t,e)}function Vt(t="",e=!1){return e?(ut(),jo(nn,null,t)):et(nn,null,t)}function $n(t){return t==null||typeof t=="boolean"?et(nn):He(t)?et(zt,null,t.slice()):Do(t)?Oi(t):et(wa,null,String(t))}function Oi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yi(t)}function zu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),zu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!cm(e)?e._ctx=Dn:r===3&&Dn&&(Dn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Xe(e)?(e={default:e,_ctx:Dn},n=32):(e=String(e),i&64?(n=16,e=[G0(e)]):n=8);t.children=e,t.shapeFlag|=n}function W0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Rr([e.class,i.class]));else if(r==="style")e.style=bu([e.style,i.style]);else if(ko(r)){const s=e[r],a=i[r];a&&s!==a&&!(He(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Gn(t,e,n,i=null){zn(t,e,7,[n,i])}const X0=am();let Y0=0;function $0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||X0,s={uid:Y0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fm(i,r),emitsOptions:vm(i,r),emit:null,emitted:null,propsDefaults:gt,inheritAttrs:i.inheritAttrs,ctx:gt,data:gt,props:gt,attrs:gt,slots:gt,refs:gt,setupState:gt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=D0.bind(null,s),t.ce&&t.ce(s),s}let jt=null;const bi=()=>jt||Dn;let No,_c;{const t=Go(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};No=e("__VUE_INSTANCE_SETTERS__",n=>jt=n),_c=e("__VUE_SSR_SETTERS__",n=>ua=n)}const Aa=t=>{const e=jt;return No(t),t.scope.on(),()=>{t.scope.off(),No(e)}},zf=()=>{jt&&jt.scope.off(),No(null)};function Mm(t){return t.vnode.shapeFlag&4}let ua=!1;function q0(t,e=!1,n=!1){e&&_c(e);const{props:i,children:r}=t.vnode,s=Mm(t);x0(t,i,s,e),E0(t,r,n||e);const a=s?j0(t,e):void 0;return e&&_c(!1),a}function j0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,u0);const{setup:i}=n;if(i){Mi();const r=t.setupContext=i.length>1?Z0(t):null,s=Aa(t),a=Ta(i,t,0,[t.props,r]),o=mp(a);if(Ei(),s(),(o||t.sp)&&!Ks(t)&&Jp(t),o){if(a.then(zf,zf),e)return a.then(l=>{Vf(t,l)}).catch(l=>{Xo(l,t,0)});t.asyncDep=a}else Vf(t,a)}else Em(t)}function Vf(t,e,n){Xe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:St(e)&&(t.setupState=Hp(e)),Em(t)}function Em(t,e,n){const i=t.type;t.render||(t.render=i.render||Zn);{const r=Aa(t);Mi();try{f0(t)}finally{Ei(),r()}}}const K0={get(t,e){return qt(t,"get",""),t[e]}};function Z0(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,K0),slots:t.slots,emit:t.emit,expose:e}}function Vu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Hp(Du(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Zs)return Zs[n](t)},has(e,n){return n in e||n in Zs}})):t.proxy}function J0(t,e=!0){return Xe(t)?t.displayName||t.name:t.name||e&&t.__name}function Q0(t){return Xe(t)&&"__vccOpts"in t}const Tt=(t,e)=>V_(t,e,ua);function Ra(t,e,n){try{Io(-1);const i=arguments.length;return i===2?St(e)&&!He(e)?Do(e)?et(t,null,[e]):et(t,e):et(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Do(n)&&(n=[n]),et(t,e,n))}finally{Io(1)}}const ev="3.5.22";/**
* @vue/runtime-dom v3.5.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vc;const Gf=typeof window<"u"&&window.trustedTypes;if(Gf)try{vc=Gf.createPolicy("vue",{createHTML:t=>t})}catch{}const bm=vc?t=>vc.createHTML(t):t=>t,tv="http://www.w3.org/2000/svg",nv="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,Wf=hi&&hi.createElement("template"),iv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?hi.createElementNS(tv,t):e==="mathml"?hi.createElementNS(nv,t):n?hi.createElement(t,{is:n}):hi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>hi.createTextNode(t),createComment:t=>hi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Wf.innerHTML=bm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=Wf.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ai="transition",Ds="animation",fa=Symbol("_vtc"),Tm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},rv=Bt({},$p,Tm),sv=t=>(t.displayName="Transition",t.props=rv,t),Uo=sv((t,{slots:e})=>Ra(Z_,av(t),e)),ar=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},Xf=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function av(t){const e={};for(const B in t)B in Tm||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,_=ov(r),x=_&&_[0],g=_&&_[1],{onBeforeEnter:d,onEnter:y,onEnterCancelled:M,onLeave:v,onLeaveCancelled:I,onBeforeAppear:L=d,onAppear:R=y,onAppearCancelled:O=M}=e,E=(B,W,ie,ae)=>{B._enterCancelled=ae,or(B,W?u:o),or(B,W?c:a),ie&&ie()},T=(B,W)=>{B._isLeaving=!1,or(B,f),or(B,p),or(B,h),W&&W()},F=B=>(W,ie)=>{const ae=B?R:y,ee=()=>E(W,B,ie);ar(ae,[W,ee]),Yf(()=>{or(W,B?l:s),ii(W,B?u:o),Xf(ae)||$f(W,i,x,ee)})};return Bt(e,{onBeforeEnter(B){ar(d,[B]),ii(B,s),ii(B,a)},onBeforeAppear(B){ar(L,[B]),ii(B,l),ii(B,c)},onEnter:F(!1),onAppear:F(!0),onLeave(B,W){B._isLeaving=!0;const ie=()=>T(B,W);ii(B,f),B._enterCancelled?(ii(B,h),Kf(B)):(Kf(B),ii(B,h)),Yf(()=>{B._isLeaving&&(or(B,f),ii(B,p),Xf(v)||$f(B,i,g,ie))}),ar(v,[B,ie])},onEnterCancelled(B){E(B,!1,void 0,!0),ar(M,[B])},onAppearCancelled(B){E(B,!0,void 0,!0),ar(O,[B])},onLeaveCancelled(B){T(B),ar(I,[B])}})}function ov(t){if(t==null)return null;if(St(t))return[xl(t.enter),xl(t.leave)];{const e=xl(t);return[e,e]}}function xl(t){return c_(t)}function ii(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fa]||(t[fa]=new Set)).add(e)}function or(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[fa];n&&(n.delete(e),n.size||(t[fa]=void 0))}function Yf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let lv=0;function $f(t,e,n,i){const r=t._endId=++lv,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=cv(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,h),s()},h=p=>{p.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,h)}function cv(t,e){const n=window.getComputedStyle(t),i=_=>(n[_]||"").split(", "),r=i(`${Ai}Delay`),s=i(`${Ai}Duration`),a=qf(r,s),o=i(`${Ds}Delay`),l=i(`${Ds}Duration`),c=qf(o,l);let u=null,f=0,h=0;e===Ai?a>0&&(u=Ai,f=a,h=s.length):e===Ds?c>0&&(u=Ds,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?Ai:Ds:null,h=u?u===Ai?s.length:l.length:0);const p=u===Ai&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ai}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function qf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>jf(n)+jf(t[i])))}function jf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Kf(t){return(t?t.ownerDocument:document).body.offsetHeight}function uv(t,e,n){const i=t[fa];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zf=Symbol("_vod"),fv=Symbol("_vsh"),hv=Symbol(""),dv=/(?:^|;)\s*display\s*:/;function pv(t,e,n){const i=t.style,r=Ct(n);let s=!1;if(n&&!r){if(e)if(Ct(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&mo(i,o,"")}else for(const a in e)n[a]==null&&mo(i,a,"");for(const a in n)a==="display"&&(s=!0),mo(i,a,n[a])}else if(r){if(e!==n){const a=i[hv];a&&(n+=";"+a),i.cssText=n,s=dv.test(n)}}else e&&t.removeAttribute("style");Zf in t&&(t[Zf]=s?i.display:"",t[fv]&&(i.display="none"))}const Jf=/\s*!important$/;function mo(t,e,n){if(He(n))n.forEach(i=>mo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=mv(t,e);Jf.test(n)?t.setProperty(Dr(i),n.replace(Jf,""),"important"):t[i]=n}}const Qf=["Webkit","Moz","ms"],Sl={};function mv(t,e){const n=Sl[e];if(n)return n;let i=Tn(e);if(i!=="filter"&&i in t)return Sl[e]=i;i=Vo(i);for(let r=0;r<Qf.length;r++){const s=Qf[r]+i;if(s in t)return Sl[e]=s}return e}const eh="http://www.w3.org/1999/xlink";function th(t,e,n,i,r,s=m_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(eh,e.slice(6,e.length)):t.setAttributeNS(eh,e,n):n==null||s&&!xp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Ki(n)?String(n):n)}function nh(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?bm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=xp(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function gv(t,e,n,i){t.addEventListener(e,n,i)}function _v(t,e,n,i){t.removeEventListener(e,n,i)}const ih=Symbol("_vei");function vv(t,e,n,i,r=null){const s=t[ih]||(t[ih]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=xv(e);if(i){const c=s[e]=Mv(i,r);gv(t,o,c,l)}else a&&(_v(t,o,a,l),s[e]=void 0)}}const rh=/(?:Once|Passive|Capture)$/;function xv(t){let e;if(rh.test(t)){e={};let i;for(;i=t.match(rh);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dr(t.slice(2)),e]}let yl=0;const Sv=Promise.resolve(),yv=()=>yl||(Sv.then(()=>yl=0),yl=Date.now());function Mv(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;zn(Ev(i,n.value),e,5,[i])};return n.value=t,n.attached=yv(),n}function Ev(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const sh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bv=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?uv(t,i,a):e==="style"?pv(t,n,i):ko(e)?yu(e)||vv(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tv(t,e,i,a))?(nh(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&th(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ct(i))?nh(t,Tn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),th(t,e,i,a))};function Tv(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&sh(e)&&Xe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return sh(e)&&Ct(n)?!1:e in t}const wv=Bt({patchProp:bv},iv);let ah;function Av(){return ah||(ah=T0(wv))}const Rv=((...t)=>{const e=Av().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Pv(i);if(!r)return;const s=e._component;!Xe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=n(r,!1,Cv(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Cv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Pv(t){return Ct(t)?document.querySelector(t):t}var go=(t=>(t.Auto="auto",t.Manual="manual",t))(go||{}),ns=(t=>(t.FadeIn="fadeIn",t.FadeOut="fadeOut",t.FadeLoop="fadeLoop",t))(ns||{});const Lv=cn({name:"animated-txt",props:{text:{type:String,default:""},duration:{type:Number,default:0},delay:{type:Number,default:0},stagger:{type:Number,default:0},animation:{type:String,default:ns.FadeIn},mode:{type:String,default:go.Auto}},setup(t,{expose:e}){const n=Tt(()=>{const l=t.text.split("");l[0]=l[0].toUpperCase();for(let c=0;c<t.text.length;c++)(l[c-1]===" "||l[c+1]==="'"||l[c-1]===" "&&l[c]==="i")&&(l[c]=l[c].toUpperCase());return l}),i=Hn([]);function r(l,c){l instanceof HTMLElement?i.value[c]=l:i.value[c]=null}const s=[{opacity:0},{opacity:1}],a=[{opacity:.6},{opacity:1},{opacity:.6}];function o(){let l,c,u=1;t.animation===ns.FadeIn?(c=s,l="normal"):t.animation===ns.FadeOut?(c=s,l="reverse"):t.animation===ns.FadeLoop&&(c=a,u=1/0),setTimeout(()=>{for(const[f,h]of i.value.entries())h&&h.animate(c,{duration:t.duration,delay:f*t.stagger,fill:"both",direction:l,easing:"linear",iterations:u})},t.delay)}return Nr(()=>{t.mode===go.Auto&&o()}),em(()=>{t.mode===go.Auto&&o()}),e({startAnimation:o}),{Animation:ns,chars:n,setCharRef:r}}}),Zi=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n};function Iv(t,e,n,i,r,s){return ut(),xt("div",null,[(ut(!0),xt(zt,null,c0(t.chars,(a,o)=>(ut(),xt("span",{class:Rr([{"o-0":t.animation===t.Animation.FadeIn},{"o-1":t.animation===t.Animation.FadeOut},"user-select-none"]),key:a+o,ref_for:!0,ref:l=>t.setCharRef(l,o)},ra(a),3))),128))])}const Ws=Zi(Lv,[["render",Iv]]);/*!
  * shared v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Dv(t,e){typeof console<"u"&&(console.warn("[intlify] "+t),e&&console.warn(e.stack))}const Fo=typeof window<"u",Ji=(t,e=!1)=>e?Symbol.for(t):Symbol(t),Nv=(t,e,n)=>Uv({l:t,k:e,s:n}),Uv=t=>JSON.stringify(t).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029").replace(/\u0027/g,"\\u0027"),It=t=>typeof t=="number"&&isFinite(t),Fv=t=>Gu(t)==="[object Date]",ps=t=>Gu(t)==="[object RegExp]",Ko=t=>Ke(t)&&Object.keys(t).length===0,Dt=Object.assign,Ov=Object.create,mt=(t=null)=>Ov(t);let oh;const yr=()=>oh||(oh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:mt());function lh(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/\//g,"&#x2F;").replace(/=/g,"&#x3D;")}function ch(t){return t.replace(/&(?![a-zA-Z0-9#]{2,6};)/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&apos;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Bv(t){return t=t.replace(/(\w+)\s*=\s*"([^"]*)"/g,(i,r,s)=>`${r}="${ch(s)}"`),t=t.replace(/(\w+)\s*=\s*'([^']*)'/g,(i,r,s)=>`${r}='${ch(s)}'`),/\s*on\w+\s*=\s*["']?[^"'>]+["']?/gi.test(t)&&(t=t.replace(/(\s+)(on)(\w+\s*=)/gi,"$1&#111;n$3")),[/(\s+(?:href|src|action|formaction)\s*=\s*["']?)\s*javascript:/gi,/(style\s*=\s*["'][^"']*url\s*\(\s*)javascript:/gi].forEach(i=>{t=t.replace(i,"$1javascript&#58;")}),t}const kv=Object.prototype.hasOwnProperty;function Nn(t,e){return kv.call(t,e)}const At=Array.isArray,Mt=t=>typeof t=="function",Ce=t=>typeof t=="string",rt=t=>typeof t=="boolean",st=t=>t!==null&&typeof t=="object",Hv=t=>st(t)&&Mt(t.then)&&Mt(t.catch),wm=Object.prototype.toString,Gu=t=>wm.call(t),Ke=t=>Gu(t)==="[object Object]",zv=t=>t==null?"":At(t)||Ke(t)&&t.toString===wm?JSON.stringify(t,null,2):String(t);function Wu(t,e=""){return t.reduce((n,i,r)=>r===0?n+i:n+e+i,"")}const ka=t=>!st(t)||At(t);function _o(t,e){if(ka(t)||ka(e))throw new Error("Invalid value");const n=[{src:t,des:e}];for(;n.length;){const{src:i,des:r}=n.pop();Object.keys(i).forEach(s=>{s!=="__proto__"&&(st(i[s])&&!st(r[s])&&(r[s]=Array.isArray(i[s])?[]:mt()),ka(r[s])||ka(i[s])?r[s]=i[s]:n.push({src:i[s],des:r[s]}))})}}/*!
  * message-compiler v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function Vv(t,e,n){return{line:t,column:e,offset:n}}function xc(t,e,n){return{start:t,end:e}}const lt={EXPECTED_TOKEN:1,INVALID_TOKEN_IN_PLACEHOLDER:2,UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER:3,UNKNOWN_ESCAPE_SEQUENCE:4,INVALID_UNICODE_ESCAPE_SEQUENCE:5,UNBALANCED_CLOSING_BRACE:6,UNTERMINATED_CLOSING_BRACE:7,EMPTY_PLACEHOLDER:8,NOT_ALLOW_NEST_PLACEHOLDER:9,INVALID_LINKED_FORMAT:10,MUST_HAVE_MESSAGES_IN_PLURAL:11,UNEXPECTED_EMPTY_LINKED_MODIFIER:12,UNEXPECTED_EMPTY_LINKED_KEY:13,UNEXPECTED_LEXICAL_ANALYSIS:14},Gv=17;function Zo(t,e,n={}){const{domain:i,messages:r,args:s}=n,a=t,o=new SyntaxError(String(a));return o.code=t,e&&(o.location=e),o.domain=i,o}function Wv(t){throw t}const Wn=" ",Xv="\r",Yt=`
`,Yv="\u2028",$v="\u2029";function qv(t){const e=t;let n=0,i=1,r=1,s=0;const a=R=>e[R]===Xv&&e[R+1]===Yt,o=R=>e[R]===Yt,l=R=>e[R]===$v,c=R=>e[R]===Yv,u=R=>a(R)||o(R)||l(R)||c(R),f=()=>n,h=()=>i,p=()=>r,_=()=>s,x=R=>a(R)||l(R)||c(R)?Yt:e[R],g=()=>x(n),d=()=>x(n+s);function y(){return s=0,u(n)&&(i++,r=0),a(n)&&n++,n++,r++,e[n]}function M(){return a(n+s)&&s++,s++,e[n+s]}function v(){n=0,i=1,r=1,s=0}function I(R=0){s=R}function L(){const R=n+s;for(;R!==n;)y();s=0}return{index:f,line:h,column:p,peekOffset:_,charAt:x,currentChar:g,currentPeek:d,next:y,peek:M,reset:v,resetPeek:I,skipToPeek:L}}const ri=void 0,jv=".",uh="'",Kv="tokenizer";function Zv(t,e={}){const n=e.location!==!1,i=qv(t),r=()=>i.index(),s=()=>Vv(i.line(),i.column(),i.index()),a=s(),o=r(),l={currentType:13,offset:o,startLoc:a,endLoc:a,lastType:13,lastOffset:o,lastStartLoc:a,lastEndLoc:a,braceNest:0,inLinked:!1,text:""},c=()=>l,{onError:u}=e;function f(w,C,U,...k){const he=c();if(C.column+=U,C.offset+=U,u){const b=n?xc(he.startLoc,C):null,m=Zo(w,b,{domain:Kv,args:k});u(m)}}function h(w,C,U){w.endLoc=s(),w.currentType=C;const k={type:C};return n&&(k.loc=xc(w.startLoc,w.endLoc)),U!=null&&(k.value=U),k}const p=w=>h(w,13);function _(w,C){return w.currentChar()===C?(w.next(),C):(f(lt.EXPECTED_TOKEN,s(),0,C),"")}function x(w){let C="";for(;w.currentPeek()===Wn||w.currentPeek()===Yt;)C+=w.currentPeek(),w.peek();return C}function g(w){const C=x(w);return w.skipToPeek(),C}function d(w){if(w===ri)return!1;const C=w.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C===95}function y(w){if(w===ri)return!1;const C=w.charCodeAt(0);return C>=48&&C<=57}function M(w,C){const{currentType:U}=C;if(U!==2)return!1;x(w);const k=d(w.currentPeek());return w.resetPeek(),k}function v(w,C){const{currentType:U}=C;if(U!==2)return!1;x(w);const k=w.currentPeek()==="-"?w.peek():w.currentPeek(),he=y(k);return w.resetPeek(),he}function I(w,C){const{currentType:U}=C;if(U!==2)return!1;x(w);const k=w.currentPeek()===uh;return w.resetPeek(),k}function L(w,C){const{currentType:U}=C;if(U!==7)return!1;x(w);const k=w.currentPeek()===".";return w.resetPeek(),k}function R(w,C){const{currentType:U}=C;if(U!==8)return!1;x(w);const k=d(w.currentPeek());return w.resetPeek(),k}function O(w,C){const{currentType:U}=C;if(!(U===7||U===11))return!1;x(w);const k=w.currentPeek()===":";return w.resetPeek(),k}function E(w,C){const{currentType:U}=C;if(U!==9)return!1;const k=()=>{const b=w.currentPeek();return b==="{"?d(w.peek()):b==="@"||b==="|"||b===":"||b==="."||b===Wn||!b?!1:b===Yt?(w.peek(),k()):F(w,!1)},he=k();return w.resetPeek(),he}function T(w){x(w);const C=w.currentPeek()==="|";return w.resetPeek(),C}function F(w,C=!0){const U=(he=!1,b="")=>{const m=w.currentPeek();return m==="{"||m==="@"||!m?he:m==="|"?!(b===Wn||b===Yt):m===Wn?(w.peek(),U(!0,Wn)):m===Yt?(w.peek(),U(!0,Yt)):!0},k=U();return C&&w.resetPeek(),k}function B(w,C){const U=w.currentChar();return U===ri?ri:C(U)?(w.next(),U):null}function W(w){const C=w.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36}function ie(w){return B(w,W)}function ae(w){const C=w.charCodeAt(0);return C>=97&&C<=122||C>=65&&C<=90||C>=48&&C<=57||C===95||C===36||C===45}function ee(w){return B(w,ae)}function J(w){const C=w.charCodeAt(0);return C>=48&&C<=57}function $(w){return B(w,J)}function pe(w){const C=w.charCodeAt(0);return C>=48&&C<=57||C>=65&&C<=70||C>=97&&C<=102}function ve(w){return B(w,pe)}function we(w){let C="",U="";for(;C=$(w);)U+=C;return U}function Fe(w){let C="";for(;;){const U=w.currentChar();if(U==="{"||U==="}"||U==="@"||U==="|"||!U)break;if(U===Wn||U===Yt)if(F(w))C+=U,w.next();else{if(T(w))break;C+=U,w.next()}else C+=U,w.next()}return C}function je(w){g(w);let C="",U="";for(;C=ee(w);)U+=C;const k=w.currentChar();if(k&&k!=="}"&&k!==ri&&k!==Wn&&k!==Yt&&k!=="　"){const he=oe(w);return f(lt.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,U+he),U+he}return w.currentChar()===ri&&f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),U}function se(w){g(w);let C="";return w.currentChar()==="-"?(w.next(),C+=`-${we(w)}`):C+=we(w),w.currentChar()===ri&&f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),C}function _e(w){return w!==uh&&w!==Yt}function Me(w){g(w),_(w,"'");let C="",U="";for(;C=B(w,_e);)C==="\\"?U+=z(w):U+=C;const k=w.currentChar();return k===Yt||k===ri?(f(lt.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER,s(),0),k===Yt&&(w.next(),_(w,"'")),U):(_(w,"'"),U)}function z(w){const C=w.currentChar();switch(C){case"\\":case"'":return w.next(),`\\${C}`;case"u":return re(w,C,4);case"U":return re(w,C,6);default:return f(lt.UNKNOWN_ESCAPE_SEQUENCE,s(),0,C),""}}function re(w,C,U){_(w,C);let k="";for(let he=0;he<U;he++){const b=ve(w);if(!b){f(lt.INVALID_UNICODE_ESCAPE_SEQUENCE,s(),0,`\\${C}${k}${w.currentChar()}`);break}k+=b}return`\\${C}${k}`}function le(w){return w!=="{"&&w!=="}"&&w!==Wn&&w!==Yt}function oe(w){g(w);let C="",U="";for(;C=B(w,le);)U+=C;return U}function Oe(w){let C="",U="";for(;C=ie(w);)U+=C;return U}function D(w){const C=U=>{const k=w.currentChar();return k==="{"||k==="@"||k==="|"||k==="("||k===")"||!k||k===Wn?U:(U+=k,w.next(),C(U))};return C("")}function N(w){g(w);const C=_(w,"|");return g(w),C}function S(w,C){let U=null;switch(w.currentChar()){case"{":return C.braceNest>=1&&f(lt.NOT_ALLOW_NEST_PLACEHOLDER,s(),0),w.next(),U=h(C,2,"{"),g(w),C.braceNest++,U;case"}":return C.braceNest>0&&C.currentType===2&&f(lt.EMPTY_PLACEHOLDER,s(),0),w.next(),U=h(C,3,"}"),C.braceNest--,C.braceNest>0&&g(w),C.inLinked&&C.braceNest===0&&(C.inLinked=!1),U;case"@":return C.braceNest>0&&f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),U=ne(w,C)||p(C),C.braceNest=0,U;default:{let he=!0,b=!0,m=!0;if(T(w))return C.braceNest>0&&f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),U=h(C,1,N(w)),C.braceNest=0,C.inLinked=!1,U;if(C.braceNest>0&&(C.currentType===4||C.currentType===5||C.currentType===6))return f(lt.UNTERMINATED_CLOSING_BRACE,s(),0),C.braceNest=0,Z(w,C);if(he=M(w,C))return U=h(C,4,je(w)),g(w),U;if(b=v(w,C))return U=h(C,5,se(w)),g(w),U;if(m=I(w,C))return U=h(C,6,Me(w)),g(w),U;if(!he&&!b&&!m)return U=h(C,12,oe(w)),f(lt.INVALID_TOKEN_IN_PLACEHOLDER,s(),0,U.value),g(w),U;break}}return U}function ne(w,C){const{currentType:U}=C;let k=null;const he=w.currentChar();switch((U===7||U===8||U===11||U===9)&&(he===Yt||he===Wn)&&f(lt.INVALID_LINKED_FORMAT,s(),0),he){case"@":return w.next(),k=h(C,7,"@"),C.inLinked=!0,k;case".":return g(w),w.next(),h(C,8,".");case":":return g(w),w.next(),h(C,9,":");default:return T(w)?(k=h(C,1,N(w)),C.braceNest=0,C.inLinked=!1,k):L(w,C)||O(w,C)?(g(w),ne(w,C)):R(w,C)?(g(w),h(C,11,Oe(w))):E(w,C)?(g(w),he==="{"?S(w,C)||k:h(C,10,D(w))):(U===7&&f(lt.INVALID_LINKED_FORMAT,s(),0),C.braceNest=0,C.inLinked=!1,Z(w,C))}}function Z(w,C){let U={type:13};if(C.braceNest>0)return S(w,C)||p(C);if(C.inLinked)return ne(w,C)||p(C);switch(w.currentChar()){case"{":return S(w,C)||p(C);case"}":return f(lt.UNBALANCED_CLOSING_BRACE,s(),0),w.next(),h(C,3,"}");case"@":return ne(w,C)||p(C);default:{if(T(w))return U=h(C,1,N(w)),C.braceNest=0,C.inLinked=!1,U;if(F(w))return h(C,0,Fe(w));break}}return U}function K(){const{currentType:w,offset:C,startLoc:U,endLoc:k}=l;return l.lastType=w,l.lastOffset=C,l.lastStartLoc=U,l.lastEndLoc=k,l.offset=r(),l.startLoc=s(),i.currentChar()===ri?h(l,13):Z(i,l)}return{nextToken:K,currentOffset:r,currentPosition:s,context:c}}const Jv="parser",Qv=/(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;function ex(t,e,n){switch(t){case"\\\\":return"\\";case"\\'":return"'";default:{const i=parseInt(e||n,16);return i<=55295||i>=57344?String.fromCodePoint(i):"�"}}}function tx(t={}){const e=t.location!==!1,{onError:n}=t;function i(d,y,M,v,...I){const L=d.currentPosition();if(L.offset+=v,L.column+=v,n){const R=e?xc(M,L):null,O=Zo(y,R,{domain:Jv,args:I});n(O)}}function r(d,y,M){const v={type:d};return e&&(v.start=y,v.end=y,v.loc={start:M,end:M}),v}function s(d,y,M,v){e&&(d.end=y,d.loc&&(d.loc.end=M))}function a(d,y){const M=d.context(),v=r(3,M.offset,M.startLoc);return v.value=y,s(v,d.currentOffset(),d.currentPosition()),v}function o(d,y){const M=d.context(),{lastOffset:v,lastStartLoc:I}=M,L=r(5,v,I);return L.index=parseInt(y,10),d.nextToken(),s(L,d.currentOffset(),d.currentPosition()),L}function l(d,y){const M=d.context(),{lastOffset:v,lastStartLoc:I}=M,L=r(4,v,I);return L.key=y,d.nextToken(),s(L,d.currentOffset(),d.currentPosition()),L}function c(d,y){const M=d.context(),{lastOffset:v,lastStartLoc:I}=M,L=r(9,v,I);return L.value=y.replace(Qv,ex),d.nextToken(),s(L,d.currentOffset(),d.currentPosition()),L}function u(d){const y=d.nextToken(),M=d.context(),{lastOffset:v,lastStartLoc:I}=M,L=r(8,v,I);return y.type!==11?(i(d,lt.UNEXPECTED_EMPTY_LINKED_MODIFIER,M.lastStartLoc,0),L.value="",s(L,v,I),{nextConsumeToken:y,node:L}):(y.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,Xn(y)),L.value=y.value||"",s(L,d.currentOffset(),d.currentPosition()),{node:L})}function f(d,y){const M=d.context(),v=r(7,M.offset,M.startLoc);return v.value=y,s(v,d.currentOffset(),d.currentPosition()),v}function h(d){const y=d.context(),M=r(6,y.offset,y.startLoc);let v=d.nextToken();if(v.type===8){const I=u(d);M.modifier=I.node,v=I.nextConsumeToken||d.nextToken()}switch(v.type!==9&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Xn(v)),v=d.nextToken(),v.type===2&&(v=d.nextToken()),v.type){case 10:v.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Xn(v)),M.key=f(d,v.value||"");break;case 4:v.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Xn(v)),M.key=l(d,v.value||"");break;case 5:v.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Xn(v)),M.key=o(d,v.value||"");break;case 6:v.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Xn(v)),M.key=c(d,v.value||"");break;default:{i(d,lt.UNEXPECTED_EMPTY_LINKED_KEY,y.lastStartLoc,0);const I=d.context(),L=r(7,I.offset,I.startLoc);return L.value="",s(L,I.offset,I.startLoc),M.key=L,s(M,I.offset,I.startLoc),{nextConsumeToken:v,node:M}}}return s(M,d.currentOffset(),d.currentPosition()),{node:M}}function p(d){const y=d.context(),M=y.currentType===1?d.currentOffset():y.offset,v=y.currentType===1?y.endLoc:y.startLoc,I=r(2,M,v);I.items=[];let L=null;do{const E=L||d.nextToken();switch(L=null,E.type){case 0:E.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Xn(E)),I.items.push(a(d,E.value||""));break;case 5:E.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Xn(E)),I.items.push(o(d,E.value||""));break;case 4:E.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Xn(E)),I.items.push(l(d,E.value||""));break;case 6:E.value==null&&i(d,lt.UNEXPECTED_LEXICAL_ANALYSIS,y.lastStartLoc,0,Xn(E)),I.items.push(c(d,E.value||""));break;case 7:{const T=h(d);I.items.push(T.node),L=T.nextConsumeToken||null;break}}}while(y.currentType!==13&&y.currentType!==1);const R=y.currentType===1?y.lastOffset:d.currentOffset(),O=y.currentType===1?y.lastEndLoc:d.currentPosition();return s(I,R,O),I}function _(d,y,M,v){const I=d.context();let L=v.items.length===0;const R=r(1,y,M);R.cases=[],R.cases.push(v);do{const O=p(d);L||(L=O.items.length===0),R.cases.push(O)}while(I.currentType!==13);return L&&i(d,lt.MUST_HAVE_MESSAGES_IN_PLURAL,M,0),s(R,d.currentOffset(),d.currentPosition()),R}function x(d){const y=d.context(),{offset:M,startLoc:v}=y,I=p(d);return y.currentType===13?I:_(d,M,v,I)}function g(d){const y=Zv(d,Dt({},t)),M=y.context(),v=r(0,M.offset,M.startLoc);return e&&v.loc&&(v.loc.source=d),v.body=x(y),t.onCacheKey&&(v.cacheKey=t.onCacheKey(d)),M.currentType!==13&&i(y,lt.UNEXPECTED_LEXICAL_ANALYSIS,M.lastStartLoc,0,d[M.offset]||""),s(v,y.currentOffset(),y.currentPosition()),v}return{parse:g}}function Xn(t){if(t.type===13)return"EOF";const e=(t.value||"").replace(/\r?\n/gu,"\\n");return e.length>10?e.slice(0,9)+"…":e}function nx(t,e={}){const n={ast:t,helpers:new Set};return{context:()=>n,helper:s=>(n.helpers.add(s),s)}}function fh(t,e){for(let n=0;n<t.length;n++)Xu(t[n],e)}function Xu(t,e){switch(t.type){case 1:fh(t.cases,e),e.helper("plural");break;case 2:fh(t.items,e);break;case 6:{Xu(t.key,e),e.helper("linked"),e.helper("type");break}case 5:e.helper("interpolate"),e.helper("list");break;case 4:e.helper("interpolate"),e.helper("named");break}}function ix(t,e={}){const n=nx(t);n.helper("normalize"),t.body&&Xu(t.body,n);const i=n.context();t.helpers=Array.from(i.helpers)}function rx(t){const e=t.body;return e.type===2?hh(e):e.cases.forEach(n=>hh(n)),t}function hh(t){if(t.items.length===1){const e=t.items[0];(e.type===3||e.type===9)&&(t.static=e.value,delete e.value)}else{const e=[];for(let n=0;n<t.items.length;n++){const i=t.items[n];if(!(i.type===3||i.type===9)||i.value==null)break;e.push(i.value)}if(e.length===t.items.length){t.static=Wu(e);for(let n=0;n<t.items.length;n++){const i=t.items[n];(i.type===3||i.type===9)&&delete i.value}}}}function is(t){switch(t.t=t.type,t.type){case 0:{const e=t;is(e.body),e.b=e.body,delete e.body;break}case 1:{const e=t,n=e.cases;for(let i=0;i<n.length;i++)is(n[i]);e.c=n,delete e.cases;break}case 2:{const e=t,n=e.items;for(let i=0;i<n.length;i++)is(n[i]);e.i=n,delete e.items,e.static&&(e.s=e.static,delete e.static);break}case 3:case 9:case 8:case 7:{const e=t;e.value&&(e.v=e.value,delete e.value);break}case 6:{const e=t;is(e.key),e.k=e.key,delete e.key,e.modifier&&(is(e.modifier),e.m=e.modifier,delete e.modifier);break}case 5:{const e=t;e.i=e.index,delete e.index;break}case 4:{const e=t;e.k=e.key,delete e.key;break}}delete t.type}function sx(t,e){const{filename:n,breakLineCode:i,needIndent:r}=e,s=e.location!==!1,a={filename:n,code:"",column:1,line:1,offset:0,map:void 0,breakLineCode:i,needIndent:r,indentLevel:0};s&&t.loc&&(a.source=t.loc.source);const o=()=>a;function l(x,g){a.code+=x}function c(x,g=!0){const d=g?i:"";l(r?d+"  ".repeat(x):d)}function u(x=!0){const g=++a.indentLevel;x&&c(g)}function f(x=!0){const g=--a.indentLevel;x&&c(g)}function h(){c(a.indentLevel)}return{context:o,push:l,indent:u,deindent:f,newline:h,helper:x=>`_${x}`,needIndent:()=>a.needIndent}}function ax(t,e){const{helper:n}=t;t.push(`${n("linked")}(`),ms(t,e.key),e.modifier?(t.push(", "),ms(t,e.modifier),t.push(", _type")):t.push(", undefined, _type"),t.push(")")}function ox(t,e){const{helper:n,needIndent:i}=t;t.push(`${n("normalize")}([`),t.indent(i());const r=e.items.length;for(let s=0;s<r&&(ms(t,e.items[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}function lx(t,e){const{helper:n,needIndent:i}=t;if(e.cases.length>1){t.push(`${n("plural")}([`),t.indent(i());const r=e.cases.length;for(let s=0;s<r&&(ms(t,e.cases[s]),s!==r-1);s++)t.push(", ");t.deindent(i()),t.push("])")}}function cx(t,e){e.body?ms(t,e.body):t.push("null")}function ms(t,e){const{helper:n}=t;switch(e.type){case 0:cx(t,e);break;case 1:lx(t,e);break;case 2:ox(t,e);break;case 6:ax(t,e);break;case 8:t.push(JSON.stringify(e.value),e);break;case 7:t.push(JSON.stringify(e.value),e);break;case 5:t.push(`${n("interpolate")}(${n("list")}(${e.index}))`,e);break;case 4:t.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(e.key)}))`,e);break;case 9:t.push(JSON.stringify(e.value),e);break;case 3:t.push(JSON.stringify(e.value),e);break}}const ux=(t,e={})=>{const n=Ce(e.mode)?e.mode:"normal",i=Ce(e.filename)?e.filename:"message.intl";e.sourceMap;const r=e.breakLineCode!=null?e.breakLineCode:n==="arrow"?";":`
`,s=e.needIndent?e.needIndent:n!=="arrow",a=t.helpers||[],o=sx(t,{filename:i,breakLineCode:r,needIndent:s});o.push(n==="normal"?"function __msg__ (ctx) {":"(ctx) => {"),o.indent(s),a.length>0&&(o.push(`const { ${Wu(a.map(u=>`${u}: _${u}`),", ")} } = ctx`),o.newline()),o.push("return "),ms(o,t),o.deindent(s),o.push("}"),delete t.helpers;const{code:l,map:c}=o.context();return{ast:t,code:l,map:c?c.toJSON():void 0}};function fx(t,e={}){const n=Dt({},e),i=!!n.jit,r=!!n.minify,s=n.optimize==null?!0:n.optimize,o=tx(n).parse(t);return i?(s&&rx(o),r&&is(o),{ast:o,code:""}):(ix(o,n),ux(o,n))}/*!
  * core-base v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */function hx(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(yr().__INTLIFY_PROD_DEVTOOLS__=!1),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(yr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1)}function Jn(t){return st(t)&&Yu(t)===0&&(Nn(t,"b")||Nn(t,"body"))}const Am=["b","body"];function dx(t){return Qi(t,Am)}const Rm=["c","cases"];function px(t){return Qi(t,Rm,[])}const Cm=["s","static"];function mx(t){return Qi(t,Cm)}const Pm=["i","items"];function gx(t){return Qi(t,Pm,[])}const Lm=["t","type"];function Yu(t){return Qi(t,Lm)}const Im=["v","value"];function Ha(t,e){const n=Qi(t,Im);if(n!=null)return n;throw ha(e)}const Dm=["m","modifier"];function _x(t){return Qi(t,Dm)}const Nm=["k","key"];function vx(t){const e=Qi(t,Nm);if(e)return e;throw ha(6)}function Qi(t,e,n){for(let i=0;i<e.length;i++){const r=e[i];if(Nn(t,r)&&t[r]!=null)return t[r]}return n}const Um=[...Am,...Rm,...Cm,...Pm,...Nm,...Dm,...Im,...Lm];function ha(t){return new Error(`unhandled node type: ${t}`)}function Ml(t){return n=>xx(n,t)}function xx(t,e){const n=dx(e);if(n==null)throw ha(0);if(Yu(n)===1){const s=px(n);return t.plural(s.reduce((a,o)=>[...a,dh(t,o)],[]))}else return dh(t,n)}function dh(t,e){const n=mx(e);if(n!=null)return t.type==="text"?n:t.normalize([n]);{const i=gx(e).reduce((r,s)=>[...r,Sc(t,s)],[]);return t.normalize(i)}}function Sc(t,e){const n=Yu(e);switch(n){case 3:return Ha(e,n);case 9:return Ha(e,n);case 4:{const i=e;if(Nn(i,"k")&&i.k)return t.interpolate(t.named(i.k));if(Nn(i,"key")&&i.key)return t.interpolate(t.named(i.key));throw ha(n)}case 5:{const i=e;if(Nn(i,"i")&&It(i.i))return t.interpolate(t.list(i.i));if(Nn(i,"index")&&It(i.index))return t.interpolate(t.list(i.index));throw ha(n)}case 6:{const i=e,r=_x(i),s=vx(i);return t.linked(Sc(t,s),r?Sc(t,r):void 0,t.type)}case 7:return Ha(e,n);case 8:return Ha(e,n);default:throw new Error(`unhandled node on format message part: ${n}`)}}const Sx=t=>t;let za=mt();function yx(t,e={}){let n=!1;const i=e.onError||Wv;return e.onError=r=>{n=!0,i(r)},{...fx(t,e),detectError:n}}function Mx(t,e){if(!__INTLIFY_DROP_MESSAGE_COMPILER__&&Ce(t)){rt(e.warnHtmlMessage)&&e.warnHtmlMessage;const i=(e.onCacheKey||Sx)(t),r=za[i];if(r)return r;const{ast:s,detectError:a}=yx(t,{...e,location:!1,jit:!0}),o=Ml(s);return a?o:za[i]=o}else{const n=t.cacheKey;if(n){const i=za[n];return i||(za[n]=Ml(t))}else return Ml(t)}}let da=null;function Ex(t){da=t}function bx(t,e,n){da&&da.emit("i18n:init",{timestamp:Date.now(),i18n:t,version:e,meta:n})}const Tx=wx("function:translate");function wx(t){return e=>da&&da.emit(t,e)}const gi={INVALID_ARGUMENT:Gv,INVALID_DATE_ARGUMENT:18,INVALID_ISO_DATE_ARGUMENT:19,NOT_SUPPORT_LOCALE_PROMISE_VALUE:21,NOT_SUPPORT_LOCALE_ASYNC_FUNCTION:22,NOT_SUPPORT_LOCALE_TYPE:23},Ax=24;function _i(t){return Zo(t,null,void 0)}function $u(t,e){return e.locale!=null?ph(e.locale):ph(t.locale)}let El;function ph(t){if(Ce(t))return t;if(Mt(t)){if(t.resolvedOnce&&El!=null)return El;if(t.constructor.name==="Function"){const e=t();if(Hv(e))throw _i(gi.NOT_SUPPORT_LOCALE_PROMISE_VALUE);return El=e}else throw _i(gi.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION)}else throw _i(gi.NOT_SUPPORT_LOCALE_TYPE)}function Rx(t,e,n){return[...new Set([n,...At(e)?e:st(e)?Object.keys(e):Ce(e)?[e]:[n]])]}function Fm(t,e,n){const i=Ce(n)?n:pa,r=t;r.__localeChainCache||(r.__localeChainCache=new Map);let s=r.__localeChainCache.get(i);if(!s){s=[];let a=[n];for(;At(a);)a=mh(s,a,e);const o=At(e)||!Ke(e)?e:e.default?e.default:null;a=Ce(o)?[o]:o,At(a)&&mh(s,a,!1),r.__localeChainCache.set(i,s)}return s}function mh(t,e,n){let i=!0;for(let r=0;r<e.length&&rt(i);r++){const s=e[r];Ce(s)&&(i=Cx(t,e[r],n))}return i}function Cx(t,e,n){let i;const r=e.split("-");do{const s=r.join("-");i=Px(t,s,n),r.splice(-1,1)}while(r.length&&i===!0);return i}function Px(t,e,n){let i=!1;if(!t.includes(e)&&(i=!0,e)){i=e[e.length-1]!=="!";const r=e.replace(/!/g,"");t.push(r),(At(n)||Ke(n))&&n[r]&&(i=n[r])}return i}const er=[];er[0]={w:[0],i:[3,0],"[":[4],o:[7]};er[1]={w:[1],".":[2],"[":[4],o:[7]};er[2]={w:[2],i:[3,0],0:[3,0]};er[3]={i:[3,0],0:[3,0],w:[1,1],".":[2,1],"[":[4,1],o:[7,1]};er[4]={"'":[5,0],'"':[6,0],"[":[4,2],"]":[1,3],o:8,l:[4,0]};er[5]={"'":[4,0],o:8,l:[5,0]};er[6]={'"':[4,0],o:8,l:[6,0]};const Lx=/^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;function Ix(t){return Lx.test(t)}function Dx(t){const e=t.charCodeAt(0),n=t.charCodeAt(t.length-1);return e===n&&(e===34||e===39)?t.slice(1,-1):t}function Nx(t){if(t==null)return"o";switch(t.charCodeAt(0)){case 91:case 93:case 46:case 34:case 39:return t;case 95:case 36:case 45:return"i";case 9:case 10:case 13:case 160:case 65279:case 8232:case 8233:return"w"}return"i"}function Ux(t){const e=t.trim();return t.charAt(0)==="0"&&isNaN(parseInt(t))?!1:Ix(e)?Dx(e):"*"+e}function Fx(t){const e=[];let n=-1,i=0,r=0,s,a,o,l,c,u,f;const h=[];h[0]=()=>{a===void 0?a=o:a+=o},h[1]=()=>{a!==void 0&&(e.push(a),a=void 0)},h[2]=()=>{h[0](),r++},h[3]=()=>{if(r>0)r--,i=4,h[0]();else{if(r=0,a===void 0||(a=Ux(a),a===!1))return!1;h[1]()}};function p(){const _=t[n+1];if(i===5&&_==="'"||i===6&&_==='"')return n++,o="\\"+_,h[0](),!0}for(;i!==null;)if(n++,s=t[n],!(s==="\\"&&p())){if(l=Nx(s),f=er[i],c=f[l]||f.l||8,c===8||(i=c[0],c[1]!==void 0&&(u=h[c[1]],u&&(o=s,u()===!1))))return;if(i===7)return e}}const gh=new Map;function Ox(t,e){return st(t)?t[e]:null}function Bx(t,e){if(!st(t))return null;let n=gh.get(e);if(n||(n=Fx(e),n&&gh.set(e,n)),!n)return null;const i=n.length;let r=t,s=0;for(;s<i;){const a=n[s];if(Um.includes(a)&&Jn(r))return null;const o=r[a];if(o===void 0||Mt(r))return null;r=o,s++}return r}const kx="11.1.12",Jo=-1,pa="en-US",_h="",vh=t=>`${t.charAt(0).toLocaleUpperCase()}${t.substr(1)}`;function Hx(){return{upper:(t,e)=>e==="text"&&Ce(t)?t.toUpperCase():e==="vnode"&&st(t)&&"__v_isVNode"in t?t.children.toUpperCase():t,lower:(t,e)=>e==="text"&&Ce(t)?t.toLowerCase():e==="vnode"&&st(t)&&"__v_isVNode"in t?t.children.toLowerCase():t,capitalize:(t,e)=>e==="text"&&Ce(t)?vh(t):e==="vnode"&&st(t)&&"__v_isVNode"in t?vh(t.children):t}}let Om;function zx(t){Om=t}let Bm;function Vx(t){Bm=t}let km;function Gx(t){km=t}let Hm=null;const Wx=t=>{Hm=t},Xx=()=>Hm;let zm=null;const xh=t=>{zm=t},Yx=()=>zm;let Sh=0;function $x(t={}){const e=Mt(t.onWarn)?t.onWarn:Dv,n=Ce(t.version)?t.version:kx,i=Ce(t.locale)||Mt(t.locale)?t.locale:pa,r=Mt(i)?pa:i,s=At(t.fallbackLocale)||Ke(t.fallbackLocale)||Ce(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:r,a=Ke(t.messages)?t.messages:bl(r),o=Ke(t.datetimeFormats)?t.datetimeFormats:bl(r),l=Ke(t.numberFormats)?t.numberFormats:bl(r),c=Dt(mt(),t.modifiers,Hx()),u=t.pluralRules||mt(),f=Mt(t.missing)?t.missing:null,h=rt(t.missingWarn)||ps(t.missingWarn)?t.missingWarn:!0,p=rt(t.fallbackWarn)||ps(t.fallbackWarn)?t.fallbackWarn:!0,_=!!t.fallbackFormat,x=!!t.unresolving,g=Mt(t.postTranslation)?t.postTranslation:null,d=Ke(t.processor)?t.processor:null,y=rt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,M=!!t.escapeParameter,v=Mt(t.messageCompiler)?t.messageCompiler:Om,I=Mt(t.messageResolver)?t.messageResolver:Bm||Ox,L=Mt(t.localeFallbacker)?t.localeFallbacker:km||Rx,R=st(t.fallbackContext)?t.fallbackContext:void 0,O=t,E=st(O.__datetimeFormatters)?O.__datetimeFormatters:new Map,T=st(O.__numberFormatters)?O.__numberFormatters:new Map,F=st(O.__meta)?O.__meta:{};Sh++;const B={version:n,cid:Sh,locale:i,fallbackLocale:s,messages:a,modifiers:c,pluralRules:u,missing:f,missingWarn:h,fallbackWarn:p,fallbackFormat:_,unresolving:x,postTranslation:g,processor:d,warnHtmlMessage:y,escapeParameter:M,messageCompiler:v,messageResolver:I,localeFallbacker:L,fallbackContext:R,onWarn:e,__meta:F};return B.datetimeFormats=o,B.numberFormats=l,B.__datetimeFormatters=E,B.__numberFormatters=T,__INTLIFY_PROD_DEVTOOLS__&&bx(B,n,F),B}const bl=t=>({[t]:mt()});function qu(t,e,n,i,r){const{missing:s,onWarn:a}=t;if(s!==null){const o=s(t,n,e,r);return Ce(o)?o:e}else return e}function Ns(t,e,n){const i=t;i.__localeChainCache=new Map,t.localeFallbacker(t,n,e)}function qx(t,e){return t===e?!1:t.split("-")[0]===e.split("-")[0]}function jx(t,e){const n=e.indexOf(t);if(n===-1)return!1;for(let i=n+1;i<e.length;i++)if(qx(t,e[i]))return!0;return!1}function yh(t,...e){const{datetimeFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__datetimeFormatters:o}=t,[l,c,u,f]=yc(...e),h=rt(u.missingWarn)?u.missingWarn:t.missingWarn;rt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=$u(t,u),x=a(t,r,_);if(!Ce(l)||l==="")return new Intl.DateTimeFormat(_,f).format(c);let g={},d,y=null;const M="datetime format";for(let L=0;L<x.length&&(d=x[L],g=n[d]||{},y=g[l],!Ke(y));L++)qu(t,l,d,h,M);if(!Ke(y)||!Ce(d))return i?Jo:l;let v=`${d}__${l}`;Ko(f)||(v=`${v}__${JSON.stringify(f)}`);let I=o.get(v);return I||(I=new Intl.DateTimeFormat(d,Dt({},y,f)),o.set(v,I)),p?I.formatToParts(c):I.format(c)}const Vm=["localeMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName","formatMatcher","hour12","timeZone","dateStyle","timeStyle","calendar","dayPeriod","numberingSystem","hourCycle","fractionalSecondDigits"];function yc(...t){const[e,n,i,r]=t,s=mt();let a=mt(),o;if(Ce(e)){const l=e.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);if(!l)throw _i(gi.INVALID_ISO_DATE_ARGUMENT);const c=l[3]?l[3].trim().startsWith("T")?`${l[1].trim()}${l[3].trim()}`:`${l[1].trim()}T${l[3].trim()}`:l[1].trim();o=new Date(c);try{o.toISOString()}catch{throw _i(gi.INVALID_ISO_DATE_ARGUMENT)}}else if(Fv(e)){if(isNaN(e.getTime()))throw _i(gi.INVALID_DATE_ARGUMENT);o=e}else if(It(e))o=e;else throw _i(gi.INVALID_ARGUMENT);return Ce(n)?s.key=n:Ke(n)&&Object.keys(n).forEach(l=>{Vm.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ce(i)?s.locale=i:Ke(i)&&(a=i),Ke(r)&&(a=r),[s.key||"",o,s,a]}function Mh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__datetimeFormatters.has(s)&&i.__datetimeFormatters.delete(s)}}function Eh(t,...e){const{numberFormats:n,unresolving:i,fallbackLocale:r,onWarn:s,localeFallbacker:a}=t,{__numberFormatters:o}=t,[l,c,u,f]=Mc(...e),h=rt(u.missingWarn)?u.missingWarn:t.missingWarn;rt(u.fallbackWarn)?u.fallbackWarn:t.fallbackWarn;const p=!!u.part,_=$u(t,u),x=a(t,r,_);if(!Ce(l)||l==="")return new Intl.NumberFormat(_,f).format(c);let g={},d,y=null;const M="number format";for(let L=0;L<x.length&&(d=x[L],g=n[d]||{},y=g[l],!Ke(y));L++)qu(t,l,d,h,M);if(!Ke(y)||!Ce(d))return i?Jo:l;let v=`${d}__${l}`;Ko(f)||(v=`${v}__${JSON.stringify(f)}`);let I=o.get(v);return I||(I=new Intl.NumberFormat(d,Dt({},y,f)),o.set(v,I)),p?I.formatToParts(c):I.format(c)}const Gm=["localeMatcher","style","currency","currencyDisplay","currencySign","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","notation","signDisplay","unit","unitDisplay","roundingMode","roundingPriority","roundingIncrement","trailingZeroDisplay"];function Mc(...t){const[e,n,i,r]=t,s=mt();let a=mt();if(!It(e))throw _i(gi.INVALID_ARGUMENT);const o=e;return Ce(n)?s.key=n:Ke(n)&&Object.keys(n).forEach(l=>{Gm.includes(l)?a[l]=n[l]:s[l]=n[l]}),Ce(i)?s.locale=i:Ke(i)&&(a=i),Ke(r)&&(a=r),[s.key||"",o,s,a]}function bh(t,e,n){const i=t;for(const r in n){const s=`${e}__${r}`;i.__numberFormatters.has(s)&&i.__numberFormatters.delete(s)}}const Kx=t=>t,Zx=t=>"",Jx="text",Qx=t=>t.length===0?"":Wu(t),eS=zv;function Th(t,e){return t=Math.abs(t),e===2?t?t>1?1:0:1:t?Math.min(t,2):0}function tS(t){const e=It(t.pluralIndex)?t.pluralIndex:-1;return t.named&&(It(t.named.count)||It(t.named.n))?It(t.named.count)?t.named.count:It(t.named.n)?t.named.n:e:e}function nS(t,e){e.count||(e.count=t),e.n||(e.n=t)}function iS(t={}){const e=t.locale,n=tS(t),i=st(t.pluralRules)&&Ce(e)&&Mt(t.pluralRules[e])?t.pluralRules[e]:Th,r=st(t.pluralRules)&&Ce(e)&&Mt(t.pluralRules[e])?Th:void 0,s=d=>d[i(n,d.length,r)],a=t.list||[],o=d=>a[d],l=t.named||mt();It(t.pluralIndex)&&nS(n,l);const c=d=>l[d];function u(d,y){const M=Mt(t.messages)?t.messages(d,!!y):st(t.messages)?t.messages[d]:!1;return M||(t.parent?t.parent.message(d):Zx)}const f=d=>t.modifiers?t.modifiers[d]:Kx,h=Ke(t.processor)&&Mt(t.processor.normalize)?t.processor.normalize:Qx,p=Ke(t.processor)&&Mt(t.processor.interpolate)?t.processor.interpolate:eS,_=Ke(t.processor)&&Ce(t.processor.type)?t.processor.type:Jx,g={list:o,named:c,plural:s,linked:(d,...y)=>{const[M,v]=y;let I="text",L="";y.length===1?st(M)?(L=M.modifier||L,I=M.type||I):Ce(M)&&(L=M||L):y.length===2&&(Ce(M)&&(L=M||L),Ce(v)&&(I=v||I));const R=u(d,!0)(g),O=I==="vnode"&&At(R)&&L?R[0]:R;return L?f(L)(O,I):O},message:u,type:_,interpolate:p,normalize:h,values:Dt(mt(),a,l)};return g}const wh=()=>"",En=t=>Mt(t);function Ah(t,...e){const{fallbackFormat:n,postTranslation:i,unresolving:r,messageCompiler:s,fallbackLocale:a,messages:o}=t,[l,c]=Ec(...e),u=rt(c.missingWarn)?c.missingWarn:t.missingWarn,f=rt(c.fallbackWarn)?c.fallbackWarn:t.fallbackWarn,h=rt(c.escapeParameter)?c.escapeParameter:t.escapeParameter,p=!!c.resolvedMessage,_=Ce(c.default)||rt(c.default)?rt(c.default)?s?l:()=>l:c.default:n?s?l:()=>l:null,x=n||_!=null&&(Ce(_)||Mt(_)),g=$u(t,c);h&&rS(c);let[d,y,M]=p?[l,g,o[g]||mt()]:Wm(t,l,g,a,f,u),v=d,I=l;if(!p&&!(Ce(v)||Jn(v)||En(v))&&x&&(v=_,I=v),!p&&(!(Ce(v)||Jn(v)||En(v))||!Ce(y)))return r?Jo:l;let L=!1;const R=()=>{L=!0},O=En(v)?v:Xm(t,l,y,v,I,R);if(L)return v;const E=oS(t,y,M,c),T=iS(E),F=sS(t,O,T);let B=i?i(F,l):F;if(h&&Ce(B)&&(B=Bv(B)),__INTLIFY_PROD_DEVTOOLS__){const W={timestamp:Date.now(),key:Ce(l)?l:En(v)?v.key:"",locale:y||(En(v)?v.locale:""),format:Ce(v)?v:En(v)?v.source:"",message:B};W.meta=Dt({},t.__meta,Xx()||{}),Tx(W)}return B}function rS(t){At(t.list)?t.list=t.list.map(e=>Ce(e)?lh(e):e):st(t.named)&&Object.keys(t.named).forEach(e=>{Ce(t.named[e])&&(t.named[e]=lh(t.named[e]))})}function Wm(t,e,n,i,r,s){const{messages:a,onWarn:o,messageResolver:l,localeFallbacker:c}=t,u=c(t,i,n);let f=mt(),h,p=null;const _="translate";for(let x=0;x<u.length&&(h=u[x],f=a[h]||mt(),(p=l(f,e))===null&&(p=f[e]),!(Ce(p)||Jn(p)||En(p)));x++)if(!jx(h,u)){const g=qu(t,e,h,s,_);g!==e&&(p=g)}return[p,h,f]}function Xm(t,e,n,i,r,s){const{messageCompiler:a,warnHtmlMessage:o}=t;if(En(i)){const c=i;return c.locale=c.locale||n,c.key=c.key||e,c}if(a==null){const c=(()=>i);return c.locale=n,c.key=e,c}const l=a(i,aS(t,n,r,i,o,s));return l.locale=n,l.key=e,l.source=i,l}function sS(t,e,n){return e(n)}function Ec(...t){const[e,n,i]=t,r=mt();if(!Ce(e)&&!It(e)&&!En(e)&&!Jn(e))throw _i(gi.INVALID_ARGUMENT);const s=It(e)?String(e):(En(e),e);return It(n)?r.plural=n:Ce(n)?r.default=n:Ke(n)&&!Ko(n)?r.named=n:At(n)&&(r.list=n),It(i)?r.plural=i:Ce(i)?r.default=i:Ke(i)&&Dt(r,i),[s,r]}function aS(t,e,n,i,r,s){return{locale:e,key:n,warnHtmlMessage:r,onError:a=>{throw s&&s(a),a},onCacheKey:a=>Nv(e,n,a)}}function oS(t,e,n,i){const{modifiers:r,pluralRules:s,messageResolver:a,fallbackLocale:o,fallbackWarn:l,missingWarn:c,fallbackContext:u}=t,h={locale:e,modifiers:r,pluralRules:s,messages:(p,_)=>{let x=a(n,p);if(x==null&&(u||_)){const[,,g]=Wm(u||t,p,e,o,l,c);x=a(g,p)}if(Ce(x)||Jn(x)){let g=!1;const y=Xm(t,p,e,x,p,()=>{g=!0});return g?wh:y}else return En(x)?x:wh}};return t.processor&&(h.processor=t.processor),i.list&&(h.list=i.list),i.named&&(h.named=i.named),It(i.plural)&&(h.pluralIndex=i.plural),h}hx();/*!
  * vue-i18n v11.1.12
  * (c) 2025 kazuya kawaguchi
  * Released under the MIT License.
  */const lS="11.1.12";function cS(){typeof __VUE_I18N_FULL_INSTALL__!="boolean"&&(yr().__VUE_I18N_FULL_INSTALL__=!0),typeof __VUE_I18N_LEGACY_API__!="boolean"&&(yr().__VUE_I18N_LEGACY_API__=!0),typeof __INTLIFY_DROP_MESSAGE_COMPILER__!="boolean"&&(yr().__INTLIFY_DROP_MESSAGE_COMPILER__=!1),typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(yr().__INTLIFY_PROD_DEVTOOLS__=!1)}const ln={UNEXPECTED_RETURN_TYPE:Ax,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32};function _n(t,...e){return Zo(t,null,void 0)}const bc=Ji("__translateVNode"),Tc=Ji("__datetimeParts"),wc=Ji("__numberParts"),Ym=Ji("__setPluralRules"),$m=Ji("__injectWithOption"),Ac=Ji("__dispose");function ma(t){if(!st(t)||Jn(t))return t;for(const e in t)if(Nn(t,e))if(!e.includes("."))st(t[e])&&ma(t[e]);else{const n=e.split("."),i=n.length-1;let r=t,s=!1;for(let a=0;a<i;a++){if(n[a]==="__proto__")throw new Error(`unsafe key: ${n[a]}`);if(n[a]in r||(r[n[a]]=mt()),!st(r[n[a]])){s=!0;break}r=r[n[a]]}if(s||(Jn(r)?Um.includes(n[i])||delete t[e]:(r[n[i]]=t[e],delete t[e])),!Jn(r)){const a=r[n[i]];st(a)&&ma(a)}}return t}function ju(t,e){const{messages:n,__i18n:i,messageResolver:r,flatJson:s}=e,a=Ke(n)?n:At(i)?mt():{[t]:mt()};if(At(i)&&i.forEach(o=>{if("locale"in o&&"resource"in o){const{locale:l,resource:c}=o;l?(a[l]=a[l]||mt(),_o(c,a[l])):_o(c,a)}else Ce(o)&&_o(JSON.parse(o),a)}),r==null&&s)for(const o in a)Nn(a,o)&&ma(a[o]);return a}function qm(t){return t.type}function jm(t,e,n){let i=st(e.messages)?e.messages:mt();"__i18nGlobal"in n&&(i=ju(t.locale.value,{messages:i,__i18n:n.__i18nGlobal}));const r=Object.keys(i);r.length&&r.forEach(s=>{t.mergeLocaleMessage(s,i[s])});{if(st(e.datetimeFormats)){const s=Object.keys(e.datetimeFormats);s.length&&s.forEach(a=>{t.mergeDateTimeFormat(a,e.datetimeFormats[a])})}if(st(e.numberFormats)){const s=Object.keys(e.numberFormats);s.length&&s.forEach(a=>{t.mergeNumberFormat(a,e.numberFormats[a])})}}}function Rh(t){return et(wa,null,t,0)}const Ch="__INTLIFY_META__",Ph=()=>[],uS=()=>!1;let Lh=0;function Ih(t){return((e,n,i,r)=>t(n,i,bi()||void 0,r))}const fS=()=>{const t=bi();let e=null;return t&&(e=qm(t)[Ch])?{[Ch]:e}:null};function Ku(t={}){const{__root:e,__injectWithOption:n}=t,i=e===void 0,r=t.flatJson,s=Fo?Hn:Nu;let a=rt(t.inheritLocale)?t.inheritLocale:!0;const o=s(e&&a?e.locale.value:Ce(t.locale)?t.locale:pa),l=s(e&&a?e.fallbackLocale.value:Ce(t.fallbackLocale)||At(t.fallbackLocale)||Ke(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:o.value),c=s(ju(o.value,t)),u=s(Ke(t.datetimeFormats)?t.datetimeFormats:{[o.value]:{}}),f=s(Ke(t.numberFormats)?t.numberFormats:{[o.value]:{}});let h=e?e.missingWarn:rt(t.missingWarn)||ps(t.missingWarn)?t.missingWarn:!0,p=e?e.fallbackWarn:rt(t.fallbackWarn)||ps(t.fallbackWarn)?t.fallbackWarn:!0,_=e?e.fallbackRoot:rt(t.fallbackRoot)?t.fallbackRoot:!0,x=!!t.fallbackFormat,g=Mt(t.missing)?t.missing:null,d=Mt(t.missing)?Ih(t.missing):null,y=Mt(t.postTranslation)?t.postTranslation:null,M=e?e.warnHtmlMessage:rt(t.warnHtmlMessage)?t.warnHtmlMessage:!0,v=!!t.escapeParameter;const I=e?e.modifiers:Ke(t.modifiers)?t.modifiers:{};let L=t.pluralRules||e&&e.pluralRules,R;R=(()=>{i&&xh(null);const m={version:lS,locale:o.value,fallbackLocale:l.value,messages:c.value,modifiers:I,pluralRules:L,missing:d===null?void 0:d,missingWarn:h,fallbackWarn:p,fallbackFormat:x,unresolving:!0,postTranslation:y===null?void 0:y,warnHtmlMessage:M,escapeParameter:v,messageResolver:t.messageResolver,messageCompiler:t.messageCompiler,__meta:{framework:"vue"}};m.datetimeFormats=u.value,m.numberFormats=f.value,m.__datetimeFormatters=Ke(R)?R.__datetimeFormatters:void 0,m.__numberFormatters=Ke(R)?R.__numberFormatters:void 0;const P=$x(m);return i&&xh(P),P})(),Ns(R,o.value,l.value);function E(){return[o.value,l.value,c.value,u.value,f.value]}const T=Tt({get:()=>o.value,set:m=>{R.locale=m,o.value=m}}),F=Tt({get:()=>l.value,set:m=>{R.fallbackLocale=m,l.value=m,Ns(R,o.value,m)}}),B=Tt(()=>c.value),W=Tt(()=>u.value),ie=Tt(()=>f.value);function ae(){return Mt(y)?y:null}function ee(m){y=m,R.postTranslation=m}function J(){return g}function $(m){m!==null&&(d=Ih(m)),g=m,R.missing=d}const pe=(m,P,V,j,q,Se)=>{E();let fe;try{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=e?Yx():void 0),fe=m(R)}finally{__INTLIFY_PROD_DEVTOOLS__,i||(R.fallbackContext=void 0)}if(V!=="translate exists"&&It(fe)&&fe===Jo||V==="translate exists"&&!fe){const[Ee,Ae]=P();return e&&_?j(e):q(Ee)}else{if(Se(fe))return fe;throw _n(ln.UNEXPECTED_RETURN_TYPE)}};function ve(...m){return pe(P=>Reflect.apply(Ah,null,[P,...m]),()=>Ec(...m),"translate",P=>Reflect.apply(P.t,P,[...m]),P=>P,P=>Ce(P))}function we(...m){const[P,V,j]=m;if(j&&!st(j))throw _n(ln.INVALID_ARGUMENT);return ve(P,V,Dt({resolvedMessage:!0},j||{}))}function Fe(...m){return pe(P=>Reflect.apply(yh,null,[P,...m]),()=>yc(...m),"datetime format",P=>Reflect.apply(P.d,P,[...m]),()=>_h,P=>Ce(P)||At(P))}function je(...m){return pe(P=>Reflect.apply(Eh,null,[P,...m]),()=>Mc(...m),"number format",P=>Reflect.apply(P.n,P,[...m]),()=>_h,P=>Ce(P)||At(P))}function se(m){return m.map(P=>Ce(P)||It(P)||rt(P)?Rh(String(P)):P)}const Me={normalize:se,interpolate:m=>m,type:"vnode"};function z(...m){return pe(P=>{let V;const j=P;try{j.processor=Me,V=Reflect.apply(Ah,null,[j,...m])}finally{j.processor=null}return V},()=>Ec(...m),"translate",P=>P[bc](...m),P=>[Rh(P)],P=>At(P))}function re(...m){return pe(P=>Reflect.apply(Eh,null,[P,...m]),()=>Mc(...m),"number format",P=>P[wc](...m),Ph,P=>Ce(P)||At(P))}function le(...m){return pe(P=>Reflect.apply(yh,null,[P,...m]),()=>yc(...m),"datetime format",P=>P[Tc](...m),Ph,P=>Ce(P)||At(P))}function oe(m){L=m,R.pluralRules=L}function Oe(m,P){return pe(()=>{if(!m)return!1;const V=Ce(P)?P:o.value,j=S(V),q=R.messageResolver(j,m);return Jn(q)||En(q)||Ce(q)},()=>[m],"translate exists",V=>Reflect.apply(V.te,V,[m,P]),uS,V=>rt(V))}function D(m){let P=null;const V=Fm(R,l.value,o.value);for(let j=0;j<V.length;j++){const q=c.value[V[j]]||{},Se=R.messageResolver(q,m);if(Se!=null){P=Se;break}}return P}function N(m){const P=D(m);return P??(e?e.tm(m)||{}:{})}function S(m){return c.value[m]||{}}function ne(m,P){if(r){const V={[m]:P};for(const j in V)Nn(V,j)&&ma(V[j]);P=V[m]}c.value[m]=P,R.messages=c.value}function Z(m,P){c.value[m]=c.value[m]||{};const V={[m]:P};if(r)for(const j in V)Nn(V,j)&&ma(V[j]);P=V[m],_o(P,c.value[m]),R.messages=c.value}function K(m){return u.value[m]||{}}function w(m,P){u.value[m]=P,R.datetimeFormats=u.value,Mh(R,m,P)}function C(m,P){u.value[m]=Dt(u.value[m]||{},P),R.datetimeFormats=u.value,Mh(R,m,P)}function U(m){return f.value[m]||{}}function k(m,P){f.value[m]=P,R.numberFormats=f.value,bh(R,m,P)}function he(m,P){f.value[m]=Dt(f.value[m]||{},P),R.numberFormats=f.value,bh(R,m,P)}Lh++,e&&Fo&&(Si(e.locale,m=>{a&&(o.value=m,R.locale=m,Ns(R,o.value,l.value))}),Si(e.fallbackLocale,m=>{a&&(l.value=m,R.fallbackLocale=m,Ns(R,o.value,l.value))}));const b={id:Lh,locale:T,fallbackLocale:F,get inheritLocale(){return a},set inheritLocale(m){a=m,m&&e&&(o.value=e.locale.value,l.value=e.fallbackLocale.value,Ns(R,o.value,l.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:B,get modifiers(){return I},get pluralRules(){return L||{}},get isGlobal(){return i},get missingWarn(){return h},set missingWarn(m){h=m,R.missingWarn=h},get fallbackWarn(){return p},set fallbackWarn(m){p=m,R.fallbackWarn=p},get fallbackRoot(){return _},set fallbackRoot(m){_=m},get fallbackFormat(){return x},set fallbackFormat(m){x=m,R.fallbackFormat=x},get warnHtmlMessage(){return M},set warnHtmlMessage(m){M=m,R.warnHtmlMessage=m},get escapeParameter(){return v},set escapeParameter(m){v=m,R.escapeParameter=m},t:ve,getLocaleMessage:S,setLocaleMessage:ne,mergeLocaleMessage:Z,getPostTranslationHandler:ae,setPostTranslationHandler:ee,getMissingHandler:J,setMissingHandler:$,[Ym]:oe};return b.datetimeFormats=W,b.numberFormats=ie,b.rt=we,b.te=Oe,b.tm=N,b.d=Fe,b.n=je,b.getDateTimeFormat=K,b.setDateTimeFormat=w,b.mergeDateTimeFormat=C,b.getNumberFormat=U,b.setNumberFormat=k,b.mergeNumberFormat=he,b[$m]=n,b[bc]=z,b[Tc]=le,b[wc]=re,b}function hS(t){const e=Ce(t.locale)?t.locale:pa,n=Ce(t.fallbackLocale)||At(t.fallbackLocale)||Ke(t.fallbackLocale)||t.fallbackLocale===!1?t.fallbackLocale:e,i=Mt(t.missing)?t.missing:void 0,r=rt(t.silentTranslationWarn)||ps(t.silentTranslationWarn)?!t.silentTranslationWarn:!0,s=rt(t.silentFallbackWarn)||ps(t.silentFallbackWarn)?!t.silentFallbackWarn:!0,a=rt(t.fallbackRoot)?t.fallbackRoot:!0,o=!!t.formatFallbackMessages,l=Ke(t.modifiers)?t.modifiers:{},c=t.pluralizationRules,u=Mt(t.postTranslation)?t.postTranslation:void 0,f=Ce(t.warnHtmlInMessage)?t.warnHtmlInMessage!=="off":!0,h=!!t.escapeParameterHtml,p=rt(t.sync)?t.sync:!0;let _=t.messages;if(Ke(t.sharedMessages)){const I=t.sharedMessages;_=Object.keys(I).reduce((R,O)=>{const E=R[O]||(R[O]={});return Dt(E,I[O]),R},_||{})}const{__i18n:x,__root:g,__injectWithOption:d}=t,y=t.datetimeFormats,M=t.numberFormats,v=t.flatJson;return{locale:e,fallbackLocale:n,messages:_,flatJson:v,datetimeFormats:y,numberFormats:M,missing:i,missingWarn:r,fallbackWarn:s,fallbackRoot:a,fallbackFormat:o,modifiers:l,pluralRules:c,postTranslation:u,warnHtmlMessage:f,escapeParameter:h,messageResolver:t.messageResolver,inheritLocale:p,__i18n:x,__root:g,__injectWithOption:d}}function Rc(t={}){const e=Ku(hS(t)),{__extender:n}=t,i={id:e.id,get locale(){return e.locale.value},set locale(r){e.locale.value=r},get fallbackLocale(){return e.fallbackLocale.value},set fallbackLocale(r){e.fallbackLocale.value=r},get messages(){return e.messages.value},get datetimeFormats(){return e.datetimeFormats.value},get numberFormats(){return e.numberFormats.value},get availableLocales(){return e.availableLocales},get missing(){return e.getMissingHandler()},set missing(r){e.setMissingHandler(r)},get silentTranslationWarn(){return rt(e.missingWarn)?!e.missingWarn:e.missingWarn},set silentTranslationWarn(r){e.missingWarn=rt(r)?!r:r},get silentFallbackWarn(){return rt(e.fallbackWarn)?!e.fallbackWarn:e.fallbackWarn},set silentFallbackWarn(r){e.fallbackWarn=rt(r)?!r:r},get modifiers(){return e.modifiers},get formatFallbackMessages(){return e.fallbackFormat},set formatFallbackMessages(r){e.fallbackFormat=r},get postTranslation(){return e.getPostTranslationHandler()},set postTranslation(r){e.setPostTranslationHandler(r)},get sync(){return e.inheritLocale},set sync(r){e.inheritLocale=r},get warnHtmlInMessage(){return e.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(r){e.warnHtmlMessage=r!=="off"},get escapeParameterHtml(){return e.escapeParameter},set escapeParameterHtml(r){e.escapeParameter=r},get pluralizationRules(){return e.pluralRules||{}},__composer:e,t(...r){return Reflect.apply(e.t,e,[...r])},rt(...r){return Reflect.apply(e.rt,e,[...r])},te(r,s){return e.te(r,s)},tm(r){return e.tm(r)},getLocaleMessage(r){return e.getLocaleMessage(r)},setLocaleMessage(r,s){e.setLocaleMessage(r,s)},mergeLocaleMessage(r,s){e.mergeLocaleMessage(r,s)},d(...r){return Reflect.apply(e.d,e,[...r])},getDateTimeFormat(r){return e.getDateTimeFormat(r)},setDateTimeFormat(r,s){e.setDateTimeFormat(r,s)},mergeDateTimeFormat(r,s){e.mergeDateTimeFormat(r,s)},n(...r){return Reflect.apply(e.n,e,[...r])},getNumberFormat(r){return e.getNumberFormat(r)},setNumberFormat(r,s){e.setNumberFormat(r,s)},mergeNumberFormat(r,s){e.mergeNumberFormat(r,s)}};return i.__extender=n,i}function dS(t,e,n){return{beforeCreate(){const i=bi();if(!i)throw _n(ln.UNEXPECTED_ERROR);const r=this.$options;if(r.i18n){const s=r.i18n;if(r.__i18n&&(s.__i18n=r.__i18n),s.__root=e,this===this.$root)this.$i18n=Dh(t,s);else{s.__injectWithOption=!0,s.__extender=n.__vueI18nExtend,this.$i18n=Rc(s);const a=this.$i18n;a.__extender&&(a.__disposer=a.__extender(this.$i18n))}}else if(r.__i18n)if(this===this.$root)this.$i18n=Dh(t,r);else{this.$i18n=Rc({__i18n:r.__i18n,__injectWithOption:!0,__extender:n.__vueI18nExtend,__root:e});const s=this.$i18n;s.__extender&&(s.__disposer=s.__extender(this.$i18n))}else this.$i18n=t;r.__i18nGlobal&&jm(e,r,r),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$te=(s,a)=>this.$i18n.te(s,a),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s),n.__setInstance(i,this.$i18n)},mounted(){},unmounted(){const i=bi();if(!i)throw _n(ln.UNEXPECTED_ERROR);const r=this.$i18n;delete this.$t,delete this.$rt,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,r.__disposer&&(r.__disposer(),delete r.__disposer,delete r.__extender),n.__deleteInstance(i),delete this.$i18n}}}function Dh(t,e){t.locale=e.locale||t.locale,t.fallbackLocale=e.fallbackLocale||t.fallbackLocale,t.missing=e.missing||t.missing,t.silentTranslationWarn=e.silentTranslationWarn||t.silentFallbackWarn,t.silentFallbackWarn=e.silentFallbackWarn||t.silentFallbackWarn,t.formatFallbackMessages=e.formatFallbackMessages||t.formatFallbackMessages,t.postTranslation=e.postTranslation||t.postTranslation,t.warnHtmlInMessage=e.warnHtmlInMessage||t.warnHtmlInMessage,t.escapeParameterHtml=e.escapeParameterHtml||t.escapeParameterHtml,t.sync=e.sync||t.sync,t.__composer[Ym](e.pluralizationRules||t.pluralizationRules);const n=ju(t.locale,{messages:e.messages,__i18n:e.__i18n});return Object.keys(n).forEach(i=>t.mergeLocaleMessage(i,n[i])),e.datetimeFormats&&Object.keys(e.datetimeFormats).forEach(i=>t.mergeDateTimeFormat(i,e.datetimeFormats[i])),e.numberFormats&&Object.keys(e.numberFormats).forEach(i=>t.mergeNumberFormat(i,e.numberFormats[i])),t}const Zu={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:t=>t==="parent"||t==="global",default:"parent"},i18n:{type:Object}};function pS({slots:t},e){return e.length===1&&e[0]==="default"?(t.default?t.default():[]).reduce((i,r)=>[...i,...r.type===zt?r.children:[r]],[]):e.reduce((n,i)=>{const r=t[i];return r&&(n[i]=r()),n},mt())}function Km(){return zt}const mS=cn({name:"i18n-t",props:Dt({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:t=>It(t)||!isNaN(t)}},Zu),setup(t,e){const{slots:n,attrs:i}=e,r=t.i18n||wi({useScope:t.scope,__useComponent:!0});return()=>{const s=Object.keys(n).filter(f=>f[0]!=="_"),a=mt();t.locale&&(a.locale=t.locale),t.plural!==void 0&&(a.plural=Ce(t.plural)?+t.plural:t.plural);const o=pS(e,s),l=r[bc](t.keypath,o,a),c=Dt(mt(),i),u=Ce(t.tag)||st(t.tag)?t.tag:Km();return Ra(u,c,l)}}}),Nh=mS;function gS(t){return At(t)&&!Ce(t[0])}function Zm(t,e,n,i){const{slots:r,attrs:s}=e;return()=>{const a={part:!0};let o=mt();t.locale&&(a.locale=t.locale),Ce(t.format)?a.key=t.format:st(t.format)&&(Ce(t.format.key)&&(a.key=t.format.key),o=Object.keys(t.format).reduce((h,p)=>n.includes(p)?Dt(mt(),h,{[p]:t.format[p]}):h,mt()));const l=i(t.value,a,o);let c=[a.key];At(l)?c=l.map((h,p)=>{const _=r[h.type],x=_?_({[h.type]:h.value,index:p,parts:l}):[h.value];return gS(x)&&(x[0].key=`${h.type}-${p}`),x}):Ce(l)&&(c=[l]);const u=Dt(mt(),s),f=Ce(t.tag)||st(t.tag)?t.tag:Km();return Ra(f,u,c)}}const _S=cn({name:"i18n-n",props:Dt({value:{type:Number,required:!0},format:{type:[String,Object]}},Zu),setup(t,e){const n=t.i18n||wi({useScope:t.scope,__useComponent:!0});return Zm(t,e,Gm,(...i)=>n[wc](...i))}}),Uh=_S;function vS(t,e){const n=t;if(t.mode==="composition")return n.__getInstance(e)||t.global;{const i=n.__getInstance(e);return i!=null?i.__composer:t.global.__composer}}function xS(t){const e=a=>{const{instance:o,value:l}=a;if(!o||!o.$)throw _n(ln.UNEXPECTED_ERROR);const c=vS(t,o.$),u=Fh(l);return[Reflect.apply(c.t,c,[...Oh(u)]),c]};return{created:(a,o)=>{const[l,c]=e(o);Fo&&t.global===c&&(a.__i18nWatcher=Si(c.locale,()=>{o.instance&&o.instance.$forceUpdate()})),a.__composer=c,a.textContent=l},unmounted:a=>{Fo&&a.__i18nWatcher&&(a.__i18nWatcher(),a.__i18nWatcher=void 0,delete a.__i18nWatcher),a.__composer&&(a.__composer=void 0,delete a.__composer)},beforeUpdate:(a,{value:o})=>{if(a.__composer){const l=a.__composer,c=Fh(o);a.textContent=Reflect.apply(l.t,l,[...Oh(c)])}},getSSRProps:a=>{const[o]=e(a);return{textContent:o}}}}function Fh(t){if(Ce(t))return{path:t};if(Ke(t)){if(!("path"in t))throw _n(ln.REQUIRED_VALUE,"path");return t}else throw _n(ln.INVALID_VALUE)}function Oh(t){const{path:e,locale:n,args:i,choice:r,plural:s}=t,a={},o=i||{};return Ce(n)&&(a.locale=n),It(r)&&(a.plural=r),It(s)&&(a.plural=s),[e,o,a]}function SS(t,e,...n){const i=Ke(n[0])?n[0]:{};(rt(i.globalInstall)?i.globalInstall:!0)&&([Nh.name,"I18nT"].forEach(s=>t.component(s,Nh)),[Uh.name,"I18nN"].forEach(s=>t.component(s,Uh)),[kh.name,"I18nD"].forEach(s=>t.component(s,kh))),t.directive("t",xS(e))}const yS=Ji("global-vue-i18n");function MS(t={}){const e=__VUE_I18N_LEGACY_API__&&rt(t.legacy)?t.legacy:__VUE_I18N_LEGACY_API__,n=rt(t.globalInjection)?t.globalInjection:!0,i=new Map,[r,s]=ES(t,e),a=Ji("");function o(f){return i.get(f)||null}function l(f,h){i.set(f,h)}function c(f){i.delete(f)}const u={get mode(){return __VUE_I18N_LEGACY_API__&&e?"legacy":"composition"},async install(f,...h){if(f.__VUE_I18N_SYMBOL__=a,f.provide(f.__VUE_I18N_SYMBOL__,u),Ke(h[0])){const x=h[0];u.__composerExtend=x.__composerExtend,u.__vueI18nExtend=x.__vueI18nExtend}let p=null;!e&&n&&(p=LS(f,u.global)),__VUE_I18N_FULL_INSTALL__&&SS(f,u,...h),__VUE_I18N_LEGACY_API__&&e&&f.mixin(dS(s,s.__composer,u));const _=f.unmount;f.unmount=()=>{p&&p(),u.dispose(),_()}},get global(){return s},dispose(){r.stop()},__instances:i,__getInstance:o,__setInstance:l,__deleteInstance:c};return u}function wi(t={}){const e=bi();if(e==null)throw _n(ln.MUST_BE_CALL_SETUP_TOP);if(!e.isCE&&e.appContext.app!=null&&!e.appContext.app.__VUE_I18N_SYMBOL__)throw _n(ln.NOT_INSTALLED);const n=bS(e),i=wS(n),r=qm(e),s=TS(t,r);if(s==="global")return jm(i,t,r),i;if(s==="parent"){let l=AS(n,e,t.__useComponent);return l==null&&(l=i),l}const a=n;let o=a.__getInstance(e);if(o==null){const l=Dt({},t);"__i18n"in r&&(l.__i18n=r.__i18n),i&&(l.__root=i),o=Ku(l),a.__composerExtend&&(o[Ac]=a.__composerExtend(o)),CS(a,e,o),a.__setInstance(e,o)}return o}function ES(t,e){const n=Tu(),i=__VUE_I18N_LEGACY_API__&&e?n.run(()=>Rc(t)):n.run(()=>Ku(t));if(i==null)throw _n(ln.UNEXPECTED_ERROR);return[n,i]}function bS(t){const e=Bn(t.isCE?yS:t.appContext.app.__VUE_I18N_SYMBOL__);if(!e)throw _n(t.isCE?ln.NOT_INSTALLED_WITH_PROVIDE:ln.UNEXPECTED_ERROR);return e}function TS(t,e){return Ko(t)?"__i18n"in e?"local":"global":t.useScope?t.useScope:"local"}function wS(t){return t.mode==="composition"?t.global:t.global.__composer}function AS(t,e,n=!1){let i=null;const r=e.root;let s=RS(e,n);for(;s!=null;){const a=t;if(t.mode==="composition")i=a.__getInstance(s);else if(__VUE_I18N_LEGACY_API__){const o=a.__getInstance(s);o!=null&&(i=o.__composer,n&&i&&!i[$m]&&(i=null))}if(i!=null||r===s)break;s=s.parent}return i}function RS(t,e=!1){return t==null?null:e&&t.vnode.ctx||t.parent}function CS(t,e,n){Nr(()=>{},e),Ts(()=>{const i=n;t.__deleteInstance(e);const r=i[Ac];r&&(r(),delete i[Ac])},e)}const PS=["locale","fallbackLocale","availableLocales"],Bh=["t","rt","d","n","tm","te"];function LS(t,e){const n=Object.create(null);return PS.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s)throw _n(ln.UNEXPECTED_ERROR);const a=Rt(s.value)?{get(){return s.value.value},set(o){s.value.value=o}}:{get(){return s.get&&s.get()}};Object.defineProperty(n,r,a)}),t.config.globalProperties.$i18n=n,Bh.forEach(r=>{const s=Object.getOwnPropertyDescriptor(e,r);if(!s||!s.value)throw _n(ln.UNEXPECTED_ERROR);Object.defineProperty(t.config.globalProperties,`$${r}`,s)}),()=>{delete t.config.globalProperties.$i18n,Bh.forEach(r=>{delete t.config.globalProperties[`$${r}`]})}}const IS=cn({name:"i18n-d",props:Dt({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},Zu),setup(t,e){const n=t.i18n||wi({useScope:t.scope,__useComponent:!0});return Zm(t,e,Vm,(...i)=>n[Tc](...i))}}),kh=IS;cS();zx(Mx);Vx(Bx);Gx(Fm);if(__INTLIFY_PROD_DEVTOOLS__){const t=yr();t.__INTLIFY__=!0,Ex(t.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Jm;const Qo=t=>Jm=t,Qm=Symbol();function Cc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Qs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qs||(Qs={}));function DS(){const t=Tu(!0),e=t.run(()=>Hn({}));let n=[],i=[];const r=Du({install(s){Qo(r),r._a=s,s.provide(Qm,r),s.config.globalProperties.$pinia=r,i.forEach(a=>n.push(a)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const eg=()=>{};function Hh(t,e,n,i=eg){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Ep()&&g_(r),r}function kr(t,...e){t.slice().forEach(n=>{n(...e)})}const NS=t=>t(),zh=Symbol(),Tl=Symbol();function Pc(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Cc(r)&&Cc(i)&&t.hasOwnProperty(n)&&!Rt(i)&&!Vi(i)?t[n]=Pc(r,i):t[n]=i}return t}const US=Symbol();function FS(t){return!Cc(t)||!Object.prototype.hasOwnProperty.call(t,US)}const{assign:Ui}=Object;function OS(t){return!!(Rt(t)&&t.effect)}function BS(t,e,n,i){const{state:r,actions:s,getters:a}=e,o=n.state.value[t];let l;function c(){o||(n.state.value[t]=r?r():{});const u=B_(n.state.value[t]);return Ui(u,s,Object.keys(a||{}).reduce((f,h)=>(f[h]=Du(Tt(()=>{Qo(n);const p=n._s.get(t);return a[h].call(p,p)})),f),{}))}return l=tg(t,c,e,n,i,!0),l}function tg(t,e,n={},i,r,s){let a;const o=Ui({actions:{}},n),l={deep:!0};let c,u,f=[],h=[],p;const _=i.state.value[t];!s&&!_&&(i.state.value[t]={}),Hn({});let x;function g(O){let E;c=u=!1,typeof O=="function"?(O(i.state.value[t]),E={type:Qs.patchFunction,storeId:t,events:p}):(Pc(i.state.value[t],O),E={type:Qs.patchObject,payload:O,storeId:t,events:p});const T=x=Symbol();Uu().then(()=>{x===T&&(c=!0)}),u=!0,kr(f,E,i.state.value[t])}const d=s?function(){const{state:E}=n,T=E?E():{};this.$patch(F=>{Ui(F,T)})}:eg;function y(){a.stop(),f=[],h=[],i._s.delete(t)}const M=(O,E="")=>{if(zh in O)return O[Tl]=E,O;const T=function(){Qo(i);const F=Array.from(arguments),B=[],W=[];function ie(J){B.push(J)}function ae(J){W.push(J)}kr(h,{args:F,name:T[Tl],store:I,after:ie,onError:ae});let ee;try{ee=O.apply(this&&this.$id===t?this:I,F)}catch(J){throw kr(W,J),J}return ee instanceof Promise?ee.then(J=>(kr(B,J),J)).catch(J=>(kr(W,J),Promise.reject(J))):(kr(B,ee),ee)};return T[zh]=!0,T[Tl]=E,T},v={_p:i,$id:t,$onAction:Hh.bind(null,h),$patch:g,$reset:d,$subscribe(O,E={}){const T=Hh(f,O,E.detached,()=>F()),F=a.run(()=>Si(()=>i.state.value[t],B=>{(E.flush==="sync"?u:c)&&O({storeId:t,type:Qs.direct,events:p},B)},Ui({},l,E)));return T},$dispose:y},I=ba(v);i._s.set(t,I);const R=(i._a&&i._a.runWithContext||NS)(()=>i._e.run(()=>(a=Tu()).run(()=>e({action:M}))));for(const O in R){const E=R[O];if(Rt(E)&&!OS(E)||Vi(E))s||(_&&FS(E)&&(Rt(E)?E.value=_[O]:Pc(E,_[O])),i.state.value[t][O]=E);else if(typeof E=="function"){const T=M(E,O);R[O]=T,o.actions[O]=E}}return Ui(I,R),Ui(tt(I),R),Object.defineProperty(I,"$state",{get:()=>i.state.value[t],set:O=>{g(E=>{Ui(E,O)})}}),i._p.forEach(O=>{Ui(I,a.run(()=>O({store:I,app:i._a,pinia:i,options:o})))}),_&&s&&n.hydrate&&n.hydrate(I.$state,_),c=!0,u=!0,I}/*! #__NO_SIDE_EFFECTS__ */function Ju(t,e,n){let i;const r=typeof e=="function";i=r?n:e;function s(a,o){const l=v0();return a=a||(l?Bn(Qm,null):null),a&&Qo(a),a=Jm,a._s.has(t)||(r?tg(t,e,i,a):BS(t,i,a)),a._s.get(t)}return s.$id=t,s}const ws=Ju("loading",()=>{const t=Hn(!0),e=Hn(!1),n=3e3,i=500;function r(){e.value||(e.value=!0)}function s(){e.value&&(t.value&&setTimeout(()=>t.value=!1,n),e.value=!1)}return{isFirstLoad:t,isLoading:e,duration:i,load:r,done:s}}),kS=cn({name:"loading",components:{AnimatedTxt:Ws},setup(){const{t}=wi(),e=ws(),n=fo("ball1"),i=fo("ball2"),r=fo("shadow"),s=[{transform:"translateY(0px) scaleX(1) scaleY(1)",offset:0},{transform:"translateY(5px) scaleX(1) scaleY(1.04)",offset:.05},{transform:"translateY(12px) scaleX(1) scaleY(1.06)",offset:.1},{transform:"translateY(22px) scaleX(1) scaleY(1.08)",offset:.15},{transform:"translateY(35px) scaleX(1) scaleY(1.11)",offset:.2},{transform:"translateY(50px) scaleX(1) scaleY(1.14)",offset:.25},{transform:"translateY(68px) scaleX(1) scaleY(1.17)",offset:.3},{transform:"translateY(90px) scaleX(1) scaleY(1.20)",offset:.35},{transform:"translateY(105px) scaleX(1) scaleY(1.18)",offset:.4},{transform:"translateY(118px) scaleX(1) scaleY(1.15)",offset:.45},{transform:"translateY(120px) scaleX(1.30) scaleY(0.65)",offset:.48},{transform:"translateY(120px) scaleX(1.40) scaleY(0.60)",offset:.485},{transform:"translateY(120px) scaleX(1.35) scaleY(0.62)",offset:.49},{transform:"translateY(115px) scaleX(1.32) scaleY(0.64)",offset:.5},{transform:"translateY(100px) scaleX(1.25) scaleY(0.70)",offset:.52},{transform:"translateY(85px) scaleX(1.20) scaleY(0.76)",offset:.55},{transform:"translateY(70px) scaleX(1.15) scaleY(0.82)",offset:.58},{transform:"translateY(55px) scaleX(1.10) scaleY(0.88)",offset:.62},{transform:"translateY(40px) scaleX(1.05) scaleY(0.94)",offset:.66},{transform:"translateY(28px) scaleX(1.02) scaleY(0.98)",offset:.7},{transform:"translateY(18px) scaleX(1) scaleY(1)",offset:.75},{transform:"translateY(12px) scaleX(1) scaleY(1.04)",offset:.8},{transform:"translateY(8px) scaleX(1) scaleY(1.08)",offset:.86},{transform:"translateY(5px) scaleX(1) scaleY(1.04)",offset:.92},{transform:"translateY(3px) scaleX(1) scaleY(1.02)",offset:.96},{transform:"translateY(1px) scaleX(1) scaleY(1)",offset:.99},{transform:"translateY(0px) scaleX(1) scaleY(1)",offset:1}],a=[{transform:"translateY(0.0px) scaleX(1) scaleY(1)",offset:0},{transform:"translateY(6.9px) scaleX(1) scaleY(1.04)",offset:.05},{transform:"translateY(16.5px) scaleX(1) scaleY(1.06)",offset:.1},{transform:"translateY(30.2px) scaleX(1) scaleY(1.08)",offset:.15},{transform:"translateY(48.1px) scaleX(1) scaleY(1.11)",offset:.2},{transform:"translateY(68.8px) scaleX(1) scaleY(1.14)",offset:.25},{transform:"translateY(93.5px) scaleX(1) scaleY(1.17)",offset:.3},{transform:"translateY(123.8px) scaleX(1) scaleY(1.20)",offset:.35},{transform:"translateY(144.4px) scaleX(1) scaleY(1.18)",offset:.4},{transform:"translateY(162.2px) scaleX(1) scaleY(1.15)",offset:.45},{transform:"translateY(165.0px) scaleX(1.30) scaleY(0.65)",offset:.48},{transform:"translateY(165.0px) scaleX(1.40) scaleY(0.60)",offset:.485},{transform:"translateY(165.0px) scaleX(1.35) scaleY(0.62)",offset:.49},{transform:"translateY(158.1px) scaleX(1.32) scaleY(0.64)",offset:.5},{transform:"translateY(137.5px) scaleX(1.25) scaleY(0.70)",offset:.52},{transform:"translateY(116.9px) scaleX(1.20) scaleY(0.76)",offset:.55},{transform:"translateY(96.2px) scaleX(1.15) scaleY(0.82)",offset:.58},{transform:"translateY(75.6px) scaleX(1.10) scaleY(0.88)",offset:.62},{transform:"translateY(55.0px) scaleX(1.05) scaleY(0.94)",offset:.66},{transform:"translateY(38.5px) scaleX(1.02) scaleY(0.98)",offset:.7},{transform:"translateY(24.8px) scaleX(1) scaleY(1)",offset:.75},{transform:"translateY(16.5px) scaleX(1) scaleY(1.04)",offset:.8},{transform:"translateY(11.0px) scaleX(1) scaleY(1.08)",offset:.86},{transform:"translateY(6.9px) scaleX(1) scaleY(1.04)",offset:.92},{transform:"translateY(4.1px) scaleX(1) scaleY(1.02)",offset:.96},{transform:"translateY(1.4px) scaleX(1) scaleY(1)",offset:.99},{transform:"translateY(0.0px) scaleX(1) scaleY(1)",offset:1}],o=[{transform:"scaleX(1) translateY(140px)",offset:0},{transform:"scaleX(1.2) translateY(140px)",offset:.48},{transform:"scaleX(1.2) translateY(140px)",offset:.49},{transform:"scaleX(1) translateY(140px)"}],l={duration:e.duration*2,easing:"linear",iterations:1/0,fill:"both"};function c(){n.value?.animate(s,l),i.value?.animate(a,l),r.value?.animate(o,l)}Si(e,()=>requestAnimationFrame(c));const u=Tt(()=>e.isFirstLoad?"first-load":"loading");return{loadingStore:e,transitionName:u,t}}}),HS={key:0,class:"fixed flex a-center j-center w-full h-full z-97"},zS={key:0,class:"fixed flex flex-col a-center j-center w--100 h--100 p-50 bg-primary font-size-xl z-96"},VS={key:0,class:"absolute flex flex-col a-center j-center w-full h-full bg-primary glooey mix"},GS={ref:"ball1",class:"absolute w-70 h-70 border-round bg-primary glooey-invert"},WS={ref:"ball2",class:"absolute w-25 h-25 border-round bg-primary glooey"},XS={ref:"shadow",class:"absolute w-70 h-10 border-round bg-primary glooey-invert"};function YS(t,e,n,i,r,s){const a=Tr("AnimatedTxt");return ut(),xt(zt,null,[t.loadingStore.isFirstLoad?(ut(),xt("div",HS,[t.loadingStore.isFirstLoad?(ut(),jo(a,{key:0,class:"hem-1 pl-0.10 pr-0.10 font-size-xl sm:font-size-md ls-0.2 txt-a-center",text:t.t("computer"),duration:800,stagger:20,delay:500,animation:"fadeOut"},null,8,["text"])):Vt("",!0)])):Vt("",!0),et(Uo,{name:t.transitionName},{default:ds(()=>[t.loadingStore.isLoading?(ut(),xt("div",zS,[t.loadingStore.isFirstLoad?Vt("",!0):(ut(),xt("div",VS,[Pt("div",GS,null,512),Pt("div",WS,null,512),Pt("div",XS,null,512)]))])):Vt("",!0)]),_:1},8,["name"])],64)}const $S=Zi(kS,[["render",YS]]),qS=cn({name:"a-hoverable",props:{isExternal:{type:Boolean,default:!1},to:{type:String,default:""},target:{type:String,default:"_self"},imgSrc:{type:String,default:""},shape:{type:String,default:"pill"},effect:{type:String,default:""},text:{type:String,default:""}}}),jS={key:0,class:"relative w-50 h-50"},KS=["src","alt"],ZS={key:1,class:"font-size-16 capitalize"};function JS(t,e,n,i,r,s){return ut(),jo(l0(t.isExternal?"a":"router-link"),{class:Rr(["flex row a-center h-50 user-select-none pointer",{"j-start":t.shape==="pill"},{"j-center":t.shape==="round"},t.effect]),to:t.isExternal?void 0:{name:t.to},href:t.isExternal?t.to:void 0,target:t.target},{default:ds(()=>[t.imgSrc?(ut(),xt("div",jS,[Pt("img",{src:t.imgSrc,alt:t.to},null,8,KS)])):Vt("",!0),t.text?(ut(),xt("span",ZS,ra(t.text),1)):Vt("",!0)]),_:1},8,["class","to","href","target"])}const ng=Zi(qS,[["render",JS]]),QS=cn({name:"switch-button",props:{isActive:{type:Boolean,default:!1},onSwitch:{type:Function,default:()=>{}},imgSrcL:{type:String,default:""},imgSrcR:{type:String,default:""},textL:{type:String,default:""},textR:{type:String,default:""}}}),ey={key:0,class:"relative"},ty=["src"],ny={key:1},iy={key:0,class:"relative"},ry=["src"],sy={key:1};function ay(t,e,n,i,r,s){return ut(),xt("button",{class:"flex row a-center j-center border-none bg-none w-32 h-32 font-size-16 pointer user-select-none",onClick:e[0]||(e[0]=(...a)=>t.onSwitch&&t.onSwitch(...a))},[Pt("div",{class:Rr(["ts-1-0",{"w-full o-1":!t.isActive},{"w-0 o-0":t.isActive}])},[t.imgSrcL?(ut(),xt("div",ey,[Pt("img",{src:t.imgSrcL},null,8,ty)])):Vt("",!0),t.textL?(ut(),xt("span",ny,ra(t.textL),1)):Vt("",!0)],2),Pt("div",{class:Rr(["ts-1-0",{"w-full o-1":t.isActive},{"w-0 o-0":!t.isActive}])},[t.imgSrcR?(ut(),xt("div",iy,[Pt("img",{src:t.imgSrcR},null,8,ry)])):Vt("",!0),t.textR?(ut(),xt("span",sy,ra(t.textR),1)):Vt("",!0)],2)])}const ig=Zi(QS,[["render",ay]]),oy="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M11.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L11.12,1.71A1,1,0,1,1,12.54.29l8.17,8.17a5,5,0,0,1,0,7.08l-8.17,8.17A1,1,0,0,1,11.83,24Z'/%3e%3cpath%20d='M1.83,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l9.59-9.58a1,1,0,0,0,0-1.42L1.12,1.71A1,1,0,0,1,2.54.29l9.58,9.59a3,3,0,0,1,0,4.24L2.54,23.71A1,1,0,0,1,1.83,24Z'/%3e%3c/svg%3e",ly="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z'/%3e%3c/svg%3e",cy="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z'/%3e%3c/svg%3e",uy="data:image/svg+xml,%3csvg%20id='Layer_1'%20height='512'%20viewBox='0%200%2024%2024'%20width='512'%20xmlns='http://www.w3.org/2000/svg'%20data-name='Layer%201'%3e%3cpath%20d='m4%206a2.982%202.982%200%200%201%20-2.122-.879l-1.544-1.374a1%201%200%200%201%201.332-1.494l1.585%201.414a1%201%200%200%200%201.456.04l3.604-3.431a1%201%200%200%201%201.378%201.448l-3.589%203.414a2.964%202.964%200%200%201%20-2.1.862zm20-2a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.589-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1.023%201.023%200%200%201%20-1.414%200l-1.59-1.585a1%201%200%200%200%20-1.414%201.414l1.585%201.585a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1zm-17.9%209.138%203.585-3.414a1%201%200%201%200%20-1.378-1.448l-3.6%203.431a1%201%200%200%201%20-1.456-.04l-1.585-1.414a1%201%200%200%200%20-1.332%201.494l1.544%201.374a3%203%200%200%200%204.226.017zm17.9-1.138a1%201%200%200%200%20-1-1h-10a1%201%200%200%200%200%202h10a1%201%200%200%200%201-1z'/%3e%3c/svg%3e",fy="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M7,6H23a1,1,0,0,0,0-2H7A1,1,0,0,0,7,6Z'/%3e%3cpath%20d='M23,11H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3cpath%20d='M23,18H7a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z'/%3e%3ccircle%20cx='2'%20cy='5'%20r='2'/%3e%3ccircle%20cx='2'%20cy='12'%20r='2'/%3e%3ccircle%20cx='2'%20cy='19'%20r='2'/%3e%3c/svg%3e",hy="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3crect%20y='11'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='4'%20width='24'%20height='2'%20rx='1'/%3e%3crect%20y='18'%20width='24'%20height='2'%20rx='1'/%3e%3c/svg%3e",dy="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z'/%3e%3c/svg%3e",py="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,20c-.552,0-1-.447-1-1,0-2.318,1.382-4.357,3.891-5.741,2.287-1.26,3.469-3.755,3.012-6.355-.423-2.408-2.399-4.385-4.808-4.808-1.812-.318-3.57,.147-4.952,1.307-1.363,1.144-2.144,2.82-2.144,4.597,0,.552-.448,1-1,1s-1-.448-1-1c0-2.37,1.042-4.604,2.858-6.129C8.673,.347,11.074-.289,13.441,.126c3.222,.565,5.866,3.21,6.432,6.432,.598,3.402-1.017,6.798-4.016,8.453-1.303,.718-2.857,1.993-2.857,3.989,0,.553-.448,1-1,1Zm-1.5,2.5c0,.828,.672,1.5,1.5,1.5s1.5-.672,1.5-1.5-.672-1.5-1.5-1.5-1.5,.672-1.5,1.5Z'/%3e%3c/svg%3e",my="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Layer_1'%20data-name='Layer%201'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M23,11H18.92a6.924,6.924,0,0,0-.429-1.607l3.527-2.044a1,1,0,1,0-1-1.731l-3.53,2.047a7.062,7.062,0,0,0-1.149-1.15l2.046-3.531a1,1,0,0,0-1.731-1L14.607,5.509A6.9,6.9,0,0,0,13,5.08V1a1,1,0,0,0-2,0V5.08a6.9,6.9,0,0,0-1.607.429L7.349,1.982a1,1,0,0,0-1.731,1L7.664,6.515a7.062,7.062,0,0,0-1.149,1.15L2.985,5.618a1,1,0,1,0-1,1.731L5.509,9.393A6.924,6.924,0,0,0,5.08,11H1a1,1,0,0,0,0,2H5.08a6.924,6.924,0,0,0,.429,1.607L1.982,16.651a1,1,0,1,0,1,1.731l3.53-2.047a7.062,7.062,0,0,0,1.149,1.15L5.618,21.016a1,1,0,0,0,1.731,1l2.044-3.527A6.947,6.947,0,0,0,11,18.92V23a1,1,0,0,0,2,0V18.92a6.947,6.947,0,0,0,1.607-.429l2.044,3.527a1,1,0,0,0,1.731-1l-2.046-3.531a7.062,7.062,0,0,0,1.149-1.15l3.53,2.047a1,1,0,1,0,1-1.731l-3.527-2.044A6.924,6.924,0,0,0,18.92,13H23A1,1,0,0,0,23,11ZM12,17c-6.608-.21-6.606-9.791,0-10C18.608,7.21,18.606,16.791,12,17Z'/%3e%3c/svg%3e",gy="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20id='Outline'%20viewBox='0%200%2024%2024'%20width='512'%20height='512'%3e%3cpath%20d='M12,12A6,6,0,1,0,6,6,6.006,6.006,0,0,0,12,12ZM12,2A4,4,0,1,1,8,6,4,4,0,0,1,12,2Z'/%3e%3cpath%20d='M12,14a9.01,9.01,0,0,0-9,9,1,1,0,0,0,2,0,7,7,0,0,1,14,0,1,1,0,0,0,2,0A9.01,9.01,0,0,0,12,14Z'/%3e%3c/svg%3e",rg=Object.freeze(Object.defineProperty({__proto__:null,angleDoubleRight:oy,crossSmall:ly,home:cy,list:fy,listCheck:uy,menuBurger:hy,moonStars:dy,question:py,sun:my,user:gy},Symbol.toStringTag,{value:"Module"}));var sn=(t=>(t.Light="light",t.Dark="dark",t))(sn||{}),mr=(t=>(t.EnUS="en-US",t.ZhTW="zh-TW",t))(mr||{});function _y(t){return t!==null}const Ca=Ju("theme",()=>{const t=Hn(sn.Light),e=localStorage.getItem("theme");_y(e)&&(t.value=e),ku(()=>localStorage.setItem("theme",t.value));function n(){switch(t.value){case sn.Light:t.value=sn.Dark;break;case sn.Dark:t.value=sn.Light;break}}const i=Tt(()=>t.value===sn.Dark),r=Tt(()=>t.value===sn.Light);return{theme:t,switchTheme:n,isDark:i,isLight:r}});function vy(t){return t!==null}const sg=Ju("lang",()=>{const{locale:t}=wi({useScope:"global"}),e=localStorage.getItem("lang");vy(e)&&(t.value=e),ku(()=>localStorage.setItem("lang",t.value));const n=()=>{switch(t.value){case mr.EnUS:t.value=mr.ZhTW;break;case mr.ZhTW:t.value=mr.EnUS;break}},i=Tt(()=>t.value===mr.EnUS),r=Tt(()=>t.value===mr.ZhTW);return{locale:t,switchLang:n,isEnUS:i,isZhTW:r}}),xy=cn({name:"global-sidebar",components:{AHoverable:ng,SwitchBtn:ig},props:{toggled:{type:Boolean,default:!1},closeSidebar:{type:Function,default:()=>{}}},setup(){const t=Ca(),e=sg(),n=ws(),{t:i}=wi();return{icons:rg,themeStore:t,langStore:e,loadingStore:n,t:i}}}),Sy={key:0,class:"fixed r-0 flex flex-col t-0 w-180 h-full pt-50 pr-10 pl-10 bg-glassy ts-1-0 z-99"},yy={class:"relative flex row j-around nly w-160 h-50 pt-24 mt-32 mr-10 ml-10 top-line"};function My(t,e,n,i,r,s){const a=Tr("AHoverable"),o=Tr("SwitchBtn");return ut(),xt(zt,null,[et(Uo,{name:"slide-from-right"},{default:ds(()=>[t.toggled&&!t.loadingStore.isLoading?(ut(),xt("aside",Sy,[et(a,{to:"home",imgSrc:t.icons.home,text:t.t("home"),shape:"pill"},null,8,["imgSrc","text"]),et(a,{to:"works",imgSrc:t.icons.list,text:t.t("work"),shape:"pill"},null,8,["imgSrc","text"]),et(a,{to:"blogs",imgSrc:t.icons.list,text:t.t("blog"),shape:"pill"},null,8,["imgSrc","text"]),Pt("div",yy,[et(o,{onSwitch:t.themeStore.switchTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["onSwitch","isActive","imgSrcL","imgSrcR"]),et(o,{onSwitch:t.langStore.switchLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["onSwitch","isActive"])])])):Vt("",!0)]),_:1}),et(Uo,{name:"fade"},{default:ds(()=>[t.toggled&&!t.loadingStore.isLoading?(ut(),xt("div",{key:0,class:"bg-dark fixed t-0 l-0 w-dvw h-dvh z-98",onClick:e[0]||(e[0]=l=>t.closeSidebar())})):Vt("",!0)]),_:1})],64)}const Ey=Zi(xy,[["render",My]]),by=cn({name:"global-header",components:{AHoverable:ng,SwitchBtn:ig,GlobalSidebar:Ey},setup(){const t=Ca(),e=sg(),n=ws(),{t:i}=wi(),r=Hn(!1);function s(){r.value=!r.value}function a(){r.value=!1}const o=()=>{window.innerWidth>640&&(r.value=!1)};return Nr(()=>window.addEventListener("resize",o)),Ts(()=>window.removeEventListener("resize",o)),{icons:rg,themeStore:t,langStore:e,loadingStore:n,t:i,toggled:r,toggleSidebar:s,closeSidebar:a}}}),Ty={key:0,class:"fixed flex row a-center j-between t-0 l-0 w-dvw h-50 font-size-16 z-100"},wy={class:"flex row j-around w-400 ml-70 sm:none"},Ay={class:"flex row a-center j-around w-116 pr-16 sm:none"},Ry=["src"],Cy=["src"];function Py(t,e,n,i,r,s){const a=Tr("AHoverable"),o=Tr("SwitchBtn"),l=Tr("GlobalSidebar");return ut(),xt(zt,null,[et(Uo,{name:"slide-from-top"},{default:ds(()=>[!t.loadingStore.isLoading&&!t.loadingStore.isFirstLoad?(ut(),xt("header",Ty,[e[1]||(e[1]=Pt("h1",{class:"absolute l-0 w-38 ml-16 mr-16 mt-auto mb-auto font-size-36 italic user-select-none"},"Pc",-1)),Pt("nav",wy,[et(a,{to:"home",effect:"underline-m",text:t.t("home")},null,8,["text"]),et(a,{to:"works",effect:"underline-m",text:t.t("work")},null,8,["text"]),et(a,{to:"blogs",effect:"underline-m",text:t.t("blog")},null,8,["text"])]),Pt("aside",Ay,[et(o,{onSwitch:t.themeStore.switchTheme,isActive:t.themeStore.isDark,imgSrcL:t.icons.sun,imgSrcR:t.icons.moonStars},null,8,["onSwitch","isActive","imgSrcL","imgSrcR"]),et(o,{onSwitch:t.langStore.switchLang,isActive:t.langStore.isEnUS,textL:"中",textR:"Eng"},null,8,["onSwitch","isActive"])]),Pt("button",{class:"none relative w-50 h-50 bg-none border-none pointer sm:block sm:ml-auto user-select-none",onClick:e[0]||(e[0]=(...c)=>t.toggleSidebar&&t.toggleSidebar(...c))},[t.toggled?Vt("",!0):(ut(),xt("img",{key:0,src:t.icons.menuBurger,alt:"menu"},null,8,Ry)),t.toggled?(ut(),xt("img",{key:1,src:t.icons.crossSmall,alt:"close"},null,8,Cy)):Vt("",!0)])])):Vt("",!0)]),_:1}),et(l,{toggled:t.toggled,closeSidebar:t.closeSidebar},null,8,["toggled","closeSidebar"])],64)}const Ly=Zi(by,[["render",Py]]),Iy=cn({__name:"App",setup(t){const e=Ca();return ku(()=>document.body.style.setProperty("--theme",e.theme)),(n,i)=>{const r=Tr("router-view");return ut(),xt(zt,null,[et($S),et(Ly),et(r)],64)}}});/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const rs=typeof document<"u";function ag(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Dy(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ag(t.default)}const ot=Object.assign;function wl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Vn(r)?r.map(t):t(r)}return n}const ea=()=>{},Vn=Array.isArray,og=/#/g,Ny=/&/g,Uy=/\//g,Fy=/=/g,Oy=/\?/g,lg=/\+/g,By=/%5B/g,ky=/%5D/g,cg=/%5E/g,Hy=/%60/g,ug=/%7B/g,zy=/%7C/g,fg=/%7D/g,Vy=/%20/g;function Qu(t){return encodeURI(""+t).replace(zy,"|").replace(By,"[").replace(ky,"]")}function Gy(t){return Qu(t).replace(ug,"{").replace(fg,"}").replace(cg,"^")}function Lc(t){return Qu(t).replace(lg,"%2B").replace(Vy,"+").replace(og,"%23").replace(Ny,"%26").replace(Hy,"`").replace(ug,"{").replace(fg,"}").replace(cg,"^")}function Wy(t){return Lc(t).replace(Fy,"%3D")}function Xy(t){return Qu(t).replace(og,"%23").replace(Oy,"%3F")}function Yy(t){return t==null?"":Xy(t).replace(Uy,"%2F")}function ga(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const $y=/\/$/,qy=t=>t.replace($y,"");function Al(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=t(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Jy(i??e,n),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:ga(a)}}function jy(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ky(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&gs(e.matched[i],n.matched[r])&&hg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Zy(t[n],e[n]))return!1;return!0}function Zy(t,e){return Vn(t)?Gh(t,e):Vn(e)?Gh(e,t):t===e}function Gh(t,e){return Vn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Jy(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Ri={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var _a;(function(t){t.pop="pop",t.push="push"})(_a||(_a={}));var ta;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ta||(ta={}));function Qy(t){if(!t)if(rs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),qy(t)}const eM=/^[^#]+#/;function tM(t,e){return t.replace(eM,"#")+e}function nM(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const el=()=>({left:window.scrollX,top:window.scrollY});function iM(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=nM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Wh(t,e){return(history.state?history.state.position-e:-1)+t}const Ic=new Map;function rM(t,e){Ic.set(t,e)}function sM(t){const e=Ic.get(t);return Ic.delete(t),e}let aM=()=>location.protocol+"//"+location.host;function dg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),Vh(l,"")}return Vh(n,t)+i+r}function oM(t,e,n,i){let r=[],s=[],a=null;const o=({state:h})=>{const p=dg(t,location),_=n.value,x=e.value;let g=0;if(h){if(n.value=p,e.value=h,a&&a===_){a=null;return}g=x?h.position-x.position:0}else i(p);r.forEach(d=>{d(n.value,_,{delta:g,type:_a.pop,direction:g?g>0?ta.forward:ta.back:ta.unknown})})};function l(){a=n.value}function c(h){r.push(h);const p=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(p),p}function u(){const{history:h}=window;h.state&&h.replaceState(ot({},h.state,{scroll:el()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Xh(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?el():null}}function lM(t){const{history:e,location:n}=window,i={value:dg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:aM()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](h)}}function a(l,c){const u=ot({},e.state,Xh(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:el()});s(u.current,u,!0);const f=ot({},Xh(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function cM(t){t=Qy(t);const e=lM(t),n=oM(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=ot({location:"",base:t,go:i,createHref:tM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function uM(t){return typeof t=="string"||t&&typeof t=="object"}function pg(t){return typeof t=="string"||typeof t=="symbol"}const mg=Symbol("");var Yh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yh||(Yh={}));function _s(t,e){return ot(new Error,{type:t,[mg]:!0},e)}function si(t,e){return t instanceof Error&&mg in t&&(e==null||!!(t.type&e))}const $h="[^/]+?",fM={sensitive:!1,strict:!1,start:!0,end:!0},hM=/[.+*?^${}()[\]/\\]/g;function dM(t,e){const n=ot({},fM,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let p=40+(n.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(hM,"\\$&"),p+=40;else if(h.type===1){const{value:_,repeatable:x,optional:g,regexp:d}=h;s.push({name:_,repeatable:x,optional:g});const y=d||$h;if(y!==$h){p+=10;try{new RegExp(`(${y})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${_}" (${y}): `+v.message)}}let M=x?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(M=g&&c.length<2?`(?:/${M})`:"/"+M),g&&(M+="?"),r+=M,p+=20,g&&(p+=-8),x&&(p+=-20),y===".*"&&(p+=-50)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const p=u[h]||"",_=s[h-1];f[_.name]=p&&_.repeatable?p.split("/"):p}return f}function l(c){let u="",f=!1;for(const h of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const p of h)if(p.type===0)u+=p.value;else if(p.type===1){const{value:_,repeatable:x,optional:g}=p,d=_ in c?c[_]:"";if(Vn(d)&&!x)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const y=Vn(d)?d.join("/"):d;if(!y)if(g)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=y}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function pM(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function gg(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=pM(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(qh(i))return 1;if(qh(r))return-1}return r.length-i.length}function qh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const mM={type:0,value:""},gM=/[a-zA-Z0-9_]/;function _M(t){if(!t)return[[]];if(t==="/")return[[mM]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=0,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),n=1):h();break;case 4:h(),n=i;break;case 1:l==="("?n=2:gM.test(l)?h():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function vM(t,e,n){const i=dM(_M(t.path),n),r=ot(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function xM(t,e){const n=[],i=new Map;e=Jh({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,p){const _=!p,x=Kh(f);x.aliasOf=p&&p.record;const g=Jh(e,f),d=[x];if("alias"in f){const v=typeof f.alias=="string"?[f.alias]:f.alias;for(const I of v)d.push(Kh(ot({},x,{components:p?p.record.components:x.components,path:I,aliasOf:p?p.record:x})))}let y,M;for(const v of d){const{path:I}=v;if(h&&I[0]!=="/"){const L=h.record.path,R=L[L.length-1]==="/"?"":"/";v.path=h.record.path+(I&&R+I)}if(y=vM(v,h,g),p?p.alias.push(y):(M=M||y,M!==y&&M.alias.push(y),_&&f.name&&!Zh(y)&&a(f.name)),_g(y)&&l(y),x.children){const L=x.children;for(let R=0;R<L.length;R++)s(L[R],y,p&&p.children[R])}p=p||y}return M?()=>{a(M)}:ea}function a(f){if(pg(f)){const h=i.get(f);h&&(i.delete(f),n.splice(n.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=n.indexOf(f);h>-1&&(n.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const h=MM(f,n);n.splice(h,0,f),f.record.name&&!Zh(f)&&i.set(f.record.name,f)}function c(f,h){let p,_={},x,g;if("name"in f&&f.name){if(p=i.get(f.name),!p)throw _s(1,{location:f});g=p.record.name,_=ot(jh(h.params,p.keys.filter(M=>!M.optional).concat(p.parent?p.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),f.params&&jh(f.params,p.keys.map(M=>M.name))),x=p.stringify(_)}else if(f.path!=null)x=f.path,p=n.find(M=>M.re.test(x)),p&&(_=p.parse(x),g=p.record.name);else{if(p=h.name?i.get(h.name):n.find(M=>M.re.test(h.path)),!p)throw _s(1,{location:f,currentLocation:h});g=p.record.name,_=ot({},h.params,f.params),x=p.stringify(_)}const d=[];let y=p;for(;y;)d.unshift(y.record),y=y.parent;return{name:g,path:x,params:_,matched:d,meta:yM(d)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function jh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Kh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:SM(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function SM(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Zh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function yM(t){return t.reduce((e,n)=>ot(e,n.meta),{})}function Jh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function MM(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;gg(t,e[s])<0?i=s:n=s+1}const r=EM(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function EM(t){let e=t;for(;e=e.parent;)if(_g(e)&&gg(t,e)===0)return e}function _g({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function bM(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(lg," "),a=s.indexOf("="),o=ga(a<0?s:s.slice(0,a)),l=a<0?null:ga(s.slice(a+1));if(o in e){let c=e[o];Vn(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Qh(t){let e="";for(let n in t){const i=t[n];if(n=Wy(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Vn(i)?i.map(s=>s&&Lc(s)):[i&&Lc(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function TM(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Vn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const wM=Symbol(""),ed=Symbol(""),ef=Symbol(""),vg=Symbol(""),Dc=Symbol("");function Us(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bi(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(_s(4,{from:n,to:e})):h instanceof Error?l(h):uM(h)?l(_s(2,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function Rl(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(ag(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Bi(u,n,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=Dy(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&Bi(p,n,i,a,o,r)()}))}}return s}function td(t){const e=Bn(ef),n=Bn(vg),i=Tt(()=>{const l=xi(t.to);return e.resolve(l)}),r=Tt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(gs.bind(null,u));if(h>-1)return h;const p=nd(l[c-2]);return c>1&&nd(u)===p&&f[f.length-1].path!==p?f.findIndex(gs.bind(null,l[c-2])):h}),s=Tt(()=>r.value>-1&&LM(n.params,i.value.params)),a=Tt(()=>r.value>-1&&r.value===n.matched.length-1&&hg(n.params,i.value.params));function o(l={}){if(PM(l)){const c=e[xi(t.replace)?"replace":"push"](xi(t.to)).catch(ea);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Tt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function AM(t){return t.length===1?t[0]:t}const RM=cn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:td,setup(t,{slots:e}){const n=ba(td(t)),{options:i}=Bn(ef),r=Tt(()=>({[id(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[id(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&AM(e.default(n));return t.custom?s:Ra("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),CM=RM;function PM(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function LM(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Vn(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function nd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const id=(t,e,n)=>t??e??n,IM=cn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Bn(Dc),r=Tt(()=>t.route||i.value),s=Bn(ed,0),a=Tt(()=>{let c=xi(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Tt(()=>r.value.matched[a.value]);ho(ed,Tt(()=>a.value+1)),ho(wM,o),ho(Dc,r);const l=Hn();return Si(()=>[l.value,o.value,t.name],([c,u,f],[h,p,_])=>{u&&(u.instances[f]=c,p&&p!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!gs(u,p)||!h)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=o.value,h=f&&f.components[u];if(!h)return rd(n.default,{Component:h,route:c});const p=f.props[u],_=p?p===!0?c.params:typeof p=="function"?p(c):p:null,g=Ra(h,ot({},_,e,{onVnodeUnmounted:d=>{d.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return rd(n.default,{Component:g,route:c})||g}}});function rd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const DM=IM;function NM(t){const e=xM(t.routes,t),n=t.parseQuery||bM,i=t.stringifyQuery||Qh,r=t.history,s=Us(),a=Us(),o=Us(),l=Nu(Ri);let c=Ri;rs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=wl.bind(null,z=>""+z),f=wl.bind(null,Yy),h=wl.bind(null,ga);function p(z,re){let le,oe;return pg(z)?(le=e.getRecordMatcher(z),oe=re):oe=z,e.addRoute(oe,le)}function _(z){const re=e.getRecordMatcher(z);re&&e.removeRoute(re)}function x(){return e.getRoutes().map(z=>z.record)}function g(z){return!!e.getRecordMatcher(z)}function d(z,re){if(re=ot({},re||l.value),typeof z=="string"){const S=Al(n,z,re.path),ne=e.resolve({path:S.path},re),Z=r.createHref(S.fullPath);return ot(S,ne,{params:h(ne.params),hash:ga(S.hash),redirectedFrom:void 0,href:Z})}let le;if(z.path!=null)le=ot({},z,{path:Al(n,z.path,re.path).path});else{const S=ot({},z.params);for(const ne in S)S[ne]==null&&delete S[ne];le=ot({},z,{params:f(S)}),re.params=f(re.params)}const oe=e.resolve(le,re),Oe=z.hash||"";oe.params=u(h(oe.params));const D=jy(i,ot({},z,{hash:Gy(Oe),path:oe.path})),N=r.createHref(D);return ot({fullPath:D,hash:Oe,query:i===Qh?TM(z.query):z.query||{}},oe,{redirectedFrom:void 0,href:N})}function y(z){return typeof z=="string"?Al(n,z,l.value.path):ot({},z)}function M(z,re){if(c!==z)return _s(8,{from:re,to:z})}function v(z){return R(z)}function I(z){return v(ot(y(z),{replace:!0}))}function L(z){const re=z.matched[z.matched.length-1];if(re&&re.redirect){const{redirect:le}=re;let oe=typeof le=="function"?le(z):le;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=y(oe):{path:oe},oe.params={}),ot({query:z.query,hash:z.hash,params:oe.path!=null?{}:z.params},oe)}}function R(z,re){const le=c=d(z),oe=l.value,Oe=z.state,D=z.force,N=z.replace===!0,S=L(le);if(S)return R(ot(y(S),{state:typeof S=="object"?ot({},Oe,S.state):Oe,force:D,replace:N}),re||le);const ne=le;ne.redirectedFrom=re;let Z;return!D&&Ky(i,oe,le)&&(Z=_s(16,{to:ne,from:oe}),we(oe,oe,!0,!1)),(Z?Promise.resolve(Z):T(ne,oe)).catch(K=>si(K)?si(K,2)?K:ve(K):$(K,ne,oe)).then(K=>{if(K){if(si(K,2))return R(ot({replace:N},y(K.to),{state:typeof K.to=="object"?ot({},Oe,K.to.state):Oe,force:D}),re||ne)}else K=B(ne,oe,!0,N,Oe);return F(ne,oe,K),K})}function O(z,re){const le=M(z,re);return le?Promise.reject(le):Promise.resolve()}function E(z){const re=se.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(z):z()}function T(z,re){let le;const[oe,Oe,D]=UM(z,re);le=Rl(oe.reverse(),"beforeRouteLeave",z,re);for(const S of oe)S.leaveGuards.forEach(ne=>{le.push(Bi(ne,z,re))});const N=O.bind(null,z,re);return le.push(N),Me(le).then(()=>{le=[];for(const S of s.list())le.push(Bi(S,z,re));return le.push(N),Me(le)}).then(()=>{le=Rl(Oe,"beforeRouteUpdate",z,re);for(const S of Oe)S.updateGuards.forEach(ne=>{le.push(Bi(ne,z,re))});return le.push(N),Me(le)}).then(()=>{le=[];for(const S of D)if(S.beforeEnter)if(Vn(S.beforeEnter))for(const ne of S.beforeEnter)le.push(Bi(ne,z,re));else le.push(Bi(S.beforeEnter,z,re));return le.push(N),Me(le)}).then(()=>(z.matched.forEach(S=>S.enterCallbacks={}),le=Rl(D,"beforeRouteEnter",z,re,E),le.push(N),Me(le))).then(()=>{le=[];for(const S of a.list())le.push(Bi(S,z,re));return le.push(N),Me(le)}).catch(S=>si(S,8)?S:Promise.reject(S))}function F(z,re,le){o.list().forEach(oe=>E(()=>oe(z,re,le)))}function B(z,re,le,oe,Oe){const D=M(z,re);if(D)return D;const N=re===Ri,S=rs?history.state:{};le&&(oe||N?r.replace(z.fullPath,ot({scroll:N&&S&&S.scroll},Oe)):r.push(z.fullPath,Oe)),l.value=z,we(z,re,le,N),ve()}let W;function ie(){W||(W=r.listen((z,re,le)=>{if(!_e.listening)return;const oe=d(z),Oe=L(oe);if(Oe){R(ot(Oe,{replace:!0,force:!0}),oe).catch(ea);return}c=oe;const D=l.value;rs&&rM(Wh(D.fullPath,le.delta),el()),T(oe,D).catch(N=>si(N,12)?N:si(N,2)?(R(ot(y(N.to),{force:!0}),oe).then(S=>{si(S,20)&&!le.delta&&le.type===_a.pop&&r.go(-1,!1)}).catch(ea),Promise.reject()):(le.delta&&r.go(-le.delta,!1),$(N,oe,D))).then(N=>{N=N||B(oe,D,!1),N&&(le.delta&&!si(N,8)?r.go(-le.delta,!1):le.type===_a.pop&&si(N,20)&&r.go(-1,!1)),F(oe,D,N)}).catch(ea)}))}let ae=Us(),ee=Us(),J;function $(z,re,le){ve(z);const oe=ee.list();return oe.length?oe.forEach(Oe=>Oe(z,re,le)):console.error(z),Promise.reject(z)}function pe(){return J&&l.value!==Ri?Promise.resolve():new Promise((z,re)=>{ae.add([z,re])})}function ve(z){return J||(J=!z,ie(),ae.list().forEach(([re,le])=>z?le(z):re()),ae.reset()),z}function we(z,re,le,oe){const{scrollBehavior:Oe}=t;if(!rs||!Oe)return Promise.resolve();const D=!le&&sM(Wh(z.fullPath,0))||(oe||!le)&&history.state&&history.state.scroll||null;return Uu().then(()=>Oe(z,re,D)).then(N=>N&&iM(N)).catch(N=>$(N,z,re))}const Fe=z=>r.go(z);let je;const se=new Set,_e={currentRoute:l,listening:!0,addRoute:p,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:x,resolve:d,options:t,push:v,replace:I,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:ee.add,isReady:pe,install(z){const re=this;z.component("RouterLink",CM),z.component("RouterView",DM),z.config.globalProperties.$router=re,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>xi(l)}),rs&&!je&&l.value===Ri&&(je=!0,v(r.location).catch(Oe=>{}));const le={};for(const Oe in Ri)Object.defineProperty(le,Oe,{get:()=>l.value[Oe],enumerable:!0});z.provide(ef,re),z.provide(vg,Bp(le)),z.provide(Dc,l);const oe=z.unmount;se.add(z),z.unmount=function(){se.delete(z),se.size<1&&(c=Ri,W&&W(),W=null,l.value=Ri,je=!1,J=!1),oe()}}};function Me(z){return z.reduce((re,le)=>re.then(()=>E(le)),Promise.resolve())}return _e}function UM(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>gs(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>gs(c,l))||r.push(l))}return[n,i,r]}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="177",FM=0,sd=1,OM=2,xg=1,Sg=2,fi=3,$i=0,on=1,mi=2,Gi=0,us=1,ad=2,od=3,ld=4,BM=5,xr=100,kM=101,HM=102,zM=103,VM=104,GM=200,WM=201,XM=202,YM=203,Nc=204,Uc=205,$M=206,qM=207,jM=208,KM=209,ZM=210,JM=211,QM=212,eE=213,tE=214,Fc=0,Oc=1,Bc=2,vs=3,kc=4,Hc=5,zc=6,Vc=7,tl=0,nE=1,iE=2,Wi=0,rE=1,sE=2,aE=3,oE=4,lE=5,cE=6,uE=7,yg=300,xs=301,Ss=302,Gc=303,Wc=304,nl=306,va=1e3,Mr=1001,Xc=1002,gn=1003,fE=1004,Va=1005,jn=1006,Cl=1007,Er=1008,ei=1009,Mg=1010,Eg=1011,xa=1012,nf=1013,Cr=1014,Kn=1015,Pa=1016,rf=1017,sf=1018,Sa=1020,bg=35902,Tg=1021,wg=1022,Un=1023,ya=1026,Ma=1027,af=1028,of=1029,Ag=1030,lf=1031,cf=1033,vo=33776,xo=33777,So=33778,yo=33779,Yc=35840,$c=35841,qc=35842,jc=35843,Kc=36196,Zc=37492,Jc=37496,Qc=37808,eu=37809,tu=37810,nu=37811,iu=37812,ru=37813,su=37814,au=37815,ou=37816,lu=37817,cu=37818,uu=37819,fu=37820,hu=37821,Mo=36492,du=36494,pu=36495,Rg=36283,mu=36284,gu=36285,_u=36286,hE=3200,dE=3201,il=0,pE=1,Hi="",Mn="srgb",ys="srgb-linear",Oo="linear",dt="srgb",Hr=7680,cd=519,mE=512,gE=513,_E=514,Cg=515,vE=516,xE=517,SE=518,yE=519,ud=35044,fd="300 es",vi=2e3,Bo=2001;class As{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hd=1234567;const na=Math.PI/180,Ms=180/Math.PI;function Rs(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ze(t,e,n){return Math.max(e,Math.min(n,t))}function uf(t,e){return(t%e+e)%e}function ME(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function EE(t,e,n){return t!==e?(n-t)/(e-t):0}function ia(t,e,n){return(1-n)*t+n*e}function bE(t,e,n,i){return ia(t,e,1-Math.exp(-n*i))}function TE(t,e=1){return e-Math.abs(uf(t,e*2)-e)}function wE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function AE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function RE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function CE(t,e){return t+Math.random()*(e-t)}function PE(t){return t*(.5-Math.random())}function LE(t){t!==void 0&&(hd=t);let e=hd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function IE(t){return t*na}function DE(t){return t*Ms}function NE(t){return(t&t-1)===0&&t!==0}function UE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function FE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function OE(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),p=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*f,l*h,o*c);break;case"YZY":t.set(l*h,o*u,l*f,o*c);break;case"ZXZ":t.set(l*f,l*h,o*u,o*c);break;case"XZX":t.set(o*u,l*_,l*p,o*c);break;case"YXY":t.set(l*p,o*u,l*_,o*c);break;case"ZYZ":t.set(l*_,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ss(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Fn={DEG2RAD:na,RAD2DEG:Ms,generateUUID:Rs,clamp:Ze,euclideanModulo:uf,mapLinear:ME,inverseLerp:EE,lerp:ia,damp:bE,pingpong:TE,smoothstep:wE,smootherstep:AE,randInt:RE,randFloat:CE,randFloatSpread:PE,seededRandom:LE,degToRad:IE,radToDeg:DE,isPowerOfTwo:NE,ceilPowerOfTwo:UE,floorPowerOfTwo:FE,setQuaternionFromProperEuler:OE,normalize:Qt,denormalize:ss};class qe{constructor(e=0,n=0){qe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class La{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o===1){e[n+0]=h,e[n+1]=p,e[n+2]=_,e[n+3]=x;return}if(f!==x||l!==h||c!==p||u!==_){let g=1-o;const d=l*h+c*p+u*_+f*x,y=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const I=Math.sqrt(M),L=Math.atan2(I,d*y);g=Math.sin(g*L)/I,o=Math.sin(o*L)/I}const v=o*y;if(l=l*g+h*v,c=c*g+p*v,u=u*g+_*v,f=f*g+x*v,g===1-o){const I=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=I,c*=I,u*=I,f*=I}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],_=s[a+3];return e[n]=o*_+u*f+l*p-c*h,e[n+1]=l*_+u*h+c*f-o*p,e[n+2]=c*_+u*p+o*h-l*f,e[n+3]=u*_-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Pl.copy(this).projectOnVector(e),this.sub(Pl)}reflect(e){return this.sub(Pl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pl=new Y,dd=new La;class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],_=i[8],x=r[0],g=r[3],d=r[6],y=r[1],M=r[4],v=r[7],I=r[2],L=r[5],R=r[8];return s[0]=a*x+o*y+l*I,s[3]=a*g+o*M+l*L,s[6]=a*d+o*v+l*R,s[1]=c*x+u*y+f*I,s[4]=c*g+u*M+f*L,s[7]=c*d+u*v+f*R,s[2]=h*x+p*y+_*I,s[5]=h*g+p*M+_*L,s[8]=h*d+p*v+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,_=n*f+i*h+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=h*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ll.makeScale(e,n)),this}rotate(e){return this.premultiply(Ll.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ll.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ll=new Ye;function Pg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ea(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function BE(){const t=Ea("canvas");return t.style.display="block",t}const pd={};function fs(t){t in pd||(pd[t]=!0,console.warn(t))}function kE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function HE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const md=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gd=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function VE(){const t={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=hs(r.r),r.g=hs(r.g),r.b=hs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Hi?Oo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ys]:{primaries:e,whitePoint:i,transfer:Oo,toXYZ:md,fromXYZ:gd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Mn},outputColorSpaceConfig:{drawingBufferColorSpace:Mn}},[Mn]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:md,fromXYZ:gd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Mn}}}),t}const it=VE();function yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function hs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let zr;class GE{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{zr===void 0&&(zr=Ea("canvas")),zr.width=e.width,zr.height=e.height;const r=zr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=zr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ea("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yi(n[i]/255)*255):n[i]=yi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WE=0;class ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Il(r[a].image)):s.push(Il(r[a]))}else s=Il(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Il(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?GE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XE=0;const Dl=new Y;class Kt extends As{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=Mr,r=Mr,s=jn,a=Er,o=Un,l=ei,c=Kt.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Rs(),this.name="",this.source=new ff(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dl).x}get height(){return this.source.getSize(Dl).y}get depth(){return this.source.getSize(Dl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case va:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case va:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=yg;Kt.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,n=0,i=0,r=1){pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],_=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,v=(p+1)/2,I=(d+1)/2,L=(u+h)/4,R=(f+x)/4,O=(_+g)/4;return M>v&&M>I?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=L/i,s=R/i):v>I?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=L/r,s=O/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=R/s,r=O/s),this.set(i,r,s,n),this}let y=Math.sqrt((g-_)*(g-_)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(f-x)/y,this.z=(h-u)/y,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ze(this.x,e.x,n.x),this.y=Ze(this.y,e.y,n.y),this.z=Ze(this.z,e.z,n.z),this.w=Ze(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ze(this.x,e,n),this.y=Ze(this.y,e,n),this.z=Ze(this.z,e,n),this.w=Ze(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YE extends As{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new pt(0,0,e,n),this.scissorTest=!1,this.viewport=new pt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Kt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:jn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ff(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends YE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Lg extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $E extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=gn,this.minFilter=gn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Cn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Cn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Cn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Cn):Cn.fromBufferAttribute(s,a),Cn.applyMatrix4(e.matrixWorld),this.expandByPoint(Cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ga.copy(i.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Cn),Cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Wa.subVectors(this.max,Fs),Vr.subVectors(e.a,Fs),Gr.subVectors(e.b,Fs),Wr.subVectors(e.c,Fs),Ci.subVectors(Gr,Vr),Pi.subVectors(Wr,Gr),lr.subVectors(Vr,Wr);let n=[0,-Ci.z,Ci.y,0,-Pi.z,Pi.y,0,-lr.z,lr.y,Ci.z,0,-Ci.x,Pi.z,0,-Pi.x,lr.z,0,-lr.x,-Ci.y,Ci.x,0,-Pi.y,Pi.x,0,-lr.y,lr.x,0];return!Nl(n,Vr,Gr,Wr,Wa)||(n=[1,0,0,0,1,0,0,0,1],!Nl(n,Vr,Gr,Wr,Wa))?!1:(Xa.crossVectors(Ci,Pi),n=[Xa.x,Xa.y,Xa.z],Nl(n,Vr,Gr,Wr,Wa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ai=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Cn=new Y,Ga=new Ur,Vr=new Y,Gr=new Y,Wr=new Y,Ci=new Y,Pi=new Y,lr=new Y,Fs=new Y,Wa=new Y,Xa=new Y,cr=new Y;function Nl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){cr.fromArray(t,s);const o=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),c=n.dot(cr),u=i.dot(cr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qE=new Ur,Os=new Y,Ul=new Y;class Ia{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);const n=Os.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Os,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(Ul)),this.expandByPoint(Os.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oi=new Y,Fl=new Y,Ya=new Y,Li=new Y,Ol=new Y,$a=new Y,Bl=new Y;class Ig{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,n),oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fl.copy(e).add(n).multiplyScalar(.5),Ya.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(Fl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Ya),o=Li.dot(this.direction),l=-Li.dot(Ya),c=Li.lengthSq(),u=Math.abs(1-a*a);let f,h,p,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const x=1/u;f*=x,h*=x,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fl).addScaledVector(Ya,h),p}intersectSphere(e,n){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),r=oi.dot(oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,n,i,r,s){Ol.subVectors(n,e),$a.subVectors(i,e),Bl.crossVectors(Ol,$a);let a=this.direction.dot(Bl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Li.subVectors(this.origin,e);const l=o*this.direction.dot($a.crossVectors(Li,$a));if(l<0)return null;const c=o*this.direction.dot(Ol.cross(Li));if(c<0||l+c>a)return null;const u=-o*Li.dot(Bl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,a,o,l,c,u,f,h,p,_,x,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,h,p,_,x,g)}set(e,n,i,r,s,a,o,l,c,u,f,h,p,_,x,g){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,_=o*u,x=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+_*c,n[5]=h-x*c,n[9]=-o*l,n[2]=x-h*c,n[6]=_+p*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,_=c*u,x=c*f;n[0]=h+x*o,n[4]=_*o-p,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=p*o-_,n[6]=x+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,_=c*u,x=c*f;n[0]=h-x*o,n[4]=-a*f,n[8]=_+p*o,n[1]=p+_*o,n[5]=a*u,n[9]=x-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,_=o*u,x=o*f;n[0]=l*u,n[4]=_*c-p,n[8]=h*c+x,n[1]=l*f,n[5]=x*c+h,n[9]=p*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=x-h*f,n[8]=_*f+p,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=p*f+_,n[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,p=a*c,_=o*l,x=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+x,n[5]=a*u,n[9]=p*f-_,n[2]=_*f-p,n[6]=o*u,n[10]=x*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jE,e,KE)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Ii.crossVectors(i,fn),Ii.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Ii.crossVectors(i,fn)),Ii.normalize(),qa.crossVectors(fn,Ii),r[0]=Ii.x,r[4]=qa.x,r[8]=fn.x,r[1]=Ii.y,r[5]=qa.y,r[9]=fn.y,r[2]=Ii.z,r[6]=qa.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],_=i[2],x=i[6],g=i[10],d=i[14],y=i[3],M=i[7],v=i[11],I=i[15],L=r[0],R=r[4],O=r[8],E=r[12],T=r[1],F=r[5],B=r[9],W=r[13],ie=r[2],ae=r[6],ee=r[10],J=r[14],$=r[3],pe=r[7],ve=r[11],we=r[15];return s[0]=a*L+o*T+l*ie+c*$,s[4]=a*R+o*F+l*ae+c*pe,s[8]=a*O+o*B+l*ee+c*ve,s[12]=a*E+o*W+l*J+c*we,s[1]=u*L+f*T+h*ie+p*$,s[5]=u*R+f*F+h*ae+p*pe,s[9]=u*O+f*B+h*ee+p*ve,s[13]=u*E+f*W+h*J+p*we,s[2]=_*L+x*T+g*ie+d*$,s[6]=_*R+x*F+g*ae+d*pe,s[10]=_*O+x*B+g*ee+d*ve,s[14]=_*E+x*W+g*J+d*we,s[3]=y*L+M*T+v*ie+I*$,s[7]=y*R+M*F+v*ae+I*pe,s[11]=y*O+M*B+v*ee+I*ve,s[15]=y*E+M*W+v*J+I*we,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],_=e[3],x=e[7],g=e[11],d=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*p-i*l*p)+x*(+n*l*p-n*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+g*(+n*c*f-n*o*p-s*a*f+i*a*p+s*o*u-i*c*u)+d*(-r*o*u-n*l*f+n*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],_=e[12],x=e[13],g=e[14],d=e[15],y=f*g*c-x*h*c+x*l*p-o*g*p-f*l*d+o*h*d,M=_*h*c-u*g*c-_*l*p+a*g*p+u*l*d-a*h*d,v=u*x*c-_*f*c+_*o*p-a*x*p-u*o*d+a*f*d,I=_*f*l-u*x*l-_*o*h+a*x*h+u*o*g-a*f*g,L=n*y+i*M+r*v+s*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/L;return e[0]=y*R,e[1]=(x*h*s-f*g*s-x*r*p+i*g*p+f*r*d-i*h*d)*R,e[2]=(o*g*s-x*l*s+x*r*c-i*g*c-o*r*d+i*l*d)*R,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*R,e[4]=M*R,e[5]=(u*g*s-_*h*s+_*r*p-n*g*p-u*r*d+n*h*d)*R,e[6]=(_*l*s-a*g*s-_*r*c+n*g*c+a*r*d-n*l*d)*R,e[7]=(a*h*s-u*l*s+u*r*c-n*h*c-a*r*p+n*l*p)*R,e[8]=v*R,e[9]=(_*f*s-u*x*s-_*i*p+n*x*p+u*i*d-n*f*d)*R,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*d+n*o*d)*R,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*p-n*o*p)*R,e[12]=I*R,e[13]=(u*x*r-_*f*r+_*i*h-n*x*h-u*i*g+n*f*g)*R,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*g-n*o*g)*R,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*h+n*o*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,_=s*f,x=a*u,g=a*f,d=o*f,y=l*c,M=l*u,v=l*f,I=i.x,L=i.y,R=i.z;return r[0]=(1-(x+d))*I,r[1]=(p+v)*I,r[2]=(_-M)*I,r[3]=0,r[4]=(p-v)*L,r[5]=(1-(h+d))*L,r[6]=(g+y)*L,r[7]=0,r[8]=(_+M)*R,r[9]=(g-y)*R,r[10]=(1-(h+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Xr.set(r[0],r[1],r[2]).length();const a=Xr.set(r[4],r[5],r[6]).length(),o=Xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Pn.copy(this);const c=1/s,u=1/a,f=1/o;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,n.setFromRotationMatrix(Pn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=vi){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,_;if(o===vi)p=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Bo)p=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=vi){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(a-s),h=(n+e)*c,p=(i+r)*u;let _,x;if(o===vi)_=(a+s)*f,x=-2*f;else if(o===Bo)_=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new Y,Pn=new _t,jE=new Y(0,0,0),KE=new Y(1,1,1),Ii=new Y,qa=new Y,fn=new Y,_d=new _t,vd=new La;class wn{constructor(e=0,n=0,i=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _d.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_d,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return vd.setFromEuler(this),this.setFromQuaternion(vd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class hf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZE=0;const xd=new Y,Yr=new La,li=new _t,ja=new Y,Bs=new Y,JE=new Y,QE=new La,Sd=new Y(1,0,0),yd=new Y(0,1,0),Md=new Y(0,0,1),Ed={type:"added"},eb={type:"removed"},$r={type:"childadded",child:null},kl={type:"childremoved",child:null};class Gt extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new Y,n=new wn,i=new La,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ye}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(yd,e)}rotateZ(e){return this.rotateOnAxis(Md,e)}translateOnAxis(e,n){return xd.copy(e).applyQuaternion(this.quaternion),this.position.add(xd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(yd,e)}translateZ(e){return this.translateOnAxis(Md,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ja.copy(e):ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Bs,ja,this.up):li.lookAt(ja,Bs,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(li),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ed),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eb),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ed),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,JE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,QE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new Y(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new Y,ci=new Y,Hl=new Y,ui=new Y,qr=new Y,jr=new Y,bd=new Y,zl=new Y,Vl=new Y,Gl=new Y,Wl=new pt,Xl=new pt,Yl=new pt;class In{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Ln.subVectors(e,n),r.cross(Ln);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Ln.subVectors(r,n),ci.subVectors(i,n),Hl.subVectors(e,n);const a=Ln.dot(Ln),o=Ln.dot(ci),l=Ln.dot(Hl),c=ci.dot(ci),u=ci.dot(Hl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(a,ui.y),l.addScaledVector(o,ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Wl.setScalar(0),Xl.setScalar(0),Yl.setScalar(0),Wl.fromBufferAttribute(e,n),Xl.fromBufferAttribute(e,i),Yl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wl,s.x),a.addScaledVector(Xl,s.y),a.addScaledVector(Yl,s.z),a}static isFrontFacing(e,n,i,r){return Ln.subVectors(i,n),ci.subVectors(e,n),Ln.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Ln.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;qr.subVectors(r,i),jr.subVectors(s,i),zl.subVectors(e,i);const l=qr.dot(zl),c=jr.dot(zl);if(l<=0&&c<=0)return n.copy(i);Vl.subVectors(e,r);const u=qr.dot(Vl),f=jr.dot(Vl);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(qr,a);Gl.subVectors(e,s);const p=qr.dot(Gl),_=jr.dot(Gl);if(_>=0&&p<=_)return n.copy(s);const x=p*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(jr,o);const g=u*_-p*f;if(g<=0&&f-u>=0&&p-_>=0)return bd.subVectors(s,r),o=(f-u)/(f-u+(p-_)),n.copy(r).addScaledVector(bd,o);const d=1/(g+x+h);return a=x*d,o=h*d,n.copy(i).addScaledVector(qr,a).addScaledVector(jr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function $l(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=uf(e,1),n=Ze(n,0,1),i=Ze(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=$l(a,s,e+1/3),this.g=$l(a,s,e),this.b=$l(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=Dg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return it.workingToColorSpace(Xt.copy(this),e),Math.round(Ze(Xt.r*255,0,255))*65536+Math.round(Ze(Xt.g*255,0,255))*256+Math.round(Ze(Xt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(Xt.copy(this),n);const i=Xt.r,r=Xt.g,s=Xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(Xt.copy(this),n),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Mn){it.workingToColorSpace(Xt.copy(this),e);const n=Xt.r,i=Xt.g,r=Xt.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Ka);const i=ia(Di.h,Ka.h,n),r=ia(Di.s,Ka.s,n),s=ia(Di.l,Ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Je;Je.NAMES=Dg;let tb=0;class Fr extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=us,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nc,this.blendDst=Uc,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==us&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nc&&(i.blendSrc=this.blendSrc),this.blendDst!==Uc&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class rl extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new Y,Za=new qe;let nb=0;class kn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ud,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Za.fromBufferAttribute(this,n),Za.applyMatrix3(e),this.setXY(n,Za.x,Za.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ss(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ss(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ss(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ss(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ss(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ud&&(e.usage=this.usage),e}}class Ng extends kn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ug extends kn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Qn extends kn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ib=0;const yn=new _t,ql=new Gt,Kr=new Y,hn=new Ur,ks=new Ur,Ft=new Y;class tr extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Ug:Ng)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,n,i){return yn.makeTranslation(e,n,i),this.applyMatrix4(yn),this}scale(e,n,i){return yn.makeScale(e,n,i),this.applyMatrix4(yn),this}lookAt(e){return ql.lookAt(e),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kr).negate(),this.translate(Kr.x,Kr.y,Kr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ur);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(hn.min,ks.min),hn.expandByPoint(Ft),Ft.addVectors(hn.max,ks.max),hn.expandByPoint(Ft)):(hn.expandByPoint(ks.min),hn.expandByPoint(ks.max))}hn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Kr.fromBufferAttribute(e,c),Ft.add(Kr)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new Y,l[O]=new Y;const c=new Y,u=new Y,f=new Y,h=new qe,p=new qe,_=new qe,x=new Y,g=new Y;function d(O,E,T){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,T),h.fromBufferAttribute(s,O),p.fromBufferAttribute(s,E),_.fromBufferAttribute(s,T),u.sub(c),f.sub(c),p.sub(h),_.sub(h);const F=1/(p.x*_.y-_.x*p.y);isFinite(F)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(F),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(F),o[O].add(x),o[E].add(x),o[T].add(x),l[O].add(g),l[E].add(g),l[T].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let O=0,E=y.length;O<E;++O){const T=y[O],F=T.start,B=T.count;for(let W=F,ie=F+B;W<ie;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const M=new Y,v=new Y,I=new Y,L=new Y;function R(O){I.fromBufferAttribute(r,O),L.copy(I);const E=o[O];M.copy(E),M.sub(I.multiplyScalar(I.dot(E))).normalize(),v.crossVectors(L,E);const F=v.dot(l[O])<0?-1:1;a.setXYZW(O,M.x,M.y,M.z,F)}for(let O=0,E=y.length;O<E;++O){const T=y[O],F=T.start,B=T.count;for(let W=F,ie=F+B;W<ie;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new kn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new Y,s=new Y,a=new Y,o=new Y,l=new Y,c=new Y,u=new Y,f=new Y;if(e)for(let h=0,p=e.count;h<p;h+=3){const _=e.getX(h+0),x=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,_=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new kn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tr,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Td=new _t,ur=new Ig,Ja=new Ia,wd=new Y,Qa=new Y,eo=new Y,to=new Y,jl=new Y,no=new Y,Ad=new Y,io=new Y;class Ot extends Gt{constructor(e=new tr,n=new rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){no.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(jl.fromBufferAttribute(f,e),a?no.addScaledVector(jl,u):no.addScaledVector(jl.sub(n),u))}n.add(no)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ja.copy(i.boundingSphere),Ja.applyMatrix4(s),ur.copy(e.ray).recast(e.near),!(Ja.containsPoint(ur.origin)===!1&&(ur.intersectSphere(Ja,wd)===null||ur.origin.distanceToSquared(wd)>(e.far-e.near)**2))&&(Td.copy(s).invert(),ur.copy(e.ray).applyMatrix4(Td),!(i.boundingBox!==null&&ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const g=h[_],d=a[g.materialIndex],y=Math.max(g.start,p.start),M=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let v=y,I=M;v<I;v+=3){const L=o.getX(v),R=o.getX(v+1),O=o.getX(v+2);r=ro(this,d,e,i,c,u,f,L,R,O),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=_,d=x;g<d;g+=3){const y=o.getX(g),M=o.getX(g+1),v=o.getX(g+2);r=ro(this,a,e,i,c,u,f,y,M,v),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const g=h[_],d=a[g.materialIndex],y=Math.max(g.start,p.start),M=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=y,I=M;v<I;v+=3){const L=v,R=v+1,O=v+2;r=ro(this,d,e,i,c,u,f,L,R,O),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=_,d=x;g<d;g+=3){const y=g,M=g+1,v=g+2;r=ro(this,a,e,i,c,u,f,y,M,v),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function rb(t,e,n,i,r,s,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===$i,o),l===null)return null;io.copy(o),io.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(io);return c<n.near||c>n.far?null:{distance:c,point:io.clone(),object:t}}function ro(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Qa),t.getVertexPosition(l,eo),t.getVertexPosition(c,to);const u=rb(t,e,n,i,Qa,eo,to,Ad);if(u){const f=new Y;In.getBarycoord(Ad,Qa,eo,to,f),r&&(u.uv=In.getInterpolatedAttribute(r,o,l,c,f,new qe)),s&&(u.uv1=In.getInterpolatedAttribute(s,o,l,c,f,new qe)),a&&(u.normal=In.getInterpolatedAttribute(a,o,l,c,f,new Y),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new Y,materialIndex:0};In.getNormal(Qa,eo,to,h.normal),u.face=h,u.barycoord=f}return u}class Cs extends tr{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qn(c,3)),this.setAttribute("normal",new Qn(u,3)),this.setAttribute("uv",new Qn(f,2));function _(x,g,d,y,M,v,I,L,R,O,E){const T=v/R,F=I/O,B=v/2,W=I/2,ie=L/2,ae=R+1,ee=O+1;let J=0,$=0;const pe=new Y;for(let ve=0;ve<ee;ve++){const we=ve*F-W;for(let Fe=0;Fe<ae;Fe++){const je=Fe*T-B;pe[x]=je*y,pe[g]=we*M,pe[d]=ie,c.push(pe.x,pe.y,pe.z),pe[x]=0,pe[g]=0,pe[d]=L>0?1:-1,u.push(pe.x,pe.y,pe.z),f.push(Fe/R),f.push(1-ve/O),J+=1}}for(let ve=0;ve<O;ve++)for(let we=0;we<R;we++){const Fe=h+we+ae*ve,je=h+we+ae*(ve+1),se=h+(we+1)+ae*(ve+1),_e=h+(we+1)+ae*ve;l.push(Fe,je,_e),l.push(je,se,_e),$+=6}o.addGroup(p,$,E),p+=$,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Es(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=Es(t[n]);for(const r in i)e[r]=i[r]}return e}function sb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Fg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const ab={clone:Es,merge:en};var ob=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ob,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}let Og=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=vi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Ni=new Y,Rd=new qe,Cd=new qe;class an extends Og{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,Rd,Cd),n.subVectors(Cd,Rd)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(na*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Zr=-90,Jr=1;class cb extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Zr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new an(Zr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new an(Zr,Jr,e,n);a.layers=this.layers,this.add(a);const o=new an(Zr,Jr,e,n);o.layers=this.layers,this.add(o);const l=new an(Zr,Jr,e,n);l.layers=this.layers,this.add(l);const c=new an(Zr,Jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Bg extends Kt{constructor(e=[],n=xs,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ub extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cs(5,5,5),s=new qi({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Gi});s.uniforms.tEquirect.value=n;const a=new Ot(r,s),o=n.minFilter;return n.minFilter===Er&&(n.minFilter=jn),new cb(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class so extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fb={type:"move"};class Kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=n.getJointPose(x,i),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fb)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new so;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class kg extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class hb extends Kt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=gn,u=gn,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pd extends kn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Qr=new _t,Ld=new _t,ao=[],Id=new Ur,db=new _t,Hs=new Ot,zs=new Ia;class pb extends Ot{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Pd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,db)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ur),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Qr),Id.copy(e.boundingBox).applyMatrix4(Qr),this.boundingBox.union(Id)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ia),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Qr),zs.copy(e.boundingSphere).applyMatrix4(Qr),this.boundingSphere.union(zs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(i),e.ray.intersectsSphere(zs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Qr),Ld.multiplyMatrices(i,Qr),Hs.matrixWorld=Ld,Hs.raycast(e,ao);for(let a=0,o=ao.length;a<o;a++){const l=ao[a];l.instanceId=s,l.object=this,n.push(l)}ao.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Pd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hb(new Float32Array(r*this.count),r,this.count,af,Kn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Zl=new Y,mb=new Y,gb=new Ye;class gr{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zl.subVectors(i,n).cross(mb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gb.getNormalMatrix(e),r=this.coplanarPoint(Zl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fr=new Ia,oo=new Y;class df{constructor(e=new gr,n=new gr,i=new gr,r=new gr,s=new gr,a=new gr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],_=r[9],x=r[10],g=r[11],d=r[12],y=r[13],M=r[14],v=r[15];if(i[0].setComponents(l-s,h-c,g-p,v-d).normalize(),i[1].setComponents(l+s,h+c,g+p,v+d).normalize(),i[2].setComponents(l+a,h+u,g+_,v+y).normalize(),i[3].setComponents(l-a,h-u,g-_,v-y).normalize(),i[4].setComponents(l-o,h-f,g-x,v-M).normalize(),n===vi)i[5].setComponents(l+o,h+f,g+x,v+M).normalize();else if(n===Bo)i[5].setComponents(o,f,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){return fr.center.set(0,0,0),fr.radius=.7071067811865476,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(oo.x=r.normal.x>0?e.max.x:e.min.x,oo.y=r.normal.y>0?e.max.y:e.min.y,oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hg extends Kt{constructor(e,n,i=Cr,r,s,a,o=gn,l=gn,c,u=ya,f=1){if(u!==ya&&u!==Ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ff(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Lr extends tr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=n/l,p=[],_=[],x=[],g=[];for(let d=0;d<u;d++){const y=d*h-a;for(let M=0;M<c;M++){const v=M*f-s;_.push(v,-y,0),x.push(0,0,1),g.push(M/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<o;y++){const M=y+c*d,v=y+c*(d+1),I=y+1+c*(d+1),L=y+1+c*d;p.push(M,v,L),p.push(v,I,L)}this.setIndex(p),this.setAttribute("position",new Qn(_,3)),this.setAttribute("normal",new Qn(x,3)),this.setAttribute("uv",new Qn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class pf extends tr{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new Y,h=new Y,p=[],_=[],x=[],g=[];for(let d=0;d<=i;d++){const y=[],M=d/i;let v=0;d===0&&a===0?v=.5/n:d===i&&l===Math.PI&&(v=-.5/n);for(let I=0;I<=n;I++){const L=I/n;f.x=-e*Math.cos(r+L*s)*Math.sin(a+M*o),f.y=e*Math.cos(a+M*o),f.z=e*Math.sin(r+L*s)*Math.sin(a+M*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),g.push(L+v,1-M),y.push(c++)}u.push(y)}for(let d=0;d<i;d++)for(let y=0;y<n;y++){const M=u[d][y+1],v=u[d][y],I=u[d+1][y],L=u[d+1][y+1];(d!==0||a>0)&&p.push(M,v,L),(d!==i-1||l<Math.PI)&&p.push(v,I,L)}this.setIndex(p),this.setAttribute("position",new Qn(_,3)),this.setAttribute("normal",new Qn(x,3)),this.setAttribute("uv",new Qn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _b extends Fr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vb extends Fr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xb extends Fr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Sb extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yb extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Mb{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const Eb=new Mb;class mf{constructor(e){this.manager=e!==void 0?e:Eb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}mf.DEFAULT_MATERIAL_NAME="__DEFAULT";class bb extends mf{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Dd.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0),a;const o=Ea("img");function l(){u(),Dd.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class Tb extends mf{constructor(e){super(e)}load(e,n,i,r){const s=new Kt,a=new bb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class gf extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Jl=new _t,Nd=new Y,Ud=new Y;class zg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new df,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Nd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nd),Ud.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ud),n.updateMatrixWorld(),Jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wb extends zg{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,i=Ms*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||n.far;(i!==n.fov||r!==n.aspect||s!==n.far)&&(n.fov=i,n.aspect=r,n.far=s,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Fd extends gf{constructor(e,n,i=0,r=Math.PI/3,s=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new wb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Od=new _t,Vs=new Y,Ql=new Y;class Ab extends zg{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qe(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vs),Ql.copy(i.position),Ql.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Ql),i.updateMatrixWorld(),r.makeTranslation(-Vs.x,-Vs.y,-Vs.z),Od.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Od)}}class Rb extends gf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ab}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Vg extends Og{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Gg extends gf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cb extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Pb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Bd();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Bd(){return performance.now()}const kd=new _t;class Hd{constructor(e,n,i=0,r=1/0){this.ray=new Ig(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new hf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return kd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kd),this}intersectObject(e,n=!0,i=[]){return vu(e,this,i,n),i.sort(zd),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vu(e[r],this,i,n);return i.sort(zd),i}}function zd(t,e){return t.distance-e.distance}function vu(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)vu(s[a],e,n,!0)}}function Vd(t,e,n,i){const r=Lb(i);switch(n){case Tg:return t*e;case af:return t*e/r.components*r.byteLength;case of:return t*e/r.components*r.byteLength;case Ag:return t*e*2/r.components*r.byteLength;case lf:return t*e*2/r.components*r.byteLength;case wg:return t*e*3/r.components*r.byteLength;case Un:return t*e*4/r.components*r.byteLength;case cf:return t*e*4/r.components*r.byteLength;case vo:case xo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case So:case yo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $c:case jc:return Math.max(t,16)*Math.max(e,8)/4;case Yc:case qc:return Math.max(t,8)*Math.max(e,8)/2;case Kc:case Zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case iu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ru:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case su:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case au:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ou:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case hu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mo:case du:case pu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Rg:case mu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gu:case _u:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Lb(t){switch(t){case ei:case Mg:return{byteLength:1,components:1};case xa:case Eg:case Pa:return{byteLength:2,components:1};case rf:case sf:return{byteLength:2,components:4};case Cr:case nf:case Kn:return{byteLength:4,components:1};case bg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Ib(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,_)=>p.start-_.start);let h=0;for(let p=1;p<f.length;p++){const _=f[h],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Nb=`#ifdef USE_ALPHAHASH
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
#endif`,Ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kb=`#ifdef USE_AOMAP
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
#endif`,Hb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zb=`#ifdef USE_BATCHING
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
#endif`,Vb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
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
#endif`,$b=`#ifdef USE_BUMPMAP
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
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,n1=`#define PI 3.141592653589793
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
} // validated`,i1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r1=`vec3 transformedNormal = objectNormal;
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
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,c1="gl_FragColor = linearToOutputTexel( gl_FragColor );",u1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f1=`#ifdef USE_ENVMAP
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
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,v1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S1=`#ifdef USE_GRADIENTMAP
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
}`,y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b1=`uniform bool receiveShadow;
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
#endif`,T1=`#ifdef USE_ENVMAP
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
#endif`,w1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P1=`PhysicalMaterial material;
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
#endif`,L1=`struct PhysicalMaterial {
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
}`,I1=`
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
#endif`,D1=`#if defined( RE_IndirectDiffuse )
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,F1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,H1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,V1=`#if defined( USE_POINTS_UV )
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
#endif`,G1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,X1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
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
#endif`,j1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Z1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tT=`#ifdef USE_NORMALMAP
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
#endif`,nT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_T=`float getShadowMask() {
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
}`,vT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xT=`#ifdef USE_SKINNING
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
#endif`,ST=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,MT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ET=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wT=`#ifdef USE_TRANSMISSION
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
#endif`,AT=`#ifdef USE_TRANSMISSION
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
#endif`,RT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DT=`uniform sampler2D t2D;
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
}`,NT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`#include <common>
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
}`,kT=`#if DEPTH_PACKING == 3200
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
}`,HT=`#define DISTANCE
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
}`,zT=`#define DISTANCE
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
}`,VT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WT=`uniform float scale;
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
}`,XT=`uniform vec3 diffuse;
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
}`,YT=`#include <common>
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
}`,$T=`uniform vec3 diffuse;
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
}`,qT=`#define LAMBERT
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
}`,jT=`#define LAMBERT
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
}`,KT=`#define MATCAP
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
}`,ZT=`#define MATCAP
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
}`,JT=`#define NORMAL
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
}`,QT=`#define NORMAL
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
}`,ew=`#define PHONG
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
}`,tw=`#define PHONG
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
}`,nw=`#define STANDARD
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
}`,iw=`#define STANDARD
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
}`,rw=`#define TOON
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
}`,sw=`#define TOON
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
}`,aw=`uniform float size;
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
}`,ow=`uniform vec3 diffuse;
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
}`,lw=`#include <common>
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
}`,cw=`uniform vec3 color;
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
}`,uw=`uniform float rotation;
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
}`,fw=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Db,alphahash_pars_fragment:Nb,alphamap_fragment:Ub,alphamap_pars_fragment:Fb,alphatest_fragment:Ob,alphatest_pars_fragment:Bb,aomap_fragment:kb,aomap_pars_fragment:Hb,batching_pars_vertex:zb,batching_vertex:Vb,begin_vertex:Gb,beginnormal_vertex:Wb,bsdfs:Xb,iridescence_fragment:Yb,bumpmap_pars_fragment:$b,clipping_planes_fragment:qb,clipping_planes_pars_fragment:jb,clipping_planes_pars_vertex:Kb,clipping_planes_vertex:Zb,color_fragment:Jb,color_pars_fragment:Qb,color_pars_vertex:e1,color_vertex:t1,common:n1,cube_uv_reflection_fragment:i1,defaultnormal_vertex:r1,displacementmap_pars_vertex:s1,displacementmap_vertex:a1,emissivemap_fragment:o1,emissivemap_pars_fragment:l1,colorspace_fragment:c1,colorspace_pars_fragment:u1,envmap_fragment:f1,envmap_common_pars_fragment:h1,envmap_pars_fragment:d1,envmap_pars_vertex:p1,envmap_physical_pars_fragment:T1,envmap_vertex:m1,fog_vertex:g1,fog_pars_vertex:_1,fog_fragment:v1,fog_pars_fragment:x1,gradientmap_pars_fragment:S1,lightmap_pars_fragment:y1,lights_lambert_fragment:M1,lights_lambert_pars_fragment:E1,lights_pars_begin:b1,lights_toon_fragment:w1,lights_toon_pars_fragment:A1,lights_phong_fragment:R1,lights_phong_pars_fragment:C1,lights_physical_fragment:P1,lights_physical_pars_fragment:L1,lights_fragment_begin:I1,lights_fragment_maps:D1,lights_fragment_end:N1,logdepthbuf_fragment:U1,logdepthbuf_pars_fragment:F1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:B1,map_fragment:k1,map_pars_fragment:H1,map_particle_fragment:z1,map_particle_pars_fragment:V1,metalnessmap_fragment:G1,metalnessmap_pars_fragment:W1,morphinstance_vertex:X1,morphcolor_vertex:Y1,morphnormal_vertex:$1,morphtarget_pars_vertex:q1,morphtarget_vertex:j1,normal_fragment_begin:K1,normal_fragment_maps:Z1,normal_pars_fragment:J1,normal_pars_vertex:Q1,normal_vertex:eT,normalmap_pars_fragment:tT,clearcoat_normal_fragment_begin:nT,clearcoat_normal_fragment_maps:iT,clearcoat_pars_fragment:rT,iridescence_pars_fragment:sT,opaque_fragment:aT,packing:oT,premultiplied_alpha_fragment:lT,project_vertex:cT,dithering_fragment:uT,dithering_pars_fragment:fT,roughnessmap_fragment:hT,roughnessmap_pars_fragment:dT,shadowmap_pars_fragment:pT,shadowmap_pars_vertex:mT,shadowmap_vertex:gT,shadowmask_pars_fragment:_T,skinbase_vertex:vT,skinning_pars_vertex:xT,skinning_vertex:ST,skinnormal_vertex:yT,specularmap_fragment:MT,specularmap_pars_fragment:ET,tonemapping_fragment:bT,tonemapping_pars_fragment:TT,transmission_fragment:wT,transmission_pars_fragment:AT,uv_pars_fragment:RT,uv_pars_vertex:CT,uv_vertex:PT,worldpos_vertex:LT,background_vert:IT,background_frag:DT,backgroundCube_vert:NT,backgroundCube_frag:UT,cube_vert:FT,cube_frag:OT,depth_vert:BT,depth_frag:kT,distanceRGBA_vert:HT,distanceRGBA_frag:zT,equirect_vert:VT,equirect_frag:GT,linedashed_vert:WT,linedashed_frag:XT,meshbasic_vert:YT,meshbasic_frag:$T,meshlambert_vert:qT,meshlambert_frag:jT,meshmatcap_vert:KT,meshmatcap_frag:ZT,meshnormal_vert:JT,meshnormal_frag:QT,meshphong_vert:ew,meshphong_frag:tw,meshphysical_vert:nw,meshphysical_frag:iw,meshtoon_vert:rw,meshtoon_frag:sw,points_vert:aw,points_frag:ow,shadow_vert:lw,shadow_frag:cw,sprite_vert:uw,sprite_frag:fw},ye={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},qn={basic:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:en([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:en([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Je(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:en([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:en([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:en([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:en([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:en([ye.common,ye.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:en([ye.lights,ye.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};qn.physical={uniforms:en([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const lo={r:0,b:0,g:0},hr=new wn,hw=new _t;function dw(t,e,n,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function _(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?n:e).get(v)),v}function x(M){let v=!1;const I=_(M);I===null?d(o,l):I&&I.isColor&&(d(I,1),v=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(M,v){const I=_(v);I&&(I.isCubeTexture||I.mapping===nl)?(u===void 0&&(u=new Ot(new Cs(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:Es(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),hr.copy(v.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),u.material.uniforms.envMap.value=I,u.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hw.makeRotationFromEuler(hr)),u.material.toneMapped=it.getTransfer(I.colorSpace)!==dt,(f!==I||h!==I.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=I,h=I.version,p=t.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Ot(new Lr(2,2),new qi({name:"BackgroundMaterial",uniforms:Es(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=it.getTransfer(I.colorSpace)!==dt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(f!==I||h!==I.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=I,h=I.version,p=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function d(M,v){M.getRGB(lo,Fg(t)),i.buffers.color.setClear(lo.r,lo.g,lo.b,v,a)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,v=1){o.set(M),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,d(o,l)},render:x,addToRenderList:g,dispose:y}}function pw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(T,F,B,W,ie){let ae=!1;const ee=f(W,B,F);s!==ee&&(s=ee,c(s.object)),ae=p(T,W,B,ie),ae&&_(T,W,B,ie),ie!==null&&e.update(ie,t.ELEMENT_ARRAY_BUFFER),(ae||a)&&(a=!1,v(T,F,B,W),ie!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function u(T){return t.deleteVertexArray(T)}function f(T,F,B){const W=B.wireframe===!0;let ie=i[T.id];ie===void 0&&(ie={},i[T.id]=ie);let ae=ie[F.id];ae===void 0&&(ae={},ie[F.id]=ae);let ee=ae[W];return ee===void 0&&(ee=h(l()),ae[W]=ee),ee}function h(T){const F=[],B=[],W=[];for(let ie=0;ie<n;ie++)F[ie]=0,B[ie]=0,W[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:B,attributeDivisors:W,object:T,attributes:{},index:null}}function p(T,F,B,W){const ie=s.attributes,ae=F.attributes;let ee=0;const J=B.getAttributes();for(const $ in J)if(J[$].location>=0){const ve=ie[$];let we=ae[$];if(we===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(we=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(we=T.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;ee++}return s.attributesNum!==ee||s.index!==W}function _(T,F,B,W){const ie={},ae=F.attributes;let ee=0;const J=B.getAttributes();for(const $ in J)if(J[$].location>=0){let ve=ae[$];ve===void 0&&($==="instanceMatrix"&&T.instanceMatrix&&(ve=T.instanceMatrix),$==="instanceColor"&&T.instanceColor&&(ve=T.instanceColor));const we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),ie[$]=we,ee++}s.attributes=ie,s.attributesNum=ee,s.index=W}function x(){const T=s.newAttributes;for(let F=0,B=T.length;F<B;F++)T[F]=0}function g(T){d(T,0)}function d(T,F){const B=s.newAttributes,W=s.enabledAttributes,ie=s.attributeDivisors;B[T]=1,W[T]===0&&(t.enableVertexAttribArray(T),W[T]=1),ie[T]!==F&&(t.vertexAttribDivisor(T,F),ie[T]=F)}function y(){const T=s.newAttributes,F=s.enabledAttributes;for(let B=0,W=F.length;B<W;B++)F[B]!==T[B]&&(t.disableVertexAttribArray(B),F[B]=0)}function M(T,F,B,W,ie,ae,ee){ee===!0?t.vertexAttribIPointer(T,F,B,ie,ae):t.vertexAttribPointer(T,F,B,W,ie,ae)}function v(T,F,B,W){x();const ie=W.attributes,ae=B.getAttributes(),ee=F.defaultAttributeValues;for(const J in ae){const $=ae[J];if($.location>=0){let pe=ie[J];if(pe===void 0&&(J==="instanceMatrix"&&T.instanceMatrix&&(pe=T.instanceMatrix),J==="instanceColor"&&T.instanceColor&&(pe=T.instanceColor)),pe!==void 0){const ve=pe.normalized,we=pe.itemSize,Fe=e.get(pe);if(Fe===void 0)continue;const je=Fe.buffer,se=Fe.type,_e=Fe.bytesPerElement,Me=se===t.INT||se===t.UNSIGNED_INT||pe.gpuType===nf;if(pe.isInterleavedBufferAttribute){const z=pe.data,re=z.stride,le=pe.offset;if(z.isInstancedInterleavedBuffer){for(let oe=0;oe<$.locationSize;oe++)d($.location+oe,z.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let oe=0;oe<$.locationSize;oe++)g($.location+oe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let oe=0;oe<$.locationSize;oe++)M($.location+oe,we/$.locationSize,se,ve,re*_e,(le+we/$.locationSize*oe)*_e,Me)}else{if(pe.isInstancedBufferAttribute){for(let z=0;z<$.locationSize;z++)d($.location+z,pe.meshPerAttribute);T.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let z=0;z<$.locationSize;z++)g($.location+z);t.bindBuffer(t.ARRAY_BUFFER,je);for(let z=0;z<$.locationSize;z++)M($.location+z,we/$.locationSize,se,ve,we*_e,we/$.locationSize*z*_e,Me)}}else if(ee!==void 0){const ve=ee[J];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv($.location,ve);break;case 3:t.vertexAttrib3fv($.location,ve);break;case 4:t.vertexAttrib4fv($.location,ve);break;default:t.vertexAttrib1fv($.location,ve)}}}}y()}function I(){O();for(const T in i){const F=i[T];for(const B in F){const W=F[B];for(const ie in W)u(W[ie].object),delete W[ie];delete F[B]}delete i[T]}}function L(T){if(i[T.id]===void 0)return;const F=i[T.id];for(const B in F){const W=F[B];for(const ie in W)u(W[ie].object),delete W[ie];delete F[B]}delete i[T.id]}function R(T){for(const F in i){const B=i[F];if(B[T.id]===void 0)continue;const W=B[T.id];for(const ie in W)u(W[ie].object),delete W[ie];delete B[T.id]}}function O(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:E,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function mw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)a(c[_],u[_],h[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*h[x];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function gw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Un&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const O=R===Pa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==ei&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Kn&&!O)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),I=_>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:I,maxSamples:L}}function _w(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new gr,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,d=t.get(f);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const y=s?0:i,M=y*4;let v=d.clippingState||null;l.value=v,v=u(_,h,M,p);for(let I=0;I!==M;++I)v[I]=n[I];d.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,_){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,_!==!0||g===null){const d=p+x*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<d)&&(g=new Float32Array(d));for(let M=0,v=p;M!==x;++M,v+=4)a.copy(f[M]).applyMatrix4(y,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function vw(t){let e=new WeakMap;function n(a,o){return o===Gc?a.mapping=xs:o===Wc&&(a.mapping=Ss),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Gc||o===Wc)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ub(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const as=4,Gd=[.125,.215,.35,.446,.526,.582],Sr=20,ec=new Vg,Wd=new Je;let tc=null,nc=0,ic=0,rc=!1;const _r=(1+Math.sqrt(5))/2,es=1/_r,Xd=[new Y(-_r,es,0),new Y(_r,es,0),new Y(-es,0,_r),new Y(es,0,_r),new Y(0,_r,-es),new Y(0,_r,es),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],xw=new Y;class Yd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=xw}=s;tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tc,nc,ic),this._renderer.xr.enabled=rc,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xs||e.mapping===Ss?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tc=this._renderer.getRenderTarget(),nc=this._renderer.getActiveCubeFace(),ic=this._renderer.getActiveMipmapLevel(),rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:jn,minFilter:jn,generateMipmaps:!1,type:Pa,format:Un,colorSpace:ys,depthBuffer:!1},r=$d(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$d(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sw(s)),this._blurMaterial=yw(s,e,n)}return r}_compileMaterial(e){const n=new Ot(this._lodPlanes[0],e);this._renderer.compile(n,ec)}_sceneToCubeUV(e,n,i,r,s){const l=new an(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Wd),f.toneMapping=Wi,f.autoClear=!1;const _=new rl({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),x=new Ot(new Cs,_);let g=!1;const d=e.background;d?d.isColor&&(_.color.copy(d),e.background=null,g=!0):(_.color.copy(Wd),g=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const v=this._cubeSize;co(r,M*v,y>2?v:0,v,v),f.setRenderTarget(r),g&&f.render(x,l),f.render(e,l)}x.geometry.dispose(),x.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xs||e.mapping===Ss;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qd());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ot(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;co(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ec)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xd[(r-s-1)%Xd.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ot(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Sr-1),x=s/_,g=isFinite(s)?1+Math.floor(u*x):Sr;g>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Sr}`);const d=[];let y=0;for(let R=0;R<Sr;++R){const O=R/x,E=Math.exp(-O*O/2);d.push(E),R===0?y+=E:R<g&&(y+=2*E)}for(let R=0;R<d.length;R++)d[R]=d[R]/y;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:M}=this;h.dTheta.value=_,h.mipInt.value=M-i;const v=this._sizeLods[r],I=3*v*(r>M-as?r-M+as:0),L=4*(this._cubeSize-v);co(n,I,L,3*v,2*v),l.setRenderTarget(n),l.render(f,ec)}}function Sw(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+Gd.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-as?l=Gd[a-t+as-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,g=2,d=1,y=new Float32Array(x*_*p),M=new Float32Array(g*_*p),v=new Float32Array(d*_*p);for(let L=0;L<p;L++){const R=L%3*2/3-1,O=L>2?0:-1,E=[R,O,0,R+2/3,O,0,R+2/3,O+1,0,R,O,0,R+2/3,O+1,0,R,O+1,0];y.set(E,x*_*L),M.set(h,g*_*L);const T=[L,L,L,L,L,L];v.set(T,d*_*L)}const I=new tr;I.setAttribute("position",new kn(y,x)),I.setAttribute("uv",new kn(M,g)),I.setAttribute("faceIndex",new kn(v,d)),e.push(I),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function $d(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=nl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yw(t,e,n){const i=new Float32Array(Sr),r=new Y(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function qd(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_f(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function jd(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_f(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function _f(){return`

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
	`}function Mw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Gc||l===Wc,u=l===xs||l===Ss;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new Yd(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new Yd(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Ew(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bw(t,e,n,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const y=p.array;x=p.version;for(let M=0,v=y.length;M<v;M+=3){const I=y[M+0],L=y[M+1],R=y[M+2];h.push(I,L,L,R,R,I)}}else if(_!==void 0){const y=_.array;x=_.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const I=M+0,L=M+1,R=M+2;h.push(I,L,L,R,R,I)}}else return;const g=new(Pg(h)?Ug:Ng)(h,1);g.version=x;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Tw(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*a),n.update(p,i,1)}function c(h,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,h*a,_),n.update(p,i,_))}function u(h,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,_);let g=0;for(let d=0;d<_;d++)g+=p[d];n.update(g,i,1)}function f(h,p,_,x){if(_===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],x[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,_);let d=0;for(let y=0;y<_;y++)d+=p[y]*x[y];n.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function ww(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Aw(t,e,n){const i=new WeakMap,r=new pt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let T=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var p=T;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;_===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let I=o.attributes.position.count*v,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*L*4*f),O=new Lg(R,I,L,f);O.type=Kn,O.needsUpdate=!0;const E=v*4;for(let F=0;F<f;F++){const B=d[F],W=y[F],ie=M[F],ae=I*L*4*F;for(let ee=0;ee<B.count;ee++){const J=ee*E;_===!0&&(r.fromBufferAttribute(B,ee),R[ae+J+0]=r.x,R[ae+J+1]=r.y,R[ae+J+2]=r.z,R[ae+J+3]=0),x===!0&&(r.fromBufferAttribute(W,ee),R[ae+J+4]=r.x,R[ae+J+5]=r.y,R[ae+J+6]=r.z,R[ae+J+7]=0),g===!0&&(r.fromBufferAttribute(ie,ee),R[ae+J+8]=r.x,R[ae+J+9]=r.y,R[ae+J+10]=r.z,R[ae+J+11]=ie.itemSize===4?r.w:1)}}h={count:f,texture:O,size:new qe(I,L)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Rw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const Xg=new Kt,Kd=new Hg(1,1),Yg=new Lg,$g=new $E,qg=new Bg,Zd=[],Jd=[],Qd=new Float32Array(16),ep=new Float32Array(9),tp=new Float32Array(4);function Ps(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Zd[r];if(s===void 0&&(s=new Float32Array(r),Zd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ut(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function sl(t,e){let n=Jd[e];n===void 0&&(n=new Int32Array(e),Jd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ut(n,e)}}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ut(n,e)}}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ut(n,e)}}function Dw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;tp.set(i),t.uniformMatrix2fv(this.addr,!1,tp),Ut(n,i)}}function Nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;ep.set(i),t.uniformMatrix3fv(this.addr,!1,ep),Ut(n,i)}}function Uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ut(n,e)}else{if(Nt(n,i))return;Qd.set(i),t.uniformMatrix4fv(this.addr,!1,Qd),Ut(n,i)}}function Fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ut(n,e)}}function Bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ut(n,e)}}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ut(n,e)}}function Hw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ut(n,e)}}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ut(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ut(n,e)}}function Ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Kd.compareFunction=Cg,s=Kd):s=Xg,n.setTexture2D(e||s,r)}function Xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$g,r)}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qg,r)}function $w(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yg,r)}function qw(t){switch(t){case 5126:return Cw;case 35664:return Pw;case 35665:return Lw;case 35666:return Iw;case 35674:return Dw;case 35675:return Nw;case 35676:return Uw;case 5124:case 35670:return Fw;case 35667:case 35671:return Ow;case 35668:case 35672:return Bw;case 35669:case 35673:return kw;case 5125:return Hw;case 36294:return zw;case 36295:return Vw;case 36296:return Gw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return $w}}function jw(t,e){t.uniform1fv(this.addr,e)}function Kw(t,e){const n=Ps(e,this.size,2);t.uniform2fv(this.addr,n)}function Zw(t,e){const n=Ps(e,this.size,3);t.uniform3fv(this.addr,n)}function Jw(t,e){const n=Ps(e,this.size,4);t.uniform4fv(this.addr,n)}function Qw(t,e){const n=Ps(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eA(t,e){const n=Ps(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tA(t,e){const n=Ps(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nA(t,e){t.uniform1iv(this.addr,e)}function iA(t,e){t.uniform2iv(this.addr,e)}function rA(t,e){t.uniform3iv(this.addr,e)}function sA(t,e){t.uniform4iv(this.addr,e)}function aA(t,e){t.uniform1uiv(this.addr,e)}function oA(t,e){t.uniform2uiv(this.addr,e)}function lA(t,e){t.uniform3uiv(this.addr,e)}function cA(t,e){t.uniform4uiv(this.addr,e)}function uA(t,e,n){const i=this.cache,r=e.length,s=sl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Xg,s[a])}function fA(t,e,n){const i=this.cache,r=e.length,s=sl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||$g,s[a])}function hA(t,e,n){const i=this.cache,r=e.length,s=sl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||qg,s[a])}function dA(t,e,n){const i=this.cache,r=e.length,s=sl(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ut(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Yg,s[a])}function pA(t){switch(t){case 5126:return jw;case 35664:return Kw;case 35665:return Zw;case 35666:return Jw;case 35674:return Qw;case 35675:return eA;case 35676:return tA;case 5124:case 35670:return nA;case 35667:case 35671:return iA;case 35668:case 35672:return rA;case 35669:case 35673:return sA;case 5125:return aA;case 36294:return oA;case 36295:return lA;case 36296:return cA;case 35678:case 36198:case 36298:case 36306:case 35682:return uA;case 35679:case 36299:case 36307:return fA;case 35680:case 36300:case 36308:case 36293:return hA;case 36289:case 36303:case 36311:case 36292:return dA}}class mA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qw(n.type)}}class gA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pA(n.type)}}class _A{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function np(t,e){t.seq.push(e),t.map[e.id]=e}function vA(t,e,n){const i=t.name,r=i.length;for(sc.lastIndex=0;;){const s=sc.exec(i),a=sc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){np(n,c===void 0?new mA(o,t,e):new gA(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new _A(o),np(n,f)),n=f}}}class Eo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);vA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function ip(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xA=37297;let SA=0;function yA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const rp=new Ye;function MA(t){it._getMatrix(rp,it.workingColorSpace,t);const e=`mat3( ${rp.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Oo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+yA(t.getShaderSource(e),a)}else return r}function EA(t,e){const n=MA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function bA(t,e){let n;switch(e){case rE:n="Linear";break;case sE:n="Reinhard";break;case aE:n="Cineon";break;case oE:n="ACESFilmic";break;case cE:n="AgX";break;case uE:n="Neutral";break;case lE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const uo=new Y;function TA(){it.getLuminanceCoefficients(uo);const t=uo.x.toFixed(4),e=uo.y.toFixed(4),n=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function AA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Xs(t){return t!==""}function ap(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function op(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CA=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(t){return t.replace(CA,LA)}const PA=new Map;function LA(t,e){let n=$e[e];if(n===void 0){const i=PA.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xu(n)}const IA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lp(t){return t.replace(IA,DA)}function DA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function NA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Sg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function UA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xs:case Ss:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ss:e="ENVMAP_MODE_REFRACTION";break}return e}function OA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case tl:e="ENVMAP_BLENDING_MULTIPLY";break;case nE:e="ENVMAP_BLENDING_MIX";break;case iE:e="ENVMAP_BLENDING_ADD";break}return e}function BA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function kA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=NA(n),c=UA(n),u=FA(n),f=OA(n),h=BA(n),p=wA(n),_=AA(s),x=r.createProgram();let g,d,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Xs).join(`
`),d.length>0&&(d+=`
`)):(g=[cp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),d=[cp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?$e.tonemapping_pars_fragment:"",n.toneMapping!==Wi?bA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,EA("linearToOutputTexel",n.outputColorSpace),TA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Xs).join(`
`)),a=xu(a),a=ap(a,n),a=op(a,n),o=xu(o),o=ap(o,n),o=op(o,n),a=lp(a),o=lp(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",n.glslVersion===fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=y+g+a,v=y+d+o,I=ip(r,r.VERTEX_SHADER,M),L=ip(r,r.FRAGMENT_SHADER,v);r.attachShader(x,I),r.attachShader(x,L),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(F){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(x).trim(),W=r.getShaderInfoLog(I).trim(),ie=r.getShaderInfoLog(L).trim();let ae=!0,ee=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ae=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,I,L);else{const J=sp(r,I,"vertex"),$=sp(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+B+`
`+J+`
`+$)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(W===""||ie==="")&&(ee=!1);ee&&(F.diagnostics={runnable:ae,programLog:B,vertexShader:{log:W,prefix:g},fragmentShader:{log:ie,prefix:d}})}r.deleteShader(I),r.deleteShader(L),O=new Eo(r,x),E=RA(r,x)}let O;this.getUniforms=function(){return O===void 0&&R(this),O};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,xA)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=L,this}let HA=0;class zA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VA(e),n.set(e,i)),i}}class VA{constructor(e){this.id=HA++,this.code=e,this.usedTimes=0}}function GA(t,e,n,i,r,s,a){const o=new hf,l=new zA,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,T,F,B,W){const ie=B.fog,ae=W.geometry,ee=E.isMeshStandardMaterial?B.environment:null,J=(E.isMeshStandardMaterial?n:e).get(E.envMap||ee),$=J&&J.mapping===nl?J.image.height:null,pe=_[E.type];E.precision!==null&&(p=r.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const ve=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,we=ve!==void 0?ve.length:0;let Fe=0;ae.morphAttributes.position!==void 0&&(Fe=1),ae.morphAttributes.normal!==void 0&&(Fe=2),ae.morphAttributes.color!==void 0&&(Fe=3);let je,se,_e,Me;if(pe){const ft=qn[pe];je=ft.vertexShader,se=ft.fragmentShader}else je=E.vertexShader,se=E.fragmentShader,l.update(E),_e=l.getVertexShaderID(E),Me=l.getFragmentShaderID(E);const z=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),le=W.isInstancedMesh===!0,oe=W.isBatchedMesh===!0,Oe=!!E.map,D=!!E.matcap,N=!!J,S=!!E.aoMap,ne=!!E.lightMap,Z=!!E.bumpMap,K=!!E.normalMap,w=!!E.displacementMap,C=!!E.emissiveMap,U=!!E.metalnessMap,k=!!E.roughnessMap,he=E.anisotropy>0,b=E.clearcoat>0,m=E.dispersion>0,P=E.iridescence>0,V=E.sheen>0,j=E.transmission>0,q=he&&!!E.anisotropyMap,Se=b&&!!E.clearcoatMap,fe=b&&!!E.clearcoatNormalMap,Ee=b&&!!E.clearcoatRoughnessMap,Ae=P&&!!E.iridescenceMap,ue=P&&!!E.iridescenceThicknessMap,Re=V&&!!E.sheenColorMap,Ie=V&&!!E.sheenRoughnessMap,De=!!E.specularMap,xe=!!E.specularColorMap,ze=!!E.specularIntensityMap,H=j&&!!E.transmissionMap,be=j&&!!E.thicknessMap,de=!!E.gradientMap,Le=!!E.alphaMap,me=E.alphaTest>0,ce=!!E.alphaHash,Ne=!!E.extensions;let We=Wi;E.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(We=t.toneMapping);const yt={shaderID:pe,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:se,defines:E.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:oe,batchingColor:oe&&W._colorsTexture!==null,instancing:le,instancingColor:le&&W.instanceColor!==null,instancingMorph:le&&W.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:z===null?t.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:ys,alphaToCoverage:!!E.alphaToCoverage,map:Oe,matcap:D,envMap:N,envMapMode:N&&J.mapping,envMapCubeUVHeight:$,aoMap:S,lightMap:ne,bumpMap:Z,normalMap:K,displacementMap:h&&w,emissiveMap:C,normalMapObjectSpace:K&&E.normalMapType===pE,normalMapTangentSpace:K&&E.normalMapType===il,metalnessMap:U,roughnessMap:k,anisotropy:he,anisotropyMap:q,clearcoat:b,clearcoatMap:Se,clearcoatNormalMap:fe,clearcoatRoughnessMap:Ee,dispersion:m,iridescence:P,iridescenceMap:Ae,iridescenceThicknessMap:ue,sheen:V,sheenColorMap:Re,sheenRoughnessMap:Ie,specularMap:De,specularColorMap:xe,specularIntensityMap:ze,transmission:j,transmissionMap:H,thicknessMap:be,gradientMap:de,opaque:E.transparent===!1&&E.blending===us&&E.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:ce,combine:E.combine,mapUv:Oe&&x(E.map.channel),aoMapUv:S&&x(E.aoMap.channel),lightMapUv:ne&&x(E.lightMap.channel),bumpMapUv:Z&&x(E.bumpMap.channel),normalMapUv:K&&x(E.normalMap.channel),displacementMapUv:w&&x(E.displacementMap.channel),emissiveMapUv:C&&x(E.emissiveMap.channel),metalnessMapUv:U&&x(E.metalnessMap.channel),roughnessMapUv:k&&x(E.roughnessMap.channel),anisotropyMapUv:q&&x(E.anisotropyMap.channel),clearcoatMapUv:Se&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:fe&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&x(E.sheenRoughnessMap.channel),specularMapUv:De&&x(E.specularMap.channel),specularColorMapUv:xe&&x(E.specularColorMap.channel),specularIntensityMapUv:ze&&x(E.specularIntensityMap.channel),transmissionMapUv:H&&x(E.transmissionMap.channel),thicknessMapUv:be&&x(E.thicknessMap.channel),alphaMapUv:Le&&x(E.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(K||he),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!ae.attributes.uv&&(Oe||Le),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:re,skinning:W.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:We,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&it.getTransfer(E.map.colorSpace)===dt,decodeVideoTextureEmissive:C&&E.emissiveMap.isVideoTexture===!0&&it.getTransfer(E.emissiveMap.colorSpace)===dt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===mi,flipSided:E.side===on,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function d(E){const T=[];if(E.shaderID?T.push(E.shaderID):(T.push(E.customVertexShaderID),T.push(E.customFragmentShaderID)),E.defines!==void 0)for(const F in E.defines)T.push(F),T.push(E.defines[F]);return E.isRawShaderMaterial===!1&&(y(T,E),M(T,E),T.push(t.outputColorSpace)),T.push(E.customProgramCacheKey),T.join()}function y(E,T){E.push(T.precision),E.push(T.outputColorSpace),E.push(T.envMapMode),E.push(T.envMapCubeUVHeight),E.push(T.mapUv),E.push(T.alphaMapUv),E.push(T.lightMapUv),E.push(T.aoMapUv),E.push(T.bumpMapUv),E.push(T.normalMapUv),E.push(T.displacementMapUv),E.push(T.emissiveMapUv),E.push(T.metalnessMapUv),E.push(T.roughnessMapUv),E.push(T.anisotropyMapUv),E.push(T.clearcoatMapUv),E.push(T.clearcoatNormalMapUv),E.push(T.clearcoatRoughnessMapUv),E.push(T.iridescenceMapUv),E.push(T.iridescenceThicknessMapUv),E.push(T.sheenColorMapUv),E.push(T.sheenRoughnessMapUv),E.push(T.specularMapUv),E.push(T.specularColorMapUv),E.push(T.specularIntensityMapUv),E.push(T.transmissionMapUv),E.push(T.thicknessMapUv),E.push(T.combine),E.push(T.fogExp2),E.push(T.sizeAttenuation),E.push(T.morphTargetsCount),E.push(T.morphAttributeCount),E.push(T.numDirLights),E.push(T.numPointLights),E.push(T.numSpotLights),E.push(T.numSpotLightMaps),E.push(T.numHemiLights),E.push(T.numRectAreaLights),E.push(T.numDirLightShadows),E.push(T.numPointLightShadows),E.push(T.numSpotLightShadows),E.push(T.numSpotLightShadowsWithMaps),E.push(T.numLightProbes),E.push(T.shadowMapType),E.push(T.toneMapping),E.push(T.numClippingPlanes),E.push(T.numClipIntersection),E.push(T.depthPacking)}function M(E,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),E.push(o.mask)}function v(E){const T=_[E.type];let F;if(T){const B=qn[T];F=ab.clone(B.uniforms)}else F=E.uniforms;return F}function I(E,T){let F;for(let B=0,W=u.length;B<W;B++){const ie=u[B];if(ie.cacheKey===T){F=ie,++F.usedTimes;break}}return F===void 0&&(F=new kA(t,T,E,s),u.push(F)),F}function L(E){if(--E.usedTimes===0){const T=u.indexOf(E);u[T]=u[u.length-1],u.pop(),E.destroy()}}function R(E){l.remove(E)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:v,acquireProgram:I,releaseProgram:L,releaseShaderCache:R,programs:u,dispose:O}}function WA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function XA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function up(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,h,p,_,x,g){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:g},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=x,d.group=g),e++,d}function o(f,h,p,_,x,g){const d=a(f,h,p,_,x,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,_,x,g){const d=a(f,h,p,_,x,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||XA),i.length>1&&i.sort(h||up),r.length>1&&r.sort(h||up)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function YA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new fp,t.set(i,[a])):r>=s.length?(a=new fp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function $A(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new Je};break;case"SpotLight":n={position:new Y,direction:new Y,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function qA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jA=0;function KA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZA(t){const e=new $A,n=qA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Y);const r=new Y,s=new _t,a=new _t;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let p=0,_=0,x=0,g=0,d=0,y=0,M=0,v=0,I=0,L=0,R=0;c.sort(KA);for(let E=0,T=c.length;E<T;E++){const F=c[E],B=F.color,W=F.intensity,ie=F.distance,ae=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=B.r*W,f+=B.g*W,h+=B.b*W;else if(F.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(F.sh.coefficients[ee],W);R++}else if(F.isDirectionalLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const J=F.shadow,$=n.get(F);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,i.directionalShadow[p]=$,i.directionalShadowMap[p]=ae,i.directionalShadowMatrix[p]=F.shadow.matrix,y++}i.directional[p]=ee,p++}else if(F.isSpotLight){const ee=e.get(F);ee.position.setFromMatrixPosition(F.matrixWorld),ee.color.copy(B).multiplyScalar(W),ee.distance=ie,ee.coneCos=Math.cos(F.angle),ee.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ee.decay=F.decay,i.spot[x]=ee;const J=F.shadow;if(F.map&&(i.spotLightMap[I]=F.map,I++,J.updateMatrices(F),F.castShadow&&L++),i.spotLightMatrix[x]=J.matrix,F.castShadow){const $=n.get(F);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,i.spotShadow[x]=$,i.spotShadowMap[x]=ae,v++}x++}else if(F.isRectAreaLight){const ee=e.get(F);ee.color.copy(B).multiplyScalar(W),ee.halfWidth.set(F.width*.5,0,0),ee.halfHeight.set(0,F.height*.5,0),i.rectArea[g]=ee,g++}else if(F.isPointLight){const ee=e.get(F);if(ee.color.copy(F.color).multiplyScalar(F.intensity),ee.distance=F.distance,ee.decay=F.decay,F.castShadow){const J=F.shadow,$=n.get(F);$.shadowIntensity=J.intensity,$.shadowBias=J.bias,$.shadowNormalBias=J.normalBias,$.shadowRadius=J.radius,$.shadowMapSize=J.mapSize,$.shadowCameraNear=J.camera.near,$.shadowCameraFar=J.camera.far,i.pointShadow[_]=$,i.pointShadowMap[_]=ae,i.pointShadowMatrix[_]=F.shadow.matrix,M++}i.point[_]=ee,_++}else if(F.isHemisphereLight){const ee=e.get(F);ee.skyColor.copy(F.color).multiplyScalar(W),ee.groundColor.copy(F.groundColor).multiplyScalar(W),i.hemi[d]=ee,d++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const O=i.hash;(O.directionalLength!==p||O.pointLength!==_||O.spotLength!==x||O.rectAreaLength!==g||O.hemiLength!==d||O.numDirectionalShadows!==y||O.numPointShadows!==M||O.numSpotShadows!==v||O.numSpotMaps!==I||O.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=g,i.point.length=_,i.hemi.length=d,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+I-L,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=R,O.directionalLength=p,O.pointLength=_,O.spotLength=x,O.rectAreaLength=g,O.hemiLength=d,O.numDirectionalShadows=y,O.numPointShadows=M,O.numSpotShadows=v,O.numSpotMaps=I,O.numLightProbes=R,i.version=jA++)}function l(c,u){let f=0,h=0,p=0,_=0,x=0;const g=u.matrixWorldInverse;for(let d=0,y=c.length;d<y;d++){const M=c[d];if(M.isDirectionalLight){const v=i.directional[f];v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),f++}else if(M.isSpotLight){const v=i.spot[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(g),p++}else if(M.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),a.identity(),s.copy(M.matrixWorld),s.premultiply(g),a.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){const v=i.point[h];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),h++}else if(M.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:i}}function hp(t){const e=new ZA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function JA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new hp(t),e.set(r,[o])):s>=a.length?(o=new hp(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const QA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eR=`uniform sampler2D shadow_pass;
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
}`;function tR(t,e,n){let i=new df;const r=new qe,s=new qe,a=new pt,o=new Sb({depthPacking:dE}),l=new yb,c={},u=n.maxTextureSize,f={[$i]:on,[on]:$i,[mi]:mi},h=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:QA,fragmentShader:eR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new tr;_.setAttribute("position",new kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Ot(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xg;let d=this.type;this.render=function(L,R,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||L.length===0)return;const E=t.getRenderTarget(),T=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Gi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const W=d!==fi&&this.type===fi,ie=d===fi&&this.type!==fi;for(let ae=0,ee=L.length;ae<ee;ae++){const J=L[ae],$=J.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const pe=$.getFrameExtents();if(r.multiply(pe),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,$.mapSize.y=s.y)),$.map===null||W===!0||ie===!0){const we=this.type!==fi?{minFilter:gn,magFilter:gn}:{};$.map!==null&&$.map.dispose(),$.map=new Pr(r.x,r.y,we),$.map.texture.name=J.name+".shadowMap",$.camera.updateProjectionMatrix()}t.setRenderTarget($.map),t.clear();const ve=$.getViewportCount();for(let we=0;we<ve;we++){const Fe=$.getViewport(we);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),B.viewport(a),$.updateMatrices(J,we),i=$.getFrustum(),v(R,O,$.camera,J,this.type)}$.isPointLightShadow!==!0&&this.type===fi&&y($,O),$.needsUpdate=!1}d=this.type,g.needsUpdate=!1,t.setRenderTarget(E,T,F)};function y(L,R){const O=e.update(x);h.defines.VSM_SAMPLES!==L.blurSamples&&(h.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Pr(r.x,r.y)),h.uniforms.shadow_pass.value=L.map.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(R,null,O,h,x,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(R,null,O,p,x,null)}function M(L,R,O,E){let T=null;const F=O.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(F!==void 0)T=F;else if(T=O.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const B=T.uuid,W=R.uuid;let ie=c[B];ie===void 0&&(ie={},c[B]=ie);let ae=ie[W];ae===void 0&&(ae=T.clone(),ie[W]=ae,R.addEventListener("dispose",I)),T=ae}if(T.visible=R.visible,T.wireframe=R.wireframe,E===fi?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:f[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,O.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const B=t.properties.get(T);B.light=O}return T}function v(L,R,O,E,T){if(L.visible===!1)return;if(L.layers.test(R.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&T===fi)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,L.matrixWorld);const W=e.update(L),ie=L.material;if(Array.isArray(ie)){const ae=W.groups;for(let ee=0,J=ae.length;ee<J;ee++){const $=ae[ee],pe=ie[$.materialIndex];if(pe&&pe.visible){const ve=M(L,pe,E,T);L.onBeforeShadow(t,L,R,O,W,ve,$),t.renderBufferDirect(O,null,W,ve,L,$),L.onAfterShadow(t,L,R,O,W,ve,$)}}}else if(ie.visible){const ae=M(L,ie,E,T);L.onBeforeShadow(t,L,R,O,W,ae,null),t.renderBufferDirect(O,null,W,ae,L,null),L.onAfterShadow(t,L,R,O,W,ae,null)}}const B=L.children;for(let W=0,ie=B.length;W<ie;W++)v(B[W],R,O,E,T)}function I(L){L.target.removeEventListener("dispose",I);for(const O in c){const E=c[O],T=L.target.uuid;T in E&&(E[T].dispose(),delete E[T])}}}const nR={[Fc]:Oc,[Bc]:zc,[kc]:Vc,[vs]:Hc,[Oc]:Fc,[zc]:Bc,[Vc]:kc,[Hc]:vs};function iR(t,e){function n(){let H=!1;const be=new pt;let de=null;const Le=new pt(0,0,0,0);return{setMask:function(me){de!==me&&!H&&(t.colorMask(me,me,me,me),de=me)},setLocked:function(me){H=me},setClear:function(me,ce,Ne,We,yt){yt===!0&&(me*=We,ce*=We,Ne*=We),be.set(me,ce,Ne,We),Le.equals(be)===!1&&(t.clearColor(me,ce,Ne,We),Le.copy(be))},reset:function(){H=!1,de=null,Le.set(-1,0,0,0)}}}function i(){let H=!1,be=!1,de=null,Le=null,me=null;return{setReversed:function(ce){if(be!==ce){const Ne=e.get("EXT_clip_control");ce?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),be=ce;const We=me;me=null,this.setClear(We)}},getReversed:function(){return be},setTest:function(ce){ce?z(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ce){de!==ce&&!H&&(t.depthMask(ce),de=ce)},setFunc:function(ce){if(be&&(ce=nR[ce]),Le!==ce){switch(ce){case Fc:t.depthFunc(t.NEVER);break;case Oc:t.depthFunc(t.ALWAYS);break;case Bc:t.depthFunc(t.LESS);break;case vs:t.depthFunc(t.LEQUAL);break;case kc:t.depthFunc(t.EQUAL);break;case Hc:t.depthFunc(t.GEQUAL);break;case zc:t.depthFunc(t.GREATER);break;case Vc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=ce}},setLocked:function(ce){H=ce},setClear:function(ce){me!==ce&&(be&&(ce=1-ce),t.clearDepth(ce),me=ce)},reset:function(){H=!1,de=null,Le=null,me=null,be=!1}}}function r(){let H=!1,be=null,de=null,Le=null,me=null,ce=null,Ne=null,We=null,yt=null;return{setTest:function(ft){H||(ft?z(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(ft){be!==ft&&!H&&(t.stencilMask(ft),be=ft)},setFunc:function(ft,An,ti){(de!==ft||Le!==An||me!==ti)&&(t.stencilFunc(ft,An,ti),de=ft,Le=An,me=ti)},setOp:function(ft,An,ti){(ce!==ft||Ne!==An||We!==ti)&&(t.stencilOp(ft,An,ti),ce=ft,Ne=An,We=ti)},setLocked:function(ft){H=ft},setClear:function(ft){yt!==ft&&(t.clearStencil(ft),yt=ft)},reset:function(){H=!1,be=null,de=null,Le=null,me=null,ce=null,Ne=null,We=null,yt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],_=null,x=!1,g=null,d=null,y=null,M=null,v=null,I=null,L=null,R=new Je(0,0,0),O=0,E=!1,T=null,F=null,B=null,W=null,ie=null;const ae=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,J=0;const $=t.getParameter(t.VERSION);$.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec($)[1]),ee=J>=1):$.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ee=J>=2);let pe=null,ve={};const we=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),je=new pt().fromArray(we),se=new pt().fromArray(Fe);function _e(H,be,de,Le){const me=new Uint8Array(4),ce=t.createTexture();t.bindTexture(H,ce),t.texParameteri(H,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(H,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<de;Ne++)H===t.TEXTURE_3D||H===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(be+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ce}const Me={};Me[t.TEXTURE_2D]=_e(t.TEXTURE_2D,t.TEXTURE_2D,1),Me[t.TEXTURE_CUBE_MAP]=_e(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[t.TEXTURE_2D_ARRAY]=_e(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Me[t.TEXTURE_3D]=_e(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),z(t.DEPTH_TEST),a.setFunc(vs),Z(!1),K(sd),z(t.CULL_FACE),S(Gi);function z(H){u[H]!==!0&&(t.enable(H),u[H]=!0)}function re(H){u[H]!==!1&&(t.disable(H),u[H]=!1)}function le(H,be){return f[H]!==be?(t.bindFramebuffer(H,be),f[H]=be,H===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=be),H===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=be),!0):!1}function oe(H,be){let de=p,Le=!1;if(H){de=h.get(be),de===void 0&&(de=[],h.set(be,de));const me=H.textures;if(de.length!==me.length||de[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ne=me.length;ce<Ne;ce++)de[ce]=t.COLOR_ATTACHMENT0+ce;de.length=me.length,Le=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Le=!0);Le&&t.drawBuffers(de)}function Oe(H){return _!==H?(t.useProgram(H),_=H,!0):!1}const D={[xr]:t.FUNC_ADD,[kM]:t.FUNC_SUBTRACT,[HM]:t.FUNC_REVERSE_SUBTRACT};D[zM]=t.MIN,D[VM]=t.MAX;const N={[GM]:t.ZERO,[WM]:t.ONE,[XM]:t.SRC_COLOR,[Nc]:t.SRC_ALPHA,[ZM]:t.SRC_ALPHA_SATURATE,[jM]:t.DST_COLOR,[$M]:t.DST_ALPHA,[YM]:t.ONE_MINUS_SRC_COLOR,[Uc]:t.ONE_MINUS_SRC_ALPHA,[KM]:t.ONE_MINUS_DST_COLOR,[qM]:t.ONE_MINUS_DST_ALPHA,[JM]:t.CONSTANT_COLOR,[QM]:t.ONE_MINUS_CONSTANT_COLOR,[eE]:t.CONSTANT_ALPHA,[tE]:t.ONE_MINUS_CONSTANT_ALPHA};function S(H,be,de,Le,me,ce,Ne,We,yt,ft){if(H===Gi){x===!0&&(re(t.BLEND),x=!1);return}if(x===!1&&(z(t.BLEND),x=!0),H!==BM){if(H!==g||ft!==E){if((d!==xr||v!==xr)&&(t.blendEquation(t.FUNC_ADD),d=xr,v=xr),ft)switch(H){case us:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ad:t.blendFunc(t.ONE,t.ONE);break;case od:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ld:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case us:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ad:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case od:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ld:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}y=null,M=null,I=null,L=null,R.set(0,0,0),O=0,g=H,E=ft}return}me=me||be,ce=ce||de,Ne=Ne||Le,(be!==d||me!==v)&&(t.blendEquationSeparate(D[be],D[me]),d=be,v=me),(de!==y||Le!==M||ce!==I||Ne!==L)&&(t.blendFuncSeparate(N[de],N[Le],N[ce],N[Ne]),y=de,M=Le,I=ce,L=Ne),(We.equals(R)===!1||yt!==O)&&(t.blendColor(We.r,We.g,We.b,yt),R.copy(We),O=yt),g=H,E=!1}function ne(H,be){H.side===mi?re(t.CULL_FACE):z(t.CULL_FACE);let de=H.side===on;be&&(de=!de),Z(de),H.blending===us&&H.transparent===!1?S(Gi):S(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),s.setMask(H.colorWrite);const Le=H.stencilWrite;o.setTest(Le),Le&&(o.setMask(H.stencilWriteMask),o.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),o.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),C(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?z(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(H){T!==H&&(H?t.frontFace(t.CW):t.frontFace(t.CCW),T=H)}function K(H){H!==FM?(z(t.CULL_FACE),H!==F&&(H===sd?t.cullFace(t.BACK):H===OM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),F=H}function w(H){H!==B&&(ee&&t.lineWidth(H),B=H)}function C(H,be,de){H?(z(t.POLYGON_OFFSET_FILL),(W!==be||ie!==de)&&(t.polygonOffset(be,de),W=be,ie=de)):re(t.POLYGON_OFFSET_FILL)}function U(H){H?z(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function k(H){H===void 0&&(H=t.TEXTURE0+ae-1),pe!==H&&(t.activeTexture(H),pe=H)}function he(H,be,de){de===void 0&&(pe===null?de=t.TEXTURE0+ae-1:de=pe);let Le=ve[de];Le===void 0&&(Le={type:void 0,texture:void 0},ve[de]=Le),(Le.type!==H||Le.texture!==be)&&(pe!==de&&(t.activeTexture(de),pe=de),t.bindTexture(H,be||Me[H]),Le.type=H,Le.texture=be)}function b(){const H=ve[pe];H!==void 0&&H.type!==void 0&&(t.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function m(){try{t.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function P(){try{t.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function V(){try{t.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{t.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{t.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function fe(){try{t.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{t.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{t.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ue(){try{t.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Re(H){je.equals(H)===!1&&(t.scissor(H.x,H.y,H.z,H.w),je.copy(H))}function Ie(H){se.equals(H)===!1&&(t.viewport(H.x,H.y,H.z,H.w),se.copy(H))}function De(H,be){let de=c.get(be);de===void 0&&(de=new WeakMap,c.set(be,de));let Le=de.get(H);Le===void 0&&(Le=t.getUniformBlockIndex(be,H.name),de.set(H,Le))}function xe(H,be){const Le=c.get(be).get(H);l.get(be)!==Le&&(t.uniformBlockBinding(be,Le,H.__bindingPointIndex),l.set(be,Le))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},pe=null,ve={},f={},h=new WeakMap,p=[],_=null,x=!1,g=null,d=null,y=null,M=null,v=null,I=null,L=null,R=new Je(0,0,0),O=0,E=!1,T=null,F=null,B=null,W=null,ie=null,je.set(0,0,t.canvas.width,t.canvas.height),se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:z,disable:re,bindFramebuffer:le,drawBuffers:oe,useProgram:Oe,setBlending:S,setMaterial:ne,setFlipSided:Z,setCullFace:K,setLineWidth:w,setPolygonOffset:C,setScissorTest:U,activeTexture:k,bindTexture:he,unbindTexture:b,compressedTexImage2D:m,compressedTexImage3D:P,texImage2D:Ae,texImage3D:ue,updateUBOMapping:De,uniformBlockBinding:xe,texStorage2D:fe,texStorage3D:Ee,texSubImage2D:V,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:Se,scissor:Re,viewport:Ie,reset:ze}}function rR(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,m){return p?new OffscreenCanvas(b,m):Ea("canvas")}function x(b,m,P){let V=1;const j=he(b);if((j.width>P||j.height>P)&&(V=P/Math.max(j.width,j.height)),V<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const q=Math.floor(V*j.width),Se=Math.floor(V*j.height);f===void 0&&(f=_(q,Se));const fe=m?_(q,Se):f;return fe.width=q,fe.height=Se,fe.getContext("2d").drawImage(b,0,0,q,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Se+")."),fe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function g(b){return b.generateMipmaps}function d(b){t.generateMipmap(b)}function y(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(b,m,P,V,j=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=m;if(m===t.RED&&(P===t.FLOAT&&(q=t.R32F),P===t.HALF_FLOAT&&(q=t.R16F),P===t.UNSIGNED_BYTE&&(q=t.R8)),m===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(q=t.R8UI),P===t.UNSIGNED_SHORT&&(q=t.R16UI),P===t.UNSIGNED_INT&&(q=t.R32UI),P===t.BYTE&&(q=t.R8I),P===t.SHORT&&(q=t.R16I),P===t.INT&&(q=t.R32I)),m===t.RG&&(P===t.FLOAT&&(q=t.RG32F),P===t.HALF_FLOAT&&(q=t.RG16F),P===t.UNSIGNED_BYTE&&(q=t.RG8)),m===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(q=t.RG8UI),P===t.UNSIGNED_SHORT&&(q=t.RG16UI),P===t.UNSIGNED_INT&&(q=t.RG32UI),P===t.BYTE&&(q=t.RG8I),P===t.SHORT&&(q=t.RG16I),P===t.INT&&(q=t.RG32I)),m===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(q=t.RGB8UI),P===t.UNSIGNED_SHORT&&(q=t.RGB16UI),P===t.UNSIGNED_INT&&(q=t.RGB32UI),P===t.BYTE&&(q=t.RGB8I),P===t.SHORT&&(q=t.RGB16I),P===t.INT&&(q=t.RGB32I)),m===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),P===t.UNSIGNED_INT&&(q=t.RGBA32UI),P===t.BYTE&&(q=t.RGBA8I),P===t.SHORT&&(q=t.RGBA16I),P===t.INT&&(q=t.RGBA32I)),m===t.RGB&&P===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),m===t.RGBA){const Se=j?Oo:it.getTransfer(V);P===t.FLOAT&&(q=t.RGBA32F),P===t.HALF_FLOAT&&(q=t.RGBA16F),P===t.UNSIGNED_BYTE&&(q=Se===dt?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function v(b,m){let P;return b?m===null||m===Cr||m===Sa?P=t.DEPTH24_STENCIL8:m===Kn?P=t.DEPTH32F_STENCIL8:m===xa&&(P=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Cr||m===Sa?P=t.DEPTH_COMPONENT24:m===Kn?P=t.DEPTH_COMPONENT32F:m===xa&&(P=t.DEPTH_COMPONENT16),P}function I(b,m){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==jn?Math.log2(Math.max(m.width,m.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?m.mipmaps.length:1}function L(b){const m=b.target;m.removeEventListener("dispose",L),O(m),m.isVideoTexture&&u.delete(m)}function R(b){const m=b.target;m.removeEventListener("dispose",R),T(m)}function O(b){const m=i.get(b);if(m.__webglInit===void 0)return;const P=b.source,V=h.get(P);if(V){const j=V[m.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(b),Object.keys(V).length===0&&h.delete(P)}i.remove(b)}function E(b){const m=i.get(b);t.deleteTexture(m.__webglTexture);const P=b.source,V=h.get(P);delete V[m.__cacheKey],a.memory.textures--}function T(b){const m=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(m.__webglFramebuffer[V]))for(let j=0;j<m.__webglFramebuffer[V].length;j++)t.deleteFramebuffer(m.__webglFramebuffer[V][j]);else t.deleteFramebuffer(m.__webglFramebuffer[V]);m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer[V])}else{if(Array.isArray(m.__webglFramebuffer))for(let V=0;V<m.__webglFramebuffer.length;V++)t.deleteFramebuffer(m.__webglFramebuffer[V]);else t.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&t.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&t.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let V=0;V<m.__webglColorRenderbuffer.length;V++)m.__webglColorRenderbuffer[V]&&t.deleteRenderbuffer(m.__webglColorRenderbuffer[V]);m.__webglDepthRenderbuffer&&t.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const P=b.textures;for(let V=0,j=P.length;V<j;V++){const q=i.get(P[V]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(P[V])}i.remove(b)}let F=0;function B(){F=0}function W(){const b=F;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),F+=1,b}function ie(b){const m=[];return m.push(b.wrapS),m.push(b.wrapT),m.push(b.wrapR||0),m.push(b.magFilter),m.push(b.minFilter),m.push(b.anisotropy),m.push(b.internalFormat),m.push(b.format),m.push(b.type),m.push(b.generateMipmaps),m.push(b.premultiplyAlpha),m.push(b.flipY),m.push(b.unpackAlignment),m.push(b.colorSpace),m.join()}function ae(b,m){const P=i.get(b);if(b.isVideoTexture&&U(b),b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){const V=b.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Me(P,b,m);return}}n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+m)}function ee(b,m){const P=i.get(b);if(b.version>0&&P.__version!==b.version){Me(P,b,m);return}n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+m)}function J(b,m){const P=i.get(b);if(b.version>0&&P.__version!==b.version){Me(P,b,m);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+m)}function $(b,m){const P=i.get(b);if(b.version>0&&P.__version!==b.version){z(P,b,m);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+m)}const pe={[va]:t.REPEAT,[Mr]:t.CLAMP_TO_EDGE,[Xc]:t.MIRRORED_REPEAT},ve={[gn]:t.NEAREST,[fE]:t.NEAREST_MIPMAP_NEAREST,[Va]:t.NEAREST_MIPMAP_LINEAR,[jn]:t.LINEAR,[Cl]:t.LINEAR_MIPMAP_NEAREST,[Er]:t.LINEAR_MIPMAP_LINEAR},we={[mE]:t.NEVER,[yE]:t.ALWAYS,[gE]:t.LESS,[Cg]:t.LEQUAL,[_E]:t.EQUAL,[SE]:t.GEQUAL,[vE]:t.GREATER,[xE]:t.NOTEQUAL};function Fe(b,m){if(m.type===Kn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===jn||m.magFilter===Cl||m.magFilter===Va||m.magFilter===Er||m.minFilter===jn||m.minFilter===Cl||m.minFilter===Va||m.minFilter===Er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,pe[m.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,pe[m.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,pe[m.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ve[m.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ve[m.minFilter]),m.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,we[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===gn||m.minFilter!==Va&&m.minFilter!==Er||m.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function je(b,m){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,m.addEventListener("dispose",L));const V=m.source;let j=h.get(V);j===void 0&&(j={},h.set(V,j));const q=ie(m);if(q!==b.__cacheKey){j[q]===void 0&&(j[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0),j[q].usedTimes++;const Se=j[b.__cacheKey];Se!==void 0&&(j[b.__cacheKey].usedTimes--,Se.usedTimes===0&&E(m)),b.__cacheKey=q,b.__webglTexture=j[q].texture}return P}function se(b,m,P){return Math.floor(Math.floor(b/P)/m)}function _e(b,m,P,V){const q=b.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,m.width,m.height,P,V,m.data);else{q.sort((ue,Re)=>ue.start-Re.start);let Se=0;for(let ue=1;ue<q.length;ue++){const Re=q[Se],Ie=q[ue],De=Re.start+Re.count,xe=se(Ie.start,m.width,4),ze=se(Re.start,m.width,4);Ie.start<=De+1&&xe===ze&&se(Ie.start+Ie.count-1,m.width,4)===xe?Re.count=Math.max(Re.count,Ie.start+Ie.count-Re.start):(++Se,q[Se]=Ie)}q.length=Se+1;const fe=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Ae=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,m.width);for(let ue=0,Re=q.length;ue<Re;ue++){const Ie=q[ue],De=Math.floor(Ie.start/4),xe=Math.ceil(Ie.count/4),ze=De%m.width,H=Math.floor(De/m.width),be=xe,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(t.UNPACK_SKIP_ROWS,H),n.texSubImage2D(t.TEXTURE_2D,0,ze,H,be,de,P,V,m.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,fe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ae)}}function Me(b,m,P){let V=t.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(V=t.TEXTURE_2D_ARRAY),m.isData3DTexture&&(V=t.TEXTURE_3D);const j=je(b,m),q=m.source;n.bindTexture(V,b.__webglTexture,t.TEXTURE0+P);const Se=i.get(q);if(q.version!==Se.__version||j===!0){n.activeTexture(t.TEXTURE0+P);const fe=it.getPrimaries(it.workingColorSpace),Ee=m.colorSpace===Hi?null:it.getPrimaries(m.colorSpace),Ae=m.colorSpace===Hi||fe===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ue=x(m.image,!1,r.maxTextureSize);ue=k(m,ue);const Re=s.convert(m.format,m.colorSpace),Ie=s.convert(m.type);let De=M(m.internalFormat,Re,Ie,m.colorSpace,m.isVideoTexture);Fe(V,m);let xe;const ze=m.mipmaps,H=m.isVideoTexture!==!0,be=Se.__version===void 0||j===!0,de=q.dataReady,Le=I(m,ue);if(m.isDepthTexture)De=v(m.format===Ma,m.type),be&&(H?n.texStorage2D(t.TEXTURE_2D,1,De,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,De,ue.width,ue.height,0,Re,Ie,null));else if(m.isDataTexture)if(ze.length>0){H&&be&&n.texStorage2D(t.TEXTURE_2D,Le,De,ze[0].width,ze[0].height);for(let me=0,ce=ze.length;me<ce;me++)xe=ze[me],H?de&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,xe.width,xe.height,Re,Ie,xe.data):n.texImage2D(t.TEXTURE_2D,me,De,xe.width,xe.height,0,Re,Ie,xe.data);m.generateMipmaps=!1}else H?(be&&n.texStorage2D(t.TEXTURE_2D,Le,De,ue.width,ue.height),de&&_e(m,ue,Re,Ie)):n.texImage2D(t.TEXTURE_2D,0,De,ue.width,ue.height,0,Re,Ie,ue.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){H&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,De,ze[0].width,ze[0].height,ue.depth);for(let me=0,ce=ze.length;me<ce;me++)if(xe=ze[me],m.format!==Un)if(Re!==null)if(H){if(de)if(m.layerUpdates.size>0){const Ne=Vd(xe.width,xe.height,m.format,m.type);for(const We of m.layerUpdates){const yt=xe.data.subarray(We*Ne/xe.data.BYTES_PER_ELEMENT,(We+1)*Ne/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,We,xe.width,xe.height,1,Re,yt)}m.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,ue.depth,Re,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,me,De,xe.width,xe.height,ue.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,xe.width,xe.height,ue.depth,Re,Ie,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,me,De,xe.width,xe.height,ue.depth,0,Re,Ie,xe.data)}else{H&&be&&n.texStorage2D(t.TEXTURE_2D,Le,De,ze[0].width,ze[0].height);for(let me=0,ce=ze.length;me<ce;me++)xe=ze[me],m.format!==Un?Re!==null?H?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,me,0,0,xe.width,xe.height,Re,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,me,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?de&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,xe.width,xe.height,Re,Ie,xe.data):n.texImage2D(t.TEXTURE_2D,me,De,xe.width,xe.height,0,Re,Ie,xe.data)}else if(m.isDataArrayTexture)if(H){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,De,ue.width,ue.height,ue.depth),de)if(m.layerUpdates.size>0){const me=Vd(ue.width,ue.height,m.format,m.type);for(const ce of m.layerUpdates){const Ne=ue.data.subarray(ce*me/ue.data.BYTES_PER_ELEMENT,(ce+1)*me/ue.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,Re,Ie,Ne)}m.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Re,Ie,ue.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ue.width,ue.height,ue.depth,0,Re,Ie,ue.data);else if(m.isData3DTexture)H?(be&&n.texStorage3D(t.TEXTURE_3D,Le,De,ue.width,ue.height,ue.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Re,Ie,ue.data)):n.texImage3D(t.TEXTURE_3D,0,De,ue.width,ue.height,ue.depth,0,Re,Ie,ue.data);else if(m.isFramebufferTexture){if(be)if(H)n.texStorage2D(t.TEXTURE_2D,Le,De,ue.width,ue.height);else{let me=ue.width,ce=ue.height;for(let Ne=0;Ne<Le;Ne++)n.texImage2D(t.TEXTURE_2D,Ne,De,me,ce,0,Re,Ie,null),me>>=1,ce>>=1}}else if(ze.length>0){if(H&&be){const me=he(ze[0]);n.texStorage2D(t.TEXTURE_2D,Le,De,me.width,me.height)}for(let me=0,ce=ze.length;me<ce;me++)xe=ze[me],H?de&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Re,Ie,xe):n.texImage2D(t.TEXTURE_2D,me,De,Re,Ie,xe);m.generateMipmaps=!1}else if(H){if(be){const me=he(ue);n.texStorage2D(t.TEXTURE_2D,Le,De,me.width,me.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Re,Ie,ue)}else n.texImage2D(t.TEXTURE_2D,0,De,Re,Ie,ue);g(m)&&d(V),Se.__version=q.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function z(b,m,P){if(m.image.length!==6)return;const V=je(b,m),j=m.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+P);const q=i.get(j);if(j.version!==q.__version||V===!0){n.activeTexture(t.TEXTURE0+P);const Se=it.getPrimaries(it.workingColorSpace),fe=m.colorSpace===Hi?null:it.getPrimaries(m.colorSpace),Ee=m.colorSpace===Hi||Se===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,m.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,m.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ae=m.isCompressedTexture||m.image[0].isCompressedTexture,ue=m.image[0]&&m.image[0].isDataTexture,Re=[];for(let ce=0;ce<6;ce++)!Ae&&!ue?Re[ce]=x(m.image[ce],!0,r.maxCubemapSize):Re[ce]=ue?m.image[ce].image:m.image[ce],Re[ce]=k(m,Re[ce]);const Ie=Re[0],De=s.convert(m.format,m.colorSpace),xe=s.convert(m.type),ze=M(m.internalFormat,De,xe,m.colorSpace),H=m.isVideoTexture!==!0,be=q.__version===void 0||V===!0,de=j.dataReady;let Le=I(m,Ie);Fe(t.TEXTURE_CUBE_MAP,m);let me;if(Ae){H&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ze,Ie.width,Ie.height);for(let ce=0;ce<6;ce++){me=Re[ce].mipmaps;for(let Ne=0;Ne<me.length;Ne++){const We=me[Ne];m.format!==Un?De!==null?H?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,0,0,We.width,We.height,De,We.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,ze,We.width,We.height,0,We.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,0,0,We.width,We.height,De,xe,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne,ze,We.width,We.height,0,De,xe,We.data)}}}else{if(me=m.mipmaps,H&&be){me.length>0&&Le++;const ce=he(Re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ze,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){H?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Re[ce].width,Re[ce].height,De,xe,Re[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,Re[ce].width,Re[ce].height,0,De,xe,Re[ce].data);for(let Ne=0;Ne<me.length;Ne++){const yt=me[Ne].image[ce].image;H?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,0,0,yt.width,yt.height,De,xe,yt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,ze,yt.width,yt.height,0,De,xe,yt.data)}}else{H?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,De,xe,Re[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,ze,De,xe,Re[ce]);for(let Ne=0;Ne<me.length;Ne++){const We=me[Ne];H?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,0,0,De,xe,We.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ne+1,ze,De,xe,We.image[ce])}}}g(m)&&d(t.TEXTURE_CUBE_MAP),q.__version=j.version,m.onUpdate&&m.onUpdate(m)}b.__version=m.version}function re(b,m,P,V,j,q){const Se=s.convert(P.format,P.colorSpace),fe=s.convert(P.type),Ee=M(P.internalFormat,Se,fe,P.colorSpace),Ae=i.get(m),ue=i.get(P);if(ue.__renderTarget=m,!Ae.__hasExternalTextures){const Re=Math.max(1,m.width>>q),Ie=Math.max(1,m.height>>q);j===t.TEXTURE_3D||j===t.TEXTURE_2D_ARRAY?n.texImage3D(j,q,Ee,Re,Ie,m.depth,0,Se,fe,null):n.texImage2D(j,q,Ee,Re,Ie,0,Se,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),C(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,V,j,ue.__webglTexture,0,w(m)):(j===t.TEXTURE_2D||j>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,V,j,ue.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(b,m,P){if(t.bindRenderbuffer(t.RENDERBUFFER,b),m.depthBuffer){const V=m.depthTexture,j=V&&V.isDepthTexture?V.type:null,q=v(m.stencilBuffer,j),Se=m.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=w(m);C(m)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,q,m.width,m.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,q,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,q,m.width,m.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,b)}else{const V=m.textures;for(let j=0;j<V.length;j++){const q=V[j],Se=s.convert(q.format,q.colorSpace),fe=s.convert(q.type),Ee=M(q.internalFormat,Se,fe,q.colorSpace),Ae=w(m);P&&C(m)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,Ee,m.width,m.height):C(m)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,Ee,m.width,m.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,m.width,m.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(b,m){if(m&&m.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=i.get(m.depthTexture);V.__renderTarget=m,(!V.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),ae(m.depthTexture,0);const j=V.__webglTexture,q=w(m);if(m.depthTexture.format===ya)C(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(m.depthTexture.format===Ma)C(m)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,q):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Oe(b){const m=i.get(b),P=b.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==b.depthTexture){const V=b.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),V){const j=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,V.removeEventListener("dispose",j)};V.addEventListener("dispose",j),m.__depthDisposeCallback=j}m.__boundDepthTexture=V}if(b.depthTexture&&!m.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");const V=b.texture.mipmaps;V&&V.length>0?oe(m.__webglFramebuffer[0],b):oe(m.__webglFramebuffer,b)}else if(P){m.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[V]),m.__webglDepthbuffer[V]===void 0)m.__webglDepthbuffer[V]=t.createRenderbuffer(),le(m.__webglDepthbuffer[V],b,!1);else{const j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=m.__webglDepthbuffer[V];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,q)}}else{const V=b.texture.mipmaps;if(V&&V.length>0?n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=t.createRenderbuffer(),le(m.__webglDepthbuffer,b,!1);else{const j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=m.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function D(b,m,P){const V=i.get(b);m!==void 0&&re(V.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&Oe(b)}function N(b){const m=b.texture,P=i.get(b),V=i.get(m);b.addEventListener("dispose",R);const j=b.textures,q=b.isWebGLCubeRenderTarget===!0,Se=j.length>1;if(Se||(V.__webglTexture===void 0&&(V.__webglTexture=t.createTexture()),V.__version=m.version,a.memory.textures++),q){P.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer[fe]=[];for(let Ee=0;Ee<m.mipmaps.length;Ee++)P.__webglFramebuffer[fe][Ee]=t.createFramebuffer()}else P.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer=[];for(let fe=0;fe<m.mipmaps.length;fe++)P.__webglFramebuffer[fe]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(Se)for(let fe=0,Ee=j.length;fe<Ee;fe++){const Ae=i.get(j[fe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=t.createTexture(),a.memory.textures++)}if(b.samples>0&&C(b)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let fe=0;fe<j.length;fe++){const Ee=j[fe];P.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[fe]);const Ae=s.convert(Ee.format,Ee.colorSpace),ue=s.convert(Ee.type),Re=M(Ee.internalFormat,Ae,ue,Ee.colorSpace,b.isXRRenderTarget===!0),Ie=w(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Re,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,P.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),le(P.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,m);for(let fe=0;fe<6;fe++)if(m.mipmaps&&m.mipmaps.length>0)for(let Ee=0;Ee<m.mipmaps.length;Ee++)re(P.__webglFramebuffer[fe][Ee],b,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee);else re(P.__webglFramebuffer[fe],b,m,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(m)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Se){for(let fe=0,Ee=j.length;fe<Ee;fe++){const Ae=j[fe],ue=i.get(Ae);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),Fe(t.TEXTURE_2D,Ae),re(P.__webglFramebuffer,b,Ae,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),g(Ae)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(fe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,V.__webglTexture),Fe(fe,m),m.mipmaps&&m.mipmaps.length>0)for(let Ee=0;Ee<m.mipmaps.length;Ee++)re(P.__webglFramebuffer[Ee],b,m,t.COLOR_ATTACHMENT0,fe,Ee);else re(P.__webglFramebuffer,b,m,t.COLOR_ATTACHMENT0,fe,0);g(m)&&d(fe),n.unbindTexture()}b.depthBuffer&&Oe(b)}function S(b){const m=b.textures;for(let P=0,V=m.length;P<V;P++){const j=m[P];if(g(j)){const q=y(b),Se=i.get(j).__webglTexture;n.bindTexture(q,Se),d(q),n.unbindTexture()}}}const ne=[],Z=[];function K(b){if(b.samples>0){if(C(b)===!1){const m=b.textures,P=b.width,V=b.height;let j=t.COLOR_BUFFER_BIT;const q=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=i.get(b),fe=m.length>1;if(fe)for(let Ae=0;Ae<m.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Ee=b.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Ae=0;Ae<m.length;Ae++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Ae]);const ue=i.get(m[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,P,V,0,0,P,V,j,t.NEAREST),l===!0&&(ne.length=0,Z.length=0,ne.push(t.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&b.resolveDepthBuffer===!1&&(ne.push(q),Z.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let Ae=0;Ae<m.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,Se.__webglColorRenderbuffer[Ae]);const ue=i.get(m[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const m=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[m])}}}function w(b){return Math.min(r.maxSamples,b.samples)}function C(b){const m=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function U(b){const m=a.render.frame;u.get(b)!==m&&(u.set(b,m),b.update())}function k(b,m){const P=b.colorSpace,V=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==ys&&P!==Hi&&(it.getTransfer(P)===dt?(V!==Un||j!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),m}function he(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=B,this.setTexture2D=ae,this.setTexture2DArray=ee,this.setTexture3D=J,this.setTextureCube=$,this.rebindTextures=D,this.setupRenderTarget=N,this.updateRenderTargetMipmap=S,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=C}function sR(t,e){function n(i,r=Hi){let s;const a=it.getTransfer(r);if(i===ei)return t.UNSIGNED_BYTE;if(i===rf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===bg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Mg)return t.BYTE;if(i===Eg)return t.SHORT;if(i===xa)return t.UNSIGNED_SHORT;if(i===nf)return t.INT;if(i===Cr)return t.UNSIGNED_INT;if(i===Kn)return t.FLOAT;if(i===Pa)return t.HALF_FLOAT;if(i===Tg)return t.ALPHA;if(i===wg)return t.RGB;if(i===Un)return t.RGBA;if(i===ya)return t.DEPTH_COMPONENT;if(i===Ma)return t.DEPTH_STENCIL;if(i===af)return t.RED;if(i===of)return t.RED_INTEGER;if(i===Ag)return t.RG;if(i===lf)return t.RG_INTEGER;if(i===cf)return t.RGBA_INTEGER;if(i===vo||i===xo||i===So||i===yo)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yc||i===$c||i===qc||i===jc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Yc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$c)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===Zc||i===Jc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kc||i===Zc)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===au||i===ou||i===lu||i===cu||i===uu||i===fu||i===hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===iu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ru)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===su)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===au)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ou)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hu)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mo||i===du||i===pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mo)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===du)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Rg||i===mu||i===gu||i===_u)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_u)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const aR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oR=`
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

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!==i.depthNear||n.depthFar!==i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new qi({vertexShader:aR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ot(new Lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cR extends As{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,_=null;const x=new lR,g=n.getContextAttributes();let d=null,y=null;const M=[],v=[],I=new qe;let L=null;const R=new an;R.viewport=new pt;const O=new an;O.viewport=new pt;const E=[R,O],T=new Cb;let F=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let _e=M[se];return _e===void 0&&(_e=new Kl,M[se]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(se){let _e=M[se];return _e===void 0&&(_e=new Kl,M[se]=_e),_e.getGripSpace()},this.getHand=function(se){let _e=M[se];return _e===void 0&&(_e=new Kl,M[se]=_e),_e.getHandSpace()};function W(se){const _e=v.indexOf(se.inputSource);if(_e===-1)return;const Me=M[_e];Me!==void 0&&(Me.update(se.inputSource,se.frame,c||a),Me.dispatchEvent({type:se.type,data:se.inputSource}))}function ie(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",ie),r.removeEventListener("inputsourceschange",ae);for(let se=0;se<M.length;se++){const _e=v[se];_e!==null&&(v[se]=null,M[se].disconnect(_e))}F=null,B=null,x.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,y=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",ie),r.addEventListener("inputsourceschange",ae),g.xrCompatible!==!0&&await n.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,z=null,re=null;g.depth&&(re=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Me=g.stencil?Ma:ya,z=g.stencil?Sa:Cr);const le={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Pr(h.textureWidth,h.textureHeight,{format:Un,type:ei,depthTexture:new Hg(h.textureWidth,h.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Me={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,Me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Pr(p.framebufferWidth,p.framebufferHeight,{format:Un,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ae(se){for(let _e=0;_e<se.removed.length;_e++){const Me=se.removed[_e],z=v.indexOf(Me);z>=0&&(v[z]=null,M[z].disconnect(Me))}for(let _e=0;_e<se.added.length;_e++){const Me=se.added[_e];let z=v.indexOf(Me);if(z===-1){for(let le=0;le<M.length;le++)if(le>=v.length){v.push(Me),z=le;break}else if(v[le]===null){v[le]=Me,z=le;break}if(z===-1)break}const re=M[z];re&&re.connect(Me)}}const ee=new Y,J=new Y;function $(se,_e,Me){ee.setFromMatrixPosition(_e.matrixWorld),J.setFromMatrixPosition(Me.matrixWorld);const z=ee.distanceTo(J),re=_e.projectionMatrix.elements,le=Me.projectionMatrix.elements,oe=re[14]/(re[10]-1),Oe=re[14]/(re[10]+1),D=(re[9]+1)/re[5],N=(re[9]-1)/re[5],S=(re[8]-1)/re[0],ne=(le[8]+1)/le[0],Z=oe*S,K=oe*ne,w=z/(-S+ne),C=w*-S;if(_e.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(C),se.translateZ(w),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),re[10]===-1)se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const U=oe+w,k=Oe+w,he=Z-C,b=K+(z-C),m=D*Oe/k*U,P=N*Oe/k*U;se.projectionMatrix.makePerspective(he,b,m,P,U,k),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function pe(se,_e){_e===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(_e.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let _e=se.near,Me=se.far;x.texture!==null&&(x.depthNear>0&&(_e=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),T.near=O.near=R.near=_e,T.far=O.far=R.far=Me,(F!==T.near||B!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),F=T.near,B=T.far),R.layers.mask=se.layers.mask|2,O.layers.mask=se.layers.mask|4,T.layers.mask=R.layers.mask|O.layers.mask;const z=se.parent,re=T.cameras;pe(T,z);for(let le=0;le<re.length;le++)pe(re[le],z);re.length===2?$(T,R,O):T.projectionMatrix.copy(R.projectionMatrix),ve(se,T,z)};function ve(se,_e,Me){Me===null?se.matrix.copy(_e.matrixWorld):(se.matrix.copy(Me.matrixWorld),se.matrix.invert(),se.matrix.multiply(_e.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(_e.projectionMatrix),se.projectionMatrixInverse.copy(_e.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ms*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(se){l=se,h!==null&&(h.fixedFoveation=se),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=se)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(T)};let we=null;function Fe(se,_e){if(u=_e.getViewerPose(c||a),_=_e,u!==null){const Me=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let z=!1;Me.length!==T.cameras.length&&(T.cameras.length=0,z=!0);for(let oe=0;oe<Me.length;oe++){const Oe=Me[oe];let D=null;if(p!==null)D=p.getViewport(Oe);else{const S=f.getViewSubImage(h,Oe);D=S.viewport,oe===0&&(e.setRenderTargetTextures(y,S.colorTexture,S.depthStencilTexture),e.setRenderTarget(y))}let N=E[oe];N===void 0&&(N=new an,N.layers.enable(oe),N.viewport=new pt,E[oe]=N),N.matrix.fromArray(Oe.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Oe.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(D.x,D.y,D.width,D.height),oe===0&&(T.matrix.copy(N.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),z===!0&&T.cameras.push(N)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const oe=f.getDepthInformation(Me[0]);oe&&oe.isValid&&oe.texture&&x.init(e,oe,r.renderState)}}for(let Me=0;Me<M.length;Me++){const z=v[Me],re=M[Me];z!==null&&re!==void 0&&re.update(z,_e,c||a)}we&&we(se,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const je=new Wg;je.setAnimationLoop(Fe),this.setAnimationLoop=function(se){we=se},this.dispose=function(){}}}const dr=new wn,uR=new _t;function fR(t,e){function n(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Fg(t)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,y,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,v)):d.isMeshMatcapMaterial?(s(g,d),_(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),x(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,y,M):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,n(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===on&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,n(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===on&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,n(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,n(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const y=e.get(d),M=y.envMap,v=y.envMapRotation;M&&(g.envMap.value=M,dr.copy(v),dr.x*=-1,dr.y*=-1,dr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),g.envMapRotation.value.setFromMatrix4(uR.makeRotationFromEuler(dr)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,y,M){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*y,g.scale.value=M*.5,d.map&&(g.map.value=d.map,n(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,n(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,n(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,y){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===on&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const y=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hR(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const v=M.program;i.uniformBlockBinding(y,v)}function c(y,M){let v=r[y.id];v===void 0&&(_(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",g));const I=M.program;i.updateUBOMapping(y,I);const L=e.render.frame;s[y.id]!==L&&(h(y),s[y.id]=L)}function u(y){const M=f();y.__bindingPointIndex=M;const v=t.createBuffer(),I=y.__size,L=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,I,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,v),v}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const M=r[y.id],v=y.uniforms,I=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let L=0,R=v.length;L<R;L++){const O=Array.isArray(v[L])?v[L]:[v[L]];for(let E=0,T=O.length;E<T;E++){const F=O[E];if(p(F,L,E,I)===!0){const B=F.__offset,W=Array.isArray(F.value)?F.value:[F.value];let ie=0;for(let ae=0;ae<W.length;ae++){const ee=W[ae],J=x(ee);typeof ee=="number"||typeof ee=="boolean"?(F.__data[0]=ee,t.bufferSubData(t.UNIFORM_BUFFER,B+ie,F.__data)):ee.isMatrix3?(F.__data[0]=ee.elements[0],F.__data[1]=ee.elements[1],F.__data[2]=ee.elements[2],F.__data[3]=0,F.__data[4]=ee.elements[3],F.__data[5]=ee.elements[4],F.__data[6]=ee.elements[5],F.__data[7]=0,F.__data[8]=ee.elements[6],F.__data[9]=ee.elements[7],F.__data[10]=ee.elements[8],F.__data[11]=0):(ee.toArray(F.__data,ie),ie+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,F.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,M,v,I){const L=y.value,R=M+"_"+v;if(I[R]===void 0)return typeof L=="number"||typeof L=="boolean"?I[R]=L:I[R]=L.clone(),!0;{const O=I[R];if(typeof L=="number"||typeof L=="boolean"){if(O!==L)return I[R]=L,!0}else if(O.equals(L)===!1)return O.copy(L),!0}return!1}function _(y){const M=y.uniforms;let v=0;const I=16;for(let R=0,O=M.length;R<O;R++){const E=Array.isArray(M[R])?M[R]:[M[R]];for(let T=0,F=E.length;T<F;T++){const B=E[T],W=Array.isArray(B.value)?B.value:[B.value];for(let ie=0,ae=W.length;ie<ae;ie++){const ee=W[ie],J=x(ee),$=v%I,pe=$%J.boundary,ve=$+pe;v+=pe,ve!==0&&I-ve<J.storage&&(v+=I-ve),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=J.storage}}}const L=v%I;return L>0&&(v+=I-L),y.__size=v,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function g(y){const M=y.target;M.removeEventListener("dispose",g);const v=a.indexOf(M.__bindingPointIndex);a.splice(v,1),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function d(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class dR{constructor(e={}){const{canvas:n=BE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let g=null,d=null;const y=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let I=!1;this._outputColorSpace=Mn;let L=0,R=0,O=null,E=-1,T=null;const F=new pt,B=new pt;let W=null;const ie=new Je(0);let ae=0,ee=n.width,J=n.height,$=1,pe=null,ve=null;const we=new pt(0,0,ee,J),Fe=new pt(0,0,ee,J);let je=!1;const se=new df;let _e=!1,Me=!1;const z=new _t,re=new _t,le=new Y,oe=new pt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let D=!1;function N(){return O===null?$:1}let S=i;function ne(A,G){return n.getContext(A,G)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tf}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",me,!1),n.addEventListener("webglcontextcreationerror",ce,!1),S===null){const G="webgl2";if(S=ne(G,A),S===null)throw ne(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Z,K,w,C,U,k,he,b,m,P,V,j,q,Se,fe,Ee,Ae,ue,Re,Ie,De,xe,ze,H;function be(){Z=new Ew(S),Z.init(),xe=new sR(S,Z),K=new gw(S,Z,e,xe),w=new iR(S,Z),K.reverseDepthBuffer&&h&&w.buffers.depth.setReversed(!0),C=new ww(S),U=new WA,k=new rR(S,Z,w,U,K,xe,C),he=new vw(v),b=new Mw(v),m=new Ib(S),ze=new pw(S,m),P=new bw(S,m,C,ze),V=new Rw(S,P,m,C),Re=new Aw(S,K,k),Ee=new _w(U),j=new GA(v,he,b,Z,K,ze,Ee),q=new fR(v,U),Se=new YA,fe=new JA(Z),ue=new dw(v,he,b,w,V,p,l),Ae=new tR(v,V,K),H=new hR(S,C,K,w),Ie=new mw(S,Z,C),De=new Tw(S,Z,C),C.programs=j.programs,v.capabilities=K,v.extensions=Z,v.properties=U,v.renderLists=Se,v.shadowMap=Ae,v.state=w,v.info=C}be();const de=new cR(v,S);this.xr=de,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const A=Z.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Z.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(ee,J,!1))},this.getSize=function(A){return A.set(ee,J)},this.setSize=function(A,G,Q=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=A,J=G,n.width=Math.floor(A*$),n.height=Math.floor(G*$),Q===!0&&(n.style.width=A+"px",n.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(ee*$,J*$).floor()},this.setDrawingBufferSize=function(A,G,Q){ee=A,J=G,$=Q,n.width=Math.floor(A*Q),n.height=Math.floor(G*Q),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(F)},this.getViewport=function(A){return A.copy(we)},this.setViewport=function(A,G,Q,te){A.isVector4?we.set(A.x,A.y,A.z,A.w):we.set(A,G,Q,te),w.viewport(F.copy(we).multiplyScalar($).round())},this.getScissor=function(A){return A.copy(Fe)},this.setScissor=function(A,G,Q,te){A.isVector4?Fe.set(A.x,A.y,A.z,A.w):Fe.set(A,G,Q,te),w.scissor(B.copy(Fe).multiplyScalar($).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){w.setScissorTest(je=A)},this.setOpaqueSort=function(A){pe=A},this.setTransparentSort=function(A){ve=A},this.getClearColor=function(A){return A.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor(...arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,Q=!0){let te=0;if(A){let X=!1;if(O!==null){const ge=O.texture.format;X=ge===cf||ge===lf||ge===of}if(X){const ge=O.texture.type,Te=ge===ei||ge===Cr||ge===xa||ge===Sa||ge===rf||ge===sf,Ue=ue.getClearColor(),Pe=ue.getClearAlpha(),Ve=Ue.r,Ge=Ue.g,Be=Ue.b;Te?(_[0]=Ve,_[1]=Ge,_[2]=Be,_[3]=Pe,S.clearBufferuiv(S.COLOR,0,_)):(x[0]=Ve,x[1]=Ge,x[2]=Be,x[3]=Pe,S.clearBufferiv(S.COLOR,0,x))}else te|=S.COLOR_BUFFER_BIT}G&&(te|=S.DEPTH_BUFFER_BIT),Q&&(te|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",me,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),ue.dispose(),Se.dispose(),fe.dispose(),U.dispose(),he.dispose(),b.dispose(),V.dispose(),ze.dispose(),H.dispose(),j.dispose(),de.dispose(),de.removeEventListener("sessionstart",xf),de.removeEventListener("sessionend",Sf),nr.stop()};function Le(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const A=C.autoReset,G=Ae.enabled,Q=Ae.autoUpdate,te=Ae.needsUpdate,X=Ae.type;be(),C.autoReset=A,Ae.enabled=G,Ae.autoUpdate=Q,Ae.needsUpdate=te,Ae.type=X}function ce(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ne(A){const G=A.target;G.removeEventListener("dispose",Ne),We(G)}function We(A){yt(A),U.remove(A)}function yt(A){const G=U.get(A).programs;G!==void 0&&(G.forEach(function(Q){j.releaseProgram(Q)}),A.isShaderMaterial&&j.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Q,te,X,ge){G===null&&(G=Oe);const Te=X.isMesh&&X.matrixWorld.determinant()<0,Ue=Jg(A,G,Q,te,X);w.setMaterial(te,Te);let Pe=Q.index,Ve=1;if(te.wireframe===!0){if(Pe=P.getWireframeAttribute(Q),Pe===void 0)return;Ve=2}const Ge=Q.drawRange,Be=Q.attributes.position;let Qe=Ge.start*Ve,ht=(Ge.start+Ge.count)*Ve;ge!==null&&(Qe=Math.max(Qe,ge.start*Ve),ht=Math.min(ht,(ge.start+ge.count)*Ve)),Pe!==null?(Qe=Math.max(Qe,0),ht=Math.min(ht,Pe.count)):Be!=null&&(Qe=Math.max(Qe,0),ht=Math.min(ht,Be.count));const bt=ht-Qe;if(bt<0||bt===1/0)return;ze.setup(X,te,Ue,Q,Pe);let wt,nt=Ie;if(Pe!==null&&(wt=m.get(Pe),nt=De,nt.setIndex(wt)),X.isMesh)te.wireframe===!0?(w.setLineWidth(te.wireframeLinewidth*N()),nt.setMode(S.LINES)):nt.setMode(S.TRIANGLES);else if(X.isLine){let ke=te.linewidth;ke===void 0&&(ke=1),w.setLineWidth(ke*N()),X.isLineSegments?nt.setMode(S.LINES):X.isLineLoop?nt.setMode(S.LINE_LOOP):nt.setMode(S.LINE_STRIP)}else X.isPoints?nt.setMode(S.POINTS):X.isSprite&&nt.setMode(S.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)fs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),nt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))nt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const ke=X._multiDrawStarts,kt=X._multiDrawCounts,at=X._multiDrawCount,Rn=Pe?m.get(Pe).bytesPerElement:1,Or=U.get(te).currentProgram.getUniforms();for(let un=0;un<at;un++)Or.setValue(S,"_gl_DrawID",un),nt.render(ke[un]/Rn,kt[un])}else if(X.isInstancedMesh)nt.renderInstances(Qe,bt,X.count);else if(Q.isInstancedBufferGeometry){const ke=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,kt=Math.min(Q.instanceCount,ke);nt.renderInstances(Qe,bt,kt)}else nt.render(Qe,bt)};function ft(A,G,Q){A.transparent===!0&&A.side===mi&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,Na(A,G,Q),A.side=$i,A.needsUpdate=!0,Na(A,G,Q),A.side=mi):Na(A,G,Q)}this.compile=function(A,G,Q=null){Q===null&&(Q=A),d=fe.get(Q),d.init(G),M.push(d),Q.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),A!==Q&&A.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(d.pushLight(X),X.castShadow&&d.pushShadow(X))}),d.setupLights();const te=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ge=X.material;if(ge)if(Array.isArray(ge))for(let Te=0;Te<ge.length;Te++){const Ue=ge[Te];ft(Ue,Q,X),te.add(Ue)}else ft(ge,Q,X),te.add(ge)}),d=M.pop(),te},this.compileAsync=function(A,G,Q=null){const te=this.compile(A,G,Q);return new Promise(X=>{function ge(){if(te.forEach(function(Te){U.get(Te).currentProgram.isReady()&&te.delete(Te)}),te.size===0){X(A);return}setTimeout(ge,10)}Z.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let An=null;function ti(A){An&&An(A)}function xf(){nr.stop()}function Sf(){nr.start()}const nr=new Wg;nr.setAnimationLoop(ti),typeof self<"u"&&nr.setContext(self),this.setAnimationLoop=function(A){An=A,de.setAnimationLoop(A),A===null?nr.stop():nr.start()},de.addEventListener("sessionstart",xf),de.addEventListener("sessionend",Sf),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(G),G=de.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,O),d=fe.get(A,M.length),d.init(G),M.push(d),re.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),se.setFromProjectionMatrix(re),Me=this.localClippingEnabled,_e=Ee.init(this.clippingPlanes,Me),g=Se.get(A,y.length),g.init(),y.push(g),de.enabled===!0&&de.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&ol(ge,G,-1/0,v.sortObjects)}ol(A,G,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(pe,ve),D=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,D&&ue.addToRenderList(g,A),this.info.render.frame++,_e===!0&&Ee.beginShadows();const Q=d.state.shadowsArray;Ae.render(Q,A,G),_e===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=g.opaque,X=g.transmissive;if(d.setupLights(),G.isArrayCamera){const ge=G.cameras;if(X.length>0)for(let Te=0,Ue=ge.length;Te<Ue;Te++){const Pe=ge[Te];Mf(te,X,A,Pe)}D&&ue.render(A);for(let Te=0,Ue=ge.length;Te<Ue;Te++){const Pe=ge[Te];yf(g,A,Pe,Pe.viewport)}}else X.length>0&&Mf(te,X,A,G),D&&ue.render(A),yf(g,A,G);O!==null&&R===0&&(k.updateMultisampleRenderTarget(O),k.updateRenderTargetMipmap(O)),A.isScene===!0&&A.onAfterRender(v,A,G),ze.resetDefaultState(),E=-1,T=null,M.pop(),M.length>0?(d=M[M.length-1],_e===!0&&Ee.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function ol(A,G,Q,te){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)d.pushLight(A),A.castShadow&&d.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||se.intersectsSprite(A)){te&&oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(re);const Te=V.update(A),Ue=A.material;Ue.visible&&g.push(A,Te,Ue,Q,oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||se.intersectsObject(A))){const Te=V.update(A),Ue=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),oe.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),oe.copy(Te.boundingSphere.center)),oe.applyMatrix4(A.matrixWorld).applyMatrix4(re)),Array.isArray(Ue)){const Pe=Te.groups;for(let Ve=0,Ge=Pe.length;Ve<Ge;Ve++){const Be=Pe[Ve],Qe=Ue[Be.materialIndex];Qe&&Qe.visible&&g.push(A,Te,Qe,Q,oe.z,Be)}}else Ue.visible&&g.push(A,Te,Ue,Q,oe.z,null)}}const ge=A.children;for(let Te=0,Ue=ge.length;Te<Ue;Te++)ol(ge[Te],G,Q,te)}function yf(A,G,Q,te){const X=A.opaque,ge=A.transmissive,Te=A.transparent;d.setupLightsView(Q),_e===!0&&Ee.setGlobalState(v.clippingPlanes,Q),te&&w.viewport(F.copy(te)),X.length>0&&Da(X,G,Q),ge.length>0&&Da(ge,G,Q),Te.length>0&&Da(Te,G,Q),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function Mf(A,G,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[te.id]===void 0&&(d.state.transmissionRenderTarget[te.id]=new Pr(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?Pa:ei,minFilter:Er,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ge=d.state.transmissionRenderTarget[te.id],Te=te.viewport||F;ge.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);const Ue=v.getRenderTarget();v.setRenderTarget(ge),v.getClearColor(ie),ae=v.getClearAlpha(),ae<1&&v.setClearColor(16777215,.5),v.clear(),D&&ue.render(Q);const Pe=v.toneMapping;v.toneMapping=Wi;const Ve=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),d.setupLightsView(te),_e===!0&&Ee.setGlobalState(v.clippingPlanes,te),Da(A,Q,te),k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge),Z.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let Be=0,Qe=G.length;Be<Qe;Be++){const ht=G[Be],bt=ht.object,wt=ht.geometry,nt=ht.material,ke=ht.group;if(nt.side===mi&&bt.layers.test(te.layers)){const kt=nt.side;nt.side=on,nt.needsUpdate=!0,Ef(bt,Q,te,wt,nt,ke),nt.side=kt,nt.needsUpdate=!0,Ge=!0}}Ge===!0&&(k.updateMultisampleRenderTarget(ge),k.updateRenderTargetMipmap(ge))}v.setRenderTarget(Ue),v.setClearColor(ie,ae),Ve!==void 0&&(te.viewport=Ve),v.toneMapping=Pe}function Da(A,G,Q){const te=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ge=A.length;X<ge;X++){const Te=A[X],Ue=Te.object,Pe=Te.geometry,Ve=Te.group;let Ge=Te.material;Ge.allowOverride===!0&&te!==null&&(Ge=te),Ue.layers.test(Q.layers)&&Ef(Ue,G,Q,Pe,Ge,Ve)}}function Ef(A,G,Q,te,X,ge){A.onBeforeRender(v,G,Q,te,X,ge),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(v,G,Q,te,A,ge),X.transparent===!0&&X.side===mi&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,v.renderBufferDirect(Q,G,te,X,A,ge),X.side=$i,X.needsUpdate=!0,v.renderBufferDirect(Q,G,te,X,A,ge),X.side=mi):v.renderBufferDirect(Q,G,te,X,A,ge),A.onAfterRender(v,G,Q,te,X,ge)}function Na(A,G,Q){G.isScene!==!0&&(G=Oe);const te=U.get(A),X=d.state.lights,ge=d.state.shadowsArray,Te=X.state.version,Ue=j.getParameters(A,X.state,ge,G,Q),Pe=j.getProgramCacheKey(Ue);let Ve=te.programs;te.environment=A.isMeshStandardMaterial?G.environment:null,te.fog=G.fog,te.envMap=(A.isMeshStandardMaterial?b:he).get(A.envMap||te.environment),te.envMapRotation=te.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",Ne),Ve=new Map,te.programs=Ve);let Ge=Ve.get(Pe);if(Ge!==void 0){if(te.currentProgram===Ge&&te.lightsStateVersion===Te)return Tf(A,Ue),Ge}else Ue.uniforms=j.getUniforms(A),A.onBeforeCompile(Ue,v),Ge=j.acquireProgram(Ue,Pe),Ve.set(Pe,Ge),te.uniforms=Ue.uniforms;const Be=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=Ee.uniform),Tf(A,Ue),te.needsLights=e_(A),te.lightsStateVersion=Te,te.needsLights&&(Be.ambientLightColor.value=X.state.ambient,Be.lightProbe.value=X.state.probe,Be.directionalLights.value=X.state.directional,Be.directionalLightShadows.value=X.state.directionalShadow,Be.spotLights.value=X.state.spot,Be.spotLightShadows.value=X.state.spotShadow,Be.rectAreaLights.value=X.state.rectArea,Be.ltc_1.value=X.state.rectAreaLTC1,Be.ltc_2.value=X.state.rectAreaLTC2,Be.pointLights.value=X.state.point,Be.pointLightShadows.value=X.state.pointShadow,Be.hemisphereLights.value=X.state.hemi,Be.directionalShadowMap.value=X.state.directionalShadowMap,Be.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Be.spotShadowMap.value=X.state.spotShadowMap,Be.spotLightMatrix.value=X.state.spotLightMatrix,Be.spotLightMap.value=X.state.spotLightMap,Be.pointShadowMap.value=X.state.pointShadowMap,Be.pointShadowMatrix.value=X.state.pointShadowMatrix),te.currentProgram=Ge,te.uniformsList=null,Ge}function bf(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Eo.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function Tf(A,G){const Q=U.get(A);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Jg(A,G,Q,te,X){G.isScene!==!0&&(G=Oe),k.resetTextureUnits();const ge=G.fog,Te=te.isMeshStandardMaterial?G.environment:null,Ue=O===null?v.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ys,Pe=(te.isMeshStandardMaterial?b:he).get(te.envMap||Te),Ve=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ge=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Be=!!Q.morphAttributes.position,Qe=!!Q.morphAttributes.normal,ht=!!Q.morphAttributes.color;let bt=Wi;te.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(bt=v.toneMapping);const wt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,nt=wt!==void 0?wt.length:0,ke=U.get(te),kt=d.state.lights;if(_e===!0&&(Me===!0||A!==T)){const Zt=A===T&&te.id===E;Ee.setState(te,A,Zt)}let at=!1;te.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==kt.state.version||ke.outputColorSpace!==Ue||X.isBatchedMesh&&ke.batching===!1||!X.isBatchedMesh&&ke.batching===!0||X.isBatchedMesh&&ke.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&ke.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&ke.instancing===!1||!X.isInstancedMesh&&ke.instancing===!0||X.isSkinnedMesh&&ke.skinning===!1||!X.isSkinnedMesh&&ke.skinning===!0||X.isInstancedMesh&&ke.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&ke.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&ke.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&ke.instancingMorph===!1&&X.morphTexture!==null||ke.envMap!==Pe||te.fog===!0&&ke.fog!==ge||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ee.numPlanes||ke.numIntersection!==Ee.numIntersection)||ke.vertexAlphas!==Ve||ke.vertexTangents!==Ge||ke.morphTargets!==Be||ke.morphNormals!==Qe||ke.morphColors!==ht||ke.toneMapping!==bt||ke.morphTargetsCount!==nt)&&(at=!0):(at=!0,ke.__version=te.version);let Rn=ke.currentProgram;at===!0&&(Rn=Na(te,G,X));let Or=!1,un=!1,Ls=!1;const Et=Rn.getUniforms(),vn=ke.uniforms;if(w.useProgram(Rn.program)&&(Or=!0,un=!0,Ls=!0),te.id!==E&&(E=te.id,un=!0),Or||T!==A){w.buffers.depth.getReversed()?(z.copy(A.projectionMatrix),HE(z),zE(z),Et.setValue(S,"projectionMatrix",z)):Et.setValue(S,"projectionMatrix",A.projectionMatrix),Et.setValue(S,"viewMatrix",A.matrixWorldInverse);const rn=Et.map.cameraPosition;rn!==void 0&&rn.setValue(S,le.setFromMatrixPosition(A.matrixWorld)),K.logarithmicDepthBuffer&&Et.setValue(S,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Et.setValue(S,"isOrthographic",A.isOrthographicCamera===!0),T!==A&&(T=A,un=!0,Ls=!0)}if(X.isSkinnedMesh){Et.setOptional(S,X,"bindMatrix"),Et.setOptional(S,X,"bindMatrixInverse");const Zt=X.skeleton;Zt&&(Zt.boneTexture===null&&Zt.computeBoneTexture(),Et.setValue(S,"boneTexture",Zt.boneTexture,k))}X.isBatchedMesh&&(Et.setOptional(S,X,"batchingTexture"),Et.setValue(S,"batchingTexture",X._matricesTexture,k),Et.setOptional(S,X,"batchingIdTexture"),Et.setValue(S,"batchingIdTexture",X._indirectTexture,k),Et.setOptional(S,X,"batchingColorTexture"),X._colorsTexture!==null&&Et.setValue(S,"batchingColorTexture",X._colorsTexture,k));const xn=Q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&Re.update(X,Q,Rn),(un||ke.receiveShadow!==X.receiveShadow)&&(ke.receiveShadow=X.receiveShadow,Et.setValue(S,"receiveShadow",X.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(vn.envMap.value=Pe,vn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&G.environment!==null&&(vn.envMapIntensity.value=G.environmentIntensity),un&&(Et.setValue(S,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Qg(vn,Ls),ge&&te.fog===!0&&q.refreshFogUniforms(vn,ge),q.refreshMaterialUniforms(vn,te,$,J,d.state.transmissionRenderTarget[A.id]),Eo.upload(S,bf(ke),vn,k)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Eo.upload(S,bf(ke),vn,k),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Et.setValue(S,"center",X.center),Et.setValue(S,"modelViewMatrix",X.modelViewMatrix),Et.setValue(S,"normalMatrix",X.normalMatrix),Et.setValue(S,"modelMatrix",X.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Zt=te.uniformsGroups;for(let rn=0,ll=Zt.length;rn<ll;rn++){const ir=Zt[rn];H.update(ir,Rn),H.bind(ir,Rn)}}return Rn}function Qg(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function e_(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,G,Q){const te=U.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),U.get(A.texture).__webglTexture=G,U.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const Q=U.get(A);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0};const t_=S.createFramebuffer();this.setRenderTarget=function(A,G=0,Q=0){O=A,L=G,R=Q;let te=!0,X=null,ge=!1,Te=!1;if(A){const Pe=U.get(A);if(Pe.__useDefaultFramebuffer!==void 0)w.bindFramebuffer(S.FRAMEBUFFER,null),te=!1;else if(Pe.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(Pe.__hasExternalTextures)k.rebindTextures(A,U.get(A.texture).__webglTexture,U.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Be=A.depthTexture;if(Pe.__boundDepthTexture!==Be){if(Be!==null&&U.has(Be)&&(A.width!==Be.image.width||A.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Te=!0);const Ge=U.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[G])?X=Ge[G][Q]:X=Ge[G],ge=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?X=U.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?X=Ge[Q]:X=Ge,F.copy(A.viewport),B.copy(A.scissor),W=A.scissorTest}else F.copy(we).multiplyScalar($).floor(),B.copy(Fe).multiplyScalar($).floor(),W=je;if(Q!==0&&(X=t_),w.bindFramebuffer(S.FRAMEBUFFER,X)&&te&&w.drawBuffers(A,X),w.viewport(F),w.scissor(B),w.setScissorTest(W),ge){const Pe=U.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pe.__webglTexture,Q)}else if(Te){const Pe=U.get(A.texture),Ve=G;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Pe.__webglTexture,Q,Ve)}else if(A!==null&&Q!==0){const Pe=U.get(A.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Pe.__webglTexture,Q)}E=-1},this.readRenderTargetPixels=function(A,G,Q,te,X,ge,Te,Ue=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe){w.bindFramebuffer(S.FRAMEBUFFER,Pe);try{const Ve=A.textures[Ue],Ge=Ve.format,Be=Ve.type;if(!K.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-te&&Q>=0&&Q<=A.height-X&&(A.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ue),S.readPixels(G,Q,te,X,xe.convert(Ge),xe.convert(Be),ge))}finally{const Ve=O!==null?U.get(O).__webglFramebuffer:null;w.bindFramebuffer(S.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,G,Q,te,X,ge,Te,Ue=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=U.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Pe=Pe[Te]),Pe)if(G>=0&&G<=A.width-te&&Q>=0&&Q<=A.height-X){w.bindFramebuffer(S.FRAMEBUFFER,Pe);const Ve=A.textures[Ue],Ge=Ve.format,Be=Ve.type;if(!K.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Qe),S.bufferData(S.PIXEL_PACK_BUFFER,ge.byteLength,S.STREAM_READ),A.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Ue),S.readPixels(G,Q,te,X,xe.convert(Ge),xe.convert(Be),0);const ht=O!==null?U.get(O).__webglFramebuffer:null;w.bindFramebuffer(S.FRAMEBUFFER,ht);const bt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await kE(S,bt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Qe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,ge),S.deleteBuffer(Qe),S.deleteSync(bt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,Q=0){const te=Math.pow(2,-Q),X=Math.floor(A.image.width*te),ge=Math.floor(A.image.height*te),Te=G!==null?G.x:0,Ue=G!==null?G.y:0;k.setTexture2D(A,0),S.copyTexSubImage2D(S.TEXTURE_2D,Q,0,0,Te,Ue,X,ge),w.unbindTexture()};const n_=S.createFramebuffer(),i_=S.createFramebuffer();this.copyTextureToTexture=function(A,G,Q=null,te=null,X=0,ge=null){ge===null&&(X!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=X,X=0):ge=0);let Te,Ue,Pe,Ve,Ge,Be,Qe,ht,bt;const wt=A.isCompressedTexture?A.mipmaps[ge]:A.image;if(Q!==null)Te=Q.max.x-Q.min.x,Ue=Q.max.y-Q.min.y,Pe=Q.isBox3?Q.max.z-Q.min.z:1,Ve=Q.min.x,Ge=Q.min.y,Be=Q.isBox3?Q.min.z:0;else{const xn=Math.pow(2,-X);Te=Math.floor(wt.width*xn),Ue=Math.floor(wt.height*xn),A.isDataArrayTexture?Pe=wt.depth:A.isData3DTexture?Pe=Math.floor(wt.depth*xn):Pe=1,Ve=0,Ge=0,Be=0}te!==null?(Qe=te.x,ht=te.y,bt=te.z):(Qe=0,ht=0,bt=0);const nt=xe.convert(G.format),ke=xe.convert(G.type);let kt;G.isData3DTexture?(k.setTexture3D(G,0),kt=S.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(k.setTexture2DArray(G,0),kt=S.TEXTURE_2D_ARRAY):(k.setTexture2D(G,0),kt=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,G.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,G.unpackAlignment);const at=S.getParameter(S.UNPACK_ROW_LENGTH),Rn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),Or=S.getParameter(S.UNPACK_SKIP_PIXELS),un=S.getParameter(S.UNPACK_SKIP_ROWS),Ls=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,wt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,wt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Ve),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ge),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Be);const Et=A.isDataArrayTexture||A.isData3DTexture,vn=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const xn=U.get(A),Zt=U.get(G),rn=U.get(xn.__renderTarget),ll=U.get(Zt.__renderTarget);w.bindFramebuffer(S.READ_FRAMEBUFFER,rn.__webglFramebuffer),w.bindFramebuffer(S.DRAW_FRAMEBUFFER,ll.__webglFramebuffer);for(let ir=0;ir<Pe;ir++)Et&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,U.get(A).__webglTexture,X,Be+ir),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,U.get(G).__webglTexture,ge,bt+ir)),S.blitFramebuffer(Ve,Ge,Te,Ue,Qe,ht,Te,Ue,S.DEPTH_BUFFER_BIT,S.NEAREST);w.bindFramebuffer(S.READ_FRAMEBUFFER,null),w.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||U.has(A)){const xn=U.get(A),Zt=U.get(G);w.bindFramebuffer(S.READ_FRAMEBUFFER,n_),w.bindFramebuffer(S.DRAW_FRAMEBUFFER,i_);for(let rn=0;rn<Pe;rn++)Et?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,xn.__webglTexture,X,Be+rn):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,xn.__webglTexture,X),vn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Zt.__webglTexture,ge,bt+rn):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Zt.__webglTexture,ge),X!==0?S.blitFramebuffer(Ve,Ge,Te,Ue,Qe,ht,Te,Ue,S.COLOR_BUFFER_BIT,S.NEAREST):vn?S.copyTexSubImage3D(kt,ge,Qe,ht,bt+rn,Ve,Ge,Te,Ue):S.copyTexSubImage2D(kt,ge,Qe,ht,Ve,Ge,Te,Ue);w.bindFramebuffer(S.READ_FRAMEBUFFER,null),w.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else vn?A.isDataTexture||A.isData3DTexture?S.texSubImage3D(kt,ge,Qe,ht,bt,Te,Ue,Pe,nt,ke,wt.data):G.isCompressedArrayTexture?S.compressedTexSubImage3D(kt,ge,Qe,ht,bt,Te,Ue,Pe,nt,wt.data):S.texSubImage3D(kt,ge,Qe,ht,bt,Te,Ue,Pe,nt,ke,wt):A.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,ge,Qe,ht,Te,Ue,nt,ke,wt.data):A.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,ge,Qe,ht,wt.width,wt.height,nt,wt.data):S.texSubImage2D(S.TEXTURE_2D,ge,Qe,ht,Te,Ue,nt,ke,wt);S.pixelStorei(S.UNPACK_ROW_LENGTH,at),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,Rn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,Or),S.pixelStorei(S.UNPACK_SKIP_ROWS,un),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ls),ge===0&&G.generateMipmaps&&S.generateMipmap(kt),w.unbindTexture()},this.copyTextureToTexture3D=function(A,G,Q=null,te=null,X=0){return fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,Q,te,X)},this.initRenderTarget=function(A){U.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),w.unbindTexture()},this.resetState=function(){L=0,R=0,O=null,w.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}class pR{directions=[0,0,0,0];moveDir=new qe(0,0);_mouseXSpeed;_mouseYSpeed;_isMouse=!1;_isMouseMovingTimer=setTimeout(()=>{});_mousePos=new qe(window.innerWidth/2,window.innerHeight/2);_mouseDir=new qe(0,0);constructor(e=11e3,n=9500){this._mouseXSpeed=e,this._mouseYSpeed=n}handleMovementVector=()=>{this.moveDir.x=this.directions[3]-this.directions[2],this.moveDir.y=this.directions[1]-this.directions[0]};handleKeyDown=e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=1;break;case"ArrowDown":this.directions[1]=1;break;case"ArrowLeft":this.directions[2]=1;break;case"ArrowRight":this.directions[3]=1;break}this.handleMovementVector()}};handleKeyUp=e=>{if(!this._isMouse){switch(e.key){case"ArrowUp":this.directions[0]=0;break;case"ArrowDown":this.directions[1]=0;break;case"ArrowLeft":this.directions[2]=0;break;case"ArrowRight":this.directions[3]=0;break}this.handleMovementVector()}};handleMouseClick=e=>{this._mousePos.set(e.clientX,e.clientY)};handleStart=e=>{if(!this.isKeyboard){if(this._mouseDir.set(0,0),e.type==="mousedown"){const n=e;this._mousePos.set(n.clientX,n.clientY)}else if(e.type==="touchstart"){const n=e;this._mousePos.set(n.touches[0].clientX,n.touches[0].clientY)}this._isMouse=!0}};handleMove=e=>{let n=0,i=0;if(e.type==="mousemove"){const a=e;n=Fn.lerp(this.mousePos.x,a.clientX,.5),i=Fn.lerp(this.mousePos.y,a.clientY,.5)}else if(e.type==="touchmove"){const a=e;n=Fn.lerp(this.mousePos.x,a.touches[0].clientX,.5),i=Fn.lerp(this.mousePos.y,a.touches[0].clientY,.5)}const r=(n-this.mousePos.x)*this._mouseXSpeed/window.innerWidth/window.innerHeight,s=(i-this.mousePos.y)*this._mouseYSpeed/window.innerWidth/window.innerHeight;this._mouseDir.set(r,s),this._mousePos.set(n,i),clearTimeout(this._isMouseMovingTimer),this._isMouseMovingTimer=setTimeout(()=>{this._mouseDir.set(0,0)},50)};handleEnd=()=>{this.isKeyboard||(this._mouseDir.set(0,0),this._isMouse=!1)};start(){window.addEventListener("keydown",this.handleKeyDown),window.addEventListener("keyup",this.handleKeyUp),window.addEventListener("click",this.handleMouseClick),window.addEventListener("mousedown",this.handleStart),window.addEventListener("mousemove",this.handleMove),window.addEventListener("mouseup",this.handleEnd),window.addEventListener("touchstart",this.handleStart,{passive:!1}),window.addEventListener("touchmove",this.handleMove,{passive:!1}),window.addEventListener("touchend",this.handleEnd,{passive:!1})}update(){}end(){window.removeEventListener("keydown",this.handleKeyDown),window.removeEventListener("keyup",this.handleKeyUp),window.removeEventListener("click",this.handleMouseClick),window.removeEventListener("mousedown",this.handleStart),window.removeEventListener("mousemove",this.handleMove),window.removeEventListener("mouseup",this.handleEnd),window.removeEventListener("touchstart",this.handleStart),window.removeEventListener("touchmove",this.handleMove),window.removeEventListener("touchend",this.handleEnd)}getMovementVectorNormalized(){return this.moveDir.normalize()}get mousePos(){return this._mousePos}get mouseDir(){return this._mouseDir}get isMouse(){return this._isMouse}get isKeyboard(){return this.directions.includes(1)}set mouseHorizontalSpeed(e){this._mouseXSpeed=e}set mouseVerticalSpeed(e){this._mouseYSpeed=e}}class mR{collidables=[];raycaster=new Hd;cameraRaycaster=new Hd;screenPoint=new qe(0,0);screenWorldPos=new Y(0,0,0);angle=Math.PI/2;axis=new Y(0,1,0);temp=new Y(0,0,0);dir=new Y(0,0,0);setCollidables(e){this.collidables=e}getRaycastHit(e,n,i){return this.raycaster.ray.origin=e,this.raycaster.ray.direction=n,this.raycaster.far=i,this.raycaster.intersectObjects(this.collidables)}getLinecastHit(e,n,i=1,r=0){const s=this.getRaycastHit(e,n,i);return this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,this.angle).normalize().multiplyScalar(r)),this.getRaycastHit(this.temp,n,i).forEach(a=>{s.indexOf(a)===-1&&s.push(a)}),this.temp.copy(e).add(this.dir.copy(n).applyAxisAngle(this.axis,-this.angle).normalize().multiplyScalar(r)),this.getRaycastHit(this.temp,n,i).forEach(a=>{s.indexOf(a)===-1&&s.push(a)}),s}raycast(e,n,i){return this.getRaycastHit(e,n,i).length===0}linecast(e,n,i,r){return this.getLinecastHit(e,n,i,r).length===0}getRaycastHitFromScreen=(e,n,i)=>{const r=n/window.innerWidth*2-1,s=-(i/window.innerHeight)*2+1;return this.screenPoint.set(r,s),this.cameraRaycaster.setFromCamera(this.screenPoint,e),this.cameraRaycaster.intersectObjects(this.collidables)};screenPointToWorld=(e,n,i)=>{const r=this.getRaycastHitFromScreen(e,n,i);if(!(!r||!r[0]))return this.screenWorldPos.set(r[0].point.x,r[0].point.y,r[0].point.z),this.screenWorldPos}}class jg{_renderer;constructor(e){this._renderer=new dR({canvas:e,antialias:!0,alpha:!0})}handleResize=()=>{this._renderer.setPixelRatio(window.devicePixelRatio||1),this._renderer.setSize(window.innerWidth,window.innerHeight)};startAnimation(e,n,i){const r=()=>{e(),this._renderer.render(n,i)};this._renderer.setAnimationLoop(r)}start(){window.addEventListener("resize",this.handleResize),this._renderer.shadowMap.enabled=!0,this._renderer.shadowMap.type=Sg,this._renderer.setClearColor(0,0),this.handleResize()}update(){}end(){window.removeEventListener("resize",this.handleResize),this._renderer.dispose()}}let gR=class{_camera=new Vg;size=5;isListenerAdded=!1;updateProjection=()=>{const e=window.innerWidth/window.innerHeight;this._camera.top=this.size/e,this._camera.bottom=-this.size/e,this._camera.right=this.size,this._camera.left=-this.size,this._camera.updateProjectionMatrix()};start(){this.updateProjection(),this._camera.position.set(0,10,50),this._camera.lookAt(0,0,0),!this.isListenerAdded&&(window.addEventListener("resize",this.updateProjection),this.isListenerAdded=!0)}update(){}end(){window.removeEventListener("resize",this.updateProjection),this.isListenerAdded=!1}get camera(){return this._camera}},_R=class{ambientLightIntensityLight=1;ambientLightIntensityDark=0;spotlightPrimaryPosLight=new Y(50,50,50);spotlightPrimaryPosDark=new Y(-50,50,50);spotlightPrimaryAngleLight=.1;spotlightPrimaryAngleDark=.03;spotlightSecondaryPowLight=0;spotlightSecondaryPowDark=5e3;ambientLight=new Gg(13421772);spotlightPrimary=new Fd(16777215);spotlightSecondary=new Fd(14540253);alpha=.1;themeStore=Ca();start(){this.spotlightPrimary.power=5e4,this.spotlightPrimary.penumbra=.8,this.spotlightPrimary.shadow.intensity=.8,this.spotlightPrimary.castShadow=!0,this.spotlightSecondary.angle=.08,this.spotlightSecondary.penumbra=.8,this.spotlightSecondary.shadow.intensity=.8,this.spotlightSecondary.castShadow=!0,this.themeStore.theme===sn.Light?(this.spotlightPrimary.position.set(50,50,50),this.ambientLight.intensity=this.ambientLightIntensityLight,this.spotlightPrimary.angle=this.spotlightPrimaryAngleLight,this.spotlightSecondary.power=this.spotlightSecondaryPowLight):this.themeStore.theme===sn.Dark&&(this.spotlightPrimary.position.set(-50,50,50),this.ambientLight.intensity=this.ambientLightIntensityDark,this.spotlightPrimary.angle=this.spotlightPrimaryAngleDark,this.spotlightSecondary.power=this.spotlightSecondaryPowDark),this.spotlightSecondary.position.set(-50,50,50),ji.add(this.ambientLight,this.spotlightPrimary,this.spotlightSecondary)}update(){this.themeStore.theme==="light"?(this.ambientLight.intensity=Fn.lerp(this.ambientLight.intensity,this.ambientLightIntensityLight,this.alpha),this.spotlightPrimary.angle=Fn.lerp(this.spotlightPrimary.angle,this.spotlightPrimaryAngleLight,this.alpha),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosLight,this.alpha),this.spotlightSecondary.power=this.spotlightSecondaryPowLight):(this.ambientLight.intensity=Fn.lerp(this.ambientLight.intensity,this.ambientLightIntensityDark,this.alpha),this.spotlightPrimary.angle=Fn.lerp(this.spotlightPrimary.angle,this.spotlightPrimaryAngleDark,this.alpha),this.spotlightPrimary.position.lerp(this.spotlightPrimaryPosDark,this.alpha),this.spotlightSecondary.power=this.spotlightSecondaryPowDark)}end(){ji.remove(this.ambientLight,this.spotlightPrimary,this.spotlightSecondary),this.ambientLight.dispose(),this.spotlightPrimary.dispose(),this.spotlightSecondary.dispose()}};const vR="/my-site/assets/texture-Bhl9W45K.webp";let xR=class{velocityGrounding=.5;maxForce=100;bounciness=1;forceCoe=30;dragCoe=3;mousePosYOffset=100;moveVec=new qe(0,0);displacement=new Y(0,0,0);_velocity=new Y(0,0,0);velocityX=new Y(0,0,0);velocityZ=new Y(0,0,0);_force=new Y(0,0,0);_drag=new Y(0,0,0);playerRadius=1;playerGeometry=new pf(this.playerRadius,32,32);playerTexture=new Tb().load(vR);playerMaterial=new vb({color:16777215,map:this.playerTexture});player=new Ot(this.playerGeometry,this.playerMaterial);updateMoveVec(){if(mn.isKeyboard)this.moveVec=mn.getMovementVectorNormalized();else if(mn.isMouse){const e=mn.mousePos,n=bs.screenPointToWorld(bo.camera,e.x,e.y+this.mousePosYOffset);if(n){const i=n.sub(this.player.position).normalize();i&&this.moveVec.set(i.x,i.z)}}else this.moveVec.set(0,0)}updateForce(e){if(e>this.maxForce)throw new Error("Large force may result in object tunneling in this physics engine");this._force.set(this.moveVec.x,0,this.moveVec.y).multiplyScalar(e),this._force.z*=2}updateDrag(e){if(e>this.maxForce)throw new Error("Large force may result in object tunneling in this physics engine");this._drag.copy(this._velocity).multiplyScalar(-e)}updateVelocity(e){let n=this._force.add(this._drag).multiplyScalar(e);this._velocity.length()<this.velocityGrounding&&this._force.length()===0&&(this._velocity.set(0,0,0),n.set(0,0,0)),this._velocity.add(n)}safeLinecast(e){return bs.linecast(this.player.position,e,this.playerRadius,this.playerRadius)}checkCollision(){let e=this.safeLinecast(this._velocity)&&this.safeLinecast(this._force);e||(this.velocityX.set(this._velocity.x,0,0),this.velocityZ.set(0,0,this._velocity.z),e=this.safeLinecast(this.velocityX),e?(e=this.safeLinecast(this.velocityZ),e?this._velocity.set(this.velocityX.x,0,this.velocityZ.z):this._velocity.set(this.velocityX.x,0,-this.velocityZ.z*this.bounciness)):(e=this.safeLinecast(this.velocityZ),e?this._velocity.set(-this.velocityX.x*this.bounciness,0,this.velocityZ.z):this._velocity.set(0,0,0)))}applyMovement(){const e=Kg.getDelta();this.updateMoveVec(),this.updateForce(this.forceCoe),this.updateDrag(this.dragCoe),this.updateVelocity(e),this.checkCollision(),this.displacement.copy(this._velocity).multiplyScalar(e),this.player.position.add(this.displacement)}start(){this.playerTexture.wrapS=va,this.playerTexture.wrapT=va,this.playerTexture.repeat.set(3,3),this.player.position.set(3,0,-2),this.player.castShadow=!0,ji.add(this.player)}update(){this.applyMovement()}end(){ji.remove(this.player),this.playerMaterial.dispose(),this.playerTexture.dispose(),this.playerGeometry.dispose()}get obj(){return this.player}};class SR{wallMaterial_1=new xb({color:15658734});wallMaterial_2=new rl({opacity:0,transparent:!0});floorMaterial=this.wallMaterial_1;wallGeometry=new Lr(20,20);floorGeometry=new Lr(20,100);wall_1=new Ot(this.wallGeometry,this.wallMaterial_1);wall_2=new Ot(this.wallGeometry,this.wallMaterial_2);wall_3=new Ot(this.wallGeometry,this.wallMaterial_2);wall_4=new Ot(this.wallGeometry,this.wallMaterial_2);floor=new Ot(this.floorGeometry,this.floorMaterial);start(){this.wall_1.position.set(0,0,-10),this.wall_2.position.set(-5,0,0),this.wall_2.rotation.set(0,Math.PI/2,0),this.wall_3.position.set(5,0,0),this.wall_3.rotation.set(0,-Math.PI/2,0),this.wall_4.position.set(0,0,10),this.wall_4.rotation.set(0,Math.PI,0),this.floor.position.set(0,-1,0),this.floor.rotation.set(-Math.PI/2,0,0),this.wall_1.receiveShadow=!0,this.floor.receiveShadow=!0,ji.add(this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.floor)}update(){}end(){ji.remove(this.wall_1,this.wall_2,this.wall_3,this.wall_4,this.floor),this.wallMaterial_1.dispose(),this.wallMaterial_2.dispose(),this.floorMaterial.dispose(),this.wallGeometry.dispose(),this.floorGeometry.dispose()}}const ji=new kg,bo=new gR;class yR{walls=new SR;player=new xR;lights=new _R;rendererController;constructor(e){this.rendererController=new jg(e)}start(){this.player.start(),this.walls.start(),this.lights.start(),bo.start();const e=ji.children.filter(n=>n!==this.player.obj);bs.setCollidables(e),mn.start(),this.rendererController.start(),this.rendererController.startAnimation(()=>this.update(),ji,bo.camera)}update(){this.player.update(),this.walls.update(),this.lights.update()}end(){bo.end(),mn.end(),this.rendererController.end(),this.player.end(),this.walls.end(),this.lights.end()}}class MR{_camera=new an;isListenerAdded=!1;move(e,n,i){this._camera.position.x+=e*i,this._camera.position.y+=n*i}updateProjection=()=>{const e=window.innerWidth/window.innerHeight;this._camera.aspect=e,this._camera.updateProjectionMatrix()};start(){this.updateProjection(),this._camera.fov=60,this._camera.near=1,this._camera.far=1e3,this._camera.position.set(0,0,15),this._camera.lookAt(0,0,0),!this.isListenerAdded&&(window.addEventListener("resize",this.updateProjection),this.isListenerAdded=!0)}update(){const e=mn.mouseDir;mn.isMouse&&e.length()!==0&&this.move(-e.x,e.y,2)}end(){window.removeEventListener("resize",this.updateProjection),this.isListenerAdded=!1}get camera(){return this._camera}}class ER{alpha=.1;ambientLightIntensityLight=.7;ambientLightIntensityDark=.1;ambientLight=new Gg(16777215);themeStore=Ca();start(){this.themeStore.theme===sn.Light?this.ambientLight.intensity=this.ambientLightIntensityLight:this.themeStore.theme===sn.Dark&&(this.ambientLight.intensity=this.ambientLightIntensityDark),Ir.add(this.ambientLight)}update(){this.themeStore.theme===sn.Light?this.ambientLight.intensity=Fn.lerp(this.ambientLight.intensity,this.ambientLightIntensityLight,this.alpha):this.themeStore.theme===sn.Dark&&(this.ambientLight.intensity=Fn.lerp(this.ambientLight.intensity,this.ambientLightIntensityDark,this.alpha))}end(){Ir.remove(this.ambientLight),this.ambientLight.dispose()}}class bR{player=new Rb(16777215);geometry=new Lr(100,100);material=new rl({opacity:0,transparent:!0});intersectPlane=new Ot(this.geometry,this.material);mouseWorldPos=new Y(0,0,0);updateMouseWorldPos(){const e=mn.mousePos,n=bs.screenPointToWorld(Ar.camera,e.x,e.y);n&&(this.mouseWorldPos=n)}applyMovement(){this.updateMouseWorldPos(),this.player.position.set(this.mouseWorldPos.x,this.mouseWorldPos.y,10),this.intersectPlane.position.set(this.mouseWorldPos.x,this.mouseWorldPos.y,5)}start(){this.player.intensity=50,this.player.castShadow=!0,this.player.shadow.camera.far=10,this.player.shadow.intensity=.5,this.player.shadow.normalBias=.3,this.player.shadow.radius=2,Ir.add(this.player,this.intersectPlane)}update(){this.applyMovement()}end(){Ir.remove(this.player,this.intersectPlane),this.player.dispose(),this.geometry.dispose(),this.material.dispose()}get obj(){return this.intersectPlane}}class TR{maxAmp=.7;minAmp=.3;ampCoe=this.maxAmp-this.minAmp;maxSpeed=1;minSpeed=.3;speedCoe=this.maxSpeed-this.minSpeed;phaseCoe=2*Math.PI;amplitudes=[];speeds=[];phases=[];maxMouseEffect=3.5;mouseEffectSigma=8;tailEffect=[];size;dummy=new Gt;mesh;constructor(e,n,i=0){this.size=i;const r=i**2;this.mesh=new pb(e,n,r),this.mesh.castShadow=!0,this.mesh.receiveShadow=!0;for(let s=0;s<r;s++)this.amplitudes[s]=Math.random()*this.ampCoe+this.minAmp,this.speeds[s]=Math.random()*this.speedCoe+this.minSpeed,this.phases[s]=this.phaseCoe*Math.random(),this.tailEffect.push(0)}setPos(e,n,i){this.mesh.position.set(e,n,i)}start(){this.update(),Ir.add(this.mesh)}update(){let e=0;const n=bs.screenPointToWorld(Ar.camera,mn.mousePos.x,mn.mousePos.y);for(let i=0;i<this.size;i++)for(let r=0;r<this.size;r++){const s=i,a=r,o=this.amplitudes[e]*Math.sin(Kg.getElapsedTime()*this.speeds[e]+this.phases[e]);let l=999;n&&(l=(n.x-s-this.mesh.position.x)**2+(n.y-a-this.mesh.position.y)**2);const c=this.maxMouseEffect*Math.exp(-l/this.mouseEffectSigma);let u=.5;c<this.tailEffect[e]&&(u=.2),this.tailEffect[e]=Fn.lerp(this.tailEffect[e],c,u),this.dummy.position.x=s,this.dummy.position.y=a,this.dummy.position.z=o+this.tailEffect[e],this.dummy.updateMatrix(),this.mesh.setMatrixAt(e,this.dummy.matrix),e++}this.mesh.instanceMatrix.needsUpdate=!0}end(){Ir.remove(this.mesh),this.mesh.dispose()}}class wR{_size;_renderDist;loadedChunks=new Map;center=new qe(0,0);geometry=new Cs(1,1,3);material=new _b({color:16777215,roughness:.5,metalness:.1});constructor(e,n){this._size=e,this._renderDist=n}getCurrentGridFromWorld(){this.center.set(Math.floor(Ar.camera.position.x/this._size),Math.floor(Ar.camera.position.y/this._size))}updateChunks(){const e=new Set;for(let n=-this._renderDist;n<=this._renderDist;n++)for(let i=-this._renderDist;i<=this._renderDist;i++){const r=this.center.x+n,s=this.center.y+i,a=`${r},${s}`;if(e.add(a),!this.loadedChunks.has(a)){const o=new TR(this.geometry,this.material,this._size),l=r*this._size,c=s*this._size;o.setPos(l,c,0),o.start(),this.loadedChunks.set(a,o)}}for(const n of this.loadedChunks.keys())if(!e.has(n)){const i=this.loadedChunks.get(n);i&&i.end(),this.loadedChunks.delete(n)}}start(){}update(){this.getCurrentGridFromWorld(),this.updateChunks(),this.loadedChunks.forEach(e=>e.update())}end(){this.loadedChunks.forEach(e=>e.end()),this.geometry.dispose(),this.material.dispose()}}const Ir=new kg,Ar=new MR;class AR{lights=new ER;player=new bR;chunkLoader=new wR(12,2);rendererController;constructor(e){this.rendererController=new jg(e)}start(){this.lights.start(),this.player.start(),this.chunkLoader.start(),Ar.start(),bs.setCollidables([this.player.obj]),mn.start(),this.rendererController.start(),this.rendererController.startAnimation(()=>this.update(),Ir,Ar.camera)}update(){this.lights.update(),this.player.update(),this.chunkLoader.update(),Ar.update()}end(){mn.end(),this.rendererController.end(),this.lights.end(),this.player.end(),this.chunkLoader.end()}}const mn=new pR,bs=new mR,Kg=new Pb,RR={class:"absolute t-0 l-0 w-full h-full"},CR={key:1,class:"grid grid-cols-2 pl-0.10 pr-0.10 z-1"},PR=cn({__name:"homepage",setup(t){const{t:e}=wi(),n=ws(),i=Hn(null),r=Hn(!1);function s(){r.value=!0}return Nr(()=>{if(!i.value)return;const a=new yR(i.value);a.start(),Ts(()=>a.end())}),(a,o)=>(ut(),xt("div",{class:"page flex row a-center j-start",onClick:o[0]||(o[0]=l=>s())},[Pt("div",RR,[Pt("canvas",{ref_key:"canvas",ref:i},null,512)]),!r.value&&!xi(n).isLoading?(ut(),jo(Ws,{key:0,class:"hem-1 pl-0.10 pr-0.10 font-size-xl ls-0.5 txt-shadow z-1",text:xi(e)("click"),duration:3e3,animation:"fadeLoop"},null,8,["text"])):Vt("",!0),r.value?(ut(),xt("div",CR,[et(Ws,{class:"col-span-2 hem-1 pb-10 font-size-md",text:xi(e)("hello"),duration:500,stagger:50},null,8,["text"]),et(Ws,{class:"sm:col-span-2 hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"peter",duration:1e3,stagger:100}),et(Ws,{class:"hem-1 font-size-4xl ls-0.5 txt-shadow uppercase",text:"chan",duration:1e3,delay:500,stagger:100})])):Vt("",!0)]))}}),LR={class:"page"},IR={class:"absolute t-0 l-0 w-full h-full"},DR=cn({__name:"projects",setup(t){const{t:e}=wi(),n=fo("canvas");return Nr(()=>{if(!n.value)return;const i=new AR(n.value);i.start(),Ts(()=>i.end())}),(i,r)=>(ut(),xt("div",LR,[Pt("div",IR,[Pt("canvas",{ref_key:"canvas",ref:n},null,512)])]))}}),NR={},UR={class:"page"};function FR(t,e){return ut(),xt("div",UR,[...e[0]||(e[0]=[Pt("h1",null,"Sorry",-1),Pt("h2",null,"This page is not yet online",-1)])])}const OR=Zi(NR,[["render",FR]]),BR={};function kR(t,e){return null}const HR=Zi(BR,[["render",kR],["__scopeId","data-v-1d7c9e6b"]]),Zg=[{path:"/",name:"home",component:PR},{path:"/works",name:"works",component:DR},{path:"/blogs",name:"blogs",component:OR},{path:"/test",name:"test",component:HR}],vf=NM({history:cM("/my-site/"),scrollBehavior(){return{top:0}},routes:Zg});vf.beforeEach(async(t,e,n)=>{const i=ws();i.load();const r=i.isFirstLoad?0:i.duration;await new Promise(a=>setTimeout(a,r));const s=sessionStorage.redirect;return s&&Zg.find(a=>a.path===s)?(sessionStorage.removeItem("redirect"),n(s)):n()});vf.afterEach((t,e,n)=>{ws().done()});const ac={messages:{hello:"hello, i am",home:"home",work:"work",todos:"todos",authentication:"authentication",blogs:"blogs",blog:"blog",test:"test",computer:"use computer for the best experience",click:"click to start"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric"}},numberFormats:{currency:{style:"currency",currency:"USD",useGrouping:!1,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:2,maximumFractionDigits:2},percent:{style:"percent",useGrouping:!1}}},oc={messages:{hello:"你好, 我是",home:"主頁",work:"項目",todos:"任務清單",authentication:"驗證",blogs:"部落格",blog:"博客",test:"測試",computer:"使用電腦體驗最佳",click:"按下開始"},dateTimeFormats:{short:{year:"numeric",month:"short",day:"numeric"},long:{year:"numeric",month:"short",day:"numeric",weekday:"short",hour:"numeric",minute:"numeric",hour12:!0}},numberFormats:{currency:{style:"currency",currency:"HKD",useGrouping:!0,notation:"standard"},decimal:{style:"decimal",minimumFractionDigits:1,maximumFractionDigits:1},percent:{style:"percent",useGrouping:!0}}},zR={legacy:!1,locale:"en-US",fallbackLocale:"en-US",messages:{"en-US":ac.messages,"zh-TW":oc.messages},datetimeFormats:{"en-US":ac.dateTimeFormats,"zh-TW":oc.dateTimeFormats},numberFormats:{"en-US":ac.numberFormats,"zh-TW":oc.numberFormats}},VR=MS(zR),GR=DS(),al=Rv(Iy);al.use(vf);al.use(VR);al.use(GR);al.mount("#app");
