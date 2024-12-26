(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Kc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const mt={},Bs=[],zn=()=>{},Gm=()=>!1,bo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),$c=n=>n.startsWith("onUpdate:"),Dt=Object.assign,Zc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Wm=Object.prototype.hasOwnProperty,lt=(n,e)=>Wm.call(n,e),Ve=Array.isArray,zs=n=>yo(n)==="[object Map]",yf=n=>yo(n)==="[object Set]",We=n=>typeof n=="function",Tt=n=>typeof n=="string",Oi=n=>typeof n=="symbol",vt=n=>n!==null&&typeof n=="object",Sf=n=>(vt(n)||We(n))&&We(n.then)&&We(n.catch),Mf=Object.prototype.toString,yo=n=>Mf.call(n),Xm=n=>yo(n).slice(8,-1),Ef=n=>yo(n)==="[object Object]",Jc=n=>Tt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ur=Kc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),So=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Ym=/-(\w)/g,_n=So(n=>n.replace(Ym,(e,t)=>t?t.toUpperCase():"")),qm=/\B([A-Z])/g,us=So(n=>n.replace(qm,"-$1").toLowerCase()),Mo=So(n=>n.charAt(0).toUpperCase()+n.slice(1)),Bo=So(n=>n?`on${Mo(n)}`:""),Ii=(n,e)=>!Object.is(n,e),zo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Af=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},jm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let ju;const Eo=()=>ju||(ju=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Qc(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=Tt(i)?Jm(i):Qc(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Tt(n)||vt(n))return n}const Km=/;(?![^(]*\))/g,$m=/:([^]+)/,Zm=/\/\*[^]*?\*\//g;function Jm(n){const e={};return n.replace(Zm,"").split(Km).forEach(t=>{if(t){const i=t.split($m);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Kr(n){let e="";if(Tt(n))e=n;else if(Ve(n))for(let t=0;t<n.length;t++){const i=Kr(n[t]);i&&(e+=i+" ")}else if(vt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Qm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e_=Kc(Qm);function Tf(n){return!!n||n===""}const wf=n=>!!(n&&n.__v_isRef===!0),eu=n=>Tt(n)?n:n==null?"":Ve(n)||vt(n)&&(n.toString===Mf||!We(n.toString))?wf(n)?eu(n.value):JSON.stringify(n,Rf,2):String(n),Rf=(n,e)=>wf(e)?Rf(n,e.value):zs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Ho(i,r)+" =>"]=s,t),{})}:yf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ho(t))}:Oi(e)?Ho(e):vt(e)&&!Ve(e)&&!Ef(e)?String(e):e,Ho=(n,e="")=>{var t;return Oi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let on;class t_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function n_(){return on}let pt;const Vo=new WeakSet;class Cf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,on&&on.active&&on.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vo.has(this)&&(Vo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||If(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ku(this),Lf(this);const e=pt,t=wn;pt=this,wn=!0;try{return this.fn()}finally{Df(this),pt=e,wn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)iu(e);this.deps=this.depsTail=void 0,Ku(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kl(this)&&this.run()}get dirty(){return kl(this)}}let Pf=0,Or,Fr;function If(n,e=!1){if(n.flags|=8,e){n.next=Fr,Fr=n;return}n.next=Or,Or=n}function tu(){Pf++}function nu(){if(--Pf>0)return;if(Fr){let e=Fr;for(Fr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Or;){let e=Or;for(Or=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Lf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Df(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),iu(i),i_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function kl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Nf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Nf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===$r))return;n.globalVersion=$r;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!kl(n)){n.flags&=-3;return}const t=pt,i=wn;pt=n,wn=!0;try{Lf(n);const s=n.fn(n._value);(e.version===0||Ii(s,n._value))&&(n._value=s,e.version++)}catch(s){throw e.version++,s}finally{pt=t,wn=i,Df(n),n.flags&=-3}}function iu(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)iu(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function i_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let wn=!0;const Uf=[];function Fi(){Uf.push(wn),wn=!1}function ki(){const n=Uf.pop();wn=n===void 0?!0:n}function Ku(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=pt;pt=void 0;try{e()}finally{pt=t}}}let $r=0;class s_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class su{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!pt||!wn||pt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==pt)t=this.activeLink=new s_(pt,this),pt.deps?(t.prevDep=pt.depsTail,pt.depsTail.nextDep=t,pt.depsTail=t):pt.deps=pt.depsTail=t,Of(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=pt.depsTail,t.nextDep=void 0,pt.depsTail.nextDep=t,pt.depsTail=t,pt.deps===t&&(pt.deps=i)}return t}trigger(e){this.version++,$r++,this.notify(e)}notify(e){tu();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{nu()}}}function Of(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Of(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Bl=new WeakMap,rs=Symbol(""),zl=Symbol(""),Zr=Symbol("");function zt(n,e,t){if(wn&&pt){let i=Bl.get(n);i||Bl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new su),s.map=i,s.key=t),s.track()}}function ai(n,e,t,i,s,r){const a=Bl.get(n);if(!a){$r++;return}const o=l=>{l&&l.trigger()};if(tu(),e==="clear")a.forEach(o);else{const l=Ve(n),c=l&&Jc(t);if(l&&t==="length"){const u=Number(i);a.forEach((h,d)=>{(d==="length"||d===Zr||!Oi(d)&&d>=u)&&o(h)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Zr)),e){case"add":l?c&&o(a.get("length")):(o(a.get(rs)),zs(n)&&o(a.get(zl)));break;case"delete":l||(o(a.get(rs)),zs(n)&&o(a.get(zl)));break;case"set":zs(n)&&o(a.get(rs));break}}nu()}function ps(n){const e=ot(n);return e===n?e:(zt(e,"iterate",Zr),mn(n)?e:e.map(Ht))}function Ao(n){return zt(n=ot(n),"iterate",Zr),n}const r_={__proto__:null,[Symbol.iterator](){return Go(this,Symbol.iterator,Ht)},concat(...n){return ps(this).concat(...n.map(e=>Ve(e)?ps(e):e))},entries(){return Go(this,"entries",n=>(n[1]=Ht(n[1]),n))},every(n,e){return Kn(this,"every",n,e,void 0,arguments)},filter(n,e){return Kn(this,"filter",n,e,t=>t.map(Ht),arguments)},find(n,e){return Kn(this,"find",n,e,Ht,arguments)},findIndex(n,e){return Kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Kn(this,"findLast",n,e,Ht,arguments)},findLastIndex(n,e){return Kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Wo(this,"includes",n)},indexOf(...n){return Wo(this,"indexOf",n)},join(n){return ps(this).join(n)},lastIndexOf(...n){return Wo(this,"lastIndexOf",n)},map(n,e){return Kn(this,"map",n,e,void 0,arguments)},pop(){return mr(this,"pop")},push(...n){return mr(this,"push",n)},reduce(n,...e){return $u(this,"reduce",n,e)},reduceRight(n,...e){return $u(this,"reduceRight",n,e)},shift(){return mr(this,"shift")},some(n,e){return Kn(this,"some",n,e,void 0,arguments)},splice(...n){return mr(this,"splice",n)},toReversed(){return ps(this).toReversed()},toSorted(n){return ps(this).toSorted(n)},toSpliced(...n){return ps(this).toSpliced(...n)},unshift(...n){return mr(this,"unshift",n)},values(){return Go(this,"values",Ht)}};function Go(n,e,t){const i=Ao(n),s=i[e]();return i!==n&&!mn(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.value&&(r.value=t(r.value)),r}),s}const a_=Array.prototype;function Kn(n,e,t,i,s,r){const a=Ao(n),o=a!==n&&!mn(n),l=a[e];if(l!==a_[e]){const h=l.apply(n,r);return o?Ht(h):h}let c=t;a!==n&&(o?c=function(h,d){return t.call(this,Ht(h),d,n)}:t.length>2&&(c=function(h,d){return t.call(this,h,d,n)}));const u=l.call(a,c,i);return o&&s?s(u):u}function $u(n,e,t,i){const s=Ao(n);let r=t;return s!==n&&(mn(n)?t.length>3&&(r=function(a,o,l){return t.call(this,a,o,l,n)}):r=function(a,o,l){return t.call(this,a,Ht(o),l,n)}),s[e](r,...i)}function Wo(n,e,t){const i=ot(n);zt(i,"iterate",Zr);const s=i[e](...t);return(s===-1||s===!1)&&ou(t[0])?(t[0]=ot(t[0]),i[e](...t)):s}function mr(n,e,t=[]){Fi(),tu();const i=ot(n)[e].apply(n,t);return nu(),ki(),i}const o_=Kc("__proto__,__v_isRef,__isVue"),Ff=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Oi));function l_(n){Oi(n)||(n=String(n));const e=ot(this);return zt(e,"has",n),e.hasOwnProperty(n)}class kf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?v_:Vf:r?Hf:zf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Ve(e);if(!s){let l;if(a&&(l=r_[t]))return l;if(t==="hasOwnProperty")return l_}const o=Reflect.get(e,t,Gt(e)?e:i);return(Oi(t)?Ff.has(t):o_(t))||(s||zt(e,"get",t),r)?o:Gt(o)?a&&Jc(t)?o:o.value:vt(o)?s?Wf(o):To(o):o}}class Bf extends kf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];if(!this._isShallow){const l=as(r);if(!mn(i)&&!as(i)&&(r=ot(r),i=ot(i)),!Ve(e)&&Gt(r)&&!Gt(i))return l?!1:(r.value=i,!0)}const a=Ve(e)&&Jc(t)?Number(t)<e.length:lt(e,t),o=Reflect.set(e,t,i,Gt(e)?e:s);return e===ot(s)&&(a?Ii(i,r)&&ai(e,"set",t,i):ai(e,"add",t,i)),o}deleteProperty(e,t){const i=lt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ai(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!Oi(t)||!Ff.has(t))&&zt(e,"has",t),i}ownKeys(e){return zt(e,"iterate",Ve(e)?"length":rs),Reflect.ownKeys(e)}}class c_ extends kf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const u_=new Bf,h_=new c_,d_=new Bf(!0);const Hl=n=>n,ma=n=>Reflect.getPrototypeOf(n);function f_(n,e,t){return function(...i){const s=this.__v_raw,r=ot(s),a=zs(r),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=s[n](...i),u=t?Hl:e?Vl:Ht;return!e&&zt(r,"iterate",l?zl:rs),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:o?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function _a(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function p_(n,e){const t={get(s){const r=this.__v_raw,a=ot(r),o=ot(s);n||(Ii(s,o)&&zt(a,"get",s),zt(a,"get",o));const{has:l}=ma(a),c=e?Hl:n?Vl:Ht;if(l.call(a,s))return c(r.get(s));if(l.call(a,o))return c(r.get(o));r!==a&&r.get(s)},get size(){const s=this.__v_raw;return!n&&zt(ot(s),"iterate",rs),Reflect.get(s,"size",s)},has(s){const r=this.__v_raw,a=ot(r),o=ot(s);return n||(Ii(s,o)&&zt(a,"has",s),zt(a,"has",o)),s===o?r.has(s):r.has(s)||r.has(o)},forEach(s,r){const a=this,o=a.__v_raw,l=ot(o),c=e?Hl:n?Vl:Ht;return!n&&zt(l,"iterate",rs),o.forEach((u,h)=>s.call(r,c(u),c(h),a))}};return Dt(t,n?{add:_a("add"),set:_a("set"),delete:_a("delete"),clear:_a("clear")}:{add(s){!e&&!mn(s)&&!as(s)&&(s=ot(s));const r=ot(this);return ma(r).has.call(r,s)||(r.add(s),ai(r,"add",s,s)),this},set(s,r){!e&&!mn(r)&&!as(r)&&(r=ot(r));const a=ot(this),{has:o,get:l}=ma(a);let c=o.call(a,s);c||(s=ot(s),c=o.call(a,s));const u=l.call(a,s);return a.set(s,r),c?Ii(r,u)&&ai(a,"set",s,r):ai(a,"add",s,r),this},delete(s){const r=ot(this),{has:a,get:o}=ma(r);let l=a.call(r,s);l||(s=ot(s),l=a.call(r,s)),o&&o.call(r,s);const c=r.delete(s);return l&&ai(r,"delete",s,void 0),c},clear(){const s=ot(this),r=s.size!==0,a=s.clear();return r&&ai(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=f_(s,n,e)}),t}function ru(n,e){const t=p_(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(lt(t,s)&&s in i?t:i,s,r)}const m_={get:ru(!1,!1)},__={get:ru(!1,!0)},g_={get:ru(!0,!1)};const zf=new WeakMap,Hf=new WeakMap,Vf=new WeakMap,v_=new WeakMap;function x_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b_(n){return n.__v_skip||!Object.isExtensible(n)?0:x_(Xm(n))}function To(n){return as(n)?n:au(n,!1,u_,m_,zf)}function Gf(n){return au(n,!1,d_,__,Hf)}function Wf(n){return au(n,!0,h_,g_,Vf)}function au(n,e,t,i,s){if(!vt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const r=s.get(n);if(r)return r;const a=b_(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return s.set(n,o),o}function Hs(n){return as(n)?Hs(n.__v_raw):!!(n&&n.__v_isReactive)}function as(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function ou(n){return n?!!n.__v_raw:!1}function ot(n){const e=n&&n.__v_raw;return e?ot(e):n}function y_(n){return!lt(n,"__v_skip")&&Object.isExtensible(n)&&Af(n,"__v_skip",!0),n}const Ht=n=>vt(n)?To(n):n,Vl=n=>vt(n)?Wf(n):n;function Gt(n){return n?n.__v_isRef===!0:!1}function os(n){return Xf(n,!1)}function S_(n){return Xf(n,!0)}function Xf(n,e){return Gt(n)?n:new M_(n,e)}class M_{constructor(e,t){this.dep=new su,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ot(e),this._value=t?e:Ht(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||mn(e)||as(e);e=i?e:ot(e),Ii(e,t)&&(this._rawValue=e,this._value=i?e:Ht(e),this.dep.trigger())}}function Hn(n){return Gt(n)?n.value:n}const E_={get:(n,e,t)=>e==="__v_raw"?n:Hn(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Gt(s)&&!Gt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Yf(n){return Hs(n)?n:new Proxy(n,E_)}class A_{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new su(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$r-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&pt!==this)return If(this,!0),!0}get value(){const e=this.dep.track();return Nf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function T_(n,e,t=!1){let i,s;return We(n)?i=n:(i=n.get,s=n.set),new A_(i,s,t)}const ga={},so=new WeakMap;let Ji;function w_(n,e=!1,t=Ji){if(t){let i=so.get(t);i||so.set(t,i=[]),i.push(n)}}function R_(n,e,t=mt){const{immediate:i,deep:s,once:r,scheduler:a,augmentJob:o,call:l}=t,c=b=>s?b:mn(b)||s===!1||s===0?wi(b,1):wi(b);let u,h,d,f,_=!1,g=!1;if(Gt(n)?(h=()=>n.value,_=mn(n)):Hs(n)?(h=()=>c(n),_=!0):Ve(n)?(g=!0,_=n.some(b=>Hs(b)||mn(b)),h=()=>n.map(b=>{if(Gt(b))return b.value;if(Hs(b))return c(b);if(We(b))return l?l(b,2):b()})):We(n)?e?h=l?()=>l(n,2):n:h=()=>{if(d){Fi();try{d()}finally{ki()}}const b=Ji;Ji=u;try{return l?l(n,3,[f]):n(f)}finally{Ji=b}}:h=zn,e&&s){const b=h,C=s===!0?1/0:s;h=()=>wi(b(),C)}const m=n_(),p=()=>{u.stop(),m&&m.active&&Zc(m.effects,u)};if(r&&e){const b=e;e=(...C)=>{b(...C),p()}}let A=g?new Array(n.length).fill(ga):ga;const E=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const C=u.run();if(s||_||(g?C.some((P,R)=>Ii(P,A[R])):Ii(C,A))){d&&d();const P=Ji;Ji=u;try{const R=[C,A===ga?void 0:g&&A[0]===ga?[]:A,f];l?l(e,3,R):e(...R),A=C}finally{Ji=P}}}else u.run()};return o&&o(E),u=new Cf(h),u.scheduler=a?()=>a(E,!1):E,f=b=>w_(b,!1,u),d=u.onStop=()=>{const b=so.get(u);if(b){if(l)l(b,4);else for(const C of b)C();so.delete(u)}},e?i?E(!0):A=u.run():a?a(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function wi(n,e=1/0,t){if(e<=0||!vt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Gt(n))wi(n.value,e,t);else if(Ve(n))for(let i=0;i<n.length;i++)wi(n[i],e,t);else if(yf(n)||zs(n))n.forEach(i=>{wi(i,e,t)});else if(Ef(n)){for(const i in n)wi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&wi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ca(n,e,t,i){try{return i?n(...i):n()}catch(s){wo(s,e,t)}}function Vn(n,e,t,i){if(We(n)){const s=ca(n,e,t,i);return s&&Sf(s)&&s.catch(r=>{wo(r,e,t)}),s}if(Ve(n)){const s=[];for(let r=0;r<n.length;r++)s.push(Vn(n[r],e,t,i));return s}}function wo(n,e,t,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||mt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}o=o.parent}if(r){Fi(),ca(r,null,10,[n,l,c]),ki();return}}C_(n,t,s,i,a)}function C_(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const jt=[];let On=-1;const Vs=[];let Ei=null,Ps=0;const qf=Promise.resolve();let ro=null;function jf(n){const e=ro||qf;return n?e.then(this?n.bind(this):n):e}function P_(n){let e=On+1,t=jt.length;for(;e<t;){const i=e+t>>>1,s=jt[i],r=Jr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function lu(n){if(!(n.flags&1)){const e=Jr(n),t=jt[jt.length-1];!t||!(n.flags&2)&&e>=Jr(t)?jt.push(n):jt.splice(P_(e),0,n),n.flags|=1,Kf()}}function Kf(){ro||(ro=qf.then(Zf))}function I_(n){Ve(n)?Vs.push(...n):Ei&&n.id===-1?Ei.splice(Ps+1,0,n):n.flags&1||(Vs.push(n),n.flags|=1),Kf()}function Zu(n,e,t=On+1){for(;t<jt.length;t++){const i=jt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;jt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function $f(n){if(Vs.length){const e=[...new Set(Vs)].sort((t,i)=>Jr(t)-Jr(i));if(Vs.length=0,Ei){Ei.push(...e);return}for(Ei=e,Ps=0;Ps<Ei.length;Ps++){const t=Ei[Ps];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Ei=null,Ps=0}}const Jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Zf(n){try{for(On=0;On<jt.length;On++){const e=jt[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ca(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<jt.length;On++){const e=jt[On];e&&(e.flags&=-2)}On=-1,jt.length=0,$f(),ro=null,(jt.length||Vs.length)&&Zf()}}let An=null,Jf=null;function ao(n){const e=An;return An=n,Jf=n&&n.type.__scopeId||null,e}function Cr(n,e=An,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&ah(-1);const r=ao(e);let a;try{a=n(...s)}finally{ao(r),i._d&&ah(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Gi(n,e,t,i){const s=n.dirs,r=e&&e.dirs;for(let a=0;a<s.length;a++){const o=s[a];r&&(o.oldValue=r[a].value);let l=o.dir[i];l&&(Fi(),Vn(l,t,8,[n.el,o,n,e]),ki())}}const L_=Symbol("_vte"),D_=n=>n.__isTeleport;function cu(n,e){n.shapeFlag&6&&n.component?(n.transition=e,cu(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Qf(n,e){return We(n)?Dt({name:n.name},e,{setup:n}):n}function ep(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function oo(n,e,t,i,s=!1){if(Ve(n)){n.forEach((_,g)=>oo(_,e&&(Ve(e)?e[g]:e),t,i,s));return}if(kr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&oo(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?pu(i.component):i.el,a=s?null:r,{i:o,r:l}=n,c=e&&e.r,u=o.refs===mt?o.refs={}:o.refs,h=o.setupState,d=ot(h),f=h===mt?()=>!1:_=>lt(d,_);if(c!=null&&c!==l&&(Tt(c)?(u[c]=null,f(c)&&(h[c]=null)):Gt(c)&&(c.value=null)),We(l))ca(l,o,12,[a,u]);else{const _=Tt(l),g=Gt(l);if(_||g){const m=()=>{if(n.f){const p=_?f(l)?h[l]:u[l]:l.value;s?Ve(p)&&Zc(p,r):Ve(p)?p.includes(r)||p.push(r):_?(u[l]=[r],f(l)&&(h[l]=u[l])):(l.value=[r],n.k&&(u[n.k]=l.value))}else _?(u[l]=a,f(l)&&(h[l]=a)):g&&(l.value=a,n.k&&(u[n.k]=a))};a?(m.id=-1,an(m,t)):m()}}}Eo().requestIdleCallback;Eo().cancelIdleCallback;const kr=n=>!!n.type.__asyncLoader,tp=n=>n.type.__isKeepAlive;function N_(n,e){np(n,"a",e)}function U_(n,e){np(n,"da",e)}function np(n,e,t=Vt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Ro(e,i,t),t){let s=t.parent;for(;s&&s.parent;)tp(s.parent.vnode)&&O_(i,e,t,s),s=s.parent}}function O_(n,e,t,i){const s=Ro(e,n,i,!0);uu(()=>{Zc(i[e],s)},t)}function Ro(n,e,t=Vt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...a)=>{Fi();const o=ua(t),l=Vn(e,t,n,a);return o(),ki(),l});return i?s.unshift(r):s.push(r),r}}const pi=n=>(e,t=Vt)=>{(!ta||n==="sp")&&Ro(n,(...i)=>e(...i),t)},F_=pi("bm"),ip=pi("m"),k_=pi("bu"),B_=pi("u"),z_=pi("bum"),uu=pi("um"),H_=pi("sp"),V_=pi("rtg"),G_=pi("rtc");function W_(n,e=Vt){Ro("ec",n,e)}const X_="components";function sp(n,e){return q_(X_,n,!0,e)||n}const Y_=Symbol.for("v-ndc");function q_(n,e,t=!0,i=!1){const s=An||Vt;if(s){const r=s.type;{const o=Dg(r,!1);if(o&&(o===e||o===_n(e)||o===Mo(_n(e))))return r}const a=Ju(s[n]||r[n],e)||Ju(s.appContext[n],e);return!a&&i?r:a}}function Ju(n,e){return n&&(n[e]||n[_n(e)]||n[Mo(_n(e))])}function Br(n,e,t,i){let s;const r=t,a=Ve(n);if(a||Tt(n)){const o=a&&Hs(n);let l=!1;o&&(l=!mn(n),n=Ao(n)),s=new Array(n.length);for(let c=0,u=n.length;c<u;c++)s[c]=e(l?Ht(n[c]):n[c],c,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,r)}else if(vt(n))if(n[Symbol.iterator])s=Array.from(n,(o,l)=>e(o,l,void 0,r));else{const o=Object.keys(n);s=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Gl=n=>n?Ap(n)?pu(n):Gl(n.parent):null,zr=Dt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Gl(n.parent),$root:n=>Gl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>hu(n),$forceUpdate:n=>n.f||(n.f=()=>{lu(n.update)}),$nextTick:n=>n.n||(n.n=jf.bind(n.proxy)),$watch:n=>pg.bind(n)}),Xo=(n,e)=>n!==mt&&!n.__isScriptSetup&&lt(n,e),j_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const f=a[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Xo(i,e))return a[e]=1,i[e];if(s!==mt&&lt(s,e))return a[e]=2,s[e];if((c=n.propsOptions[0])&&lt(c,e))return a[e]=3,r[e];if(t!==mt&&lt(t,e))return a[e]=4,t[e];Wl&&(a[e]=0)}}const u=zr[e];let h,d;if(u)return e==="$attrs"&&zt(n.attrs,"get",""),u(n);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==mt&&lt(t,e))return a[e]=4,t[e];if(d=l.config.globalProperties,lt(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Xo(s,e)?(s[e]=t,!0):i!==mt&&lt(i,e)?(i[e]=t,!0):lt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,propsOptions:r}},a){let o;return!!t[a]||n!==mt&&lt(n,a)||Xo(e,a)||(o=r[0])&&lt(o,a)||lt(i,a)||lt(zr,a)||lt(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:lt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Qu(n){return Ve(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Wl=!0;function K_(n){const e=hu(n),t=n.proxy,i=n.ctx;Wl=!1,e.beforeCreate&&eh(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:g,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:E,unmounted:b,render:C,renderTracked:P,renderTriggered:R,errorCaptured:F,serverPrefetch:T,expose:M,inheritAttrs:L,components:te,directives:K,filters:ae}=e;if(c&&$_(c,i,null),a)for(const ee in a){const V=a[ee];We(V)&&(i[ee]=V.bind(t))}if(s){const ee=s.call(t,t);vt(ee)&&(n.data=To(ee))}if(Wl=!0,r)for(const ee in r){const V=r[ee],ge=We(V)?V.bind(t,t):We(V.get)?V.get.bind(t,t):zn,be=!We(V)&&We(V.set)?V.set.bind(t):zn,Re=Sn({get:ge,set:be});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Re.value,set:De=>Re.value=De})}if(o)for(const ee in o)rp(o[ee],i,t,ee);if(l){const ee=We(l)?l.call(t):l;Reflect.ownKeys(ee).forEach(V=>{qa(V,ee[V])})}u&&eh(u,n,"c");function J(ee,V){Ve(V)?V.forEach(ge=>ee(ge.bind(t))):V&&ee(V.bind(t))}if(J(F_,h),J(ip,d),J(k_,f),J(B_,_),J(N_,g),J(U_,m),J(W_,F),J(G_,P),J(V_,R),J(z_,A),J(uu,b),J(H_,T),Ve(M))if(M.length){const ee=n.exposed||(n.exposed={});M.forEach(V=>{Object.defineProperty(ee,V,{get:()=>t[V],set:ge=>t[V]=ge})})}else n.exposed||(n.exposed={});C&&n.render===zn&&(n.render=C),L!=null&&(n.inheritAttrs=L),te&&(n.components=te),K&&(n.directives=K),T&&ep(n)}function $_(n,e,t=zn){Ve(n)&&(n=Xl(n));for(const i in n){const s=n[i];let r;vt(s)?"default"in s?r=ci(s.from||i,s.default,!0):r=ci(s.from||i):r=ci(s),Gt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:a=>r.value=a}):e[i]=r}}function eh(n,e,t){Vn(Ve(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function rp(n,e,t,i){let s=i.includes(".")?xp(t,i):()=>t[i];if(Tt(n)){const r=e[n];We(r)&&ja(s,r)}else if(We(n))ja(s,n.bind(t));else if(vt(n))if(Ve(n))n.forEach(r=>rp(r,e,t,i));else{const r=We(n.handler)?n.handler.bind(t):e[n.handler];We(r)&&ja(s,r,n)}}function hu(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:a}}=n.appContext,o=r.get(e);let l;return o?l=o:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>lo(l,c,a,!0)),lo(l,e,a)),vt(e)&&r.set(e,l),l}function lo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&lo(n,r,t,!0),s&&s.forEach(a=>lo(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Z_[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Z_={data:th,props:nh,emits:nh,methods:Pr,computed:Pr,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:Pr,directives:Pr,watch:Q_,provide:th,inject:J_};function th(n,e){return e?n?function(){return Dt(We(n)?n.call(this,this):n,We(e)?e.call(this,this):e)}:e:n}function J_(n,e){return Pr(Xl(n),Xl(e))}function Xl(n){if(Ve(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Yt(n,e){return n?[...new Set([].concat(n,e))]:e}function Pr(n,e){return n?Dt(Object.create(null),n,e):e}function nh(n,e){return n?Ve(n)&&Ve(e)?[...new Set([...n,...e])]:Dt(Object.create(null),Qu(n),Qu(e??{})):e}function Q_(n,e){if(!n)return e;if(!e)return n;const t=Dt(Object.create(null),n);for(const i in e)t[i]=Yt(n[i],e[i]);return t}function ap(){return{app:null,config:{isNativeTag:Gm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let eg=0;function tg(n,e){return function(i,s=null){We(i)||(i=Dt({},i)),s!=null&&!vt(s)&&(s=null);const r=ap(),a=new WeakSet,o=[];let l=!1;const c=r.app={_uid:eg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Ug,get config(){return r.config},set config(u){},use(u,...h){return a.has(u)||(u&&We(u.install)?(a.add(u),u.install(c,...h)):We(u)&&(a.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const f=c._ceVNode||Pt(i,s);return f.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),h&&e?e(f,u):n(f,u,d),l=!0,c._container=u,u.__vue_app__=c,pu(f.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Vn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Gs;Gs=c;try{return u()}finally{Gs=h}}};return c}}let Gs=null;function qa(n,e){if(Vt){let t=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===t&&(t=Vt.provides=Object.create(i)),t[n]=e}}function ci(n,e,t=!1){const i=Vt||An;if(i||Gs){const s=Gs?Gs._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&We(e)?e.call(i&&i.proxy):e}}const op={},lp=()=>Object.create(op),cp=n=>Object.getPrototypeOf(n)===op;function ng(n,e,t,i=!1){const s={},r=lp();n.propsDefaults=Object.create(null),up(n,e,s,r);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=i?s:Gf(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function ig(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:a}}=n,o=ot(s),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Co(n.emitsOptions,d))continue;const f=e[d];if(l)if(lt(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const _=_n(d);s[_]=Yl(l,o,_,f,n,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{up(n,e,s,r)&&(c=!0);let u;for(const h in o)(!e||!lt(e,h)&&((u=us(h))===h||!lt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Yl(l,o,h,void 0,n,!0)):delete s[h]);if(r!==o)for(const h in r)(!e||!lt(e,h))&&(delete r[h],c=!0)}c&&ai(n.attrs,"set","")}function up(n,e,t,i){const[s,r]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ur(l))continue;const c=e[l];let u;s&&lt(s,u=_n(l))?!r||!r.includes(u)?t[u]=c:(o||(o={}))[u]=c:Co(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(r){const l=ot(t),c=o||mt;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Yl(s,l,h,c[h],n,!lt(c,h))}}return a}function Yl(n,e,t,i,s,r){const a=n[t];if(a!=null){const o=lt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=ua(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}a[0]&&(r&&!o?i=!1:a[1]&&(i===""||i===us(t))&&(i=!0))}return i}const sg=new WeakMap;function hp(n,e,t=!1){const i=t?sg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,a={},o=[];let l=!1;if(!We(n)){const u=h=>{l=!0;const[d,f]=hp(h,e,!0);Dt(a,d),f&&o.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return vt(n)&&i.set(n,Bs),Bs;if(Ve(r))for(let u=0;u<r.length;u++){const h=_n(r[u]);ih(h)&&(a[h]=mt)}else if(r)for(const u in r){const h=_n(u);if(ih(h)){const d=r[u],f=a[h]=Ve(d)||We(d)?{type:d}:Dt({},d),_=f.type;let g=!1,m=!0;if(Ve(_))for(let p=0;p<_.length;++p){const A=_[p],E=We(A)&&A.name;if(E==="Boolean"){g=!0;break}else E==="String"&&(m=!1)}else g=We(_)&&_.name==="Boolean";f[0]=g,f[1]=m,(g||lt(f,"default"))&&o.push(h)}}const c=[a,o];return vt(n)&&i.set(n,c),c}function ih(n){return n[0]!=="$"&&!Ur(n)}const dp=n=>n[0]==="_"||n==="$stable",du=n=>Ve(n)?n.map(Fn):[Fn(n)],rg=(n,e,t)=>{if(e._n)return e;const i=Cr((...s)=>du(e(...s)),t);return i._c=!1,i},fp=(n,e,t)=>{const i=n._ctx;for(const s in n){if(dp(s))continue;const r=n[s];if(We(r))e[s]=rg(s,r,i);else if(r!=null){const a=du(r);e[s]=()=>a}}},pp=(n,e)=>{const t=du(e);n.slots.default=()=>t},mp=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},ag=(n,e,t)=>{const i=n.slots=lp();if(n.vnode.shapeFlag&32){const s=e._;s?(mp(i,e,t),t&&Af(i,"_",s,!0)):fp(e,i)}else e&&pp(n,e)},og=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,a=mt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?r=!1:mp(s,e,t):(r=!e.$stable,fp(e,s)),a=e}else e&&(pp(n,e),a={default:1});if(r)for(const o in s)!dp(o)&&a[o]==null&&delete s[o]},an=yg;function lg(n){return cg(n)}function cg(n,e){const t=Eo();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=zn,insertStaticContent:_}=n,g=(w,x,z,$=null,W=null,X=null,ue=void 0,Z=null,y=!!x.dynamicChildren)=>{if(w===x)return;w&&!_r(w,x)&&($=D(w),De(w,W,X,!0),w=null),x.patchFlag===-2&&(y=!1,x.dynamicChildren=null);const{type:v,ref:I,shapeFlag:O}=x;switch(v){case Po:m(w,x,z,$);break;case Qr:p(w,x,z,$);break;case jo:w==null&&A(x,z,$,ue);break;case Ot:te(w,x,z,$,W,X,ue,Z,y);break;default:O&1?C(w,x,z,$,W,X,ue,Z,y):O&6?K(w,x,z,$,W,X,ue,Z,y):(O&64||O&128)&&v.process(w,x,z,$,W,X,ue,Z,y,de)}I!=null&&W&&oo(I,w&&w.ref,X,x||w,!x)},m=(w,x,z,$)=>{if(w==null)i(x.el=o(x.children),z,$);else{const W=x.el=w.el;x.children!==w.children&&c(W,x.children)}},p=(w,x,z,$)=>{w==null?i(x.el=l(x.children||""),z,$):x.el=w.el},A=(w,x,z,$)=>{[w.el,w.anchor]=_(w.children,x,z,$,w.el,w.anchor)},E=({el:w,anchor:x},z,$)=>{let W;for(;w&&w!==x;)W=d(w),i(w,z,$),w=W;i(x,z,$)},b=({el:w,anchor:x})=>{let z;for(;w&&w!==x;)z=d(w),s(w),w=z;s(x)},C=(w,x,z,$,W,X,ue,Z,y)=>{x.type==="svg"?ue="svg":x.type==="math"&&(ue="mathml"),w==null?P(x,z,$,W,X,ue,Z,y):T(w,x,W,X,ue,Z,y)},P=(w,x,z,$,W,X,ue,Z)=>{let y,v;const{props:I,shapeFlag:O,transition:G,dirs:H}=w;if(y=w.el=a(w.type,X,I&&I.is,I),O&8?u(y,w.children):O&16&&F(w.children,y,null,$,W,Yo(w,X),ue,Z),H&&Gi(w,null,$,"created"),R(y,w,w.scopeId,ue,$),I){for(const he in I)he!=="value"&&!Ur(he)&&r(y,he,null,I[he],X,$);"value"in I&&r(y,"value",null,I.value,X),(v=I.onVnodeBeforeMount)&&Nn(v,$,w)}H&&Gi(w,null,$,"beforeMount");const pe=ug(W,G);pe&&G.beforeEnter(y),i(y,x,z),((v=I&&I.onVnodeMounted)||pe||H)&&an(()=>{v&&Nn(v,$,w),pe&&G.enter(y),H&&Gi(w,null,$,"mounted")},W)},R=(w,x,z,$,W)=>{if(z&&f(w,z),$)for(let X=0;X<$.length;X++)f(w,$[X]);if(W){let X=W.subTree;if(x===X||yp(X.type)&&(X.ssContent===x||X.ssFallback===x)){const ue=W.vnode;R(w,ue,ue.scopeId,ue.slotScopeIds,W.parent)}}},F=(w,x,z,$,W,X,ue,Z,y=0)=>{for(let v=y;v<w.length;v++){const I=w[v]=Z?Ai(w[v]):Fn(w[v]);g(null,I,x,z,$,W,X,ue,Z)}},T=(w,x,z,$,W,X,ue)=>{const Z=x.el=w.el;let{patchFlag:y,dynamicChildren:v,dirs:I}=x;y|=w.patchFlag&16;const O=w.props||mt,G=x.props||mt;let H;if(z&&Wi(z,!1),(H=G.onVnodeBeforeUpdate)&&Nn(H,z,x,w),I&&Gi(x,w,z,"beforeUpdate"),z&&Wi(z,!0),(O.innerHTML&&G.innerHTML==null||O.textContent&&G.textContent==null)&&u(Z,""),v?M(w.dynamicChildren,v,Z,z,$,Yo(x,W),X):ue||V(w,x,Z,null,z,$,Yo(x,W),X,!1),y>0){if(y&16)L(Z,O,G,z,W);else if(y&2&&O.class!==G.class&&r(Z,"class",null,G.class,W),y&4&&r(Z,"style",O.style,G.style,W),y&8){const pe=x.dynamicProps;for(let he=0;he<pe.length;he++){const fe=pe[he],Be=O[fe],ce=G[fe];(ce!==Be||fe==="value")&&r(Z,fe,Be,ce,W,z)}}y&1&&w.children!==x.children&&u(Z,x.children)}else!ue&&v==null&&L(Z,O,G,z,W);((H=G.onVnodeUpdated)||I)&&an(()=>{H&&Nn(H,z,x,w),I&&Gi(x,w,z,"updated")},$)},M=(w,x,z,$,W,X,ue)=>{for(let Z=0;Z<x.length;Z++){const y=w[Z],v=x[Z],I=y.el&&(y.type===Ot||!_r(y,v)||y.shapeFlag&70)?h(y.el):z;g(y,v,I,null,$,W,X,ue,!0)}},L=(w,x,z,$,W)=>{if(x!==z){if(x!==mt)for(const X in x)!Ur(X)&&!(X in z)&&r(w,X,x[X],null,W,$);for(const X in z){if(Ur(X))continue;const ue=z[X],Z=x[X];ue!==Z&&X!=="value"&&r(w,X,Z,ue,W,$)}"value"in z&&r(w,"value",x.value,z.value,W)}},te=(w,x,z,$,W,X,ue,Z,y)=>{const v=x.el=w?w.el:o(""),I=x.anchor=w?w.anchor:o("");let{patchFlag:O,dynamicChildren:G,slotScopeIds:H}=x;H&&(Z=Z?Z.concat(H):H),w==null?(i(v,z,$),i(I,z,$),F(x.children||[],z,I,W,X,ue,Z,y)):O>0&&O&64&&G&&w.dynamicChildren?(M(w.dynamicChildren,G,z,W,X,ue,Z),(x.key!=null||W&&x===W.subTree)&&_p(w,x,!0)):V(w,x,z,I,W,X,ue,Z,y)},K=(w,x,z,$,W,X,ue,Z,y)=>{x.slotScopeIds=Z,w==null?x.shapeFlag&512?W.ctx.activate(x,z,$,ue,y):ae(x,z,$,W,X,ue,y):oe(w,x,y)},ae=(w,x,z,$,W,X,ue)=>{const Z=w.component=Rg(w,$,W);if(tp(w)&&(Z.ctx.renderer=de),Cg(Z,!1,ue),Z.asyncDep){if(W&&W.registerDep(Z,J,ue),!w.el){const y=Z.subTree=Pt(Qr);p(null,y,x,z)}}else J(Z,w,x,z,W,X,ue)},oe=(w,x,z)=>{const $=x.component=w.component;if(xg(w,x,z))if($.asyncDep&&!$.asyncResolved){ee($,x,z);return}else $.next=x,$.update();else x.el=w.el,$.vnode=x},J=(w,x,z,$,W,X,ue)=>{const Z=()=>{if(w.isMounted){let{next:O,bu:G,u:H,parent:pe,vnode:he}=w;{const Ce=gp(w);if(Ce){O&&(O.el=he.el,ee(w,O,ue)),Ce.asyncDep.then(()=>{w.isUnmounted||Z()});return}}let fe=O,Be;Wi(w,!1),O?(O.el=he.el,ee(w,O,ue)):O=he,G&&zo(G),(Be=O.props&&O.props.onVnodeBeforeUpdate)&&Nn(Be,pe,O,he),Wi(w,!0);const ce=qo(w),ve=w.subTree;w.subTree=ce,g(ve,ce,h(ve.el),D(ve),w,W,X),O.el=ce.el,fe===null&&bg(w,ce.el),H&&an(H,W),(Be=O.props&&O.props.onVnodeUpdated)&&an(()=>Nn(Be,pe,O,he),W)}else{let O;const{el:G,props:H}=x,{bm:pe,m:he,parent:fe,root:Be,type:ce}=w,ve=kr(x);if(Wi(w,!1),pe&&zo(pe),!ve&&(O=H&&H.onVnodeBeforeMount)&&Nn(O,fe,x),Wi(w,!0),G&&Ie){const Ce=()=>{w.subTree=qo(w),Ie(G,w.subTree,w,W,null)};ve&&ce.__asyncHydrate?ce.__asyncHydrate(G,w,Ce):Ce()}else{Be.ce&&Be.ce._injectChildStyle(ce);const Ce=w.subTree=qo(w);g(null,Ce,z,$,w,W,X),x.el=Ce.el}if(he&&an(he,W),!ve&&(O=H&&H.onVnodeMounted)){const Ce=x;an(()=>Nn(O,fe,Ce),W)}(x.shapeFlag&256||fe&&kr(fe.vnode)&&fe.vnode.shapeFlag&256)&&w.a&&an(w.a,W),w.isMounted=!0,x=z=$=null}};w.scope.on();const y=w.effect=new Cf(Z);w.scope.off();const v=w.update=y.run.bind(y),I=w.job=y.runIfDirty.bind(y);I.i=w,I.id=w.uid,y.scheduler=()=>lu(I),Wi(w,!0),v()},ee=(w,x,z)=>{x.component=w;const $=w.vnode.props;w.vnode=x,w.next=null,ig(w,x.props,$,z),og(w,x.children,z),Fi(),Zu(w),ki()},V=(w,x,z,$,W,X,ue,Z,y=!1)=>{const v=w&&w.children,I=w?w.shapeFlag:0,O=x.children,{patchFlag:G,shapeFlag:H}=x;if(G>0){if(G&128){be(v,O,z,$,W,X,ue,Z,y);return}else if(G&256){ge(v,O,z,$,W,X,ue,Z,y);return}}H&8?(I&16&&Me(v,W,X),O!==v&&u(z,O)):I&16?H&16?be(v,O,z,$,W,X,ue,Z,y):Me(v,W,X,!0):(I&8&&u(z,""),H&16&&F(O,z,$,W,X,ue,Z,y))},ge=(w,x,z,$,W,X,ue,Z,y)=>{w=w||Bs,x=x||Bs;const v=w.length,I=x.length,O=Math.min(v,I);let G;for(G=0;G<O;G++){const H=x[G]=y?Ai(x[G]):Fn(x[G]);g(w[G],H,z,null,W,X,ue,Z,y)}v>I?Me(w,W,X,!0,!1,O):F(x,z,$,W,X,ue,Z,y,O)},be=(w,x,z,$,W,X,ue,Z,y)=>{let v=0;const I=x.length;let O=w.length-1,G=I-1;for(;v<=O&&v<=G;){const H=w[v],pe=x[v]=y?Ai(x[v]):Fn(x[v]);if(_r(H,pe))g(H,pe,z,null,W,X,ue,Z,y);else break;v++}for(;v<=O&&v<=G;){const H=w[O],pe=x[G]=y?Ai(x[G]):Fn(x[G]);if(_r(H,pe))g(H,pe,z,null,W,X,ue,Z,y);else break;O--,G--}if(v>O){if(v<=G){const H=G+1,pe=H<I?x[H].el:$;for(;v<=G;)g(null,x[v]=y?Ai(x[v]):Fn(x[v]),z,pe,W,X,ue,Z,y),v++}}else if(v>G)for(;v<=O;)De(w[v],W,X,!0),v++;else{const H=v,pe=v,he=new Map;for(v=pe;v<=G;v++){const ke=x[v]=y?Ai(x[v]):Fn(x[v]);ke.key!=null&&he.set(ke.key,v)}let fe,Be=0;const ce=G-pe+1;let ve=!1,Ce=0;const Ue=new Array(ce);for(v=0;v<ce;v++)Ue[v]=0;for(v=H;v<=O;v++){const ke=w[v];if(Be>=ce){De(ke,W,X,!0);continue}let Oe;if(ke.key!=null)Oe=he.get(ke.key);else for(fe=pe;fe<=G;fe++)if(Ue[fe-pe]===0&&_r(ke,x[fe])){Oe=fe;break}Oe===void 0?De(ke,W,X,!0):(Ue[Oe-pe]=v+1,Oe>=Ce?Ce=Oe:ve=!0,g(ke,x[Oe],z,null,W,X,ue,Z,y),Be++)}const Te=ve?hg(Ue):Bs;for(fe=Te.length-1,v=ce-1;v>=0;v--){const ke=pe+v,Oe=x[ke],ut=ke+1<I?x[ke+1].el:$;Ue[v]===0?g(null,Oe,z,ut,W,X,ue,Z,y):ve&&(fe<0||v!==Te[fe]?Re(Oe,z,ut,2):fe--)}}},Re=(w,x,z,$,W=null)=>{const{el:X,type:ue,transition:Z,children:y,shapeFlag:v}=w;if(v&6){Re(w.component.subTree,x,z,$);return}if(v&128){w.suspense.move(x,z,$);return}if(v&64){ue.move(w,x,z,de);return}if(ue===Ot){i(X,x,z);for(let O=0;O<y.length;O++)Re(y[O],x,z,$);i(w.anchor,x,z);return}if(ue===jo){E(w,x,z);return}if($!==2&&v&1&&Z)if($===0)Z.beforeEnter(X),i(X,x,z),an(()=>Z.enter(X),W);else{const{leave:O,delayLeave:G,afterLeave:H}=Z,pe=()=>i(X,x,z),he=()=>{O(X,()=>{pe(),H&&H()})};G?G(X,pe,he):he()}else i(X,x,z)},De=(w,x,z,$=!1,W=!1)=>{const{type:X,props:ue,ref:Z,children:y,dynamicChildren:v,shapeFlag:I,patchFlag:O,dirs:G,cacheIndex:H}=w;if(O===-2&&(W=!1),Z!=null&&oo(Z,null,z,w,!0),H!=null&&(x.renderCache[H]=void 0),I&256){x.ctx.deactivate(w);return}const pe=I&1&&G,he=!kr(w);let fe;if(he&&(fe=ue&&ue.onVnodeBeforeUnmount)&&Nn(fe,x,w),I&6)_e(w.component,z,$);else{if(I&128){w.suspense.unmount(z,$);return}pe&&Gi(w,null,x,"beforeUnmount"),I&64?w.type.remove(w,x,z,de,$):v&&!v.hasOnce&&(X!==Ot||O>0&&O&64)?Me(v,x,z,!1,!0):(X===Ot&&O&384||!W&&I&16)&&Me(y,x,z),$&&Qe(w)}(he&&(fe=ue&&ue.onVnodeUnmounted)||pe)&&an(()=>{fe&&Nn(fe,x,w),pe&&Gi(w,null,x,"unmounted")},z)},Qe=w=>{const{type:x,el:z,anchor:$,transition:W}=w;if(x===Ot){ne(z,$);return}if(x===jo){b(w);return}const X=()=>{s(z),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(w.shapeFlag&1&&W&&!W.persisted){const{leave:ue,delayLeave:Z}=W,y=()=>ue(z,X);Z?Z(w.el,X,y):y()}else X()},ne=(w,x)=>{let z;for(;w!==x;)z=d(w),s(w),w=z;s(x)},_e=(w,x,z)=>{const{bum:$,scope:W,job:X,subTree:ue,um:Z,m:y,a:v}=w;sh(y),sh(v),$&&zo($),W.stop(),X&&(X.flags|=8,De(ue,w,x,z)),Z&&an(Z,x),an(()=>{w.isUnmounted=!0},x),x&&x.pendingBranch&&!x.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===x.pendingId&&(x.deps--,x.deps===0&&x.resolve())},Me=(w,x,z,$=!1,W=!1,X=0)=>{for(let ue=X;ue<w.length;ue++)De(w[ue],x,z,$,W)},D=w=>{if(w.shapeFlag&6)return D(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const x=d(w.anchor||w.el),z=x&&x[L_];return z?d(z):x};let se=!1;const ie=(w,x,z)=>{w==null?x._vnode&&De(x._vnode,null,null,!0):g(x._vnode||null,w,x,null,null,null,z),x._vnode=w,se||(se=!0,Zu(),$f(),se=!1)},de={p:g,um:De,m:Re,r:Qe,mt:ae,mc:F,pc:V,pbc:M,n:D,o:n};let Le,Ie;return{render:ie,hydrate:Le,createApp:tg(ie,Le)}}function Yo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Wi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function ug(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function _p(n,e,t=!1){const i=n.children,s=e.children;if(Ve(i)&&Ve(s))for(let r=0;r<i.length;r++){const a=i[r];let o=s[r];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=s[r]=Ai(s[r]),o.el=a.el),!t&&o.patchFlag!==-2&&_p(a,o)),o.type===Po&&(o.el=a.el)}}function hg(n){const e=n.slice(),t=[0];let i,s,r,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,a=t.length-1;r<a;)o=r+a>>1,n[t[o]]<c?r=o+1:a=o;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,a=t[r-1];r-- >0;)t[r]=a,a=e[a];return t}function gp(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:gp(e)}function sh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const dg=Symbol.for("v-scx"),fg=()=>ci(dg);function ja(n,e,t){return vp(n,e,t)}function vp(n,e,t=mt){const{immediate:i,deep:s,flush:r,once:a}=t,o=Dt({},t),l=e&&i||!e&&r!=="post";let c;if(ta){if(r==="sync"){const f=fg();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=zn,f.resume=zn,f.pause=zn,f}}const u=Vt;o.call=(f,_,g)=>Vn(f,u,_,g);let h=!1;r==="post"?o.scheduler=f=>{an(f,u&&u.suspense)}:r!=="sync"&&(h=!0,o.scheduler=(f,_)=>{_?f():lu(f)}),o.augmentJob=f=>{e&&(f.flags|=4),h&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const d=R_(n,e,o);return ta&&(c?c.push(d):l&&d()),d}function pg(n,e,t){const i=this.proxy,s=Tt(n)?n.includes(".")?xp(i,n):()=>i[n]:n.bind(i,i);let r;We(e)?r=e:(r=e.handler,t=e);const a=ua(this),o=vp(s,r.bind(i),t);return a(),o}function xp(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const mg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${_n(e)}Modifiers`]||n[`${us(e)}Modifiers`];function _g(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||mt;let s=t;const r=e.startsWith("update:"),a=r&&mg(i,e.slice(7));a&&(a.trim&&(s=t.map(u=>Tt(u)?u.trim():u)),a.number&&(s=t.map(jm)));let o,l=i[o=Bo(e)]||i[o=Bo(_n(e))];!l&&r&&(l=i[o=Bo(us(e))]),l&&Vn(l,n,6,s);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Vn(c,n,6,s)}}function bp(n,e,t=!1){const i=e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let a={},o=!1;if(!We(n)){const l=c=>{const u=bp(c,e,!0);u&&(o=!0,Dt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!o?(vt(n)&&i.set(n,null),null):(Ve(r)?r.forEach(l=>a[l]=null):Dt(a,r),vt(n)&&i.set(n,a),a)}function Co(n,e){return!n||!bo(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(n,e[0].toLowerCase()+e.slice(1))||lt(n,us(e))||lt(n,e))}function qo(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:h,data:d,setupState:f,ctx:_,inheritAttrs:g}=n,m=ao(n);let p,A;try{if(t.shapeFlag&4){const b=s||i,C=b;p=Fn(c.call(C,b,u,h,f,d,_)),A=o}else{const b=e;p=Fn(b.length>1?b(h,{attrs:o,slots:a,emit:l}):b(h,null)),A=e.props?o:gg(o)}}catch(b){Hr.length=0,wo(b,n,1),p=Pt(Qr)}let E=p;if(A&&g!==!1){const b=Object.keys(A),{shapeFlag:C}=E;b.length&&C&7&&(r&&b.some($c)&&(A=vg(A,r)),E=js(E,A,!1,!0))}return t.dirs&&(E=js(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(t.dirs):t.dirs),t.transition&&cu(E,t.transition),p=E,ao(m),p}const gg=n=>{let e;for(const t in n)(t==="class"||t==="style"||bo(t))&&((e||(e={}))[t]=n[t]);return e},vg=(n,e)=>{const t={};for(const i in n)(!$c(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function xg(n,e,t){const{props:i,children:s,component:r}=n,{props:a,children:o,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?rh(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(a[d]!==i[d]&&!Co(c,d))return!0}}}else return(s||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?rh(i,a,c):!0:!!a;return!1}function rh(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(e[r]!==n[r]&&!Co(t,r))return!0}return!1}function bg({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const yp=n=>n.__isSuspense;function yg(n,e){e&&e.pendingBranch?Ve(n)?e.effects.push(...n):e.effects.push(n):I_(n)}const Ot=Symbol.for("v-fgt"),Po=Symbol.for("v-txt"),Qr=Symbol.for("v-cmt"),jo=Symbol.for("v-stc"),Hr=[];let ln=null;function St(n=!1){Hr.push(ln=n?null:[])}function Sg(){Hr.pop(),ln=Hr[Hr.length-1]||null}let ea=1;function ah(n,e=!1){ea+=n,n<0&&ln&&e&&(ln.hasOnce=!0)}function Sp(n){return n.dynamicChildren=ea>0?ln||Bs:null,Sg(),ea>0&&ln&&ln.push(n),n}function At(n,e,t,i,s,r){return Sp(Ke(n,e,t,i,s,r,!0))}function Mp(n,e,t,i,s){return Sp(Pt(n,e,t,i,s,!0))}function co(n){return n?n.__v_isVNode===!0:!1}function _r(n,e){return n.type===e.type&&n.key===e.key}const Ep=({key:n})=>n??null,Ka=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Tt(n)||Gt(n)||We(n)?{i:An,r:n,k:e,f:!!t}:n:null);function Ke(n,e=null,t=null,i=0,s=null,r=n===Ot?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Ep(e),ref:e&&Ka(e),scopeId:Jf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:An};return o?(fu(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=Tt(t)?8:16),ea>0&&!a&&ln&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ln.push(l),l}const Pt=Mg;function Mg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Y_)&&(n=Qr),co(n)){const o=js(n,e,!0);return t&&fu(o,t),ea>0&&!r&&ln&&(o.shapeFlag&6?ln[ln.indexOf(n)]=o:ln.push(o)),o.patchFlag=-2,o}if(Ng(n)&&(n=n.__vccOpts),e){e=Eg(e);let{class:o,style:l}=e;o&&!Tt(o)&&(e.class=Kr(o)),vt(l)&&(ou(l)&&!Ve(l)&&(l=Dt({},l)),e.style=Qc(l))}const a=Tt(n)?1:yp(n)?128:D_(n)?64:vt(n)?4:We(n)?2:0;return Ke(n,e,t,i,s,a,r,!0)}function Eg(n){return n?ou(n)||cp(n)?Dt({},n):n:null}function js(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:a,children:o,transition:l}=n,c=e?Ag(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Ep(c),ref:e&&e.ref?t&&r?Ve(r)?r.concat(Ka(e)):[r,Ka(e)]:Ka(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ot?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&js(n.ssContent),ssFallback:n.ssFallback&&js(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&cu(u,l.clone(u)),u}function Ir(n=" ",e=0){return Pt(Po,null,n,e)}function Fn(n){return n==null||typeof n=="boolean"?Pt(Qr):Ve(n)?Pt(Ot,null,n.slice()):co(n)?Ai(n):Pt(Po,null,String(n))}function Ai(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:js(n)}function fu(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Ve(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),fu(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!cp(e)?e._ctx=An:s===3&&An&&(An.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:An},t=32):(e=String(e),i&64?(t=16,e=[Ir(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ag(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Kr([e.class,i.class]));else if(s==="style")e.style=Qc([e.style,i.style]);else if(bo(s)){const r=e[s],a=i[s];a&&r!==a&&!(Ve(r)&&r.includes(a))&&(e[s]=r?[].concat(r,a):a)}else s!==""&&(e[s]=i[s])}return e}function Nn(n,e,t,i=null){Vn(n,e,7,[t,i])}const Tg=ap();let wg=0;function Rg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Tg,r={uid:wg++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new t_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hp(i,s),emitsOptions:bp(i,s),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:i.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=_g.bind(null,r),n.ce&&n.ce(r),r}let Vt=null,uo,ql;{const n=Eo(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(a=>a(r)):s[0](r)}};uo=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),ql=e("__VUE_SSR_SETTERS__",t=>ta=t)}const ua=n=>{const e=Vt;return uo(n),n.scope.on(),()=>{n.scope.off(),uo(e)}},oh=()=>{Vt&&Vt.scope.off(),uo(null)};function Ap(n){return n.vnode.shapeFlag&4}let ta=!1;function Cg(n,e=!1,t=!1){e&&ql(e);const{props:i,children:s}=n.vnode,r=Ap(n);ng(n,i,r,e),ag(n,s,t);const a=r?Pg(n,e):void 0;return e&&ql(!1),a}function Pg(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,j_);const{setup:i}=t;if(i){Fi();const s=n.setupContext=i.length>1?Lg(n):null,r=ua(n),a=ca(i,n,0,[n.props,s]),o=Sf(a);if(ki(),r(),(o||n.sp)&&!kr(n)&&ep(n),o){if(a.then(oh,oh),e)return a.then(l=>{lh(n,l,e)}).catch(l=>{wo(l,n,0)});n.asyncDep=a}else lh(n,a,e)}else Tp(n,e)}function lh(n,e,t){We(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:vt(e)&&(n.setupState=Yf(e)),Tp(n,t)}let ch;function Tp(n,e,t){const i=n.type;if(!n.render){if(!e&&ch&&!i.render){const s=i.template||hu(n).template;if(s){const{isCustomElement:r,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Dt(Dt({isCustomElement:r,delimiters:o},a),l);i.render=ch(s,c)}}n.render=i.render||zn}{const s=ua(n);Fi();try{K_(n)}finally{ki(),s()}}}const Ig={get(n,e){return zt(n,"get",""),n[e]}};function Lg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ig),slots:n.slots,emit:n.emit,expose:e}}function pu(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Yf(y_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in zr)return zr[t](n)},has(e,t){return t in e||t in zr}})):n.proxy}function Dg(n,e=!0){return We(n)?n.displayName||n.name:n.name||e&&n.__name}function Ng(n){return We(n)&&"__vccOpts"in n}const Sn=(n,e)=>T_(n,e,ta);function wp(n,e,t){const i=arguments.length;return i===2?vt(e)&&!Ve(e)?co(e)?Pt(n,null,[e]):Pt(n,e):Pt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&co(t)&&(t=[t]),Pt(n,e,t))}const Ug="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let jl;const uh=typeof window<"u"&&window.trustedTypes;if(uh)try{jl=uh.createPolicy("vue",{createHTML:n=>n})}catch{}const Rp=jl?n=>jl.createHTML(n):n=>n,Og="http://www.w3.org/2000/svg",Fg="http://www.w3.org/1998/Math/MathML",si=typeof document<"u"?document:null,hh=si&&si.createElement("template"),kg={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?si.createElementNS(Og,n):e==="mathml"?si.createElementNS(Fg,n):t?si.createElement(n,{is:t}):si.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>si.createTextNode(n),createComment:n=>si.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>si.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const a=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{hh.innerHTML=Rp(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=hh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Bg=Symbol("_vtc");function zg(n,e,t){const i=n[Bg];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const dh=Symbol("_vod"),Hg=Symbol("_vsh"),Vg=Symbol(""),Gg=/(^|;)\s*display\s*:/;function Wg(n,e,t){const i=n.style,s=Tt(t);let r=!1;if(t&&!s){if(e)if(Tt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&$a(i,o,"")}else for(const a in e)t[a]==null&&$a(i,a,"");for(const a in t)a==="display"&&(r=!0),$a(i,a,t[a])}else if(s){if(e!==t){const a=i[Vg];a&&(t+=";"+a),i.cssText=t,r=Gg.test(t)}}else e&&n.removeAttribute("style");dh in n&&(n[dh]=r?i.display:"",n[Hg]&&(i.display="none"))}const fh=/\s*!important$/;function $a(n,e,t){if(Ve(t))t.forEach(i=>$a(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Xg(n,e);fh.test(t)?n.setProperty(us(i),t.replace(fh,""),"important"):n[i]=t}}const ph=["Webkit","Moz","ms"],Ko={};function Xg(n,e){const t=Ko[e];if(t)return t;let i=_n(e);if(i!=="filter"&&i in n)return Ko[e]=i;i=Mo(i);for(let s=0;s<ph.length;s++){const r=ph[s]+i;if(r in n)return Ko[e]=r}return e}const mh="http://www.w3.org/1999/xlink";function _h(n,e,t,i,s,r=e_(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(mh,e.slice(6,e.length)):n.setAttributeNS(mh,e,t):t==null||r&&!Tf(t)?n.removeAttribute(e):n.setAttribute(e,r?"":Oi(t)?String(t):t)}function gh(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Rp(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const o=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=Tf(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Yg(n,e,t,i){n.addEventListener(e,t,i)}function qg(n,e,t,i){n.removeEventListener(e,t,i)}const vh=Symbol("_vei");function jg(n,e,t,i,s=null){const r=n[vh]||(n[vh]={}),a=r[e];if(i&&a)a.value=i;else{const[o,l]=Kg(e);if(i){const c=r[e]=Jg(i,s);Yg(n,o,c,l)}else a&&(qg(n,o,a,l),r[e]=void 0)}}const xh=/(?:Once|Passive|Capture)$/;function Kg(n){let e;if(xh.test(n)){e={};let i;for(;i=n.match(xh);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):us(n.slice(2)),e]}let $o=0;const $g=Promise.resolve(),Zg=()=>$o||($g.then(()=>$o=0),$o=Date.now());function Jg(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Vn(Qg(i,t.value),e,5,[i])};return t.value=n,t.attached=Zg(),t}function Qg(n,e){if(Ve(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const bh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,e0=(n,e,t,i,s,r)=>{const a=s==="svg";e==="class"?zg(n,i,a):e==="style"?Wg(n,t,i):bo(e)?$c(e)||jg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):t0(n,e,i,a))?(gh(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&_h(n,e,i,a,r,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Tt(i))?gh(n,_n(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),_h(n,e,i,a))};function t0(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&bh(e)&&We(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return bh(e)&&Tt(t)?!1:e in n}const n0=Dt({patchProp:e0},kg);let yh;function i0(){return yh||(yh=lg(n0))}const s0=(...n)=>{const e=i0().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=a0(i);if(!s)return;const r=e._component;!We(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,r0(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function r0(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function a0(n){return Tt(n)?document.querySelector(n):n}const lr=(n,e)=>{const t=n.__vccOpts||n;for(const[i,s]of e)t[i]=s;return t},o0={},l0={class:"container"},c0={class:"row"},u0={class:"navbar navbar-expand-lg navbar-light bg-light"},h0={class:"navbar",id:"navbarNav"},d0={class:"navbar-nav"},f0={class:"nav-item"},p0={class:"nav-item"},m0={class:"nav-item"},_0={class:"nav-item"};function g0(n,e){const t=sp("router-link");return St(),At("div",l0,[Ke("div",c0,[Ke("nav",u0,[Ke("div",h0,[Ke("ul",d0,[Ke("li",f0,[Pt(t,{class:"nav-link",to:"/7sinxtasylimbotv/"},{default:Cr(()=>e[0]||(e[0]=[Ir("Character")])),_:1})]),Ke("li",p0,[Pt(t,{class:"nav-link",to:"/7sinxtasylimbotv/event"},{default:Cr(()=>e[1]||(e[1]=[Ir("Events")])),_:1})]),Ke("li",m0,[Pt(t,{class:"nav-link",to:"/7sinxtasylimbotv/story"},{default:Cr(()=>e[2]||(e[2]=[Ir("Story")])),_:1})]),Ke("li",_0,[Pt(t,{class:"nav-link",to:"/7sinxtasylimbotv/kizuna"},{default:Cr(()=>e[3]||(e[3]=[Ir("Kizuna")])),_:1})])])])])])])}const v0=lr(o0,[["render",g0]]),x0={__name:"App",setup(n){return(e,t)=>{const i=sp("router-view");return St(),At(Ot,null,[Pt(v0),Pt(i)],64)}}};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Is=typeof document<"u";function Cp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function b0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Cp(n.default)}const at=Object.assign;function Zo(n,e){const t={};for(const i in e){const s=e[i];t[i]=In(s)?s.map(n):n(s)}return t}const Vr=()=>{},In=Array.isArray,Pp=/#/g,y0=/&/g,S0=/\//g,M0=/=/g,E0=/\?/g,Ip=/\+/g,A0=/%5B/g,T0=/%5D/g,Lp=/%5E/g,w0=/%60/g,Dp=/%7B/g,R0=/%7C/g,Np=/%7D/g,C0=/%20/g;function mu(n){return encodeURI(""+n).replace(R0,"|").replace(A0,"[").replace(T0,"]")}function P0(n){return mu(n).replace(Dp,"{").replace(Np,"}").replace(Lp,"^")}function Kl(n){return mu(n).replace(Ip,"%2B").replace(C0,"+").replace(Pp,"%23").replace(y0,"%26").replace(w0,"`").replace(Dp,"{").replace(Np,"}").replace(Lp,"^")}function I0(n){return Kl(n).replace(M0,"%3D")}function L0(n){return mu(n).replace(Pp,"%23").replace(E0,"%3F")}function D0(n){return n==null?"":L0(n).replace(S0,"%2F")}function na(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const N0=/\/$/,U0=n=>n.replace(N0,"");function Jo(n,e,t="/"){let i,s={},r="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),r=e.slice(l+1,o>-1?o:e.length),s=n(r)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=B0(i??e,t),{fullPath:i+(r&&"?")+r+a,path:i,query:s,hash:na(a)}}function O0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Sh(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function F0(n,e,t){const i=e.matched.length-1,s=t.matched.length-1;return i>-1&&i===s&&Ks(e.matched[i],t.matched[s])&&Up(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function Ks(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Up(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!k0(n[t],e[t]))return!1;return!0}function k0(n,e){return In(n)?Mh(n,e):In(e)?Mh(e,n):n===e}function Mh(n,e){return In(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function B0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),s=i[i.length-1];(s===".."||s===".")&&i.push("");let r=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(a).join("/")}const _i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var ia;(function(n){n.pop="pop",n.push="push"})(ia||(ia={}));var Gr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Gr||(Gr={}));function z0(n){if(!n)if(Is){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),U0(n)}const H0=/^[^#]+#/;function V0(n,e){return n.replace(H0,"#")+e}function G0(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Io=()=>({left:window.scrollX,top:window.scrollY});function W0(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=G0(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Eh(n,e){return(history.state?history.state.position-e:-1)+n}const $l=new Map;function X0(n,e){$l.set(n,e)}function Y0(n){const e=$l.get(n);return $l.delete(n),e}let q0=()=>location.protocol+"//"+location.host;function Op(n,e){const{pathname:t,search:i,hash:s}=e,r=n.indexOf("#");if(r>-1){let o=s.includes(n.slice(r))?n.slice(r).length:1,l=s.slice(o);return l[0]!=="/"&&(l="/"+l),Sh(l,"")}return Sh(t,n)+i+s}function j0(n,e,t,i){let s=[],r=[],a=null;const o=({state:d})=>{const f=Op(n,location),_=t.value,g=e.value;let m=0;if(d){if(t.value=f,e.value=d,a&&a===_){a=null;return}m=g?d.position-g.position:0}else i(f);s.forEach(p=>{p(t.value,_,{delta:m,type:ia.pop,direction:m?m>0?Gr.forward:Gr.back:Gr.unknown})})};function l(){a=t.value}function c(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return r.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(at({},d.state,{scroll:Io()}),"")}function h(){for(const d of r)d();r=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Ah(n,e,t,i=!1,s=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:s?Io():null}}function K0(n){const{history:e,location:t}=window,i={value:Op(n,t)},s={value:e.state};s.value||r(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+l:q0()+n+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),t[u?"replace":"assign"](d)}}function a(l,c){const u=at({},e.state,Ah(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});r(l,u,!0),i.value=l}function o(l,c){const u=at({},s.value,e.state,{forward:l,scroll:Io()});r(u.current,u,!0);const h=at({},Ah(i.value,l,null),{position:u.position+1},c);r(l,h,!1),i.value=l}return{location:i,state:s,push:o,replace:a}}function $0(n){n=z0(n);const e=K0(n),t=j0(n,e.state,e.location,e.replace);function i(r,a=!0){a||t.pauseListeners(),history.go(r)}const s=at({location:"",base:n,go:i,createHref:V0.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Z0(n){return typeof n=="string"||n&&typeof n=="object"}function Fp(n){return typeof n=="string"||typeof n=="symbol"}const kp=Symbol("");var Th;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Th||(Th={}));function $s(n,e){return at(new Error,{type:n,[kp]:!0},e)}function $n(n,e){return n instanceof Error&&kp in n&&(e==null||!!(n.type&e))}const wh="[^/]+?",J0={sensitive:!1,strict:!1,start:!0,end:!0},Q0=/[.+*?^${}()[\]/\\]/g;function ev(n,e){const t=at({},J0,e),i=[];let s=t.start?"^":"";const r=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(t.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Q0,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:g,optional:m,regexp:p}=d;r.push({name:_,repeatable:g,optional:m});const A=p||wh;if(A!==wh){f+=10;try{new RegExp(`(${A})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${_}" (${A}): `+b.message)}}let E=g?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;h||(E=m&&c.length<2?`(?:/${E})`:"/"+E),m&&(E+="?"),s+=E,f+=20,m&&(f+=-8),g&&(f+=-20),A===".*"&&(f+=-50)}u.push(f)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function o(c){const u=c.match(a),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",_=r[d-1];h[_.name]=f&&_.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of n){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:_,repeatable:g,optional:m}=f,p=_ in c?c[_]:"";if(In(p)&&!g)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const A=In(p)?p.join("/"):p;if(!A)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=A}}return u||"/"}return{re:a,score:i,keys:r,parse:o,stringify:l}}function tv(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Bp(n,e){let t=0;const i=n.score,s=e.score;for(;t<i.length&&t<s.length;){const r=tv(i[t],s[t]);if(r)return r;t++}if(Math.abs(s.length-i.length)===1){if(Rh(i))return 1;if(Rh(s))return-1}return s.length-i.length}function Rh(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const nv={type:0,value:""},iv=/[a-zA-Z0-9_]/;function sv(n){if(!n)return[[]];if(n==="/")return[[nv]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(f){throw new Error(`ERR (${t})/"${c}": ${f}`)}let t=0,i=t;const s=[];let r;function a(){r&&s.push(r),r=[]}let o=0,l,c="",u="";function h(){c&&(t===0?r.push({type:0,value:c}):t===1||t===2||t===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),a()):l===":"?(h(),t=1):d();break;case 4:d(),t=i;break;case 1:l==="("?t=2:iv.test(l)?d():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),a(),s}function rv(n,e,t){const i=ev(sv(n.path),t),s=at(i,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function av(n,e){const t=[],i=new Map;e=Lh({strict:!1,end:!0,sensitive:!1},e);function s(h){return i.get(h)}function r(h,d,f){const _=!f,g=Ph(h);g.aliasOf=f&&f.record;const m=Lh(e,h),p=[g];if("alias"in h){const b=typeof h.alias=="string"?[h.alias]:h.alias;for(const C of b)p.push(Ph(at({},g,{components:f?f.record.components:g.components,path:C,aliasOf:f?f.record:g})))}let A,E;for(const b of p){const{path:C}=b;if(d&&C[0]!=="/"){const P=d.record.path,R=P[P.length-1]==="/"?"":"/";b.path=d.record.path+(C&&R+C)}if(A=rv(b,d,m),f?f.alias.push(A):(E=E||A,E!==A&&E.alias.push(A),_&&h.name&&!Ih(A)&&a(h.name)),zp(A)&&l(A),g.children){const P=g.children;for(let R=0;R<P.length;R++)r(P[R],A,f&&f.children[R])}f=f||A}return E?()=>{a(E)}:Vr}function a(h){if(Fp(h)){const d=i.get(h);d&&(i.delete(h),t.splice(t.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=t.indexOf(h);d>-1&&(t.splice(d,1),h.record.name&&i.delete(h.record.name),h.children.forEach(a),h.alias.forEach(a))}}function o(){return t}function l(h){const d=cv(h,t);t.splice(d,0,h),h.record.name&&!Ih(h)&&i.set(h.record.name,h)}function c(h,d){let f,_={},g,m;if("name"in h&&h.name){if(f=i.get(h.name),!f)throw $s(1,{location:h});m=f.record.name,_=at(Ch(d.params,f.keys.filter(E=>!E.optional).concat(f.parent?f.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),h.params&&Ch(h.params,f.keys.map(E=>E.name))),g=f.stringify(_)}else if(h.path!=null)g=h.path,f=t.find(E=>E.re.test(g)),f&&(_=f.parse(g),m=f.record.name);else{if(f=d.name?i.get(d.name):t.find(E=>E.re.test(d.path)),!f)throw $s(1,{location:h,currentLocation:d});m=f.record.name,_=at({},d.params,h.params),g=f.stringify(_)}const p=[];let A=f;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:g,params:_,matched:p,meta:lv(p)}}n.forEach(h=>r(h));function u(){t.length=0,i.clear()}return{addRoute:r,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:s}}function Ch(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Ph(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:ov(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ov(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Ih(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function lv(n){return n.reduce((e,t)=>at(e,t.meta),{})}function Lh(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function cv(n,e){let t=0,i=e.length;for(;t!==i;){const r=t+i>>1;Bp(n,e[r])<0?i=r:t=r+1}const s=uv(n);return s&&(i=e.lastIndexOf(s,i-1)),i}function uv(n){let e=n;for(;e=e.parent;)if(zp(e)&&Bp(n,e)===0)return e}function zp({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function hv(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<i.length;++s){const r=i[s].replace(Ip," "),a=r.indexOf("="),o=na(a<0?r:r.slice(0,a)),l=a<0?null:na(r.slice(a+1));if(o in e){let c=e[o];In(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Dh(n){let e="";for(let t in n){const i=n[t];if(t=I0(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(In(i)?i.map(r=>r&&Kl(r)):[i&&Kl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+t,r!=null&&(e+="="+r))})}return e}function dv(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=In(i)?i.map(s=>s==null?null:""+s):i==null?i:""+i)}return e}const fv=Symbol(""),Nh=Symbol(""),_u=Symbol(""),Hp=Symbol(""),Zl=Symbol("");function gr(){let n=[];function e(i){return n.push(i),()=>{const s=n.indexOf(i);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Ti(n,e,t,i,s,r=a=>a()){const a=i&&(i.enterCallbacks[s]=i.enterCallbacks[s]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l($s(4,{from:t,to:e})):d instanceof Error?l(d):Z0(d)?l($s(2,{from:e,to:d})):(a&&i.enterCallbacks[s]===a&&typeof d=="function"&&a.push(d),o())},u=r(()=>n.call(i&&i.instances[s],e,t,c));let h=Promise.resolve(u);n.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Qo(n,e,t,i,s=r=>r()){const r=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Cp(l)){const u=(l.__vccOpts||l)[e];u&&r.push(Ti(u,t,i,a,o,s))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const h=b0(u)?u.default:u;a.mods[o]=u,a.components[o]=h;const f=(h.__vccOpts||h)[e];return f&&Ti(f,t,i,a,o,s)()}))}}return r}function Uh(n){const e=ci(_u),t=ci(Hp),i=Sn(()=>{const l=Hn(n.to);return e.resolve(l)}),s=Sn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ks.bind(null,u));if(d>-1)return d;const f=Oh(l[c-2]);return c>1&&Oh(u)===f&&h[h.length-1].path!==f?h.findIndex(Ks.bind(null,l[c-2])):d}),r=Sn(()=>s.value>-1&&vv(t.params,i.value.params)),a=Sn(()=>s.value>-1&&s.value===t.matched.length-1&&Up(t.params,i.value.params));function o(l={}){if(gv(l)){const c=e[Hn(n.replace)?"replace":"push"](Hn(n.to)).catch(Vr);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Sn(()=>i.value.href),isActive:r,isExactActive:a,navigate:o}}function pv(n){return n.length===1?n[0]:n}const mv=Qf({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Uh,setup(n,{slots:e}){const t=To(Uh(n)),{options:i}=ci(_u),s=Sn(()=>({[Fh(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Fh(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=e.default&&pv(e.default(t));return n.custom?r:wp("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},r)}}}),_v=mv;function gv(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function vv(n,e){for(const t in e){const i=e[t],s=n[t];if(typeof i=="string"){if(i!==s)return!1}else if(!In(s)||s.length!==i.length||i.some((r,a)=>r!==s[a]))return!1}return!0}function Oh(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Fh=(n,e,t)=>n??e??t,xv=Qf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=ci(Zl),s=Sn(()=>n.route||i.value),r=ci(Nh,0),a=Sn(()=>{let c=Hn(r);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),o=Sn(()=>s.value.matched[a.value]);qa(Nh,Sn(()=>a.value+1)),qa(fv,o),qa(Zl,s);const l=os();return ja(()=>[l.value,o.value,n.name],([c,u,h],[d,f,_])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ks(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=s.value,u=n.name,h=o.value,d=h&&h.components[u];if(!d)return kh(t.default,{Component:d,route:c});const f=h.props[u],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,m=wp(d,at({},_,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return kh(t.default,{Component:m,route:c})||m}}});function kh(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const bv=xv;function yv(n){const e=av(n.routes,n),t=n.parseQuery||hv,i=n.stringifyQuery||Dh,s=n.history,r=gr(),a=gr(),o=gr(),l=S_(_i);let c=_i;Is&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zo.bind(null,D=>""+D),h=Zo.bind(null,D0),d=Zo.bind(null,na);function f(D,se){let ie,de;return Fp(D)?(ie=e.getRecordMatcher(D),de=se):de=D,e.addRoute(de,ie)}function _(D){const se=e.getRecordMatcher(D);se&&e.removeRoute(se)}function g(){return e.getRoutes().map(D=>D.record)}function m(D){return!!e.getRecordMatcher(D)}function p(D,se){if(se=at({},se||l.value),typeof D=="string"){const x=Jo(t,D,se.path),z=e.resolve({path:x.path},se),$=s.createHref(x.fullPath);return at(x,z,{params:d(z.params),hash:na(x.hash),redirectedFrom:void 0,href:$})}let ie;if(D.path!=null)ie=at({},D,{path:Jo(t,D.path,se.path).path});else{const x=at({},D.params);for(const z in x)x[z]==null&&delete x[z];ie=at({},D,{params:h(x)}),se.params=h(se.params)}const de=e.resolve(ie,se),Le=D.hash||"";de.params=u(d(de.params));const Ie=O0(i,at({},D,{hash:P0(Le),path:de.path})),w=s.createHref(Ie);return at({fullPath:Ie,hash:Le,query:i===Dh?dv(D.query):D.query||{}},de,{redirectedFrom:void 0,href:w})}function A(D){return typeof D=="string"?Jo(t,D,l.value.path):at({},D)}function E(D,se){if(c!==D)return $s(8,{from:se,to:D})}function b(D){return R(D)}function C(D){return b(at(A(D),{replace:!0}))}function P(D){const se=D.matched[D.matched.length-1];if(se&&se.redirect){const{redirect:ie}=se;let de=typeof ie=="function"?ie(D):ie;return typeof de=="string"&&(de=de.includes("?")||de.includes("#")?de=A(de):{path:de},de.params={}),at({query:D.query,hash:D.hash,params:de.path!=null?{}:D.params},de)}}function R(D,se){const ie=c=p(D),de=l.value,Le=D.state,Ie=D.force,w=D.replace===!0,x=P(ie);if(x)return R(at(A(x),{state:typeof x=="object"?at({},Le,x.state):Le,force:Ie,replace:w}),se||ie);const z=ie;z.redirectedFrom=se;let $;return!Ie&&F0(i,de,ie)&&($=$s(16,{to:z,from:de}),Re(de,de,!0,!1)),($?Promise.resolve($):M(z,de)).catch(W=>$n(W)?$n(W,2)?W:be(W):V(W,z,de)).then(W=>{if(W){if($n(W,2))return R(at({replace:w},A(W.to),{state:typeof W.to=="object"?at({},Le,W.to.state):Le,force:Ie}),se||z)}else W=te(z,de,!0,w,Le);return L(z,de,W),W})}function F(D,se){const ie=E(D,se);return ie?Promise.reject(ie):Promise.resolve()}function T(D){const se=ne.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(D):D()}function M(D,se){let ie;const[de,Le,Ie]=Sv(D,se);ie=Qo(de.reverse(),"beforeRouteLeave",D,se);for(const x of de)x.leaveGuards.forEach(z=>{ie.push(Ti(z,D,se))});const w=F.bind(null,D,se);return ie.push(w),Me(ie).then(()=>{ie=[];for(const x of r.list())ie.push(Ti(x,D,se));return ie.push(w),Me(ie)}).then(()=>{ie=Qo(Le,"beforeRouteUpdate",D,se);for(const x of Le)x.updateGuards.forEach(z=>{ie.push(Ti(z,D,se))});return ie.push(w),Me(ie)}).then(()=>{ie=[];for(const x of Ie)if(x.beforeEnter)if(In(x.beforeEnter))for(const z of x.beforeEnter)ie.push(Ti(z,D,se));else ie.push(Ti(x.beforeEnter,D,se));return ie.push(w),Me(ie)}).then(()=>(D.matched.forEach(x=>x.enterCallbacks={}),ie=Qo(Ie,"beforeRouteEnter",D,se,T),ie.push(w),Me(ie))).then(()=>{ie=[];for(const x of a.list())ie.push(Ti(x,D,se));return ie.push(w),Me(ie)}).catch(x=>$n(x,8)?x:Promise.reject(x))}function L(D,se,ie){o.list().forEach(de=>T(()=>de(D,se,ie)))}function te(D,se,ie,de,Le){const Ie=E(D,se);if(Ie)return Ie;const w=se===_i,x=Is?history.state:{};ie&&(de||w?s.replace(D.fullPath,at({scroll:w&&x&&x.scroll},Le)):s.push(D.fullPath,Le)),l.value=D,Re(D,se,ie,w),be()}let K;function ae(){K||(K=s.listen((D,se,ie)=>{if(!_e.listening)return;const de=p(D),Le=P(de);if(Le){R(at(Le,{replace:!0,force:!0}),de).catch(Vr);return}c=de;const Ie=l.value;Is&&X0(Eh(Ie.fullPath,ie.delta),Io()),M(de,Ie).catch(w=>$n(w,12)?w:$n(w,2)?(R(at(A(w.to),{force:!0}),de).then(x=>{$n(x,20)&&!ie.delta&&ie.type===ia.pop&&s.go(-1,!1)}).catch(Vr),Promise.reject()):(ie.delta&&s.go(-ie.delta,!1),V(w,de,Ie))).then(w=>{w=w||te(de,Ie,!1),w&&(ie.delta&&!$n(w,8)?s.go(-ie.delta,!1):ie.type===ia.pop&&$n(w,20)&&s.go(-1,!1)),L(de,Ie,w)}).catch(Vr)}))}let oe=gr(),J=gr(),ee;function V(D,se,ie){be(D);const de=J.list();return de.length?de.forEach(Le=>Le(D,se,ie)):console.error(D),Promise.reject(D)}function ge(){return ee&&l.value!==_i?Promise.resolve():new Promise((D,se)=>{oe.add([D,se])})}function be(D){return ee||(ee=!D,ae(),oe.list().forEach(([se,ie])=>D?ie(D):se()),oe.reset()),D}function Re(D,se,ie,de){const{scrollBehavior:Le}=n;if(!Is||!Le)return Promise.resolve();const Ie=!ie&&Y0(Eh(D.fullPath,0))||(de||!ie)&&history.state&&history.state.scroll||null;return jf().then(()=>Le(D,se,Ie)).then(w=>w&&W0(w)).catch(w=>V(w,D,se))}const De=D=>s.go(D);let Qe;const ne=new Set,_e={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:g,resolve:p,options:n,push:b,replace:C,go:De,back:()=>De(-1),forward:()=>De(1),beforeEach:r.add,beforeResolve:a.add,afterEach:o.add,onError:J.add,isReady:ge,install(D){const se=this;D.component("RouterLink",_v),D.component("RouterView",bv),D.config.globalProperties.$router=se,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Hn(l)}),Is&&!Qe&&l.value===_i&&(Qe=!0,b(s.location).catch(Le=>{}));const ie={};for(const Le in _i)Object.defineProperty(ie,Le,{get:()=>l.value[Le],enumerable:!0});D.provide(_u,se),D.provide(Hp,Gf(ie)),D.provide(Zl,l);const de=D.unmount;ne.add(D),D.unmount=function(){ne.delete(D),ne.size<1&&(c=_i,K&&K(),K=null,l.value=_i,Qe=!1,ee=!1),de()}}};function Me(D){return D.reduce((se,ie)=>se.then(()=>T(ie)),Promise.resolve())}return _e}function Sv(n,e){const t=[],i=[],s=[],r=Math.max(e.matched.length,n.matched.length);for(let a=0;a<r;a++){const o=e.matched[a];o&&(n.matched.find(c=>Ks(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>Ks(c,l))||s.push(l))}return[t,i,s]}const Bh={satanB:{break1:"./assets/breaks/SatanB_X_2k.png",break2:"./assets/breaks/SatanB_Y.png",break3:"./assets/breaks/SatanB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych003b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch003b_01.png",l2dx:"xch003b","l2dx-fast":"xch003b-fast",l2dy:"ych003b",l2dz:"zch003b"},belialB:{break1:"./assets/breaks/BelialB_X_2k.png",break2:"./assets/breaks/BelialB_Y.png",break3:"./assets/breaks/BelialB_Z.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych008b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch008b_01.png",l2dx:"xch008b",l2dy:"ych008b",l2dz:"zch008b"},belialA:{break1:"./assets/breaks/BelialA_X_2k.png",break2:"./assets/breaks/BelialA_Y_2k.png",break3:"./assets/breaks/BelialA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych008a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch008a_01.png",l2dx:"xch008a",l2dxfast:"xch008a-fast",l2dy:"ych008a",l2dz:"zch008a"},asmodeusB:{break1:"./assets/breaks/AsmodeusB_X_2k.png",break2:"./assets/breaks/AsmodeusB_Y_2k.png",break3:"./assets/breaks/AsmodeusB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych007b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch007b_01.png",l2dx:"xch007b",l2dxfast:"xch007bfast",l2dy:"ych007b",l2dz:"zch007b"},satanA:{break1:"./assets/breaks/SatanA_X.png",break2:"./assets/breaks/SatanA_Y.png",break3:"./assets/breaks/SatanA_Z_2k.png",break4:"./assets/breaks/SatanA_W.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych003a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch003a_01.png",sm3:"./assets/mirrors/Sprite/atlas_soulshardportrait_wch003a_01.png",l2dz:"zch003a",l2dw:"wch003a"},mammonA:{break1:"./assets/breaks/MammonA_X.png",break2:"./assets/breaks/MammonA_Y_2k.png",break3:"./assets/breaks/MammonA_Z.png",break4:"./assets/breaks/MammonA_W_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych005a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch005a_01.png",sm3:"./assets/mirrors/Sprite/atlas_soulshardportrait_wch005a_01.png",l2dy:"ych005a",l2dw:"wch005a"},belial:{break1:"./assets/breaks/Belial_X.png",break2:"./assets/breaks/Belial_Y.png",break3:"./assets/breaks/Belial_Z.png",break4:"./assets/breaks/Belial_W.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych008_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch008_01.png",sm3:"./assets/mirrors/Sprite/atlas_soulshardportrait_wch008_01.png",l2dz:"zch008",l2dw:"wch008"},sarielA:{break1:"./assets/breaks/SarielA_X.png",break2:"./assets/breaks/SarielA_Y_2k.png",break3:"./assets/breaks/SarielA_Z_2k.png",break4:"./assets/breaks/SarielA_W.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych012a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch012a_01.png",sm3:"./assets/mirrors/Sprite/atlas_soulshardportrait_wch012a_01.png",l2dy:"ych012a",l2dz:"zch012a",l2dw:"wch012a"},sarielB:{break1:"./assets/breaks/SarielB_X_2k.png",break2:"./assets/breaks/SarielB_Y_2k.png",break3:"./assets/breaks/SarielB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych012b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch012b_01.png",l2dx:"xch012b",l2dy:"ych012b",l2dz:"zch012b"},Sariel:{break1:"./assets/breaks/Sariel_X.png",break2:"./assets/breaks/Sariel_Y.png",break3:"./assets/breaks/Sariel_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych012_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch012_01.png",l2dz:"zch012"},asmodeusA:{break1:"./assets/breaks/AsmodeusA_X.png",break2:"./assets/breaks/AsmodeusA_Y.png",break3:"./assets/breaks/AsmodeusA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych007a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch007a_01.png"},asmodeusC:{break1:"./assets/breaks/AsmodeusC_X_2k.png",break2:"./assets/breaks/AsmodeusC_Y.png",break3:"./assets/breaks/AsmodeusC_Z.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych007c_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch007c_01.png",l2dx:"ych007c"},asmodeus:{break1:"./assets/breaks/Asmodeus_X.png",break2:"./assets/breaks/Asmodeus_Y.png",break3:"./assets/breaks/Asmodeus_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych007_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch007_01.png"},MammonB:{break1:"./assets/breaks/MammonB_X_2k.png",break2:"./assets/breaks/MammonB_Y_2k.png",break3:"./assets/breaks/MammonB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych005b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch005b_01.png",l2dx:"xch005b",l2dy:"ych005b"},MammonC:{break1:"./assets/breaks/MammonC_X_2k.png",break2:"./assets/breaks/MammonC_Y.png",break3:"./assets/breaks/MammonC_Z.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych005c_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch005c_01.png",l2dx:"ych005c"},Mammon:{break1:"./assets/breaks/Mammon_X.png",break2:"./assets/breaks/Mammon_Y.png",break3:"./assets/breaks/Mammon_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych005_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch005_01.png",l2dy:"zch005"},Satan:{break1:"./assets/breaks/Satan_X.png",break2:"./assets/breaks/Satan_Y.png",break3:"./assets/breaks/Satan_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych003_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch003_01.png",l2dz:"zch003"},astarothA:{break1:"./assets/breaks/AstarothA_X.png",break2:"./assets/breaks/AstarothA_Y_2k.png",break3:"./assets/breaks/AstarothA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych009a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch009a_01.png",l2dy:"ych009a",l2dz:"zch009a"},astarothB:{break1:"./assets/breaks/AstarothB_X_2k.png",break2:"./assets/breaks/AstarothB_Y_2k.png",break3:"./assets/breaks/AstarothB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych009b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch009b_01.png",l2dx:"xch009b",l2dy:"ych009b",l2dz:"zch009b"},astaroth:{break1:"./assets/breaks/Astaroth_X.png",break2:"./assets/breaks/Astaroth_Y.png",break3:"./assets/breaks/Astaroth_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych009_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch009_01.png",l2dz:"zch009"},beelzebubA:{break1:"./assets/breaks/BeelzebubA_X.png",break2:"./assets/breaks/BeelzebubA_Y.png",break3:"./assets/breaks/BeelzebubA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych006a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch006a_01.png",l2dz:"zch006a"},beelzebubB:{break1:"./assets/breaks/BeelzebubB_X.png",break2:"./assets/breaks/BeelzebubB_Y_2k.png",break3:"./assets/breaks/BeelzebubB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych006b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch006b_01.png",l2dy:"ych006b",l2dz:"zch006b"},beelzebubC:{break1:"./assets/breaks/BeelzebubC_X_2k.png",break2:"./assets/breaks/BeelzebubC_Y_2k.png",break3:"./assets/breaks/BeelzebubC_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych006c_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch006c_01.png",l2dx:"xch006c",l2dy:"ych006c",l2dz:"zch006c"},beelzebub:{break1:"./assets/breaks/Beelzebub_X.png",break2:"./assets/breaks/Beelzebub_Y.png",break3:"./assets/breaks/Beelzebub_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych006_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch006_01.png",l2dz:"zch006"},BelphegorA:{break1:"./assets/breaks/BelphegorA_X.png",break2:"./assets/breaks/BelphegorA_Y.png",break3:"./assets/breaks/BelphegorA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych004a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch004a_01.png",l2dz:"zch004a"},BelphegorB:{break1:"./assets/breaks/BelphegorB_X.png",break2:"./assets/breaks/BelphegorB_Y_2k.png",break3:"./assets/breaks/BelphegorB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych004b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch004b_01.png",l2dy:"ych004b",l2dz:"zch004b"},BelphegorC:{break1:"./assets/breaks/BelphegorC_X_2k.png",break2:"./assets/breaks/BelphegorC_Y_2k.png",break3:"./assets/breaks/BelphegorC_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych004c_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch004c_01.png",l2dx:"xch004c",l2dy:"ych004c",l2dz:"zch004c"},Belphegor:{break1:"./assets/breaks/Belphegor_X.png",break2:"./assets/breaks/Belphegor_Y.png",break3:"./assets/breaks/Belphegor_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych004_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch004_01.png",l2dz:"zch004"},LeviathanA:{break1:"./assets/breaks/LeviathanA_X.png",break2:"./assets/breaks/LeviathanA_Y.png",break3:"./assets/breaks/LeviathanA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych002a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch002a_01.png"},LeviathanB:{break1:"./assets/breaks/LeviathanB_X.png",break2:"./assets/breaks/LeviathanB_Y_2k.png",break3:"./assets/breaks/LeviathanB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych002b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch002b_01.png",l2dy:"ych002b"},LeviathanC:{break1:"./assets/breaks/LeviathanC_X_2k.png",break2:"./assets/breaks/LeviathanC_Y.png",break3:"./assets/breaks/LeviathanC_Z.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych002c_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch002c_01.png",l2dx:"xch002c",l2dy:"ych002c"},LeviathanD:{break1:"./assets/breaks/LeviathanD_X_2k.png",break2:"./assets/breaks/LeviathanD_Y.png",break3:"./assets/breaks/LeviathanD_Z.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych002d_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch002d_01.png",l2dx:"xch002d",l2dxfast:"xch002dfast",ldy:"ych002d"},Leviathan:{break1:"./assets/breaks/Leviathan_X.png",break2:"./assets/breaks/Leviathan_Y.png",break3:"./assets/breaks/Leviathan_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych002_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch002_01.png"},LuciferA:{break1:"./assets/breaks/LuciferA_X.png",break2:"./assets/breaks/LuciferA_Y.png",break3:"./assets/breaks/LuciferA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych001a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch001a_01.png",l2dz:"zch001a"},LuciferB:{break1:"./assets/breaks/LuciferB_X.png",break2:"./assets/breaks/LuciferB_Y.png",break3:"./assets/breaks/LuciferB_Z_2k.png",break4:"./assets/breaks/LuciferB_W.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych001b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch001b_01.png",l2dz:"zch001b"},LuciferC:{break1:"./assets/breaks/LuciferC_X_2k.png",break2:"./assets/breaks/LuciferC_Y_2k.png",break3:"./assets/breaks/LuciferC_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych001c_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch001c_01.png",l2dx:"xch001cfast",l2dy:"ych001c",l2dz:"zch001c"},LuciferD:{break1:"./assets/breaks/LuciferD_X_2k.png",break2:"./assets/breaks/LuciferD_Y.png",break3:"./assets/breaks/LuciferD_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych001d_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch001d_01.png",l2dx:"xch001d",l2dxfast:"xch001dfast",l2dy:"ych001d",l2dz:"zch001d"},Lucifer:{break1:"./assets/breaks/Lucifer_X.png",break2:"./assets/breaks/Lucifer_Y.png",break3:"./assets/breaks/Lucifer_Z_2k.png",break4:"./assets/breaks/Lucifer_W.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych001_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch001_01.png",sm3:"./assets/mirrors/Sprite/atlas_soulshardportrait_wch001_01.png",l2dw:"wch001"},GabrielA:{break1:"./assets/breaks/GabrielA_X.png",break2:"./assets/breaks/GabrielA_Y.png",break3:"./assets/breaks/GabrielA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych016a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch016a_01.png",l2dz:"zch016a"},GabrielB:{break1:"./assets/breaks/GabrielB_X_2k.png",break2:"./assets/breaks/GabrielB_Y_2k.png",break3:"./assets/breaks/GabrielB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych016b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch016b_01.png",l2dx:"xch016b",l2dy:"ych016b",l2dz:"zch016b"},Gabriel:{break1:"./assets/breaks/Gabriel_X.png",break2:"./assets/breaks/Gabriel_Y.png",break3:"./assets/breaks/Gabriel_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych016_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch016_01.png",l2dz:"zch016"},MetatronA:{break1:"./assets/breaks/MetatronA_X.png",break2:"./assets/breaks/MetatronA_Y_2k.png",break3:"./assets/breaks/MetatronA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych014a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch014a_01.png",l2dy:"ych014a",l2dz:"zch014a"},MetatronB:{break1:"./assets/breaks/MetatronB_X_2k.png",break2:"./assets/breaks/MetatronB_Y_2k.png",break3:"./assets/breaks/MetatronB_Z_2k.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych014b_01.png",sm3:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch014b_01.png",l2dx:"xch014b",l2dy:"ych014b",l2dz:"zch014b"},Metatron:{break1:"./assets/breaks/Metatron_X.png",break2:"./assets/breaks/Metatron_Y.png",break3:"./assets/breaks/Metatron_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych014_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch014_01.png",l2dz:"zch014"},MichaelA:{break1:"./assets/breaks/MichaelA_X.png",break2:"./assets/breaks/MichaelA_Y_2k.png",break3:"./assets/breaks/MichaelA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych010a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch010a_01.png",l2dy:"ych010a",l2dz:"zch010a"},MichaelB:{break1:"./assets/breaks/MichaelB_X_2k.png",break2:"./assets/breaks/MichaelB_Y_2k.png",break3:"./assets/breaks/MichaelB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych010b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch010b_01.png",l2dx:"xch010b",l2dy:"ych010b",l2dz:"zch010b"},Michael:{break1:"./assets/breaks/Michael_X.png",break2:"./assets/breaks/Michael_Y.png",break3:"./assets/breaks/Michael_Z_2k.png",break4:"./assets/breaks/Michael_W_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych010_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch010_01.png",sm3:"./assets/mirrors/Sprite/atlas_soulshardportrait_wch010_01.png",l2dz:"zch010_light",l2dw:"wch010"},RaphaelA:{break1:"./assets/breaks/RaphaelA_X.png",break2:"./assets/breaks/RaphaelA_Y.png",break3:"./assets/breaks/RaphaelA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych015a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch015a_01.png",l2dz:"zch015"},RaphaelB:{break1:"./assets/breaks/RaphaelB_X.png",break2:"./assets/breaks/RaphaelB_Y.png",break3:"./assets/breaks/RaphaelB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych015b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch015b_01.png",l2dy:"ych015b",l2dz:"zch015b"},RaphaelC:{break1:"./assets/breaks/RaphaelC_X_2k.png",break2:"./assets/breaks/RaphaelC_Y.png",break3:"./assets/breaks/RaphaelC_Z.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych015c_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch015c_01.png",l2dx:"xch015c",l2dy:"ych015c",l2dz:"zch015c"},Raphael:{break1:"./assets/breaks/Raphael_X.png",break2:"./assets/breaks/Raphael_Y.png",break3:"./assets/breaks/Raphael_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych015_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch015_01.png"},SandalphonA:{break1:"./assets/breaks/SandalphonA_X.png",break2:"./assets/breaks/SandalphonA_Y_2k.png",break3:"./assets/breaks/SandalphonA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych013a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch013a_01.png",l2dy:"ych013a",l2dz:"zch013a"},SandalphonB:{break1:"./assets/breaks/SandalphonB_X_2k.png",break2:"./assets/breaks/SandalphonB_Y_2k.png",break3:"./assets/breaks/SandalphonB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych013b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch013b_01.png",l2dx:"xch013b",l2dy:"ych013b",l2dz:"zch013b"},Sandalphon:{break1:"./assets/breaks/Sandalphon_X.png",break2:"./assets/breaks/Sandalphon_Y.png",break3:"./assets/breaks/Sandalphon_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych013_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch013_01.png",l2dz:"zch013"},UrielA:{break1:"./assets/breaks/UrielA_X.png",break2:"./assets/breaks/UrielA_Y_2k.png",break3:"./assets/breaks/UrielA_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych011a_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch011a_01.png",l2dy:"ych011a",l2dz:"zch011a"},UrielB:{break1:"./assets/breaks/UrielB_X_2k.png",break2:"./assets/breaks/UrielB_Y_2k.png",break3:"./assets/breaks/UrielB_Z_2k.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych011b_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch011b_01.png",l2dx:"xch011b",l2dy:"ych011b",l2dz:"zch011b"},Uriel:{break1:"./assets/breaks/Uriel_X.png",break2:"./assets/breaks/Uriel_Y.png",break3:"./assets/breaks/Uriel_Z.png",sm1:"./assets/mirrors/Sprite/atlas_soulshardportrait_ych011_01.png",sm2:"./assets/mirrors/Sprite/atlas_soulshardportrait_zch011_01.png",l2dz:"zch011"}};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gu="171",Mv=0,zh=1,Ev=2,Vp=1,Av=2,ii=3,di=0,tn=1,Bn=2,Li=0,Ws=1,Hh=2,Vh=3,Gh=4,Tv=5,ts=100,wv=101,Rv=102,Cv=103,Pv=104,Iv=200,Lv=201,Dv=202,Nv=203,Jl=204,Ql=205,Uv=206,Ov=207,Fv=208,kv=209,Bv=210,zv=211,Hv=212,Vv=213,Gv=214,ec=0,tc=1,nc=2,Zs=3,ic=4,sc=5,rc=6,ac=7,Gp=0,Wv=1,Xv=2,Di=0,Yv=1,qv=2,jv=3,Kv=4,$v=5,Zv=6,Jv=7,Wh="attached",Qv="detached",Wp=300,Js=301,Qs=302,oc=303,lc=304,Lo=306,er=1e3,Ci=1001,ho=1002,$t=1003,Xp=1004,Lr=1005,cn=1006,Za=1007,oi=1008,fi=1009,Yp=1010,qp=1011,sa=1012,vu=1013,ls=1014,Tn=1015,ha=1016,xu=1017,bu=1018,tr=1020,jp=35902,Kp=1021,$p=1022,pn=1023,Zp=1024,Jp=1025,Xs=1026,nr=1027,yu=1028,Su=1029,Qp=1030,Mu=1031,Eu=1033,Ja=33776,Qa=33777,eo=33778,to=33779,cc=35840,uc=35841,hc=35842,dc=35843,fc=36196,pc=37492,mc=37496,_c=37808,gc=37809,vc=37810,xc=37811,bc=37812,yc=37813,Sc=37814,Mc=37815,Ec=37816,Ac=37817,Tc=37818,wc=37819,Rc=37820,Cc=37821,no=36492,Pc=36494,Ic=36495,em=36283,Lc=36284,Dc=36285,Nc=36286,ex=2200,tx=2201,nx=2202,ra=2300,aa=2301,el=2302,Us=2400,Os=2401,fo=2402,Au=2500,ix=2501,sx=0,tm=1,Uc=2,rx=3200,ax=3201,Tu=0,ox=1,Ri="",Ut="srgb",Jt="srgb-linear",po="linear",ft="srgb",ms=7680,Xh=519,lx=512,cx=513,ux=514,nm=515,hx=516,dx=517,fx=518,px=519,Oc=35044,Yh="300 es",li=2e3,mo=2001;class hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qh=1234567;const Wr=Math.PI/180,ir=180/Math.PI;function Rn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function wu(n,e){return(n%e+e)%e}function mx(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function _x(n,e,t){return n!==e?(t-n)/(e-n):0}function Xr(n,e,t){return(1-t)*n+t*e}function gx(n,e,t,i){return Xr(n,e,1-Math.exp(-t*i))}function vx(n,e=1){return e-Math.abs(wu(n,e*2)-e)}function xx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function bx(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function yx(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Sx(n,e){return n+Math.random()*(e-n)}function Mx(n){return n*(.5-Math.random())}function Ex(n){n!==void 0&&(qh=n);let e=qh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ax(n){return n*Wr}function Tx(n){return n*ir}function wx(n){return(n&n-1)===0&&n!==0}function Rx(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Cx(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Px(n,e,t,i,s){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),u=a((e+i)/2),h=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),_=a((i-e)/2);switch(s){case"XYX":n.set(o*u,l*h,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*h,o*c);break;case"ZXZ":n.set(l*h,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function dt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Ix={DEG2RAD:Wr,RAD2DEG:ir,generateUUID:Rn,clamp:$e,euclideanModulo:wu,mapLinear:mx,inverseLerp:_x,lerp:Xr,damp:gx,pingpong:vx,smoothstep:xx,smootherstep:bx,randInt:yx,randFloat:Sx,randFloatSpread:Mx,seededRandom:Ex,degToRad:Ax,radToDeg:Tx,isPowerOfTwo:wx,ceilPowerOfTwo:Rx,floorPowerOfTwo:Cx,setQuaternionFromProperEuler:Px,normalize:dt,denormalize:Mn};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ye{constructor(e,t,i,s,r,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],_=i[8],g=s[0],m=s[3],p=s[6],A=s[1],E=s[4],b=s[7],C=s[2],P=s[5],R=s[8];return r[0]=a*g+o*A+l*C,r[3]=a*m+o*E+l*P,r[6]=a*p+o*b+l*R,r[1]=c*g+u*A+h*C,r[4]=c*m+u*E+h*P,r[7]=c*p+u*b+h*R,r[2]=d*g+f*A+_*C,r[5]=d*m+f*E+_*P,r[8]=d*p+f*b+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,_=t*h+i*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*c-u*i)*g,e[2]=(o*i-s*a)*g,e[3]=d*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new Ye;function im(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function oa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lx(){const n=oa("canvas");return n.style.display="block",n}const jh={};function Ls(n){n in jh||(jh[n]=!0,console.warn(n))}function Dx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Nx(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ux(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kh=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$h=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ox(){const n={enabled:!0,workingColorSpace:Jt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=Ys(s.r),s.g=Ys(s.g),s.b=Ys(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?po:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Jt]:{primaries:e,whitePoint:i,transfer:po,toXYZ:Kh,fromXYZ:$h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Kh,fromXYZ:$h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),n}const et=Ox();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ys(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let _s;class Fx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_s===void 0&&(_s=oa("canvas")),_s.width=e.width,_s.height=e.height;const i=_s.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=_s}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=oa("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ui(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kx=0;class sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=Rn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(nl(s[a].image)):r.push(nl(s[a]))}else r=nl(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function nl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Fx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bx=0;class It extends hs{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=Ci,s=Ci,r=cn,a=oi,o=pn,l=fi,c=It.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Rn(),this.name="",this.source=new sm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case ho:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case ho:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Wp;It.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,i=0,s=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,b=(f+1)/2,C=(p+1)/2,P=(u+d)/4,R=(h+g)/4,F=(_+m)/4;return E>b&&E>C?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=P/i,r=R/i):b>C?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=P/s,r=F/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=F/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(h-g)/A,this.z=(d-u)/A,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zx extends hs{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new It(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cs extends zx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class rm extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Hx extends It{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[a+0],f=r[a+1],_=r[a+2],g=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==d||c!==f||u!==_){let m=1-o;const p=l*d+c*f+u*_+h*g,A=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const C=Math.sqrt(E),P=Math.atan2(C,p*A);m=Math.sin(m*P)/C,o=Math.sin(o*P)/C}const b=o*A;if(l=l*m+d*b,c=c*m+f*b,u=u*m+_*b,h=h*m+g*b,m===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=C,c*=C,u*=C,h*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,a){const o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+u*h+l*f-c*d,e[t+1]=l*_+u*d+c*h-o*f,e[t+2]=c*_+u*f+o*d-l*h,e[t+3]=u*_-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),h=o(r/2),d=l(i/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"YXZ":this._x=d*u*h+c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"ZXY":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h-d*f*_;break;case"ZYX":this._x=d*u*h-c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h+d*f*_;break;case"YZX":this._x=d*u*h+c*f*_,this._y=c*f*h+d*u*_,this._z=c*u*_-d*f*h,this._w=c*u*h-d*f*_;break;case"XZY":this._x=d*u*h-c*f*_,this._y=c*f*h-d*u*_,this._z=c*u*_+d*f*h,this._w=c*u*h+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),h=2*(r*i-a*t);return this.x=t+l*c+a*h-o*u,this.y=i+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return il.copy(this).projectOnVector(e),this.sub(il)}reflect(e){return this.sub(il.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const il=new B,Zh=new Cn;class mi{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xn):xn.fromBufferAttribute(r,a),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),va.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),va.copy(i.boundingBox)),va.applyMatrix4(e.matrixWorld),this.union(va)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vr),xa.subVectors(this.max,vr),gs.subVectors(e.a,vr),vs.subVectors(e.b,vr),xs.subVectors(e.c,vr),gi.subVectors(vs,gs),vi.subVectors(xs,vs),Xi.subVectors(gs,xs);let t=[0,-gi.z,gi.y,0,-vi.z,vi.y,0,-Xi.z,Xi.y,gi.z,0,-gi.x,vi.z,0,-vi.x,Xi.z,0,-Xi.x,-gi.y,gi.x,0,-vi.y,vi.x,0,-Xi.y,Xi.x,0];return!sl(t,gs,vs,xs,xa)||(t=[1,0,0,0,1,0,0,0,1],!sl(t,gs,vs,xs,xa))?!1:(ba.crossVectors(gi,vi),t=[ba.x,ba.y,ba.z],sl(t,gs,vs,xs,xa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new B,new B,new B,new B,new B,new B,new B,new B],xn=new B,va=new mi,gs=new B,vs=new B,xs=new B,gi=new B,vi=new B,Xi=new B,vr=new B,xa=new B,ba=new B,Yi=new B;function sl(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Yi.fromArray(n,r);const o=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=t.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Vx=new mi,xr=new B,rl=new B;class Wn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xr.subVectors(e,this.center);const t=xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(xr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xr.copy(e.center).add(rl)),this.expandByPoint(xr.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new B,al=new B,ya=new B,xi=new B,ol=new B,Sa=new B,ll=new B;class Do{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){al.copy(e).add(t).multiplyScalar(.5),ya.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(al);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ya),o=xi.dot(this.direction),l=-xi.dot(ya),c=xi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,_;if(u>0)if(h=a*l-o,d=a*o-l,_=r*u,h>=0)if(d>=-_)if(d<=_){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(al).addScaledVector(ya,d),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,s,r){ol.subVectors(t,e),Sa.subVectors(i,e),ll.crossVectors(ol,Sa);let a=this.direction.dot(ll),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);const l=o*this.direction.dot(Sa.crossVectors(xi,Sa));if(l<0)return null;const c=o*this.direction.dot(ol.cross(xi));if(c<0||l+c>a)return null;const u=-o*xi.dot(ll);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,s,r,a,o,l,c,u,h,d,f,_,g,m){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,h,d,f,_,g,m)}set(e,t,i,s,r,a,o,l,c,u,h,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/bs.setFromMatrixColumn(e,0).length(),r=1/bs.setFromMatrixColumn(e,1).length(),a=1/bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-o*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d+g*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-_,t[6]=g+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,_=c*u,g=c*h;t[0]=d-g*o,t[4]=-a*h,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,_=o*u,g=o*h;t[0]=l*u,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*h,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-d*h,t[8]=_*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+_,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*l,f=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-_,t[2]=_*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gx,e,Wx)}lookAt(e,t,i){const s=this.elements;return sn.subVectors(e,t),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),bi.crossVectors(i,sn),bi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),bi.crossVectors(i,sn)),bi.normalize(),Ma.crossVectors(sn,bi),s[0]=bi.x,s[4]=Ma.x,s[8]=sn.x,s[1]=bi.y,s[5]=Ma.y,s[9]=sn.y,s[2]=bi.z,s[6]=Ma.z,s[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],_=i[2],g=i[6],m=i[10],p=i[14],A=i[3],E=i[7],b=i[11],C=i[15],P=s[0],R=s[4],F=s[8],T=s[12],M=s[1],L=s[5],te=s[9],K=s[13],ae=s[2],oe=s[6],J=s[10],ee=s[14],V=s[3],ge=s[7],be=s[11],Re=s[15];return r[0]=a*P+o*M+l*ae+c*V,r[4]=a*R+o*L+l*oe+c*ge,r[8]=a*F+o*te+l*J+c*be,r[12]=a*T+o*K+l*ee+c*Re,r[1]=u*P+h*M+d*ae+f*V,r[5]=u*R+h*L+d*oe+f*ge,r[9]=u*F+h*te+d*J+f*be,r[13]=u*T+h*K+d*ee+f*Re,r[2]=_*P+g*M+m*ae+p*V,r[6]=_*R+g*L+m*oe+p*ge,r[10]=_*F+g*te+m*J+p*be,r[14]=_*T+g*K+m*ee+p*Re,r[3]=A*P+E*M+b*ae+C*V,r[7]=A*R+E*L+b*oe+C*ge,r[11]=A*F+E*te+b*J+C*be,r[15]=A*T+E*K+b*ee+C*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*h-s*c*h-r*o*d+i*c*d+s*o*f-i*l*f)+g*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+i*a*f+r*o*u-i*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-i*a*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],A=h*m*c-g*d*c+g*l*f-o*m*f-h*l*p+o*d*p,E=_*d*c-u*m*c-_*l*f+a*m*f+u*l*p-a*d*p,b=u*g*c-_*h*c+_*o*f-a*g*f-u*o*p+a*h*p,C=_*h*l-u*g*l-_*o*d+a*g*d+u*o*m-a*h*m,P=t*A+i*E+s*b+r*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/P;return e[0]=A*R,e[1]=(g*d*r-h*m*r-g*s*f+i*m*f+h*s*p-i*d*p)*R,e[2]=(o*m*r-g*l*r+g*s*c-i*m*c-o*s*p+i*l*p)*R,e[3]=(h*l*r-o*d*r-h*s*c+i*d*c+o*s*f-i*l*f)*R,e[4]=E*R,e[5]=(u*m*r-_*d*r+_*s*f-t*m*f-u*s*p+t*d*p)*R,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*p-t*l*p)*R,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*R,e[8]=b*R,e[9]=(_*h*r-u*g*r-_*i*f+t*g*f+u*i*p-t*h*p)*R,e[10]=(a*g*r-_*o*r+_*i*c-t*g*c-a*i*p+t*o*p)*R,e[11]=(u*o*r-a*h*r-u*i*c+t*h*c+a*i*f-t*o*f)*R,e[12]=C*R,e[13]=(u*g*s-_*h*s+_*i*d-t*g*d-u*i*m+t*h*m)*R,e[14]=(_*o*s-a*g*s-_*i*l+t*g*l+a*i*m-t*o*m)*R,e[15]=(a*h*s-u*o*s+u*i*l-t*h*l-a*i*d+t*o*d)*R,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,_=r*h,g=a*u,m=a*h,p=o*h,A=l*c,E=l*u,b=l*h,C=i.x,P=i.y,R=i.z;return s[0]=(1-(g+p))*C,s[1]=(f+b)*C,s[2]=(_-E)*C,s[3]=0,s[4]=(f-b)*P,s[5]=(1-(d+p))*P,s[6]=(m+A)*P,s[7]=0,s[8]=(_+E)*R,s[9]=(m-A)*R,s[10]=(1-(d+g))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=bs.set(s[0],s[1],s[2]).length();const a=bs.set(s[4],s[5],s[6]).length(),o=bs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],bn.copy(this);const c=1/r,u=1/a,h=1/o;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=u,bn.elements[5]*=u,bn.elements[6]*=u,bn.elements[8]*=h,bn.elements[9]*=h,bn.elements[10]*=h,t.setFromRotationMatrix(bn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=li){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s);let f,_;if(o===li)f=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===mo)f=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=li){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(a-r),d=(t+e)*c,f=(i+s)*u;let _,g;if(o===li)_=(a+r)*h,g=-2*h;else if(o===mo)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bs=new B,bn=new qe,Gx=new B(0,0,0),Wx=new B(1,1,1),bi=new B,Ma=new B,sn=new B,Jh=new qe,Qh=new Cn;class Gn{constructor(e=0,t=0,i=0,s=Gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Jh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qh.setFromEuler(this),this.setFromQuaternion(Qh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gn.DEFAULT_ORDER="XYZ";class am{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xx=0;const ed=new B,ys=new Cn,Qn=new qe,Ea=new B,br=new B,Yx=new B,qx=new Cn,td=new B(1,0,0),nd=new B(0,1,0),id=new B(0,0,1),sd={type:"added"},jx={type:"removed"},Ss={type:"childadded",child:null},cl={type:"childremoved",child:null};class xt extends hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new B,t=new Gn,i=new Cn,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Ye}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new am,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.multiply(ys),this}rotateOnWorldAxis(e,t){return ys.setFromAxisAngle(e,t),this.quaternion.premultiply(ys),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ea.copy(e):Ea.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(br,Ea,this.up):Qn.lookAt(Ea,br,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ys.setFromRotationMatrix(Qn),this.quaternion.premultiply(ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sd),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jx),cl.child=e,this.dispatchEvent(cl),cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sd),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,e,Yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}xt.DEFAULT_UP=new B(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new B,ei=new B,ul=new B,ti=new B,Ms=new B,Es=new B,rd=new B,hl=new B,dl=new B,fl=new B,pl=new it,ml=new it,_l=new it;class En{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),yn.subVectors(e,t),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){yn.subVectors(s,t),ei.subVectors(i,t),ul.subVectors(e,t);const a=yn.dot(yn),o=yn.dot(ei),l=yn.dot(ul),c=ei.dot(ei),u=ei.dot(ul),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,_=(a*u-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return pl.setScalar(0),ml.setScalar(0),_l.setScalar(0),pl.fromBufferAttribute(e,t),ml.fromBufferAttribute(e,i),_l.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(pl,r.x),a.addScaledVector(ml,r.y),a.addScaledVector(_l,r.z),a}static isFrontFacing(e,t,i,s){return yn.subVectors(i,t),ei.subVectors(e,t),yn.cross(ei).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),yn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return En.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let a,o;Ms.subVectors(s,i),Es.subVectors(r,i),hl.subVectors(e,i);const l=Ms.dot(hl),c=Es.dot(hl);if(l<=0&&c<=0)return t.copy(i);dl.subVectors(e,s);const u=Ms.dot(dl),h=Es.dot(dl);if(u>=0&&h<=u)return t.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ms,a);fl.subVectors(e,r);const f=Ms.dot(fl),_=Es.dot(fl);if(_>=0&&f<=_)return t.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Es,o);const m=u*_-f*h;if(m<=0&&h-u>=0&&f-_>=0)return rd.subVectors(r,s),o=(h-u)/(h-u+(f-_)),t.copy(s).addScaledVector(rd,o);const p=1/(m+g+d);return a=g*p,o=d*p,t.copy(i).addScaledVector(Ms,a).addScaledVector(Es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const om={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function gl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}let Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=wu(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=gl(a,r,e+1/3),this.g=gl(a,r,e),this.b=gl(a,r,e-1/3)}return et.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const i=om[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return et.fromWorkingColorSpace(Bt.copy(this),e),Math.round($e(Bt.r*255,0,255))*65536+Math.round($e(Bt.g*255,0,255))*256+Math.round($e(Bt.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,s=Bt.g,r=Bt.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=Ut){et.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,s=Bt.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+t,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(yi),e.getHSL(Aa);const i=Xr(yi.h,Aa.h,t),s=Xr(yi.s,Aa.s,t),r=Xr(yi.l,Aa.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Bt=new Ge;Ge.NAMES=om;let Kx=0;class Pn extends hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=Ws,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jl,this.blendDst=Ql,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ms,this.stencilZFail=ms,this.stencilZPass=ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jl&&(i.blendSrc=this.blendSrc),this.blendDst!==Ql&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ms&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ms&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ms&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class is extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=Gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new B,Ta=new Je;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oc,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oc&&(e.usage=this.usage),e}}class lm extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class cm extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hi extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $x=0;const dn=new qe,vl=new xt,As=new B,rn=new mi,yr=new mi,Ct=new B;class Xn extends hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(im(e)?cm:lm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,i){return dn.makeTranslation(e,t,i),this.applyMatrix4(dn),this}scale(e,t,i){return dn.makeScale(e,t,i),this.applyMatrix4(dn),this}lookAt(e){return vl.lookAt(e),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new hi(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];yr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(rn.min,yr.min),rn.expandByPoint(Ct),Ct.addVectors(rn.max,yr.max),rn.expandByPoint(Ct)):(rn.expandByPoint(yr.min),rn.expandByPoint(yr.max))}rn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(As.fromBufferAttribute(e,c),Ct.add(As)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new B,l[F]=new B;const c=new B,u=new B,h=new B,d=new Je,f=new Je,_=new Je,g=new B,m=new B;function p(F,T,M){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,M),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,T),_.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),_.sub(d);const L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(h,-f.y).multiplyScalar(L),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(L),o[F].add(g),o[T].add(g),o[M].add(g),l[F].add(m),l[T].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let F=0,T=A.length;F<T;++F){const M=A[F],L=M.start,te=M.count;for(let K=L,ae=L+te;K<ae;K+=3)p(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const E=new B,b=new B,C=new B,P=new B;function R(F){C.fromBufferAttribute(s,F),P.copy(C);const T=o[F];E.copy(T),E.sub(C.multiplyScalar(C.dot(T))).normalize(),b.crossVectors(P,T);const L=b.dot(l[F])<0?-1:1;a.setXYZW(F,E.x,E.y,E.z,L)}for(let F=0,T=A.length;F<T;++F){const M=A[F],L=M.start,te=M.count;for(let K=L,ae=L+te;K<ae;K+=3)R(e.getX(K+0)),R(e.getX(K+1)),R(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?f=l[g]*o.data.stride+o.offset:f=l[g]*u;for(let p=0;p<u;p++)d[_++]=c[f++]}return new Zt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xn,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ad=new qe,qi=new Do,wa=new Wn,od=new B,Ra=new B,Ca=new B,Pa=new B,xl=new B,Ia=new B,ld=new B,La=new B;class en extends xt{constructor(e=new Xn,t=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ia.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],h=r[l];u!==0&&(xl.fromBufferAttribute(h,e),a?Ia.addScaledVector(xl,u):Ia.addScaledVector(xl.sub(t),u))}t.add(Ia)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wa.copy(i.boundingSphere),wa.applyMatrix4(r),qi.copy(e.ray).recast(e.near),!(wa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(wa,od)===null||qi.origin.distanceToSquared(od)>(e.far-e.near)**2))&&(ad.copy(r).invert(),qi.copy(e.ray).applyMatrix4(ad),!(i.boundingBox!==null&&qi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],A=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=A,C=E;b<C;b+=3){const P=o.getX(b),R=o.getX(b+1),F=o.getX(b+2);s=Da(this,p,e,i,c,u,h,P,R,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const A=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=Da(this,a,e,i,c,u,h,A,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=a[m.materialIndex],A=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=A,C=E;b<C;b+=3){const P=b,R=b+1,F=b+2;s=Da(this,p,e,i,c,u,h,P,R,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const A=m,E=m+1,b=m+2;s=Da(this,a,e,i,c,u,h,A,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Zx(n,e,t,i,s,r,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===di,o),l===null)return null;La.copy(o),La.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(La);return c<t.near||c>t.far?null:{distance:c,point:La.clone(),object:n}}function Da(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Ra),n.getVertexPosition(l,Ca),n.getVertexPosition(c,Pa);const u=Zx(n,e,t,i,Ra,Ca,Pa,ld);if(u){const h=new B;En.getBarycoord(ld,Ra,Ca,Pa,h),s&&(u.uv=En.getInterpolatedAttribute(s,o,l,c,h,new Je)),r&&(u.uv1=En.getInterpolatedAttribute(r,o,l,c,h,new Je)),a&&(u.normal=En.getInterpolatedAttribute(a,o,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new B,materialIndex:0};En.getNormal(Ra,Ca,Pa,d.normal),u.face=d,u.barycoord=h}return u}class cr extends Xn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new hi(c,3)),this.setAttribute("normal",new hi(u,3)),this.setAttribute("uv",new hi(h,2));function _(g,m,p,A,E,b,C,P,R,F,T){const M=b/R,L=C/F,te=b/2,K=C/2,ae=P/2,oe=R+1,J=F+1;let ee=0,V=0;const ge=new B;for(let be=0;be<J;be++){const Re=be*L-K;for(let De=0;De<oe;De++){const Qe=De*M-te;ge[g]=Qe*A,ge[m]=Re*E,ge[p]=ae,c.push(ge.x,ge.y,ge.z),ge[g]=0,ge[m]=0,ge[p]=P>0?1:-1,u.push(ge.x,ge.y,ge.z),h.push(De/R),h.push(1-be/F),ee+=1}}for(let be=0;be<F;be++)for(let Re=0;Re<R;Re++){const De=d+Re+oe*be,Qe=d+Re+oe*(be+1),ne=d+(Re+1)+oe*(be+1),_e=d+(Re+1)+oe*be;l.push(De,Qe,_e),l.push(Qe,ne,_e),V+=6}o.addGroup(f,V,T),f+=V,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=sr(n[t]);for(const s in i)e[s]=i[s]}return e}function Jx(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function um(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Qx={clone:sr,merge:qt};var eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sr(e.uniforms),this.uniformsGroups=Jx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hm extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new B,cd=new Je,ud=new Je;class Kt extends hm{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,cd,ud),t.subVectors(ud,cd)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ts=-90,ws=1;class nb extends xt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Kt(Ts,ws,e,t);s.layers=this.layers,this.add(s);const r=new Kt(Ts,ws,e,t);r.layers=this.layers,this.add(r);const a=new Kt(Ts,ws,e,t);a.layers=this.layers,this.add(a);const o=new Kt(Ts,ws,e,t);o.layers=this.layers,this.add(o);const l=new Kt(Ts,ws,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Ts,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class dm extends It{constructor(e,t,i,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Js,super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ib extends cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new dm(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cr(5,5,5),r=new Ni({name:"CubemapFromEquirect",uniforms:sr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Li});r.uniforms.tEquirect.value=t;const a=new en(s,r),o=t.minFilter;return t.minFilter===oi&&(t.minFilter=cn),new nb(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}}class sb extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rb{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Oc,this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new B;class Ru{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Mn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=dt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),i=dt(i,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Zt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ru(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const hd=new B,dd=new it,fd=new it,ab=new B,pd=new qe,Na=new B,bl=new Wn,md=new qe,yl=new Do;class ob extends en{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Wh,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new mi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Na),this.boundingBox.expandByPoint(Na)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Wn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Na),this.boundingSphere.expandByPoint(Na)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(s),e.ray.intersectsSphere(bl)!==!1&&(md.copy(s).invert(),yl.copy(e.ray).applyMatrix4(md),!(this.boundingBox!==null&&yl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,yl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new it,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Wh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Qv?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;dd.fromBufferAttribute(s.attributes.skinIndex,e),fd.fromBufferAttribute(s.attributes.skinWeight,e),hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=fd.getComponent(r);if(a!==0){const o=dd.getComponent(r);pd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(ab.copy(hd).applyMatrix4(pd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class fm extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class pm extends It{constructor(e=null,t=1,i=1,s,r,a,o,l,c=$t,u=$t,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new qe,lb=new qe;class Cu{constructor(e=[],t=[]){this.uuid=Rn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:lb;_d.multiplyMatrices(o,t[r]),_d.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Cu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new pm(t,e,e,pn,Tn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new fm),this.bones.push(a),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=i[s];e.boneInverses.push(o.toArray())}return e}}class Fc extends Zt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Rs=new qe,gd=new qe,Ua=[],vd=new mi,cb=new qe,Sr=new en,Mr=new Wn;class ub extends en{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Fc(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,cb)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new mi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),vd.copy(e.boundingBox).applyMatrix4(Rs),this.boundingBox.union(vd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Rs),Mr.copy(e.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(Mr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Sr.geometry=this.geometry,Sr.material=this.material,Sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Mr.copy(this.boundingSphere),Mr.applyMatrix4(i),e.ray.intersectsSphere(Mr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Rs),gd.multiplyMatrices(i,Rs),Sr.matrixWorld=gd,Sr.raycast(e,Ua);for(let a=0,o=Ua.length;a<o;a++){const l=Ua[a];l.instanceId=r,l.object=this,t.push(l)}Ua.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Fc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new pm(new Float32Array(s*this.count),s,this.count,yu,Tn));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Sl=new B,hb=new B,db=new Ye;class Qi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Sl.subVectors(i,t).cross(hb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||db.getNormalMatrix(e),s=this.coplanarPoint(Sl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Wn,Oa=new B;class Pu{constructor(e=new Qi,t=new Qi,i=new Qi,s=new Qi,r=new Qi,a=new Qi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=li){const i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],f=s[8],_=s[9],g=s[10],m=s[11],p=s[12],A=s[13],E=s[14],b=s[15];if(i[0].setComponents(l-r,d-c,m-f,b-p).normalize(),i[1].setComponents(l+r,d+c,m+f,b+p).normalize(),i[2].setComponents(l+a,d+u,m+_,b+A).normalize(),i[3].setComponents(l-a,d-u,m-_,b-A).normalize(),i[4].setComponents(l-o,d-h,m-g,b-E).normalize(),t===li)i[5].setComponents(l+o,d+h,m+g,b+E).normalize();else if(t===mo)i[5].setComponents(o,h,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Oa.x=s.normal.x>0?e.max.x:e.min.x,Oa.y=s.normal.y>0?e.max.y:e.min.y,Oa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mm extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _o=new B,go=new B,xd=new qe,Er=new Do,Fa=new Wn,Ml=new B,bd=new B;class Iu extends xt{constructor(e=new Xn,t=new mm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)_o.fromBufferAttribute(t,s-1),go.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=_o.distanceTo(go);e.setAttribute("lineDistance",new hi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),Fa.radius+=r,e.ray.intersectsSphere(Fa)===!1)return;xd.copy(s).invert(),Er.copy(e.ray).applyMatrix4(xd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const p=u.getX(g),A=u.getX(g+1),E=ka(this,e,Er,l,p,A);E&&t.push(E)}if(this.isLineLoop){const g=u.getX(_-1),m=u.getX(f),p=ka(this,e,Er,l,g,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=f,m=_-1;g<m;g+=c){const p=ka(this,e,Er,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=ka(this,e,Er,l,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ka(n,e,t,i,s,r){const a=n.geometry.attributes.position;if(_o.fromBufferAttribute(a,s),go.fromBufferAttribute(a,r),t.distanceSqToSegment(_o,go,Ml,bd)>i)return;Ml.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ml);if(!(l<e.near||l>e.far))return{distance:l,point:bd.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const yd=new B,Sd=new B;class fb extends Iu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)yd.fromBufferAttribute(t,s),Sd.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+yd.distanceTo(Sd);e.setAttribute("lineDistance",new hi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pb extends Iu{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _m extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Md=new qe,kc=new Do,Ba=new Wn,za=new B;class mb extends xt{constructor(e=new Xn,t=new _m){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,e.ray.intersectsSphere(Ba)===!1)return;Md.copy(s).invert(),kc.copy(e.ray).applyMatrix4(Md);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);za.fromBufferAttribute(h,m),Ed(za,m,l,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let _=d,g=f;_<g;_++)za.fromBufferAttribute(h,_),Ed(za,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ed(n,e,t,i,s,r,a){const o=kc.distanceSqToPoint(n);if(o<t){const l=new B;kc.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ss extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class gm extends It{constructor(e,t,i,s,r,a,o,l,c,u=Xs){if(u!==Xs&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xs&&(i=ls),i===void 0&&u===nr&&(i=tr),super(null,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:$t,this.minFilter=l!==void 0?l:$t,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class No extends Xn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<u;p++){const A=p*d-a;for(let E=0;E<c;E++){const b=E*h-r;_.push(b,-A,0),g.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<o;A++){const E=A+c*p,b=A+c*(p+1),C=A+1+c*(p+1),P=A+1+c*p;f.push(E,b,P),f.push(b,C,P)}this.setIndex(f),this.setAttribute("position",new hi(_,3)),this.setAttribute("normal",new hi(g,3)),this.setAttribute("uv",new hi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new No(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lu extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends Lu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class _b extends Pn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Tu,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class gb extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vb extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Ha(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function xb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function bb(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function Ad(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=n[o+l]}return s}function vm(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=n[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=n[s++];while(r!==void 0)}class da{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yb extends da{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Us,endingEnd:Us}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Os:r=e,o=2*t-i;break;case fo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Os:a=e,l=2*i-t;break;case fo:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(i-t)/(s-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,A=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,E=(-1-f)*m+(1.5+f)*g+.5*_,b=f*m-f*g;for(let C=0;C!==o;++C)r[C]=p*a[u+C]+A*a[c+C]+E*a[l+C]+b*a[h+C];return r}}class xm extends da{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}}class Sb extends da{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ha(t,this.TimeBufferType),this.values=Ha(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ha(e.times,Array),values:Ha(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Sb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ra:t=this.InterpolantFactoryMethodDiscrete;break;case aa:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&xb(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===el,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{const h=o*i,d=h-i,f=h+i;for(let _=0;_!==i;++_){const g=t[h+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=aa;class ur extends qn{constructor(e,t,i){super(e,t,i)}}ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=ra;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;class bm extends qn{}bm.prototype.ValueTypeName="color";class rr extends qn{}rr.prototype.ValueTypeName="number";class Mb extends da{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Cn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class ar extends qn{InterpolantFactoryMethodLinear(e){return new Mb(this.times,this.values,this.getValueSize(),e)}}ar.prototype.ValueTypeName="quaternion";ar.prototype.InterpolantFactoryMethodSmooth=void 0;class hr extends qn{constructor(e,t,i){super(e,t,i)}}hr.prototype.ValueTypeName="string";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=ra;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;class or extends qn{}or.prototype.ValueTypeName="vector";class Bc{constructor(e="",t=-1,i=[],s=Au){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Rn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Ab(i[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const u=bb(l);l=Ad(l,1,u),c=Ad(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new rr(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,d,f,_,g){if(f.length!==0){const m=[],p=[];vm(f,m,p,_),m.length!==0&&g.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let A=0;A!==d[_].morphTargets.length;++A){const E=d[_];m.push(E.time),p.push(E.morphTarget===g?1:0)}s.push(new rr(".morphTargetInfluence["+g+"]",m,p))}l=f.length*a}else{const f=".bones["+t[h].name+"]";i(or,f+".position",d,"pos",s),i(ar,f+".quaternion",d,"rot",s),i(or,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Eb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return rr;case"vector":case"vector2":case"vector3":case"vector4":return or;case"color":return bm;case"quaternion":return ar;case"bool":case"boolean":return ur;case"string":return hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function Ab(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Eb(n.type);if(n.times===void 0){const t=[],i=[];vm(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Pi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Tb{constructor(e,t,i){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],_=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return _}return null}}}const wb=new Tb;class dr{constructor(e){this.manager=e!==void 0?e:wb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}dr.DEFAULT_MATERIAL_NAME="__DEFAULT";const ni={};class Rb extends Error{constructor(e,t){super(e),this.response=t}}class ym extends dr{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Pi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ni[e]!==void 0){ni[e].push({onLoad:t,onProgress:i,onError:s});return}ni[e]=[],ni[e].push({onLoad:t,onProgress:i,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ni[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){A();function A(){h.read().then(({done:E,value:b})=>{if(E)p.close();else{g+=b.byteLength;const C=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let P=0,R=u.length;P<R;P++){const F=u[P];F.onProgress&&F.onProgress(C)}p.enqueue(b),A()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Rb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{Pi.add(e,c);const u=ni[e];delete ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete ni[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Cb extends dr{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Pi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=oa("img");function l(){u(),Pi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Sm extends dr{constructor(e){super(e)}load(e,t,i,s){const r=new It,a=new Cb(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class Uo extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const El=new qe,Td=new B,wd=new B;class Du{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pu,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Td.setFromMatrixPosition(e.matrixWorld),t.position.copy(Td),wd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wd),t.updateMatrixWorld(),El.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(El)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Pb extends Du{constructor(){super(new Kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=ir*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ib extends Uo{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Rd=new qe,Ar=new B,Al=new B;class Lb extends Du{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ar.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ar),Al.copy(i.position),Al.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Al),i.updateMatrixWorld(),s.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Rd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd)}}class Db extends Uo{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Nu extends hm{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Nb extends Du{constructor(){super(new Nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mm extends Uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new Nb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ub extends Uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ob extends dr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Pi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Pi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Pi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Pi.add(e,l),r.manager.itemStart(e)}}class Fb extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kb{constructor(e,t,i){this.binding=e,this.valueSize=i;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,s=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,s,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,s=i*this._origIndex;e.getValue(t,s);for(let r=i,a=s;r!==a;++r)t[r]=t[s+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,s){Cn.slerpFlat(e,t,e,t,e,i,s)}_slerpAdditive(e,t,i,s,r){const a=this._workIndex*r;Cn.multiplyQuaternionsFlat(e,a,e,t,e,i),Cn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,i,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*s}}_lerpAdditive(e,t,i,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*s}}}const Uu="\\[\\]\\.:\\/",Bb=new RegExp("["+Uu+"]","g"),Ou="[^"+Uu+"]",zb="[^"+Uu.replace("\\.","")+"]",Hb=/((?:WC+[\/:])*)/.source.replace("WC",Ou),Vb=/(WCOD+)?/.source.replace("WCOD",zb),Gb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ou),Wb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ou),Xb=new RegExp("^"+Hb+Vb+Gb+Wb+"$"),Yb=["material","materials","bones","map"];class qb{constructor(e,t,i){const s=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ct{constructor(e,t,i){this.path=t,this.parsedPath=i||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,i):new ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bb,"")}static parseTrackName(e){const t=Xb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);Yb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[s];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=qb;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jb{constructor(e,t,i=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Us,endingEnd:Us};for(let c=0;c!==a;++c){const u=r[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=tx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ix:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Au:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const s=i.evaluate(e)[0];t*=s,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let s=this.time+e,r=this._loopCount;const a=i===nx;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(i===ex){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,i){const s=this._interpolantSettings;i?(s.endingStart=Os,s.endingEnd=Os):(e?s.endingStart=this.zeroSlopeAtStart?Os:Us:s.endingStart=fo,t?s.endingEnd=this.zeroSlopeAtEnd?Os:Us:s.endingEnd=fo)}_scheduleFading(e,t,i){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const Kb=new Float32Array(1);class $b extends hs{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let _=u[f];if(_!==void 0)++_.referenceCount,a[h]=_;else{if(_=a[h],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;_=new kb(ct.create(i,f,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),a[h]=_}o[h].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,i)}const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],s=e._cacheIndex;i._cacheIndex=s,t[s]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,s=t.length;i!==s;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,s=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new xm(new Float32Array(2),new Float32Array(2),1,Kb),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?Bc.findByName(s,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Au),l!==void 0){const h=l.actionByRoot[r];if(h!==void 0&&h.blendMode===i)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new jb(this,a,t,i);return this._bindAction(u,c),this._addInactiveAction(u,o,r),u}existingAction(e,t){const i=t||this._root,s=i.uuid,r=typeof e=="string"?Bc.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(s,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,s=this._actionsByClip,r=s[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}function Cd(n,e,t,i){const s=Zb(i);switch(t){case Kp:return n*e;case Zp:return n*e;case Jp:return n*e*2;case yu:return n*e/s.components*s.byteLength;case Su:return n*e/s.components*s.byteLength;case Qp:return n*e*2/s.components*s.byteLength;case Mu:return n*e*2/s.components*s.byteLength;case $p:return n*e*3/s.components*s.byteLength;case pn:return n*e*4/s.components*s.byteLength;case Eu:return n*e*4/s.components*s.byteLength;case Ja:case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case uc:case dc:return Math.max(n,16)*Math.max(e,8)/4;case cc:case hc:return Math.max(n,8)*Math.max(e,8)/2;case fc:case pc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case mc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case yc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ac:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case wc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case no:case Pc:case Ic:return Math.ceil(n/4)*Math.ceil(e/4)*16;case em:case Lc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dc:case Nc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zb(n){switch(n){case fi:case Yp:return{byteLength:1,components:1};case sa:case qp:case ha:return{byteLength:2,components:1};case xu:case bu:return{byteLength:2,components:4};case ls:case vu:case Tn:return{byteLength:4,components:1};case jp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Em(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Jb(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,o),h.length===0)n.bufferSubData(c,0,u);else{h.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<h.length;f++){const _=h[d],g=h[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,_=h.length;f<_;f++){const g=h[f];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ey=`#ifdef USE_ALPHAHASH
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
#endif`,ty=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ny=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ry=`#ifdef USE_AOMAP
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
#endif`,ay=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oy=`#ifdef USE_BATCHING
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
#endif`,ly=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dy=`#ifdef USE_IRIDESCENCE
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
#endif`,fy=`#ifdef USE_BUMPMAP
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
#endif`,py=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,my=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sy=`#define PI 3.141592653589793
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
} // validated`,My=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ey=`vec3 transformedNormal = objectNormal;
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
#endif`,Ay=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Py=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Iy=`#ifdef USE_ENVMAP
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
#endif`,Ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dy=`#ifdef USE_ENVMAP
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
#endif`,Ny=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
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
#endif`,Oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ky=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,By=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zy=`#ifdef USE_GRADIENTMAP
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
}`,Hy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wy=`uniform bool receiveShadow;
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
#endif`,Xy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ky=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$y=`PhysicalMaterial material;
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
#endif`,Zy=`struct PhysicalMaterial {
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
}`,Jy=`
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
#endif`,Qy=`#if defined( RE_IndirectDiffuse )
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lS=`#if defined( USE_POINTS_UV )
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
#endif`,cS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`#ifdef USE_MORPHTARGETS
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
#endif`,mS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_S=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yS=`#ifdef USE_NORMALMAP
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
#endif`,SS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ES=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,TS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,FS=`float getShadowMask() {
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
}`,kS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,zS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,VS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YS=`#ifdef USE_TRANSMISSION
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
#endif`,qS=`#ifdef USE_TRANSMISSION
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QS=`uniform sampler2D t2D;
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
}`,eM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
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
}`,rM=`#if DEPTH_PACKING == 3200
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
}`,aM=`#define DISTANCE
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
}`,oM=`#define DISTANCE
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
}`,lM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uM=`uniform float scale;
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
}`,hM=`uniform vec3 diffuse;
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
}`,dM=`#include <common>
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
}`,fM=`uniform vec3 diffuse;
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
}`,pM=`#define LAMBERT
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
}`,mM=`#define LAMBERT
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
}`,_M=`#define MATCAP
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
}`,gM=`#define MATCAP
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
}`,vM=`#define NORMAL
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
}`,xM=`#define NORMAL
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
}`,bM=`#define PHONG
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
}`,yM=`#define PHONG
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
}`,SM=`#define STANDARD
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
}`,MM=`#define STANDARD
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
}`,EM=`#define TOON
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
}`,AM=`#define TOON
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
}`,TM=`uniform float size;
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
}`,wM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,CM=`uniform vec3 color;
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
}`,PM=`uniform float rotation;
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
}`,IM=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Qb,alphahash_pars_fragment:ey,alphamap_fragment:ty,alphamap_pars_fragment:ny,alphatest_fragment:iy,alphatest_pars_fragment:sy,aomap_fragment:ry,aomap_pars_fragment:ay,batching_pars_vertex:oy,batching_vertex:ly,begin_vertex:cy,beginnormal_vertex:uy,bsdfs:hy,iridescence_fragment:dy,bumpmap_pars_fragment:fy,clipping_planes_fragment:py,clipping_planes_pars_fragment:my,clipping_planes_pars_vertex:_y,clipping_planes_vertex:gy,color_fragment:vy,color_pars_fragment:xy,color_pars_vertex:by,color_vertex:yy,common:Sy,cube_uv_reflection_fragment:My,defaultnormal_vertex:Ey,displacementmap_pars_vertex:Ay,displacementmap_vertex:Ty,emissivemap_fragment:wy,emissivemap_pars_fragment:Ry,colorspace_fragment:Cy,colorspace_pars_fragment:Py,envmap_fragment:Iy,envmap_common_pars_fragment:Ly,envmap_pars_fragment:Dy,envmap_pars_vertex:Ny,envmap_physical_pars_fragment:Xy,envmap_vertex:Uy,fog_vertex:Oy,fog_pars_vertex:Fy,fog_fragment:ky,fog_pars_fragment:By,gradientmap_pars_fragment:zy,lightmap_pars_fragment:Hy,lights_lambert_fragment:Vy,lights_lambert_pars_fragment:Gy,lights_pars_begin:Wy,lights_toon_fragment:Yy,lights_toon_pars_fragment:qy,lights_phong_fragment:jy,lights_phong_pars_fragment:Ky,lights_physical_fragment:$y,lights_physical_pars_fragment:Zy,lights_fragment_begin:Jy,lights_fragment_maps:Qy,lights_fragment_end:eS,logdepthbuf_fragment:tS,logdepthbuf_pars_fragment:nS,logdepthbuf_pars_vertex:iS,logdepthbuf_vertex:sS,map_fragment:rS,map_pars_fragment:aS,map_particle_fragment:oS,map_particle_pars_fragment:lS,metalnessmap_fragment:cS,metalnessmap_pars_fragment:uS,morphinstance_vertex:hS,morphcolor_vertex:dS,morphnormal_vertex:fS,morphtarget_pars_vertex:pS,morphtarget_vertex:mS,normal_fragment_begin:_S,normal_fragment_maps:gS,normal_pars_fragment:vS,normal_pars_vertex:xS,normal_vertex:bS,normalmap_pars_fragment:yS,clearcoat_normal_fragment_begin:SS,clearcoat_normal_fragment_maps:MS,clearcoat_pars_fragment:ES,iridescence_pars_fragment:AS,opaque_fragment:TS,packing:wS,premultiplied_alpha_fragment:RS,project_vertex:CS,dithering_fragment:PS,dithering_pars_fragment:IS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:DS,shadowmap_pars_fragment:NS,shadowmap_pars_vertex:US,shadowmap_vertex:OS,shadowmask_pars_fragment:FS,skinbase_vertex:kS,skinning_pars_vertex:BS,skinning_vertex:zS,skinnormal_vertex:HS,specularmap_fragment:VS,specularmap_pars_fragment:GS,tonemapping_fragment:WS,tonemapping_pars_fragment:XS,transmission_fragment:YS,transmission_pars_fragment:qS,uv_pars_fragment:jS,uv_pars_vertex:KS,uv_vertex:$S,worldpos_vertex:ZS,background_vert:JS,background_frag:QS,backgroundCube_vert:eM,backgroundCube_frag:tM,cube_vert:nM,cube_frag:iM,depth_vert:sM,depth_frag:rM,distanceRGBA_vert:aM,distanceRGBA_frag:oM,equirect_vert:lM,equirect_frag:cM,linedashed_vert:uM,linedashed_frag:hM,meshbasic_vert:dM,meshbasic_frag:fM,meshlambert_vert:pM,meshlambert_frag:mM,meshmatcap_vert:_M,meshmatcap_frag:gM,meshnormal_vert:vM,meshnormal_frag:xM,meshphong_vert:bM,meshphong_frag:yM,meshphysical_vert:SM,meshphysical_frag:MM,meshtoon_vert:EM,meshtoon_frag:AM,points_vert:TM,points_frag:wM,shadow_vert:RM,shadow_frag:CM,sprite_vert:PM,sprite_frag:IM},xe={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},kn={basic:{uniforms:qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:qt([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:qt([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:qt([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new Ge(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:qt([xe.points,xe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:qt([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:qt([xe.common,xe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:qt([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:qt([xe.sprite,xe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:qt([xe.common,xe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:qt([xe.lights,xe.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};kn.physical={uniforms:qt([kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Va={r:0,b:0,g:0},Ki=new Gn,LM=new qe;function DM(n,e,t,i,s,r,a){const o=new Ge(0);let l=r===!0?0:1,c,u,h=null,d=0,f=null;function _(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function g(E){let b=!1;const C=_(E);C===null?p(o,l):C&&C.isColor&&(p(C,1),b=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(E,b){const C=_(b);C&&(C.isCubeTexture||C.mapping===Lo)?(u===void 0&&(u=new en(new cr(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:sr(kn.backgroundCube.uniforms),vertexShader:kn.backgroundCube.vertexShader,fragmentShader:kn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ki.copy(b.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(LM.makeRotationFromEuler(Ki)),u.material.toneMapped=et.getTransfer(C.colorSpace)!==ft,(h!==C||d!==C.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new en(new No(2,2),new Ni({name:"BackgroundMaterial",uniforms:sr(kn.background.uniforms),vertexShader:kn.background.vertexShader,fragmentShader:kn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=et.getTransfer(C.colorSpace)!==ft,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(h!==C||d!==C.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,h=C,d=C.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,b){E.getRGB(Va,um(n)),i.buffers.color.setClear(Va.r,Va.g,Va.b,b,a)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:g,addToRenderList:m,dispose:A}}function NM(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,a=!1;function o(M,L,te,K,ae){let oe=!1;const J=h(K,te,L);r!==J&&(r=J,c(r.object)),oe=f(M,K,te,ae),oe&&_(M,K,te,ae),ae!==null&&e.update(ae,n.ELEMENT_ARRAY_BUFFER),(oe||a)&&(a=!1,b(M,L,te,K),ae!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function h(M,L,te){const K=te.wireframe===!0;let ae=i[M.id];ae===void 0&&(ae={},i[M.id]=ae);let oe=ae[L.id];oe===void 0&&(oe={},ae[L.id]=oe);let J=oe[K];return J===void 0&&(J=d(l()),oe[K]=J),J}function d(M){const L=[],te=[],K=[];for(let ae=0;ae<t;ae++)L[ae]=0,te[ae]=0,K[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:te,attributeDivisors:K,object:M,attributes:{},index:null}}function f(M,L,te,K){const ae=r.attributes,oe=L.attributes;let J=0;const ee=te.getAttributes();for(const V in ee)if(ee[V].location>=0){const be=ae[V];let Re=oe[V];if(Re===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(Re=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(Re=M.instanceColor)),be===void 0||be.attribute!==Re||Re&&be.data!==Re.data)return!0;J++}return r.attributesNum!==J||r.index!==K}function _(M,L,te,K){const ae={},oe=L.attributes;let J=0;const ee=te.getAttributes();for(const V in ee)if(ee[V].location>=0){let be=oe[V];be===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(be=M.instanceColor));const Re={};Re.attribute=be,be&&be.data&&(Re.data=be.data),ae[V]=Re,J++}r.attributes=ae,r.attributesNum=J,r.index=K}function g(){const M=r.newAttributes;for(let L=0,te=M.length;L<te;L++)M[L]=0}function m(M){p(M,0)}function p(M,L){const te=r.newAttributes,K=r.enabledAttributes,ae=r.attributeDivisors;te[M]=1,K[M]===0&&(n.enableVertexAttribArray(M),K[M]=1),ae[M]!==L&&(n.vertexAttribDivisor(M,L),ae[M]=L)}function A(){const M=r.newAttributes,L=r.enabledAttributes;for(let te=0,K=L.length;te<K;te++)L[te]!==M[te]&&(n.disableVertexAttribArray(te),L[te]=0)}function E(M,L,te,K,ae,oe,J){J===!0?n.vertexAttribIPointer(M,L,te,ae,oe):n.vertexAttribPointer(M,L,te,K,ae,oe)}function b(M,L,te,K){g();const ae=K.attributes,oe=te.getAttributes(),J=L.defaultAttributeValues;for(const ee in oe){const V=oe[ee];if(V.location>=0){let ge=ae[ee];if(ge===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor)),ge!==void 0){const be=ge.normalized,Re=ge.itemSize,De=e.get(ge);if(De===void 0)continue;const Qe=De.buffer,ne=De.type,_e=De.bytesPerElement,Me=ne===n.INT||ne===n.UNSIGNED_INT||ge.gpuType===vu;if(ge.isInterleavedBufferAttribute){const D=ge.data,se=D.stride,ie=ge.offset;if(D.isInstancedInterleavedBuffer){for(let de=0;de<V.locationSize;de++)p(V.location+de,D.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let de=0;de<V.locationSize;de++)m(V.location+de);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let de=0;de<V.locationSize;de++)E(V.location+de,Re/V.locationSize,ne,be,se*_e,(ie+Re/V.locationSize*de)*_e,Me)}else{if(ge.isInstancedBufferAttribute){for(let D=0;D<V.locationSize;D++)p(V.location+D,ge.meshPerAttribute);M.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let D=0;D<V.locationSize;D++)m(V.location+D);n.bindBuffer(n.ARRAY_BUFFER,Qe);for(let D=0;D<V.locationSize;D++)E(V.location+D,Re/V.locationSize,ne,be,Re*_e,Re/V.locationSize*D*_e,Me)}}else if(J!==void 0){const be=J[ee];if(be!==void 0)switch(be.length){case 2:n.vertexAttrib2fv(V.location,be);break;case 3:n.vertexAttrib3fv(V.location,be);break;case 4:n.vertexAttrib4fv(V.location,be);break;default:n.vertexAttrib1fv(V.location,be)}}}}A()}function C(){F();for(const M in i){const L=i[M];for(const te in L){const K=L[te];for(const ae in K)u(K[ae].object),delete K[ae];delete L[te]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const te in L){const K=L[te];for(const ae in K)u(K[ae].object),delete K[ae];delete L[te]}delete i[M.id]}function R(M){for(const L in i){const te=i[L];if(te[M.id]===void 0)continue;const K=te[M.id];for(const ae in K)u(K[ae].object),delete K[ae];delete te[M.id]}}function F(){T(),a=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:m,disableUnusedAttributes:A}}function UM(n,e,t){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),t.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let _=0;_<h;_++)f+=u[_];t.update(f,i,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let g=0;g<h;g++)_+=u[g]*d[g];t.update(_,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function OM(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==pn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const F=R===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==fi&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Tn&&!F)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,P=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:C,maxSamples:P}}function FM(n){const e=this;let t=null,i=0,s=!1,r=!1;const a=new Qi,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||s;return s=d,i=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const _=h.clippingPlanes,g=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!s||_===null||_.length===0||r&&!m)r?u(null):c();else{const A=r?0:i,E=A*4;let b=p.clippingState||null;l.value=b,b=u(_,d,E,f);for(let C=0;C!==E;++C)b[C]=t[C];p.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,_){const g=h!==null?h.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,A=d.matrixWorldInverse;o.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==g;++E,b+=4)a.copy(h[E]).applyMatrix4(A,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function kM(n){let e=new WeakMap;function t(a,o){return o===oc?a.mapping=Js:o===lc&&(a.mapping=Qs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===oc||o===lc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ib(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Fs=4,Pd=[.125,.215,.35,.446,.526,.582],ns=20,Tl=new Nu,Id=new Ge;let wl=null,Rl=0,Cl=0,Pl=!1;const es=(1+Math.sqrt(5))/2,Cs=1/es,Ld=[new B(-es,Cs,0),new B(es,Cs,0),new B(-Cs,0,es),new B(Cs,0,es),new B(0,es,-Cs),new B(0,es,Cs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){wl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wl,Rl,Cl),this._renderer.xr.enabled=Pl,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Js||e.mapping===Qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget(),Rl=this._renderer.getActiveCubeFace(),Cl=this._renderer.getActiveMipmapLevel(),Pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:ha,format:pn,colorSpace:Jt,depthBuffer:!1},s=Nd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nd(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(r)),this._blurMaterial=zM(r,e,t)}return s}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Tl)}_sceneToCubeUV(e,t,i,s){const o=new Kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Id),u.toneMapping=Di,u.autoClear=!1;const f=new is({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),_=new en(new cr,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(Id),g=!0);for(let p=0;p<6;p++){const A=p%3;A===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):A===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const E=this._cubeSize;Ga(s,A*E,p>2?E:0,E,E),u.setRenderTarget(s),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Js||e.mapping===Qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ga(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Tl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ld[(s-r-1)%Ld.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new en(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ns-1),g=r/_,m=isFinite(r)?1+Math.floor(u*g):ns;m>ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ns}`);const p=[];let A=0;for(let R=0;R<ns;++R){const F=R/g,T=Math.exp(-F*F/2);p.push(T),R===0?A+=T:R<m&&(A+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-i;const b=this._sizeLods[s],C=3*b*(s>E-Fs?s-E+Fs:0),P=4*(this._cubeSize-b);Ga(t,C,P,3*b,2*b),l.setRenderTarget(t),l.render(h,Tl)}}function BM(n){const e=[],t=[],i=[];let s=n;const r=n-Fs+1+Pd.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>n-Fs?l=Pd[a-n+Fs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,_=6,g=3,m=2,p=1,A=new Float32Array(g*_*f),E=new Float32Array(m*_*f),b=new Float32Array(p*_*f);for(let P=0;P<f;P++){const R=P%3*2/3-1,F=P>2?0:-1,T=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];A.set(T,g*_*P),E.set(d,m*_*P);const M=[P,P,P,P,P,P];b.set(M,p*_*P)}const C=new Xn;C.setAttribute("position",new Zt(A,g)),C.setAttribute("uv",new Zt(E,m)),C.setAttribute("faceIndex",new Zt(b,p)),e.push(C),s>Fs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nd(n,e,t){const i=new cs(n,e,t);return i.texture.mapping=Lo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ga(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function zM(n,e,t){const i=new Float32Array(ns),s=new B(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Ud(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Od(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Fu(){return`

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
	`}function HM(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===oc||l===lc,u=l===Js||l===Qs;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Dd(n)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Dd(n)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function VM(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Ls("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function GM(n,e,t,i){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,_=h.attributes.position;let g=0;if(f!==null){const A=f.array;g=f.version;for(let E=0,b=A.length;E<b;E+=3){const C=A[E+0],P=A[E+1],R=A[E+2];d.push(C,P,P,R,R,C)}}else if(_!==void 0){const A=_.array;g=_.version;for(let E=0,b=A.length/3-1;E<b;E+=3){const C=E+0,P=E+1,R=E+2;d.push(C,P,P,R,R,C)}}else return;const m=new(im(d)?cm:lm)(d,1);m.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function WM(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,_){_!==0&&(n.drawElementsInstanced(i,f,r,d*a,_),t.update(f,i,_))}function u(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,i,1)}function h(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,g,0,_);let p=0;for(let A=0;A<_;A++)p+=f[A]*g[A];t.update(p,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function XM(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function YM(n,e,t){const i=new WeakMap,s=new it;function r(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let M=function(){F.dispose(),i.delete(o),o.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),g===!0&&(b=2),m===!0&&(b=3);let C=o.attributes.position.count*b,P=1;C>e.maxTextureSize&&(P=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*P*4*h),F=new rm(R,C,P,h);F.type=Tn,F.needsUpdate=!0;const T=b*4;for(let L=0;L<h;L++){const te=p[L],K=A[L],ae=E[L],oe=C*P*4*L;for(let J=0;J<te.count;J++){const ee=J*T;_===!0&&(s.fromBufferAttribute(te,J),R[oe+ee+0]=s.x,R[oe+ee+1]=s.y,R[oe+ee+2]=s.z,R[oe+ee+3]=0),g===!0&&(s.fromBufferAttribute(K,J),R[oe+ee+4]=s.x,R[oe+ee+5]=s.y,R[oe+ee+6]=s.z,R[oe+ee+7]=0),m===!0&&(s.fromBufferAttribute(ae,J),R[oe+ee+8]=s.x,R[oe+ee+9]=s.y,R[oe+ee+10]=s.z,R[oe+ee+11]=ae.itemSize===4?s.w:1)}}d={count:h,texture:F,size:new Je(C,P)},i.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const g=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function qM(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Am=new It,Fd=new gm(1,1),Tm=new rm,wm=new Hx,Rm=new dm,kd=[],Bd=[],zd=new Float32Array(16),Hd=new Float32Array(9),Vd=new Float32Array(4);function fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oo(n,e){let t=Bd[e];t===void 0&&(t=new Int32Array(e),Bd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function jM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function KM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function $M(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function ZM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function JM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Vd.set(i),n.uniformMatrix2fv(this.addr,!1,Vd),Rt(t,i)}}function QM(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Hd.set(i),n.uniformMatrix3fv(this.addr,!1,Hd),Rt(t,i)}}function eE(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;zd.set(i),n.uniformMatrix4fv(this.addr,!1,zd),Rt(t,i)}}function tE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function nE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function iE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function sE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function rE(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function oE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function lE(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function cE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fd.compareFunction=nm,r=Fd):r=Am,t.setTexture2D(e||r,s)}function uE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||wm,s)}function hE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Rm,s)}function dE(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Tm,s)}function fE(n){switch(n){case 5126:return jM;case 35664:return KM;case 35665:return $M;case 35666:return ZM;case 35674:return JM;case 35675:return QM;case 35676:return eE;case 5124:case 35670:return tE;case 35667:case 35671:return nE;case 35668:case 35672:return iE;case 35669:case 35673:return sE;case 5125:return rE;case 36294:return aE;case 36295:return oE;case 36296:return lE;case 35678:case 36198:case 36298:case 36306:case 35682:return cE;case 35679:case 36299:case 36307:return uE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return dE}}function pE(n,e){n.uniform1fv(this.addr,e)}function mE(n,e){const t=fr(e,this.size,2);n.uniform2fv(this.addr,t)}function _E(n,e){const t=fr(e,this.size,3);n.uniform3fv(this.addr,t)}function gE(n,e){const t=fr(e,this.size,4);n.uniform4fv(this.addr,t)}function vE(n,e){const t=fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xE(n,e){const t=fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bE(n,e){const t=fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function yE(n,e){n.uniform1iv(this.addr,e)}function SE(n,e){n.uniform2iv(this.addr,e)}function ME(n,e){n.uniform3iv(this.addr,e)}function EE(n,e){n.uniform4iv(this.addr,e)}function AE(n,e){n.uniform1uiv(this.addr,e)}function TE(n,e){n.uniform2uiv(this.addr,e)}function wE(n,e){n.uniform3uiv(this.addr,e)}function RE(n,e){n.uniform4uiv(this.addr,e)}function CE(n,e,t){const i=this.cache,s=e.length,r=Oo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Am,r[a])}function PE(n,e,t){const i=this.cache,s=e.length,r=Oo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||wm,r[a])}function IE(n,e,t){const i=this.cache,s=e.length,r=Oo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Rm,r[a])}function LE(n,e,t){const i=this.cache,s=e.length,r=Oo(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Tm,r[a])}function DE(n){switch(n){case 5126:return pE;case 35664:return mE;case 35665:return _E;case 35666:return gE;case 35674:return vE;case 35675:return xE;case 35676:return bE;case 5124:case 35670:return yE;case 35667:case 35671:return SE;case 35668:case 35672:return ME;case 35669:case 35673:return EE;case 5125:return AE;case 36294:return TE;case 36295:return wE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return PE;case 35680:case 36300:case 36308:case 36293:return IE;case 36289:case 36303:case 36311:case 36292:return LE}}class NE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=fE(t.type)}}class UE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DE(t.type)}}class OE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],i)}}}const Il=/(\w+)(\])?(\[|\.)?/g;function Gd(n,e){n.seq.push(e),n.map[e.id]=e}function FE(n,e,t){const i=n.name,s=i.length;for(Il.lastIndex=0;;){const r=Il.exec(i),a=Il.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Gd(t,c===void 0?new NE(o,n,e):new UE(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new OE(o),Gd(t,h)),t=h}}}class io{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);FE(r,a,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&i.push(a)}return i}}function Wd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const kE=37297;let BE=0;function zE(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Xd=new Ye;function HE(n){et._getMatrix(Xd,et.workingColorSpace,n);const e=`mat3( ${Xd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case po:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Yd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+zE(n.getShaderSource(e),a)}else return s}function VE(n,e){const t=HE(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function GE(n,e){let t;switch(e){case Yv:t="Linear";break;case qv:t="Reinhard";break;case jv:t="Cineon";break;case Kv:t="ACESFilmic";break;case Zv:t="AgX";break;case Jv:t="Neutral";break;case $v:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wa=new B;function WE(){et.getLuminanceCoefficients(Wa);const n=Wa.x.toFixed(4),e=Wa.y.toFixed(4),t=Wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XE(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Dr).join(`
`)}function YE(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qE(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Dr(n){return n!==""}function qd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jE=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(n){return n.replace(jE,$E)}const KE=new Map;function $E(n,e){let t=je[e];if(t===void 0){const i=KE.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return zc(t)}const ZE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(n){return n.replace(ZE,JE)}function JE(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $d(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function QE(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Vp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Av?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function eA(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Js:case Qs:e="ENVMAP_TYPE_CUBE";break;case Lo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function tA(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Qs:e="ENVMAP_MODE_REFRACTION";break}return e}function nA(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Gp:e="ENVMAP_BLENDING_MULTIPLY";break;case Wv:e="ENVMAP_BLENDING_MIX";break;case Xv:e="ENVMAP_BLENDING_ADD";break}return e}function iA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function sA(n,e,t,i){const s=n.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=QE(t),c=eA(t),u=tA(t),h=nA(t),d=iA(t),f=XE(t),_=YE(r),g=s.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Dr).join(`
`),p.length>0&&(p+=`
`)):(m=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Dr).join(`
`),p=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?je.tonemapping_pars_fragment:"",t.toneMapping!==Di?GE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,VE("linearToOutputTexel",t.outputColorSpace),WE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Dr).join(`
`)),a=zc(a),a=qd(a,t),a=jd(a,t),o=zc(o),o=qd(o,t),o=jd(o,t),a=Kd(a),o=Kd(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=A+m+a,b=A+p+o,C=Wd(s,s.VERTEX_SHADER,E),P=Wd(s,s.FRAGMENT_SHADER,b);s.attachShader(g,C),s.attachShader(g,P),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(L){if(n.debug.checkShaderErrors){const te=s.getProgramInfoLog(g).trim(),K=s.getShaderInfoLog(C).trim(),ae=s.getShaderInfoLog(P).trim();let oe=!0,J=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(oe=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,C,P);else{const ee=Yd(s,C,"vertex"),V=Yd(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+ee+`
`+V)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(K===""||ae==="")&&(J=!1);J&&(L.diagnostics={runnable:oe,programLog:te,vertexShader:{log:K,prefix:m},fragmentShader:{log:ae,prefix:p}})}s.deleteShader(C),s.deleteShader(P),F=new io(s,g),T=qE(s,g)}let F;this.getUniforms=function(){return F===void 0&&R(this),F};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(g,kE)),M},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BE++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=P,this}let rA=0;class aA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new oA(e),t.set(e,i)),i}}class oA{constructor(e){this.id=rA++,this.code=e,this.usedTimes=0}}function lA(n,e,t,i,s,r,a){const o=new am,l=new aA,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,M,L,te,K){const ae=te.fog,oe=K.geometry,J=T.isMeshStandardMaterial?te.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||J),V=ee&&ee.mapping===Lo?ee.image.height:null,ge=_[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const be=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Re=be!==void 0?be.length:0;let De=0;oe.morphAttributes.position!==void 0&&(De=1),oe.morphAttributes.normal!==void 0&&(De=2),oe.morphAttributes.color!==void 0&&(De=3);let Qe,ne,_e,Me;if(ge){const ht=kn[ge];Qe=ht.vertexShader,ne=ht.fragmentShader}else Qe=T.vertexShader,ne=T.fragmentShader,l.update(T),_e=l.getVertexShaderID(T),Me=l.getFragmentShaderID(T);const D=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),ie=K.isInstancedMesh===!0,de=K.isBatchedMesh===!0,Le=!!T.map,Ie=!!T.matcap,w=!!ee,x=!!T.aoMap,z=!!T.lightMap,$=!!T.bumpMap,W=!!T.normalMap,X=!!T.displacementMap,ue=!!T.emissiveMap,Z=!!T.metalnessMap,y=!!T.roughnessMap,v=T.anisotropy>0,I=T.clearcoat>0,O=T.dispersion>0,G=T.iridescence>0,H=T.sheen>0,pe=T.transmission>0,he=v&&!!T.anisotropyMap,fe=I&&!!T.clearcoatMap,Be=I&&!!T.clearcoatNormalMap,ce=I&&!!T.clearcoatRoughnessMap,ve=G&&!!T.iridescenceMap,Ce=G&&!!T.iridescenceThicknessMap,Ue=H&&!!T.sheenColorMap,Te=H&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Oe=!!T.specularColorMap,ut=!!T.specularIntensityMap,N=pe&&!!T.transmissionMap,ye=pe&&!!T.thicknessMap,Q=!!T.gradientMap,le=!!T.alphaMap,Ae=T.alphaTest>0,Ee=!!T.alphaHash,Xe=!!T.extensions;let bt=Di;T.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(bt=n.toneMapping);const Ft={shaderID:ge,shaderType:T.type,shaderName:T.name,vertexShader:Qe,fragmentShader:ne,defines:T.defines,customVertexShaderID:_e,customFragmentShaderID:Me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:de,batchingColor:de&&K._colorsTexture!==null,instancing:ie,instancingColor:ie&&K.instanceColor!==null,instancingMorph:ie&&K.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Jt,alphaToCoverage:!!T.alphaToCoverage,map:Le,matcap:Ie,envMap:w,envMapMode:w&&ee.mapping,envMapCubeUVHeight:V,aoMap:x,lightMap:z,bumpMap:$,normalMap:W,displacementMap:d&&X,emissiveMap:ue,normalMapObjectSpace:W&&T.normalMapType===ox,normalMapTangentSpace:W&&T.normalMapType===Tu,metalnessMap:Z,roughnessMap:y,anisotropy:v,anisotropyMap:he,clearcoat:I,clearcoatMap:fe,clearcoatNormalMap:Be,clearcoatRoughnessMap:ce,dispersion:O,iridescence:G,iridescenceMap:ve,iridescenceThicknessMap:Ce,sheen:H,sheenColorMap:Ue,sheenRoughnessMap:Te,specularMap:ke,specularColorMap:Oe,specularIntensityMap:ut,transmission:pe,transmissionMap:N,thicknessMap:ye,gradientMap:Q,opaque:T.transparent===!1&&T.blending===Ws&&T.alphaToCoverage===!1,alphaMap:le,alphaTest:Ae,alphaHash:Ee,combine:T.combine,mapUv:Le&&g(T.map.channel),aoMapUv:x&&g(T.aoMap.channel),lightMapUv:z&&g(T.lightMap.channel),bumpMapUv:$&&g(T.bumpMap.channel),normalMapUv:W&&g(T.normalMap.channel),displacementMapUv:X&&g(T.displacementMap.channel),emissiveMapUv:ue&&g(T.emissiveMap.channel),metalnessMapUv:Z&&g(T.metalnessMap.channel),roughnessMapUv:y&&g(T.roughnessMap.channel),anisotropyMapUv:he&&g(T.anisotropyMap.channel),clearcoatMapUv:fe&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:Be&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(T.sheenRoughnessMap.channel),specularMapUv:ke&&g(T.specularMap.channel),specularColorMapUv:Oe&&g(T.specularColorMap.channel),specularIntensityMapUv:ut&&g(T.specularIntensityMap.channel),transmissionMapUv:N&&g(T.transmissionMap.channel),thicknessMapUv:ye&&g(T.thicknessMap.channel),alphaMapUv:le&&g(T.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(W||v),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!oe.attributes.uv&&(Le||le),fog:!!ae,useFog:T.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:se,skinning:K.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,decodeVideoTexture:Le&&T.map.isVideoTexture===!0&&et.getTransfer(T.map.colorSpace)===ft,decodeVideoTextureEmissive:ue&&T.emissiveMap.isVideoTexture===!0&&et.getTransfer(T.emissiveMap.colorSpace)===ft,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bn,flipSided:T.side===tn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&T.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=c.has(1),Ft.vertexUv2s=c.has(2),Ft.vertexUv3s=c.has(3),c.clear(),Ft}function p(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)M.push(L),M.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(A(M,T),E(M,T),M.push(n.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function A(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function E(T,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),T.push(o.mask)}function b(T){const M=_[T.type];let L;if(M){const te=kn[M];L=Qx.clone(te.uniforms)}else L=T.uniforms;return L}function C(T,M){let L;for(let te=0,K=u.length;te<K;te++){const ae=u[te];if(ae.cacheKey===M){L=ae,++L.usedTimes;break}}return L===void 0&&(L=new sA(n,M,T,r),u.push(L)),L}function P(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function R(T){l.remove(T)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:P,releaseShaderCache:R,programs:u,dispose:F}}function cA(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function uA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Zd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jd(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h,d,f,_,g,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:_,renderOrder:h.renderOrder,z:g,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=h.renderOrder,p.z=g,p.group=m),e++,p}function o(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,_,g,m){const p=a(h,d,f,_,g,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||uA),i.length>1&&i.sort(d||Zd),s.length>1&&s.sort(d||Zd)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function hA(){let n=new WeakMap;function e(i,s){const r=n.get(i);let a;return r===void 0?(a=new Jd,n.set(i,[a])):s>=r.length?(a=new Jd,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function dA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Ge};break;case"SpotLight":t={position:new B,direction:new B,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function fA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let pA=0;function mA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function _A(n){const e=new dA,t=fA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new qe,a=new qe;function o(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,A=0,E=0,b=0,C=0,P=0,R=0;c.sort(mA);for(let T=0,M=c.length;T<M;T++){const L=c[T],te=L.color,K=L.intensity,ae=L.distance,oe=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=te.r*K,h+=te.g*K,d+=te.b*K;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],K);R++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,V=t.get(L);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=oe,i.directionalShadowMatrix[f]=L.shadow.matrix,A++}i.directional[f]=J,f++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(te).multiplyScalar(K),J.distance=ae,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[g]=J;const ee=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,ee.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[g]=ee.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.spotShadow[g]=V,i.spotShadowMap[g]=oe,b++}g++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(te).multiplyScalar(K),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=J,m++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const ee=L.shadow,V=t.get(L);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,i.pointShadow[_]=V,i.pointShadowMap[_]=oe,i.pointShadowMatrix[_]=L.shadow.matrix,E++}i.point[_]=J,_++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(K),J.groundColor.copy(L.groundColor).multiplyScalar(K),i.hemi[p]=J,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xe.LTC_FLOAT_1,i.rectAreaLTC2=xe.LTC_FLOAT_2):(i.rectAreaLTC1=xe.LTC_HALF_1,i.rectAreaLTC2=xe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==f||F.pointLength!==_||F.spotLength!==g||F.rectAreaLength!==m||F.hemiLength!==p||F.numDirectionalShadows!==A||F.numPointShadows!==E||F.numSpotShadows!==b||F.numSpotMaps!==C||F.numLightProbes!==R)&&(i.directional.length=f,i.spot.length=g,i.rectArea.length=m,i.point.length=_,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=R,F.directionalLength=f,F.pointLength=_,F.spotLength=g,F.rectAreaLength=m,F.hemiLength=p,F.numDirectionalShadows=A,F.numPointShadows=E,F.numSpotShadows=b,F.numSpotMaps=C,F.numLightProbes=R,i.version=pA++)}function l(c,u){let h=0,d=0,f=0,_=0,g=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const E=c[p];if(E.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(E.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(E.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const b=i.hemi[g];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:i}}function Qd(n){const e=new _A(n),t=[],i=[];function s(u){c.camera=u,t.length=0,i.length=0}function r(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function gA(n){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Qd(n),e.set(s,[o])):r>=a.length?(o=new Qd(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xA=`uniform sampler2D shadow_pass;
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
}`;function bA(n,e,t){let i=new Pu;const s=new Je,r=new Je,a=new it,o=new gb({depthPacking:ax}),l=new vb,c={},u=t.maxTextureSize,h={[di]:tn,[tn]:di,[Bn]:Bn},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:vA,fragmentShader:xA}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Xn;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new en(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let p=this.type;this.render=function(P,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const T=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),te=n.state;te.setBlending(Li),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const K=p!==ii&&this.type===ii,ae=p===ii&&this.type!==ii;for(let oe=0,J=P.length;oe<J;oe++){const ee=P[oe],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ge=V.getFrameExtents();if(s.multiply(ge),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ge.x),s.x=r.x*ge.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ge.y),s.y=r.y*ge.y,V.mapSize.y=r.y)),V.map===null||K===!0||ae===!0){const Re=this.type!==ii?{minFilter:$t,magFilter:$t}:{};V.map!==null&&V.map.dispose(),V.map=new cs(s.x,s.y,Re),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const be=V.getViewportCount();for(let Re=0;Re<be;Re++){const De=V.getViewport(Re);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),te.viewport(a),V.updateMatrices(ee,Re),i=V.getFrustum(),b(R,F,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===ii&&A(V,F),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,M,L)};function A(P,R){const F=e.update(g);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new cs(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(R,null,F,d,g,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(R,null,F,f,g,null)}function E(P,R,F,T){let M=null;const L=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)M=L;else if(M=F.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const te=M.uuid,K=R.uuid;let ae=c[te];ae===void 0&&(ae={},c[te]=ae);let oe=ae[K];oe===void 0&&(oe=M.clone(),ae[K]=oe,R.addEventListener("dispose",C)),M=oe}if(M.visible=R.visible,M.wireframe=R.wireframe,T===ii?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const te=n.properties.get(M);te.light=F}return M}function b(P,R,F,T,M){if(P.visible===!1)return;if(P.layers.test(R.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===ii)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const K=e.update(P),ae=P.material;if(Array.isArray(ae)){const oe=K.groups;for(let J=0,ee=oe.length;J<ee;J++){const V=oe[J],ge=ae[V.materialIndex];if(ge&&ge.visible){const be=E(P,ge,T,M);P.onBeforeShadow(n,P,R,F,K,be,V),n.renderBufferDirect(F,null,K,be,P,V),P.onAfterShadow(n,P,R,F,K,be,V)}}}else if(ae.visible){const oe=E(P,ae,T,M);P.onBeforeShadow(n,P,R,F,K,oe,null),n.renderBufferDirect(F,null,K,oe,P,null),P.onAfterShadow(n,P,R,F,K,oe,null)}}const te=P.children;for(let K=0,ae=te.length;K<ae;K++)b(te[K],R,F,T,M)}function C(P){P.target.removeEventListener("dispose",C);for(const F in c){const T=c[F],M=P.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const yA={[ec]:tc,[nc]:rc,[ic]:ac,[Zs]:sc,[tc]:ec,[rc]:nc,[ac]:ic,[sc]:Zs};function SA(n,e){function t(){let N=!1;const ye=new it;let Q=null;const le=new it(0,0,0,0);return{setMask:function(Ae){Q!==Ae&&!N&&(n.colorMask(Ae,Ae,Ae,Ae),Q=Ae)},setLocked:function(Ae){N=Ae},setClear:function(Ae,Ee,Xe,bt,Ft){Ft===!0&&(Ae*=bt,Ee*=bt,Xe*=bt),ye.set(Ae,Ee,Xe,bt),le.equals(ye)===!1&&(n.clearColor(Ae,Ee,Xe,bt),le.copy(ye))},reset:function(){N=!1,Q=null,le.set(-1,0,0,0)}}}function i(){let N=!1,ye=!1,Q=null,le=null,Ae=null;return{setReversed:function(Ee){if(ye!==Ee){const Xe=e.get("EXT_clip_control");ye?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT);const bt=Ae;Ae=null,this.setClear(bt)}ye=Ee},getReversed:function(){return ye},setTest:function(Ee){Ee?D(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(Ee){Q!==Ee&&!N&&(n.depthMask(Ee),Q=Ee)},setFunc:function(Ee){if(ye&&(Ee=yA[Ee]),le!==Ee){switch(Ee){case ec:n.depthFunc(n.NEVER);break;case tc:n.depthFunc(n.ALWAYS);break;case nc:n.depthFunc(n.LESS);break;case Zs:n.depthFunc(n.LEQUAL);break;case ic:n.depthFunc(n.EQUAL);break;case sc:n.depthFunc(n.GEQUAL);break;case rc:n.depthFunc(n.GREATER);break;case ac:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Ee}},setLocked:function(Ee){N=Ee},setClear:function(Ee){Ae!==Ee&&(ye&&(Ee=1-Ee),n.clearDepth(Ee),Ae=Ee)},reset:function(){N=!1,Q=null,le=null,Ae=null,ye=!1}}}function s(){let N=!1,ye=null,Q=null,le=null,Ae=null,Ee=null,Xe=null,bt=null,Ft=null;return{setTest:function(ht){N||(ht?D(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(ht){ye!==ht&&!N&&(n.stencilMask(ht),ye=ht)},setFunc:function(ht,gn,jn){(Q!==ht||le!==gn||Ae!==jn)&&(n.stencilFunc(ht,gn,jn),Q=ht,le=gn,Ae=jn)},setOp:function(ht,gn,jn){(Ee!==ht||Xe!==gn||bt!==jn)&&(n.stencilOp(ht,gn,jn),Ee=ht,Xe=gn,bt=jn)},setLocked:function(ht){N=ht},setClear:function(ht){Ft!==ht&&(n.clearStencil(ht),Ft=ht)},reset:function(){N=!1,ye=null,Q=null,le=null,Ae=null,Ee=null,Xe=null,bt=null,Ft=null}}}const r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,A=null,E=null,b=null,C=null,P=null,R=new Ge(0,0,0),F=0,T=!1,M=null,L=null,te=null,K=null,ae=null;const oe=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ee=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),J=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),J=ee>=2);let ge=null,be={};const Re=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Qe=new it().fromArray(Re),ne=new it().fromArray(De);function _e(N,ye,Q,le){const Ae=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(N,Ee),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<Q;Xe++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Ae):n.texImage2D(ye+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ae);return Ee}const Me={};Me[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Me[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Me[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Me[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),D(n.DEPTH_TEST),a.setFunc(Zs),$(!1),W(zh),D(n.CULL_FACE),x(Li);function D(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function se(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function ie(N,ye){return h[N]!==ye?(n.bindFramebuffer(N,ye),h[N]=ye,N===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ye),N===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function de(N,ye){let Q=f,le=!1;if(N){Q=d.get(ye),Q===void 0&&(Q=[],d.set(ye,Q));const Ae=N.textures;if(Q.length!==Ae.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let Ee=0,Xe=Ae.length;Ee<Xe;Ee++)Q[Ee]=n.COLOR_ATTACHMENT0+Ee;Q.length=Ae.length,le=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,le=!0);le&&n.drawBuffers(Q)}function Le(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const Ie={[ts]:n.FUNC_ADD,[wv]:n.FUNC_SUBTRACT,[Rv]:n.FUNC_REVERSE_SUBTRACT};Ie[Cv]=n.MIN,Ie[Pv]=n.MAX;const w={[Iv]:n.ZERO,[Lv]:n.ONE,[Dv]:n.SRC_COLOR,[Jl]:n.SRC_ALPHA,[Bv]:n.SRC_ALPHA_SATURATE,[Fv]:n.DST_COLOR,[Uv]:n.DST_ALPHA,[Nv]:n.ONE_MINUS_SRC_COLOR,[Ql]:n.ONE_MINUS_SRC_ALPHA,[kv]:n.ONE_MINUS_DST_COLOR,[Ov]:n.ONE_MINUS_DST_ALPHA,[zv]:n.CONSTANT_COLOR,[Hv]:n.ONE_MINUS_CONSTANT_COLOR,[Vv]:n.CONSTANT_ALPHA,[Gv]:n.ONE_MINUS_CONSTANT_ALPHA};function x(N,ye,Q,le,Ae,Ee,Xe,bt,Ft,ht){if(N===Li){g===!0&&(se(n.BLEND),g=!1);return}if(g===!1&&(D(n.BLEND),g=!0),N!==Tv){if(N!==m||ht!==T){if((p!==ts||b!==ts)&&(n.blendEquation(n.FUNC_ADD),p=ts,b=ts),ht)switch(N){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hh:n.blendFunc(n.ONE,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Hh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Gh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}A=null,E=null,C=null,P=null,R.set(0,0,0),F=0,m=N,T=ht}return}Ae=Ae||ye,Ee=Ee||Q,Xe=Xe||le,(ye!==p||Ae!==b)&&(n.blendEquationSeparate(Ie[ye],Ie[Ae]),p=ye,b=Ae),(Q!==A||le!==E||Ee!==C||Xe!==P)&&(n.blendFuncSeparate(w[Q],w[le],w[Ee],w[Xe]),A=Q,E=le,C=Ee,P=Xe),(bt.equals(R)===!1||Ft!==F)&&(n.blendColor(bt.r,bt.g,bt.b,Ft),R.copy(bt),F=Ft),m=N,T=!1}function z(N,ye){N.side===Bn?se(n.CULL_FACE):D(n.CULL_FACE);let Q=N.side===tn;ye&&(Q=!Q),$(Q),N.blending===Ws&&N.transparent===!1?x(Li):x(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const le=N.stencilWrite;o.setTest(le),le&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ue(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?D(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(N){M!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),M=N)}function W(N){N!==Mv?(D(n.CULL_FACE),N!==L&&(N===zh?n.cullFace(n.BACK):N===Ev?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),L=N}function X(N){N!==te&&(J&&n.lineWidth(N),te=N)}function ue(N,ye,Q){N?(D(n.POLYGON_OFFSET_FILL),(K!==ye||ae!==Q)&&(n.polygonOffset(ye,Q),K=ye,ae=Q)):se(n.POLYGON_OFFSET_FILL)}function Z(N){N?D(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function y(N){N===void 0&&(N=n.TEXTURE0+oe-1),ge!==N&&(n.activeTexture(N),ge=N)}function v(N,ye,Q){Q===void 0&&(ge===null?Q=n.TEXTURE0+oe-1:Q=ge);let le=be[Q];le===void 0&&(le={type:void 0,texture:void 0},be[Q]=le),(le.type!==N||le.texture!==ye)&&(ge!==Q&&(n.activeTexture(Q),ge=Q),n.bindTexture(N,ye||Me[N]),le.type=N,le.texture=ye)}function I(){const N=be[ge];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function H(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(N){Qe.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),Qe.copy(N))}function Te(N){ne.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function ke(N,ye){let Q=c.get(ye);Q===void 0&&(Q=new WeakMap,c.set(ye,Q));let le=Q.get(N);le===void 0&&(le=n.getUniformBlockIndex(ye,N.name),Q.set(N,le))}function Oe(N,ye){const le=c.get(ye).get(N);l.get(ye)!==le&&(n.uniformBlockBinding(ye,le,N.__bindingPointIndex),l.set(ye,le))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,be={},h={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,A=null,E=null,b=null,C=null,P=null,R=new Ge(0,0,0),F=0,T=!1,M=null,L=null,te=null,K=null,ae=null,Qe.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:D,disable:se,bindFramebuffer:ie,drawBuffers:de,useProgram:Le,setBlending:x,setMaterial:z,setFlipSided:$,setCullFace:W,setLineWidth:X,setPolygonOffset:ue,setScissorTest:Z,activeTexture:y,bindTexture:v,unbindTexture:I,compressedTexImage2D:O,compressedTexImage3D:G,texImage2D:ve,texImage3D:Ce,updateUBOMapping:ke,uniformBlockBinding:Oe,texStorage2D:Be,texStorage3D:ce,texSubImage2D:H,texSubImage3D:pe,compressedTexSubImage2D:he,compressedTexSubImage3D:fe,scissor:Ue,viewport:Te,reset:ut}}function MA(n,e,t,i,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,v){return f?new OffscreenCanvas(y,v):oa("canvas")}function g(y,v,I){let O=1;const G=Z(y);if((G.width>I||G.height>I)&&(O=I/Math.max(G.width,G.height)),O<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const H=Math.floor(O*G.width),pe=Math.floor(O*G.height);h===void 0&&(h=_(H,pe));const he=v?_(H,pe):h;return he.width=H,he.height=pe,he.getContext("2d").drawImage(y,0,0,H,pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+H+"x"+pe+")."),he}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),y;return y}function m(y){return y.generateMipmaps}function p(y){n.generateMipmap(y)}function A(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(y,v,I,O,G=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let H=v;if(v===n.RED&&(I===n.FLOAT&&(H=n.R32F),I===n.HALF_FLOAT&&(H=n.R16F),I===n.UNSIGNED_BYTE&&(H=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.R8UI),I===n.UNSIGNED_SHORT&&(H=n.R16UI),I===n.UNSIGNED_INT&&(H=n.R32UI),I===n.BYTE&&(H=n.R8I),I===n.SHORT&&(H=n.R16I),I===n.INT&&(H=n.R32I)),v===n.RG&&(I===n.FLOAT&&(H=n.RG32F),I===n.HALF_FLOAT&&(H=n.RG16F),I===n.UNSIGNED_BYTE&&(H=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.RG8UI),I===n.UNSIGNED_SHORT&&(H=n.RG16UI),I===n.UNSIGNED_INT&&(H=n.RG32UI),I===n.BYTE&&(H=n.RG8I),I===n.SHORT&&(H=n.RG16I),I===n.INT&&(H=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.RGB8UI),I===n.UNSIGNED_SHORT&&(H=n.RGB16UI),I===n.UNSIGNED_INT&&(H=n.RGB32UI),I===n.BYTE&&(H=n.RGB8I),I===n.SHORT&&(H=n.RGB16I),I===n.INT&&(H=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),I===n.UNSIGNED_INT&&(H=n.RGBA32UI),I===n.BYTE&&(H=n.RGBA8I),I===n.SHORT&&(H=n.RGBA16I),I===n.INT&&(H=n.RGBA32I)),v===n.RGB&&I===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),v===n.RGBA){const pe=G?po:et.getTransfer(O);I===n.FLOAT&&(H=n.RGBA32F),I===n.HALF_FLOAT&&(H=n.RGBA16F),I===n.UNSIGNED_BYTE&&(H=pe===ft?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function b(y,v){let I;return y?v===null||v===ls||v===tr?I=n.DEPTH24_STENCIL8:v===Tn?I=n.DEPTH32F_STENCIL8:v===sa&&(I=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ls||v===tr?I=n.DEPTH_COMPONENT24:v===Tn?I=n.DEPTH_COMPONENT32F:v===sa&&(I=n.DEPTH_COMPONENT16),I}function C(y,v){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==$t&&y.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?v.mipmaps.length:1}function P(y){const v=y.target;v.removeEventListener("dispose",P),F(v),v.isVideoTexture&&u.delete(v)}function R(y){const v=y.target;v.removeEventListener("dispose",R),M(v)}function F(y){const v=i.get(y);if(v.__webglInit===void 0)return;const I=y.source,O=d.get(I);if(O){const G=O[v.__cacheKey];G.usedTimes--,G.usedTimes===0&&T(y),Object.keys(O).length===0&&d.delete(I)}i.remove(y)}function T(y){const v=i.get(y);n.deleteTexture(v.__webglTexture);const I=y.source,O=d.get(I);delete O[v.__cacheKey],a.memory.textures--}function M(y){const v=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(v.__webglFramebuffer[O]))for(let G=0;G<v.__webglFramebuffer[O].length;G++)n.deleteFramebuffer(v.__webglFramebuffer[O][G]);else n.deleteFramebuffer(v.__webglFramebuffer[O]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[O])}else{if(Array.isArray(v.__webglFramebuffer))for(let O=0;O<v.__webglFramebuffer.length;O++)n.deleteFramebuffer(v.__webglFramebuffer[O]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let O=0;O<v.__webglColorRenderbuffer.length;O++)v.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[O]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=y.textures;for(let O=0,G=I.length;O<G;O++){const H=i.get(I[O]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(I[O])}i.remove(y)}let L=0;function te(){L=0}function K(){const y=L;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),L+=1,y}function ae(y){const v=[];return v.push(y.wrapS),v.push(y.wrapT),v.push(y.wrapR||0),v.push(y.magFilter),v.push(y.minFilter),v.push(y.anisotropy),v.push(y.internalFormat),v.push(y.format),v.push(y.type),v.push(y.generateMipmaps),v.push(y.premultiplyAlpha),v.push(y.flipY),v.push(y.unpackAlignment),v.push(y.colorSpace),v.join()}function oe(y,v){const I=i.get(y);if(y.isVideoTexture&&X(y),y.isRenderTargetTexture===!1&&y.version>0&&I.__version!==y.version){const O=y.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(I,y,v);return}}t.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function J(y,v){const I=i.get(y);if(y.version>0&&I.__version!==y.version){ne(I,y,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function ee(y,v){const I=i.get(y);if(y.version>0&&I.__version!==y.version){ne(I,y,v);return}t.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function V(y,v){const I=i.get(y);if(y.version>0&&I.__version!==y.version){_e(I,y,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const ge={[er]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[ho]:n.MIRRORED_REPEAT},be={[$t]:n.NEAREST,[Xp]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Za]:n.LINEAR_MIPMAP_NEAREST,[oi]:n.LINEAR_MIPMAP_LINEAR},Re={[lx]:n.NEVER,[px]:n.ALWAYS,[cx]:n.LESS,[nm]:n.LEQUAL,[ux]:n.EQUAL,[fx]:n.GEQUAL,[hx]:n.GREATER,[dx]:n.NOTEQUAL};function De(y,v){if(v.type===Tn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===Za||v.magFilter===Lr||v.magFilter===oi||v.minFilter===cn||v.minFilter===Za||v.minFilter===Lr||v.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,ge[v.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,ge[v.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,ge[v.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,be[v.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,be[v.minFilter]),v.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===$t||v.minFilter!==Lr&&v.minFilter!==oi||v.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");n.texParameterf(y,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Qe(y,v){let I=!1;y.__webglInit===void 0&&(y.__webglInit=!0,v.addEventListener("dispose",P));const O=v.source;let G=d.get(O);G===void 0&&(G={},d.set(O,G));const H=ae(v);if(H!==y.__cacheKey){G[H]===void 0&&(G[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),G[H].usedTimes++;const pe=G[y.__cacheKey];pe!==void 0&&(G[y.__cacheKey].usedTimes--,pe.usedTimes===0&&T(v)),y.__cacheKey=H,y.__webglTexture=G[H].texture}return I}function ne(y,v,I){let O=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(O=n.TEXTURE_3D);const G=Qe(y,v),H=v.source;t.bindTexture(O,y.__webglTexture,n.TEXTURE0+I);const pe=i.get(H);if(H.version!==pe.__version||G===!0){t.activeTexture(n.TEXTURE0+I);const he=et.getPrimaries(et.workingColorSpace),fe=v.colorSpace===Ri?null:et.getPrimaries(v.colorSpace),Be=v.colorSpace===Ri||he===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ce=g(v.image,!1,s.maxTextureSize);ce=ue(v,ce);const ve=r.convert(v.format,v.colorSpace),Ce=r.convert(v.type);let Ue=E(v.internalFormat,ve,Ce,v.colorSpace,v.isVideoTexture);De(O,v);let Te;const ke=v.mipmaps,Oe=v.isVideoTexture!==!0,ut=pe.__version===void 0||G===!0,N=H.dataReady,ye=C(v,ce);if(v.isDepthTexture)Ue=b(v.format===nr,v.type),ut&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,Ue,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ue,ce.width,ce.height,0,ve,Ce,null));else if(v.isDataTexture)if(ke.length>0){Oe&&ut&&t.texStorage2D(n.TEXTURE_2D,ye,Ue,ke[0].width,ke[0].height);for(let Q=0,le=ke.length;Q<le;Q++)Te=ke[Q],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Te.width,Te.height,ve,Ce,Te.data):t.texImage2D(n.TEXTURE_2D,Q,Ue,Te.width,Te.height,0,ve,Ce,Te.data);v.generateMipmaps=!1}else Oe?(ut&&t.texStorage2D(n.TEXTURE_2D,ye,Ue,ce.width,ce.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ve,Ce,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Ue,ce.width,ce.height,0,ve,Ce,ce.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Oe&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ue,ke[0].width,ke[0].height,ce.depth);for(let Q=0,le=ke.length;Q<le;Q++)if(Te=ke[Q],v.format!==pn)if(ve!==null)if(Oe){if(N)if(v.layerUpdates.size>0){const Ae=Cd(Te.width,Te.height,v.format,v.type);for(const Ee of v.layerUpdates){const Xe=Te.data.subarray(Ee*Ae/Te.data.BYTES_PER_ELEMENT,(Ee+1)*Ae/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,Ee,Te.width,Te.height,1,ve,Xe)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ce.depth,ve,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Ue,Te.width,Te.height,ce.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,ce.depth,ve,Ce,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Ue,Te.width,Te.height,ce.depth,0,ve,Ce,Te.data)}else{Oe&&ut&&t.texStorage2D(n.TEXTURE_2D,ye,Ue,ke[0].width,ke[0].height);for(let Q=0,le=ke.length;Q<le;Q++)Te=ke[Q],v.format!==pn?ve!==null?Oe?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Te.width,Te.height,ve,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Ue,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Te.width,Te.height,ve,Ce,Te.data):t.texImage2D(n.TEXTURE_2D,Q,Ue,Te.width,Te.height,0,ve,Ce,Te.data)}else if(v.isDataArrayTexture)if(Oe){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,Ue,ce.width,ce.height,ce.depth),N)if(v.layerUpdates.size>0){const Q=Cd(ce.width,ce.height,v.format,v.type);for(const le of v.layerUpdates){const Ae=ce.data.subarray(le*Q/ce.data.BYTES_PER_ELEMENT,(le+1)*Q/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,ce.width,ce.height,1,ve,Ce,Ae)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ce,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,ce.width,ce.height,ce.depth,0,ve,Ce,ce.data);else if(v.isData3DTexture)Oe?(ut&&t.texStorage3D(n.TEXTURE_3D,ye,Ue,ce.width,ce.height,ce.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ve,Ce,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,ce.width,ce.height,ce.depth,0,ve,Ce,ce.data);else if(v.isFramebufferTexture){if(ut)if(Oe)t.texStorage2D(n.TEXTURE_2D,ye,Ue,ce.width,ce.height);else{let Q=ce.width,le=ce.height;for(let Ae=0;Ae<ye;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,Ue,Q,le,0,ve,Ce,null),Q>>=1,le>>=1}}else if(ke.length>0){if(Oe&&ut){const Q=Z(ke[0]);t.texStorage2D(n.TEXTURE_2D,ye,Ue,Q.width,Q.height)}for(let Q=0,le=ke.length;Q<le;Q++)Te=ke[Q],Oe?N&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ve,Ce,Te):t.texImage2D(n.TEXTURE_2D,Q,Ue,ve,Ce,Te);v.generateMipmaps=!1}else if(Oe){if(ut){const Q=Z(ce);t.texStorage2D(n.TEXTURE_2D,ye,Ue,Q.width,Q.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ve,Ce,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ue,ve,Ce,ce);m(v)&&p(O),pe.__version=H.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function _e(y,v,I){if(v.image.length!==6)return;const O=Qe(y,v),G=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+I);const H=i.get(G);if(G.version!==H.__version||O===!0){t.activeTexture(n.TEXTURE0+I);const pe=et.getPrimaries(et.workingColorSpace),he=v.colorSpace===Ri?null:et.getPrimaries(v.colorSpace),fe=v.colorSpace===Ri||pe===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Be=v.isCompressedTexture||v.image[0].isCompressedTexture,ce=v.image[0]&&v.image[0].isDataTexture,ve=[];for(let le=0;le<6;le++)!Be&&!ce?ve[le]=g(v.image[le],!0,s.maxCubemapSize):ve[le]=ce?v.image[le].image:v.image[le],ve[le]=ue(v,ve[le]);const Ce=ve[0],Ue=r.convert(v.format,v.colorSpace),Te=r.convert(v.type),ke=E(v.internalFormat,Ue,Te,v.colorSpace),Oe=v.isVideoTexture!==!0,ut=H.__version===void 0||O===!0,N=G.dataReady;let ye=C(v,Ce);De(n.TEXTURE_CUBE_MAP,v);let Q;if(Be){Oe&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,ke,Ce.width,Ce.height);for(let le=0;le<6;le++){Q=ve[le].mipmaps;for(let Ae=0;Ae<Q.length;Ae++){const Ee=Q[Ae];v.format!==pn?Ue!==null?Oe?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,Ee.width,Ee.height,Ue,Ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,ke,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,0,0,Ee.width,Ee.height,Ue,Te,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae,ke,Ee.width,Ee.height,0,Ue,Te,Ee.data)}}}else{if(Q=v.mipmaps,Oe&&ut){Q.length>0&&ye++;const le=Z(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,ke,le.width,le.height)}for(let le=0;le<6;le++)if(ce){Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ve[le].width,ve[le].height,Ue,Te,ve[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ke,ve[le].width,ve[le].height,0,Ue,Te,ve[le].data);for(let Ae=0;Ae<Q.length;Ae++){const Xe=Q[Ae].image[le].image;Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,Xe.width,Xe.height,Ue,Te,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,ke,Xe.width,Xe.height,0,Ue,Te,Xe.data)}}else{Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ue,Te,ve[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,ke,Ue,Te,ve[le]);for(let Ae=0;Ae<Q.length;Ae++){const Ee=Q[Ae];Oe?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,0,0,Ue,Te,Ee.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ae+1,ke,Ue,Te,Ee.image[le])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),H.__version=G.version,v.onUpdate&&v.onUpdate(v)}y.__version=v.version}function Me(y,v,I,O,G,H){const pe=r.convert(I.format,I.colorSpace),he=r.convert(I.type),fe=E(I.internalFormat,pe,he,I.colorSpace),Be=i.get(v),ce=i.get(I);if(ce.__renderTarget=v,!Be.__hasExternalTextures){const ve=Math.max(1,v.width>>H),Ce=Math.max(1,v.height>>H);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,H,fe,ve,Ce,v.depth,0,pe,he,null):t.texImage2D(G,H,fe,ve,Ce,0,pe,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),W(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,G,ce.__webglTexture,0,$(v)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,G,ce.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function D(y,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,y),v.depthBuffer){const O=v.depthTexture,G=O&&O.isDepthTexture?O.type:null,H=b(v.stencilBuffer,G),pe=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=$(v);W(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,H,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,H,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,H,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,y)}else{const O=v.textures;for(let G=0;G<O.length;G++){const H=O[G],pe=r.convert(H.format,H.colorSpace),he=r.convert(H.type),fe=E(H.internalFormat,pe,he,H.colorSpace),Be=$(v);I&&W(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Be,fe,v.width,v.height):W(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Be,fe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,fe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function se(y,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(v.depthTexture);O.__renderTarget=v,(!O.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),oe(v.depthTexture,0);const G=O.__webglTexture,H=$(v);if(v.depthTexture.format===Xs)W(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(v.depthTexture.format===nr)W(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,H):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function ie(y){const v=i.get(y),I=y.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==y.depthTexture){const O=y.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),O){const G=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,O.removeEventListener("dispose",G)};O.addEventListener("dispose",G),v.__depthDisposeCallback=G}v.__boundDepthTexture=O}if(y.depthTexture&&!v.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");se(v.__webglFramebuffer,y)}else if(I){v.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[O]),v.__webglDepthbuffer[O]===void 0)v.__webglDepthbuffer[O]=n.createRenderbuffer(),D(v.__webglDepthbuffer[O],y,!1);else{const G=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=v.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,H)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),D(v.__webglDepthbuffer,y,!1);else{const O=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,G)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(y,v,I){const O=i.get(y);v!==void 0&&Me(O.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ie(y)}function Le(y){const v=y.texture,I=i.get(y),O=i.get(v);y.addEventListener("dispose",R);const G=y.textures,H=y.isWebGLCubeRenderTarget===!0,pe=G.length>1;if(pe||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=v.version,a.memory.textures++),H){I.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[he]=[];for(let fe=0;fe<v.mipmaps.length;fe++)I.__webglFramebuffer[he][fe]=n.createFramebuffer()}else I.__webglFramebuffer[he]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)I.__webglFramebuffer[he]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(pe)for(let he=0,fe=G.length;he<fe;he++){const Be=i.get(G[he]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),a.memory.textures++)}if(y.samples>0&&W(y)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let he=0;he<G.length;he++){const fe=G[he];I.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[he]);const Be=r.convert(fe.format,fe.colorSpace),ce=r.convert(fe.type),ve=E(fe.internalFormat,Be,ce,fe.colorSpace,y.isXRRenderTarget===!0),Ce=$(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ve,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,I.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),D(I.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),De(n.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)Me(I.__webglFramebuffer[he][fe],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,fe);else Me(I.__webglFramebuffer[he],y,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(pe){for(let he=0,fe=G.length;he<fe;he++){const Be=G[he],ce=i.get(Be);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),De(n.TEXTURE_2D,Be),Me(I.__webglFramebuffer,y,Be,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Be)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(he=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,O.__webglTexture),De(he,v),v.mipmaps&&v.mipmaps.length>0)for(let fe=0;fe<v.mipmaps.length;fe++)Me(I.__webglFramebuffer[fe],y,v,n.COLOR_ATTACHMENT0,he,fe);else Me(I.__webglFramebuffer,y,v,n.COLOR_ATTACHMENT0,he,0);m(v)&&p(he),t.unbindTexture()}y.depthBuffer&&ie(y)}function Ie(y){const v=y.textures;for(let I=0,O=v.length;I<O;I++){const G=v[I];if(m(G)){const H=A(y),pe=i.get(G).__webglTexture;t.bindTexture(H,pe),p(H),t.unbindTexture()}}}const w=[],x=[];function z(y){if(y.samples>0){if(W(y)===!1){const v=y.textures,I=y.width,O=y.height;let G=n.COLOR_BUFFER_BIT;const H=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=i.get(y),he=v.length>1;if(he)for(let fe=0;fe<v.length;fe++)t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let fe=0;fe<v.length;fe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);const Be=i.get(v[fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Be,0)}n.blitFramebuffer(0,0,I,O,0,0,I,O,G,n.NEAREST),l===!0&&(w.length=0,x.length=0,w.push(n.COLOR_ATTACHMENT0+fe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(w.push(H),x.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,x)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let fe=0;fe<v.length;fe++){t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,pe.__webglColorRenderbuffer[fe]);const Be=i.get(v[fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,pe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const v=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function $(y){return Math.min(s.maxSamples,y.samples)}function W(y){const v=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function X(y){const v=a.render.frame;u.get(y)!==v&&(u.set(y,v),y.update())}function ue(y,v){const I=y.colorSpace,O=y.format,G=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||I!==Jt&&I!==Ri&&(et.getTransfer(I)===ft?(O!==pn||G!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),v}function Z(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=K,this.resetTextureUnits=te,this.setTexture2D=oe,this.setTexture2DArray=J,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=de,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=z,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=W}function EA(n,e){function t(i,s=Ri){let r;const a=et.getTransfer(s);if(i===fi)return n.UNSIGNED_BYTE;if(i===xu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===bu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===jp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yp)return n.BYTE;if(i===qp)return n.SHORT;if(i===sa)return n.UNSIGNED_SHORT;if(i===vu)return n.INT;if(i===ls)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===ha)return n.HALF_FLOAT;if(i===Kp)return n.ALPHA;if(i===$p)return n.RGB;if(i===pn)return n.RGBA;if(i===Zp)return n.LUMINANCE;if(i===Jp)return n.LUMINANCE_ALPHA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===nr)return n.DEPTH_STENCIL;if(i===yu)return n.RED;if(i===Su)return n.RED_INTEGER;if(i===Qp)return n.RG;if(i===Mu)return n.RG_INTEGER;if(i===Eu)return n.RGBA_INTEGER;if(i===Ja||i===Qa||i===eo||i===to)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===eo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===to)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cc||i===uc||i===hc||i===dc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===uc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===hc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===dc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===fc||i===pc||i===mc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===fc||i===pc)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===mc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===_c||i===gc||i===vc||i===xc||i===bc||i===yc||i===Sc||i===Mc||i===Ec||i===Ac||i===Tc||i===wc||i===Rc||i===Cc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===_c)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===yc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Sc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Mc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ac)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===no||i===Pc||i===Ic)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===no)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ic)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===em||i===Lc||i===Dc||i===Nc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===no)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===tr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const AA={type:"move"};class Ll{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ss;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const TA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wA=`
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

}`;class RA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const s=new It,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ni({vertexShader:TA,fragmentShader:wA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new No(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CA extends hs{constructor(e,t){super();const i=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,_=null;const g=new RA,m=t.getContextAttributes();let p=null,A=null;const E=[],b=[],C=new Je;let P=null;const R=new Kt;R.viewport=new it;const F=new Kt;F.viewport=new it;const T=[R,F],M=new Fb;let L=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let _e=E[ne];return _e===void 0&&(_e=new Ll,E[ne]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ne){let _e=E[ne];return _e===void 0&&(_e=new Ll,E[ne]=_e),_e.getGripSpace()},this.getHand=function(ne){let _e=E[ne];return _e===void 0&&(_e=new Ll,E[ne]=_e),_e.getHandSpace()};function K(ne){const _e=b.indexOf(ne.inputSource);if(_e===-1)return;const Me=E[_e];Me!==void 0&&(Me.update(ne.inputSource,ne.frame,c||a),Me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ae(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",ae),s.removeEventListener("inputsourceschange",oe);for(let ne=0;ne<E.length;ne++){const _e=b[ne];_e!==null&&(b[ne]=null,E[ne].disconnect(_e))}L=null,te=null,g.reset(),e.setRenderTarget(p),f=null,d=null,h=null,s=null,A=null,Qe.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",ae),s.addEventListener("inputsourceschange",oe),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new cs(f.framebufferWidth,f.framebufferHeight,{format:pn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let _e=null,Me=null,D=null;m.depth&&(D=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?nr:Xs,Me=m.stencil?tr:ls);const se={colorFormat:t.RGBA8,depthFormat:D,scaleFactor:r};h=new XRWebGLBinding(s,t),d=h.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new cs(d.textureWidth,d.textureHeight,{format:pn,type:fi,depthTexture:new gm(d.textureWidth,d.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qe.setContext(s),Qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(ne){for(let _e=0;_e<ne.removed.length;_e++){const Me=ne.removed[_e],D=b.indexOf(Me);D>=0&&(b[D]=null,E[D].disconnect(Me))}for(let _e=0;_e<ne.added.length;_e++){const Me=ne.added[_e];let D=b.indexOf(Me);if(D===-1){for(let ie=0;ie<E.length;ie++)if(ie>=b.length){b.push(Me),D=ie;break}else if(b[ie]===null){b[ie]=Me,D=ie;break}if(D===-1)break}const se=E[D];se&&se.connect(Me)}}const J=new B,ee=new B;function V(ne,_e,Me){J.setFromMatrixPosition(_e.matrixWorld),ee.setFromMatrixPosition(Me.matrixWorld);const D=J.distanceTo(ee),se=_e.projectionMatrix.elements,ie=Me.projectionMatrix.elements,de=se[14]/(se[10]-1),Le=se[14]/(se[10]+1),Ie=(se[9]+1)/se[5],w=(se[9]-1)/se[5],x=(se[8]-1)/se[0],z=(ie[8]+1)/ie[0],$=de*x,W=de*z,X=D/(-x+z),ue=X*-x;if(_e.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ue),ne.translateZ(X),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),se[10]===-1)ne.projectionMatrix.copy(_e.projectionMatrix),ne.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Z=de+X,y=Le+X,v=$-ue,I=W+(D-ue),O=Ie*Le/y*Z,G=w*Le/y*Z;ne.projectionMatrix.makePerspective(v,I,O,G,Z,y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ge(ne,_e){_e===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(_e.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let _e=ne.near,Me=ne.far;g.texture!==null&&(g.depthNear>0&&(_e=g.depthNear),g.depthFar>0&&(Me=g.depthFar)),M.near=F.near=R.near=_e,M.far=F.far=R.far=Me,(L!==M.near||te!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,te=M.far),R.layers.mask=ne.layers.mask|2,F.layers.mask=ne.layers.mask|4,M.layers.mask=R.layers.mask|F.layers.mask;const D=ne.parent,se=M.cameras;ge(M,D);for(let ie=0;ie<se.length;ie++)ge(se[ie],D);se.length===2?V(M,R,F):M.projectionMatrix.copy(R.projectionMatrix),be(ne,M,D)};function be(ne,_e,Me){Me===null?ne.matrix.copy(_e.matrixWorld):(ne.matrix.copy(Me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(_e.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(_e.projectionMatrix),ne.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=ir*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let Re=null;function De(ne,_e){if(u=_e.getViewerPose(c||a),_=_e,u!==null){const Me=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let D=!1;Me.length!==M.cameras.length&&(M.cameras.length=0,D=!0);for(let ie=0;ie<Me.length;ie++){const de=Me[ie];let Le=null;if(f!==null)Le=f.getViewport(de);else{const w=h.getViewSubImage(d,de);Le=w.viewport,ie===0&&(e.setRenderTargetTextures(A,w.colorTexture,d.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(A))}let Ie=T[ie];Ie===void 0&&(Ie=new Kt,Ie.layers.enable(ie),Ie.viewport=new it,T[ie]=Ie),Ie.matrix.fromArray(de.transform.matrix),Ie.matrix.decompose(Ie.position,Ie.quaternion,Ie.scale),Ie.projectionMatrix.fromArray(de.projectionMatrix),Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(),Ie.viewport.set(Le.x,Le.y,Le.width,Le.height),ie===0&&(M.matrix.copy(Ie.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),D===!0&&M.cameras.push(Ie)}const se=s.enabledFeatures;if(se&&se.includes("depth-sensing")){const ie=h.getDepthInformation(Me[0]);ie&&ie.isValid&&ie.texture&&g.init(e,ie,s.renderState)}}for(let Me=0;Me<E.length;Me++){const D=b[Me],se=E[Me];D!==null&&se!==void 0&&se.update(D,_e,c||a)}Re&&Re(ne,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),_=null}const Qe=new Em;Qe.setAnimationLoop(De),this.setAnimationLoop=function(ne){Re=ne},this.dispose=function(){}}}const $i=new Gn,PA=new qe;function IA(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,um(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,A,E,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,A,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),E=A.envMap,b=A.envMapRotation;E&&(m.envMap.value=E,$i.copy(b),$i.x*=-1,$i.y*=-1,$i.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),m.envMapRotation.value.setFromMatrix4(PA.makeRotationFromEuler($i)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function LA(n,e,t,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const b=E.program;i.uniformBlockBinding(A,b)}function c(A,E){let b=s[A.id];b===void 0&&(_(A),b=u(A),s[A.id]=b,A.addEventListener("dispose",m));const C=E.program;i.updateUBOMapping(A,C);const P=e.render.frame;r[A.id]!==P&&(d(A),r[A.id]=P)}function u(A){const E=h();A.__bindingPointIndex=E;const b=n.createBuffer(),C=A.__size,P=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,P),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,b),b}function h(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const E=s[A.id],b=A.uniforms,C=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let P=0,R=b.length;P<R;P++){const F=Array.isArray(b[P])?b[P]:[b[P]];for(let T=0,M=F.length;T<M;T++){const L=F[T];if(f(L,P,T,C)===!0){const te=L.__offset,K=Array.isArray(L.value)?L.value:[L.value];let ae=0;for(let oe=0;oe<K.length;oe++){const J=K[oe],ee=g(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,te+ae,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,ae),ae+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,te,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(A,E,b,C){const P=A.value,R=E+"_"+b;if(C[R]===void 0)return typeof P=="number"||typeof P=="boolean"?C[R]=P:C[R]=P.clone(),!0;{const F=C[R];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return C[R]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function _(A){const E=A.uniforms;let b=0;const C=16;for(let R=0,F=E.length;R<F;R++){const T=Array.isArray(E[R])?E[R]:[E[R]];for(let M=0,L=T.length;M<L;M++){const te=T[M],K=Array.isArray(te.value)?te.value:[te.value];for(let ae=0,oe=K.length;ae<oe;ae++){const J=K[ae],ee=g(J),V=b%C,ge=V%ee.boundary,be=V+ge;b+=ge,be!==0&&C-be<ee.storage&&(b+=C-be),te.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=b,b+=ee.storage}}}const P=b%C;return P>0&&(b+=C-P),A.__size=b,A.__cache={},this}function g(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const A in s)n.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}class DA{constructor(e={}){const{canvas:t=Lx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=Di,this.toneMappingExposure=1;const b=this;let C=!1,P=0,R=0,F=null,T=-1,M=null;const L=new it,te=new it;let K=null;const ae=new Ge(0);let oe=0,J=t.width,ee=t.height,V=1,ge=null,be=null;const Re=new it(0,0,J,ee),De=new it(0,0,J,ee);let Qe=!1;const ne=new Pu;let _e=!1,Me=!1;const D=new qe,se=new qe,ie=new B,de=new it,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function w(){return F===null?V:1}let x=i;function z(S,U){return t.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${gu}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Ae,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),x===null){const U="webgl2";if(x=z(U,S),x===null)throw z(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let $,W,X,ue,Z,y,v,I,O,G,H,pe,he,fe,Be,ce,ve,Ce,Ue,Te,ke,Oe,ut,N;function ye(){$=new VM(x),$.init(),Oe=new EA(x,$),W=new OM(x,$,e,Oe),X=new SA(x,$),W.reverseDepthBuffer&&d&&X.buffers.depth.setReversed(!0),ue=new XM(x),Z=new cA,y=new MA(x,$,X,Z,W,Oe,ue),v=new kM(b),I=new HM(b),O=new Jb(x),ut=new NM(x,O),G=new GM(x,O,ue,ut),H=new qM(x,G,O,ue),Ue=new YM(x,W,y),ce=new FM(Z),pe=new lA(b,v,I,$,W,ut,ce),he=new IA(b,Z),fe=new hA,Be=new gA($),Ce=new DM(b,v,I,X,H,f,l),ve=new bA(b,H,W),N=new LA(x,ue,W,X),Te=new UM(x,$,ue),ke=new WM(x,$,ue),ue.programs=pe.programs,b.capabilities=W,b.extensions=$,b.properties=Z,b.renderLists=fe,b.shadowMap=ve,b.state=X,b.info=ue}ye();const Q=new CA(b,x);this.xr=Q,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const S=$.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=$.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(S){S!==void 0&&(V=S,this.setSize(J,ee,!1))},this.getSize=function(S){return S.set(J,ee)},this.setSize=function(S,U,q=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=S,ee=U,t.width=Math.floor(S*V),t.height=Math.floor(U*V),q===!0&&(t.style.width=S+"px",t.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(J*V,ee*V).floor()},this.setDrawingBufferSize=function(S,U,q){J=S,ee=U,V=q,t.width=Math.floor(S*q),t.height=Math.floor(U*q),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(L)},this.getViewport=function(S){return S.copy(Re)},this.setViewport=function(S,U,q,j){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,U,q,j),X.viewport(L.copy(Re).multiplyScalar(V).round())},this.getScissor=function(S){return S.copy(De)},this.setScissor=function(S,U,q,j){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,U,q,j),X.scissor(te.copy(De).multiplyScalar(V).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(S){X.setScissorTest(Qe=S)},this.setOpaqueSort=function(S){ge=S},this.setTransparentSort=function(S){be=S},this.getClearColor=function(S){return S.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(S=!0,U=!0,q=!0){let j=0;if(S){let k=!1;if(F!==null){const me=F.texture.format;k=me===Eu||me===Mu||me===Su}if(k){const me=F.texture.type,Se=me===fi||me===ls||me===sa||me===tr||me===xu||me===bu,we=Ce.getClearColor(),Pe=Ce.getClearAlpha(),ze=we.r,He=we.g,Ne=we.b;Se?(_[0]=ze,_[1]=He,_[2]=Ne,_[3]=Pe,x.clearBufferuiv(x.COLOR,0,_)):(g[0]=ze,g[1]=He,g[2]=Ne,g[3]=Pe,x.clearBufferiv(x.COLOR,0,g))}else j|=x.COLOR_BUFFER_BIT}U&&(j|=x.DEPTH_BUFFER_BIT),q&&(j|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Ae,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),Ce.dispose(),fe.dispose(),Be.dispose(),Z.dispose(),v.dispose(),I.dispose(),H.dispose(),ut.dispose(),N.dispose(),pe.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Hu),Q.removeEventListener("sessionend",Vu),Hi.stop()};function le(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const S=ue.autoReset,U=ve.enabled,q=ve.autoUpdate,j=ve.needsUpdate,k=ve.type;ye(),ue.autoReset=S,ve.enabled=U,ve.autoUpdate=q,ve.needsUpdate=j,ve.type=k}function Ee(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Xe(S){const U=S.target;U.removeEventListener("dispose",Xe),bt(U)}function bt(S){Ft(S),Z.remove(S)}function Ft(S){const U=Z.get(S).programs;U!==void 0&&(U.forEach(function(q){pe.releaseProgram(q)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,q,j,k,me){U===null&&(U=Le);const Se=k.isMesh&&k.matrixWorld.determinant()<0,we=km(S,U,q,j,k);X.setMaterial(j,Se);let Pe=q.index,ze=1;if(j.wireframe===!0){if(Pe=G.getWireframeAttribute(q),Pe===void 0)return;ze=2}const He=q.drawRange,Ne=q.attributes.position;let tt=He.start*ze,st=(He.start+He.count)*ze;me!==null&&(tt=Math.max(tt,me.start*ze),st=Math.min(st,(me.start+me.count)*ze)),Pe!==null?(tt=Math.max(tt,0),st=Math.min(st,Pe.count)):Ne!=null&&(tt=Math.max(tt,0),st=Math.min(st,Ne.count));const Mt=st-tt;if(Mt<0||Mt===1/0)return;ut.setup(k,j,we,q,Pe);let yt,nt=Te;if(Pe!==null&&(yt=O.get(Pe),nt=ke,nt.setIndex(yt)),k.isMesh)j.wireframe===!0?(X.setLineWidth(j.wireframeLinewidth*w()),nt.setMode(x.LINES)):nt.setMode(x.TRIANGLES);else if(k.isLine){let Fe=j.linewidth;Fe===void 0&&(Fe=1),X.setLineWidth(Fe*w()),k.isLineSegments?nt.setMode(x.LINES):k.isLineLoop?nt.setMode(x.LINE_LOOP):nt.setMode(x.LINE_STRIP)}else k.isPoints?nt.setMode(x.POINTS):k.isSprite&&nt.setMode(x.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)nt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if($.get("WEBGL_multi_draw"))nt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Fe=k._multiDrawStarts,Nt=k._multiDrawCounts,rt=k._multiDrawCount,vn=Pe?O.get(Pe).bytesPerElement:1,fs=Z.get(j).currentProgram.getUniforms();for(let nn=0;nn<rt;nn++)fs.setValue(x,"_gl_DrawID",nn),nt.render(Fe[nn]/vn,Nt[nn])}else if(k.isInstancedMesh)nt.renderInstances(tt,Mt,k.count);else if(q.isInstancedBufferGeometry){const Fe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Nt=Math.min(q.instanceCount,Fe);nt.renderInstances(tt,Mt,Nt)}else nt.render(tt,Mt)};function ht(S,U,q){S.transparent===!0&&S.side===Bn&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,pa(S,U,q),S.side=di,S.needsUpdate=!0,pa(S,U,q),S.side=Bn):pa(S,U,q)}this.compile=function(S,U,q=null){q===null&&(q=S),p=Be.get(q),p.init(U),E.push(p),q.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==q&&S.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const j=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const me=k.material;if(me)if(Array.isArray(me))for(let Se=0;Se<me.length;Se++){const we=me[Se];ht(we,q,k),j.add(we)}else ht(me,q,k),j.add(me)}),E.pop(),p=null,j},this.compileAsync=function(S,U,q=null){const j=this.compile(S,U,q);return new Promise(k=>{function me(){if(j.forEach(function(Se){Z.get(Se).currentProgram.isReady()&&j.delete(Se)}),j.size===0){k(S);return}setTimeout(me,10)}$.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let gn=null;function jn(S){gn&&gn(S)}function Hu(){Hi.stop()}function Vu(){Hi.start()}const Hi=new Em;Hi.setAnimationLoop(jn),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(S){gn=S,Q.setAnimationLoop(S),S===null?Hi.stop():Hi.start()},Q.addEventListener("sessionstart",Hu),Q.addEventListener("sessionend",Vu),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(U),U=Q.getCamera()),S.isScene===!0&&S.onBeforeRender(b,S,U,F),p=Be.get(S,E.length),p.init(U),E.push(p),se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(se),Me=this.localClippingEnabled,_e=ce.init(this.clippingPlanes,Me),m=fe.get(S,A.length),m.init(),A.push(m),Q.enabled===!0&&Q.isPresenting===!0){const me=b.xr.getDepthSensingMesh();me!==null&&Fo(me,U,-1/0,b.sortObjects)}Fo(S,U,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ge,be),Ie=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ie&&Ce.addToRenderList(m,S),this.info.render.frame++,_e===!0&&ce.beginShadows();const q=p.state.shadowsArray;ve.render(q,S,U),_e===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=m.opaque,k=m.transmissive;if(p.setupLights(),U.isArrayCamera){const me=U.cameras;if(k.length>0)for(let Se=0,we=me.length;Se<we;Se++){const Pe=me[Se];Wu(j,k,S,Pe)}Ie&&Ce.render(S);for(let Se=0,we=me.length;Se<we;Se++){const Pe=me[Se];Gu(m,S,Pe,Pe.viewport)}}else k.length>0&&Wu(j,k,S,U),Ie&&Ce.render(S),Gu(m,S,U);F!==null&&(y.updateMultisampleRenderTarget(F),y.updateRenderTargetMipmap(F)),S.isScene===!0&&S.onAfterRender(b,S,U),ut.resetDefaultState(),T=-1,M=null,E.pop(),E.length>0?(p=E[E.length-1],_e===!0&&ce.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Fo(S,U,q,j){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)q=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||ne.intersectsSprite(S)){j&&de.setFromMatrixPosition(S.matrixWorld).applyMatrix4(se);const Se=H.update(S),we=S.material;we.visible&&m.push(S,Se,we,q,de.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||ne.intersectsObject(S))){const Se=H.update(S),we=S.material;if(j&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),de.copy(S.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),de.copy(Se.boundingSphere.center)),de.applyMatrix4(S.matrixWorld).applyMatrix4(se)),Array.isArray(we)){const Pe=Se.groups;for(let ze=0,He=Pe.length;ze<He;ze++){const Ne=Pe[ze],tt=we[Ne.materialIndex];tt&&tt.visible&&m.push(S,Se,tt,q,de.z,Ne)}}else we.visible&&m.push(S,Se,we,q,de.z,null)}}const me=S.children;for(let Se=0,we=me.length;Se<we;Se++)Fo(me[Se],U,q,j)}function Gu(S,U,q,j){const k=S.opaque,me=S.transmissive,Se=S.transparent;p.setupLightsView(q),_e===!0&&ce.setGlobalState(b.clippingPlanes,q),j&&X.viewport(L.copy(j)),k.length>0&&fa(k,U,q),me.length>0&&fa(me,U,q),Se.length>0&&fa(Se,U,q),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Wu(S,U,q,j){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new cs(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?ha:fi,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const me=p.state.transmissionRenderTarget[j.id],Se=j.viewport||L;me.setSize(Se.z,Se.w);const we=b.getRenderTarget();b.setRenderTarget(me),b.getClearColor(ae),oe=b.getClearAlpha(),oe<1&&b.setClearColor(16777215,.5),b.clear(),Ie&&Ce.render(q);const Pe=b.toneMapping;b.toneMapping=Di;const ze=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),_e===!0&&ce.setGlobalState(b.clippingPlanes,j),fa(S,q,j),y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me),$.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ne=0,tt=U.length;Ne<tt;Ne++){const st=U[Ne],Mt=st.object,yt=st.geometry,nt=st.material,Fe=st.group;if(nt.side===Bn&&Mt.layers.test(j.layers)){const Nt=nt.side;nt.side=tn,nt.needsUpdate=!0,Xu(Mt,q,j,yt,nt,Fe),nt.side=Nt,nt.needsUpdate=!0,He=!0}}He===!0&&(y.updateMultisampleRenderTarget(me),y.updateRenderTargetMipmap(me))}b.setRenderTarget(we),b.setClearColor(ae,oe),ze!==void 0&&(j.viewport=ze),b.toneMapping=Pe}function fa(S,U,q){const j=U.isScene===!0?U.overrideMaterial:null;for(let k=0,me=S.length;k<me;k++){const Se=S[k],we=Se.object,Pe=Se.geometry,ze=j===null?Se.material:j,He=Se.group;we.layers.test(q.layers)&&Xu(we,U,q,Pe,ze,He)}}function Xu(S,U,q,j,k,me){S.onBeforeRender(b,U,q,j,k,me),S.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(b,U,q,j,S,me),k.transparent===!0&&k.side===Bn&&k.forceSinglePass===!1?(k.side=tn,k.needsUpdate=!0,b.renderBufferDirect(q,U,j,k,S,me),k.side=di,k.needsUpdate=!0,b.renderBufferDirect(q,U,j,k,S,me),k.side=Bn):b.renderBufferDirect(q,U,j,k,S,me),S.onAfterRender(b,U,q,j,k,me)}function pa(S,U,q){U.isScene!==!0&&(U=Le);const j=Z.get(S),k=p.state.lights,me=p.state.shadowsArray,Se=k.state.version,we=pe.getParameters(S,k.state,me,U,q),Pe=pe.getProgramCacheKey(we);let ze=j.programs;j.environment=S.isMeshStandardMaterial?U.environment:null,j.fog=U.fog,j.envMap=(S.isMeshStandardMaterial?I:v).get(S.envMap||j.environment),j.envMapRotation=j.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",Xe),ze=new Map,j.programs=ze);let He=ze.get(Pe);if(He!==void 0){if(j.currentProgram===He&&j.lightsStateVersion===Se)return qu(S,we),He}else we.uniforms=pe.getUniforms(S),S.onBeforeCompile(we,b),He=pe.acquireProgram(we,Pe),ze.set(Pe,He),j.uniforms=we.uniforms;const Ne=j.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ne.clippingPlanes=ce.uniform),qu(S,we),j.needsLights=zm(S),j.lightsStateVersion=Se,j.needsLights&&(Ne.ambientLightColor.value=k.state.ambient,Ne.lightProbe.value=k.state.probe,Ne.directionalLights.value=k.state.directional,Ne.directionalLightShadows.value=k.state.directionalShadow,Ne.spotLights.value=k.state.spot,Ne.spotLightShadows.value=k.state.spotShadow,Ne.rectAreaLights.value=k.state.rectArea,Ne.ltc_1.value=k.state.rectAreaLTC1,Ne.ltc_2.value=k.state.rectAreaLTC2,Ne.pointLights.value=k.state.point,Ne.pointLightShadows.value=k.state.pointShadow,Ne.hemisphereLights.value=k.state.hemi,Ne.directionalShadowMap.value=k.state.directionalShadowMap,Ne.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ne.spotShadowMap.value=k.state.spotShadowMap,Ne.spotLightMatrix.value=k.state.spotLightMatrix,Ne.spotLightMap.value=k.state.spotLightMap,Ne.pointShadowMap.value=k.state.pointShadowMap,Ne.pointShadowMatrix.value=k.state.pointShadowMatrix),j.currentProgram=He,j.uniformsList=null,He}function Yu(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=io.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function qu(S,U){const q=Z.get(S);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function km(S,U,q,j,k){U.isScene!==!0&&(U=Le),y.resetTextureUnits();const me=U.fog,Se=j.isMeshStandardMaterial?U.environment:null,we=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Jt,Pe=(j.isMeshStandardMaterial?I:v).get(j.envMap||Se),ze=j.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,He=!!q.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ne=!!q.morphAttributes.position,tt=!!q.morphAttributes.normal,st=!!q.morphAttributes.color;let Mt=Di;j.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const yt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nt=yt!==void 0?yt.length:0,Fe=Z.get(j),Nt=p.state.lights;if(_e===!0&&(Me===!0||S!==M)){const Wt=S===M&&j.id===T;ce.setState(j,S,Wt)}let rt=!1;j.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Nt.state.version||Fe.outputColorSpace!==we||k.isBatchedMesh&&Fe.batching===!1||!k.isBatchedMesh&&Fe.batching===!0||k.isBatchedMesh&&Fe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Fe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Fe.instancing===!1||!k.isInstancedMesh&&Fe.instancing===!0||k.isSkinnedMesh&&Fe.skinning===!1||!k.isSkinnedMesh&&Fe.skinning===!0||k.isInstancedMesh&&Fe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Fe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Fe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Fe.instancingMorph===!1&&k.morphTexture!==null||Fe.envMap!==Pe||j.fog===!0&&Fe.fog!==me||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==ce.numPlanes||Fe.numIntersection!==ce.numIntersection)||Fe.vertexAlphas!==ze||Fe.vertexTangents!==He||Fe.morphTargets!==Ne||Fe.morphNormals!==tt||Fe.morphColors!==st||Fe.toneMapping!==Mt||Fe.morphTargetsCount!==nt)&&(rt=!0):(rt=!0,Fe.__version=j.version);let vn=Fe.currentProgram;rt===!0&&(vn=pa(j,U,k));let fs=!1,nn=!1,pr=!1;const gt=vn.getUniforms(),un=Fe.uniforms;if(X.useProgram(vn.program)&&(fs=!0,nn=!0,pr=!0),j.id!==T&&(T=j.id,nn=!0),fs||M!==S){X.buffers.depth.getReversed()?(D.copy(S.projectionMatrix),Nx(D),Ux(D),gt.setValue(x,"projectionMatrix",D)):gt.setValue(x,"projectionMatrix",S.projectionMatrix),gt.setValue(x,"viewMatrix",S.matrixWorldInverse);const Qt=gt.map.cameraPosition;Qt!==void 0&&Qt.setValue(x,ie.setFromMatrixPosition(S.matrixWorld)),W.logarithmicDepthBuffer&&gt.setValue(x,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&gt.setValue(x,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,nn=!0,pr=!0)}if(k.isSkinnedMesh){gt.setOptional(x,k,"bindMatrix"),gt.setOptional(x,k,"bindMatrixInverse");const Wt=k.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),gt.setValue(x,"boneTexture",Wt.boneTexture,y))}k.isBatchedMesh&&(gt.setOptional(x,k,"batchingTexture"),gt.setValue(x,"batchingTexture",k._matricesTexture,y),gt.setOptional(x,k,"batchingIdTexture"),gt.setValue(x,"batchingIdTexture",k._indirectTexture,y),gt.setOptional(x,k,"batchingColorTexture"),k._colorsTexture!==null&&gt.setValue(x,"batchingColorTexture",k._colorsTexture,y));const hn=q.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Ue.update(k,q,vn),(nn||Fe.receiveShadow!==k.receiveShadow)&&(Fe.receiveShadow=k.receiveShadow,gt.setValue(x,"receiveShadow",k.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(un.envMap.value=Pe,un.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),nn&&(gt.setValue(x,"toneMappingExposure",b.toneMappingExposure),Fe.needsLights&&Bm(un,pr),me&&j.fog===!0&&he.refreshFogUniforms(un,me),he.refreshMaterialUniforms(un,j,V,ee,p.state.transmissionRenderTarget[S.id]),io.upload(x,Yu(Fe),un,y)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(io.upload(x,Yu(Fe),un,y),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&gt.setValue(x,"center",k.center),gt.setValue(x,"modelViewMatrix",k.modelViewMatrix),gt.setValue(x,"normalMatrix",k.normalMatrix),gt.setValue(x,"modelMatrix",k.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const Wt=j.uniformsGroups;for(let Qt=0,ko=Wt.length;Qt<ko;Qt++){const Vi=Wt[Qt];N.update(Vi,vn),N.bind(Vi,vn)}}return vn}function Bm(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function zm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(S,U,q){Z.get(S.texture).__webglTexture=U,Z.get(S.depthTexture).__webglTexture=q;const j=Z.get(S);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=q===void 0,j.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const q=Z.get(S);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,q=0){F=S,P=U,R=q;let j=!0,k=null,me=!1,Se=!1;if(S){const Pe=Z.get(S);if(Pe.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(x.FRAMEBUFFER,null),j=!1;else if(Pe.__webglFramebuffer===void 0)y.setupRenderTarget(S);else if(Pe.__hasExternalTextures)y.rebindTextures(S,Z.get(S.texture).__webglTexture,Z.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ne=S.depthTexture;if(Pe.__boundDepthTexture!==Ne){if(Ne!==null&&Z.has(Ne)&&(S.width!==Ne.image.width||S.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(S)}}const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);const He=Z.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(He[U])?k=He[U][q]:k=He[U],me=!0):S.samples>0&&y.useMultisampledRTT(S)===!1?k=Z.get(S).__webglMultisampledFramebuffer:Array.isArray(He)?k=He[q]:k=He,L.copy(S.viewport),te.copy(S.scissor),K=S.scissorTest}else L.copy(Re).multiplyScalar(V).floor(),te.copy(De).multiplyScalar(V).floor(),K=Qe;if(X.bindFramebuffer(x.FRAMEBUFFER,k)&&j&&X.drawBuffers(S,k),X.viewport(L),X.scissor(te),X.setScissorTest(K),me){const Pe=Z.get(S.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pe.__webglTexture,q)}else if(Se){const Pe=Z.get(S.texture),ze=U||0;x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,Pe.__webglTexture,q||0,ze)}T=-1},this.readRenderTargetPixels=function(S,U,q,j,k,me,Se){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){X.bindFramebuffer(x.FRAMEBUFFER,we);try{const Pe=S.texture,ze=Pe.format,He=Pe.type;if(!W.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!W.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-j&&q>=0&&q<=S.height-k&&x.readPixels(U,q,j,k,Oe.convert(ze),Oe.convert(He),me)}finally{const Pe=F!==null?Z.get(F).__webglFramebuffer:null;X.bindFramebuffer(x.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(S,U,q,j,k,me,Se){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Z.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){const Pe=S.texture,ze=Pe.format,He=Pe.type;if(!W.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!W.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-j&&q>=0&&q<=S.height-k){X.bindFramebuffer(x.FRAMEBUFFER,we);const Ne=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,Ne),x.bufferData(x.PIXEL_PACK_BUFFER,me.byteLength,x.STREAM_READ),x.readPixels(U,q,j,k,Oe.convert(ze),Oe.convert(He),0);const tt=F!==null?Z.get(F).__webglFramebuffer:null;X.bindFramebuffer(x.FRAMEBUFFER,tt);const st=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Dx(x,st,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,Ne),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,me),x.deleteBuffer(Ne),x.deleteSync(st),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,U=null,q=0){S.isTexture!==!0&&(Ls("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const j=Math.pow(2,-q),k=Math.floor(S.image.width*j),me=Math.floor(S.image.height*j),Se=U!==null?U.x:0,we=U!==null?U.y:0;y.setTexture2D(S,0),x.copyTexSubImage2D(x.TEXTURE_2D,q,0,0,Se,we,k,me),X.unbindTexture()};const Hm=x.createFramebuffer(),Vm=x.createFramebuffer();this.copyTextureToTexture=function(S,U,q=null,j=null,k=0,me=null){S.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,S=arguments[1],U=arguments[2],me=arguments[3]||0,q=null),me===null&&(k!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=k,k=0):me=0);let Se,we,Pe,ze,He,Ne,tt,st,Mt;const yt=S.isCompressedTexture?S.mipmaps[me]:S.image;if(q!==null)Se=q.max.x-q.min.x,we=q.max.y-q.min.y,Pe=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,He=q.min.y,Ne=q.isBox3?q.min.z:0;else{const hn=Math.pow(2,-k);Se=Math.floor(yt.width*hn),we=Math.floor(yt.height*hn),S.isDataArrayTexture?Pe=yt.depth:S.isData3DTexture?Pe=Math.floor(yt.depth*hn):Pe=1,ze=0,He=0,Ne=0}j!==null?(tt=j.x,st=j.y,Mt=j.z):(tt=0,st=0,Mt=0);const nt=Oe.convert(U.format),Fe=Oe.convert(U.type);let Nt;U.isData3DTexture?(y.setTexture3D(U,0),Nt=x.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(y.setTexture2DArray(U,0),Nt=x.TEXTURE_2D_ARRAY):(y.setTexture2D(U,0),Nt=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,U.unpackAlignment);const rt=x.getParameter(x.UNPACK_ROW_LENGTH),vn=x.getParameter(x.UNPACK_IMAGE_HEIGHT),fs=x.getParameter(x.UNPACK_SKIP_PIXELS),nn=x.getParameter(x.UNPACK_SKIP_ROWS),pr=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,ze),x.pixelStorei(x.UNPACK_SKIP_ROWS,He),x.pixelStorei(x.UNPACK_SKIP_IMAGES,Ne);const gt=S.isDataArrayTexture||S.isData3DTexture,un=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){const hn=Z.get(S),Wt=Z.get(U),Qt=Z.get(hn.__renderTarget),ko=Z.get(Wt.__renderTarget);X.bindFramebuffer(x.READ_FRAMEBUFFER,Qt.__webglFramebuffer),X.bindFramebuffer(x.DRAW_FRAMEBUFFER,ko.__webglFramebuffer);for(let Vi=0;Vi<Pe;Vi++)gt&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Z.get(S).__webglTexture,k,Ne+Vi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Z.get(U).__webglTexture,me,Mt+Vi)),x.blitFramebuffer(ze,He,Se,we,tt,st,Se,we,x.DEPTH_BUFFER_BIT,x.NEAREST);X.bindFramebuffer(x.READ_FRAMEBUFFER,null),X.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||Z.has(S)){const hn=Z.get(S),Wt=Z.get(U);X.bindFramebuffer(x.READ_FRAMEBUFFER,Hm),X.bindFramebuffer(x.DRAW_FRAMEBUFFER,Vm);for(let Qt=0;Qt<Pe;Qt++)gt?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,hn.__webglTexture,k,Ne+Qt):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,hn.__webglTexture,k),un?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Wt.__webglTexture,me,Mt+Qt):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Wt.__webglTexture,me),k!==0?x.blitFramebuffer(ze,He,Se,we,tt,st,Se,we,x.COLOR_BUFFER_BIT,x.NEAREST):un?x.copyTexSubImage3D(Nt,me,tt,st,Mt+Qt,ze,He,Se,we):x.copyTexSubImage2D(Nt,me,tt,st,ze,He,Se,we);X.bindFramebuffer(x.READ_FRAMEBUFFER,null),X.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else un?S.isDataTexture||S.isData3DTexture?x.texSubImage3D(Nt,me,tt,st,Mt,Se,we,Pe,nt,Fe,yt.data):U.isCompressedArrayTexture?x.compressedTexSubImage3D(Nt,me,tt,st,Mt,Se,we,Pe,nt,yt.data):x.texSubImage3D(Nt,me,tt,st,Mt,Se,we,Pe,nt,Fe,yt):S.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,me,tt,st,Se,we,nt,Fe,yt.data):S.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,me,tt,st,yt.width,yt.height,nt,yt.data):x.texSubImage2D(x.TEXTURE_2D,me,tt,st,Se,we,nt,Fe,yt);x.pixelStorei(x.UNPACK_ROW_LENGTH,rt),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,vn),x.pixelStorei(x.UNPACK_SKIP_PIXELS,fs),x.pixelStorei(x.UNPACK_SKIP_ROWS,nn),x.pixelStorei(x.UNPACK_SKIP_IMAGES,pr),me===0&&U.generateMipmaps&&x.generateMipmap(Nt),X.unbindTexture()},this.copyTextureToTexture3D=function(S,U,q=null,j=null,k=0){return S.isTexture!==!0&&(Ls("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,j=arguments[1]||null,S=arguments[2],U=arguments[3],k=arguments[4]||0),Ls('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,U,q,j,k)},this.initRenderTarget=function(S){Z.get(S).__webglFramebuffer===void 0&&y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?y.setTextureCube(S,0):S.isData3DTexture?y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?y.setTexture2DArray(S,0):y.setTexture2D(S,0),X.unbindTexture()},this.resetState=function(){P=0,R=0,F=null,X.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}function ef(n,e){if(e===sx)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Uc||e===tm){let t=n.getIndex();if(t===null){const a=[],o=n.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);n.setIndex(a),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Uc)for(let a=1;a<=i;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class NA extends dr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new BA(t)}),this.register(function(t){return new zA(t)}),this.register(function(t){return new KA(t)}),this.register(function(t){return new $A(t)}),this.register(function(t){return new ZA(t)}),this.register(function(t){return new VA(t)}),this.register(function(t){return new GA(t)}),this.register(function(t){return new WA(t)}),this.register(function(t){return new XA(t)}),this.register(function(t){return new kA(t)}),this.register(function(t){return new YA(t)}),this.register(function(t){return new HA(t)}),this.register(function(t){return new jA(t)}),this.register(function(t){return new qA(t)}),this.register(function(t){return new OA(t)}),this.register(function(t){return new JA(t)}),this.register(function(t){return new QA(t)})}load(e,t,i,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Yr.extractUrlBase(e);a=Yr.resolveURL(c,this.path)}else a=Yr.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new ym(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Cm){try{a[Ze.KHR_BINARY_GLTF]=new eT(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new fT(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Ze.KHR_MATERIALS_UNLIT:a[h]=new FA;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[h]=new tT(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[h]=new nT;break;case Ze.KHR_MESH_QUANTIZATION:a[h]=new iT;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function UA(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class OA{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Ge(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Jt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mm(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Db(u),c.distance=h;break;case"spot":c=new Ib(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,ri(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class FA{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return is}extendParams(e,t,i){const s=[];e.color=new Ge(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Jt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Ut))}return Promise.all(s)}}class kA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class BA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(o,o)}return Promise.all(r)}}class zA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class HA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class VA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Ge(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Jt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ut)),a.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class GA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class WA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ge().setRGB(o[0],o[1],o[2],Jt),Promise.all(r)}}class XA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class YA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ge().setRGB(o[0],o[1],o[2],Jt),a.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,Ut)),Promise.all(r)}}class qA{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class jA{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class KA{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class $A{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class ZA{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class JA{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class QA{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==fn.TRIANGLES&&c.mode!==fn.TRIANGLE_STRIP&&c.mode!==fn.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(const _ of h){const g=new qe,m=new B,p=new Cn,A=new B(1,1,1),E=new ub(_.geometry,_.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&A.fromBufferAttribute(l.SCALE,b),E.setMatrixAt(b,g.compose(m,p,A));for(const b in l)if(b==="_COLOR_0"){const C=l[b];E.instanceColor=new Fc(C.array,C.itemSize,C.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&_.geometry.setAttribute(b,l[b]);xt.prototype.copy.call(E,_),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const Cm="glTF",Tr=12,tf={JSON:1313821514,BIN:5130562};class eT{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Tr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Cm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Tr,r=new DataView(e,Tr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===tf.JSON){const c=new Uint8Array(e,Tr+a,o);this.content=i.decode(c)}else if(l===tf.BIN){const c=Tr+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Hc[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Hc[u]||u.toLowerCase();if(a[u]!==void 0){const d=i.accessors[e.attributes[u]],f=qs[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}h(f)},o,c,Jt,d)})})}}class nT{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class iT{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class Pm extends da{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(i-t)/u,d=h*h,f=d*h,_=e*c,g=_-c,m=-2*f+3*d,p=f-d,A=1-m,E=p-d+h;for(let b=0;b!==o;b++){const C=a[g+b+o],P=a[g+b+l]*u,R=a[_+b+o],F=a[_+b]*u;r[b]=A*C+E*P+m*R+p*F}return r}}const sT=new Cn;class rT extends Pm{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return sT.fromArray(r).normalize().toArray(r),r}}const fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},nf={9728:$t,9729:cn,9984:Xp,9985:Za,9986:Lr,9987:oi},sf={33071:Ci,33648:ho,10497:er},Dl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Hc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Mi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aT={CUBICSPLINE:void 0,LINEAR:aa,STEP:ra},Nl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function oT(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Lu({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:di})),n.DefaultMaterial}function Zi(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ri(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function lT(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function cT(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function uT(n){let e;const t=n.extensions&&n.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ul(t.attributes):e=n.indices+":"+Ul(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Ul(n.targets[i]);return e}function Ul(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Vc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function hT(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const dT=new qe;class fT{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new UA,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);s=i&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?this.textureLoader=new Sm(this.options.manager):this.textureLoader=new Ob(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ym(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Zi(r,o,s),ri(o,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())r(u,o.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){i.load(Yr.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Dl[s.type],o=qs[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Zt(c,a,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Dl[s.type],c=qs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,m;if(f&&f!==h){const p=Math.floor(d/f),A="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let E=t.cache.get(A);E||(g=new c(o,p*f,s.count*f/u),E=new rb(g,f/u),t.cache.add(A,E)),m=new Ru(E,l,d%f/u,_)}else o===null?g=new c(s.count*l):g=new c(o,d,s.count*l),m=new Zt(g,l,_);if(s.sparse!==void 0){const p=Dl.SCALAR,A=qs[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,C=new A(a[1],E,s.sparse.count*p),P=new c(a[2],b,s.sparse.count*l);o!==null&&(m=new Zt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,F=C.length;R<F;R++){const T=C[R];if(m.setX(T,P[R*l]),l>=2&&m.setY(T,P[R*l+1]),l>=3&&m.setZ(T,P[R*l+2]),l>=4&&m.setW(T,P[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){const s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=nf[d.magFilter]||cn,u.minFilter=nf[d.minFilter]||oi,u.wrapS=sf[d.wrapS]||er,u.wrapT=sf[d.wrapT]||er,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==$t&&u.minFilter!==cn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new It(g);m.needsUpdate=!0,d(m)}),t.load(Yr.resolveURL(h,r.path),_,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),ri(h,a),h.userData.mimeType=a.mimeType||hT(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new _m,Pn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new mm,Pn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Lu}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){const h=s[Ze.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Ge(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Jt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ut)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Bn);const u=r.alphaMode||Nl.OPAQUE;if(u===Nl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Nl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==is&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Je(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==is&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==is){const h=r.emissiveFactor;o.emissive=new Ge().setRGB(h[0],h[1],h[2],Jt)}return r.emissiveTexture!==void 0&&a!==is&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ut)),Promise.all(c).then(function(){const h=new a(o);return r.name&&(h.name=r.name),ri(h,r),t.associations.set(h,{materials:e}),r.extensions&&Zi(s,h,r),h})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return rf(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=uT(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=rf(new Xn,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?oT(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,_=u.length;f<_;f++){const g=u[f],m=a[f];let p;const A=c[f];if(m.mode===fn.TRIANGLES||m.mode===fn.TRIANGLE_STRIP||m.mode===fn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ob(g,A):new en(g,A),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===fn.TRIANGLE_STRIP?p.geometry=ef(p.geometry,tm):m.mode===fn.TRIANGLE_FAN&&(p.geometry=ef(p.geometry,Uc));else if(m.mode===fn.LINES)p=new fb(g,A);else if(m.mode===fn.LINE_STRIP)p=new Iu(g,A);else if(m.mode===fn.LINE_LOOP)p=new pb(g,A);else if(m.mode===fn.POINTS)p=new mb(g,A);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&cT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),ri(p,r),m.extensions&&Zi(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,_=h.length;f<_;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Zi(s,h[0],r),h[0];const d=new ss;r.extensions&&Zi(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=h.length;f<_;f++)d.add(h[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Kt(Ix.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Nu(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ri(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const d=new qe;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Cu(o,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],_=s.samplers[f.sampler],g=f.target,m=g.node,p=s.parameters!==void 0?s.parameters[_.input]:_.input,A=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",A)),c.push(_),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],_=h[2],g=h[3],m=h[4],p=[];for(let A=0,E=d.length;A<E;A++){const b=d[A],C=f[A],P=_[A],R=g[A],F=m[A];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const T=i._createAnimationTracks(b,C,P,R,F);if(T)for(let M=0;M<T.length;M++)p.push(T[M])}return new Bc(r,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(i.getDependency("node",o[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,dT)});for(let f=0,_=h.length;f<_;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new fm:c.length>1?u=new ss:c.length===1?u=c[0]:u=new xt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),ri(u,r),r.extensions&&Zi(i,u,r),r.matrix!==void 0){const h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new ss;i.name&&(r.name=s.createUniqueName(i.name)),ri(r,i),i.extensions&&Zi(t,r,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Pn||d instanceof It)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const a=[],o=e.name?e.name:e.uuid,l=[];Mi[r.path]===Mi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(Mi[r.path]){case Mi.weights:c=rr;break;case Mi.rotation:c=ar;break;case Mi.position:case Mi.scale:c=or;break;default:switch(i.itemSize){case 1:c=rr;break;case 2:case 3:default:c=or;break}break}const u=s.interpolation!==void 0?aT[s.interpolation]:aa,h=this._getArrayFromAccessor(i);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+Mi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Vc(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof ar?rT:Pm;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function pT(n,e,t){const i=e.attributes,s=new mi;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),o.normalized){const u=Vc(qs[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new B,l=new B;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=Vc(qs[d.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}n.boundingBox=s;const a=new Wn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=a}function rf(n,e,t){const i=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){n.setAttribute(o,l)})}for(const a in i){const o=Hc[a]||a.toLowerCase();o in n.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!n.index){const a=t.getDependency("accessor",e.indices).then(function(o){n.setIndex(o)});s.push(a)}return et.workingColorSpace!==Jt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),ri(n,e),pT(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?lT(n,e.targets,t):n})}function mT(n){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=n,document.head.appendChild(e),n}}function ks(n,e){var t=n.__state.conversionName.toString(),i=Math.round(n.r),s=Math.round(n.g),r=Math.round(n.b),a=n.a,o=Math.round(n.h),l=n.s.toFixed(1),c=n.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=n.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+i+","+s+","+r+")";if(t==="CSS_RGBA")return"rgba("+i+","+s+","+r+","+a+")";if(t==="HEX")return"0x"+n.hex.toString(16);if(t==="RGB_ARRAY")return"["+i+","+s+","+r+"]";if(t==="RGBA_ARRAY")return"["+i+","+s+","+r+","+a+"]";if(t==="RGB_OBJ")return"{r:"+i+",g:"+s+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+i+",g:"+s+",b:"+r+",a:"+a+"}";if(t==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var af=Array.prototype.forEach,wr=Array.prototype.slice,re={BREAK:{},extend:function(e){return this.each(wr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(s){this.isUndefined(t[s])||(e[s]=t[s])}).bind(this))},this),e},defaults:function(e){return this.each(wr.call(arguments,1),function(t){var i=this.isObject(t)?Object.keys(t):[];i.forEach((function(s){this.isUndefined(e[s])&&(e[s]=t[s])}).bind(this))},this),e},compose:function(){var e=wr.call(arguments);return function(){for(var t=wr.call(arguments),i=e.length-1;i>=0;i--)t=[e[i].apply(this,t)];return t[0]}},each:function(e,t,i){if(e){if(af&&e.forEach&&e.forEach===af)e.forEach(t,i);else if(e.length===e.length+0){var s=void 0,r=void 0;for(s=0,r=e.length;s<r;s++)if(s in e&&t.call(i,e[s],s)===this.BREAK)return}else for(var a in e)if(t.call(i,e[a],a)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,i){var s=void 0;return function(){var r=this,a=arguments;function o(){s=null,i||e.apply(r,a)}var l=i||!s;clearTimeout(s),s=setTimeout(o,t),l&&e.apply(r,a)}},toArray:function(e){return e.toArray?e.toArray():wr.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(n){function e(t){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}(function(n){return isNaN(n)}),isArray:Array.isArray||function(n){return n.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},_T=[{litmus:re.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:ks},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:ks},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:ks},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:ks}}},{litmus:re.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:re.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:re.isObject,conversions:{RGBA_OBJ:{read:function(e){return re.isNumber(e.r)&&re.isNumber(e.g)&&re.isNumber(e.b)&&re.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return re.isNumber(e.r)&&re.isNumber(e.g)&&re.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return re.isNumber(e.h)&&re.isNumber(e.s)&&re.isNumber(e.v)&&re.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return re.isNumber(e.h)&&re.isNumber(e.s)&&re.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Rr=void 0,Xa=void 0,Gc=function(){Xa=!1;var e=arguments.length>1?re.toArray(arguments):arguments[0];return re.each(_T,function(t){if(t.litmus(e))return re.each(t.conversions,function(i,s){if(Rr=i.read(e),Xa===!1&&Rr!==!1)return Xa=Rr,Rr.conversionName=s,Rr.conversion=i,re.BREAK}),re.BREAK}),Xa},of=void 0,vo={hsv_to_rgb:function(e,t,i){var s=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),a=i*(1-t),o=i*(1-r*t),l=i*(1-(1-r)*t),c=[[i,l,a],[o,i,a],[a,i,l],[a,o,i],[l,a,i],[i,a,o]][s];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,i){var s=Math.min(e,t,i),r=Math.max(e,t,i),a=r-s,o=void 0,l=void 0;if(r!==0)l=a/r;else return{h:NaN,s:0,v:0};return e===r?o=(t-i)/a:t===r?o=2+(i-e)/a:o=4+(e-t)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:r/255}},rgb_to_hex:function(e,t,i){var s=this.hex_with_component(0,2,e);return s=this.hex_with_component(s,1,t),s=this.hex_with_component(s,0,i),s},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,i){return i<<(of=t*8)|e&~(255<<of)}},gT=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},Ln=function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")},Dn=function(){function n(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}(),Ui=function n(e,t,i){e===null&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,t);if(s===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:n(r,t,i)}else{if("value"in s)return s.value;var a=s.get;return a===void 0?void 0:a.call(i)}},Bi=function(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)},zi=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:n},Lt=function(){function n(){if(Ln(this,n),this.__state=Gc.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return Dn(n,[{key:"toString",value:function(){return ks(this)}},{key:"toHexString",value:function(){return ks(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),n}();function ku(n,e,t){Object.defineProperty(n,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(Lt.recalculateRGB(this,e,t),this.__state[e])},set:function(s){this.__state.space!=="RGB"&&(Lt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=s}})}function Bu(n,e){Object.defineProperty(n,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(Lt.recalculateHSV(this),this.__state[e])},set:function(i){this.__state.space!=="HSV"&&(Lt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=i}})}Lt.recalculateRGB=function(n,e,t){if(n.__state.space==="HEX")n.__state[e]=vo.component_from_hex(n.__state.hex,t);else if(n.__state.space==="HSV")re.extend(n.__state,vo.hsv_to_rgb(n.__state.h,n.__state.s,n.__state.v));else throw new Error("Corrupted color state")};Lt.recalculateHSV=function(n){var e=vo.rgb_to_hsv(n.r,n.g,n.b);re.extend(n.__state,{s:e.s,v:e.v}),re.isNaN(e.h)?re.isUndefined(n.__state.h)&&(n.__state.h=0):n.__state.h=e.h};Lt.COMPONENTS=["r","g","b","h","s","v","hex","a"];ku(Lt.prototype,"r",2);ku(Lt.prototype,"g",1);ku(Lt.prototype,"b",0);Bu(Lt.prototype,"h");Bu(Lt.prototype,"s");Bu(Lt.prototype,"v");Object.defineProperty(Lt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(Lt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=vo.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var ds=function(){function n(e,t){Ln(this,n),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return Dn(n,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),n}(),vT={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Im={};re.each(vT,function(n,e){re.each(n,function(t){Im[t]=e})});var xT=/(\d+(\.\d+)?)px/;function Un(n){if(n==="0"||re.isUndefined(n))return 0;var e=n.match(xT);return re.isNull(e)?0:parseFloat(e[1])}var Y={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,i){var s=i,r=t;re.isUndefined(r)&&(r=!0),re.isUndefined(s)&&(s=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),s&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,i,s){var r=i||{},a=Im[t];if(!a)throw new Error("Event type "+t+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=r.x||r.clientX||0,c=r.y||r.clientY||0;o.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;re.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{o.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}re.defaults(o,s),e.dispatchEvent(o)},bind:function(e,t,i,s){var r=s||!1;return e.addEventListener?e.addEventListener(t,i,r):e.attachEvent&&e.attachEvent("on"+t,i),Y},unbind:function(e,t,i,s){var r=s||!1;return e.removeEventListener?e.removeEventListener(t,i,r):e.detachEvent&&e.detachEvent("on"+t,i),Y},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var i=e.className.split(/ +/);i.indexOf(t)===-1&&(i.push(t),e.className=i.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return Y},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var i=e.className.split(/ +/),s=i.indexOf(t);s!==-1&&(i.splice(s,1),e.className=i.join(" "))}else e.className=void 0;return Y},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Un(t["border-left-width"])+Un(t["border-right-width"])+Un(t["padding-left"])+Un(t["padding-right"])+Un(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Un(t["border-top-width"])+Un(t["border-bottom-width"])+Un(t["padding-top"])+Un(t["padding-bottom"])+Un(t.height)},getOffset:function(e){var t=e,i={left:0,top:0};if(t.offsetParent)do i.left+=t.offsetLeft,i.top+=t.offsetTop,t=t.offsetParent;while(t);return i},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Lm=function(n){Bi(e,n);function e(t,i){Ln(this,e);var s=zi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),r=s;s.__prev=s.getValue(),s.__checkbox=document.createElement("input"),s.__checkbox.setAttribute("type","checkbox");function a(){r.setValue(!r.__prev)}return Y.bind(s.__checkbox,"change",a,!1),s.domElement.appendChild(s.__checkbox),s.updateDisplay(),s}return Dn(e,[{key:"setValue",value:function(i){var s=Ui(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),s}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ui(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ds),bT=function(n){Bi(e,n);function e(t,i,s){Ln(this,e);var r=zi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=s,o=r;if(r.__select=document.createElement("select"),re.isArray(a)){var l={};re.each(a,function(c){l[c]=c}),a=l}return re.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),o.__select.appendChild(h)}),r.updateDisplay(),Y.bind(r.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),r.domElement.appendChild(r.__select),r}return Dn(e,[{key:"setValue",value:function(i){var s=Ui(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,i);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),s}},{key:"updateDisplay",value:function(){return Y.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ui(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(ds),yT=function(n){Bi(e,n);function e(t,i){Ln(this,e);var s=zi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),r=s;function a(){r.setValue(r.__input.value)}function o(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),Y.bind(s.__input,"keyup",a),Y.bind(s.__input,"change",a),Y.bind(s.__input,"blur",o),Y.bind(s.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return Dn(e,[{key:"updateDisplay",value:function(){return Y.isActive(this.__input)||(this.__input.value=this.getValue()),Ui(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ds);function lf(n){var e=n.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var Dm=function(n){Bi(e,n);function e(t,i,s){Ln(this,e);var r=zi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=s||{};return r.__min=a.min,r.__max=a.max,r.__step=a.step,re.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=lf(r.__impliedStep),r}return Dn(e,[{key:"setValue",value:function(i){var s=i;return this.__min!==void 0&&s<this.__min?s=this.__min:this.__max!==void 0&&s>this.__max&&(s=this.__max),this.__step!==void 0&&s%this.__step!==0&&(s=Math.round(s/this.__step)*this.__step),Ui(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,s)}},{key:"min",value:function(i){return this.__min=i,this}},{key:"max",value:function(i){return this.__max=i,this}},{key:"step",value:function(i){return this.__step=i,this.__impliedStep=i,this.__precision=lf(i),this}}]),e}(ds);function ST(n,e){var t=Math.pow(10,e);return Math.round(n*t)/t}var xo=function(n){Bi(e,n);function e(t,i,s){Ln(this,e);var r=zi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,s));r.__truncationSuspended=!1;var a=r,o=void 0;function l(){var _=parseFloat(a.__input.value);re.isNaN(_)||a.setValue(_)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(_){var g=o-_.clientY;a.setValue(a.getValue()+g*a.__impliedStep),o=_.clientY}function d(){Y.unbind(window,"mousemove",h),Y.unbind(window,"mouseup",d),c()}function f(_){Y.bind(window,"mousemove",h),Y.bind(window,"mouseup",d),o=_.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),Y.bind(r.__input,"change",l),Y.bind(r.__input,"blur",u),Y.bind(r.__input,"mousedown",f),Y.bind(r.__input,"keydown",function(_){_.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return Dn(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():ST(this.getValue(),this.__precision),Ui(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Dm);function cf(n,e,t,i,s){return i+(s-i)*((n-e)/(t-e))}var Wc=function(n){Bi(e,n);function e(t,i,s,r,a){Ln(this,e);var o=zi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i,{min:s,max:r,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),Y.bind(o.__background,"mousedown",c),Y.bind(o.__background,"touchstart",d),Y.addClass(o.__background,"slider"),Y.addClass(o.__foreground,"slider-fg");function c(g){document.activeElement.blur(),Y.bind(window,"mousemove",u),Y.bind(window,"mouseup",h),u(g)}function u(g){g.preventDefault();var m=l.__background.getBoundingClientRect();return l.setValue(cf(g.clientX,m.left,m.right,l.__min,l.__max)),!1}function h(){Y.unbind(window,"mousemove",u),Y.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function d(g){g.touches.length===1&&(Y.bind(window,"touchmove",f),Y.bind(window,"touchend",_),f(g))}function f(g){var m=g.touches[0].clientX,p=l.__background.getBoundingClientRect();l.setValue(cf(m,p.left,p.right,l.__min,l.__max))}function _(){Y.unbind(window,"touchmove",f),Y.unbind(window,"touchend",_),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return Dn(e,[{key:"updateDisplay",value:function(){var i=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=i*100+"%",Ui(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(Dm),Nm=function(n){Bi(e,n);function e(t,i,s){Ln(this,e);var r=zi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i)),a=r;return r.__button=document.createElement("div"),r.__button.innerHTML=s===void 0?"Fire":s,Y.bind(r.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),Y.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return Dn(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(ds),Xc=function(n){Bi(e,n);function e(t,i){Ln(this,e);var s=zi(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,i));s.__color=new Lt(s.getValue()),s.__temp=new Lt(0);var r=s;s.domElement=document.createElement("div"),Y.makeSelectable(s.domElement,!1),s.__selector=document.createElement("div"),s.__selector.className="selector",s.__saturation_field=document.createElement("div"),s.__saturation_field.className="saturation-field",s.__field_knob=document.createElement("div"),s.__field_knob.className="field-knob",s.__field_knob_border="2px solid ",s.__hue_knob=document.createElement("div"),s.__hue_knob.className="hue-knob",s.__hue_field=document.createElement("div"),s.__hue_field.className="hue-field",s.__input=document.createElement("input"),s.__input.type="text",s.__input_textShadow="0 1px 1px ",Y.bind(s.__input,"keydown",function(g){g.keyCode===13&&h.call(this)}),Y.bind(s.__input,"blur",h),Y.bind(s.__selector,"mousedown",function(){Y.addClass(this,"drag").bind(window,"mouseup",function(){Y.removeClass(r.__selector,"drag")})}),Y.bind(s.__selector,"touchstart",function(){Y.addClass(this,"drag").bind(window,"touchend",function(){Y.removeClass(r.__selector,"drag")})});var a=document.createElement("div");re.extend(s.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),re.extend(s.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:s.__field_knob_border+(s.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),re.extend(s.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),re.extend(s.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),re.extend(a.style,{width:"100%",height:"100%",background:"none"}),uf(a,"top","rgba(0,0,0,0)","#000"),re.extend(s.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),ET(s.__hue_field),re.extend(s.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:s.__input_textShadow+"rgba(0,0,0,0.7)"}),Y.bind(s.__saturation_field,"mousedown",o),Y.bind(s.__saturation_field,"touchstart",o),Y.bind(s.__field_knob,"mousedown",o),Y.bind(s.__field_knob,"touchstart",o),Y.bind(s.__hue_field,"mousedown",l),Y.bind(s.__hue_field,"touchstart",l);function o(g){f(g),Y.bind(window,"mousemove",f),Y.bind(window,"touchmove",f),Y.bind(window,"mouseup",c),Y.bind(window,"touchend",c)}function l(g){_(g),Y.bind(window,"mousemove",_),Y.bind(window,"touchmove",_),Y.bind(window,"mouseup",u),Y.bind(window,"touchend",u)}function c(){Y.unbind(window,"mousemove",f),Y.unbind(window,"touchmove",f),Y.unbind(window,"mouseup",c),Y.unbind(window,"touchend",c),d()}function u(){Y.unbind(window,"mousemove",_),Y.unbind(window,"touchmove",_),Y.unbind(window,"mouseup",u),Y.unbind(window,"touchend",u),d()}function h(){var g=Gc(this.value);g!==!1?(r.__color.__state=g,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function d(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}s.__saturation_field.appendChild(a),s.__selector.appendChild(s.__field_knob),s.__selector.appendChild(s.__saturation_field),s.__selector.appendChild(s.__hue_field),s.__hue_field.appendChild(s.__hue_knob),s.domElement.appendChild(s.__input),s.domElement.appendChild(s.__selector),s.updateDisplay();function f(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=r.__saturation_field.getBoundingClientRect(),p=g.touches&&g.touches[0]||g,A=p.clientX,E=p.clientY,b=(A-m.left)/(m.right-m.left),C=1-(E-m.top)/(m.bottom-m.top);return C>1?C=1:C<0&&(C=0),b>1?b=1:b<0&&(b=0),r.__color.v=C,r.__color.s=b,r.setValue(r.__color.toOriginal()),!1}function _(g){g.type.indexOf("touch")===-1&&g.preventDefault();var m=r.__hue_field.getBoundingClientRect(),p=g.touches&&g.touches[0]||g,A=p.clientY,E=1-(A-m.top)/(m.bottom-m.top);return E>1?E=1:E<0&&(E=0),r.__color.h=E*360,r.setValue(r.__color.toOriginal()),!1}return s}return Dn(e,[{key:"updateDisplay",value:function(){var i=Gc(this.getValue());if(i!==!1){var s=!1;re.each(Lt.COMPONENTS,function(o){if(!re.isUndefined(i[o])&&!re.isUndefined(this.__color.__state[o])&&i[o]!==this.__color.__state[o])return s=!0,{}},this),s&&re.extend(this.__color.__state,i)}re.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,a=255-r;re.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,uf(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),re.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),e}(ds),MT=["-moz-","-o-","-webkit-","-ms-",""];function uf(n,e,t,i){n.style.background="",re.each(MT,function(s){n.style.cssText+="background: "+s+"linear-gradient("+e+", "+t+" 0%, "+i+" 100%); "})}function ET(n){n.style.background="",n.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",n.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",n.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var AT={load:function(e,t){var i=t||document,s=i.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=e,i.getElementsByTagName("head")[0].appendChild(s)},inject:function(e,t){var i=t||document,s=document.createElement("style");s.type="text/css",s.innerHTML=e;var r=i.getElementsByTagName("head")[0];try{r.appendChild(s)}catch{}}},TT=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,wT=function(e,t){var i=e[t];return re.isArray(arguments[2])||re.isObject(arguments[2])?new bT(e,t,arguments[2]):re.isNumber(i)?re.isNumber(arguments[2])&&re.isNumber(arguments[3])?re.isNumber(arguments[4])?new Wc(e,t,arguments[2],arguments[3],arguments[4]):new Wc(e,t,arguments[2],arguments[3]):re.isNumber(arguments[4])?new xo(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new xo(e,t,{min:arguments[2],max:arguments[3]}):re.isString(i)?new yT(e,t):re.isFunction(i)?new Nm(e,t,""):re.isBoolean(i)?new Lm(e,t):null};function RT(n){setTimeout(n,1e3/60)}var CT=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||RT,PT=function(){function n(){Ln(this,n),this.backgroundElement=document.createElement("div"),re.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),Y.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),re.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;Y.bind(this.backgroundElement,"click",function(){e.hide()})}return Dn(n,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),re.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,i=function s(){t.domElement.style.display="none",t.backgroundElement.style.display="none",Y.unbind(t.domElement,"webkitTransitionEnd",s),Y.unbind(t.domElement,"transitionend",s),Y.unbind(t.domElement,"oTransitionEnd",s)};Y.bind(this.domElement,"webkitTransitionEnd",i),Y.bind(this.domElement,"transitionend",i),Y.bind(this.domElement,"oTransitionEnd",i),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-Y.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-Y.getHeight(this.domElement)/2+"px"}}]),n}(),IT=mT(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);AT.inject(IT);var hf="dg",df=72,ff=20,la="Default",Nr=function(){try{return!!window.localStorage}catch{return!1}}(),qr=void 0,pf=!0,Ds=void 0,Ol=!1,Um=[],_t=function n(e){var t=this,i=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),Y.addClass(this.domElement,hf),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],i=re.defaults(i,{closeOnTop:!1,autoPlace:!0,width:n.DEFAULT_WIDTH}),i=re.defaults(i,{resizable:i.autoPlace,hideable:i.autoPlace}),re.isUndefined(i.load)?i.load={preset:la}:i.preset&&(i.load.preset=i.preset),re.isUndefined(i.parent)&&i.hideable&&Um.push(this),i.resizable=re.isUndefined(i.parent)&&i.resizable,i.autoPlace&&re.isUndefined(i.scrollable)&&(i.scrollable=!0);var s=Nr&&localStorage.getItem(Ns(this,"isLocal"))==="true",r=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return i.parent}},scrollable:{get:function(){return i.scrollable}},autoPlace:{get:function(){return i.autoPlace}},closeOnTop:{get:function(){return i.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:i.load.preset},set:function(d){t.parent?t.getRoot().preset=d:i.load.preset=d,UT(this),t.revert()}},width:{get:function(){return i.width},set:function(d){i.width=d,jc(t,d)}},name:{get:function(){return i.name},set:function(d){i.name=d,a&&(a.innerHTML=i.name)}},closed:{get:function(){return i.closed},set:function(d){i.closed=d,i.closed?Y.addClass(t.__ul,n.CLASS_CLOSED):Y.removeClass(t.__ul,n.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=d?n.TEXT_OPEN:n.TEXT_CLOSED)}},load:{get:function(){return i.load}},useLocalStorage:{get:function(){return s},set:function(d){Nr&&(s=d,d?Y.bind(window,"unload",r):Y.unbind(window,"unload",r),localStorage.setItem(Ns(t,"isLocal"),d))}}}),re.isUndefined(i.parent)){if(this.closed=i.closed||!1,Y.addClass(this.domElement,n.CLASS_MAIN),Y.makeSelectable(this.domElement,!1),Nr&&s){t.useLocalStorage=!0;var o=localStorage.getItem(Ns(this,"gui"));o&&(i.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=n.TEXT_CLOSED,Y.addClass(this.__closeButton,n.CLASS_CLOSE_BUTTON),i.closeOnTop?(Y.addClass(this.__closeButton,n.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(Y.addClass(this.__closeButton,n.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),Y.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{i.closed===void 0&&(i.closed=!0);var l=document.createTextNode(i.name);Y.addClass(l,"controller-name"),a=zu(t,l);var c=function(d){return d.preventDefault(),t.closed=!t.closed,!1};Y.addClass(this.__ul,n.CLASS_CLOSED),Y.addClass(a,"title"),Y.bind(a,"click",c),i.closed||(this.closed=!1)}i.autoPlace&&(re.isUndefined(i.parent)&&(pf&&(Ds=document.createElement("div"),Y.addClass(Ds,hf),Y.addClass(Ds,n.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Ds),pf=!1),Ds.appendChild(this.domElement),Y.addClass(this.domElement,n.CLASS_AUTO_PLACE)),this.parent||jc(t,i.width)),this.__resizeHandler=function(){t.onResizeDebounced()},Y.bind(window,"resize",this.__resizeHandler),Y.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),Y.bind(this.__ul,"transitionend",this.__resizeHandler),Y.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),i.resizable&&NT(this),r=function(){Nr&&localStorage.getItem(Ns(t,"isLocal"))==="true"&&localStorage.setItem(Ns(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function u(){var h=t.getRoot();h.width+=1,re.defer(function(){h.width-=1})}i.parent||u()};_t.toggleHide=function(){Ol=!Ol,re.each(Um,function(n){n.domElement.style.display=Ol?"none":""})};_t.CLASS_AUTO_PLACE="a";_t.CLASS_AUTO_PLACE_CONTAINER="ac";_t.CLASS_MAIN="main";_t.CLASS_CONTROLLER_ROW="cr";_t.CLASS_TOO_TALL="taller-than-window";_t.CLASS_CLOSED="closed";_t.CLASS_CLOSE_BUTTON="close-button";_t.CLASS_CLOSE_TOP="close-top";_t.CLASS_CLOSE_BOTTOM="close-bottom";_t.CLASS_DRAG="drag";_t.DEFAULT_WIDTH=245;_t.TEXT_CLOSED="Close Controls";_t.TEXT_OPEN="Open Controls";_t._keydownHandler=function(n){document.activeElement.type!=="text"&&(n.which===df||n.keyCode===df)&&_t.toggleHide()};Y.bind(window,"keydown",_t._keydownHandler,!1);re.extend(_t.prototype,{add:function(e,t){return jr(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return jr(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;re.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Ds.removeChild(this.domElement);var e=this;re.each(this.__folders,function(t){e.removeFolder(t)}),Y.unbind(window,"keydown",_t._keydownHandler,!1),mf(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var i=new _t(t);this.__folders[e]=i;var s=zu(this,i.domElement);return Y.addClass(s,"folder"),i},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],mf(e);var t=this;re.each(e.__folders,function(i){e.removeFolder(i)}),re.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=Y.getOffset(e.__ul).top,i=0;re.each(e.__ul.childNodes,function(s){e.autoPlace&&s===e.__save_row||(i+=Y.getHeight(s))}),window.innerHeight-t-ff<i?(Y.addClass(e.domElement,_t.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-ff+"px"):(Y.removeClass(e.domElement,_t.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&re.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:re.debounce(function(){this.onResize()},50),remember:function(){if(re.isUndefined(qr)&&(qr=new PT,qr.domElement.innerHTML=TT),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;re.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&DT(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&jc(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=Ya(this)),e.folders={},re.each(this.__folders,function(t,i){e.folders[i]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=Ya(this),Yc(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[la]=Ya(this,!0)),this.load.remembered[e]=Ya(this),this.preset=e,qc(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){re.each(this.__controllers,function(t){this.getRoot().load.remembered?Om(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),re.each(this.__folders,function(t){t.revert(t)}),e||Yc(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Fm(this.__listening)},updateDisplay:function(){re.each(this.__controllers,function(e){e.updateDisplay()}),re.each(this.__folders,function(e){e.updateDisplay()})}});function zu(n,e,t){var i=document.createElement("li");return e&&i.appendChild(e),t?n.__ul.insertBefore(i,t):n.__ul.appendChild(i),n.onResize(),i}function mf(n){Y.unbind(window,"resize",n.__resizeHandler),n.saveToLocalStorageIfPossible&&Y.unbind(window,"unload",n.saveToLocalStorageIfPossible)}function Yc(n,e){var t=n.__preset_select[n.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function LT(n,e,t){if(t.__li=e,t.__gui=n,re.extend(t,{options:function(a){if(arguments.length>1){var o=t.__li.nextElementSibling;return t.remove(),jr(n,t.object,t.property,{before:o,factoryArgs:[re.toArray(arguments)]})}if(re.isArray(a)||re.isObject(a)){var l=t.__li.nextElementSibling;return t.remove(),jr(n,t.object,t.property,{before:l,factoryArgs:[a]})}},name:function(a){return t.__li.firstElementChild.firstElementChild.innerHTML=a,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Wc){var i=new xo(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});re.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var a=t[r],o=i[r];t[r]=i[r]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(i,l),a.apply(t,l)}}),Y.addClass(e,"has-slider"),t.domElement.insertBefore(i.domElement,t.domElement.firstElementChild)}else if(t instanceof xo){var s=function(a){if(re.isNumber(t.__min)&&re.isNumber(t.__max)){var o=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=jr(n,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(o),l&&c.listen(),c}return a};t.min=re.compose(s,t.min),t.max=re.compose(s,t.max)}else t instanceof Lm?(Y.bind(e,"click",function(){Y.fakeEvent(t.__checkbox,"click")}),Y.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof Nm?(Y.bind(e,"click",function(){Y.fakeEvent(t.__button,"click")}),Y.bind(e,"mouseover",function(){Y.addClass(t.__button,"hover")}),Y.bind(e,"mouseout",function(){Y.removeClass(t.__button,"hover")})):t instanceof Xc&&(Y.addClass(e,"color"),t.updateDisplay=re.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=re.compose(function(r){return n.getRoot().__preset_select&&t.isModified()&&Yc(n.getRoot(),!0),r},t.setValue)}function Om(n,e){var t=n.getRoot(),i=t.__rememberedObjects.indexOf(e.object);if(i!==-1){var s=t.__rememberedObjectIndecesToControllers[i];if(s===void 0&&(s={},t.__rememberedObjectIndecesToControllers[i]=s),s[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,a=void 0;if(r[n.preset])a=r[n.preset];else if(r[la])a=r[la];else return;if(a[i]&&a[i][e.property]!==void 0){var o=a[i][e.property];e.initialValue=o,e.setValue(o)}}}}function jr(n,e,t,i){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var s=void 0;if(i.color)s=new Xc(e,t);else{var r=[e,t].concat(i.factoryArgs);s=wT.apply(n,r)}i.before instanceof ds&&(i.before=i.before.__li),Om(n,s),Y.addClass(s.domElement,"c");var a=document.createElement("span");Y.addClass(a,"property-name"),a.innerHTML=s.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(s.domElement);var l=zu(n,o,i.before);return Y.addClass(l,_t.CLASS_CONTROLLER_ROW),s instanceof Xc?Y.addClass(l,"color"):Y.addClass(l,gT(s.getValue())),LT(n,l,s),n.__controllers.push(s),s}function Ns(n,e){return document.location.href+"."+e}function qc(n,e,t){var i=document.createElement("option");i.innerHTML=e,i.value=e,n.__preset_select.appendChild(i),t&&(n.__preset_select.selectedIndex=n.__preset_select.length-1)}function _f(n,e){e.style.display=n.useLocalStorage?"block":"none"}function DT(n){var e=n.__save_row=document.createElement("li");Y.addClass(n.domElement,"has-save"),n.__ul.insertBefore(e,n.__ul.firstChild),Y.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",Y.addClass(t,"button gears");var i=document.createElement("span");i.innerHTML="Save",Y.addClass(i,"button"),Y.addClass(i,"save");var s=document.createElement("span");s.innerHTML="New",Y.addClass(s,"button"),Y.addClass(s,"save-as");var r=document.createElement("span");r.innerHTML="Revert",Y.addClass(r,"button"),Y.addClass(r,"revert");var a=n.__preset_select=document.createElement("select");if(n.load&&n.load.remembered?re.each(n.load.remembered,function(h,d){qc(n,d,d===n.preset)}):qc(n,la,!1),Y.bind(a,"change",function(){for(var h=0;h<n.__preset_select.length;h++)n.__preset_select[h].innerHTML=n.__preset_select[h].value;n.preset=this.value}),e.appendChild(a),e.appendChild(t),e.appendChild(i),e.appendChild(s),e.appendChild(r),Nr){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(Ns(n,"isLocal"))==="true"&&l.setAttribute("checked","checked"),_f(n,o),Y.bind(l,"change",function(){n.useLocalStorage=!n.useLocalStorage,_f(n,o)})}var u=document.getElementById("dg-new-constructor");Y.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&qr.hide()}),Y.bind(t,"click",function(){u.innerHTML=JSON.stringify(n.getSaveObject(),void 0,2),qr.show(),u.focus(),u.select()}),Y.bind(i,"click",function(){n.save()}),Y.bind(s,"click",function(){var h=prompt("Enter a new preset name.");h&&n.saveAs(h)}),Y.bind(r,"click",function(){n.revert()})}function NT(n){var e=void 0;n.__resize_handle=document.createElement("div"),re.extend(n.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),n.width+=e-r.clientX,n.onResize(),e=r.clientX,!1}function i(){Y.removeClass(n.__closeButton,_t.CLASS_DRAG),Y.unbind(window,"mousemove",t),Y.unbind(window,"mouseup",i)}function s(r){return r.preventDefault(),e=r.clientX,Y.addClass(n.__closeButton,_t.CLASS_DRAG),Y.bind(window,"mousemove",t),Y.bind(window,"mouseup",i),!1}Y.bind(n.__resize_handle,"mousedown",s),Y.bind(n.__closeButton,"mousedown",s),n.domElement.insertBefore(n.__resize_handle,n.domElement.firstElementChild)}function jc(n,e){n.domElement.style.width=e+"px",n.__save_row&&n.autoPlace&&(n.__save_row.style.width=e+"px"),n.__closeButton&&(n.__closeButton.style.width=e+"px")}function Ya(n,e){var t={};return re.each(n.__rememberedObjects,function(i,s){var r={},a=n.__rememberedObjectIndecesToControllers[s];re.each(a,function(o,l){r[l]=e?o.initialValue:o.getValue()}),t[s]=r}),t}function UT(n){for(var e=0;e<n.__preset_select.length;e++)n.__preset_select[e].value===n.preset&&(n.__preset_select.selectedIndex=e)}function Fm(n){n.length!==0&&CT.call(window,function(){Fm(n)}),re.each(n,function(e){e.updateDisplay()})}var OT=_t;const FT={class:"container"},kT={class:"row"},BT={class:"col"},zT={__name:"Animation",props:{l2dpath:{type:String,Required:!0}},setup(n){const e=os(null);let t=null,i=null,s=null;const r=n;return ip(()=>{const a=new sb,o=new Kt(75,window.innerWidth/window.innerHeight,.1,1e3);i=new DA({canvas:e.value});const l=document.querySelector(".container");l.clientWidth,l.clientHeight,i.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(i.domElement);const c=new Ub(4210752,1);a.add(c);const u=new Mm(16777215,1);u.position.set(10,10,10).normalize(),a.add(u),new Sm().load("./assets/gltf/avg_bg_lobby_xmas.png",_=>{a.background=_}),new NA().load("./assets/gltf/"+r.l2dpath+".gltf",function(_){a.add(_.scene),_.scene.scale.set(1,1,1),_.scene.rotation.y=Math.PI,o.position.z=2,t=new $b(_.scene);const g=new cr,m=new _b({wireframe:!0});new en(g,m),s=new OT;const p=s.addFolder("Camera");p.add(o.position,"z",0,10),p.open(),_.animations.forEach(A=>{t.clipAction(A).play()})},function(_){console.log("Percentage loaded of gltx file: ",_.loaded/_.total*100+"% loaded")},function(_){console.log("glttf error: ",_)});function f(){requestAnimationFrame(f),t&&t.update(.01),i.render(a,o)}f(),window.addEventListener("resize",()=>{const _=l.clientWidth,g=l.clientHeight;i.setSize(_,g),o.aspect=_/g,o.updateProjectionMatrix()})}),uu(()=>{i&&i.domElement&&document.body.removeChild(i.domElement),s.destroy()}),(a,o)=>(St(),At("div",FT,[Ke("div",kT,[Ke("div",BT,[Ke("canvas",{ref_key:"canvas",ref:e},null,512)])])]))}},HT=lr(zT,[["__scopeId","data-v-17b4ccb3"]]),VT={class:"container"},GT={class:"row"},WT={class:"btn-group",role:"group","aria-label":"Basic example"},XT=["onClick"],YT={class:"col-12"},qT=["src"],jT={__name:"Break",props:{item:{type:Object,required:!0}},setup(n){const e=n,t=Object.keys(e.item),i=os("");let s=os(!1);const r=a=>{/^l2d.*$/.test(a)?e.item[a]==""?s.value=!1:(s.value=!0,i.value=e.item[a]):(i.value=e.item[a],s.value=!1)};return(a,o)=>(St(),At("div",VT,[Ke("div",GT,[Ke("div",null,[(St(!0),At(Ot,null,Br(Hn(t),l=>(St(),At("div",WT,[Ke("button",{type:"button",class:"btn btn-primary",onClick:c=>r(l)},eu(l),9,XT)]))),256))]),Ke("div",YT,[Hn(s)==!0?(St(),Mp(HT,{key:0,l2dpath:i.value},null,8,["l2dpath"])):(St(),At("img",{key:1,src:i.value},null,8,qT))])])]))}},KT=lr(jT,[["__scopeId","data-v-7fa4be46"]]),$T={key:1,class:"imgGrid"},ZT=["onClick","src"],JT={__name:"Character",setup(n){os([Bh]);const e=os(null),t=i=>{e.value=i};return(i,s)=>(St(),At(Ot,null,[s[0]||(s[0]=Ke("h1",null,"this is the character waifu page",-1)),e.value?(St(),Mp(KT,{key:0,item:e.value},null,8,["item"])):(St(),At("div",$T,[(St(!0),At(Ot,null,Br(Hn(Bh),(r,a)=>(St(),At("div",{key:a},[Ke("img",{onClick:o=>t(r),src:r.break1,alt:"Image description"},null,8,ZT)]))),128))]))],64))}},gf=lr(JT,[["__scopeId","data-v-106d4d40"]]),Fl={idolasmodeus:["./assets/story/ia1.png","./assets/story/ia2.png","./assets/story/ia3.png","./assets/story/ia4.png","./assets/story/ia5.png","./assets/story/ia6.png"],metatron:["./assets/story/m1.png","./assets/story/m2.png","./assets/story/m3.png","./assets/story/m4.png","./assets/story/m5.png","./assets/story/m6.png","./assets/story/m7.png","./assets/story/m8.png","./assets/story/m9.png","./assets/story/m10.png","./assets/story/m11.png","./assets/story/m12.png","./assets/story/m13.png","./assets/story/m14.png","./assets/story/m15.png","./assets/story/m16.png","./assets/story/m17.png","./assets/story/m18.png","./assets/story/m19.png","./assets/story/m20.png","./assets/story/m21.png","./assets/story/m22.png","./assets/story/m23.png","./assets/story/m24.png"]},QT={class:"accordion"},ew={class:"accordion-item"},tw={class:"accordion-header"},nw=["data-bs-target"],iw=["id"],sw={class:"accordion-body"},rw=["id"],aw={class:"carousel-indicators"},ow=["data-bs-target","data-bs-slide-to","aria-label"],lw={class:"carousel-inner"},cw=["src"],uw=["data-bs-target"],hw=["data-bs-target"],vf={__name:"Event",setup(n){return os([Fl]),console.log(Fl),(e,t)=>(St(),At(Ot,null,[t[2]||(t[2]=Ke("h1",null,"this is the event Stories",-1)),Ke("div",null,[Ke("div",QT,[(St(!0),At(Ot,null,Br(Hn(Fl),(i,s)=>(St(),At("div",{key:s},[Ke("div",ew,[Ke("h2",tw,[Ke("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+s},eu(s),9,nw)]),Ke("div",{id:s,class:"accordion-collapse collapse"},[Ke("div",sw,[Ke("div",null,[Ke("div",{id:"waifucarousel"+s,class:"carousel slide","data-bs-ride":"carousel"},[Ke("div",aw,[(St(!0),At(Ot,null,Br(i,(r,a)=>(St(),At("button",{key:a,type:"button","data-bs-target":"#waifucarousel"+s,"data-bs-slide-to":a,class:Kr({active:a===0}),"aria-current":"true","aria-label":"Slide "+(a+1)},null,10,ow))),128))]),Ke("div",lw,[(St(!0),At(Ot,null,Br(i,(r,a)=>(St(),At("div",{key:a,class:Kr({"carousel-item":!0,active:a===0})},[Ke("img",{src:r,class:"d-block w-100",alt:""},null,8,cw)],2))),128))]),Ke("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#waifucarousel"+s,"data-bs-slide":"prev"},t[0]||(t[0]=[Ke("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1),Ke("span",{class:"visually-hidden"},"Previous",-1)]),8,uw),Ke("button",{class:"carousel-control-next",type:"button","data-bs-target":"#waifucarousel"+s,"data-bs-slide":"next"},t[1]||(t[1]=[Ke("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1),Ke("span",{class:"visually-hidden"},"Next",-1)]),8,hw)],8,rw)])])],8,iw)])]))),128))])])],64))}},dw={};function fw(n,e){return St(),At("h1",null,"this is the Kizuna")}const xf=lr(dw,[["render",fw]]),pw={};function mw(n,e){return St(),At("h1",null,"this is the Story")}const bf=lr(pw,[["render",mw]]),_w=[{path:"/",redirect:"/7sinxtasylimbotv/"},{path:"/7sinxtasylimbotv/",name:gf,component:gf},{path:"/7sinxtasylimbotv/event",name:vf,component:vf},{path:"/7sinxtasylimbotv/story",name:bf,component:bf},{path:"/7sinxtasylimbotv/kizuna",name:xf,component:xf}],gw=yv({history:$0(""),routes:_w});s0(x0).use(gw).mount("#app");
