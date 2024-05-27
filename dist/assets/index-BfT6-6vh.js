function BA(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Bf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $A={exports:{}},dm={},zA={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f=Symbol.for("react.element"),A4=Symbol.for("react.portal"),R4=Symbol.for("react.fragment"),b4=Symbol.for("react.strict_mode"),k4=Symbol.for("react.profiler"),C4=Symbol.for("react.provider"),P4=Symbol.for("react.context"),x4=Symbol.for("react.forward_ref"),N4=Symbol.for("react.suspense"),O4=Symbol.for("react.memo"),D4=Symbol.for("react.lazy"),rT=Symbol.iterator;function L4(t){return t===null||typeof t!="object"?null:(t=rT&&t[rT]||t["@@iterator"],typeof t=="function"?t:null)}var WA={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},HA=Object.assign,qA={};function Ou(t,e,n){this.props=t,this.context=e,this.refs=qA,this.updater=n||WA}Ou.prototype.isReactComponent={};Ou.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ou.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function KA(){}KA.prototype=Ou.prototype;function K_(t,e,n){this.props=t,this.context=e,this.refs=qA,this.updater=n||WA}var G_=K_.prototype=new KA;G_.constructor=K_;HA(G_,Ou.prototype);G_.isPureReactComponent=!0;var iT=Array.isArray,GA=Object.prototype.hasOwnProperty,Y_={current:null},YA={key:!0,ref:!0,__self:!0,__source:!0};function QA(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)GA.call(e,r)&&!YA.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var f=Array(u),d=0;d<u;d++)f[d]=arguments[d+2];i.children=f}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:$f,type:t,key:s,ref:a,props:i,_owner:Y_.current}}function M4(t,e){return{$$typeof:$f,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Q_(t){return typeof t=="object"&&t!==null&&t.$$typeof===$f}function F4(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sT=/\/+/g;function fv(t,e){return typeof t=="object"&&t!==null&&t.key!=null?F4(""+t.key):e.toString(36)}function Gd(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case $f:case A4:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+fv(a,0):r,iT(i)?(n="",t!=null&&(n=t.replace(sT,"$&/")+"/"),Gd(i,e,n,"",function(d){return d})):i!=null&&(Q_(i)&&(i=M4(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(sT,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",iT(t))for(var u=0;u<t.length;u++){s=t[u];var f=r+fv(s,u);a+=Gd(s,e,n,f,i)}else if(f=L4(t),typeof f=="function")for(t=f.call(t),u=0;!(s=t.next()).done;)s=s.value,f=r+fv(s,u++),a+=Gd(s,e,n,f,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function pd(t,e,n){if(t==null)return t;var r=[],i=0;return Gd(t,r,"","",function(s){return e.call(n,s,i++)}),r}function V4(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var or={current:null},Yd={transition:null},U4={ReactCurrentDispatcher:or,ReactCurrentBatchConfig:Yd,ReactCurrentOwner:Y_};function XA(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:pd,forEach:function(t,e,n){pd(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return pd(t,function(){e++}),e},toArray:function(t){return pd(t,function(e){return e})||[]},only:function(t){if(!Q_(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ou;Xe.Fragment=R4;Xe.Profiler=k4;Xe.PureComponent=K_;Xe.StrictMode=b4;Xe.Suspense=N4;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U4;Xe.act=XA;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=HA({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Y_.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(f in e)GA.call(e,f)&&!YA.hasOwnProperty(f)&&(r[f]=e[f]===void 0&&u!==void 0?u[f]:e[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){u=Array(f);for(var d=0;d<f;d++)u[d]=arguments[d+2];r.children=u}return{$$typeof:$f,type:t.type,key:i,ref:s,props:r,_owner:a}};Xe.createContext=function(t){return t={$$typeof:P4,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:C4,_context:t},t.Consumer=t};Xe.createElement=QA;Xe.createFactory=function(t){var e=QA.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:x4,render:t}};Xe.isValidElement=Q_;Xe.lazy=function(t){return{$$typeof:D4,_payload:{_status:-1,_result:t},_init:V4}};Xe.memo=function(t,e){return{$$typeof:O4,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Yd.transition;Yd.transition={};try{t()}finally{Yd.transition=e}};Xe.unstable_act=XA;Xe.useCallback=function(t,e){return or.current.useCallback(t,e)};Xe.useContext=function(t){return or.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return or.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return or.current.useEffect(t,e)};Xe.useId=function(){return or.current.useId()};Xe.useImperativeHandle=function(t,e,n){return or.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return or.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return or.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return or.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return or.current.useReducer(t,e,n)};Xe.useRef=function(t){return or.current.useRef(t)};Xe.useState=function(t){return or.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return or.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return or.current.useTransition()};Xe.version="18.3.1";zA.exports=Xe;var re=zA.exports;const pm=Bf(re),j4=BA({__proto__:null,default:pm},[re]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B4=re,$4=Symbol.for("react.element"),z4=Symbol.for("react.fragment"),W4=Object.prototype.hasOwnProperty,H4=B4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q4={key:!0,ref:!0,__self:!0,__source:!0};function JA(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)W4.call(e,r)&&!q4.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$4,type:t,key:s,ref:a,props:i,_owner:H4.current}}dm.Fragment=z4;dm.jsx=JA;dm.jsxs=JA;$A.exports=dm;var B=$A.exports,fy={},ZA={exports:{}},Br={},eR={exports:{}},tR={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,oe){var ae=H.length;H.push(oe);e:for(;0<ae;){var ye=ae-1>>>1,Ie=H[ye];if(0<i(Ie,oe))H[ye]=oe,H[ae]=Ie,ae=ye;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var oe=H[0],ae=H.pop();if(ae!==oe){H[0]=ae;e:for(var ye=0,Ie=H.length,Le=Ie>>>1;ye<Le;){var rt=2*(ye+1)-1,qe=H[rt],dt=rt+1,_t=H[dt];if(0>i(qe,ae))dt<Ie&&0>i(_t,qe)?(H[ye]=_t,H[dt]=ae,ye=dt):(H[ye]=qe,H[rt]=ae,ye=rt);else if(dt<Ie&&0>i(_t,ae))H[ye]=_t,H[dt]=ae,ye=dt;else break e}}return oe}function i(H,oe){var ae=H.sortIndex-oe.sortIndex;return ae!==0?ae:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,u=a.now();t.unstable_now=function(){return a.now()-u}}var f=[],d=[],p=1,v=null,_=3,b=!1,x=!1,O=!1,F=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(H){for(var oe=n(d);oe!==null;){if(oe.callback===null)r(d);else if(oe.startTime<=H)r(d),oe.sortIndex=oe.expirationTime,e(f,oe);else break;oe=n(d)}}function z(H){if(O=!1,P(H),!x)if(n(f)!==null)x=!0,he(G);else{var oe=n(d);oe!==null&&de(z,oe.startTime-H)}}function G(H,oe){x=!1,O&&(O=!1,k(I),I=-1),b=!0;var ae=_;try{for(P(oe),v=n(f);v!==null&&(!(v.expirationTime>oe)||H&&!M());){var ye=v.callback;if(typeof ye=="function"){v.callback=null,_=v.priorityLevel;var Ie=ye(v.expirationTime<=oe);oe=t.unstable_now(),typeof Ie=="function"?v.callback=Ie:v===n(f)&&r(f),P(oe)}else r(f);v=n(f)}if(v!==null)var Le=!0;else{var rt=n(d);rt!==null&&de(z,rt.startTime-oe),Le=!1}return Le}finally{v=null,_=ae,b=!1}}var Z=!1,E=null,I=-1,C=5,N=-1;function M(){return!(t.unstable_now()-N<C)}function U(){if(E!==null){var H=t.unstable_now();N=H;var oe=!0;try{oe=E(!0,H)}finally{oe?D():(Z=!1,E=null)}}else Z=!1}var D;if(typeof R=="function")D=function(){R(U)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,fe=pe.port2;pe.port1.onmessage=U,D=function(){fe.postMessage(null)}}else D=function(){F(U,0)};function he(H){E=H,Z||(Z=!0,D())}function de(H,oe){I=F(function(){H(t.unstable_now())},oe)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){x||b||(x=!0,he(G))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(f)},t.unstable_next=function(H){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var ae=_;_=oe;try{return H()}finally{_=ae}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ae=_;_=H;try{return oe()}finally{_=ae}},t.unstable_scheduleCallback=function(H,oe,ae){var ye=t.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?ye+ae:ye):ae=ye,H){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=ae+Ie,H={id:p++,callback:oe,priorityLevel:H,startTime:ae,expirationTime:Ie,sortIndex:-1},ae>ye?(H.sortIndex=ae,e(d,H),n(f)===null&&H===n(d)&&(O?(k(I),I=-1):O=!0,de(z,ae-ye))):(H.sortIndex=Ie,e(f,H),x||b||(x=!0,he(G))),H},t.unstable_shouldYield=M,t.unstable_wrapCallback=function(H){var oe=_;return function(){var ae=_;_=oe;try{return H.apply(this,arguments)}finally{_=ae}}}})(tR);eR.exports=tR;var K4=eR.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G4=re,Ur=K4;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nR=new Set,of={};function al(t,e){mu(t,e),mu(t+"Capture",e)}function mu(t,e){for(of[t]=e,t=0;t<e.length;t++)nR.add(e[t])}var js=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hy=Object.prototype.hasOwnProperty,Y4=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oT={},aT={};function Q4(t){return hy.call(aT,t)?!0:hy.call(oT,t)?!1:Y4.test(t)?aT[t]=!0:(oT[t]=!0,!1)}function X4(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function J4(t,e,n,r){if(e===null||typeof e>"u"||X4(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ar(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ln={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ln[t]=new ar(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ln[e]=new ar(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ln[t]=new ar(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ln[t]=new ar(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ln[t]=new ar(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ln[t]=new ar(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ln[t]=new ar(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ln[t]=new ar(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ln[t]=new ar(t,5,!1,t.toLowerCase(),null,!1,!1)});var X_=/[\-:]([a-z])/g;function J_(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(X_,J_);Ln[e]=new ar(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(X_,J_);Ln[e]=new ar(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(X_,J_);Ln[e]=new ar(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ln[t]=new ar(t,1,!1,t.toLowerCase(),null,!1,!1)});Ln.xlinkHref=new ar("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ln[t]=new ar(t,1,!1,t.toLowerCase(),null,!0,!0)});function Z_(t,e,n,r){var i=Ln.hasOwnProperty(e)?Ln[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(J4(e,n,i,r)&&(n=null),r||i===null?Q4(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Qs=G4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,md=Symbol.for("react.element"),$l=Symbol.for("react.portal"),zl=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),dy=Symbol.for("react.profiler"),rR=Symbol.for("react.provider"),iR=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),py=Symbol.for("react.suspense"),my=Symbol.for("react.suspense_list"),n0=Symbol.for("react.memo"),Ao=Symbol.for("react.lazy"),sR=Symbol.for("react.offscreen"),lT=Symbol.iterator;function gc(t){return t===null||typeof t!="object"?null:(t=lT&&t[lT]||t["@@iterator"],typeof t=="function"?t:null)}var $t=Object.assign,hv;function Cc(t){if(hv===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hv=e&&e[1]||""}return`
`+hv+t}var dv=!1;function pv(t,e){if(!t||dv)return"";dv=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,u=s.length-1;1<=a&&0<=u&&i[a]!==s[u];)u--;for(;1<=a&&0<=u;a--,u--)if(i[a]!==s[u]){if(a!==1||u!==1)do if(a--,u--,0>u||i[a]!==s[u]){var f=`
`+i[a].replace(" at new "," at ");return t.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",t.displayName)),f}while(1<=a&&0<=u);break}}}finally{dv=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Cc(t):""}function Z4(t){switch(t.tag){case 5:return Cc(t.type);case 16:return Cc("Lazy");case 13:return Cc("Suspense");case 19:return Cc("SuspenseList");case 0:case 2:case 15:return t=pv(t.type,!1),t;case 11:return t=pv(t.type.render,!1),t;case 1:return t=pv(t.type,!0),t;default:return""}}function gy(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zl:return"Fragment";case $l:return"Portal";case dy:return"Profiler";case e0:return"StrictMode";case py:return"Suspense";case my:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case iR:return(t.displayName||"Context")+".Consumer";case rR:return(t._context.displayName||"Context")+".Provider";case t0:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case n0:return e=t.displayName||null,e!==null?e:gy(t.type)||"Memo";case Ao:e=t._payload,t=t._init;try{return gy(t(e))}catch{}}return null}function eF(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gy(e);case 8:return e===e0?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function qo(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function oR(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function tF(t){var e=oR(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function gd(t){t._valueTracker||(t._valueTracker=tF(t))}function aR(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=oR(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vp(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vy(t,e){var n=e.checked;return $t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function uT(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=qo(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lR(t,e){e=e.checked,e!=null&&Z_(t,"checked",e,!1)}function yy(t,e){lR(t,e);var n=qo(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_y(t,e.type,n):e.hasOwnProperty("defaultValue")&&_y(t,e.type,qo(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function cT(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _y(t,e,n){(e!=="number"||vp(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Pc=Array.isArray;function iu(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+qo(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function wy(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return $t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fT(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(Pc(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:qo(n)}}function uR(t,e){var n=qo(e.value),r=qo(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hT(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cR(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ey(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cR(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vd,fR=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vd=vd||document.createElement("div"),vd.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vd.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function af(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var jc={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},nF=["Webkit","ms","Moz","O"];Object.keys(jc).forEach(function(t){nF.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),jc[e]=jc[t]})});function hR(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||jc.hasOwnProperty(t)&&jc[t]?(""+e).trim():e+"px"}function dR(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=hR(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var rF=$t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ty(t,e){if(e){if(rF[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function Iy(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sy=null;function r0(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ay=null,su=null,ou=null;function dT(t){if(t=Hf(t)){if(typeof Ay!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=_m(e),Ay(t.stateNode,t.type,e))}}function pR(t){su?ou?ou.push(t):ou=[t]:su=t}function mR(){if(su){var t=su,e=ou;if(ou=su=null,dT(t),e)for(t=0;t<e.length;t++)dT(e[t])}}function gR(t,e){return t(e)}function vR(){}var mv=!1;function yR(t,e,n){if(mv)return t(e,n);mv=!0;try{return gR(t,e,n)}finally{mv=!1,(su!==null||ou!==null)&&(vR(),mR())}}function lf(t,e){var n=t.stateNode;if(n===null)return null;var r=_m(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Ry=!1;if(js)try{var vc={};Object.defineProperty(vc,"passive",{get:function(){Ry=!0}}),window.addEventListener("test",vc,vc),window.removeEventListener("test",vc,vc)}catch{Ry=!1}function iF(t,e,n,r,i,s,a,u,f){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Bc=!1,yp=null,_p=!1,by=null,sF={onError:function(t){Bc=!0,yp=t}};function oF(t,e,n,r,i,s,a,u,f){Bc=!1,yp=null,iF.apply(sF,arguments)}function aF(t,e,n,r,i,s,a,u,f){if(oF.apply(this,arguments),Bc){if(Bc){var d=yp;Bc=!1,yp=null}else throw Error(ue(198));_p||(_p=!0,by=d)}}function ll(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _R(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pT(t){if(ll(t)!==t)throw Error(ue(188))}function lF(t){var e=t.alternate;if(!e){if(e=ll(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return pT(i),t;if(s===r)return pT(i),e;s=s.sibling}throw Error(ue(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,u=i.child;u;){if(u===n){a=!0,n=i,r=s;break}if(u===r){a=!0,r=i,n=s;break}u=u.sibling}if(!a){for(u=s.child;u;){if(u===n){a=!0,n=s,r=i;break}if(u===r){a=!0,r=s,n=i;break}u=u.sibling}if(!a)throw Error(ue(189))}}if(n.alternate!==r)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function wR(t){return t=lF(t),t!==null?ER(t):null}function ER(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=ER(t);if(e!==null)return e;t=t.sibling}return null}var TR=Ur.unstable_scheduleCallback,mT=Ur.unstable_cancelCallback,uF=Ur.unstable_shouldYield,cF=Ur.unstable_requestPaint,tn=Ur.unstable_now,fF=Ur.unstable_getCurrentPriorityLevel,i0=Ur.unstable_ImmediatePriority,IR=Ur.unstable_UserBlockingPriority,wp=Ur.unstable_NormalPriority,hF=Ur.unstable_LowPriority,SR=Ur.unstable_IdlePriority,mm=null,rs=null;function dF(t){if(rs&&typeof rs.onCommitFiberRoot=="function")try{rs.onCommitFiberRoot(mm,t,void 0,(t.current.flags&128)===128)}catch{}}var Mi=Math.clz32?Math.clz32:gF,pF=Math.log,mF=Math.LN2;function gF(t){return t>>>=0,t===0?32:31-(pF(t)/mF|0)|0}var yd=64,_d=4194304;function xc(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ep(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var u=a&~i;u!==0?r=xc(u):(s&=a,s!==0&&(r=xc(s)))}else a=n&~i,a!==0?r=xc(a):s!==0&&(r=xc(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mi(e),i=1<<n,r|=t[n],e&=~i;return r}function vF(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yF(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Mi(s),u=1<<a,f=i[a];f===-1?(!(u&n)||u&r)&&(i[a]=vF(u,e)):f<=e&&(t.expiredLanes|=u),s&=~u}}function ky(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function AR(){var t=yd;return yd<<=1,!(yd&4194240)&&(yd=64),t}function gv(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zf(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mi(e),t[e]=n}function _F(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mi(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function s0(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mi(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var mt=0;function RR(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bR,o0,kR,CR,PR,Cy=!1,wd=[],Lo=null,Mo=null,Fo=null,uf=new Map,cf=new Map,bo=[],wF="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gT(t,e){switch(t){case"focusin":case"focusout":Lo=null;break;case"dragenter":case"dragleave":Mo=null;break;case"mouseover":case"mouseout":Fo=null;break;case"pointerover":case"pointerout":uf.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cf.delete(e.pointerId)}}function yc(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Hf(e),e!==null&&o0(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function EF(t,e,n,r,i){switch(e){case"focusin":return Lo=yc(Lo,t,e,n,r,i),!0;case"dragenter":return Mo=yc(Mo,t,e,n,r,i),!0;case"mouseover":return Fo=yc(Fo,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uf.set(s,yc(uf.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cf.set(s,yc(cf.get(s)||null,t,e,n,r,i)),!0}return!1}function xR(t){var e=Ca(t.target);if(e!==null){var n=ll(e);if(n!==null){if(e=n.tag,e===13){if(e=_R(n),e!==null){t.blockedOn=e,PR(t.priority,function(){kR(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Py(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sy=r,n.target.dispatchEvent(r),Sy=null}else return e=Hf(n),e!==null&&o0(e),t.blockedOn=n,!1;e.shift()}return!0}function vT(t,e,n){Qd(t)&&n.delete(e)}function TF(){Cy=!1,Lo!==null&&Qd(Lo)&&(Lo=null),Mo!==null&&Qd(Mo)&&(Mo=null),Fo!==null&&Qd(Fo)&&(Fo=null),uf.forEach(vT),cf.forEach(vT)}function _c(t,e){t.blockedOn===e&&(t.blockedOn=null,Cy||(Cy=!0,Ur.unstable_scheduleCallback(Ur.unstable_NormalPriority,TF)))}function ff(t){function e(i){return _c(i,t)}if(0<wd.length){_c(wd[0],t);for(var n=1;n<wd.length;n++){var r=wd[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Lo!==null&&_c(Lo,t),Mo!==null&&_c(Mo,t),Fo!==null&&_c(Fo,t),uf.forEach(e),cf.forEach(e),n=0;n<bo.length;n++)r=bo[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<bo.length&&(n=bo[0],n.blockedOn===null);)xR(n),n.blockedOn===null&&bo.shift()}var au=Qs.ReactCurrentBatchConfig,Tp=!0;function IF(t,e,n,r){var i=mt,s=au.transition;au.transition=null;try{mt=1,a0(t,e,n,r)}finally{mt=i,au.transition=s}}function SF(t,e,n,r){var i=mt,s=au.transition;au.transition=null;try{mt=4,a0(t,e,n,r)}finally{mt=i,au.transition=s}}function a0(t,e,n,r){if(Tp){var i=Py(t,e,n,r);if(i===null)Rv(t,e,r,Ip,n),gT(t,r);else if(EF(i,t,e,n,r))r.stopPropagation();else if(gT(t,r),e&4&&-1<wF.indexOf(t)){for(;i!==null;){var s=Hf(i);if(s!==null&&bR(s),s=Py(t,e,n,r),s===null&&Rv(t,e,r,Ip,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Rv(t,e,r,null,n)}}var Ip=null;function Py(t,e,n,r){if(Ip=null,t=r0(r),t=Ca(t),t!==null)if(e=ll(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_R(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ip=t,null}function NR(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fF()){case i0:return 1;case IR:return 4;case wp:case hF:return 16;case SR:return 536870912;default:return 16}default:return 16}}var No=null,l0=null,Xd=null;function OR(){if(Xd)return Xd;var t,e=l0,n=e.length,r,i="value"in No?No.value:No.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return Xd=i.slice(t,1<r?1-r:void 0)}function Jd(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ed(){return!0}function yT(){return!1}function $r(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ed:yT,this.isPropagationStopped=yT,this}return $t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ed)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ed)},persist:function(){},isPersistent:Ed}),e}var Du={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},u0=$r(Du),Wf=$t({},Du,{view:0,detail:0}),AF=$r(Wf),vv,yv,wc,gm=$t({},Wf,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:c0,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==wc&&(wc&&t.type==="mousemove"?(vv=t.screenX-wc.screenX,yv=t.screenY-wc.screenY):yv=vv=0,wc=t),vv)},movementY:function(t){return"movementY"in t?t.movementY:yv}}),_T=$r(gm),RF=$t({},gm,{dataTransfer:0}),bF=$r(RF),kF=$t({},Wf,{relatedTarget:0}),_v=$r(kF),CF=$t({},Du,{animationName:0,elapsedTime:0,pseudoElement:0}),PF=$r(CF),xF=$t({},Du,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),NF=$r(xF),OF=$t({},Du,{data:0}),wT=$r(OF),DF={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LF={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MF={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function FF(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=MF[t])?!!e[t]:!1}function c0(){return FF}var VF=$t({},Wf,{key:function(t){if(t.key){var e=DF[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?LF[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:c0,charCode:function(t){return t.type==="keypress"?Jd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),UF=$r(VF),jF=$t({},gm,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ET=$r(jF),BF=$t({},Wf,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:c0}),$F=$r(BF),zF=$t({},Du,{propertyName:0,elapsedTime:0,pseudoElement:0}),WF=$r(zF),HF=$t({},gm,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qF=$r(HF),KF=[9,13,27,32],f0=js&&"CompositionEvent"in window,$c=null;js&&"documentMode"in document&&($c=document.documentMode);var GF=js&&"TextEvent"in window&&!$c,DR=js&&(!f0||$c&&8<$c&&11>=$c),TT=" ",IT=!1;function LR(t,e){switch(t){case"keyup":return KF.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function MR(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wl=!1;function YF(t,e){switch(t){case"compositionend":return MR(e);case"keypress":return e.which!==32?null:(IT=!0,TT);case"textInput":return t=e.data,t===TT&&IT?null:t;default:return null}}function QF(t,e){if(Wl)return t==="compositionend"||!f0&&LR(t,e)?(t=OR(),Xd=l0=No=null,Wl=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return DR&&e.locale!=="ko"?null:e.data;default:return null}}var XF={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ST(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!XF[t.type]:e==="textarea"}function FR(t,e,n,r){pR(r),e=Sp(e,"onChange"),0<e.length&&(n=new u0("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var zc=null,hf=null;function JF(t){GR(t,0)}function vm(t){var e=Kl(t);if(aR(e))return t}function ZF(t,e){if(t==="change")return e}var VR=!1;if(js){var wv;if(js){var Ev="oninput"in document;if(!Ev){var AT=document.createElement("div");AT.setAttribute("oninput","return;"),Ev=typeof AT.oninput=="function"}wv=Ev}else wv=!1;VR=wv&&(!document.documentMode||9<document.documentMode)}function RT(){zc&&(zc.detachEvent("onpropertychange",UR),hf=zc=null)}function UR(t){if(t.propertyName==="value"&&vm(hf)){var e=[];FR(e,hf,t,r0(t)),yR(JF,e)}}function eV(t,e,n){t==="focusin"?(RT(),zc=e,hf=n,zc.attachEvent("onpropertychange",UR)):t==="focusout"&&RT()}function tV(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vm(hf)}function nV(t,e){if(t==="click")return vm(e)}function rV(t,e){if(t==="input"||t==="change")return vm(e)}function iV(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ji=typeof Object.is=="function"?Object.is:iV;function df(t,e){if(ji(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hy.call(e,i)||!ji(t[i],e[i]))return!1}return!0}function bT(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kT(t,e){var n=bT(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bT(n)}}function jR(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?jR(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function BR(){for(var t=window,e=vp();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vp(t.document)}return e}function h0(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function sV(t){var e=BR(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&jR(n.ownerDocument.documentElement,n)){if(r!==null&&h0(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=kT(n,s);var a=kT(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var oV=js&&"documentMode"in document&&11>=document.documentMode,Hl=null,xy=null,Wc=null,Ny=!1;function CT(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ny||Hl==null||Hl!==vp(r)||(r=Hl,"selectionStart"in r&&h0(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wc&&df(Wc,r)||(Wc=r,r=Sp(xy,"onSelect"),0<r.length&&(e=new u0("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Hl)))}function Td(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ql={animationend:Td("Animation","AnimationEnd"),animationiteration:Td("Animation","AnimationIteration"),animationstart:Td("Animation","AnimationStart"),transitionend:Td("Transition","TransitionEnd")},Tv={},$R={};js&&($R=document.createElement("div").style,"AnimationEvent"in window||(delete ql.animationend.animation,delete ql.animationiteration.animation,delete ql.animationstart.animation),"TransitionEvent"in window||delete ql.transitionend.transition);function ym(t){if(Tv[t])return Tv[t];if(!ql[t])return t;var e=ql[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $R)return Tv[t]=e[n];return t}var zR=ym("animationend"),WR=ym("animationiteration"),HR=ym("animationstart"),qR=ym("transitionend"),KR=new Map,PT="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ea(t,e){KR.set(t,e),al(e,[t])}for(var Iv=0;Iv<PT.length;Iv++){var Sv=PT[Iv],aV=Sv.toLowerCase(),lV=Sv[0].toUpperCase()+Sv.slice(1);ea(aV,"on"+lV)}ea(zR,"onAnimationEnd");ea(WR,"onAnimationIteration");ea(HR,"onAnimationStart");ea("dblclick","onDoubleClick");ea("focusin","onFocus");ea("focusout","onBlur");ea(qR,"onTransitionEnd");mu("onMouseEnter",["mouseout","mouseover"]);mu("onMouseLeave",["mouseout","mouseover"]);mu("onPointerEnter",["pointerout","pointerover"]);mu("onPointerLeave",["pointerout","pointerover"]);al("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));al("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));al("onBeforeInput",["compositionend","keypress","textInput","paste"]);al("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));al("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));al("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uV=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nc));function xT(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,aF(r,e,void 0,t),t.currentTarget=null}function GR(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var u=r[a],f=u.instance,d=u.currentTarget;if(u=u.listener,f!==s&&i.isPropagationStopped())break e;xT(i,u,d),s=f}else for(a=0;a<r.length;a++){if(u=r[a],f=u.instance,d=u.currentTarget,u=u.listener,f!==s&&i.isPropagationStopped())break e;xT(i,u,d),s=f}}}if(_p)throw t=by,_p=!1,by=null,t}function Ct(t,e){var n=e[Fy];n===void 0&&(n=e[Fy]=new Set);var r=t+"__bubble";n.has(r)||(YR(e,t,2,!1),n.add(r))}function Av(t,e,n){var r=0;e&&(r|=4),YR(n,t,r,e)}var Id="_reactListening"+Math.random().toString(36).slice(2);function pf(t){if(!t[Id]){t[Id]=!0,nR.forEach(function(n){n!=="selectionchange"&&(uV.has(n)||Av(n,!1,t),Av(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Id]||(e[Id]=!0,Av("selectionchange",!1,e))}}function YR(t,e,n,r){switch(NR(e)){case 1:var i=IF;break;case 4:i=SF;break;default:i=a0}n=i.bind(null,e,n,t),i=void 0,!Ry||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Rv(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var f=a.tag;if((f===3||f===4)&&(f=a.stateNode.containerInfo,f===i||f.nodeType===8&&f.parentNode===i))return;a=a.return}for(;u!==null;){if(a=Ca(u),a===null)return;if(f=a.tag,f===5||f===6){r=s=a;continue e}u=u.parentNode}}r=r.return}yR(function(){var d=s,p=r0(n),v=[];e:{var _=KR.get(t);if(_!==void 0){var b=u0,x=t;switch(t){case"keypress":if(Jd(n)===0)break e;case"keydown":case"keyup":b=UF;break;case"focusin":x="focus",b=_v;break;case"focusout":x="blur",b=_v;break;case"beforeblur":case"afterblur":b=_v;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=_T;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=bF;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=$F;break;case zR:case WR:case HR:b=PF;break;case qR:b=WF;break;case"scroll":b=AF;break;case"wheel":b=qF;break;case"copy":case"cut":case"paste":b=NF;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ET}var O=(e&4)!==0,F=!O&&t==="scroll",k=O?_!==null?_+"Capture":null:_;O=[];for(var R=d,P;R!==null;){P=R;var z=P.stateNode;if(P.tag===5&&z!==null&&(P=z,k!==null&&(z=lf(R,k),z!=null&&O.push(mf(R,z,P)))),F)break;R=R.return}0<O.length&&(_=new b(_,x,null,n,p),v.push({event:_,listeners:O}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",b=t==="mouseout"||t==="pointerout",_&&n!==Sy&&(x=n.relatedTarget||n.fromElement)&&(Ca(x)||x[Bs]))break e;if((b||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,b?(x=n.relatedTarget||n.toElement,b=d,x=x?Ca(x):null,x!==null&&(F=ll(x),x!==F||x.tag!==5&&x.tag!==6)&&(x=null)):(b=null,x=d),b!==x)){if(O=_T,z="onMouseLeave",k="onMouseEnter",R="mouse",(t==="pointerout"||t==="pointerover")&&(O=ET,z="onPointerLeave",k="onPointerEnter",R="pointer"),F=b==null?_:Kl(b),P=x==null?_:Kl(x),_=new O(z,R+"leave",b,n,p),_.target=F,_.relatedTarget=P,z=null,Ca(p)===d&&(O=new O(k,R+"enter",x,n,p),O.target=P,O.relatedTarget=F,z=O),F=z,b&&x)t:{for(O=b,k=x,R=0,P=O;P;P=Fl(P))R++;for(P=0,z=k;z;z=Fl(z))P++;for(;0<R-P;)O=Fl(O),R--;for(;0<P-R;)k=Fl(k),P--;for(;R--;){if(O===k||k!==null&&O===k.alternate)break t;O=Fl(O),k=Fl(k)}O=null}else O=null;b!==null&&NT(v,_,b,O,!1),x!==null&&F!==null&&NT(v,F,x,O,!0)}}e:{if(_=d?Kl(d):window,b=_.nodeName&&_.nodeName.toLowerCase(),b==="select"||b==="input"&&_.type==="file")var G=ZF;else if(ST(_))if(VR)G=rV;else{G=tV;var Z=eV}else(b=_.nodeName)&&b.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(G=nV);if(G&&(G=G(t,d))){FR(v,G,n,p);break e}Z&&Z(t,_,d),t==="focusout"&&(Z=_._wrapperState)&&Z.controlled&&_.type==="number"&&_y(_,"number",_.value)}switch(Z=d?Kl(d):window,t){case"focusin":(ST(Z)||Z.contentEditable==="true")&&(Hl=Z,xy=d,Wc=null);break;case"focusout":Wc=xy=Hl=null;break;case"mousedown":Ny=!0;break;case"contextmenu":case"mouseup":case"dragend":Ny=!1,CT(v,n,p);break;case"selectionchange":if(oV)break;case"keydown":case"keyup":CT(v,n,p)}var E;if(f0)e:{switch(t){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Wl?LR(t,n)&&(I="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(I="onCompositionStart");I&&(DR&&n.locale!=="ko"&&(Wl||I!=="onCompositionStart"?I==="onCompositionEnd"&&Wl&&(E=OR()):(No=p,l0="value"in No?No.value:No.textContent,Wl=!0)),Z=Sp(d,I),0<Z.length&&(I=new wT(I,t,null,n,p),v.push({event:I,listeners:Z}),E?I.data=E:(E=MR(n),E!==null&&(I.data=E)))),(E=GF?YF(t,n):QF(t,n))&&(d=Sp(d,"onBeforeInput"),0<d.length&&(p=new wT("onBeforeInput","beforeinput",null,n,p),v.push({event:p,listeners:d}),p.data=E))}GR(v,e)})}function mf(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sp(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=lf(t,n),s!=null&&r.unshift(mf(t,s,i)),s=lf(t,e),s!=null&&r.push(mf(t,s,i))),t=t.return}return r}function Fl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function NT(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var u=n,f=u.alternate,d=u.stateNode;if(f!==null&&f===r)break;u.tag===5&&d!==null&&(u=d,i?(f=lf(n,s),f!=null&&a.unshift(mf(n,f,u))):i||(f=lf(n,s),f!=null&&a.push(mf(n,f,u)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var cV=/\r\n?/g,fV=/\u0000|\uFFFD/g;function OT(t){return(typeof t=="string"?t:""+t).replace(cV,`
`).replace(fV,"")}function Sd(t,e,n){if(e=OT(e),OT(t)!==e&&n)throw Error(ue(425))}function Ap(){}var Oy=null,Dy=null;function Ly(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var My=typeof setTimeout=="function"?setTimeout:void 0,hV=typeof clearTimeout=="function"?clearTimeout:void 0,DT=typeof Promise=="function"?Promise:void 0,dV=typeof queueMicrotask=="function"?queueMicrotask:typeof DT<"u"?function(t){return DT.resolve(null).then(t).catch(pV)}:My;function pV(t){setTimeout(function(){throw t})}function bv(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ff(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ff(e)}function Vo(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function LT(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lu=Math.random().toString(36).slice(2),es="__reactFiber$"+Lu,gf="__reactProps$"+Lu,Bs="__reactContainer$"+Lu,Fy="__reactEvents$"+Lu,mV="__reactListeners$"+Lu,gV="__reactHandles$"+Lu;function Ca(t){var e=t[es];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Bs]||n[es]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=LT(t);t!==null;){if(n=t[es])return n;t=LT(t)}return e}t=n,n=t.parentNode}return null}function Hf(t){return t=t[es]||t[Bs],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kl(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function _m(t){return t[gf]||null}var Vy=[],Gl=-1;function ta(t){return{current:t}}function xt(t){0>Gl||(t.current=Vy[Gl],Vy[Gl]=null,Gl--)}function At(t,e){Gl++,Vy[Gl]=t.current,t.current=e}var Ko={},Yn=ta(Ko),Er=ta(!1),Wa=Ko;function gu(t,e){var n=t.type.contextTypes;if(!n)return Ko;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Tr(t){return t=t.childContextTypes,t!=null}function Rp(){xt(Er),xt(Yn)}function MT(t,e,n){if(Yn.current!==Ko)throw Error(ue(168));At(Yn,e),At(Er,n)}function QR(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(ue(108,eF(t)||"Unknown",i));return $t({},n,r)}function bp(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ko,Wa=Yn.current,At(Yn,t),At(Er,Er.current),!0}function FT(t,e,n){var r=t.stateNode;if(!r)throw Error(ue(169));n?(t=QR(t,e,Wa),r.__reactInternalMemoizedMergedChildContext=t,xt(Er),xt(Yn),At(Yn,t)):xt(Er),At(Er,n)}var ks=null,wm=!1,kv=!1;function XR(t){ks===null?ks=[t]:ks.push(t)}function vV(t){wm=!0,XR(t)}function na(){if(!kv&&ks!==null){kv=!0;var t=0,e=mt;try{var n=ks;for(mt=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ks=null,wm=!1}catch(i){throw ks!==null&&(ks=ks.slice(t+1)),TR(i0,na),i}finally{mt=e,kv=!1}}return null}var Yl=[],Ql=0,kp=null,Cp=0,oi=[],ai=0,Ha=null,xs=1,Ns="";function Aa(t,e){Yl[Ql++]=Cp,Yl[Ql++]=kp,kp=t,Cp=e}function JR(t,e,n){oi[ai++]=xs,oi[ai++]=Ns,oi[ai++]=Ha,Ha=t;var r=xs;t=Ns;var i=32-Mi(r)-1;r&=~(1<<i),n+=1;var s=32-Mi(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,xs=1<<32-Mi(e)+i|n<<i|r,Ns=s+t}else xs=1<<s|n<<i|r,Ns=t}function d0(t){t.return!==null&&(Aa(t,1),JR(t,1,0))}function p0(t){for(;t===kp;)kp=Yl[--Ql],Yl[Ql]=null,Cp=Yl[--Ql],Yl[Ql]=null;for(;t===Ha;)Ha=oi[--ai],oi[ai]=null,Ns=oi[--ai],oi[ai]=null,xs=oi[--ai],oi[ai]=null}var Mr=null,Or=null,Lt=!1,Oi=null;function ZR(t,e){var n=ui(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function VT(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Mr=t,Or=Vo(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Mr=t,Or=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ha!==null?{id:xs,overflow:Ns}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ui(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Mr=t,Or=null,!0):!1;default:return!1}}function Uy(t){return(t.mode&1)!==0&&(t.flags&128)===0}function jy(t){if(Lt){var e=Or;if(e){var n=e;if(!VT(t,e)){if(Uy(t))throw Error(ue(418));e=Vo(n.nextSibling);var r=Mr;e&&VT(t,e)?ZR(r,n):(t.flags=t.flags&-4097|2,Lt=!1,Mr=t)}}else{if(Uy(t))throw Error(ue(418));t.flags=t.flags&-4097|2,Lt=!1,Mr=t}}}function UT(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Mr=t}function Ad(t){if(t!==Mr)return!1;if(!Lt)return UT(t),Lt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ly(t.type,t.memoizedProps)),e&&(e=Or)){if(Uy(t))throw eb(),Error(ue(418));for(;e;)ZR(t,e),e=Vo(e.nextSibling)}if(UT(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Or=Vo(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Or=null}}else Or=Mr?Vo(t.stateNode.nextSibling):null;return!0}function eb(){for(var t=Or;t;)t=Vo(t.nextSibling)}function vu(){Or=Mr=null,Lt=!1}function m0(t){Oi===null?Oi=[t]:Oi.push(t)}var yV=Qs.ReactCurrentBatchConfig;function Ec(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var r=n.stateNode}if(!r)throw Error(ue(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var u=i.refs;a===null?delete u[s]:u[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function Rd(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jT(t){var e=t._init;return e(t._payload)}function tb(t){function e(k,R){if(t){var P=k.deletions;P===null?(k.deletions=[R],k.flags|=16):P.push(R)}}function n(k,R){if(!t)return null;for(;R!==null;)e(k,R),R=R.sibling;return null}function r(k,R){for(k=new Map;R!==null;)R.key!==null?k.set(R.key,R):k.set(R.index,R),R=R.sibling;return k}function i(k,R){return k=$o(k,R),k.index=0,k.sibling=null,k}function s(k,R,P){return k.index=P,t?(P=k.alternate,P!==null?(P=P.index,P<R?(k.flags|=2,R):P):(k.flags|=2,R)):(k.flags|=1048576,R)}function a(k){return t&&k.alternate===null&&(k.flags|=2),k}function u(k,R,P,z){return R===null||R.tag!==6?(R=Lv(P,k.mode,z),R.return=k,R):(R=i(R,P),R.return=k,R)}function f(k,R,P,z){var G=P.type;return G===zl?p(k,R,P.props.children,z,P.key):R!==null&&(R.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ao&&jT(G)===R.type)?(z=i(R,P.props),z.ref=Ec(k,R,P),z.return=k,z):(z=sp(P.type,P.key,P.props,null,k.mode,z),z.ref=Ec(k,R,P),z.return=k,z)}function d(k,R,P,z){return R===null||R.tag!==4||R.stateNode.containerInfo!==P.containerInfo||R.stateNode.implementation!==P.implementation?(R=Mv(P,k.mode,z),R.return=k,R):(R=i(R,P.children||[]),R.return=k,R)}function p(k,R,P,z,G){return R===null||R.tag!==7?(R=ja(P,k.mode,z,G),R.return=k,R):(R=i(R,P),R.return=k,R)}function v(k,R,P){if(typeof R=="string"&&R!==""||typeof R=="number")return R=Lv(""+R,k.mode,P),R.return=k,R;if(typeof R=="object"&&R!==null){switch(R.$$typeof){case md:return P=sp(R.type,R.key,R.props,null,k.mode,P),P.ref=Ec(k,null,R),P.return=k,P;case $l:return R=Mv(R,k.mode,P),R.return=k,R;case Ao:var z=R._init;return v(k,z(R._payload),P)}if(Pc(R)||gc(R))return R=ja(R,k.mode,P,null),R.return=k,R;Rd(k,R)}return null}function _(k,R,P,z){var G=R!==null?R.key:null;if(typeof P=="string"&&P!==""||typeof P=="number")return G!==null?null:u(k,R,""+P,z);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case md:return P.key===G?f(k,R,P,z):null;case $l:return P.key===G?d(k,R,P,z):null;case Ao:return G=P._init,_(k,R,G(P._payload),z)}if(Pc(P)||gc(P))return G!==null?null:p(k,R,P,z,null);Rd(k,P)}return null}function b(k,R,P,z,G){if(typeof z=="string"&&z!==""||typeof z=="number")return k=k.get(P)||null,u(R,k,""+z,G);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case md:return k=k.get(z.key===null?P:z.key)||null,f(R,k,z,G);case $l:return k=k.get(z.key===null?P:z.key)||null,d(R,k,z,G);case Ao:var Z=z._init;return b(k,R,P,Z(z._payload),G)}if(Pc(z)||gc(z))return k=k.get(P)||null,p(R,k,z,G,null);Rd(R,z)}return null}function x(k,R,P,z){for(var G=null,Z=null,E=R,I=R=0,C=null;E!==null&&I<P.length;I++){E.index>I?(C=E,E=null):C=E.sibling;var N=_(k,E,P[I],z);if(N===null){E===null&&(E=C);break}t&&E&&N.alternate===null&&e(k,E),R=s(N,R,I),Z===null?G=N:Z.sibling=N,Z=N,E=C}if(I===P.length)return n(k,E),Lt&&Aa(k,I),G;if(E===null){for(;I<P.length;I++)E=v(k,P[I],z),E!==null&&(R=s(E,R,I),Z===null?G=E:Z.sibling=E,Z=E);return Lt&&Aa(k,I),G}for(E=r(k,E);I<P.length;I++)C=b(E,k,I,P[I],z),C!==null&&(t&&C.alternate!==null&&E.delete(C.key===null?I:C.key),R=s(C,R,I),Z===null?G=C:Z.sibling=C,Z=C);return t&&E.forEach(function(M){return e(k,M)}),Lt&&Aa(k,I),G}function O(k,R,P,z){var G=gc(P);if(typeof G!="function")throw Error(ue(150));if(P=G.call(P),P==null)throw Error(ue(151));for(var Z=G=null,E=R,I=R=0,C=null,N=P.next();E!==null&&!N.done;I++,N=P.next()){E.index>I?(C=E,E=null):C=E.sibling;var M=_(k,E,N.value,z);if(M===null){E===null&&(E=C);break}t&&E&&M.alternate===null&&e(k,E),R=s(M,R,I),Z===null?G=M:Z.sibling=M,Z=M,E=C}if(N.done)return n(k,E),Lt&&Aa(k,I),G;if(E===null){for(;!N.done;I++,N=P.next())N=v(k,N.value,z),N!==null&&(R=s(N,R,I),Z===null?G=N:Z.sibling=N,Z=N);return Lt&&Aa(k,I),G}for(E=r(k,E);!N.done;I++,N=P.next())N=b(E,k,I,N.value,z),N!==null&&(t&&N.alternate!==null&&E.delete(N.key===null?I:N.key),R=s(N,R,I),Z===null?G=N:Z.sibling=N,Z=N);return t&&E.forEach(function(U){return e(k,U)}),Lt&&Aa(k,I),G}function F(k,R,P,z){if(typeof P=="object"&&P!==null&&P.type===zl&&P.key===null&&(P=P.props.children),typeof P=="object"&&P!==null){switch(P.$$typeof){case md:e:{for(var G=P.key,Z=R;Z!==null;){if(Z.key===G){if(G=P.type,G===zl){if(Z.tag===7){n(k,Z.sibling),R=i(Z,P.props.children),R.return=k,k=R;break e}}else if(Z.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Ao&&jT(G)===Z.type){n(k,Z.sibling),R=i(Z,P.props),R.ref=Ec(k,Z,P),R.return=k,k=R;break e}n(k,Z);break}else e(k,Z);Z=Z.sibling}P.type===zl?(R=ja(P.props.children,k.mode,z,P.key),R.return=k,k=R):(z=sp(P.type,P.key,P.props,null,k.mode,z),z.ref=Ec(k,R,P),z.return=k,k=z)}return a(k);case $l:e:{for(Z=P.key;R!==null;){if(R.key===Z)if(R.tag===4&&R.stateNode.containerInfo===P.containerInfo&&R.stateNode.implementation===P.implementation){n(k,R.sibling),R=i(R,P.children||[]),R.return=k,k=R;break e}else{n(k,R);break}else e(k,R);R=R.sibling}R=Mv(P,k.mode,z),R.return=k,k=R}return a(k);case Ao:return Z=P._init,F(k,R,Z(P._payload),z)}if(Pc(P))return x(k,R,P,z);if(gc(P))return O(k,R,P,z);Rd(k,P)}return typeof P=="string"&&P!==""||typeof P=="number"?(P=""+P,R!==null&&R.tag===6?(n(k,R.sibling),R=i(R,P),R.return=k,k=R):(n(k,R),R=Lv(P,k.mode,z),R.return=k,k=R),a(k)):n(k,R)}return F}var yu=tb(!0),nb=tb(!1),Pp=ta(null),xp=null,Xl=null,g0=null;function v0(){g0=Xl=xp=null}function y0(t){var e=Pp.current;xt(Pp),t._currentValue=e}function By(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function lu(t,e){xp=t,g0=Xl=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(wr=!0),t.firstContext=null)}function hi(t){var e=t._currentValue;if(g0!==t)if(t={context:t,memoizedValue:e,next:null},Xl===null){if(xp===null)throw Error(ue(308));Xl=t,xp.dependencies={lanes:0,firstContext:t}}else Xl=Xl.next=t;return e}var Pa=null;function _0(t){Pa===null?Pa=[t]:Pa.push(t)}function rb(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,_0(e)):(n.next=i.next,i.next=n),e.interleaved=n,$s(t,r)}function $s(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ro=!1;function w0(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ib(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ms(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Uo(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,st&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,$s(t,n)}return i=r.interleaved,i===null?(e.next=e,_0(r)):(e.next=i.next,i.next=e),r.interleaved=e,$s(t,n)}function Zd(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,s0(t,n)}}function BT(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Np(t,e,n,r){var i=t.updateQueue;Ro=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var f=u,d=f.next;f.next=null,a===null?s=d:a.next=d,a=f;var p=t.alternate;p!==null&&(p=p.updateQueue,u=p.lastBaseUpdate,u!==a&&(u===null?p.firstBaseUpdate=d:u.next=d,p.lastBaseUpdate=f))}if(s!==null){var v=i.baseState;a=0,p=d=f=null,u=s;do{var _=u.lane,b=u.eventTime;if((r&_)===_){p!==null&&(p=p.next={eventTime:b,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var x=t,O=u;switch(_=e,b=n,O.tag){case 1:if(x=O.payload,typeof x=="function"){v=x.call(b,v,_);break e}v=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=O.payload,_=typeof x=="function"?x.call(b,v,_):x,_==null)break e;v=$t({},v,_);break e;case 2:Ro=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[u]:_.push(u))}else b={eventTime:b,lane:_,tag:u.tag,payload:u.payload,callback:u.callback,next:null},p===null?(d=p=b,f=v):p=p.next=b,a|=_;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;_=u,u=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(p===null&&(f=v),i.baseState=f,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ka|=a,t.lanes=a,t.memoizedState=v}}function $T(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(ue(191,i));i.call(r)}}}var qf={},is=ta(qf),vf=ta(qf),yf=ta(qf);function xa(t){if(t===qf)throw Error(ue(174));return t}function E0(t,e){switch(At(yf,e),At(vf,t),At(is,qf),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ey(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ey(e,t)}xt(is),At(is,e)}function _u(){xt(is),xt(vf),xt(yf)}function sb(t){xa(yf.current);var e=xa(is.current),n=Ey(e,t.type);e!==n&&(At(vf,t),At(is,n))}function T0(t){vf.current===t&&(xt(is),xt(vf))}var jt=ta(0);function Op(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cv=[];function I0(){for(var t=0;t<Cv.length;t++)Cv[t]._workInProgressVersionPrimary=null;Cv.length=0}var ep=Qs.ReactCurrentDispatcher,Pv=Qs.ReactCurrentBatchConfig,qa=0,Bt=null,pn=null,Tn=null,Dp=!1,Hc=!1,_f=0,_V=0;function $n(){throw Error(ue(321))}function S0(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ji(t[n],e[n]))return!1;return!0}function A0(t,e,n,r,i,s){if(qa=s,Bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ep.current=t===null||t.memoizedState===null?IV:SV,t=n(r,i),Hc){s=0;do{if(Hc=!1,_f=0,25<=s)throw Error(ue(301));s+=1,Tn=pn=null,e.updateQueue=null,ep.current=AV,t=n(r,i)}while(Hc)}if(ep.current=Lp,e=pn!==null&&pn.next!==null,qa=0,Tn=pn=Bt=null,Dp=!1,e)throw Error(ue(300));return t}function R0(){var t=_f!==0;return _f=0,t}function Ji(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?Bt.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function di(){if(pn===null){var t=Bt.alternate;t=t!==null?t.memoizedState:null}else t=pn.next;var e=Tn===null?Bt.memoizedState:Tn.next;if(e!==null)Tn=e,pn=t;else{if(t===null)throw Error(ue(310));pn=t,t={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},Tn===null?Bt.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function wf(t,e){return typeof e=="function"?e(t):e}function xv(t){var e=di(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var r=pn,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var u=a=null,f=null,d=s;do{var p=d.lane;if((qa&p)===p)f!==null&&(f=f.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var v={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};f===null?(u=f=v,a=r):f=f.next=v,Bt.lanes|=p,Ka|=p}d=d.next}while(d!==null&&d!==s);f===null?a=r:f.next=u,ji(r,e.memoizedState)||(wr=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=f,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Bt.lanes|=s,Ka|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nv(t){var e=di(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);ji(s,e.memoizedState)||(wr=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function ob(){}function ab(t,e){var n=Bt,r=di(),i=e(),s=!ji(r.memoizedState,i);if(s&&(r.memoizedState=i,wr=!0),r=r.queue,b0(cb.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Tn!==null&&Tn.memoizedState.tag&1){if(n.flags|=2048,Ef(9,ub.bind(null,n,r,i,e),void 0,null),In===null)throw Error(ue(349));qa&30||lb(n,e,i)}return i}function lb(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ub(t,e,n,r){e.value=n,e.getSnapshot=r,fb(e)&&hb(t)}function cb(t,e,n){return n(function(){fb(e)&&hb(t)})}function fb(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ji(t,n)}catch{return!0}}function hb(t){var e=$s(t,1);e!==null&&Fi(e,t,1,-1)}function zT(t){var e=Ji();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wf,lastRenderedState:t},e.queue=t,t=t.dispatch=TV.bind(null,Bt,t),[e.memoizedState,t]}function Ef(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Bt.updateQueue,e===null?(e={lastEffect:null,stores:null},Bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function db(){return di().memoizedState}function tp(t,e,n,r){var i=Ji();Bt.flags|=t,i.memoizedState=Ef(1|e,n,void 0,r===void 0?null:r)}function Em(t,e,n,r){var i=di();r=r===void 0?null:r;var s=void 0;if(pn!==null){var a=pn.memoizedState;if(s=a.destroy,r!==null&&S0(r,a.deps)){i.memoizedState=Ef(e,n,s,r);return}}Bt.flags|=t,i.memoizedState=Ef(1|e,n,s,r)}function WT(t,e){return tp(8390656,8,t,e)}function b0(t,e){return Em(2048,8,t,e)}function pb(t,e){return Em(4,2,t,e)}function mb(t,e){return Em(4,4,t,e)}function gb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vb(t,e,n){return n=n!=null?n.concat([t]):null,Em(4,4,gb.bind(null,e,t),n)}function k0(){}function yb(t,e){var n=di();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&S0(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _b(t,e){var n=di();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&S0(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function wb(t,e,n){return qa&21?(ji(n,e)||(n=AR(),Bt.lanes|=n,Ka|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,wr=!0),t.memoizedState=n)}function wV(t,e){var n=mt;mt=n!==0&&4>n?n:4,t(!0);var r=Pv.transition;Pv.transition={};try{t(!1),e()}finally{mt=n,Pv.transition=r}}function Eb(){return di().memoizedState}function EV(t,e,n){var r=Bo(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Tb(t))Ib(e,n);else if(n=rb(t,e,n,r),n!==null){var i=ir();Fi(n,t,r,i),Sb(n,e,r)}}function TV(t,e,n){var r=Bo(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Tb(t))Ib(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,u=s(a,n);if(i.hasEagerState=!0,i.eagerState=u,ji(u,a)){var f=e.interleaved;f===null?(i.next=i,_0(e)):(i.next=f.next,f.next=i),e.interleaved=i;return}}catch{}finally{}n=rb(t,e,i,r),n!==null&&(i=ir(),Fi(n,t,r,i),Sb(n,e,r))}}function Tb(t){var e=t.alternate;return t===Bt||e!==null&&e===Bt}function Ib(t,e){Hc=Dp=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sb(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,s0(t,n)}}var Lp={readContext:hi,useCallback:$n,useContext:$n,useEffect:$n,useImperativeHandle:$n,useInsertionEffect:$n,useLayoutEffect:$n,useMemo:$n,useReducer:$n,useRef:$n,useState:$n,useDebugValue:$n,useDeferredValue:$n,useTransition:$n,useMutableSource:$n,useSyncExternalStore:$n,useId:$n,unstable_isNewReconciler:!1},IV={readContext:hi,useCallback:function(t,e){return Ji().memoizedState=[t,e===void 0?null:e],t},useContext:hi,useEffect:WT,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,tp(4194308,4,gb.bind(null,e,t),n)},useLayoutEffect:function(t,e){return tp(4194308,4,t,e)},useInsertionEffect:function(t,e){return tp(4,2,t,e)},useMemo:function(t,e){var n=Ji();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ji();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=EV.bind(null,Bt,t),[r.memoizedState,t]},useRef:function(t){var e=Ji();return t={current:t},e.memoizedState=t},useState:zT,useDebugValue:k0,useDeferredValue:function(t){return Ji().memoizedState=t},useTransition:function(){var t=zT(!1),e=t[0];return t=wV.bind(null,t[1]),Ji().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Bt,i=Ji();if(Lt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),In===null)throw Error(ue(349));qa&30||lb(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,WT(cb.bind(null,r,s,t),[t]),r.flags|=2048,Ef(9,ub.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ji(),e=In.identifierPrefix;if(Lt){var n=Ns,r=xs;n=(r&~(1<<32-Mi(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=_f++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=_V++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},SV={readContext:hi,useCallback:yb,useContext:hi,useEffect:b0,useImperativeHandle:vb,useInsertionEffect:pb,useLayoutEffect:mb,useMemo:_b,useReducer:xv,useRef:db,useState:function(){return xv(wf)},useDebugValue:k0,useDeferredValue:function(t){var e=di();return wb(e,pn.memoizedState,t)},useTransition:function(){var t=xv(wf)[0],e=di().memoizedState;return[t,e]},useMutableSource:ob,useSyncExternalStore:ab,useId:Eb,unstable_isNewReconciler:!1},AV={readContext:hi,useCallback:yb,useContext:hi,useEffect:b0,useImperativeHandle:vb,useInsertionEffect:pb,useLayoutEffect:mb,useMemo:_b,useReducer:Nv,useRef:db,useState:function(){return Nv(wf)},useDebugValue:k0,useDeferredValue:function(t){var e=di();return pn===null?e.memoizedState=t:wb(e,pn.memoizedState,t)},useTransition:function(){var t=Nv(wf)[0],e=di().memoizedState;return[t,e]},useMutableSource:ob,useSyncExternalStore:ab,useId:Eb,unstable_isNewReconciler:!1};function Pi(t,e){if(t&&t.defaultProps){e=$t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $y(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:$t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tm={isMounted:function(t){return(t=t._reactInternals)?ll(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ir(),i=Bo(t),s=Ms(r,i);s.payload=e,n!=null&&(s.callback=n),e=Uo(t,s,i),e!==null&&(Fi(e,t,i,r),Zd(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ir(),i=Bo(t),s=Ms(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Uo(t,s,i),e!==null&&(Fi(e,t,i,r),Zd(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ir(),r=Bo(t),i=Ms(n,r);i.tag=2,e!=null&&(i.callback=e),e=Uo(t,i,r),e!==null&&(Fi(e,t,r,n),Zd(e,t,r))}};function HT(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!df(n,r)||!df(i,s):!0}function Ab(t,e,n){var r=!1,i=Ko,s=e.contextType;return typeof s=="object"&&s!==null?s=hi(s):(i=Tr(e)?Wa:Yn.current,r=e.contextTypes,s=(r=r!=null)?gu(t,i):Ko),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tm,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qT(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tm.enqueueReplaceState(e,e.state,null)}function zy(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},w0(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=hi(s):(s=Tr(e)?Wa:Yn.current,i.context=gu(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($y(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Tm.enqueueReplaceState(i,i.state,null),Np(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wu(t,e){try{var n="",r=e;do n+=Z4(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ov(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Wy(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RV=typeof WeakMap=="function"?WeakMap:Map;function Rb(t,e,n){n=Ms(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fp||(Fp=!0,e_=r),Wy(t,e)},n}function bb(t,e,n){n=Ms(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Wy(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Wy(t,e),typeof r!="function"&&(jo===null?jo=new Set([this]):jo.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function KT(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new RV;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=jV.bind(null,t,e,n),e.then(t,t))}function GT(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function YT(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ms(-1,1),e.tag=2,Uo(n,e,1))),n.lanes|=1),t)}var bV=Qs.ReactCurrentOwner,wr=!1;function rr(t,e,n,r){e.child=t===null?nb(e,null,n,r):yu(e,t.child,n,r)}function QT(t,e,n,r,i){n=n.render;var s=e.ref;return lu(e,i),r=A0(t,e,n,r,s,i),n=R0(),t!==null&&!wr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zs(t,e,i)):(Lt&&n&&d0(e),e.flags|=1,rr(t,e,r,i),e.child)}function XT(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!M0(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,kb(t,e,s,r,i)):(t=sp(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:df,n(a,r)&&t.ref===e.ref)return zs(t,e,i)}return e.flags|=1,t=$o(s,r),t.ref=e.ref,t.return=e,e.child=t}function kb(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(df(s,r)&&t.ref===e.ref)if(wr=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(wr=!0);else return e.lanes=t.lanes,zs(t,e,i)}return Hy(t,e,n,r,i)}function Cb(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},At(Zl,Nr),Nr|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,At(Zl,Nr),Nr|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,At(Zl,Nr),Nr|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,At(Zl,Nr),Nr|=r;return rr(t,e,i,n),e.child}function Pb(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hy(t,e,n,r,i){var s=Tr(n)?Wa:Yn.current;return s=gu(e,s),lu(e,i),n=A0(t,e,n,r,s,i),r=R0(),t!==null&&!wr?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zs(t,e,i)):(Lt&&r&&d0(e),e.flags|=1,rr(t,e,n,i),e.child)}function JT(t,e,n,r,i){if(Tr(n)){var s=!0;bp(e)}else s=!1;if(lu(e,i),e.stateNode===null)np(t,e),Ab(e,n,r),zy(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,u=e.memoizedProps;a.props=u;var f=a.context,d=n.contextType;typeof d=="object"&&d!==null?d=hi(d):(d=Tr(n)?Wa:Yn.current,d=gu(e,d));var p=n.getDerivedStateFromProps,v=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";v||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||f!==d)&&qT(e,a,r,d),Ro=!1;var _=e.memoizedState;a.state=_,Np(e,r,a,i),f=e.memoizedState,u!==r||_!==f||Er.current||Ro?(typeof p=="function"&&($y(e,n,p,r),f=e.memoizedState),(u=Ro||HT(e,n,u,r,_,f,d))?(v||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=f),a.props=r,a.state=f,a.context=d,r=u):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,ib(t,e),u=e.memoizedProps,d=e.type===e.elementType?u:Pi(e.type,u),a.props=d,v=e.pendingProps,_=a.context,f=n.contextType,typeof f=="object"&&f!==null?f=hi(f):(f=Tr(n)?Wa:Yn.current,f=gu(e,f));var b=n.getDerivedStateFromProps;(p=typeof b=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==v||_!==f)&&qT(e,a,r,f),Ro=!1,_=e.memoizedState,a.state=_,Np(e,r,a,i);var x=e.memoizedState;u!==v||_!==x||Er.current||Ro?(typeof b=="function"&&($y(e,n,b,r),x=e.memoizedState),(d=Ro||HT(e,n,d,r,_,x,f)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,x,f),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,x,f)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),a.props=r,a.state=x,a.context=f,r=d):(typeof a.componentDidUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return qy(t,e,n,r,s,i)}function qy(t,e,n,r,i,s){Pb(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&FT(e,n,!1),zs(t,e,s);r=e.stateNode,bV.current=e;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=yu(e,t.child,null,s),e.child=yu(e,null,u,s)):rr(t,e,u,s),e.memoizedState=r.state,i&&FT(e,n,!0),e.child}function xb(t){var e=t.stateNode;e.pendingContext?MT(t,e.pendingContext,e.pendingContext!==e.context):e.context&&MT(t,e.context,!1),E0(t,e.containerInfo)}function ZT(t,e,n,r,i){return vu(),m0(i),e.flags|=256,rr(t,e,n,r),e.child}var Ky={dehydrated:null,treeContext:null,retryLane:0};function Gy(t){return{baseLanes:t,cachePool:null,transitions:null}}function Nb(t,e,n){var r=e.pendingProps,i=jt.current,s=!1,a=(e.flags&128)!==0,u;if((u=a)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),At(jt,i&1),t===null)return jy(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Am(a,r,0,null),t=ja(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gy(n),e.memoizedState=Ky,t):C0(e,a));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return kV(t,e,a,r,u,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,u=i.sibling;var f={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=f,e.deletions=null):(r=$o(i,f),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=$o(u,s):(s=ja(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Gy(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ky,r}return s=t.child,t=s.sibling,r=$o(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function C0(t,e){return e=Am({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bd(t,e,n,r){return r!==null&&m0(r),yu(e,t.child,null,n),t=C0(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kV(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Ov(Error(ue(422))),bd(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Am({mode:"visible",children:r.children},i,0,null),s=ja(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&yu(e,t.child,null,a),e.child.memoizedState=Gy(a),e.memoizedState=Ky,s);if(!(e.mode&1))return bd(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(ue(419)),r=Ov(s,r,void 0),bd(t,e,a,r)}if(u=(a&t.childLanes)!==0,wr||u){if(r=In,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,$s(t,i),Fi(r,t,i,-1))}return L0(),r=Ov(Error(ue(421))),bd(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=BV.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Or=Vo(i.nextSibling),Mr=e,Lt=!0,Oi=null,t!==null&&(oi[ai++]=xs,oi[ai++]=Ns,oi[ai++]=Ha,xs=t.id,Ns=t.overflow,Ha=e),e=C0(e,r.children),e.flags|=4096,e)}function eI(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),By(t.return,e,n)}function Dv(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ob(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rr(t,e,r.children,n),r=jt.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&eI(t,n,e);else if(t.tag===19)eI(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(At(jt,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Op(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dv(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Op(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dv(e,!0,n,null,s);break;case"together":Dv(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function np(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zs(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ka|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=$o(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=$o(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function CV(t,e,n){switch(e.tag){case 3:xb(e),vu();break;case 5:sb(e);break;case 1:Tr(e.type)&&bp(e);break;case 4:E0(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;At(Pp,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(At(jt,jt.current&1),e.flags|=128,null):n&e.child.childLanes?Nb(t,e,n):(At(jt,jt.current&1),t=zs(t,e,n),t!==null?t.sibling:null);At(jt,jt.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ob(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),At(jt,jt.current),r)break;return null;case 22:case 23:return e.lanes=0,Cb(t,e,n)}return zs(t,e,n)}var Db,Yy,Lb,Mb;Db=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yy=function(){};Lb=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,xa(is.current);var s=null;switch(n){case"input":i=vy(t,i),r=vy(t,r),s=[];break;case"select":i=$t({},i,{value:void 0}),r=$t({},r,{value:void 0}),s=[];break;case"textarea":i=wy(t,i),r=wy(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ap)}Ty(n,r);var a;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var u=i[d];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(of.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var f=r[d];if(u=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&f!==u&&(f!=null||u!=null))if(d==="style")if(u){for(a in u)!u.hasOwnProperty(a)||f&&f.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in f)f.hasOwnProperty(a)&&u[a]!==f[a]&&(n||(n={}),n[a]=f[a])}else n||(s||(s=[]),s.push(d,n)),n=f;else d==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,u=u?u.__html:void 0,f!=null&&u!==f&&(s=s||[]).push(d,f)):d==="children"?typeof f!="string"&&typeof f!="number"||(s=s||[]).push(d,""+f):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(of.hasOwnProperty(d)?(f!=null&&d==="onScroll"&&Ct("scroll",t),s||u===f||(s=[])):(s=s||[]).push(d,f))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};Mb=function(t,e,n,r){n!==r&&(e.flags|=4)};function Tc(t,e){if(!Lt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function zn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function PV(t,e,n){var r=e.pendingProps;switch(p0(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zn(e),null;case 1:return Tr(e.type)&&Rp(),zn(e),null;case 3:return r=e.stateNode,_u(),xt(Er),xt(Yn),I0(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ad(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Oi!==null&&(r_(Oi),Oi=null))),Yy(t,e),zn(e),null;case 5:T0(e);var i=xa(yf.current);if(n=e.type,t!==null&&e.stateNode!=null)Lb(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(ue(166));return zn(e),null}if(t=xa(is.current),Ad(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[es]=e,r[gf]=s,t=(e.mode&1)!==0,n){case"dialog":Ct("cancel",r),Ct("close",r);break;case"iframe":case"object":case"embed":Ct("load",r);break;case"video":case"audio":for(i=0;i<Nc.length;i++)Ct(Nc[i],r);break;case"source":Ct("error",r);break;case"img":case"image":case"link":Ct("error",r),Ct("load",r);break;case"details":Ct("toggle",r);break;case"input":uT(r,s),Ct("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ct("invalid",r);break;case"textarea":fT(r,s),Ct("invalid",r)}Ty(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var u=s[a];a==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&Sd(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&Sd(r.textContent,u,t),i=["children",""+u]):of.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&Ct("scroll",r)}switch(n){case"input":gd(r),cT(r,s,!0);break;case"textarea":gd(r),hT(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ap)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cR(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[es]=e,t[gf]=r,Db(t,e,!1,!1),e.stateNode=t;e:{switch(a=Iy(n,r),n){case"dialog":Ct("cancel",t),Ct("close",t),i=r;break;case"iframe":case"object":case"embed":Ct("load",t),i=r;break;case"video":case"audio":for(i=0;i<Nc.length;i++)Ct(Nc[i],t);i=r;break;case"source":Ct("error",t),i=r;break;case"img":case"image":case"link":Ct("error",t),Ct("load",t),i=r;break;case"details":Ct("toggle",t),i=r;break;case"input":uT(t,r),i=vy(t,r),Ct("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=$t({},r,{value:void 0}),Ct("invalid",t);break;case"textarea":fT(t,r),i=wy(t,r),Ct("invalid",t);break;default:i=r}Ty(n,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var f=u[s];s==="style"?dR(t,f):s==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&fR(t,f)):s==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&af(t,f):typeof f=="number"&&af(t,""+f):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(of.hasOwnProperty(s)?f!=null&&s==="onScroll"&&Ct("scroll",t):f!=null&&Z_(t,s,f,a))}switch(n){case"input":gd(t),cT(t,r,!1);break;case"textarea":gd(t),hT(t);break;case"option":r.value!=null&&t.setAttribute("value",""+qo(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?iu(t,!!r.multiple,s,!1):r.defaultValue!=null&&iu(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ap)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return zn(e),null;case 6:if(t&&e.stateNode!=null)Mb(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(ue(166));if(n=xa(yf.current),xa(is.current),Ad(e)){if(r=e.stateNode,n=e.memoizedProps,r[es]=e,(s=r.nodeValue!==n)&&(t=Mr,t!==null))switch(t.tag){case 3:Sd(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Sd(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[es]=e,e.stateNode=r}return zn(e),null;case 13:if(xt(jt),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Lt&&Or!==null&&e.mode&1&&!(e.flags&128))eb(),vu(),e.flags|=98560,s=!1;else if(s=Ad(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(ue(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ue(317));s[es]=e}else vu(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;zn(e),s=!1}else Oi!==null&&(r_(Oi),Oi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||jt.current&1?gn===0&&(gn=3):L0())),e.updateQueue!==null&&(e.flags|=4),zn(e),null);case 4:return _u(),Yy(t,e),t===null&&pf(e.stateNode.containerInfo),zn(e),null;case 10:return y0(e.type._context),zn(e),null;case 17:return Tr(e.type)&&Rp(),zn(e),null;case 19:if(xt(jt),s=e.memoizedState,s===null)return zn(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)Tc(s,!1);else{if(gn!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Op(t),a!==null){for(e.flags|=128,Tc(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return At(jt,jt.current&1|2),e.child}t=t.sibling}s.tail!==null&&tn()>Eu&&(e.flags|=128,r=!0,Tc(s,!1),e.lanes=4194304)}else{if(!r)if(t=Op(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Tc(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Lt)return zn(e),null}else 2*tn()-s.renderingStartTime>Eu&&n!==1073741824&&(e.flags|=128,r=!0,Tc(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=tn(),e.sibling=null,n=jt.current,At(jt,r?n&1|2:n&1),e):(zn(e),null);case 22:case 23:return D0(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Nr&1073741824&&(zn(e),e.subtreeFlags&6&&(e.flags|=8192)):zn(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function xV(t,e){switch(p0(e),e.tag){case 1:return Tr(e.type)&&Rp(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _u(),xt(Er),xt(Yn),I0(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return T0(e),null;case 13:if(xt(jt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));vu()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xt(jt),null;case 4:return _u(),null;case 10:return y0(e.type._context),null;case 22:case 23:return D0(),null;case 24:return null;default:return null}}var kd=!1,qn=!1,NV=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Jl(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Gt(t,e,r)}else n.current=null}function Qy(t,e,n){try{n()}catch(r){Gt(t,e,r)}}var tI=!1;function OV(t,e){if(Oy=Tp,t=BR(),h0(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,u=-1,f=-1,d=0,p=0,v=t,_=null;t:for(;;){for(var b;v!==n||i!==0&&v.nodeType!==3||(u=a+i),v!==s||r!==0&&v.nodeType!==3||(f=a+r),v.nodeType===3&&(a+=v.nodeValue.length),(b=v.firstChild)!==null;)_=v,v=b;for(;;){if(v===t)break t;if(_===n&&++d===i&&(u=a),_===s&&++p===r&&(f=a),(b=v.nextSibling)!==null)break;v=_,_=v.parentNode}v=b}n=u===-1||f===-1?null:{start:u,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dy={focusedElem:t,selectionRange:n},Tp=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var O=x.memoizedProps,F=x.memoizedState,k=e.stateNode,R=k.getSnapshotBeforeUpdate(e.elementType===e.type?O:Pi(e.type,O),F);k.__reactInternalSnapshotBeforeUpdate=R}break;case 3:var P=e.stateNode.containerInfo;P.nodeType===1?P.textContent="":P.nodeType===9&&P.documentElement&&P.removeChild(P.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(z){Gt(e,e.return,z)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return x=tI,tI=!1,x}function qc(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qy(e,n,s)}i=i.next}while(i!==r)}}function Im(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Xy(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fb(t){var e=t.alternate;e!==null&&(t.alternate=null,Fb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[es],delete e[gf],delete e[Fy],delete e[mV],delete e[gV])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vb(t){return t.tag===5||t.tag===3||t.tag===4}function nI(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jy(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ap));else if(r!==4&&(t=t.child,t!==null))for(Jy(t,e,n),t=t.sibling;t!==null;)Jy(t,e,n),t=t.sibling}function Zy(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Zy(t,e,n),t=t.sibling;t!==null;)Zy(t,e,n),t=t.sibling}var Pn=null,xi=!1;function Eo(t,e,n){for(n=n.child;n!==null;)Ub(t,e,n),n=n.sibling}function Ub(t,e,n){if(rs&&typeof rs.onCommitFiberUnmount=="function")try{rs.onCommitFiberUnmount(mm,n)}catch{}switch(n.tag){case 5:qn||Jl(n,e);case 6:var r=Pn,i=xi;Pn=null,Eo(t,e,n),Pn=r,xi=i,Pn!==null&&(xi?(t=Pn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pn.removeChild(n.stateNode));break;case 18:Pn!==null&&(xi?(t=Pn,n=n.stateNode,t.nodeType===8?bv(t.parentNode,n):t.nodeType===1&&bv(t,n),ff(t)):bv(Pn,n.stateNode));break;case 4:r=Pn,i=xi,Pn=n.stateNode.containerInfo,xi=!0,Eo(t,e,n),Pn=r,xi=i;break;case 0:case 11:case 14:case 15:if(!qn&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Qy(n,e,a),i=i.next}while(i!==r)}Eo(t,e,n);break;case 1:if(!qn&&(Jl(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){Gt(n,e,u)}Eo(t,e,n);break;case 21:Eo(t,e,n);break;case 22:n.mode&1?(qn=(r=qn)||n.memoizedState!==null,Eo(t,e,n),qn=r):Eo(t,e,n);break;default:Eo(t,e,n)}}function rI(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new NV),e.forEach(function(r){var i=$V.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ci(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,u=a;e:for(;u!==null;){switch(u.tag){case 5:Pn=u.stateNode,xi=!1;break e;case 3:Pn=u.stateNode.containerInfo,xi=!0;break e;case 4:Pn=u.stateNode.containerInfo,xi=!0;break e}u=u.return}if(Pn===null)throw Error(ue(160));Ub(s,a,i),Pn=null,xi=!1;var f=i.alternate;f!==null&&(f.return=null),i.return=null}catch(d){Gt(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jb(e,t),e=e.sibling}function jb(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ci(e,t),Xi(t),r&4){try{qc(3,t,t.return),Im(3,t)}catch(O){Gt(t,t.return,O)}try{qc(5,t,t.return)}catch(O){Gt(t,t.return,O)}}break;case 1:Ci(e,t),Xi(t),r&512&&n!==null&&Jl(n,n.return);break;case 5:if(Ci(e,t),Xi(t),r&512&&n!==null&&Jl(n,n.return),t.flags&32){var i=t.stateNode;try{af(i,"")}catch(O){Gt(t,t.return,O)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,u=t.type,f=t.updateQueue;if(t.updateQueue=null,f!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&lR(i,s),Iy(u,a);var d=Iy(u,s);for(a=0;a<f.length;a+=2){var p=f[a],v=f[a+1];p==="style"?dR(i,v):p==="dangerouslySetInnerHTML"?fR(i,v):p==="children"?af(i,v):Z_(i,p,v,d)}switch(u){case"input":yy(i,s);break;case"textarea":uR(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var b=s.value;b!=null?iu(i,!!s.multiple,b,!1):_!==!!s.multiple&&(s.defaultValue!=null?iu(i,!!s.multiple,s.defaultValue,!0):iu(i,!!s.multiple,s.multiple?[]:"",!1))}i[gf]=s}catch(O){Gt(t,t.return,O)}}break;case 6:if(Ci(e,t),Xi(t),r&4){if(t.stateNode===null)throw Error(ue(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(O){Gt(t,t.return,O)}}break;case 3:if(Ci(e,t),Xi(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ff(e.containerInfo)}catch(O){Gt(t,t.return,O)}break;case 4:Ci(e,t),Xi(t);break;case 13:Ci(e,t),Xi(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(N0=tn())),r&4&&rI(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(qn=(d=qn)||p,Ci(e,t),qn=d):Ci(e,t),Xi(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(Ee=t,p=t.child;p!==null;){for(v=Ee=p;Ee!==null;){switch(_=Ee,b=_.child,_.tag){case 0:case 11:case 14:case 15:qc(4,_,_.return);break;case 1:Jl(_,_.return);var x=_.stateNode;if(typeof x.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(O){Gt(r,n,O)}}break;case 5:Jl(_,_.return);break;case 22:if(_.memoizedState!==null){sI(v);continue}}b!==null?(b.return=_,Ee=b):sI(v)}p=p.sibling}e:for(p=null,v=t;;){if(v.tag===5){if(p===null){p=v;try{i=v.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=v.stateNode,f=v.memoizedProps.style,a=f!=null&&f.hasOwnProperty("display")?f.display:null,u.style.display=hR("display",a))}catch(O){Gt(t,t.return,O)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=d?"":v.memoizedProps}catch(O){Gt(t,t.return,O)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===t)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Ci(e,t),Xi(t),r&4&&rI(t);break;case 21:break;default:Ci(e,t),Xi(t)}}function Xi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vb(n)){var r=n;break e}n=n.return}throw Error(ue(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(af(i,""),r.flags&=-33);var s=nI(t);Zy(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,u=nI(t);Jy(t,u,a);break;default:throw Error(ue(161))}}catch(f){Gt(t,t.return,f)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function DV(t,e,n){Ee=t,Bb(t)}function Bb(t,e,n){for(var r=(t.mode&1)!==0;Ee!==null;){var i=Ee,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||kd;if(!a){var u=i.alternate,f=u!==null&&u.memoizedState!==null||qn;u=kd;var d=qn;if(kd=a,(qn=f)&&!d)for(Ee=i;Ee!==null;)a=Ee,f=a.child,a.tag===22&&a.memoizedState!==null?oI(i):f!==null?(f.return=a,Ee=f):oI(i);for(;s!==null;)Ee=s,Bb(s),s=s.sibling;Ee=i,kd=u,qn=d}iI(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Ee=s):iI(t)}}function iI(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qn||Im(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qn)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Pi(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&$T(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}$T(e,a,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var f=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&ff(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}qn||e.flags&512&&Xy(e)}catch(_){Gt(e,e.return,_)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function sI(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function oI(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Im(4,e)}catch(f){Gt(e,n,f)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(f){Gt(e,i,f)}}var s=e.return;try{Xy(e)}catch(f){Gt(e,s,f)}break;case 5:var a=e.return;try{Xy(e)}catch(f){Gt(e,a,f)}}}catch(f){Gt(e,e.return,f)}if(e===t){Ee=null;break}var u=e.sibling;if(u!==null){u.return=e.return,Ee=u;break}Ee=e.return}}var LV=Math.ceil,Mp=Qs.ReactCurrentDispatcher,P0=Qs.ReactCurrentOwner,fi=Qs.ReactCurrentBatchConfig,st=0,In=null,ln=null,On=0,Nr=0,Zl=ta(0),gn=0,Tf=null,Ka=0,Sm=0,x0=0,Kc=null,yr=null,N0=0,Eu=1/0,Rs=null,Fp=!1,e_=null,jo=null,Cd=!1,Oo=null,Vp=0,Gc=0,t_=null,rp=-1,ip=0;function ir(){return st&6?tn():rp!==-1?rp:rp=tn()}function Bo(t){return t.mode&1?st&2&&On!==0?On&-On:yV.transition!==null?(ip===0&&(ip=AR()),ip):(t=mt,t!==0||(t=window.event,t=t===void 0?16:NR(t.type)),t):1}function Fi(t,e,n,r){if(50<Gc)throw Gc=0,t_=null,Error(ue(185));zf(t,n,r),(!(st&2)||t!==In)&&(t===In&&(!(st&2)&&(Sm|=n),gn===4&&ko(t,On)),Ir(t,r),n===1&&st===0&&!(e.mode&1)&&(Eu=tn()+500,wm&&na()))}function Ir(t,e){var n=t.callbackNode;yF(t,e);var r=Ep(t,t===In?On:0);if(r===0)n!==null&&mT(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mT(n),e===1)t.tag===0?vV(aI.bind(null,t)):XR(aI.bind(null,t)),dV(function(){!(st&6)&&na()}),n=null;else{switch(RR(r)){case 1:n=i0;break;case 4:n=IR;break;case 16:n=wp;break;case 536870912:n=SR;break;default:n=wp}n=Yb(n,$b.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $b(t,e){if(rp=-1,ip=0,st&6)throw Error(ue(327));var n=t.callbackNode;if(uu()&&t.callbackNode!==n)return null;var r=Ep(t,t===In?On:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Up(t,r);else{e=r;var i=st;st|=2;var s=Wb();(In!==t||On!==e)&&(Rs=null,Eu=tn()+500,Ua(t,e));do try{VV();break}catch(u){zb(t,u)}while(!0);v0(),Mp.current=s,st=i,ln!==null?e=0:(In=null,On=0,e=gn)}if(e!==0){if(e===2&&(i=ky(t),i!==0&&(r=i,e=n_(t,i))),e===1)throw n=Tf,Ua(t,0),ko(t,r),Ir(t,tn()),n;if(e===6)ko(t,r);else{if(i=t.current.alternate,!(r&30)&&!MV(i)&&(e=Up(t,r),e===2&&(s=ky(t),s!==0&&(r=s,e=n_(t,s))),e===1))throw n=Tf,Ua(t,0),ko(t,r),Ir(t,tn()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(ue(345));case 2:Ra(t,yr,Rs);break;case 3:if(ko(t,r),(r&130023424)===r&&(e=N0+500-tn(),10<e)){if(Ep(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ir(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=My(Ra.bind(null,t,yr,Rs),e);break}Ra(t,yr,Rs);break;case 4:if(ko(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Mi(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=tn()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*LV(r/1960))-r,10<r){t.timeoutHandle=My(Ra.bind(null,t,yr,Rs),r);break}Ra(t,yr,Rs);break;case 5:Ra(t,yr,Rs);break;default:throw Error(ue(329))}}}return Ir(t,tn()),t.callbackNode===n?$b.bind(null,t):null}function n_(t,e){var n=Kc;return t.current.memoizedState.isDehydrated&&(Ua(t,e).flags|=256),t=Up(t,e),t!==2&&(e=yr,yr=n,e!==null&&r_(e)),t}function r_(t){yr===null?yr=t:yr.push.apply(yr,t)}function MV(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!ji(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ko(t,e){for(e&=~x0,e&=~Sm,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mi(e),r=1<<n;t[n]=-1,e&=~r}}function aI(t){if(st&6)throw Error(ue(327));uu();var e=Ep(t,0);if(!(e&1))return Ir(t,tn()),null;var n=Up(t,e);if(t.tag!==0&&n===2){var r=ky(t);r!==0&&(e=r,n=n_(t,r))}if(n===1)throw n=Tf,Ua(t,0),ko(t,e),Ir(t,tn()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ra(t,yr,Rs),Ir(t,tn()),null}function O0(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&(Eu=tn()+500,wm&&na())}}function Ga(t){Oo!==null&&Oo.tag===0&&!(st&6)&&uu();var e=st;st|=1;var n=fi.transition,r=mt;try{if(fi.transition=null,mt=1,t)return t()}finally{mt=r,fi.transition=n,st=e,!(st&6)&&na()}}function D0(){Nr=Zl.current,xt(Zl)}function Ua(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,hV(n)),ln!==null)for(n=ln.return;n!==null;){var r=n;switch(p0(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Rp();break;case 3:_u(),xt(Er),xt(Yn),I0();break;case 5:T0(r);break;case 4:_u();break;case 13:xt(jt);break;case 19:xt(jt);break;case 10:y0(r.type._context);break;case 22:case 23:D0()}n=n.return}if(In=t,ln=t=$o(t.current,null),On=Nr=e,gn=0,Tf=null,x0=Sm=Ka=0,yr=Kc=null,Pa!==null){for(e=0;e<Pa.length;e++)if(n=Pa[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}Pa=null}return t}function zb(t,e){do{var n=ln;try{if(v0(),ep.current=Lp,Dp){for(var r=Bt.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dp=!1}if(qa=0,Tn=pn=Bt=null,Hc=!1,_f=0,P0.current=null,n===null||n.return===null){gn=1,Tf=e,ln=null;break}e:{var s=t,a=n.return,u=n,f=e;if(e=On,u.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var d=f,p=u,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var b=GT(a);if(b!==null){b.flags&=-257,YT(b,a,u,s,e),b.mode&1&&KT(s,d,e),e=b,f=d;var x=e.updateQueue;if(x===null){var O=new Set;O.add(f),e.updateQueue=O}else x.add(f);break e}else{if(!(e&1)){KT(s,d,e),L0();break e}f=Error(ue(426))}}else if(Lt&&u.mode&1){var F=GT(a);if(F!==null){!(F.flags&65536)&&(F.flags|=256),YT(F,a,u,s,e),m0(wu(f,u));break e}}s=f=wu(f,u),gn!==4&&(gn=2),Kc===null?Kc=[s]:Kc.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=Rb(s,f,e);BT(s,k);break e;case 1:u=f;var R=s.type,P=s.stateNode;if(!(s.flags&128)&&(typeof R.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(jo===null||!jo.has(P)))){s.flags|=65536,e&=-e,s.lanes|=e;var z=bb(s,u,e);BT(s,z);break e}}s=s.return}while(s!==null)}qb(n)}catch(G){e=G,ln===n&&n!==null&&(ln=n=n.return);continue}break}while(!0)}function Wb(){var t=Mp.current;return Mp.current=Lp,t===null?Lp:t}function L0(){(gn===0||gn===3||gn===2)&&(gn=4),In===null||!(Ka&268435455)&&!(Sm&268435455)||ko(In,On)}function Up(t,e){var n=st;st|=2;var r=Wb();(In!==t||On!==e)&&(Rs=null,Ua(t,e));do try{FV();break}catch(i){zb(t,i)}while(!0);if(v0(),st=n,Mp.current=r,ln!==null)throw Error(ue(261));return In=null,On=0,gn}function FV(){for(;ln!==null;)Hb(ln)}function VV(){for(;ln!==null&&!uF();)Hb(ln)}function Hb(t){var e=Gb(t.alternate,t,Nr);t.memoizedProps=t.pendingProps,e===null?qb(t):ln=e,P0.current=null}function qb(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xV(n,e),n!==null){n.flags&=32767,ln=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{gn=6,ln=null;return}}else if(n=PV(n,e,Nr),n!==null){ln=n;return}if(e=e.sibling,e!==null){ln=e;return}ln=e=t}while(e!==null);gn===0&&(gn=5)}function Ra(t,e,n){var r=mt,i=fi.transition;try{fi.transition=null,mt=1,UV(t,e,n,r)}finally{fi.transition=i,mt=r}return null}function UV(t,e,n,r){do uu();while(Oo!==null);if(st&6)throw Error(ue(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(_F(t,s),t===In&&(ln=In=null,On=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Cd||(Cd=!0,Yb(wp,function(){return uu(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=fi.transition,fi.transition=null;var a=mt;mt=1;var u=st;st|=4,P0.current=null,OV(t,n),jb(n,t),sV(Dy),Tp=!!Oy,Dy=Oy=null,t.current=n,DV(n),cF(),st=u,mt=a,fi.transition=s}else t.current=n;if(Cd&&(Cd=!1,Oo=t,Vp=i),s=t.pendingLanes,s===0&&(jo=null),dF(n.stateNode),Ir(t,tn()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fp)throw Fp=!1,t=e_,e_=null,t;return Vp&1&&t.tag!==0&&uu(),s=t.pendingLanes,s&1?t===t_?Gc++:(Gc=0,t_=t):Gc=0,na(),null}function uu(){if(Oo!==null){var t=RR(Vp),e=fi.transition,n=mt;try{if(fi.transition=null,mt=16>t?16:t,Oo===null)var r=!1;else{if(t=Oo,Oo=null,Vp=0,st&6)throw Error(ue(331));var i=st;for(st|=4,Ee=t.current;Ee!==null;){var s=Ee,a=s.child;if(Ee.flags&16){var u=s.deletions;if(u!==null){for(var f=0;f<u.length;f++){var d=u[f];for(Ee=d;Ee!==null;){var p=Ee;switch(p.tag){case 0:case 11:case 15:qc(8,p,s)}var v=p.child;if(v!==null)v.return=p,Ee=v;else for(;Ee!==null;){p=Ee;var _=p.sibling,b=p.return;if(Fb(p),p===d){Ee=null;break}if(_!==null){_.return=b,Ee=_;break}Ee=b}}}var x=s.alternate;if(x!==null){var O=x.child;if(O!==null){x.child=null;do{var F=O.sibling;O.sibling=null,O=F}while(O!==null)}}Ee=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ee=a;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qc(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,Ee=k;break e}Ee=s.return}}var R=t.current;for(Ee=R;Ee!==null;){a=Ee;var P=a.child;if(a.subtreeFlags&2064&&P!==null)P.return=a,Ee=P;else e:for(a=R;Ee!==null;){if(u=Ee,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Im(9,u)}}catch(G){Gt(u,u.return,G)}if(u===a){Ee=null;break e}var z=u.sibling;if(z!==null){z.return=u.return,Ee=z;break e}Ee=u.return}}if(st=i,na(),rs&&typeof rs.onPostCommitFiberRoot=="function")try{rs.onPostCommitFiberRoot(mm,t)}catch{}r=!0}return r}finally{mt=n,fi.transition=e}}return!1}function lI(t,e,n){e=wu(n,e),e=Rb(t,e,1),t=Uo(t,e,1),e=ir(),t!==null&&(zf(t,1,e),Ir(t,e))}function Gt(t,e,n){if(t.tag===3)lI(t,t,n);else for(;e!==null;){if(e.tag===3){lI(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jo===null||!jo.has(r))){t=wu(n,t),t=bb(e,t,1),e=Uo(e,t,1),t=ir(),e!==null&&(zf(e,1,t),Ir(e,t));break}}e=e.return}}function jV(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ir(),t.pingedLanes|=t.suspendedLanes&n,In===t&&(On&n)===n&&(gn===4||gn===3&&(On&130023424)===On&&500>tn()-N0?Ua(t,0):x0|=n),Ir(t,e)}function Kb(t,e){e===0&&(t.mode&1?(e=_d,_d<<=1,!(_d&130023424)&&(_d=4194304)):e=1);var n=ir();t=$s(t,e),t!==null&&(zf(t,e,n),Ir(t,n))}function BV(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Kb(t,n)}function $V(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(ue(314))}r!==null&&r.delete(e),Kb(t,n)}var Gb;Gb=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Er.current)wr=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return wr=!1,CV(t,e,n);wr=!!(t.flags&131072)}else wr=!1,Lt&&e.flags&1048576&&JR(e,Cp,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;np(t,e),t=e.pendingProps;var i=gu(e,Yn.current);lu(e,n),i=A0(null,e,r,t,i,n);var s=R0();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Tr(r)?(s=!0,bp(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,w0(e),i.updater=Tm,e.stateNode=i,i._reactInternals=e,zy(e,r,t,n),e=qy(null,e,r,!0,s,n)):(e.tag=0,Lt&&s&&d0(e),rr(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(np(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=WV(r),t=Pi(r,t),i){case 0:e=Hy(null,e,r,t,n);break e;case 1:e=JT(null,e,r,t,n);break e;case 11:e=QT(null,e,r,t,n);break e;case 14:e=XT(null,e,r,Pi(r.type,t),n);break e}throw Error(ue(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pi(r,i),Hy(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pi(r,i),JT(t,e,r,i,n);case 3:e:{if(xb(e),t===null)throw Error(ue(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ib(t,e),Np(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=wu(Error(ue(423)),e),e=ZT(t,e,r,n,i);break e}else if(r!==i){i=wu(Error(ue(424)),e),e=ZT(t,e,r,n,i);break e}else for(Or=Vo(e.stateNode.containerInfo.firstChild),Mr=e,Lt=!0,Oi=null,n=nb(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vu(),r===i){e=zs(t,e,n);break e}rr(t,e,r,n)}e=e.child}return e;case 5:return sb(e),t===null&&jy(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,Ly(r,i)?a=null:s!==null&&Ly(r,s)&&(e.flags|=32),Pb(t,e),rr(t,e,a,n),e.child;case 6:return t===null&&jy(e),null;case 13:return Nb(t,e,n);case 4:return E0(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=yu(e,null,r,n):rr(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pi(r,i),QT(t,e,r,i,n);case 7:return rr(t,e,e.pendingProps,n),e.child;case 8:return rr(t,e,e.pendingProps.children,n),e.child;case 12:return rr(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,At(Pp,r._currentValue),r._currentValue=a,s!==null)if(ji(s.value,a)){if(s.children===i.children&&!Er.current){e=zs(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){a=s.child;for(var f=u.firstContext;f!==null;){if(f.context===r){if(s.tag===1){f=Ms(-1,n&-n),f.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?f.next=f:(f.next=p.next,p.next=f),d.pending=f}}s.lanes|=n,f=s.alternate,f!==null&&(f.lanes|=n),By(s.return,n,e),u.lanes|=n;break}f=f.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ue(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),By(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rr(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,lu(e,n),i=hi(i),r=r(i),e.flags|=1,rr(t,e,r,n),e.child;case 14:return r=e.type,i=Pi(r,e.pendingProps),i=Pi(r.type,i),XT(t,e,r,i,n);case 15:return kb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Pi(r,i),np(t,e),e.tag=1,Tr(r)?(t=!0,bp(e)):t=!1,lu(e,n),Ab(e,r,i),zy(e,r,i,n),qy(null,e,r,!0,t,n);case 19:return Ob(t,e,n);case 22:return Cb(t,e,n)}throw Error(ue(156,e.tag))};function Yb(t,e){return TR(t,e)}function zV(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ui(t,e,n,r){return new zV(t,e,n,r)}function M0(t){return t=t.prototype,!(!t||!t.isReactComponent)}function WV(t){if(typeof t=="function")return M0(t)?1:0;if(t!=null){if(t=t.$$typeof,t===t0)return 11;if(t===n0)return 14}return 2}function $o(t,e){var n=t.alternate;return n===null?(n=ui(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sp(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")M0(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case zl:return ja(n.children,i,s,e);case e0:a=8,i|=8;break;case dy:return t=ui(12,n,e,i|2),t.elementType=dy,t.lanes=s,t;case py:return t=ui(13,n,e,i),t.elementType=py,t.lanes=s,t;case my:return t=ui(19,n,e,i),t.elementType=my,t.lanes=s,t;case sR:return Am(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case rR:a=10;break e;case iR:a=9;break e;case t0:a=11;break e;case n0:a=14;break e;case Ao:a=16,r=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=ui(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ja(t,e,n,r){return t=ui(7,t,r,e),t.lanes=n,t}function Am(t,e,n,r){return t=ui(22,t,r,e),t.elementType=sR,t.lanes=n,t.stateNode={isHidden:!1},t}function Lv(t,e,n){return t=ui(6,t,null,e),t.lanes=n,t}function Mv(t,e,n){return e=ui(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function HV(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gv(0),this.expirationTimes=gv(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gv(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function F0(t,e,n,r,i,s,a,u,f){return t=new HV(t,e,n,u,f),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ui(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},w0(s),t}function qV(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$l,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Qb(t){if(!t)return Ko;t=t._reactInternals;e:{if(ll(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Tr(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(Tr(n))return QR(t,n,e)}return e}function Xb(t,e,n,r,i,s,a,u,f){return t=F0(n,r,!0,t,i,s,a,u,f),t.context=Qb(null),n=t.current,r=ir(),i=Bo(n),s=Ms(r,i),s.callback=e??null,Uo(n,s,i),t.current.lanes=i,zf(t,i,r),Ir(t,r),t}function Rm(t,e,n,r){var i=e.current,s=ir(),a=Bo(i);return n=Qb(n),e.context===null?e.context=n:e.pendingContext=n,e=Ms(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Uo(i,e,a),t!==null&&(Fi(t,i,a,s),Zd(t,i,a)),a}function jp(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function uI(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function V0(t,e){uI(t,e),(t=t.alternate)&&uI(t,e)}function KV(){return null}var Jb=typeof reportError=="function"?reportError:function(t){console.error(t)};function U0(t){this._internalRoot=t}bm.prototype.render=U0.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));Rm(t,e,null,null)};bm.prototype.unmount=U0.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ga(function(){Rm(null,t,null,null)}),e[Bs]=null}};function bm(t){this._internalRoot=t}bm.prototype.unstable_scheduleHydration=function(t){if(t){var e=CR();t={blockedOn:null,target:t,priority:e};for(var n=0;n<bo.length&&e!==0&&e<bo[n].priority;n++);bo.splice(n,0,t),n===0&&xR(t)}};function j0(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function km(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function cI(){}function GV(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=jp(a);s.call(d)}}var a=Xb(e,r,t,0,null,!1,!1,"",cI);return t._reactRootContainer=a,t[Bs]=a.current,pf(t.nodeType===8?t.parentNode:t),Ga(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var d=jp(f);u.call(d)}}var f=F0(t,0,!1,null,null,!1,!1,"",cI);return t._reactRootContainer=f,t[Bs]=f.current,pf(t.nodeType===8?t.parentNode:t),Ga(function(){Rm(e,f,n,r)}),f}function Cm(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var u=i;i=function(){var f=jp(a);u.call(f)}}Rm(e,a,t,i)}else a=GV(n,e,t,i,r);return jp(a)}bR=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xc(e.pendingLanes);n!==0&&(s0(e,n|1),Ir(e,tn()),!(st&6)&&(Eu=tn()+500,na()))}break;case 13:Ga(function(){var r=$s(t,1);if(r!==null){var i=ir();Fi(r,t,1,i)}}),V0(t,1)}};o0=function(t){if(t.tag===13){var e=$s(t,134217728);if(e!==null){var n=ir();Fi(e,t,134217728,n)}V0(t,134217728)}};kR=function(t){if(t.tag===13){var e=Bo(t),n=$s(t,e);if(n!==null){var r=ir();Fi(n,t,e,r)}V0(t,e)}};CR=function(){return mt};PR=function(t,e){var n=mt;try{return mt=t,e()}finally{mt=n}};Ay=function(t,e,n){switch(e){case"input":if(yy(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=_m(r);if(!i)throw Error(ue(90));aR(r),yy(r,i)}}}break;case"textarea":uR(t,n);break;case"select":e=n.value,e!=null&&iu(t,!!n.multiple,e,!1)}};gR=O0;vR=Ga;var YV={usingClientEntryPoint:!1,Events:[Hf,Kl,_m,pR,mR,O0]},Ic={findFiberByHostInstance:Ca,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QV={bundleType:Ic.bundleType,version:Ic.version,rendererPackageName:Ic.rendererPackageName,rendererConfig:Ic.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qs.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=wR(t),t===null?null:t.stateNode},findFiberByHostInstance:Ic.findFiberByHostInstance||KV,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pd.isDisabled&&Pd.supportsFiber)try{mm=Pd.inject(QV),rs=Pd}catch{}}Br.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YV;Br.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!j0(e))throw Error(ue(200));return qV(t,e,null,n)};Br.createRoot=function(t,e){if(!j0(t))throw Error(ue(299));var n=!1,r="",i=Jb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=F0(t,1,!1,null,null,n,!1,r,i),t[Bs]=e.current,pf(t.nodeType===8?t.parentNode:t),new U0(e)};Br.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=wR(e),t=t===null?null:t.stateNode,t};Br.flushSync=function(t){return Ga(t)};Br.hydrate=function(t,e,n){if(!km(e))throw Error(ue(200));return Cm(null,t,e,!0,n)};Br.hydrateRoot=function(t,e,n){if(!j0(t))throw Error(ue(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Jb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Xb(e,null,t,1,n??null,i,!1,s,a),t[Bs]=e.current,pf(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new bm(e)};Br.render=function(t,e,n){if(!km(e))throw Error(ue(200));return Cm(null,t,e,!1,n)};Br.unmountComponentAtNode=function(t){if(!km(t))throw Error(ue(40));return t._reactRootContainer?(Ga(function(){Cm(null,null,t,!1,function(){t._reactRootContainer=null,t[Bs]=null})}),!0):!1};Br.unstable_batchedUpdates=O0;Br.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!km(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Cm(t,e,n,!1,r)};Br.version="18.3.1-next-f1338f8080-20240426";function Zb(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zb)}catch(t){console.error(t)}}Zb(),ZA.exports=Br;var B0=ZA.exports;const XV=Bf(B0),JV=BA({__proto__:null,default:XV},[B0]);var fI=B0;fy.createRoot=fI.createRoot,fy.hydrateRoot=fI.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ut(){return Ut=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ut.apply(this,arguments)}var on;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(on||(on={}));const hI="popstate";function ZV(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:a,hash:u}=r.location;return If("",{pathname:s,search:a,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ya(i)}return tU(e,n,null,t)}function Qe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Tu(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function eU(){return Math.random().toString(36).substr(2,8)}function dI(t,e){return{usr:t.state,key:t.key,idx:e}}function If(t,e,n,r){return n===void 0&&(n=null),Ut({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ra(e):e,{state:n,key:e&&e.key||r||eU()})}function Ya(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ra(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function tU(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,u=on.Pop,f=null,d=p();d==null&&(d=0,a.replaceState(Ut({},a.state,{idx:d}),""));function p(){return(a.state||{idx:null}).idx}function v(){u=on.Pop;let F=p(),k=F==null?null:F-d;d=F,f&&f({action:u,location:O.location,delta:k})}function _(F,k){u=on.Push;let R=If(O.location,F,k);d=p()+1;let P=dI(R,d),z=O.createHref(R);try{a.pushState(P,"",z)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;i.location.assign(z)}s&&f&&f({action:u,location:O.location,delta:1})}function b(F,k){u=on.Replace;let R=If(O.location,F,k);d=p();let P=dI(R,d),z=O.createHref(R);a.replaceState(P,"",z),s&&f&&f({action:u,location:O.location,delta:0})}function x(F){let k=i.location.origin!=="null"?i.location.origin:i.location.href,R=typeof F=="string"?F:Ya(F);return R=R.replace(/ $/,"%20"),Qe(k,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,k)}let O={get action(){return u},get location(){return t(i,a)},listen(F){if(f)throw new Error("A history only accepts one active listener");return i.addEventListener(hI,v),f=F,()=>{i.removeEventListener(hI,v),f=null}},createHref(F){return e(i,F)},createURL:x,encodeLocation(F){let k=x(F);return{pathname:k.pathname,search:k.search,hash:k.hash}},push:_,replace:b,go(F){return a.go(F)}};return O}var Dt;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dt||(Dt={}));const nU=new Set(["lazy","caseSensitive","path","id","index","children"]);function rU(t){return t.index===!0}function i_(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let a=[...n,s],u=typeof i.id=="string"?i.id:a.join("-");if(Qe(i.index!==!0||!i.children,"Cannot specify children on an index route"),Qe(!r[u],'Found a route id collision on id "'+u+`".  Route id's must be globally unique within Data Router usages`),rU(i)){let f=Ut({},i,e(i),{id:u});return r[u]=f,f}else{let f=Ut({},i,e(i),{id:u,children:void 0});return r[u]=f,i.children&&(f.children=i_(i.children,e,a,r)),f}})}function eu(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?ra(e):e,i=Mu(r.pathname||"/",n);if(i==null)return null;let s=ek(t);sU(s);let a=null;for(let u=0;a==null&&u<s.length;++u){let f=vU(i);a=pU(s[u],f)}return a}function iU(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function ek(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,u)=>{let f={relativePath:u===void 0?s.path||"":u,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};f.relativePath.startsWith("/")&&(Qe(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let d=Fs([r,f.relativePath]),p=n.concat(f);s.children&&s.children.length>0&&(Qe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),ek(s.children,e,p,d)),!(s.path==null&&!s.index)&&e.push({path:d,score:hU(d,s.index),routesMeta:p})};return t.forEach((s,a)=>{var u;if(s.path===""||!((u=s.path)!=null&&u.includes("?")))i(s,a);else for(let f of tk(s.path))i(s,a,f)}),e}function tk(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=tk(r.join("/")),u=[];return u.push(...a.map(f=>f===""?s:[s,f].join("/"))),i&&u.push(...a),u.map(f=>t.startsWith("/")&&f===""?"/":f)}function sU(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:dU(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const oU=/^:[\w-]+$/,aU=3,lU=2,uU=1,cU=10,fU=-2,pI=t=>t==="*";function hU(t,e){let n=t.split("/"),r=n.length;return n.some(pI)&&(r+=fU),e&&(r+=lU),n.filter(i=>!pI(i)).reduce((i,s)=>i+(oU.test(s)?aU:s===""?uU:cU),r)}function dU(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function pU(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let a=0;a<n.length;++a){let u=n[a],f=a===n.length-1,d=i==="/"?e:e.slice(i.length)||"/",p=mU({path:u.relativePath,caseSensitive:u.caseSensitive,end:f},d);if(!p)return null;Object.assign(r,p.params);let v=u.route;s.push({params:r,pathname:Fs([i,p.pathname]),pathnameBase:wU(Fs([i,p.pathnameBase])),route:v}),p.pathnameBase!=="/"&&(i=Fs([i,p.pathnameBase]))}return s}function mU(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=gU(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),u=i.slice(1);return{params:r.reduce((d,p,v)=>{let{paramName:_,isOptional:b}=p;if(_==="*"){let O=u[v]||"";a=s.slice(0,s.length-O.length).replace(/(.)\/+$/,"$1")}const x=u[v];return b&&!x?d[_]=void 0:d[_]=(x||"").replace(/%2F/g,"/"),d},{}),pathname:s,pathnameBase:a,pattern:t}}function gU(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Tu(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,u,f)=>(r.push({paramName:u,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function vU(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Tu(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Mu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function yU(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ra(t):t;return{pathname:n?n.startsWith("/")?n:_U(n,e):e,search:EU(r),hash:TU(i)}}function _U(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fv(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function $0(t,e){let n=nk(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function z0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ra(t):(i=Ut({},t),Qe(!i.pathname||!i.pathname.includes("?"),Fv("?","pathname","search",i)),Qe(!i.pathname||!i.pathname.includes("#"),Fv("#","pathname","hash",i)),Qe(!i.search||!i.search.includes("#"),Fv("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,u;if(a==null)u=n;else{let v=e.length-1;if(!r&&a.startsWith("..")){let _=a.split("/");for(;_[0]==="..";)_.shift(),v-=1;i.pathname=_.join("/")}u=v>=0?e[v]:"/"}let f=yU(i,u),d=a&&a!=="/"&&a.endsWith("/"),p=(s||a===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(d||p)&&(f.pathname+="/"),f}const Fs=t=>t.join("/").replace(/\/\/+/g,"/"),wU=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),EU=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,TU=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class W0{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function H0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rk=["post","put","patch","delete"],IU=new Set(rk),SU=["get",...rk],AU=new Set(SU),RU=new Set([301,302,303,307,308]),bU=new Set([307,308]),Vv={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},kU={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Sc={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},q0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,CU=t=>({hasErrorBoundary:!!t.hasErrorBoundary}),ik="remix-router-transitions";function PU(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;Qe(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let $=t.detectErrorBoundary;i=K=>({hasErrorBoundary:$(K)})}else i=CU;let s={},a=i_(t.routes,i,void 0,s),u,f=t.basename||"/",d=t.unstable_dataStrategy||DU,p=Ut({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},t.future),v=null,_=new Set,b=null,x=null,O=null,F=t.hydrationData!=null,k=eu(a,t.history.location,f),R=null;if(k==null){let $=si(404,{pathname:t.history.location.pathname}),{matches:K,route:X}=SI(a);k=K,R={[X.id]:$}}let P,z=k.some($=>$.route.lazy),G=k.some($=>$.route.loader);if(z)P=!1;else if(!G)P=!0;else if(p.v7_partialHydration){let $=t.hydrationData?t.hydrationData.loaderData:null,K=t.hydrationData?t.hydrationData.errors:null,X=le=>le.route.loader?typeof le.route.loader=="function"&&le.route.loader.hydrate===!0?!1:$&&$[le.route.id]!==void 0||K&&K[le.route.id]!==void 0:!0;if(K){let le=k.findIndex(ve=>K[ve.route.id]!==void 0);P=k.slice(0,le+1).every(X)}else P=k.every(X)}else P=t.hydrationData!=null;let Z,E={historyAction:t.history.action,location:t.history.location,matches:k,initialized:P,navigation:Vv,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||R,fetchers:new Map,blockers:new Map},I=on.Pop,C=!1,N,M=!1,U=new Map,D=null,pe=!1,fe=!1,he=[],de=[],H=new Map,oe=0,ae=-1,ye=new Map,Ie=new Set,Le=new Map,rt=new Map,qe=new Set,dt=new Map,_t=new Map,Sn=!1;function An(){if(v=t.history.listen($=>{let{action:K,location:X,delta:le}=$;if(Sn){Sn=!1;return}Tu(_t.size===0||le!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ve=ro({currentLocation:E.location,nextLocation:X,historyAction:K});if(ve&&le!=null){Sn=!0,t.history.go(le*-1),$i(ve,{state:"blocked",location:X,proceed(){$i(ve,{state:"proceeding",proceed:void 0,reset:void 0,location:X}),t.history.go(le)},reset(){let Se=new Map(E.blockers);Se.set(ve,Sc),gt({blockers:Se})}});return}return Wr(K,X)}),n){qU(e,U);let $=()=>KU(e,U);e.addEventListener("pagehide",$),D=()=>e.removeEventListener("pagehide",$)}return E.initialized||Wr(on.Pop,E.location,{initialHydration:!0}),Z}function Ft(){v&&v(),D&&D(),_.clear(),N&&N.abort(),E.fetchers.forEach(($,K)=>yi(K)),E.blockers.forEach(($,K)=>no(K))}function nn($){return _.add($),()=>_.delete($)}function gt($,K){K===void 0&&(K={}),E=Ut({},E,$);let X=[],le=[];p.v7_fetcherPersist&&E.fetchers.forEach((ve,Se)=>{ve.state==="idle"&&(qe.has(Se)?le.push(Se):X.push(Se))}),[..._].forEach(ve=>ve(E,{deletedFetchers:le,unstable_viewTransitionOpts:K.viewTransitionOpts,unstable_flushSync:K.flushSync===!0})),p.v7_fetcherPersist&&(X.forEach(ve=>E.fetchers.delete(ve)),le.forEach(ve=>yi(ve)))}function Rn($,K,X){var le,ve;let{flushSync:Se}=X===void 0?{}:X,be=E.actionData!=null&&E.navigation.formMethod!=null&&Ni(E.navigation.formMethod)&&E.navigation.state==="loading"&&((le=$.state)==null?void 0:le._isRedirect)!==!0,ge;K.actionData?Object.keys(K.actionData).length>0?ge=K.actionData:ge=null:be?ge=E.actionData:ge=null;let Pe=K.loaderData?TI(E.loaderData,K.loaderData,K.matches||[],K.errors):E.loaderData,Me=E.blockers;Me.size>0&&(Me=new Map(Me),Me.forEach((Ne,vt)=>Me.set(vt,Sc)));let Jt=C===!0||E.navigation.formMethod!=null&&Ni(E.navigation.formMethod)&&((ve=$.state)==null?void 0:ve._isRedirect)!==!0;u&&(a=u,u=void 0),pe||I===on.Pop||(I===on.Push?t.history.push($,$.state):I===on.Replace&&t.history.replace($,$.state));let St;if(I===on.Pop){let Ne=U.get(E.location.pathname);Ne&&Ne.has($.pathname)?St={currentLocation:E.location,nextLocation:$}:U.has($.pathname)&&(St={currentLocation:$,nextLocation:E.location})}else if(M){let Ne=U.get(E.location.pathname);Ne?Ne.add($.pathname):(Ne=new Set([$.pathname]),U.set(E.location.pathname,Ne)),St={currentLocation:E.location,nextLocation:$}}gt(Ut({},K,{actionData:ge,loaderData:Pe,historyAction:I,location:$,initialized:!0,navigation:Vv,revalidation:"idle",restoreScrollPosition:oo($,K.matches||E.matches),preventScrollReset:Jt,blockers:Me}),{viewTransitionOpts:St,flushSync:Se===!0}),I=on.Pop,C=!1,M=!1,pe=!1,fe=!1,he=[],de=[]}async function yn($,K){if(typeof $=="number"){t.history.go($);return}let X=s_(E.location,E.matches,f,p.v7_prependBasename,$,p.v7_relativeSplatPath,K==null?void 0:K.fromRouteId,K==null?void 0:K.relative),{path:le,submission:ve,error:Se}=mI(p.v7_normalizeFormMethod,!1,X,K),be=E.location,ge=If(E.location,le,K&&K.state);ge=Ut({},ge,t.history.encodeLocation(ge));let Pe=K&&K.replace!=null?K.replace:void 0,Me=on.Push;Pe===!0?Me=on.Replace:Pe===!1||ve!=null&&Ni(ve.formMethod)&&ve.formAction===E.location.pathname+E.location.search&&(Me=on.Replace);let Jt=K&&"preventScrollReset"in K?K.preventScrollReset===!0:void 0,St=(K&&K.unstable_flushSync)===!0,Ne=ro({currentLocation:be,nextLocation:ge,historyAction:Me});if(Ne){$i(Ne,{state:"blocked",location:ge,proceed(){$i(Ne,{state:"proceeding",proceed:void 0,reset:void 0,location:ge}),yn($,K)},reset(){let vt=new Map(E.blockers);vt.set(Ne,Sc),gt({blockers:vt})}});return}return await Wr(Me,ge,{submission:ve,pendingError:Se,preventScrollReset:Jt,replace:K&&K.replace,enableViewTransition:K&&K.unstable_viewTransition,flushSync:St})}function gi(){if(Hr(),gt({revalidation:"loading"}),E.navigation.state!=="submitting"){if(E.navigation.state==="idle"){Wr(E.historyAction,E.location,{startUninterruptedRevalidation:!0});return}Wr(I||E.historyAction,E.navigation.location,{overrideNavigation:E.navigation})}}async function Wr($,K,X){N&&N.abort(),N=null,I=$,pe=(X&&X.startUninterruptedRevalidation)===!0,so(E.location,E.matches),C=(X&&X.preventScrollReset)===!0,M=(X&&X.enableViewTransition)===!0;let le=u||a,ve=X&&X.overrideNavigation,Se=eu(le,K,f),be=(X&&X.flushSync)===!0;if(!Se){let Ne=si(404,{pathname:K.pathname}),{matches:vt,route:kt}=SI(le);io(),Rn(K,{matches:vt,loaderData:{},errors:{[kt.id]:Ne}},{flushSync:be});return}if(E.initialized&&!fe&&jU(E.location,K)&&!(X&&X.submission&&Ni(X.submission.formMethod))){Rn(K,{matches:Se},{flushSync:be});return}N=new AbortController;let ge=Vl(t.history,K,N.signal,X&&X.submission),Pe;if(X&&X.pendingError)Pe=[Yc(Se).route.id,{type:Dt.error,error:X.pendingError}];else if(X&&X.submission&&Ni(X.submission.formMethod)){let Ne=await Rr(ge,K,X.submission,Se,{replace:X.replace,flushSync:be});if(Ne.shortCircuited)return;Pe=Ne.pendingActionResult,ve=Uv(K,X.submission),be=!1,ge=Vl(t.history,ge.url,ge.signal)}let{shortCircuited:Me,loaderData:Jt,errors:St}=await pl(ge,K,Se,ve,X&&X.submission,X&&X.fetcherSubmission,X&&X.replace,X&&X.initialHydration===!0,be,Pe);Me||(N=null,Rn(K,Ut({matches:Se},II(Pe),{loaderData:Jt,errors:St})))}async function Rr($,K,X,le,ve){ve===void 0&&(ve={}),Hr();let Se=WU(K,X);gt({navigation:Se},{flushSync:ve.flushSync===!0});let be,ge=a_(le,K);if(!ge.route.action&&!ge.route.lazy)be={type:Dt.error,error:si(405,{method:$.method,pathname:K.pathname,routeId:ge.route.id})};else if(be=(await lr("action",$,[ge],le))[0],$.signal.aborted)return{shortCircuited:!0};if(Oa(be)){let Pe;return ve&&ve.replace!=null?Pe=ve.replace:Pe=_I(be.response.headers.get("Location"),new URL($.url),f)===E.location.pathname+E.location.search,await br($,be,{submission:X,replace:Pe}),{shortCircuited:!0}}if(Na(be))throw si(400,{type:"defer-action"});if(li(be)){let Pe=Yc(le,ge.route.id);return(ve&&ve.replace)!==!0&&(I=on.Push),{pendingActionResult:[Pe.route.id,be]}}return{pendingActionResult:[ge.route.id,be]}}async function pl($,K,X,le,ve,Se,be,ge,Pe,Me){let Jt=le||Uv(K,ve),St=ve||Se||bI(Jt),Ne=u||a,[vt,kt]=gI(t.history,E,X,St,K,p.v7_partialHydration&&ge===!0,p.unstable_skipActionErrorRevalidation,fe,he,de,qe,Le,Ie,Ne,f,Me);if(io(ze=>!(X&&X.some(cn=>cn.route.id===ze))||vt&&vt.some(cn=>cn.route.id===ze)),ae=++oe,vt.length===0&&kt.length===0){let ze=cs();return Rn(K,Ut({matches:X,loaderData:{},errors:Me&&li(Me[1])?{[Me[0]]:Me[1].error}:null},II(Me),ze?{fetchers:new Map(E.fetchers)}:{}),{flushSync:Pe}),{shortCircuited:!0}}if(!pe&&(!p.v7_partialHydration||!ge)){kt.forEach(cn=>{let Wt=E.fetchers.get(cn.key),Ht=Ac(void 0,Wt?Wt.data:void 0);E.fetchers.set(cn.key,Ht)});let ze;Me&&!li(Me[1])?ze={[Me[0]]:Me[1].data}:E.actionData&&(Object.keys(E.actionData).length===0?ze=null:ze=E.actionData),gt(Ut({navigation:Jt},ze!==void 0?{actionData:ze}:{},kt.length>0?{fetchers:new Map(E.fetchers)}:{}),{flushSync:Pe})}kt.forEach(ze=>{H.has(ze.key)&&cr(ze.key),ze.controller&&H.set(ze.key,ze.controller)});let zi=()=>kt.forEach(ze=>cr(ze.key));N&&N.signal.addEventListener("abort",zi);let{loaderResults:fr,fetcherResults:hr}=await eo(E.matches,X,vt,kt,$);if($.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",zi),kt.forEach(ze=>H.delete(ze.key));let bn=AI([...fr,...hr]);if(bn){if(bn.idx>=vt.length){let ze=kt[bn.idx-vt.length].key;Ie.add(ze)}return await br($,bn.result,{replace:be}),{shortCircuited:!0}}let{loaderData:Ei,errors:Xn}=EI(E,X,vt,fr,Me,kt,hr,dt);dt.forEach((ze,cn)=>{ze.subscribe(Wt=>{(Wt||ze.done)&&dt.delete(cn)})}),p.v7_partialHydration&&ge&&E.errors&&Object.entries(E.errors).filter(ze=>{let[cn]=ze;return!vt.some(Wt=>Wt.route.id===cn)}).forEach(ze=>{let[cn,Wt]=ze;Xn=Object.assign(Xn||{},{[cn]:Wt})});let Wi=cs(),Hi=fs(ae),ds=Wi||Hi||kt.length>0;return Ut({loaderData:Ei,errors:Xn},ds?{fetchers:new Map(E.fetchers)}:{})}function ml($,K,X,le){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");H.has($)&&cr($);let ve=(le&&le.unstable_flushSync)===!0,Se=u||a,be=s_(E.location,E.matches,f,p.v7_prependBasename,X,p.v7_relativeSplatPath,K,le==null?void 0:le.relative),ge=eu(Se,be,f);if(!ge){Et($,K,si(404,{pathname:be}),{flushSync:ve});return}let{path:Pe,submission:Me,error:Jt}=mI(p.v7_normalizeFormMethod,!0,be,le);if(Jt){Et($,K,Jt,{flushSync:ve});return}let St=a_(ge,Pe);if(C=(le&&le.preventScrollReset)===!0,Me&&Ni(Me.formMethod)){vi($,K,Pe,St,ge,ve,Me);return}Le.set($,{routeId:K,path:Pe}),Fn($,K,Pe,St,ge,ve,Me)}async function vi($,K,X,le,ve,Se,be){if(Hr(),Le.delete($),!le.route.action&&!le.route.lazy){let Ht=si(405,{method:be.formMethod,pathname:X,routeId:K});Et($,K,Ht,{flushSync:Se});return}let ge=E.fetchers.get($);wt($,HU(be,ge),{flushSync:Se});let Pe=new AbortController,Me=Vl(t.history,X,Pe.signal,be);H.set($,Pe);let Jt=oe,Ne=(await lr("action",Me,[le],ve))[0];if(Me.signal.aborted){H.get($)===Pe&&H.delete($);return}if(p.v7_fetcherPersist&&qe.has($)){if(Oa(Ne)||li(Ne)){wt($,So(void 0));return}}else{if(Oa(Ne))if(H.delete($),ae>Jt){wt($,So(void 0));return}else return Ie.add($),wt($,Ac(be)),br(Me,Ne,{fetcherSubmission:be});if(li(Ne)){Et($,K,Ne.error);return}}if(Na(Ne))throw si(400,{type:"defer-action"});let vt=E.navigation.location||E.location,kt=Vl(t.history,vt,Pe.signal),zi=u||a,fr=E.navigation.state!=="idle"?eu(zi,E.navigation.location,f):E.matches;Qe(fr,"Didn't find any matches after fetcher action");let hr=++oe;ye.set($,hr);let bn=Ac(be,Ne.data);E.fetchers.set($,bn);let[Ei,Xn]=gI(t.history,E,fr,be,vt,!1,p.unstable_skipActionErrorRevalidation,fe,he,de,qe,Le,Ie,zi,f,[le.route.id,Ne]);Xn.filter(Ht=>Ht.key!==$).forEach(Ht=>{let Ti=Ht.key,qi=E.fetchers.get(Ti),Kr=Ac(void 0,qi?qi.data:void 0);E.fetchers.set(Ti,Kr),H.has(Ti)&&cr(Ti),Ht.controller&&H.set(Ti,Ht.controller)}),gt({fetchers:new Map(E.fetchers)});let Wi=()=>Xn.forEach(Ht=>cr(Ht.key));Pe.signal.addEventListener("abort",Wi);let{loaderResults:Hi,fetcherResults:ds}=await eo(E.matches,fr,Ei,Xn,kt);if(Pe.signal.aborted)return;Pe.signal.removeEventListener("abort",Wi),ye.delete($),H.delete($),Xn.forEach(Ht=>H.delete(Ht.key));let ze=AI([...Hi,...ds]);if(ze){if(ze.idx>=Ei.length){let Ht=Xn[ze.idx-Ei.length].key;Ie.add(Ht)}return br(kt,ze.result)}let{loaderData:cn,errors:Wt}=EI(E,E.matches,Ei,Hi,void 0,Xn,ds,dt);if(E.fetchers.has($)){let Ht=So(Ne.data);E.fetchers.set($,Ht)}fs(hr),E.navigation.state==="loading"&&hr>ae?(Qe(I,"Expected pending action"),N&&N.abort(),Rn(E.navigation.location,{matches:fr,loaderData:cn,errors:Wt,fetchers:new Map(E.fetchers)})):(gt({errors:Wt,loaderData:TI(E.loaderData,cn,fr,Wt),fetchers:new Map(E.fetchers)}),fe=!1)}async function Fn($,K,X,le,ve,Se,be){let ge=E.fetchers.get($);wt($,Ac(be,ge?ge.data:void 0),{flushSync:Se});let Pe=new AbortController,Me=Vl(t.history,X,Pe.signal);H.set($,Pe);let Jt=oe,Ne=(await lr("loader",Me,[le],ve))[0];if(Na(Ne)&&(Ne=await lk(Ne,Me.signal,!0)||Ne),H.get($)===Pe&&H.delete($),!Me.signal.aborted){if(qe.has($)){wt($,So(void 0));return}if(Oa(Ne))if(ae>Jt){wt($,So(void 0));return}else{Ie.add($),await br(Me,Ne);return}if(li(Ne)){Et($,K,Ne.error);return}Qe(!Na(Ne),"Unhandled fetcher deferred data"),wt($,So(Ne.data))}}async function br($,K,X){let{submission:le,fetcherSubmission:ve,replace:Se}=X===void 0?{}:X;K.response.headers.has("X-Remix-Revalidate")&&(fe=!0);let be=K.response.headers.get("Location");Qe(be,"Expected a Location header on the redirect Response"),be=_I(be,new URL($.url),f);let ge=If(E.location,be,{_isRedirect:!0});if(n){let vt=!1;if(K.response.headers.has("X-Remix-Reload-Document"))vt=!0;else if(q0.test(be)){const kt=t.history.createURL(be);vt=kt.origin!==e.location.origin||Mu(kt.pathname,f)==null}if(vt){Se?e.location.replace(be):e.location.assign(be);return}}N=null;let Pe=Se===!0?on.Replace:on.Push,{formMethod:Me,formAction:Jt,formEncType:St}=E.navigation;!le&&!ve&&Me&&Jt&&St&&(le=bI(E.navigation));let Ne=le||ve;if(bU.has(K.response.status)&&Ne&&Ni(Ne.formMethod))await Wr(Pe,ge,{submission:Ut({},Ne,{formAction:be}),preventScrollReset:C});else{let vt=Uv(ge,le);await Wr(Pe,ge,{overrideNavigation:vt,fetcherSubmission:ve,preventScrollReset:C})}}async function lr($,K,X,le){try{let ve=await LU(d,$,K,X,le,s,i);return await Promise.all(ve.map((Se,be)=>{if(BU(Se)){let ge=Se.result;return{type:Dt.redirect,response:VU(ge,K,X[be].route.id,le,f,p.v7_relativeSplatPath)}}return FU(Se)}))}catch(ve){return X.map(()=>({type:Dt.error,error:ve}))}}async function eo($,K,X,le,ve){let[Se,...be]=await Promise.all([X.length?lr("loader",ve,X,K):[],...le.map(ge=>{if(ge.matches&&ge.match&&ge.controller){let Pe=Vl(t.history,ge.path,ge.controller.signal);return lr("loader",Pe,[ge.match],ge.matches).then(Me=>Me[0])}else return Promise.resolve({type:Dt.error,error:si(404,{pathname:ge.path})})})]);return await Promise.all([RI($,X,Se,Se.map(()=>ve.signal),!1,E.loaderData),RI($,le.map(ge=>ge.match),be,le.map(ge=>ge.controller?ge.controller.signal:null),!0)]),{loaderResults:Se,fetcherResults:be}}function Hr(){fe=!0,he.push(...io()),Le.forEach(($,K)=>{H.has(K)&&(de.push(K),cr(K))})}function wt($,K,X){X===void 0&&(X={}),E.fetchers.set($,K),gt({fetchers:new Map(E.fetchers)},{flushSync:(X&&X.flushSync)===!0})}function Et($,K,X,le){le===void 0&&(le={});let ve=Yc(E.matches,K);yi($),gt({errors:{[ve.route.id]:X},fetchers:new Map(E.fetchers)},{flushSync:(le&&le.flushSync)===!0})}function ur($){return p.v7_fetcherPersist&&(rt.set($,(rt.get($)||0)+1),qe.has($)&&qe.delete($)),E.fetchers.get($)||kU}function yi($){let K=E.fetchers.get($);H.has($)&&!(K&&K.state==="loading"&&ye.has($))&&cr($),Le.delete($),ye.delete($),Ie.delete($),qe.delete($),E.fetchers.delete($)}function to($){if(p.v7_fetcherPersist){let K=(rt.get($)||0)-1;K<=0?(rt.delete($),qe.add($)):rt.set($,K)}else yi($);gt({fetchers:new Map(E.fetchers)})}function cr($){let K=H.get($);Qe(K,"Expected fetch controller: "+$),K.abort(),H.delete($)}function qr($){for(let K of $){let X=ur(K),le=So(X.data);E.fetchers.set(K,le)}}function cs(){let $=[],K=!1;for(let X of Ie){let le=E.fetchers.get(X);Qe(le,"Expected fetcher: "+X),le.state==="loading"&&(Ie.delete(X),$.push(X),K=!0)}return qr($),K}function fs($){let K=[];for(let[X,le]of ye)if(le<$){let ve=E.fetchers.get(X);Qe(ve,"Expected fetcher: "+X),ve.state==="loading"&&(cr(X),ye.delete(X),K.push(X))}return qr(K),K.length>0}function hs($,K){let X=E.blockers.get($)||Sc;return _t.get($)!==K&&_t.set($,K),X}function no($){E.blockers.delete($),_t.delete($)}function $i($,K){let X=E.blockers.get($)||Sc;Qe(X.state==="unblocked"&&K.state==="blocked"||X.state==="blocked"&&K.state==="blocked"||X.state==="blocked"&&K.state==="proceeding"||X.state==="blocked"&&K.state==="unblocked"||X.state==="proceeding"&&K.state==="unblocked","Invalid blocker state transition: "+X.state+" -> "+K.state);let le=new Map(E.blockers);le.set($,K),gt({blockers:le})}function ro($){let{currentLocation:K,nextLocation:X,historyAction:le}=$;if(_t.size===0)return;_t.size>1&&Tu(!1,"A router only supports one blocker at a time");let ve=Array.from(_t.entries()),[Se,be]=ve[ve.length-1],ge=E.blockers.get(Se);if(!(ge&&ge.state==="proceeding")&&be({currentLocation:K,nextLocation:X,historyAction:le}))return Se}function io($){let K=[];return dt.forEach((X,le)=>{(!$||$(le))&&(X.cancel(),K.push(le),dt.delete(le))}),K}function gl($,K,X){if(b=$,O=K,x=X||null,!F&&E.navigation===Vv){F=!0;let le=oo(E.location,E.matches);le!=null&&gt({restoreScrollPosition:le})}return()=>{b=null,O=null,x=null}}function _i($,K){return x&&x($,K.map(le=>iU(le,E.loaderData)))||$.key}function so($,K){if(b&&O){let X=_i($,K);b[X]=O()}}function oo($,K){if(b){let X=_i($,K),le=b[X];if(typeof le=="number")return le}return null}function wi($){s={},u=i_($,i,void 0,s)}return Z={get basename(){return f},get future(){return p},get state(){return E},get routes(){return a},get window(){return e},initialize:An,subscribe:nn,enableScrollRestoration:gl,navigate:yn,fetch:ml,revalidate:gi,createHref:$=>t.history.createHref($),encodeLocation:$=>t.history.encodeLocation($),getFetcher:ur,deleteFetcher:to,dispose:Ft,getBlocker:hs,deleteBlocker:no,_internalFetchControllers:H,_internalActiveDeferreds:dt,_internalSetRoutes:wi},Z}function xU(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function s_(t,e,n,r,i,s,a,u){let f,d;if(a){f=[];for(let v of e)if(f.push(v),v.route.id===a){d=v;break}}else f=e,d=e[e.length-1];let p=z0(i||".",$0(f,s),Mu(t.pathname,n)||t.pathname,u==="path");return i==null&&(p.search=t.search,p.hash=t.hash),(i==null||i===""||i===".")&&d&&d.route.index&&!K0(p.search)&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(p.pathname=p.pathname==="/"?n:Fs([n,p.pathname])),Ya(p)}function mI(t,e,n,r){if(!r||!xU(r))return{path:n};if(r.formMethod&&!zU(r.formMethod))return{path:n,error:si(405,{method:r.formMethod})};let i=()=>({path:n,error:si(400,{type:"invalid-body"})}),s=r.formMethod||"get",a=t?s.toUpperCase():s.toLowerCase(),u=ok(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Ni(a))return i();let _=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((b,x)=>{let[O,F]=x;return""+b+O+"="+F+`
`},""):String(r.body);return{path:n,submission:{formMethod:a,formAction:u,formEncType:r.formEncType,formData:void 0,json:void 0,text:_}}}else if(r.formEncType==="application/json"){if(!Ni(a))return i();try{let _=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:a,formAction:u,formEncType:r.formEncType,formData:void 0,json:_,text:void 0}}}catch{return i()}}}Qe(typeof FormData=="function","FormData is not available in this environment");let f,d;if(r.formData)f=o_(r.formData),d=r.formData;else if(r.body instanceof FormData)f=o_(r.body),d=r.body;else if(r.body instanceof URLSearchParams)f=r.body,d=wI(f);else if(r.body==null)f=new URLSearchParams,d=new FormData;else try{f=new URLSearchParams(r.body),d=wI(f)}catch{return i()}let p={formMethod:a,formAction:u,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:d,json:void 0,text:void 0};if(Ni(p.formMethod))return{path:n,submission:p};let v=ra(n);return e&&v.search&&K0(v.search)&&f.append("index",""),v.search="?"+f,{path:Ya(v),submission:p}}function NU(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function gI(t,e,n,r,i,s,a,u,f,d,p,v,_,b,x,O){let F=O?li(O[1])?O[1].error:O[1].data:void 0,k=t.createURL(e.location),R=t.createURL(i),P=O&&li(O[1])?O[0]:void 0,z=P?NU(n,P):n,G=O?O[1].statusCode:void 0,Z=a&&G&&G>=400,E=z.filter((C,N)=>{let{route:M}=C;if(M.lazy)return!0;if(M.loader==null)return!1;if(s)return typeof M.loader!="function"||M.loader.hydrate?!0:e.loaderData[M.id]===void 0&&(!e.errors||e.errors[M.id]===void 0);if(OU(e.loaderData,e.matches[N],C)||f.some(pe=>pe===C.route.id))return!0;let U=e.matches[N],D=C;return vI(C,Ut({currentUrl:k,currentParams:U.params,nextUrl:R,nextParams:D.params},r,{actionResult:F,unstable_actionStatus:G,defaultShouldRevalidate:Z?!1:u||k.pathname+k.search===R.pathname+R.search||k.search!==R.search||sk(U,D)}))}),I=[];return v.forEach((C,N)=>{if(s||!n.some(fe=>fe.route.id===C.routeId)||p.has(N))return;let M=eu(b,C.path,x);if(!M){I.push({key:N,routeId:C.routeId,path:C.path,matches:null,match:null,controller:null});return}let U=e.fetchers.get(N),D=a_(M,C.path),pe=!1;_.has(N)?pe=!1:d.includes(N)?pe=!0:U&&U.state!=="idle"&&U.data===void 0?pe=u:pe=vI(D,Ut({currentUrl:k,currentParams:e.matches[e.matches.length-1].params,nextUrl:R,nextParams:n[n.length-1].params},r,{actionResult:F,unstable_actionStatus:G,defaultShouldRevalidate:Z?!1:u})),pe&&I.push({key:N,routeId:C.routeId,path:C.path,matches:M,match:D,controller:new AbortController})}),[E,I]}function OU(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function sk(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function vI(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function yI(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];Qe(i,"No route found in manifest");let s={};for(let a in r){let f=i[a]!==void 0&&a!=="hasErrorBoundary";Tu(!f,'Route "'+i.id+'" has a static property "'+a+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+a+'" will be ignored.')),!f&&!nU.has(a)&&(s[a]=r[a])}Object.assign(i,s),Object.assign(i,Ut({},e(i),{lazy:void 0}))}function DU(t){return Promise.all(t.matches.map(e=>e.resolve()))}async function LU(t,e,n,r,i,s,a,u){let f=r.reduce((v,_)=>v.add(_.route.id),new Set),d=new Set,p=await t({matches:i.map(v=>{let _=f.has(v.route.id);return Ut({},v,{shouldLoad:_,resolve:x=>(d.add(v.route.id),_?MU(e,n,v,s,a,x,u):Promise.resolve({type:Dt.data,result:void 0}))})}),request:n,params:i[0].params,context:u});return i.forEach(v=>Qe(d.has(v.route.id),'`match.resolve()` was not called for route id "'+v.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),p.filter((v,_)=>f.has(i[_].route.id))}async function MU(t,e,n,r,i,s,a){let u,f,d=p=>{let v,_=new Promise((O,F)=>v=F);f=()=>v(),e.signal.addEventListener("abort",f);let b=O=>typeof p!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+t+'" [routeId: '+n.route.id+"]"))):p({request:e,params:n.params,context:a},...O!==void 0?[O]:[]),x;return s?x=s(O=>b(O)):x=(async()=>{try{return{type:"data",result:await b()}}catch(O){return{type:"error",result:O}}})(),Promise.race([x,_])};try{let p=n.route[t];if(n.route.lazy)if(p){let v,[_]=await Promise.all([d(p).catch(b=>{v=b}),yI(n.route,i,r)]);if(v!==void 0)throw v;u=_}else if(await yI(n.route,i,r),p=n.route[t],p)u=await d(p);else if(t==="action"){let v=new URL(e.url),_=v.pathname+v.search;throw si(405,{method:e.method,pathname:_,routeId:n.route.id})}else return{type:Dt.data,result:void 0};else if(p)u=await d(p);else{let v=new URL(e.url),_=v.pathname+v.search;throw si(404,{pathname:_})}Qe(u.result!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(p){return{type:Dt.error,result:p}}finally{f&&e.signal.removeEventListener("abort",f)}return u}async function FU(t){let{result:e,type:n,status:r}=t;if(ak(e)){let a;try{let u=e.headers.get("Content-Type");u&&/\bapplication\/json\b/.test(u)?e.body==null?a=null:a=await e.json():a=await e.text()}catch(u){return{type:Dt.error,error:u}}return n===Dt.error?{type:Dt.error,error:new W0(e.status,e.statusText,a),statusCode:e.status,headers:e.headers}:{type:Dt.data,data:a,statusCode:e.status,headers:e.headers}}if(n===Dt.error)return{type:Dt.error,error:e,statusCode:H0(e)?e.status:r};if($U(e)){var i,s;return{type:Dt.deferred,deferredData:e,statusCode:(i=e.init)==null?void 0:i.status,headers:((s=e.init)==null?void 0:s.headers)&&new Headers(e.init.headers)}}return{type:Dt.data,data:e,statusCode:r}}function VU(t,e,n,r,i,s){let a=t.headers.get("Location");if(Qe(a,"Redirects returned/thrown from loaders/actions must have a Location header"),!q0.test(a)){let u=r.slice(0,r.findIndex(f=>f.route.id===n)+1);a=s_(new URL(e.url),u,i,!0,a,s),t.headers.set("Location",a)}return t}function _I(t,e,n){if(q0.test(t)){let r=t,i=r.startsWith("//")?new URL(e.protocol+r):new URL(r),s=Mu(i.pathname,n)!=null;if(i.origin===e.origin&&s)return i.pathname+i.search+i.hash}return t}function Vl(t,e,n,r){let i=t.createURL(ok(e)).toString(),s={signal:n};if(r&&Ni(r.formMethod)){let{formMethod:a,formEncType:u}=r;s.method=a.toUpperCase(),u==="application/json"?(s.headers=new Headers({"Content-Type":u}),s.body=JSON.stringify(r.json)):u==="text/plain"?s.body=r.text:u==="application/x-www-form-urlencoded"&&r.formData?s.body=o_(r.formData):s.body=r.formData}return new Request(i,s)}function o_(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function wI(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function UU(t,e,n,r,i,s){let a={},u=null,f,d=!1,p={},v=r&&li(r[1])?r[1].error:void 0;return n.forEach((_,b)=>{let x=e[b].route.id;if(Qe(!Oa(_),"Cannot handle redirect results in processLoaderData"),li(_)){let O=_.error;v!==void 0&&(O=v,v=void 0),u=u||{};{let F=Yc(t,x);u[F.route.id]==null&&(u[F.route.id]=O)}a[x]=void 0,d||(d=!0,f=H0(_.error)?_.error.status:500),_.headers&&(p[x]=_.headers)}else Na(_)?(i.set(x,_.deferredData),a[x]=_.deferredData.data,_.statusCode!=null&&_.statusCode!==200&&!d&&(f=_.statusCode),_.headers&&(p[x]=_.headers)):(a[x]=_.data,_.statusCode&&_.statusCode!==200&&!d&&(f=_.statusCode),_.headers&&(p[x]=_.headers))}),v!==void 0&&r&&(u={[r[0]]:v},a[r[0]]=void 0),{loaderData:a,errors:u,statusCode:f||200,loaderHeaders:p}}function EI(t,e,n,r,i,s,a,u){let{loaderData:f,errors:d}=UU(e,n,r,i,u);for(let p=0;p<s.length;p++){let{key:v,match:_,controller:b}=s[p];Qe(a!==void 0&&a[p]!==void 0,"Did not find corresponding fetcher result");let x=a[p];if(!(b&&b.signal.aborted))if(li(x)){let O=Yc(t.matches,_==null?void 0:_.route.id);d&&d[O.route.id]||(d=Ut({},d,{[O.route.id]:x.error})),t.fetchers.delete(v)}else if(Oa(x))Qe(!1,"Unhandled fetcher revalidation redirect");else if(Na(x))Qe(!1,"Unhandled fetcher deferred data");else{let O=So(x.data);t.fetchers.set(v,O)}}return{loaderData:f,errors:d}}function TI(t,e,n,r){let i=Ut({},e);for(let s of n){let a=s.route.id;if(e.hasOwnProperty(a)?e[a]!==void 0&&(i[a]=e[a]):t[a]!==void 0&&s.route.loader&&(i[a]=t[a]),r&&r.hasOwnProperty(a))break}return i}function II(t){return t?li(t[1])?{actionData:{}}:{actionData:{[t[0]]:t[1].data}}:{}}function Yc(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function SI(t){let e=t.length===1?t[0]:t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function si(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,a="Unknown Server Error",u="Unknown @remix-run/router error";return t===400?(a="Bad Request",i&&n&&r?u="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?u="defer() is not supported in actions":s==="invalid-body"&&(u="Unable to encode submission body")):t===403?(a="Forbidden",u='Route "'+r+'" does not match URL "'+n+'"'):t===404?(a="Not Found",u='No route matches URL "'+n+'"'):t===405&&(a="Method Not Allowed",i&&n&&r?u="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(u='Invalid request method "'+i.toUpperCase()+'"')),new W0(t||500,a,new Error(u),!0)}function AI(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(Oa(n))return{result:n,idx:e}}}function ok(t){let e=typeof t=="string"?ra(t):t;return Ya(Ut({},e,{hash:""}))}function jU(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function BU(t){return ak(t.result)&&RU.has(t.result.status)}function Na(t){return t.type===Dt.deferred}function li(t){return t.type===Dt.error}function Oa(t){return(t&&t.type)===Dt.redirect}function $U(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function ak(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function zU(t){return AU.has(t.toLowerCase())}function Ni(t){return IU.has(t.toLowerCase())}async function RI(t,e,n,r,i,s){for(let a=0;a<n.length;a++){let u=n[a],f=e[a];if(!f)continue;let d=t.find(v=>v.route.id===f.route.id),p=d!=null&&!sk(d,f)&&(s&&s[f.route.id])!==void 0;if(Na(u)&&(i||p)){let v=r[a];Qe(v,"Expected an AbortSignal for revalidating fetcher deferred result"),await lk(u,v,i).then(_=>{_&&(n[a]=_||n[a])})}}}async function lk(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:Dt.data,data:t.deferredData.unwrappedData}}catch(i){return{type:Dt.error,error:i}}return{type:Dt.data,data:t.deferredData.data}}}function K0(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function a_(t,e){let n=typeof e=="string"?ra(e).search:e.search;if(t[t.length-1].route.index&&K0(n||""))return t[t.length-1];let r=nk(t);return r[r.length-1]}function bI(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:a}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(a!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:a,text:void 0}}}function Uv(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function WU(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ac(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function HU(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0}}function So(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function qU(t,e){try{let n=t.sessionStorage.getItem(ik);if(n){let r=JSON.parse(n);for(let[i,s]of Object.entries(r||{}))s&&Array.isArray(s)&&e.set(i,new Set(s||[]))}}catch{}}function KU(t,e){if(e.size>0){let n={};for(let[r,i]of e)n[r]=[...i];try{t.sessionStorage.setItem(ik,JSON.stringify(n))}catch(r){Tu(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bp(){return Bp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bp.apply(this,arguments)}const Pm=re.createContext(null),uk=re.createContext(null),ul=re.createContext(null),G0=re.createContext(null),cl=re.createContext({outlet:null,matches:[],isDataRoute:!1}),ck=re.createContext(null);function GU(t,e){let{relative:n}=e===void 0?{}:e;Kf()||Qe(!1);let{basename:r,navigator:i}=re.useContext(ul),{hash:s,pathname:a,search:u}=hk(t,{relative:n}),f=a;return r!=="/"&&(f=a==="/"?r:Fs([r,a])),i.createHref({pathname:f,search:u,hash:s})}function Kf(){return re.useContext(G0)!=null}function xm(){return Kf()||Qe(!1),re.useContext(G0).location}function fk(t){re.useContext(ul).static||re.useLayoutEffect(t)}function Nm(){let{isDataRoute:t}=re.useContext(cl);return t?o3():YU()}function YU(){Kf()||Qe(!1);let t=re.useContext(Pm),{basename:e,future:n,navigator:r}=re.useContext(ul),{matches:i}=re.useContext(cl),{pathname:s}=xm(),a=JSON.stringify($0(i,n.v7_relativeSplatPath)),u=re.useRef(!1);return fk(()=>{u.current=!0}),re.useCallback(function(d,p){if(p===void 0&&(p={}),!u.current)return;if(typeof d=="number"){r.go(d);return}let v=z0(d,JSON.parse(a),s,p.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Fs([e,v.pathname])),(p.replace?r.replace:r.push)(v,p.state,p)},[e,r,a,s,t])}function hk(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=re.useContext(ul),{matches:i}=re.useContext(cl),{pathname:s}=xm(),a=JSON.stringify($0(i,r.v7_relativeSplatPath));return re.useMemo(()=>z0(t,JSON.parse(a),s,n==="path"),[t,a,s,n])}function QU(t,e,n,r){Kf()||Qe(!1);let{navigator:i}=re.useContext(ul),{matches:s}=re.useContext(cl),a=s[s.length-1],u=a?a.params:{};a&&a.pathname;let f=a?a.pathnameBase:"/";a&&a.route;let d=xm(),p;p=d;let v=p.pathname||"/",_=v;if(f!=="/"){let O=f.replace(/^\//,"").split("/");_="/"+v.replace(/^\//,"").split("/").slice(O.length).join("/")}let b=eu(t,{pathname:_});return t3(b&&b.map(O=>Object.assign({},O,{params:Object.assign({},u,O.params),pathname:Fs([f,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?f:Fs([f,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,n,r)}function XU(){let t=s3(),e=H0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),n?re.createElement("pre",{style:i},n):null,null)}const JU=re.createElement(XU,null);class ZU extends re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?re.createElement(cl.Provider,{value:this.props.routeContext},re.createElement(ck.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function e3(t){let{routeContext:e,match:n,children:r}=t,i=re.useContext(Pm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),re.createElement(cl.Provider,{value:e},r)}function t3(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let a=t,u=(i=n)==null?void 0:i.errors;if(u!=null){let p=a.findIndex(v=>v.route.id&&(u==null?void 0:u[v.route.id])!==void 0);p>=0||Qe(!1),a=a.slice(0,Math.min(a.length,p+1))}let f=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<a.length;p++){let v=a[p];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(d=p),v.route.id){let{loaderData:_,errors:b}=n,x=v.route.loader&&_[v.route.id]===void 0&&(!b||b[v.route.id]===void 0);if(v.route.lazy||x){f=!0,d>=0?a=a.slice(0,d+1):a=[a[0]];break}}}return a.reduceRight((p,v,_)=>{let b,x=!1,O=null,F=null;n&&(b=u&&v.route.id?u[v.route.id]:void 0,O=v.route.errorElement||JU,f&&(d<0&&_===0?(a3("route-fallback"),x=!0,F=null):d===_&&(x=!0,F=v.route.hydrateFallbackElement||null)));let k=e.concat(a.slice(0,_+1)),R=()=>{let P;return b?P=O:x?P=F:v.route.Component?P=re.createElement(v.route.Component,null):v.route.element?P=v.route.element:P=p,re.createElement(e3,{match:v,routeContext:{outlet:p,matches:k,isDataRoute:n!=null},children:P})};return n&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?re.createElement(ZU,{location:n.location,revalidation:n.revalidation,component:O,error:b,children:R(),routeContext:{outlet:null,matches:k,isDataRoute:!0}}):R()},null)}var dk=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(dk||{}),$p=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}($p||{});function n3(t){let e=re.useContext(Pm);return e||Qe(!1),e}function r3(t){let e=re.useContext(uk);return e||Qe(!1),e}function i3(t){let e=re.useContext(cl);return e||Qe(!1),e}function pk(t){let e=i3(),n=e.matches[e.matches.length-1];return n.route.id||Qe(!1),n.route.id}function s3(){var t;let e=re.useContext(ck),n=r3($p.UseRouteError),r=pk($p.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function o3(){let{router:t}=n3(dk.UseNavigateStable),e=pk($p.UseNavigateStable),n=re.useRef(!1);return fk(()=>{n.current=!0}),re.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bp({fromRouteId:e},s)))},[t,e])}const kI={};function a3(t,e,n){kI[t]||(kI[t]=!0)}function l3(t){let{basename:e="/",children:n=null,location:r,navigationType:i=on.Pop,navigator:s,static:a=!1,future:u}=t;Kf()&&Qe(!1);let f=e.replace(/^\/*/,"/"),d=re.useMemo(()=>({basename:f,navigator:s,static:a,future:Bp({v7_relativeSplatPath:!1},u)}),[f,u,s,a]);typeof r=="string"&&(r=ra(r));let{pathname:p="/",search:v="",hash:_="",state:b=null,key:x="default"}=r,O=re.useMemo(()=>{let F=Mu(p,f);return F==null?null:{location:{pathname:F,search:v,hash:_,state:b,key:x},navigationType:i}},[f,p,v,_,b,x,i]);return O==null?null:re.createElement(ul.Provider,{value:d},re.createElement(G0.Provider,{children:n,value:O}))}new Promise(()=>{});function u3(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:re.createElement(t.Component),Component:void 0}),t.HydrateFallback&&Object.assign(e,{hydrateFallbackElement:re.createElement(t.HydrateFallback),HydrateFallback:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:re.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Sf(){return Sf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Sf.apply(this,arguments)}function c3(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function f3(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function h3(t,e){return t.button===0&&(!e||e==="_self")&&!f3(t)}const d3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],p3="6";try{window.__reactRouterVersion=p3}catch{}function m3(t,e){return PU({basename:void 0,future:Sf({},void 0,{v7_prependBasename:!0}),history:ZV({window:void 0}),hydrationData:g3(),routes:t,mapRouteProperties:u3,unstable_dataStrategy:void 0,window:void 0}).initialize()}function g3(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Sf({},e,{errors:v3(e.errors)})),e}function v3(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new W0(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let a=new s(i.message);a.stack="",n[r]=a}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const y3=re.createContext({isTransitioning:!1}),_3=re.createContext(new Map),w3="startTransition",CI=j4[w3],E3="flushSync",PI=JV[E3];function T3(t){CI?CI(t):t()}function Rc(t){PI?PI(t):t()}let I3=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",e(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}};function S3(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=re.useState(n.state),[a,u]=re.useState(),[f,d]=re.useState({isTransitioning:!1}),[p,v]=re.useState(),[_,b]=re.useState(),[x,O]=re.useState(),F=re.useRef(new Map),{v7_startTransition:k}=r||{},R=re.useCallback(E=>{k?T3(E):E()},[k]),P=re.useCallback((E,I)=>{let{deletedFetchers:C,unstable_flushSync:N,unstable_viewTransitionOpts:M}=I;C.forEach(D=>F.current.delete(D)),E.fetchers.forEach((D,pe)=>{D.data!==void 0&&F.current.set(pe,D.data)});let U=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!M||U){N?Rc(()=>s(E)):R(()=>s(E));return}if(N){Rc(()=>{_&&(p&&p.resolve(),_.skipTransition()),d({isTransitioning:!0,flushSync:!0,currentLocation:M.currentLocation,nextLocation:M.nextLocation})});let D=n.window.document.startViewTransition(()=>{Rc(()=>s(E))});D.finished.finally(()=>{Rc(()=>{v(void 0),b(void 0),u(void 0),d({isTransitioning:!1})})}),Rc(()=>b(D));return}_?(p&&p.resolve(),_.skipTransition(),O({state:E,currentLocation:M.currentLocation,nextLocation:M.nextLocation})):(u(E),d({isTransitioning:!0,flushSync:!1,currentLocation:M.currentLocation,nextLocation:M.nextLocation}))},[n.window,_,p,F,R]);re.useLayoutEffect(()=>n.subscribe(P),[n,P]),re.useEffect(()=>{f.isTransitioning&&!f.flushSync&&v(new I3)},[f]),re.useEffect(()=>{if(p&&a&&n.window){let E=a,I=p.promise,C=n.window.document.startViewTransition(async()=>{R(()=>s(E)),await I});C.finished.finally(()=>{v(void 0),b(void 0),u(void 0),d({isTransitioning:!1})}),b(C)}},[R,a,p,n.window]),re.useEffect(()=>{p&&a&&i.location.key===a.location.key&&p.resolve()},[p,_,i.location,a]),re.useEffect(()=>{!f.isTransitioning&&x&&(u(x.state),d({isTransitioning:!0,flushSync:!1,currentLocation:x.currentLocation,nextLocation:x.nextLocation}),O(void 0))},[f.isTransitioning,x]),re.useEffect(()=>{},[]);let z=re.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:E=>n.navigate(E),push:(E,I,C)=>n.navigate(E,{state:I,preventScrollReset:C==null?void 0:C.preventScrollReset}),replace:(E,I,C)=>n.navigate(E,{replace:!0,state:I,preventScrollReset:C==null?void 0:C.preventScrollReset})}),[n]),G=n.basename||"/",Z=re.useMemo(()=>({router:n,navigator:z,static:!1,basename:G}),[n,z,G]);return re.createElement(re.Fragment,null,re.createElement(Pm.Provider,{value:Z},re.createElement(uk.Provider,{value:i},re.createElement(_3.Provider,{value:F.current},re.createElement(y3.Provider,{value:f},re.createElement(l3,{basename:G,location:i.location,navigationType:i.historyAction,navigator:z,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},i.initialized||n.future.v7_partialHydration?re.createElement(A3,{routes:n.routes,future:n.future,state:i}):e))))),null)}function A3(t){let{routes:e,future:n,state:r}=t;return QU(e,void 0,r,n)}const R3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",b3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xI=re.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:u,target:f,to:d,preventScrollReset:p,unstable_viewTransition:v}=e,_=c3(e,d3),{basename:b}=re.useContext(ul),x,O=!1;if(typeof d=="string"&&b3.test(d)&&(x=d,R3))try{let P=new URL(window.location.href),z=d.startsWith("//")?new URL(P.protocol+d):new URL(d),G=Mu(z.pathname,b);z.origin===P.origin&&G!=null?d=G+z.search+z.hash:O=!0}catch{}let F=GU(d,{relative:i}),k=k3(d,{replace:a,state:u,target:f,preventScrollReset:p,relative:i,unstable_viewTransition:v});function R(P){r&&r(P),P.defaultPrevented||k(P)}return re.createElement("a",Sf({},_,{href:x||F,onClick:O||s?r:R,ref:n,target:f}))});var NI;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(NI||(NI={}));var OI;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(OI||(OI={}));function k3(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:u}=e===void 0?{}:e,f=Nm(),d=xm(),p=hk(t,{relative:a});return re.useCallback(v=>{if(h3(v,n)){v.preventDefault();let _=r!==void 0?r:Ya(d)===Ya(p);f(t,{replace:_,state:i,preventScrollReset:s,relative:a,unstable_viewTransition:u})}},[d,f,p,r,i,n,t,s,a,u])}var DI={};/**
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
 */const mk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},C3=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],u=t[n++],f=((i&7)<<18|(s&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},gk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,u=a?t[i+1]:0,f=i+2<t.length,d=f?t[i+2]:0,p=s>>2,v=(s&3)<<4|u>>4;let _=(u&15)<<2|d>>6,b=d&63;f||(b=64,a||(_=64)),r.push(n[p],n[v],n[_],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mk(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):C3(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const v=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||u==null||d==null||v==null)throw new P3;const _=s<<2|u>>4;if(r.push(_),d!==64){const b=u<<4&240|d>>2;if(r.push(b),v!==64){const x=d<<6&192|v;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class P3 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x3=function(t){const e=mk(t);return gk.encodeByteArray(e,!0)},zp=function(t){return x3(t).replace(/\./g,"")},vk=function(t){try{return gk.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function N3(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const O3=()=>N3().__FIREBASE_DEFAULTS__,D3=()=>{if(typeof process>"u"||typeof DI>"u")return;const t=DI.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L3=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vk(t[1]);return e&&JSON.parse(e)},Om=()=>{try{return O3()||D3()||L3()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},yk=t=>{var e,n;return(n=(e=Om())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_k=t=>{const e=yk(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wk=()=>{var t;return(t=Om())===null||t===void 0?void 0:t.config},Ek=t=>{var e;return(e=Om())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class M3{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Tk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[zp(JSON.stringify(n)),zp(JSON.stringify(a)),""].join(".")}/**
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
 */function Mn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function F3(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mn())}function V3(){var t;const e=(t=Om())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ik(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function U3(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j3(){const t=Mn();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function B3(){return!V3()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Y0(){try{return typeof indexedDB=="object"}catch{return!1}}function Q0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Sk(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const $3="FirebaseError";class mi extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$3,Object.setPrototypeOf(this,mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ia.prototype.create)}}class ia{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?z3(s,r):"Error",u=`${this.serviceName}: ${a} (${i}).`;return new mi(i,u,r)}}function z3(t,e){return t.replace(W3,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const W3=/\{\$([^}]+)}/g;function H3(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Af(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(LI(s)&&LI(a)){if(!Af(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function LI(t){return t!==null&&typeof t=="object"}/**
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
 */function Gf(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Oc(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Dc(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function q3(t,e){const n=new K3(t,e);return n.subscribe.bind(n)}class K3{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");G3(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jv),i.error===void 0&&(i.error=jv),i.complete===void 0&&(i.complete=jv);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function G3(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jv(){}/**
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
 */const Y3=1e3,Q3=2,X3=4*60*60*1e3,J3=.5;function MI(t,e=Y3,n=Q3){const r=e*Math.pow(n,t),i=Math.round(J3*r*(Math.random()-.5)*2);return Math.min(X3,r+i)}/**
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
 */function bt(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ba="[DEFAULT]";/**
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
 */class Z3{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new M3;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(t5(e))try{this.getOrInitializeService({instanceIdentifier:ba})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ba){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ba){return this.instances.has(e)}getOptions(e=ba){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:e5(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ba){return this.component?this.component.multipleInstances?e:ba:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function e5(t){return t===ba?void 0:t}function t5(t){return t.instantiationMode==="EAGER"}/**
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
 */class n5{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Z3(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var nt;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(nt||(nt={}));const r5={debug:nt.DEBUG,verbose:nt.VERBOSE,info:nt.INFO,warn:nt.WARN,error:nt.ERROR,silent:nt.SILENT},i5=nt.INFO,s5={[nt.DEBUG]:"log",[nt.VERBOSE]:"log",[nt.INFO]:"info",[nt.WARN]:"warn",[nt.ERROR]:"error"},o5=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=s5[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Dm{constructor(e){this.name=e,this._logLevel=i5,this._logHandler=o5,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in nt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?r5[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,nt.DEBUG,...e),this._logHandler(this,nt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,nt.VERBOSE,...e),this._logHandler(this,nt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,nt.INFO,...e),this._logHandler(this,nt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,nt.WARN,...e),this._logHandler(this,nt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,nt.ERROR,...e),this._logHandler(this,nt.ERROR,...e)}}const a5=(t,e)=>e.some(n=>t instanceof n);let FI,VI;function l5(){return FI||(FI=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u5(){return VI||(VI=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ak=new WeakMap,l_=new WeakMap,Rk=new WeakMap,Bv=new WeakMap,X0=new WeakMap;function c5(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Vs(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Ak.set(n,t)}).catch(()=>{}),X0.set(e,t),e}function f5(t){if(l_.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});l_.set(t,e)}let u_={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return l_.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Rk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Vs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function h5(t){u_=t(u_)}function d5(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($v(this),e,...n);return Rk.set(r,e.sort?e.sort():[e]),Vs(r)}:u5().includes(t)?function(...e){return t.apply($v(this),e),Vs(Ak.get(this))}:function(...e){return Vs(t.apply($v(this),e))}}function p5(t){return typeof t=="function"?d5(t):(t instanceof IDBTransaction&&f5(t),a5(t,l5())?new Proxy(t,u_):t)}function Vs(t){if(t instanceof IDBRequest)return c5(t);if(Bv.has(t))return Bv.get(t);const e=p5(t);return e!==t&&(Bv.set(t,e),X0.set(e,t)),e}const $v=t=>X0.get(t);function Lm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),u=Vs(a);return r&&a.addEventListener("upgradeneeded",f=>{r(Vs(a.result),f.oldVersion,f.newVersion,Vs(a.transaction),f)}),n&&a.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),u.then(f=>{s&&f.addEventListener("close",()=>s()),i&&f.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}function zv(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),Vs(n).then(()=>{})}const m5=["get","getKey","getAll","getAllKeys","count"],g5=["put","add","delete","clear"],Wv=new Map;function UI(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wv.get(e))return Wv.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=g5.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||m5.includes(n)))return;const s=async function(a,...u){const f=this.transaction(a,i?"readwrite":"readonly");let d=f.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[n](...u),i&&f.done]))[0]};return Wv.set(e,s),s}h5(t=>({...t,get:(e,n,r)=>UI(e,n)||t.get(e,n,r),has:(e,n)=>!!UI(e,n)||t.has(e,n)}));/**
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
 */class v5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(y5(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function y5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const c_="@firebase/app",jI="0.10.3";/**
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
 */const Qa=new Dm("@firebase/app"),_5="@firebase/app-compat",w5="@firebase/analytics-compat",E5="@firebase/analytics",T5="@firebase/app-check-compat",I5="@firebase/app-check",S5="@firebase/auth",A5="@firebase/auth-compat",R5="@firebase/database",b5="@firebase/database-compat",k5="@firebase/functions",C5="@firebase/functions-compat",P5="@firebase/installations",x5="@firebase/installations-compat",N5="@firebase/messaging",O5="@firebase/messaging-compat",D5="@firebase/performance",L5="@firebase/performance-compat",M5="@firebase/remote-config",F5="@firebase/remote-config-compat",V5="@firebase/storage",U5="@firebase/storage-compat",j5="@firebase/firestore",B5="@firebase/vertexai-preview",$5="@firebase/firestore-compat",z5="firebase",W5="10.12.0";/**
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
 */const f_="[DEFAULT]",H5={[c_]:"fire-core",[_5]:"fire-core-compat",[E5]:"fire-analytics",[w5]:"fire-analytics-compat",[I5]:"fire-app-check",[T5]:"fire-app-check-compat",[S5]:"fire-auth",[A5]:"fire-auth-compat",[R5]:"fire-rtdb",[b5]:"fire-rtdb-compat",[k5]:"fire-fn",[C5]:"fire-fn-compat",[P5]:"fire-iid",[x5]:"fire-iid-compat",[N5]:"fire-fcm",[O5]:"fire-fcm-compat",[D5]:"fire-perf",[L5]:"fire-perf-compat",[M5]:"fire-rc",[F5]:"fire-rc-compat",[V5]:"fire-gcs",[U5]:"fire-gcs-compat",[j5]:"fire-fst",[$5]:"fire-fst-compat",[B5]:"fire-vertex","fire-js":"fire-js",[z5]:"fire-js-all"};/**
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
 */const Wp=new Map,q5=new Map,h_=new Map;function BI(t,e){try{t.container.addComponent(e)}catch(n){Qa.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(h_.has(e))return Qa.debug(`There were multiple attempts to register component ${e}.`),!1;h_.set(e,t);for(const n of Wp.values())BI(n,t);for(const n of q5.values())BI(n,t);return!0}function Xs(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Di(t){return t.settings!==void 0}/**
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
 */const K5={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zo=new ia("app","Firebase",K5);/**
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
 */class G5{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zo.create("app-deleted",{appName:this._name})}}/**
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
 */const fl=W5;function bk(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:f_,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw zo.create("bad-app-name",{appName:String(i)});if(n||(n=wk()),!n)throw zo.create("no-options");const s=Wp.get(i);if(s){if(Af(n,s.options)&&Af(r,s.config))return s;throw zo.create("duplicate-app",{appName:i})}const a=new n5(i);for(const f of h_.values())a.addComponent(f);const u=new G5(n,r,a);return Wp.set(i,u),u}function Yf(t=f_){const e=Wp.get(t);if(!e&&t===f_&&wk())return bk();if(!e)throw zo.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let i=(r=H5[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qa.warn(u.join(" "));return}jr(new Ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Y5="firebase-heartbeat-database",Q5=1,Rf="firebase-heartbeat-store";let Hv=null;function kk(){return Hv||(Hv=Lm(Y5,Q5,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Rf)}catch(n){console.warn(n)}}}}).catch(t=>{throw zo.create("idb-open",{originalErrorMessage:t.message})})),Hv}async function X5(t){try{const n=(await kk()).transaction(Rf),r=await n.objectStore(Rf).get(Ck(t));return await n.done,r}catch(e){if(e instanceof mi)Qa.warn(e.message);else{const n=zo.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qa.warn(n.message)}}}async function $I(t,e){try{const r=(await kk()).transaction(Rf,"readwrite");await r.objectStore(Rf).put(e,Ck(t)),await r.done}catch(n){if(n instanceof mi)Qa.warn(n.message);else{const r=zo.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qa.warn(r.message)}}}function Ck(t){return`${t.name}!${t.options.appId}`}/**
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
 */const J5=1024,Z5=30*24*60*60*1e3;class e6{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new n6(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=zI();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Z5}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zI(),{heartbeatsToSend:r,unsentEntries:i}=t6(this._heartbeatsCache.heartbeats),s=zp(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zI(){return new Date().toISOString().substring(0,10)}function t6(t,e=J5){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),WI(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),WI(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class n6{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Y0()?Q0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await X5(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $I(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $I(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function WI(t){return zp(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function r6(t){jr(new Ar("platform-logger",e=>new v5(e),"PRIVATE")),jr(new Ar("heartbeat",e=>new e6(e),"PRIVATE")),Gn(c_,jI,t),Gn(c_,jI,"esm2017"),Gn("fire-js","")}r6("");const Pk="@firebase/installations",J0="0.6.7";/**
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
 */const xk=1e4,Nk=`w:${J0}`,Ok="FIS_v2",i6="https://firebaseinstallations.googleapis.com/v1",s6=60*60*1e3,o6="installations",a6="Installations";/**
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
 */const l6={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Xa=new ia(o6,a6,l6);function Dk(t){return t instanceof mi&&t.code.includes("request-failed")}/**
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
 */function Lk({projectId:t}){return`${i6}/projects/${t}/installations`}function Mk(t){return{token:t.token,requestStatus:2,expiresIn:c6(t.expiresIn),creationTime:Date.now()}}async function Fk(t,e){const r=(await e.json()).error;return Xa.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Vk({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function u6(t,{refreshToken:e}){const n=Vk(t);return n.append("Authorization",f6(e)),n}async function Uk(t){const e=await t();return e.status>=500&&e.status<600?t():e}function c6(t){return Number(t.replace("s","000"))}function f6(t){return`${Ok} ${t}`}/**
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
 */async function h6({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Lk(t),i=Vk(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={fid:n,authVersion:Ok,appId:t.appId,sdkVersion:Nk},u={method:"POST",headers:i,body:JSON.stringify(a)},f=await Uk(()=>fetch(r,u));if(f.ok){const d=await f.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Mk(d.authToken)}}else throw await Fk("Create Installation",f)}/**
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
 */function jk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function d6(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const p6=/^[cdef][\w-]{21}$/,d_="";function m6(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=g6(t);return p6.test(n)?n:d_}catch{return d_}}function g6(t){return d6(t).substr(0,22)}/**
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
 */function Mm(t){return`${t.appName}!${t.appId}`}/**
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
 */const Bk=new Map;function $k(t,e){const n=Mm(t);zk(n,e),v6(n,e)}function zk(t,e){const n=Bk.get(t);if(n)for(const r of n)r(e)}function v6(t,e){const n=y6();n&&n.postMessage({key:t,fid:e}),_6()}let Da=null;function y6(){return!Da&&"BroadcastChannel"in self&&(Da=new BroadcastChannel("[Firebase] FID Change"),Da.onmessage=t=>{zk(t.data.key,t.data.fid)}),Da}function _6(){Bk.size===0&&Da&&(Da.close(),Da=null)}/**
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
 */const w6="firebase-installations-database",E6=1,Ja="firebase-installations-store";let qv=null;function Z0(){return qv||(qv=Lm(w6,E6,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ja)}}})),qv}async function Hp(t,e){const n=Mm(t),i=(await Z0()).transaction(Ja,"readwrite"),s=i.objectStore(Ja),a=await s.get(n);return await s.put(e,n),await i.done,(!a||a.fid!==e.fid)&&$k(t,e.fid),e}async function Wk(t){const e=Mm(t),r=(await Z0()).transaction(Ja,"readwrite");await r.objectStore(Ja).delete(e),await r.done}async function Fm(t,e){const n=Mm(t),i=(await Z0()).transaction(Ja,"readwrite"),s=i.objectStore(Ja),a=await s.get(n),u=e(a);return u===void 0?await s.delete(n):await s.put(u,n),await i.done,u&&(!a||a.fid!==u.fid)&&$k(t,u.fid),u}/**
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
 */async function ew(t){let e;const n=await Fm(t.appConfig,r=>{const i=T6(r),s=I6(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===d_?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function T6(t){const e=t||{fid:m6(),registrationStatus:0};return Hk(e)}function I6(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Xa.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=S6(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:A6(t)}:{installationEntry:e}}async function S6(t,e){try{const n=await h6(t,e);return Hp(t.appConfig,n)}catch(n){throw Dk(n)&&n.customData.serverCode===409?await Wk(t.appConfig):await Hp(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function A6(t){let e=await HI(t.appConfig);for(;e.registrationStatus===1;)await jk(100),e=await HI(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ew(t);return r||n}return e}function HI(t){return Fm(t,e=>{if(!e)throw Xa.create("installation-not-found");return Hk(e)})}function Hk(t){return R6(t)?{fid:t.fid,registrationStatus:0}:t}function R6(t){return t.registrationStatus===1&&t.registrationTime+xk<Date.now()}/**
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
 */async function b6({appConfig:t,heartbeatServiceProvider:e},n){const r=k6(t,n),i=u6(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const a={installation:{sdkVersion:Nk,appId:t.appId}},u={method:"POST",headers:i,body:JSON.stringify(a)},f=await Uk(()=>fetch(r,u));if(f.ok){const d=await f.json();return Mk(d)}else throw await Fk("Generate Auth Token",f)}function k6(t,{fid:e}){return`${Lk(t)}/${e}/authTokens:generate`}/**
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
 */async function tw(t,e=!1){let n;const r=await Fm(t.appConfig,s=>{if(!qk(s))throw Xa.create("not-registered");const a=s.authToken;if(!e&&x6(a))return s;if(a.requestStatus===1)return n=C6(t,e),s;{if(!navigator.onLine)throw Xa.create("app-offline");const u=O6(s);return n=P6(t,u),u}});return n?await n:r.authToken}async function C6(t,e){let n=await qI(t.appConfig);for(;n.authToken.requestStatus===1;)await jk(100),n=await qI(t.appConfig);const r=n.authToken;return r.requestStatus===0?tw(t,e):r}function qI(t){return Fm(t,e=>{if(!qk(e))throw Xa.create("not-registered");const n=e.authToken;return D6(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function P6(t,e){try{const n=await b6(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Hp(t.appConfig,r),n}catch(n){if(Dk(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Wk(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Hp(t.appConfig,r)}throw n}}function qk(t){return t!==void 0&&t.registrationStatus===2}function x6(t){return t.requestStatus===2&&!N6(t)}function N6(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+s6}function O6(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function D6(t){return t.requestStatus===1&&t.requestTime+xk<Date.now()}/**
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
 */async function L6(t){const e=t,{installationEntry:n,registrationPromise:r}=await ew(e);return r?r.catch(console.error):tw(e).catch(console.error),n.fid}/**
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
 */async function M6(t,e=!1){const n=t;return await F6(n),(await tw(n,e)).token}async function F6(t){const{registrationPromise:e}=await ew(t);e&&await e}/**
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
 */function V6(t){if(!t||!t.options)throw Kv("App Configuration");if(!t.name)throw Kv("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Kv(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Kv(t){return Xa.create("missing-app-config-values",{valueName:t})}/**
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
 */const Kk="installations",U6="installations-internal",j6=t=>{const e=t.getProvider("app").getImmediate(),n=V6(e),r=Xs(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},B6=t=>{const e=t.getProvider("app").getImmediate(),n=Xs(e,Kk).getImmediate();return{getId:()=>L6(n),getToken:i=>M6(n,i)}};function $6(){jr(new Ar(Kk,j6,"PUBLIC")),jr(new Ar(U6,B6,"PRIVATE"))}$6();Gn(Pk,J0);Gn(Pk,J0,"esm2017");/**
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
 */const qp="analytics",z6="firebase_id",W6="origin",H6=60*1e3,q6="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",nw="https://www.googletagmanager.com/gtag/js";/**
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
 */const Sr=new Dm("@firebase/analytics");/**
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
 */const K6={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Fr=new ia("analytics","Analytics",K6);/**
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
 */function G6(t){if(!t.startsWith(nw)){const e=Fr.create("invalid-gtag-resource",{gtagURL:t});return Sr.warn(e.message),""}return t}function Gk(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Y6(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Q6(t,e){const n=Y6("firebase-js-sdk-policy",{createScriptURL:G6}),r=document.createElement("script"),i=`${nw}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function X6(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function J6(t,e,n,r,i,s){const a=r[i];try{if(a)await e[a];else{const f=(await Gk(n)).find(d=>d.measurementId===i);f&&await e[f.appId]}}catch(u){Sr.error(u)}t("config",i,s)}async function Z6(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let a=i.send_to;Array.isArray(a)||(a=[a]);const u=await Gk(n);for(const f of a){const d=u.find(v=>v.measurementId===f),p=d&&e[d.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Sr.error(s)}}function e9(t,e,n,r){async function i(s,...a){try{if(s==="event"){const[u,f]=a;await Z6(t,e,n,u,f)}else if(s==="config"){const[u,f]=a;await J6(t,e,n,r,u,f)}else if(s==="consent"){const[u]=a;t("consent","update",u)}else if(s==="get"){const[u,f,d]=a;t("get",u,f,d)}else if(s==="set"){const[u]=a;t("set",u)}else t(s,...a)}catch(u){Sr.error(u)}}return i}function t9(t,e,n,r,i){let s=function(...a){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=e9(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function n9(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(nw)&&n.src.includes(t))return n;return null}/**
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
 */const r9=30,i9=1e3;class s9{constructor(e={},n=i9){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Yk=new s9;function o9(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function a9(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:o9(r)},s=q6.replace("{app-id}",n),a=await fetch(s,i);if(a.status!==200&&a.status!==304){let u="";try{const f=await a.json();!((e=f.error)===null||e===void 0)&&e.message&&(u=f.error.message)}catch{}throw Fr.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function l9(t,e=Yk,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Fr.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Fr.create("no-api-key")}const a=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new f9;return setTimeout(async()=>{u.abort()},H6),Qk({appId:r,apiKey:i,measurementId:s},a,u,e)}async function Qk(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Yk){var s;const{appId:a,measurementId:u}=t;try{await u9(r,e)}catch(f){if(u)return Sr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${f==null?void 0:f.message}]`),{appId:a,measurementId:u};throw f}try{const f=await a9(t);return i.deleteThrottleMetadata(a),f}catch(f){const d=f;if(!c9(d)){if(i.deleteThrottleMetadata(a),u)return Sr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:u};throw f}const p=Number((s=d==null?void 0:d.customData)===null||s===void 0?void 0:s.httpStatus)===503?MI(n,i.intervalMillis,r9):MI(n,i.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(a,v),Sr.debug(`Calling attemptFetch again in ${p} millis`),Qk(t,v,r,i)}}function u9(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Fr.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function c9(t){if(!(t instanceof mi)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class f9{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function h9(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,a=Object.assign(Object.assign({},r),{send_to:s});t("event",n,a)}}/**
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
 */async function d9(){if(Y0())try{await Q0()}catch(t){return Sr.warn(Fr.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return Sr.warn(Fr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function p9(t,e,n,r,i,s,a){var u;const f=l9(t);f.then(b=>{n[b.measurementId]=b.appId,t.options.measurementId&&b.measurementId!==t.options.measurementId&&Sr.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>Sr.error(b)),e.push(f);const d=d9().then(b=>{if(b)return r.getId()}),[p,v]=await Promise.all([f,d]);n9(s)||Q6(s,p.measurementId),i("js",new Date);const _=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return _[W6]="firebase",_.update=!0,v!=null&&(_[z6]=v),i("config",p.measurementId,_),p.measurementId}/**
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
 */class m9{constructor(e){this.app=e}_delete(){return delete Qc[this.app.options.appId],Promise.resolve()}}let Qc={},KI=[];const GI={};let Gv="dataLayer",g9="gtag",YI,Xk,QI=!1;function v9(){const t=[];if(Ik()&&t.push("This is a browser extension environment."),Sk()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Fr.create("invalid-analytics-context",{errorInfo:e});Sr.warn(n.message)}}function y9(t,e,n){v9();const r=t.options.appId;if(!r)throw Fr.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)Sr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Fr.create("no-api-key");if(Qc[r]!=null)throw Fr.create("already-exists",{id:r});if(!QI){X6(Gv);const{wrappedGtag:s,gtagCore:a}=t9(Qc,KI,GI,Gv,g9);Xk=s,YI=a,QI=!0}return Qc[r]=p9(t,KI,GI,e,YI,Gv,n),new m9(t)}function _9(t=Yf()){t=bt(t);const e=Xs(t,qp);return e.isInitialized()?e.getImmediate():w9(t)}function w9(t,e={}){const n=Xs(t,qp);if(n.isInitialized()){const i=n.getImmediate();if(Af(e,n.getOptions()))return i;throw Fr.create("already-initialized")}return n.initialize({options:e})}function E9(t,e,n,r){t=bt(t),h9(Xk,Qc[t.app.options.appId],e,n,r).catch(i=>Sr.error(i))}const XI="@firebase/analytics",JI="0.10.3";function T9(){jr(new Ar(qp,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return y9(r,i,n)},"PUBLIC")),jr(new Ar("analytics-internal",t,"PRIVATE")),Gn(XI,JI),Gn(XI,JI,"esm2017");function t(e){try{const n=e.getProvider(qp).getImmediate();return{logEvent:(r,i,s)=>E9(n,r,i,s)}}catch(n){throw Fr.create("interop-component-reg-failed",{reason:n})}}}T9();var I9="firebase",S9="10.12.0";/**
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
 */Gn(I9,S9,"app");var ZI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ba,Jk;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,I){function C(){}C.prototype=I.prototype,E.D=I.prototype,E.prototype=new C,E.prototype.constructor=E,E.C=function(N,M,U){for(var D=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)D[pe-2]=arguments[pe];return I.prototype[M].apply(N,D)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,I,C){C||(C=0);var N=Array(16);if(typeof I=="string")for(var M=0;16>M;++M)N[M]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(M=0;16>M;++M)N[M]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=E.g[0],C=E.g[1],M=E.g[2];var U=E.g[3],D=I+(U^C&(M^U))+N[0]+3614090360&4294967295;I=C+(D<<7&4294967295|D>>>25),D=U+(M^I&(C^M))+N[1]+3905402710&4294967295,U=I+(D<<12&4294967295|D>>>20),D=M+(C^U&(I^C))+N[2]+606105819&4294967295,M=U+(D<<17&4294967295|D>>>15),D=C+(I^M&(U^I))+N[3]+3250441966&4294967295,C=M+(D<<22&4294967295|D>>>10),D=I+(U^C&(M^U))+N[4]+4118548399&4294967295,I=C+(D<<7&4294967295|D>>>25),D=U+(M^I&(C^M))+N[5]+1200080426&4294967295,U=I+(D<<12&4294967295|D>>>20),D=M+(C^U&(I^C))+N[6]+2821735955&4294967295,M=U+(D<<17&4294967295|D>>>15),D=C+(I^M&(U^I))+N[7]+4249261313&4294967295,C=M+(D<<22&4294967295|D>>>10),D=I+(U^C&(M^U))+N[8]+1770035416&4294967295,I=C+(D<<7&4294967295|D>>>25),D=U+(M^I&(C^M))+N[9]+2336552879&4294967295,U=I+(D<<12&4294967295|D>>>20),D=M+(C^U&(I^C))+N[10]+4294925233&4294967295,M=U+(D<<17&4294967295|D>>>15),D=C+(I^M&(U^I))+N[11]+2304563134&4294967295,C=M+(D<<22&4294967295|D>>>10),D=I+(U^C&(M^U))+N[12]+1804603682&4294967295,I=C+(D<<7&4294967295|D>>>25),D=U+(M^I&(C^M))+N[13]+4254626195&4294967295,U=I+(D<<12&4294967295|D>>>20),D=M+(C^U&(I^C))+N[14]+2792965006&4294967295,M=U+(D<<17&4294967295|D>>>15),D=C+(I^M&(U^I))+N[15]+1236535329&4294967295,C=M+(D<<22&4294967295|D>>>10),D=I+(M^U&(C^M))+N[1]+4129170786&4294967295,I=C+(D<<5&4294967295|D>>>27),D=U+(C^M&(I^C))+N[6]+3225465664&4294967295,U=I+(D<<9&4294967295|D>>>23),D=M+(I^C&(U^I))+N[11]+643717713&4294967295,M=U+(D<<14&4294967295|D>>>18),D=C+(U^I&(M^U))+N[0]+3921069994&4294967295,C=M+(D<<20&4294967295|D>>>12),D=I+(M^U&(C^M))+N[5]+3593408605&4294967295,I=C+(D<<5&4294967295|D>>>27),D=U+(C^M&(I^C))+N[10]+38016083&4294967295,U=I+(D<<9&4294967295|D>>>23),D=M+(I^C&(U^I))+N[15]+3634488961&4294967295,M=U+(D<<14&4294967295|D>>>18),D=C+(U^I&(M^U))+N[4]+3889429448&4294967295,C=M+(D<<20&4294967295|D>>>12),D=I+(M^U&(C^M))+N[9]+568446438&4294967295,I=C+(D<<5&4294967295|D>>>27),D=U+(C^M&(I^C))+N[14]+3275163606&4294967295,U=I+(D<<9&4294967295|D>>>23),D=M+(I^C&(U^I))+N[3]+4107603335&4294967295,M=U+(D<<14&4294967295|D>>>18),D=C+(U^I&(M^U))+N[8]+1163531501&4294967295,C=M+(D<<20&4294967295|D>>>12),D=I+(M^U&(C^M))+N[13]+2850285829&4294967295,I=C+(D<<5&4294967295|D>>>27),D=U+(C^M&(I^C))+N[2]+4243563512&4294967295,U=I+(D<<9&4294967295|D>>>23),D=M+(I^C&(U^I))+N[7]+1735328473&4294967295,M=U+(D<<14&4294967295|D>>>18),D=C+(U^I&(M^U))+N[12]+2368359562&4294967295,C=M+(D<<20&4294967295|D>>>12),D=I+(C^M^U)+N[5]+4294588738&4294967295,I=C+(D<<4&4294967295|D>>>28),D=U+(I^C^M)+N[8]+2272392833&4294967295,U=I+(D<<11&4294967295|D>>>21),D=M+(U^I^C)+N[11]+1839030562&4294967295,M=U+(D<<16&4294967295|D>>>16),D=C+(M^U^I)+N[14]+4259657740&4294967295,C=M+(D<<23&4294967295|D>>>9),D=I+(C^M^U)+N[1]+2763975236&4294967295,I=C+(D<<4&4294967295|D>>>28),D=U+(I^C^M)+N[4]+1272893353&4294967295,U=I+(D<<11&4294967295|D>>>21),D=M+(U^I^C)+N[7]+4139469664&4294967295,M=U+(D<<16&4294967295|D>>>16),D=C+(M^U^I)+N[10]+3200236656&4294967295,C=M+(D<<23&4294967295|D>>>9),D=I+(C^M^U)+N[13]+681279174&4294967295,I=C+(D<<4&4294967295|D>>>28),D=U+(I^C^M)+N[0]+3936430074&4294967295,U=I+(D<<11&4294967295|D>>>21),D=M+(U^I^C)+N[3]+3572445317&4294967295,M=U+(D<<16&4294967295|D>>>16),D=C+(M^U^I)+N[6]+76029189&4294967295,C=M+(D<<23&4294967295|D>>>9),D=I+(C^M^U)+N[9]+3654602809&4294967295,I=C+(D<<4&4294967295|D>>>28),D=U+(I^C^M)+N[12]+3873151461&4294967295,U=I+(D<<11&4294967295|D>>>21),D=M+(U^I^C)+N[15]+530742520&4294967295,M=U+(D<<16&4294967295|D>>>16),D=C+(M^U^I)+N[2]+3299628645&4294967295,C=M+(D<<23&4294967295|D>>>9),D=I+(M^(C|~U))+N[0]+4096336452&4294967295,I=C+(D<<6&4294967295|D>>>26),D=U+(C^(I|~M))+N[7]+1126891415&4294967295,U=I+(D<<10&4294967295|D>>>22),D=M+(I^(U|~C))+N[14]+2878612391&4294967295,M=U+(D<<15&4294967295|D>>>17),D=C+(U^(M|~I))+N[5]+4237533241&4294967295,C=M+(D<<21&4294967295|D>>>11),D=I+(M^(C|~U))+N[12]+1700485571&4294967295,I=C+(D<<6&4294967295|D>>>26),D=U+(C^(I|~M))+N[3]+2399980690&4294967295,U=I+(D<<10&4294967295|D>>>22),D=M+(I^(U|~C))+N[10]+4293915773&4294967295,M=U+(D<<15&4294967295|D>>>17),D=C+(U^(M|~I))+N[1]+2240044497&4294967295,C=M+(D<<21&4294967295|D>>>11),D=I+(M^(C|~U))+N[8]+1873313359&4294967295,I=C+(D<<6&4294967295|D>>>26),D=U+(C^(I|~M))+N[15]+4264355552&4294967295,U=I+(D<<10&4294967295|D>>>22),D=M+(I^(U|~C))+N[6]+2734768916&4294967295,M=U+(D<<15&4294967295|D>>>17),D=C+(U^(M|~I))+N[13]+1309151649&4294967295,C=M+(D<<21&4294967295|D>>>11),D=I+(M^(C|~U))+N[4]+4149444226&4294967295,I=C+(D<<6&4294967295|D>>>26),D=U+(C^(I|~M))+N[11]+3174756917&4294967295,U=I+(D<<10&4294967295|D>>>22),D=M+(I^(U|~C))+N[2]+718787259&4294967295,M=U+(D<<15&4294967295|D>>>17),D=C+(U^(M|~I))+N[9]+3951481745&4294967295,E.g[0]=E.g[0]+I&4294967295,E.g[1]=E.g[1]+(M+(D<<21&4294967295|D>>>11))&4294967295,E.g[2]=E.g[2]+M&4294967295,E.g[3]=E.g[3]+U&4294967295}r.prototype.u=function(E,I){I===void 0&&(I=E.length);for(var C=I-this.blockSize,N=this.B,M=this.h,U=0;U<I;){if(M==0)for(;U<=C;)i(this,E,U),U+=this.blockSize;if(typeof E=="string"){for(;U<I;)if(N[M++]=E.charCodeAt(U++),M==this.blockSize){i(this,N),M=0;break}}else for(;U<I;)if(N[M++]=E[U++],M==this.blockSize){i(this,N),M=0;break}}this.h=M,this.o+=I},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var I=1;I<E.length-8;++I)E[I]=0;var C=8*this.o;for(I=E.length-8;I<E.length;++I)E[I]=C&255,C/=256;for(this.u(E),E=Array(16),I=C=0;4>I;++I)for(var N=0;32>N;N+=8)E[C++]=this.g[I]>>>N&255;return E};function s(E,I){var C=u;return Object.prototype.hasOwnProperty.call(C,E)?C[E]:C[E]=I(E)}function a(E,I){this.h=I;for(var C=[],N=!0,M=E.length-1;0<=M;M--){var U=E[M]|0;N&&U==I||(C[M]=U,N=!1)}this.g=C}var u={};function f(E){return-128<=E&&128>E?s(E,function(I){return new a([I|0],0>I?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return F(d(-E));for(var I=[],C=1,N=0;E>=C;N++)I[N]=E/C|0,C*=4294967296;return new a(I,0)}function p(E,I){if(E.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(E.charAt(0)=="-")return F(p(E.substring(1),I));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=d(Math.pow(I,8)),N=v,M=0;M<E.length;M+=8){var U=Math.min(8,E.length-M),D=parseInt(E.substring(M,M+U),I);8>U?(U=d(Math.pow(I,U)),N=N.j(U).add(d(D))):(N=N.j(C),N=N.add(d(D)))}return N}var v=f(0),_=f(1),b=f(16777216);t=a.prototype,t.m=function(){if(O(this))return-F(this).m();for(var E=0,I=1,C=0;C<this.g.length;C++){var N=this.i(C);E+=(0<=N?N:4294967296+N)*I,I*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(x(this))return"0";if(O(this))return"-"+F(this).toString(E);for(var I=d(Math.pow(E,6)),C=this,N="";;){var M=z(C,I).g;C=k(C,M.j(I));var U=((0<C.g.length?C.g[0]:C.h)>>>0).toString(E);if(C=M,x(C))return U+N;for(;6>U.length;)U="0"+U;N=U+N}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function x(E){if(E.h!=0)return!1;for(var I=0;I<E.g.length;I++)if(E.g[I]!=0)return!1;return!0}function O(E){return E.h==-1}t.l=function(E){return E=k(this,E),O(E)?-1:x(E)?0:1};function F(E){for(var I=E.g.length,C=[],N=0;N<I;N++)C[N]=~E.g[N];return new a(C,~E.h).add(_)}t.abs=function(){return O(this)?F(this):this},t.add=function(E){for(var I=Math.max(this.g.length,E.g.length),C=[],N=0,M=0;M<=I;M++){var U=N+(this.i(M)&65535)+(E.i(M)&65535),D=(U>>>16)+(this.i(M)>>>16)+(E.i(M)>>>16);N=D>>>16,U&=65535,D&=65535,C[M]=D<<16|U}return new a(C,C[C.length-1]&-2147483648?-1:0)};function k(E,I){return E.add(F(I))}t.j=function(E){if(x(this)||x(E))return v;if(O(this))return O(E)?F(this).j(F(E)):F(F(this).j(E));if(O(E))return F(this.j(F(E)));if(0>this.l(b)&&0>E.l(b))return d(this.m()*E.m());for(var I=this.g.length+E.g.length,C=[],N=0;N<2*I;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var M=0;M<E.g.length;M++){var U=this.i(N)>>>16,D=this.i(N)&65535,pe=E.i(M)>>>16,fe=E.i(M)&65535;C[2*N+2*M]+=D*fe,R(C,2*N+2*M),C[2*N+2*M+1]+=U*fe,R(C,2*N+2*M+1),C[2*N+2*M+1]+=D*pe,R(C,2*N+2*M+1),C[2*N+2*M+2]+=U*pe,R(C,2*N+2*M+2)}for(N=0;N<I;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=I;N<2*I;N++)C[N]=0;return new a(C,0)};function R(E,I){for(;(E[I]&65535)!=E[I];)E[I+1]+=E[I]>>>16,E[I]&=65535,I++}function P(E,I){this.g=E,this.h=I}function z(E,I){if(x(I))throw Error("division by zero");if(x(E))return new P(v,v);if(O(E))return I=z(F(E),I),new P(F(I.g),F(I.h));if(O(I))return I=z(E,F(I)),new P(F(I.g),I.h);if(30<E.g.length){if(O(E)||O(I))throw Error("slowDivide_ only works with positive integers.");for(var C=_,N=I;0>=N.l(E);)C=G(C),N=G(N);var M=Z(C,1),U=Z(N,1);for(N=Z(N,2),C=Z(C,2);!x(N);){var D=U.add(N);0>=D.l(E)&&(M=M.add(C),U=D),N=Z(N,1),C=Z(C,1)}return I=k(E,M.j(I)),new P(M,I)}for(M=v;0<=E.l(I);){for(C=Math.max(1,Math.floor(E.m()/I.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),U=d(C),D=U.j(I);O(D)||0<D.l(E);)C-=N,U=d(C),D=U.j(I);x(U)&&(U=_),M=M.add(U),E=k(E,D)}return new P(M,E)}t.A=function(E){return z(this,E).h},t.and=function(E){for(var I=Math.max(this.g.length,E.g.length),C=[],N=0;N<I;N++)C[N]=this.i(N)&E.i(N);return new a(C,this.h&E.h)},t.or=function(E){for(var I=Math.max(this.g.length,E.g.length),C=[],N=0;N<I;N++)C[N]=this.i(N)|E.i(N);return new a(C,this.h|E.h)},t.xor=function(E){for(var I=Math.max(this.g.length,E.g.length),C=[],N=0;N<I;N++)C[N]=this.i(N)^E.i(N);return new a(C,this.h^E.h)};function G(E){for(var I=E.g.length+1,C=[],N=0;N<I;N++)C[N]=E.i(N)<<1|E.i(N-1)>>>31;return new a(C,E.h)}function Z(E,I){var C=I>>5;I%=32;for(var N=E.g.length-C,M=[],U=0;U<N;U++)M[U]=0<I?E.i(U+C)>>>I|E.i(U+C+1)<<32-I:E.i(U+C);return new a(M,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Jk=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Ba=a}).apply(typeof ZI<"u"?ZI:typeof self<"u"?self:typeof window<"u"?window:{});var xd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zk,eC,Lc,tC,op,p_,nC,rC,iC;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,m,y){return c==Array.prototype||c==Object.prototype||(c[m]=y.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof xd=="object"&&xd];for(var m=0;m<c.length;++m){var y=c[m];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var r=n(this);function i(c,m){if(m)e:{var y=r;c=c.split(".");for(var S=0;S<c.length-1;S++){var q=c[S];if(!(q in y))break e;y=y[q]}c=c[c.length-1],S=y[c],m=m(S),m!=S&&m!=null&&e(y,c,{configurable:!0,writable:!0,value:m})}}function s(c,m){c instanceof String&&(c+="");var y=0,S=!1,q={next:function(){if(!S&&y<c.length){var Q=y++;return{value:m(Q,c[Q]),done:!1}}return S=!0,{done:!0,value:void 0}}};return q[Symbol.iterator]=function(){return q},q}i("Array.prototype.values",function(c){return c||function(){return s(this,function(m,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function f(c){var m=typeof c;return m=m!="object"?m:c?Array.isArray(c)?"array":m:"null",m=="array"||m=="object"&&typeof c.length=="number"}function d(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function p(c,m,y){return c.call.apply(c.bind,arguments)}function v(c,m,y){if(!c)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var q=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(q,S),c.apply(m,q)}}return function(){return c.apply(m,arguments)}}function _(c,m,y){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,_.apply(null,arguments)}function b(c,m){var y=Array.prototype.slice.call(arguments,1);return function(){var S=y.slice();return S.push.apply(S,arguments),c.apply(this,S)}}function x(c,m){function y(){}y.prototype=m.prototype,c.aa=m.prototype,c.prototype=new y,c.prototype.constructor=c,c.Qb=function(S,q,Q){for(var ce=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)ce[lt-2]=arguments[lt];return m.prototype[q].apply(S,ce)}}function O(c){const m=c.length;if(0<m){const y=Array(m);for(let S=0;S<m;S++)y[S]=c[S];return y}return[]}function F(c,m){for(let y=1;y<arguments.length;y++){const S=arguments[y];if(f(S)){const q=c.length||0,Q=S.length||0;c.length=q+Q;for(let ce=0;ce<Q;ce++)c[q+ce]=S[ce]}else c.push(S)}}class k{constructor(m,y){this.i=m,this.j=y,this.h=0,this.g=null}get(){let m;return 0<this.h?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function R(c){return/^[\s\xa0]*$/.test(c)}function P(){var c=u.navigator;return c&&(c=c.userAgent)?c:""}function z(c){return z[" "](c),c}z[" "]=function(){};var G=P().indexOf("Gecko")!=-1&&!(P().toLowerCase().indexOf("webkit")!=-1&&P().indexOf("Edge")==-1)&&!(P().indexOf("Trident")!=-1||P().indexOf("MSIE")!=-1)&&P().indexOf("Edge")==-1;function Z(c,m,y){for(const S in c)m.call(y,c[S],S,c)}function E(c,m){for(const y in c)m.call(void 0,c[y],y,c)}function I(c){const m={};for(const y in c)m[y]=c[y];return m}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(c,m){let y,S;for(let q=1;q<arguments.length;q++){S=arguments[q];for(y in S)c[y]=S[y];for(let Q=0;Q<C.length;Q++)y=C[Q],Object.prototype.hasOwnProperty.call(S,y)&&(c[y]=S[y])}}function M(c){var m=1;c=c.split(":");const y=[];for(;0<m&&c.length;)y.push(c.shift()),m--;return c.length&&y.push(c.join(":")),y}function U(c){u.setTimeout(()=>{throw c},0)}function D(){var c=oe;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class pe{constructor(){this.h=this.g=null}add(m,y){const S=fe.get();S.set(m,y),this.h?this.h.next=S:this.g=S,this.h=S}}var fe=new k(()=>new he,c=>c.reset());class he{constructor(){this.next=this.g=this.h=null}set(m,y){this.h=m,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let de,H=!1,oe=new pe,ae=()=>{const c=u.Promise.resolve(void 0);de=()=>{c.then(ye)}};var ye=()=>{for(var c;c=D();){try{c.h.call(c.g)}catch(y){U(y)}var m=fe;m.j(c),100>m.h&&(m.h++,c.next=m.g,m.g=c)}H=!1};function Ie(){this.s=this.s,this.C=this.C}Ie.prototype.s=!1,Ie.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ie.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var rt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const y=()=>{};u.addEventListener("test",y,m),u.removeEventListener("test",y,m)}catch{}return c}();function qe(c,m){if(Le.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var y=this.type=c.type,S=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget){if(G){e:{try{z(m.nodeName);var q=!0;break e}catch{}q=!1}q||(m=null)}}else y=="mouseover"?m=c.fromElement:y=="mouseout"&&(m=c.toElement);this.relatedTarget=m,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:dt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&qe.aa.h.call(this)}}x(qe,Le);var dt={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var _t="closure_listenable_"+(1e6*Math.random()|0),Sn=0;function An(c,m,y,S,q){this.listener=c,this.proxy=null,this.src=m,this.type=y,this.capture=!!S,this.ha=q,this.key=++Sn,this.da=this.fa=!1}function Ft(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function nn(c){this.src=c,this.g={},this.h=0}nn.prototype.add=function(c,m,y,S,q){var Q=c.toString();c=this.g[Q],c||(c=this.g[Q]=[],this.h++);var ce=Rn(c,m,S,q);return-1<ce?(m=c[ce],y||(m.fa=!1)):(m=new An(m,this.src,Q,!!S,q),m.fa=y,c.push(m)),m};function gt(c,m){var y=m.type;if(y in c.g){var S=c.g[y],q=Array.prototype.indexOf.call(S,m,void 0),Q;(Q=0<=q)&&Array.prototype.splice.call(S,q,1),Q&&(Ft(m),c.g[y].length==0&&(delete c.g[y],c.h--))}}function Rn(c,m,y,S){for(var q=0;q<c.length;++q){var Q=c[q];if(!Q.da&&Q.listener==m&&Q.capture==!!y&&Q.ha==S)return q}return-1}var yn="closure_lm_"+(1e6*Math.random()|0),gi={};function Wr(c,m,y,S,q){if(Array.isArray(m)){for(var Q=0;Q<m.length;Q++)Wr(c,m[Q],y,S,q);return null}return y=Hr(y),c&&c[_t]?c.K(m,y,d(S)?!!S.capture:!!S,q):Rr(c,m,y,!1,S,q)}function Rr(c,m,y,S,q,Q){if(!m)throw Error("Invalid event type");var ce=d(q)?!!q.capture:!!q,lt=lr(c);if(lt||(c[yn]=lt=new nn(c)),y=lt.add(m,y,S,ce,Q),y.proxy)return y;if(S=pl(),y.proxy=S,S.src=c,S.listener=y,c.addEventListener)rt||(q=ce),q===void 0&&(q=!1),c.addEventListener(m.toString(),S,q);else if(c.attachEvent)c.attachEvent(Fn(m.toString()),S);else if(c.addListener&&c.removeListener)c.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return y}function pl(){function c(y){return m.call(c.src,c.listener,y)}const m=br;return c}function ml(c,m,y,S,q){if(Array.isArray(m))for(var Q=0;Q<m.length;Q++)ml(c,m[Q],y,S,q);else S=d(S)?!!S.capture:!!S,y=Hr(y),c&&c[_t]?(c=c.i,m=String(m).toString(),m in c.g&&(Q=c.g[m],y=Rn(Q,y,S,q),-1<y&&(Ft(Q[y]),Array.prototype.splice.call(Q,y,1),Q.length==0&&(delete c.g[m],c.h--)))):c&&(c=lr(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Rn(m,y,S,q)),(y=-1<c?m[c]:null)&&vi(y))}function vi(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[_t])gt(m.i,c);else{var y=c.type,S=c.proxy;m.removeEventListener?m.removeEventListener(y,S,c.capture):m.detachEvent?m.detachEvent(Fn(y),S):m.addListener&&m.removeListener&&m.removeListener(S),(y=lr(m))?(gt(y,c),y.h==0&&(y.src=null,m[yn]=null)):Ft(c)}}}function Fn(c){return c in gi?gi[c]:gi[c]="on"+c}function br(c,m){if(c.da)c=!0;else{m=new qe(m,this);var y=c.listener,S=c.ha||c.src;c.fa&&vi(c),c=y.call(S,m)}return c}function lr(c){return c=c[yn],c instanceof nn?c:null}var eo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hr(c){return typeof c=="function"?c:(c[eo]||(c[eo]=function(m){return c.handleEvent(m)}),c[eo])}function wt(){Ie.call(this),this.i=new nn(this),this.M=this,this.F=null}x(wt,Ie),wt.prototype[_t]=!0,wt.prototype.removeEventListener=function(c,m,y,S){ml(this,c,m,y,S)};function Et(c,m){var y,S=c.F;if(S)for(y=[];S;S=S.F)y.push(S);if(c=c.M,S=m.type||m,typeof m=="string")m=new Le(m,c);else if(m instanceof Le)m.target=m.target||c;else{var q=m;m=new Le(S,c),N(m,q)}if(q=!0,y)for(var Q=y.length-1;0<=Q;Q--){var ce=m.g=y[Q];q=ur(ce,S,!0,m)&&q}if(ce=m.g=c,q=ur(ce,S,!0,m)&&q,q=ur(ce,S,!1,m)&&q,y)for(Q=0;Q<y.length;Q++)ce=m.g=y[Q],q=ur(ce,S,!1,m)&&q}wt.prototype.N=function(){if(wt.aa.N.call(this),this.i){var c=this.i,m;for(m in c.g){for(var y=c.g[m],S=0;S<y.length;S++)Ft(y[S]);delete c.g[m],c.h--}}this.F=null},wt.prototype.K=function(c,m,y,S){return this.i.add(String(c),m,!1,y,S)},wt.prototype.L=function(c,m,y,S){return this.i.add(String(c),m,!0,y,S)};function ur(c,m,y,S){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();for(var q=!0,Q=0;Q<m.length;++Q){var ce=m[Q];if(ce&&!ce.da&&ce.capture==y){var lt=ce.listener,fn=ce.ha||ce.src;ce.fa&&gt(c.i,ce),q=lt.call(fn,S)!==!1&&q}}return q&&!S.defaultPrevented}function yi(c,m,y){if(typeof c=="function")y&&(c=_(c,y));else if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(m)?-1:u.setTimeout(c,m||0)}function to(c){c.g=yi(()=>{c.g=null,c.i&&(c.i=!1,to(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class cr extends Ie{constructor(m,y){super(),this.m=m,this.l=y,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:to(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qr(c){Ie.call(this),this.h=c,this.g={}}x(qr,Ie);var cs=[];function fs(c){Z(c.g,function(m,y){this.g.hasOwnProperty(y)&&vi(m)},c),c.g={}}qr.prototype.N=function(){qr.aa.N.call(this),fs(this)},qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hs=u.JSON.stringify,no=u.JSON.parse,$i=class{stringify(c){return u.JSON.stringify(c,void 0)}parse(c){return u.JSON.parse(c,void 0)}};function ro(){}ro.prototype.h=null;function io(c){return c.h||(c.h=c.i())}function gl(){}var _i={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function so(){Le.call(this,"d")}x(so,Le);function oo(){Le.call(this,"c")}x(oo,Le);var wi={},$=null;function K(){return $=$||new wt}wi.La="serverreachability";function X(c){Le.call(this,wi.La,c)}x(X,Le);function le(c){const m=K();Et(m,new X(m))}wi.STAT_EVENT="statevent";function ve(c,m){Le.call(this,wi.STAT_EVENT,c),this.stat=m}x(ve,Le);function Se(c){const m=K();Et(m,new ve(m,c))}wi.Ma="timingevent";function be(c,m){Le.call(this,wi.Ma,c),this.size=m}x(be,Le);function ge(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){c()},m)}function Pe(){this.g=!0}Pe.prototype.xa=function(){this.g=!1};function Me(c,m,y,S,q,Q){c.info(function(){if(c.g)if(Q)for(var ce="",lt=Q.split("&"),fn=0;fn<lt.length;fn++){var et=lt[fn].split("=");if(1<et.length){var ft=et[0];et=et[1];var rn=ft.split("_");ce=2<=rn.length&&rn[1]=="type"?ce+(ft+"="+et+"&"):ce+(ft+"=redacted&")}}else ce=null;else ce=Q;return"XMLHTTP REQ ("+S+") [attempt "+q+"]: "+m+`
`+y+`
`+ce})}function Jt(c,m,y,S,q,Q,ce){c.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+q+"]: "+m+`
`+y+`
`+Q+" "+ce})}function St(c,m,y,S){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+vt(c,y)+(S?" "+S:"")})}function Ne(c,m){c.info(function(){return"TIMEOUT: "+m})}Pe.prototype.info=function(){};function vt(c,m){if(!c.g)return m;if(!m)return null;try{var y=JSON.parse(m);if(y){for(c=0;c<y.length;c++)if(Array.isArray(y[c])){var S=y[c];if(!(2>S.length)){var q=S[1];if(Array.isArray(q)&&!(1>q.length)){var Q=q[0];if(Q!="noop"&&Q!="stop"&&Q!="close")for(var ce=1;ce<q.length;ce++)q[ce]=""}}}}return hs(y)}catch{return m}}var kt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fr;function hr(){}x(hr,ro),hr.prototype.g=function(){return new XMLHttpRequest},hr.prototype.i=function(){return{}},fr=new hr;function bn(c,m,y,S){this.j=c,this.i=m,this.l=y,this.R=S||1,this.U=new qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ei}function Ei(){this.i=null,this.g="",this.h=!1}var Xn={},Wi={};function Hi(c,m,y){c.L=1,c.v=lo(Gr(m)),c.m=y,c.P=!0,ds(c,null)}function ds(c,m){c.F=Date.now(),Wt(c),c.A=Gr(c.v);var y=c.A,S=c.R;Array.isArray(S)||(S=[String(S)]),Gu(y.i,"t",S),c.C=0,y=c.j.J,c.h=new Ei,c.g=Ch(c.j,y?m:null,!c.m),0<c.O&&(c.M=new cr(_(c.Y,c,c.g),c.O)),m=c.U,y=c.g,S=c.ca;var q="readystatechange";Array.isArray(q)||(q&&(cs[0]=q.toString()),q=cs);for(var Q=0;Q<q.length;Q++){var ce=Wr(y,q[Q],S||m.handleEvent,!1,m.h||m);if(!ce)break;m.g[ce.key]=ce}m=c.H?I(c.H):{},c.m?(c.u||(c.u="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,m)):(c.u="GET",c.g.ea(c.A,c.u,null,m)),le(),Me(c.i,c.u,c.A,c.l,c.R,c.m)}bn.prototype.ca=function(c){c=c.target;const m=this.M;m&&kn(c)==3?m.j():this.Y(c)},bn.prototype.Y=function(c){try{if(c==this.g)e:{const rn=kn(this.g);var m=this.g.Ba();const Jr=this.g.Z();if(!(3>rn)&&(rn!=3||this.g&&(this.h.h||this.g.oa()||Xu(this.g)))){this.J||rn!=4||m==7||(m==8||0>=Jr?le(3):le(2)),Ti(this);var y=this.g.Z();this.X=y;t:if(ze(this)){var S=Xu(this.g);c="";var q=S.length,Q=kn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kr(this),qi(this);var ce="";break t}this.h.i=new u.TextDecoder}for(m=0;m<q;m++)this.h.h=!0,c+=this.h.i.decode(S[m],{stream:!(Q&&m==q-1)});S.length=0,this.h.g+=c,this.C=0,ce=this.h.g}else ce=this.g.oa();if(this.o=y==200,Jt(this.i,this.u,this.A,this.l,this.R,rn,y),this.o){if(this.T&&!this.K){t:{if(this.g){var lt,fn=this.g;if((lt=fn.g?fn.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(lt)){var et=lt;break t}}et=null}if(y=et)St(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vl(this,y);else{this.o=!1,this.s=3,Se(12),Kr(this),qi(this);break e}}if(this.P){y=!0;let dr;for(;!this.J&&this.C<ce.length;)if(dr=cn(this,ce),dr==Wi){rn==4&&(this.s=4,Se(14),y=!1),St(this.i,this.l,null,"[Incomplete Response]");break}else if(dr==Xn){this.s=4,Se(15),St(this.i,this.l,ce,"[Invalid Chunk]"),y=!1;break}else St(this.i,this.l,dr,null),vl(this,dr);if(ze(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),rn!=4||ce.length!=0||this.h.h||(this.s=1,Se(16),y=!1),this.o=this.o&&y,!y)St(this.i,this.l,ce,"[Invalid Chunked Response]"),Kr(this),qi(this);else if(0<ce.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+ce.length),Xr(ft),ft.M=!0,Se(11))}}else St(this.i,this.l,ce,null),vl(this,ce);rn==4&&Kr(this),this.o&&!this.J&&(rn==4?Tt(this.j,this):(this.o=!1,Wt(this)))}else Ju(this.g),y==400&&0<ce.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),Kr(this),qi(this)}}}catch{}finally{}};function ze(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function cn(c,m){var y=c.C,S=m.indexOf(`
`,y);return S==-1?Wi:(y=Number(m.substring(y,S)),isNaN(y)?Xn:(S+=1,S+y>m.length?Wi:(m=m.slice(S,S+y),c.C=S+y,m)))}bn.prototype.cancel=function(){this.J=!0,Kr(this)};function Wt(c){c.S=Date.now()+c.I,Ht(c,c.I)}function Ht(c,m){if(c.B!=null)throw Error("WatchDog timer not null");c.B=ge(_(c.ba,c),m)}function Ti(c){c.B&&(u.clearTimeout(c.B),c.B=null)}bn.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(Ne(this.i,this.A),this.L!=2&&(le(),Se(17)),Kr(this),this.s=2,qi(this)):Ht(this,this.S-c)};function qi(c){c.j.G==0||c.J||Tt(c.j,c)}function Kr(c){Ti(c);var m=c.M;m&&typeof m.ma=="function"&&m.ma(),c.M=null,fs(c.U),c.g&&(m=c.g,c.g=null,m.abort(),m.ma())}function vl(c,m){try{var y=c.j;if(y.G!=0&&(y.g==c||$u(y.h,c))){if(!c.K&&$u(y.h,c)&&y.G==3){try{var S=y.Da.g.parse(m)}catch{S=null}if(Array.isArray(S)&&S.length==3){var q=S;if(q[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<c.F)fo(y),fa(y);else break e;Tl(y),Se(18)}}else y.za=q[1],0<y.za-y.T&&37500>q[2]&&y.F&&y.v==0&&!y.C&&(y.C=ge(_(y.Za,y),6e3));if(1>=dh(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else Si(y,11)}else if((c.K||y.g==c)&&fo(y),!R(m))for(q=y.Da.g.parse(m),m=0;m<q.length;m++){let et=q[m];if(y.T=et[0],et=et[1],y.G==2)if(et[0]=="c"){y.K=et[1],y.ia=et[2];const ft=et[3];ft!=null&&(y.la=ft,y.j.info("VER="+y.la));const rn=et[4];rn!=null&&(y.Aa=rn,y.j.info("SVER="+y.Aa));const Jr=et[5];Jr!=null&&typeof Jr=="number"&&0<Jr&&(S=1.5*Jr,y.L=S,y.j.info("backChannelRequestTimeoutMs_="+S)),S=y;const dr=c.g;if(dr){const ga=dr.g?dr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var Q=S.h;Q.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(Q.j=Q.l,Q.g=new Set,Q.h&&(yl(Q,Q.h),Q.h=null))}if(S.D){const tc=dr.g?dr.g.getResponseHeader("X-HTTP-Session-Id"):null;tc&&(S.ya=tc,yt(S.I,S.D,tc))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-c.F,y.j.info("Handshake RTT: "+y.R+"ms")),S=y;var ce=c;if(S.qa=Il(S,S.J?S.ia:null,S.W),ce.K){zu(S.h,ce);var lt=ce,fn=S.L;fn&&(lt.I=fn),lt.B&&(Ti(lt),Wt(lt)),S.g=ce}else bh(S);0<y.i.length&&ha(y)}else et[0]!="stop"&&et[0]!="close"||Si(y,7);else y.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Si(y,7):El(y):et[0]!="noop"&&y.l&&y.l.ta(et),y.v=0)}}le(4)}catch{}}var ch=class{constructor(c,m){this.g=c,this.map=m}};function fh(c){this.l=c||10,u.PerformanceNavigationTiming?(c=u.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hh(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function dh(c){return c.h?1:c.g?c.g.size:0}function $u(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function yl(c,m){c.g?c.g.add(m):c.h=m}function zu(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}fh.prototype.cancel=function(){if(this.i=Wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Wu(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const y of c.g.values())m=m.concat(y.D);return m}return O(c.i)}function Hu(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(f(c)){for(var m=[],y=c.length,S=0;S<y;S++)m.push(c[S]);return m}m=[],y=0;for(S in c)m[y++]=c[S];return m}function ag(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(f(c)||typeof c=="string"){var m=[];c=c.length;for(var y=0;y<c;y++)m.push(y);return m}m=[],y=0;for(const S in c)m[y++]=S;return m}}}function qu(c,m){if(c.forEach&&typeof c.forEach=="function")c.forEach(m,void 0);else if(f(c)||typeof c=="string")Array.prototype.forEach.call(c,m,void 0);else for(var y=ag(c),S=Hu(c),q=S.length,Q=0;Q<q;Q++)m.call(void 0,S[Q],y&&y[Q],c)}var la=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ph(c,m){if(c){c=c.split("&");for(var y=0;y<c.length;y++){var S=c[y].indexOf("="),q=null;if(0<=S){var Q=c[y].substring(0,S);q=c[y].substring(S+1)}else Q=c[y];m(Q,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function ps(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof ps){this.h=c.h,ua(this,c.j),this.o=c.o,this.g=c.g,ao(this,c.s),this.l=c.l;var m=c.i,y=new uo;y.i=m.i,m.g&&(y.g=new Map(m.g),y.h=m.h),mh(this,y),this.m=c.m}else c&&(m=String(c).match(la))?(this.h=!1,ua(this,m[1]||"",!0),this.o=ms(m[2]||""),this.g=ms(m[3]||"",!0),ao(this,m[4]),this.l=ms(m[5]||"",!0),mh(this,m[6]||"",!0),this.m=ms(m[7]||"")):(this.h=!1,this.i=new uo(null,this.h))}ps.prototype.toString=function(){var c=[],m=this.j;m&&c.push(Yr(m,Ku,!0),":");var y=this.g;return(y||m=="file")&&(c.push("//"),(m=this.o)&&c.push(Yr(m,Ku,!0),"@"),c.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&c.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&c.push("/"),c.push(Yr(y,y.charAt(0)=="/"?vh:lg,!0))),(y=this.i.toString())&&c.push("?",y),(y=this.m)&&c.push("#",Yr(y,_h)),c.join("")};function Gr(c){return new ps(c)}function ua(c,m,y){c.j=y?ms(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function ao(c,m){if(m){if(m=Number(m),isNaN(m)||0>m)throw Error("Bad port number "+m);c.s=m}else c.s=null}function mh(c,m,y){m instanceof uo?(c.i=m,ug(c.i,c.h)):(y||(m=Yr(m,yh)),c.i=new uo(m,c.h))}function yt(c,m,y){c.i.set(m,y)}function lo(c){return yt(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function ms(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Yr(c,m,y){return typeof c=="string"?(c=encodeURI(c).replace(m,gh),y&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function gh(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Ku=/[#\/\?@]/g,lg=/[#\?:]/g,vh=/[#\?]/g,yh=/[#\?@]/g,_h=/#/g;function uo(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function Ki(c){c.g||(c.g=new Map,c.h=0,c.i&&ph(c.i,function(m,y){c.add(decodeURIComponent(m.replace(/\+/g," ")),y)}))}t=uo.prototype,t.add=function(c,m){Ki(this),this.i=null,c=co(this,c);var y=this.g.get(c);return y||this.g.set(c,y=[]),y.push(m),this.h+=1,this};function wh(c,m){Ki(c),m=co(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Eh(c,m){return Ki(c),m=co(c,m),c.g.has(m)}t.forEach=function(c,m){Ki(this),this.g.forEach(function(y,S){y.forEach(function(q){c.call(m,q,S,this)},this)},this)},t.na=function(){Ki(this);const c=Array.from(this.g.values()),m=Array.from(this.g.keys()),y=[];for(let S=0;S<m.length;S++){const q=c[S];for(let Q=0;Q<q.length;Q++)y.push(m[S])}return y},t.V=function(c){Ki(this);let m=[];if(typeof c=="string")Eh(this,c)&&(m=m.concat(this.g.get(co(this,c))));else{c=Array.from(this.g.values());for(let y=0;y<c.length;y++)m=m.concat(c[y])}return m},t.set=function(c,m){return Ki(this),this.i=null,c=co(this,c),Eh(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},t.get=function(c,m){return c?(c=this.V(c),0<c.length?String(c[0]):m):m};function Gu(c,m,y){wh(c,m),0<y.length&&(c.i=null,c.g.set(co(c,m),O(y)),c.h+=y.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(var y=0;y<m.length;y++){var S=m[y];const Q=encodeURIComponent(String(S)),ce=this.V(S);for(S=0;S<ce.length;S++){var q=Q;ce[S]!==""&&(q+="="+encodeURIComponent(String(ce[S]))),c.push(q)}}return this.i=c.join("&")};function co(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function ug(c,m){m&&!c.j&&(Ki(c),c.i=null,c.g.forEach(function(y,S){var q=S.toLowerCase();S!=q&&(wh(this,S),Gu(this,q,y))},c)),c.j=m}function cg(c,m){const y=new Pe;if(u.Image){const S=new Image;S.onload=b(Qr,y,"TestLoadImage: loaded",!0,m,S),S.onerror=b(Qr,y,"TestLoadImage: error",!1,m,S),S.onabort=b(Qr,y,"TestLoadImage: abort",!1,m,S),S.ontimeout=b(Qr,y,"TestLoadImage: timeout",!1,m,S),u.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=c}else m(!1)}function fg(c,m){const y=new Pe,S=new AbortController,q=setTimeout(()=>{S.abort(),Qr(y,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:S.signal}).then(Q=>{clearTimeout(q),Q.ok?Qr(y,"TestPingServer: ok",!0,m):Qr(y,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(q),Qr(y,"TestPingServer: error",!1,m)})}function Qr(c,m,y,S,q){try{q&&(q.onload=null,q.onerror=null,q.onabort=null,q.ontimeout=null),S(y)}catch{}}function hg(){this.g=new $i}function dg(c,m,y){const S=y||"";try{qu(c,function(q,Q){let ce=q;d(q)&&(ce=hs(q)),m.push(S+Q+"="+encodeURIComponent(ce))})}catch(q){throw m.push(S+"type="+encodeURIComponent("_badmap")),q}}function ca(c){this.l=c.Ub||null,this.j=c.eb||!1}x(ca,ro),ca.prototype.g=function(){return new _l(this.l,this.j)},ca.prototype.i=function(c){return function(){return c}}({});function _l(c,m){wt.call(this),this.D=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(_l,wt),t=_l.prototype,t.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=m,this.readyState=1,ot(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const m={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(m.body=c),(this.D||u).fetch(new Request(this.A,m)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,at(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,ot(this)),this.g&&(this.readyState=3,ot(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Th(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Th(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.v.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?at(this):ot(this),this.readyState==3&&Th(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,at(this))},t.Qa=function(c){this.g&&(this.response=c,at(this))},t.ga=function(){this.g&&at(this)};function at(c){c.readyState=4,c.l=null,c.j=null,c.v=null,ot(c)}t.setRequestHeader=function(c,m){this.u.append(c,m)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var y=m.next();!y.done;)y=y.value,c.push(y[0]+": "+y[1]),y=m.next();return c.join(`\r
`)};function ot(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(_l.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Ih(c){let m="";return Z(c,function(y,S){m+=S,m+=":",m+=y,m+=`\r
`}),m}function Yu(c,m,y){e:{for(S in y){var S=!1;break e}S=!0}S||(y=Ih(y),typeof c=="string"?y!=null&&encodeURIComponent(String(y)):yt(c,m,y))}function Ot(c){wt.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ot,wt);var pg=/^https?$/i,mg=["POST","PUT"];t=Ot.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,m,y,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fr.g(),this.v=this.o?io(this.o):io(fr),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(Q){Sh(this,Q);return}if(c=y||"",y=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var q in S)y.set(q,S[q]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const Q of S.keys())y.set(Q,S.get(Q));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(y.keys()).find(Q=>Q.toLowerCase()=="content-type"),q=u.FormData&&c instanceof u.FormData,!(0<=Array.prototype.indexOf.call(mg,m,void 0))||S||q||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Q,ce]of y)this.g.setRequestHeader(Q,ce);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wl(this),this.u=!0,this.g.send(c),this.u=!1}catch(Q){Sh(this,Q)}};function Sh(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.m=5,Qu(c),qt(c)}function Qu(c){c.A||(c.A=!0,Et(c,"complete"),Et(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,Et(this,"complete"),Et(this,"abort"),qt(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qt(this,!0)),Ot.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ah(this):this.bb())},t.bb=function(){Ah(this)};function Ah(c){if(c.h&&typeof a<"u"&&(!c.v[1]||kn(c)!=4||c.Z()!=2)){if(c.u&&kn(c)==4)yi(c.Ea,0,c);else if(Et(c,"readystatechange"),kn(c)==4){c.h=!1;try{const ce=c.Z();e:switch(ce){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var y;if(!(y=m)){var S;if(S=ce===0){var q=String(c.D).match(la)[1]||null;!q&&u.self&&u.self.location&&(q=u.self.location.protocol.slice(0,-1)),S=!pg.test(q?q.toLowerCase():"")}y=S}if(y)Et(c,"complete"),Et(c,"success");else{c.m=6;try{var Q=2<kn(c)?c.g.statusText:""}catch{Q=""}c.l=Q+" ["+c.Z()+"]",Qu(c)}}finally{qt(c)}}}}function qt(c,m){if(c.g){wl(c);const y=c.g,S=c.v[0]?()=>{}:null;c.g=null,c.v=null,m||Et(c,"ready");try{y.onreadystatechange=S}catch{}}}function wl(c){c.I&&(u.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function kn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<kn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),no(m)}};function Xu(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ju(c){const m={};c=(c.g&&2<=kn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<c.length;S++){if(R(c[S]))continue;var y=M(c[S]);const q=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const Q=m[q]||[];m[q]=Q,Q.push(y)}E(m,function(S){return S.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _n(c,m,y){return y&&y.internalChannelParams&&y.internalChannelParams[c]||m}function Zu(c){this.Aa=0,this.i=[],this.j=new Pe,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_n("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_n("baseRetryDelayMs",5e3,c),this.cb=_n("retryDelaySeedMs",1e4,c),this.Wa=_n("forwardChannelMaxRetries",2,c),this.wa=_n("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new fh(c&&c.concurrentRequestLimit),this.Da=new hg,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Zu.prototype,t.la=8,t.G=1,t.connect=function(c,m,y,S){Se(0),this.W=c,this.H=m||{},y&&S!==void 0&&(this.H.OSID=y,this.H.OAID=S),this.F=this.X,this.I=Il(this,null,this.W),ha(this)};function El(c){if(ec(c),c.G==3){var m=c.U++,y=Gr(c.I);if(yt(y,"SID",c.K),yt(y,"RID",m),yt(y,"TYPE","terminate"),da(c,y),m=new bn(c,c.j,m),m.L=2,m.v=lo(Gr(y)),y=!1,u.navigator&&u.navigator.sendBeacon)try{y=u.navigator.sendBeacon(m.v.toString(),"")}catch{}!y&&u.Image&&(new Image().src=m.v,y=!0),y||(m.g=Ch(m.j,null),m.g.ea(m.v)),m.F=Date.now(),Wt(m)}kh(c)}function fa(c){c.g&&(Xr(c),c.g.cancel(),c.g=null)}function ec(c){fa(c),c.u&&(u.clearTimeout(c.u),c.u=null),fo(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&u.clearTimeout(c.s),c.s=null)}function ha(c){if(!hh(c.h)&&!c.s){c.s=!0;var m=c.Ga;de||ae(),H||(de(),H=!0),oe.add(m,c),c.B=0}}function Rh(c,m){return dh(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=m.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=ge(_(c.Ga,c,m),Ii(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const q=new bn(this,this.j,c);let Q=this.o;if(this.S&&(Q?(Q=I(Q),N(Q,this.S)):Q=this.S),this.m!==null||this.O||(q.H=Q,Q=null),this.P)e:{for(var m=0,y=0;y<this.i.length;y++){t:{var S=this.i[y];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(m+=S,4096<m){m=y;break e}if(m===4096||y===this.i.length-1){m=y+1;break e}}m=1e3}else m=1e3;m=Jn(this,q,m),y=Gr(this.I),yt(y,"RID",c),yt(y,"CVER",22),this.D&&yt(y,"X-HTTP-Session-Id",this.D),da(this,y),Q&&(this.O?m="headers="+encodeURIComponent(String(Ih(Q)))+"&"+m:this.m&&Yu(y,this.m,Q)),yl(this.h,q),this.Ua&&yt(y,"TYPE","init"),this.P?(yt(y,"$req",m),yt(y,"SID","null"),q.T=!0,Hi(q,y,null)):Hi(q,y,m),this.G=2}}else this.G==3&&(c?Vn(this,c):this.i.length==0||hh(this.h)||Vn(this))};function Vn(c,m){var y;m?y=m.l:y=c.U++;const S=Gr(c.I);yt(S,"SID",c.K),yt(S,"RID",y),yt(S,"AID",c.T),da(c,S),c.m&&c.o&&Yu(S,c.m,c.o),y=new bn(c,c.j,y,c.B+1),c.m===null&&(y.H=c.o),m&&(c.i=m.D.concat(c.i)),m=Jn(c,y,1e3),y.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),yl(c.h,y),Hi(y,S,m)}function da(c,m){c.H&&Z(c.H,function(y,S){yt(m,S,y)}),c.l&&qu({},function(y,S){yt(m,S,y)})}function Jn(c,m,y){y=Math.min(c.i.length,y);var S=c.l?_(c.l.Na,c.l,c):null;e:{var q=c.i;let Q=-1;for(;;){const ce=["count="+y];Q==-1?0<y?(Q=q[0].g,ce.push("ofs="+Q)):Q=0:ce.push("ofs="+Q);let lt=!0;for(let fn=0;fn<y;fn++){let et=q[fn].g;const ft=q[fn].map;if(et-=Q,0>et)Q=Math.max(0,q[fn].g-100),lt=!1;else try{dg(ft,ce,"req"+et+"_")}catch{S&&S(ft)}}if(lt){S=ce.join("&");break e}}}return c=c.i.splice(0,y),m.D=c,S}function bh(c){if(!c.g&&!c.u){c.Y=1;var m=c.Fa;de||ae(),H||(de(),H=!0),oe.add(m,c),c.v=0}}function Tl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=ge(_(c.Fa,c),Ii(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,pa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=ge(_(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),fa(this),pa(this))};function Xr(c){c.A!=null&&(u.clearTimeout(c.A),c.A=null)}function pa(c){c.g=new bn(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var m=Gr(c.qa);yt(m,"RID","rpc"),yt(m,"SID",c.K),yt(m,"AID",c.T),yt(m,"CI",c.F?"0":"1"),!c.F&&c.ja&&yt(m,"TO",c.ja),yt(m,"TYPE","xmlhttp"),da(c,m),c.m&&c.o&&Yu(m,c.m,c.o),c.L&&(c.g.I=c.L);var y=c.g;c=c.ia,y.L=1,y.v=lo(Gr(m)),y.m=null,y.P=!0,ds(y,c)}t.Za=function(){this.C!=null&&(this.C=null,fa(this),Tl(this),Se(19))};function fo(c){c.C!=null&&(u.clearTimeout(c.C),c.C=null)}function Tt(c,m){var y=null;if(c.g==m){fo(c),Xr(c),c.g=null;var S=2}else if($u(c.h,m))y=m.D,zu(c.h,m),S=1;else return;if(c.G!=0){if(m.o)if(S==1){y=m.m?m.m.length:0,m=Date.now()-m.F;var q=c.B;S=K(),Et(S,new be(S,y)),ha(c)}else bh(c);else if(q=m.s,q==3||q==0&&0<m.X||!(S==1&&Rh(c,m)||S==2&&Tl(c)))switch(y&&0<y.length&&(m=c.h,m.i=m.i.concat(y)),q){case 1:Si(c,5);break;case 4:Si(c,10);break;case 3:Si(c,6);break;default:Si(c,2)}}}function Ii(c,m){let y=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(y*=2),y*m}function Si(c,m){if(c.j.info("Error code "+m),m==2){var y=_(c.fb,c),S=c.Xa;const q=!S;S=new ps(S||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ua(S,"https"),lo(S),q?cg(S.toString(),y):fg(S.toString(),y)}else Se(2);c.G=0,c.l&&c.l.sa(m),kh(c),ec(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function kh(c){if(c.G=0,c.ka=[],c.l){const m=Wu(c.h);(m.length!=0||c.i.length!=0)&&(F(c.ka,m),F(c.ka,c.i),c.h.i.length=0,O(c.i),c.i.length=0),c.l.ra()}}function Il(c,m,y){var S=y instanceof ps?Gr(y):new ps(y);if(S.g!="")m&&(S.g=m+"."+S.g),ao(S,S.s);else{var q=u.location;S=q.protocol,m=m?m+"."+q.hostname:q.hostname,q=+q.port;var Q=new ps(null);S&&ua(Q,S),m&&(Q.g=m),q&&ao(Q,q),y&&(Q.l=y),S=Q}return y=c.D,m=c.ya,y&&m&&yt(S,y,m),yt(S,"VER",c.la),da(c,S),S}function Ch(c,m,y){if(m&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Ca&&!c.pa?new Ot(new ca({eb:y})):new Ot(c.pa),m.Ha(c.J),m}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ph(){}t=Ph.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Sl(){}Sl.prototype.g=function(c,m){return new Un(c,m)};function Un(c,m){wt.call(this),this.g=new Zu(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.va&&(c?c["X-WebChannel-Client-Profile"]=m.va:c={"X-WebChannel-Client-Profile":m.va}),this.g.S=c,(c=m&&m.Sb)&&!R(c)&&(this.g.m=c),this.v=m&&m.supportsCrossDomainXhr||!1,this.u=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!R(m)&&(this.g.D=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new ho(this)}x(Un,wt),Un.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Un.prototype.close=function(){El(this.g)},Un.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var y={};y.__data__=c,c=y}else this.u&&(y={},y.__data__=hs(c),c=y);m.i.push(new ch(m.Ya++,c)),m.G==3&&ha(m)},Un.prototype.N=function(){this.g.l=null,delete this.j,El(this.g),delete this.g,Un.aa.N.call(this)};function ma(c){so.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const y in m){c=y;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}x(ma,so);function gs(){oo.call(this),this.status=1}x(gs,oo);function ho(c){this.g=c}x(ho,Ph),ho.prototype.ua=function(){Et(this.g,"a")},ho.prototype.ta=function(c){Et(this.g,new ma(c))},ho.prototype.sa=function(c){Et(this.g,new gs)},ho.prototype.ra=function(){Et(this.g,"b")},Sl.prototype.createWebChannel=Sl.prototype.g,Un.prototype.send=Un.prototype.o,Un.prototype.open=Un.prototype.m,Un.prototype.close=Un.prototype.close,iC=function(){return new Sl},rC=function(){return K()},nC=wi,p_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},kt.NO_ERROR=0,kt.TIMEOUT=8,kt.HTTP_ERROR=6,op=kt,zi.COMPLETE="complete",tC=zi,gl.EventType=_i,_i.OPEN="a",_i.CLOSE="b",_i.ERROR="c",_i.MESSAGE="d",wt.prototype.listen=wt.prototype.K,Lc=gl,eC=ca,Ot.prototype.listenOnce=Ot.prototype.L,Ot.prototype.getLastError=Ot.prototype.Ka,Ot.prototype.getLastErrorCode=Ot.prototype.Ba,Ot.prototype.getStatus=Ot.prototype.Z,Ot.prototype.getResponseJson=Ot.prototype.Oa,Ot.prototype.getResponseText=Ot.prototype.oa,Ot.prototype.send=Ot.prototype.ea,Ot.prototype.setWithCredentials=Ot.prototype.Ha,Zk=Ot}).apply(typeof xd<"u"?xd:typeof self<"u"?self:typeof window<"u"?window:{});const eS="@firebase/firestore";/**
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
 */class Hn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Hn.UNAUTHENTICATED=new Hn(null),Hn.GOOGLE_CREDENTIALS=new Hn("google-credentials-uid"),Hn.FIRST_PARTY=new Hn("first-party-uid"),Hn.MOCK_USER=new Hn("mock-user");/**
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
 */let Fu="10.12.0";/**
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
 */const Za=new Dm("@firebase/firestore");function bc(){return Za.logLevel}function Te(t,...e){if(Za.logLevel<=nt.DEBUG){const n=e.map(rw);Za.debug(`Firestore (${Fu}): ${t}`,...n)}}function Ws(t,...e){if(Za.logLevel<=nt.ERROR){const n=e.map(rw);Za.error(`Firestore (${Fu}): ${t}`,...n)}}function Iu(t,...e){if(Za.logLevel<=nt.WARN){const n=e.map(rw);Za.warn(`Firestore (${Fu}): ${t}`,...n)}}function rw(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Ve(t="Unexpected state"){const e=`FIRESTORE (${Fu}) INTERNAL ASSERTION FAILED: `+t;throw Ws(e),new Error(e)}function Rt(t,e){t||Ve()}function $e(t,e){return t}/**
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
 */const se={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ke extends mi{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class $a{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class sC{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class A9{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Hn.UNAUTHENTICATED))}shutdown(){}}class R9{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class b9{constructor(e){this.t=e,this.currentUser=Hn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let s=new $a;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new $a,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const f=s;e.enqueueRetryable(async()=>{await f.promise,await i(this.currentUser)})},u=f=>{Te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(f=>u(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?u(f):(Te("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new $a)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Rt(typeof r.accessToken=="string"),new sC(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Rt(e===null||typeof e=="string"),new Hn(e)}}class k9{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Hn.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class C9{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new k9(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Hn.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class P9{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class x9{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,Te("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Rt(typeof n.token=="string"),this.R=n.token,new P9(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function N9(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class oC{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=N9(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ct(t,e){return t<e?-1:t>e?1:0}function Su(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class un{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ke(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ke(se.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ke(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ke(se.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return un.fromMillis(Date.now())}static fromDate(e){return un.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new un(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ct(this.nanoseconds,e.nanoseconds):ct(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class je{constructor(e){this.timestamp=e}static fromTimestamp(e){return new je(e)}static min(){return new je(new un(0,0))}static max(){return new je(new un(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class bf{constructor(e,n,r){n===void 0?n=0:n>e.length&&Ve(),r===void 0?r=e.length-n:r>e.length-n&&Ve(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bf.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bf?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Mt extends bf{construct(e,n,r){return new Mt(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ke(se.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Mt(n)}static emptyPath(){return new Mt([])}}const O9=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Nn extends bf{construct(e,n,r){return new Nn(e,n,r)}static isValidIdentifier(e){return O9.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Nn.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Nn(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new ke(se.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const u=e[i];if(u==="\\"){if(i+1===e.length)throw new ke(se.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new ke(se.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,i+=2}else u==="`"?(a=!a,i++):u!=="."||a?(r+=u,i++):(s(),i++)}if(s(),a)throw new ke(se.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Nn(n)}static emptyPath(){return new Nn([])}}/**
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
 */class Ce{constructor(e){this.path=e}static fromPath(e){return new Ce(Mt.fromString(e))}static fromName(e){return new Ce(Mt.fromString(e).popFirst(5))}static empty(){return new Ce(Mt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Mt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Mt.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ce(new Mt(e.slice()))}}function D9(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=je.fromTimestamp(r===1e9?new un(n+1,0):new un(n,r));return new Go(i,Ce.empty(),e)}function L9(t){return new Go(t.readTime,t.key,-1)}class Go{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Go(je.min(),Ce.empty(),-1)}static max(){return new Go(je.max(),Ce.empty(),-1)}}function M9(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Ce.comparator(t.documentKey,e.documentKey),n!==0?n:ct(t.largestBatchId,e.largestBatchId))}/**
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
 */const F9="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class V9{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qf(t){if(t.code!==se.FAILED_PRECONDITION||t.message!==F9)throw t;Te("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ie{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Ve(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new ie((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof ie?n:ie.resolve(n)}catch(n){return ie.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):ie.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):ie.reject(n)}static resolve(e){return new ie((n,r)=>{n(e)})}static reject(e){return new ie((n,r)=>{r(e)})}static waitFor(e){return new ie((n,r)=>{let i=0,s=0,a=!1;e.forEach(u=>{++i,u.next(()=>{++s,a&&s===i&&n()},f=>r(f))}),a=!0,s===i&&n()})}static or(e){let n=ie.resolve(!1);for(const r of e)n=n.next(i=>i?ie.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new ie((r,i)=>{const s=e.length,a=new Array(s);let u=0;for(let f=0;f<s;f++){const d=f;n(e[d]).next(p=>{a[d]=p,++u,u===s&&r(a)},p=>i(p))}})}static doWhile(e,n){return new ie((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function U9(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xf(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class iw{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}iw.oe=-1;function Vm(t){return t==null}function Kp(t){return t===0&&1/t==-1/0}function j9(t){return typeof t=="number"&&Number.isInteger(t)&&!Kp(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function tS(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hl(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class zt{constructor(e,n){this.comparator=e,this.root=n||xn.EMPTY}insert(e,n){return new zt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,xn.BLACK,null,null))}remove(e){return new zt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,xn.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nd(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nd(this.root,e,this.comparator,!0)}}class Nd{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class xn{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xn.RED,this.left=i??xn.EMPTY,this.right=s??xn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new xn(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return xn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return xn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,xn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,xn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ve();const e=this.left.check();if(e!==this.right.check())throw Ve();return e+(this.isRed()?0:1)}}xn.EMPTY=null,xn.RED=!0,xn.BLACK=!1;xn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ve()}get value(){throw Ve()}get color(){throw Ve()}get left(){throw Ve()}get right(){throw Ve()}copy(e,n,r,i,s){return this}insert(e,n,r){return new xn(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Dn{constructor(e){this.comparator=e,this.data=new zt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nS(this.data.getIterator())}getIteratorFrom(e){return new nS(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Dn)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Dn(this.comparator);return n.data=e,n}}class nS{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Dr{constructor(e){this.fields=e,e.sort(Nn.comparator)}static empty(){return new Dr([])}unionWith(e){let n=new Dn(Nn.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dr(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Su(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new lC("Invalid base64 string: "+s):s}}(e);return new Qn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Qn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ct(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qn.EMPTY_BYTE_STRING=new Qn("");const B9=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Yo(t){if(Rt(!!t),typeof t=="string"){let e=0;const n=B9.exec(t);if(Rt(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:an(t.seconds),nanos:an(t.nanos)}}function an(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function el(t){return typeof t=="string"?Qn.fromBase64String(t):Qn.fromUint8Array(t)}/**
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
 */function sw(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ow(t){const e=t.mapValue.fields.__previous_value__;return sw(e)?ow(e):e}function kf(t){const e=Yo(t.mapValue.fields.__local_write_time__.timestampValue);return new un(e.seconds,e.nanos)}/**
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
 */class $9{constructor(e,n,r,i,s,a,u,f,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=f,this.useFetchStreams=d}}class Cf{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Cf("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Cf&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Od={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function tl(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sw(t)?4:z9(t)?9007199254740991:10:Ve()}function ls(t,e){if(t===e)return!0;const n=tl(t);if(n!==tl(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kf(t).isEqual(kf(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Yo(i.timestampValue),u=Yo(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return el(i.bytesValue).isEqual(el(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return an(i.geoPointValue.latitude)===an(s.geoPointValue.latitude)&&an(i.geoPointValue.longitude)===an(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return an(i.integerValue)===an(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=an(i.doubleValue),u=an(s.doubleValue);return a===u?Kp(a)===Kp(u):isNaN(a)&&isNaN(u)}return!1}(t,e);case 9:return Su(t.arrayValue.values||[],e.arrayValue.values||[],ls);case 10:return function(i,s){const a=i.mapValue.fields||{},u=s.mapValue.fields||{};if(tS(a)!==tS(u))return!1;for(const f in a)if(a.hasOwnProperty(f)&&(u[f]===void 0||!ls(a[f],u[f])))return!1;return!0}(t,e);default:return Ve()}}function Pf(t,e){return(t.values||[]).find(n=>ls(n,e))!==void 0}function Au(t,e){if(t===e)return 0;const n=tl(t),r=tl(e);if(n!==r)return ct(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ct(t.booleanValue,e.booleanValue);case 2:return function(s,a){const u=an(s.integerValue||s.doubleValue),f=an(a.integerValue||a.doubleValue);return u<f?-1:u>f?1:u===f?0:isNaN(u)?isNaN(f)?0:-1:1}(t,e);case 3:return rS(t.timestampValue,e.timestampValue);case 4:return rS(kf(t),kf(e));case 5:return ct(t.stringValue,e.stringValue);case 6:return function(s,a){const u=el(s),f=el(a);return u.compareTo(f)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),f=a.split("/");for(let d=0;d<u.length&&d<f.length;d++){const p=ct(u[d],f[d]);if(p!==0)return p}return ct(u.length,f.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const u=ct(an(s.latitude),an(a.latitude));return u!==0?u:ct(an(s.longitude),an(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,a){const u=s.values||[],f=a.values||[];for(let d=0;d<u.length&&d<f.length;++d){const p=Au(u[d],f[d]);if(p)return p}return ct(u.length,f.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Od.mapValue&&a===Od.mapValue)return 0;if(s===Od.mapValue)return 1;if(a===Od.mapValue)return-1;const u=s.fields||{},f=Object.keys(u),d=a.fields||{},p=Object.keys(d);f.sort(),p.sort();for(let v=0;v<f.length&&v<p.length;++v){const _=ct(f[v],p[v]);if(_!==0)return _;const b=Au(u[f[v]],d[p[v]]);if(b!==0)return b}return ct(f.length,p.length)}(t.mapValue,e.mapValue);default:throw Ve()}}function rS(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ct(t,e);const n=Yo(t),r=Yo(e),i=ct(n.seconds,r.seconds);return i!==0?i:ct(n.nanos,r.nanos)}function Ru(t){return m_(t)}function m_(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Yo(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return el(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=m_(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${m_(n.fields[a])}`;return i+"}"}(t.mapValue):Ve()}function g_(t){return!!t&&"integerValue"in t}function aw(t){return!!t&&"arrayValue"in t}function iS(t){return!!t&&"nullValue"in t}function sS(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ap(t){return!!t&&"mapValue"in t}function Xc(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hl(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Xc(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Xc(t.arrayValue.values[n]);return e}return Object.assign({},t)}function z9(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class _r{constructor(e){this.value=e}static empty(){return new _r({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ap(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xc(n)}setAll(e){let n=Nn.emptyPath(),r={},i=[];e.forEach((a,u)=>{if(!n.isImmediateParentOf(u)){const f=this.getFieldsMap(n);this.applyChanges(f,r,i),r={},i=[],n=u.popLast()}a?r[u.lastSegment()]=Xc(a):i.push(u.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ap(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ls(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ap(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hl(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new _r(Xc(this.value))}}function uC(t){const e=[];return hl(t.fields,(n,r)=>{const i=new Nn([n]);if(ap(r)){const s=uC(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Dr(e)}/**
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
 */class Kn{constructor(e,n,r,i,s,a,u){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Kn(e,0,je.min(),je.min(),je.min(),_r.empty(),0)}static newFoundDocument(e,n,r,i){return new Kn(e,1,n,je.min(),r,i,0)}static newNoDocument(e,n){return new Kn(e,2,n,je.min(),je.min(),_r.empty(),0)}static newUnknownDocument(e,n){return new Kn(e,3,n,je.min(),je.min(),_r.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(je.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=_r.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=_r.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=je.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Kn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Kn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Gp{constructor(e,n){this.position=e,this.inclusive=n}}function oS(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=Ce.comparator(Ce.fromName(a.referenceValue),n.key):r=Au(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function aS(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ls(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yp{constructor(e,n="asc"){this.field=e,this.dir=n}}function W9(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cC{}class mn extends cC{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new q9(e,n,r):n==="array-contains"?new Y9(e,r):n==="in"?new Q9(e,r):n==="not-in"?new X9(e,r):n==="array-contains-any"?new J9(e,r):new mn(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new K9(e,r):new G9(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Au(n,this.value)):n!==null&&tl(this.value)===tl(n)&&this.matchesComparison(Au(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ve()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class us extends cC{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new us(e,n)}matches(e){return fC(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fC(t){return t.op==="and"}function hC(t){return H9(t)&&fC(t)}function H9(t){for(const e of t.filters)if(e instanceof us)return!1;return!0}function v_(t){if(t instanceof mn)return t.field.canonicalString()+t.op.toString()+Ru(t.value);if(hC(t))return t.filters.map(e=>v_(e)).join(",");{const e=t.filters.map(n=>v_(n)).join(",");return`${t.op}(${e})`}}function dC(t,e){return t instanceof mn?function(r,i){return i instanceof mn&&r.op===i.op&&r.field.isEqual(i.field)&&ls(r.value,i.value)}(t,e):t instanceof us?function(r,i){return i instanceof us&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,u)=>s&&dC(a,i.filters[u]),!0):!1}(t,e):void Ve()}function pC(t){return t instanceof mn?function(n){return`${n.field.canonicalString()} ${n.op} ${Ru(n.value)}`}(t):t instanceof us?function(n){return n.op.toString()+" {"+n.getFilters().map(pC).join(" ,")+"}"}(t):"Filter"}class q9 extends mn{constructor(e,n,r){super(e,n,r),this.key=Ce.fromName(r.referenceValue)}matches(e){const n=Ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class K9 extends mn{constructor(e,n){super(e,"in",n),this.keys=mC("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class G9 extends mn{constructor(e,n){super(e,"not-in",n),this.keys=mC("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mC(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Ce.fromName(r.referenceValue))}class Y9 extends mn{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return aw(n)&&Pf(n.arrayValue,this.value)}}class Q9 extends mn{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Pf(this.value.arrayValue,n)}}class X9 extends mn{constructor(e,n){super(e,"not-in",n)}matches(e){if(Pf(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Pf(this.value.arrayValue,n)}}class J9 extends mn{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!aw(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Pf(this.value.arrayValue,r))}}/**
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
 */class Z9{constructor(e,n=null,r=[],i=[],s=null,a=null,u=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=u,this.ue=null}}function lS(t,e=null,n=[],r=[],i=null,s=null,a=null){return new Z9(t,e,n,r,i,s,a)}function lw(t){const e=$e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>v_(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Vm(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ru(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ru(r)).join(",")),e.ue=n}return e.ue}function uw(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!W9(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!dC(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!aS(t.startAt,e.startAt)&&aS(t.endAt,e.endAt)}function y_(t){return Ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Um{constructor(e,n=null,r=[],i=[],s=null,a="F",u=null,f=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=u,this.endAt=f,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ej(t,e,n,r,i,s,a,u){return new Um(t,e,n,r,i,s,a,u)}function cw(t){return new Um(t)}function uS(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function tj(t){return t.collectionGroup!==null}function Jc(t){const e=$e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Dn(Nn.comparator);return a.filters.forEach(f=>{f.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Yp(s,r))}),n.has(Nn.keyField().canonicalString())||e.ce.push(new Yp(Nn.keyField(),r))}return e.ce}function ss(t){const e=$e(t);return e.le||(e.le=nj(e,Jc(t))),e.le}function nj(t,e){if(t.limitType==="F")return lS(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yp(i.field,s)});const n=t.endAt?new Gp(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Gp(t.startAt.position,t.startAt.inclusive):null;return lS(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function __(t,e,n){return new Um(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function jm(t,e){return uw(ss(t),ss(e))&&t.limitType===e.limitType}function gC(t){return`${lw(ss(t))}|lt:${t.limitType}`}function Ul(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>pC(i)).join(", ")}]`),Vm(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ru(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ru(i)).join(",")),`Target(${r})`}(ss(t))}; limitType=${t.limitType})`}function Bm(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Ce.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Jc(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,u,f){const d=oS(a,u,f);return a.inclusive?d<=0:d<0}(r.startAt,Jc(r),i)||r.endAt&&!function(a,u,f){const d=oS(a,u,f);return a.inclusive?d>=0:d>0}(r.endAt,Jc(r),i))}(t,e)}function rj(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vC(t){return(e,n)=>{let r=!1;for(const i of Jc(t)){const s=ij(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function ij(t,e,n){const r=t.field.isKeyField()?Ce.comparator(e.key,n.key):function(s,a,u){const f=a.data.field(s),d=u.data.field(s);return f!==null&&d!==null?Au(f,d):Ve()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Ve()}}/**
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
 */class Vu{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hl(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return aC(this.inner)}size(){return this.innerSize}}/**
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
 */const sj=new zt(Ce.comparator);function Hs(){return sj}const yC=new zt(Ce.comparator);function Mc(...t){let e=yC;for(const n of t)e=e.insert(n.key,n);return e}function _C(t){let e=yC;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function La(){return Zc()}function wC(){return Zc()}function Zc(){return new Vu(t=>t.toString(),(t,e)=>t.isEqual(e))}const oj=new zt(Ce.comparator),aj=new Dn(Ce.comparator);function Ze(...t){let e=aj;for(const n of t)e=e.add(n);return e}const lj=new Dn(ct);function uj(){return lj}/**
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
 */function EC(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Kp(e)?"-0":e}}function TC(t){return{integerValue:""+t}}function cj(t,e){return j9(e)?TC(e):EC(t,e)}/**
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
 */class $m{constructor(){this._=void 0}}function fj(t,e,n){return t instanceof Qp?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&sw(s)&&(s=ow(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof xf?SC(t,e):t instanceof Nf?AC(t,e):function(i,s){const a=IC(i,s),u=cS(a)+cS(i.Pe);return g_(a)&&g_(i.Pe)?TC(u):EC(i.serializer,u)}(t,e)}function hj(t,e,n){return t instanceof xf?SC(t,e):t instanceof Nf?AC(t,e):n}function IC(t,e){return t instanceof Xp?function(r){return g_(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qp extends $m{}class xf extends $m{constructor(e){super(),this.elements=e}}function SC(t,e){const n=RC(e);for(const r of t.elements)n.some(i=>ls(i,r))||n.push(r);return{arrayValue:{values:n}}}class Nf extends $m{constructor(e){super(),this.elements=e}}function AC(t,e){let n=RC(e);for(const r of t.elements)n=n.filter(i=>!ls(i,r));return{arrayValue:{values:n}}}class Xp extends $m{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function cS(t){return an(t.integerValue||t.doubleValue)}function RC(t){return aw(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function dj(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof xf&&i instanceof xf||r instanceof Nf&&i instanceof Nf?Su(r.elements,i.elements,ls):r instanceof Xp&&i instanceof Xp?ls(r.Pe,i.Pe):r instanceof Qp&&i instanceof Qp}(t.transform,e.transform)}class pj{constructor(e,n){this.version=e,this.transformResults=n}}class Vi{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vi}static exists(e){return new Vi(void 0,e)}static updateTime(e){return new Vi(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lp(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class zm{}function bC(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new fw(t.key,Vi.none()):new Jf(t.key,t.data,Vi.none());{const n=t.data,r=_r.empty();let i=new Dn(Nn.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new sa(t.key,r,new Dr(i.toArray()),Vi.none())}}function mj(t,e,n){t instanceof Jf?function(i,s,a){const u=i.value.clone(),f=hS(i.fieldTransforms,s,a.transformResults);u.setAll(f),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):t instanceof sa?function(i,s,a){if(!lp(i.precondition,s))return void s.convertToUnknownDocument(a.version);const u=hS(i.fieldTransforms,s,a.transformResults),f=s.data;f.setAll(kC(i)),f.setAll(u),s.convertToFoundDocument(a.version,f).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ef(t,e,n,r){return t instanceof Jf?function(s,a,u,f){if(!lp(s.precondition,a))return u;const d=s.value.clone(),p=dS(s.fieldTransforms,f,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof sa?function(s,a,u,f){if(!lp(s.precondition,a))return u;const d=dS(s.fieldTransforms,f,a),p=a.data;return p.setAll(kC(s)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(v=>v.field))}(t,e,n,r):function(s,a,u){return lp(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(t,e,n)}function gj(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=IC(r.transform,i||null);s!=null&&(n===null&&(n=_r.empty()),n.set(r.field,s))}return n||null}function fS(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Su(r,i,(s,a)=>dj(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Jf extends zm{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class sa extends zm{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function kC(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hS(t,e,n){const r=new Map;Rt(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,u=e.data.field(s.field);r.set(s.field,hj(a,u,n[i]))}return r}function dS(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,fj(s,a,e))}return r}class fw extends zm{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vj extends zm{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yj{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&mj(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ef(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ef(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=wC();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let u=this.applyToLocalView(a,s.mutatedFields);u=n.has(i.key)?null:u;const f=bC(a,u);f!==null&&r.set(i.key,f),a.isValidDocument()||a.convertToNoDocument(je.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ze())}isEqual(e){return this.batchId===e.batchId&&Su(this.mutations,e.mutations,(n,r)=>fS(n,r))&&Su(this.baseMutations,e.baseMutations,(n,r)=>fS(n,r))}}class hw{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Rt(e.mutations.length===r.length);let i=function(){return oj}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new hw(e,n,r,i)}}/**
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
 */class _j{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wj{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var sn,it;function Ej(t){switch(t){default:return Ve();case se.CANCELLED:case se.UNKNOWN:case se.DEADLINE_EXCEEDED:case se.RESOURCE_EXHAUSTED:case se.INTERNAL:case se.UNAVAILABLE:case se.UNAUTHENTICATED:return!1;case se.INVALID_ARGUMENT:case se.NOT_FOUND:case se.ALREADY_EXISTS:case se.PERMISSION_DENIED:case se.FAILED_PRECONDITION:case se.ABORTED:case se.OUT_OF_RANGE:case se.UNIMPLEMENTED:case se.DATA_LOSS:return!0}}function CC(t){if(t===void 0)return Ws("GRPC error has no .code"),se.UNKNOWN;switch(t){case sn.OK:return se.OK;case sn.CANCELLED:return se.CANCELLED;case sn.UNKNOWN:return se.UNKNOWN;case sn.DEADLINE_EXCEEDED:return se.DEADLINE_EXCEEDED;case sn.RESOURCE_EXHAUSTED:return se.RESOURCE_EXHAUSTED;case sn.INTERNAL:return se.INTERNAL;case sn.UNAVAILABLE:return se.UNAVAILABLE;case sn.UNAUTHENTICATED:return se.UNAUTHENTICATED;case sn.INVALID_ARGUMENT:return se.INVALID_ARGUMENT;case sn.NOT_FOUND:return se.NOT_FOUND;case sn.ALREADY_EXISTS:return se.ALREADY_EXISTS;case sn.PERMISSION_DENIED:return se.PERMISSION_DENIED;case sn.FAILED_PRECONDITION:return se.FAILED_PRECONDITION;case sn.ABORTED:return se.ABORTED;case sn.OUT_OF_RANGE:return se.OUT_OF_RANGE;case sn.UNIMPLEMENTED:return se.UNIMPLEMENTED;case sn.DATA_LOSS:return se.DATA_LOSS;default:return Ve()}}(it=sn||(sn={}))[it.OK=0]="OK",it[it.CANCELLED=1]="CANCELLED",it[it.UNKNOWN=2]="UNKNOWN",it[it.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",it[it.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",it[it.NOT_FOUND=5]="NOT_FOUND",it[it.ALREADY_EXISTS=6]="ALREADY_EXISTS",it[it.PERMISSION_DENIED=7]="PERMISSION_DENIED",it[it.UNAUTHENTICATED=16]="UNAUTHENTICATED",it[it.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",it[it.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",it[it.ABORTED=10]="ABORTED",it[it.OUT_OF_RANGE=11]="OUT_OF_RANGE",it[it.UNIMPLEMENTED=12]="UNIMPLEMENTED",it[it.INTERNAL=13]="INTERNAL",it[it.UNAVAILABLE=14]="UNAVAILABLE",it[it.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Tj(){return new TextEncoder}/**
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
 */const Ij=new Ba([4294967295,4294967295],0);function pS(t){const e=Tj().encode(t),n=new Jk;return n.update(e),new Uint8Array(n.digest())}function mS(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ba([n,r],0),new Ba([i,s],0)]}class dw{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Fc(`Invalid padding: ${n}`);if(r<0)throw new Fc(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fc(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Fc(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ba.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Ba.fromNumber(r)));return i.compare(Ij)===1&&(i=new Ba([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pS(e),[r,i]=mS(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new dw(s,i,n);return r.forEach(u=>a.insert(u)),a}insert(e){if(this.Ie===0)return;const n=pS(e),[r,i]=mS(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Fc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Wm{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Zf.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Wm(je.min(),i,new zt(ct),Hs(),Ze())}}class Zf{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Zf(r,n,Ze(),Ze(),Ze())}}/**
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
 */class up{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class PC{constructor(e,n){this.targetId=e,this.me=n}}class xC{constructor(e,n,r=Qn.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gS{constructor(){this.fe=0,this.ge=yS(),this.pe=Qn.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Ze(),n=Ze(),r=Ze();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Ve()}}),new Zf(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=yS()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Rt(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Sj{constructor(e){this.Le=e,this.Be=new Map,this.ke=Hs(),this.qe=vS(),this.Qe=new zt(ct)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Ve()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(y_(s))if(r===0){const a=new Ce(s.path);this.Ue(n,a,Kn.newNoDocument(a,je.min()))}else Rt(r===1);else{const a=this.Ye(n);if(a!==r){const u=this.Ze(e),f=u?this.Xe(u,e,a):1;if(f!==0){this.je(n);const d=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let a,u;try{a=el(r).toUint8Array()}catch(f){if(f instanceof lC)return Iu("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{u=new dw(a,i,s)}catch(f){return Iu(f instanceof Fc?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return u.Ie===0?null:u}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(u)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,a)=>{const u=this.Je(a);if(u){if(s.current&&y_(u.target)){const f=new Ce(u.target.path);this.ke.get(f)!==null||this.it(a,f)||this.Ue(a,f,Kn.newNoDocument(f,e))}s.be&&(n.set(a,s.Ce()),s.ve())}});let r=Ze();this.qe.forEach((s,a)=>{let u=!0;a.forEachWhile(f=>{const d=this.Je(f);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Wm(e,n,this.Qe,this.ke,r);return this.ke=Hs(),this.qe=vS(),this.Qe=new zt(ct),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gS,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Dn(ct),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Te("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gS),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function vS(){return new zt(Ce.comparator)}function yS(){return new zt(Ce.comparator)}const Aj={asc:"ASCENDING",desc:"DESCENDING"},Rj={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},bj={and:"AND",or:"OR"};class kj{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function w_(t,e){return t.useProto3Json||Vm(e)?e:{value:e}}function Jp(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function NC(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Cj(t,e){return Jp(t,e.toTimestamp())}function os(t){return Rt(!!t),je.fromTimestamp(function(n){const r=Yo(n);return new un(r.seconds,r.nanos)}(t))}function pw(t,e){return E_(t,e).canonicalString()}function E_(t,e){const n=function(i){return new Mt(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function OC(t){const e=Mt.fromString(t);return Rt(VC(e)),e}function T_(t,e){return pw(t.databaseId,e.path)}function Yv(t,e){const n=OC(e);if(n.get(1)!==t.databaseId.projectId)throw new ke(se.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ke(se.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Ce(LC(n))}function DC(t,e){return pw(t.databaseId,e)}function Pj(t){const e=OC(t);return e.length===4?Mt.emptyPath():LC(e)}function I_(t){return new Mt(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function LC(t){return Rt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _S(t,e,n){return{name:T_(t,e),fields:n.value.mapValue.fields}}function xj(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Ve()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(Rt(p===void 0||typeof p=="string"),Qn.fromBase64String(p||"")):(Rt(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Qn.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&function(d){const p=d.code===void 0?se.UNKNOWN:CC(d.code);return new ke(p,d.message||"")}(a);n=new xC(r,i,s,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yv(t,r.document.name),s=os(r.document.updateTime),a=r.document.createTime?os(r.document.createTime):je.min(),u=new _r({mapValue:{fields:r.document.fields}}),f=Kn.newFoundDocument(i,s,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];n=new up(d,p,f.key,f)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yv(t,r.document),s=r.readTime?os(r.readTime):je.min(),a=Kn.newNoDocument(i,s),u=r.removedTargetIds||[];n=new up([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yv(t,r.document),s=r.removedTargetIds||[];n=new up([],s,i,null)}else{if(!("filter"in e))return Ve();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new wj(i,s),u=r.targetId;n=new PC(u,a)}}return n}function Nj(t,e){let n;if(e instanceof Jf)n={update:_S(t,e.key,e.value)};else if(e instanceof fw)n={delete:T_(t,e.key)};else if(e instanceof sa)n={update:_S(t,e.key,e.data),updateMask:Bj(e.fieldMask)};else{if(!(e instanceof vj))return Ve();n={verify:T_(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const u=a.transform;if(u instanceof Qp)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof xf)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Nf)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Xp)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw Ve()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Cj(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ve()}(t,e.precondition)),n}function Oj(t,e){return t&&t.length>0?(Rt(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?os(i.updateTime):os(s);return a.isEqual(je.min())&&(a=os(s)),new pj(a,i.transformResults||[])}(n,e))):[]}function Dj(t,e){return{documents:[DC(t,e.path)]}}function Lj(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=DC(t,i);const s=function(d){if(d.length!==0)return FC(us.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(p=>function(_){return{field:jl(_.field),direction:Vj(_.dir)}}(p))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const u=w_(t,e.limit);return u!==null&&(n.structuredQuery.limit=u),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function Mj(t){let e=Pj(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Rt(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(v){const _=MC(v);return _ instanceof us&&hC(_)?_.getFilters():[_]}(n.where));let a=[];n.orderBy&&(a=function(v){return v.map(_=>function(x){return new Yp(Bl(x.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(_))}(n.orderBy));let u=null;n.limit&&(u=function(v){let _;return _=typeof v=="object"?v.value:v,Vm(_)?null:_}(n.limit));let f=null;n.startAt&&(f=function(v){const _=!!v.before,b=v.values||[];return new Gp(b,_)}(n.startAt));let d=null;return n.endAt&&(d=function(v){const _=!v.before,b=v.values||[];return new Gp(b,_)}(n.endAt)),ej(e,i,a,s,u,"F",f,d)}function Fj(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ve()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function MC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Bl(n.unaryFilter.field);return mn.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Bl(n.unaryFilter.field);return mn.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Bl(n.unaryFilter.field);return mn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Bl(n.unaryFilter.field);return mn.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Ve()}}(t):t.fieldFilter!==void 0?function(n){return mn.create(Bl(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ve()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return us.create(n.compositeFilter.filters.map(r=>MC(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ve()}}(n.compositeFilter.op))}(t):Ve()}function Vj(t){return Aj[t]}function Uj(t){return Rj[t]}function jj(t){return bj[t]}function jl(t){return{fieldPath:t.canonicalString()}}function Bl(t){return Nn.fromServerFormat(t.fieldPath)}function FC(t){return t instanceof mn?function(n){if(n.op==="=="){if(sS(n.value))return{unaryFilter:{field:jl(n.field),op:"IS_NAN"}};if(iS(n.value))return{unaryFilter:{field:jl(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sS(n.value))return{unaryFilter:{field:jl(n.field),op:"IS_NOT_NAN"}};if(iS(n.value))return{unaryFilter:{field:jl(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:jl(n.field),op:Uj(n.op),value:n.value}}}(t):t instanceof us?function(n){const r=n.getFilters().map(i=>FC(i));return r.length===1?r[0]:{compositeFilter:{op:jj(n.op),filters:r}}}(t):Ve()}function Bj(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function VC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Do{constructor(e,n,r,i,s=je.min(),a=je.min(),u=Qn.EMPTY_BYTE_STRING,f=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=f}withSequenceNumber(e){return new Do(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Do(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Do(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Do(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $j{constructor(e){this.ct=e}}function zj(t){const e=Mj({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?__(e,e.limit,"L"):e}/**
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
 */class Wj{constructor(){this._n=new Hj}addToCollectionParentIndex(e,n){return this._n.add(n),ie.resolve()}getCollectionParents(e,n){return ie.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return ie.resolve()}deleteFieldIndex(e,n){return ie.resolve()}deleteAllFieldIndexes(e){return ie.resolve()}createTargetIndexes(e,n){return ie.resolve()}getDocumentsMatchingTarget(e,n){return ie.resolve(null)}getIndexType(e,n){return ie.resolve(0)}getFieldIndexes(e,n){return ie.resolve([])}getNextCollectionGroupToUpdate(e){return ie.resolve(null)}getMinOffset(e,n){return ie.resolve(Go.min())}getMinOffsetFromCollectionGroup(e,n){return ie.resolve(Go.min())}updateCollectionGroup(e,n,r){return ie.resolve()}updateIndexEntries(e,n){return ie.resolve()}}class Hj{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Dn(Mt.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Dn(Mt.comparator)).toArray()}}/**
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
 */class bu{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new bu(0)}static Ln(){return new bu(-1)}}/**
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
 */class qj{constructor(){this.changes=new Vu(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Kn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?ie.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Kj{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Gj{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ef(r.mutation,i,Dr.empty(),un.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ze()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ze()){const i=La();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=Mc();return s.forEach((u,f)=>{a=a.insert(u,f.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=La();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ze()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,u)=>{n.set(a,u)})})}computeViews(e,n,r,i){let s=Hs();const a=Zc(),u=function(){return Zc()}();return n.forEach((f,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof sa)?s=s.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),ef(p.mutation,d,p.mutation.getFieldMask(),un.now())):a.set(d.key,Dr.empty())}),this.recalculateAndSaveOverlays(e,s).next(f=>(f.forEach((d,p)=>a.set(d,p)),n.forEach((d,p)=>{var v;return u.set(d,new Kj(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),u))}recalculateAndSaveOverlays(e,n){const r=Zc();let i=new zt((a,u)=>a-u),s=Ze();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const u of a)u.keys().forEach(f=>{const d=n.get(f);if(d===null)return;let p=r.get(f)||Dr.empty();p=u.applyToLocalView(d,p),r.set(f,p);const v=(i.get(u.batchId)||Ze()).add(f);i=i.insert(u.batchId,v)})}).next(()=>{const a=[],u=i.getReverseIterator();for(;u.hasNext();){const f=u.getNext(),d=f.key,p=f.value,v=wC();p.forEach(_=>{if(!s.has(_)){const b=bC(n.get(_),r.get(_));b!==null&&v.set(_,b),s=s.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,v))}return ie.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return Ce.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tj(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):ie.resolve(La());let u=-1,f=s;return a.next(d=>ie.forEach(d,(p,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),s.get(p)?ie.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{f=f.insert(p,_)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,f,d,Ze())).next(p=>({batchId:u,changes:_C(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Ce(n)).next(r=>{let i=Mc();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=Mc();return this.indexManager.getCollectionParents(e,s).next(u=>ie.forEach(u,f=>{const d=function(v,_){return new Um(_,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(n,f.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((v,_)=>{a=a.insert(v,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((f,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Kn.newInvalidDocument(p)))});let u=Mc();return a.forEach((f,d)=>{const p=s.get(f);p!==void 0&&ef(p.mutation,d,Dr.empty(),un.now()),Bm(n,d)&&(u=u.insert(f,d))}),u})}}/**
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
 */class Yj{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return ie.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:os(i.createTime)}}(n)),ie.resolve()}getNamedQuery(e,n){return ie.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:zj(i.bundledQuery),readTime:os(i.readTime)}}(n)),ie.resolve()}}/**
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
 */class Qj{constructor(){this.overlays=new zt(Ce.comparator),this.hr=new Map}getOverlay(e,n){return ie.resolve(this.overlays.get(n))}getOverlays(e,n){const r=La();return ie.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),ie.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),ie.resolve()}getOverlaysForCollection(e,n,r){const i=La(),s=n.length+1,a=new Ce(n.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const f=u.getNext().value,d=f.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&f.largestBatchId>r&&i.set(f.getKey(),f)}return ie.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new zt((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=La(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=La(),f=s.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=i)););return ie.resolve(u)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new _j(n,r));let s=this.hr.get(n);s===void 0&&(s=Ze(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class mw{constructor(){this.Pr=new Dn(En.Ir),this.Tr=new Dn(En.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new En(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new En(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new Ce(new Mt([])),r=new En(n,e),i=new En(n,e+1),s=[];return this.Tr.forEachInRange([r,i],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new Ce(new Mt([])),r=new En(n,e),i=new En(n,e+1);let s=Ze();return this.Tr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new En(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class En{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return Ce.comparator(e.key,n.key)||ct(e.pr,n.pr)}static Er(e,n){return ct(e.pr,n.pr)||Ce.comparator(e.key,n.key)}}/**
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
 */class Xj{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Dn(En.Ir)}checkEmpty(e){return ie.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new yj(s,n,r,i);this.mutationQueue.push(a);for(const u of i)this.wr=this.wr.add(new En(u.key,s)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return ie.resolve(a)}lookupMutationBatch(e,n){return ie.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return ie.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ie.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return ie.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new En(n,0),i=new En(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],a=>{const u=this.Sr(a.pr);s.push(u)}),ie.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Dn(ct);return n.forEach(i=>{const s=new En(i,0),a=new En(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],u=>{r=r.add(u.pr)})}),ie.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Ce.isDocumentKey(s)||(s=s.child(""));const a=new En(new Ce(s),0);let u=new Dn(ct);return this.wr.forEachWhile(f=>{const d=f.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(u=u.add(f.pr)),!0)},a),ie.resolve(this.Dr(u))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Rt(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return ie.forEach(n.mutations,i=>{const s=new En(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new En(n,0),i=this.wr.firstAfterOrEqual(r);return ie.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,ie.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Jj{constructor(e){this.vr=e,this.docs=function(){return new zt(Ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return ie.resolve(r?r.document.mutableCopy():Kn.newInvalidDocument(n))}getEntries(e,n){let r=Hs();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Kn.newInvalidDocument(i))}),ie.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Hs();const a=n.path,u=new Ce(a.child("")),f=this.docs.getIteratorFrom(u);for(;f.hasNext();){const{key:d,value:{document:p}}=f.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||M9(L9(p),r)<=0||(i.has(p.key)||Bm(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return ie.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Ve()}Fr(e,n){return ie.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Zj(this)}getSize(e){return ie.resolve(this.size)}}class Zj extends qj{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),ie.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class eB{constructor(e){this.persistence=e,this.Mr=new Vu(n=>lw(n),uw),this.lastRemoteSnapshotVersion=je.min(),this.highestTargetId=0,this.Or=0,this.Nr=new mw,this.targetCount=0,this.Lr=bu.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),ie.resolve()}getLastRemoteSnapshotVersion(e){return ie.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ie.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),ie.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),ie.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new bu(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,ie.resolve()}updateTargetData(e,n){return this.qn(n),ie.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,ie.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((a,u)=>{u.sequenceNumber<=n&&r.get(u.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,u.targetId)),i++)}),ie.waitFor(s).next(()=>i)}getTargetCount(e){return ie.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return ie.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),ie.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),ie.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),ie.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return ie.resolve(r)}containsKey(e,n){return ie.resolve(this.Nr.containsKey(n))}}/**
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
 */class tB{constructor(e,n){this.Br={},this.overlays={},this.kr=new iw(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new eB(this),this.indexManager=new Wj,this.remoteDocumentCache=function(i){return new Jj(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $j(n),this.$r=new Yj(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qj,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new Xj(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Te("MemoryPersistence","Starting transaction:",e);const i=new nB(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return ie.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class nB extends V9{constructor(e){super(),this.currentSequenceNumber=e}}class gw{constructor(e){this.persistence=e,this.zr=new mw,this.jr=null}static Hr(e){return new gw(e)}get Jr(){if(this.jr)return this.jr;throw Ve()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),ie.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),ie.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),ie.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ie.forEach(this.Jr,r=>{const i=Ce.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,je.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return ie.or([()=>ie.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class vw{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Ze(),i=Ze();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vw(e,n.fromCache,r,i)}}/**
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
 */class rB{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iB{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return B3()?8:U9(Mn())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new rB;return this.Ji(e,n,a).next(u=>{if(s.result=u,this.Ui)return this.Yi(e,n,a,u.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(bc()<=nt.DEBUG&&Te("QueryEngine","SDK will not create cache indexes for query:",Ul(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),ie.resolve()):(bc()<=nt.DEBUG&&Te("QueryEngine","Query:",Ul(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(bc()<=nt.DEBUG&&Te("QueryEngine","The SDK decides to create cache indexes for query:",Ul(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ss(n))):ie.resolve())}ji(e,n){if(uS(n))return ie.resolve(null);let r=ss(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=__(n,null,"F"),r=ss(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Ze(...s);return this.zi.getDocuments(e,a).next(u=>this.indexManager.getMinOffset(e,r).next(f=>{const d=this.Zi(n,u);return this.Xi(n,d,a,f.readTime)?this.ji(e,__(n,null,"F")):this.es(e,d,n,f)}))})))}Hi(e,n,r,i){return uS(n)||i.isEqual(je.min())?ie.resolve(null):this.zi.getDocuments(e,r).next(s=>{const a=this.Zi(n,s);return this.Xi(n,a,r,i)?ie.resolve(null):(bc()<=nt.DEBUG&&Te("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ul(n)),this.es(e,a,n,D9(i,-1)).next(u=>u))})}Zi(e,n){let r=new Dn(vC(e));return n.forEach((i,s)=>{Bm(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return bc()<=nt.DEBUG&&Te("QueryEngine","Using full collection scan to execute query:",Ul(n)),this.zi.getDocumentsMatchingQuery(e,n,Go.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class sB{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new zt(ct),this.rs=new Vu(s=>lw(s),uw),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gj(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function oB(t,e,n,r){return new sB(t,e,n,r)}async function UC(t,e){const n=$e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],u=[];let f=Ze();for(const d of i){a.push(d.batchId);for(const p of d.mutations)f=f.add(p.key)}for(const d of s){u.push(d.batchId);for(const p of d.mutations)f=f.add(p.key)}return n.localDocuments.getDocuments(r,f).next(d=>({us:d,removedBatchIds:a,addedBatchIds:u}))})})}function aB(t,e){const n=$e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(u,f,d,p){const v=d.batch,_=v.keys();let b=ie.resolve();return _.forEach(x=>{b=b.next(()=>p.getEntry(f,x)).next(O=>{const F=d.docVersions.get(x);Rt(F!==null),O.version.compareTo(F)<0&&(v.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(f,v))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let f=Ze();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(f=f.add(u.batch.mutations[d].key));return f}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function jC(t){const e=$e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function lB(t,e){const n=$e(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const u=[];e.targetChanges.forEach((p,v)=>{const _=i.get(v);if(!_)return;u.push(n.Qr.removeMatchingKeys(s,p.removedDocuments,v).next(()=>n.Qr.addMatchingKeys(s,p.addedDocuments,v)));let b=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(v)!==null?b=b.withResumeToken(Qn.EMPTY_BYTE_STRING,je.min()).withLastLimboFreeSnapshotVersion(je.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),i=i.insert(v,b),function(O,F,k){return O.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(_,b,p)&&u.push(n.Qr.updateTargetData(s,b))});let f=Hs(),d=Ze();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&u.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),u.push(uB(s,a,e.documentUpdates).next(p=>{f=p.cs,d=p.ls})),!r.isEqual(je.min())){const p=n.Qr.getLastRemoteSnapshotVersion(s).next(v=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));u.push(p)}return ie.waitFor(u).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,f,d)).next(()=>f)}).then(s=>(n.ns=i,s))}function uB(t,e,n){let r=Ze(),i=Ze();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let a=Hs();return n.forEach((u,f)=>{const d=s.get(u);f.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(u)),f.isNoDocument()&&f.version.isEqual(je.min())?(e.removeEntry(u,f.readTime),a=a.insert(u,f)):!d.isValidDocument()||f.version.compareTo(d.version)>0||f.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(f),a=a.insert(u,f)):Te("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",f.version)}),{cs:a,ls:i}})}function cB(t,e){const n=$e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function fB(t,e){const n=$e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,ie.resolve(i)):n.Qr.allocateTargetId(r).next(a=>(i=new Do(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function S_(t,e,n){const r=$e(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Xf(a))throw a;Te("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function wS(t,e,n){const r=$e(t);let i=je.min(),s=Ze();return r.persistence.runTransaction("Execute query","readwrite",a=>function(f,d,p){const v=$e(f),_=v.rs.get(p);return _!==void 0?ie.resolve(v.ns.get(_)):v.Qr.getTargetData(d,p)}(r,a,ss(e)).next(u=>{if(u)return i=u.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,u.targetId).next(f=>{s=f})}).next(()=>r.ts.getDocumentsMatchingQuery(a,e,n?i:je.min(),n?s:Ze())).next(u=>(hB(r,rj(e),u),{documents:u,hs:s})))}function hB(t,e,n){let r=t.ss.get(e)||je.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class ES{constructor(){this.activeTargetIds=uj()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dB{constructor(){this.no=new ES,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new ES,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pB{io(e){}shutdown(){}}/**
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
 */class TS{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Dd=null;function Qv(){return Dd===null?Dd=function(){return 268435456+Math.round(2147483648*Math.random())}():Dd++,"0x"+Dd.toString(16)}/**
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
 */const mB={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gB{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const Wn="WebChannelConnection";class vB extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,a){const u=Qv(),f=this.vo(n,r.toUriEncodedString());Te("RestConnection",`Sending RPC '${n}' ${u}:`,f,i);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,s,a),this.Mo(n,f,d,i).then(p=>(Te("RestConnection",`Received RPC '${n}' ${u}: `,p),p),p=>{throw Iu("RestConnection",`RPC '${n}' ${u} failed with error: `,p,"url: ",f,"request:",i),p})}xo(n,r,i,s,a,u){return this.Co(n,r,i,s,a)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Fu}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}vo(n,r){const i=mB[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Qv();return new Promise((a,u)=>{const f=new Zk;f.setWithCredentials(!0),f.listenOnce(tC.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case op.NO_ERROR:const p=f.getResponseJson();Te(Wn,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),a(p);break;case op.TIMEOUT:Te(Wn,`RPC '${e}' ${s} timed out`),u(new ke(se.DEADLINE_EXCEEDED,"Request time out"));break;case op.HTTP_ERROR:const v=f.getStatus();if(Te(Wn,`RPC '${e}' ${s} failed with status:`,v,"response text:",f.getResponseText()),v>0){let _=f.getResponseJson();Array.isArray(_)&&(_=_[0]);const b=_==null?void 0:_.error;if(b&&b.status&&b.message){const x=function(F){const k=F.toLowerCase().replace(/_/g,"-");return Object.values(se).indexOf(k)>=0?k:se.UNKNOWN}(b.status);u(new ke(x,b.message))}else u(new ke(se.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new ke(se.UNAVAILABLE,"Connection failed."));break;default:Ve()}}finally{Te(Wn,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);Te(Wn,`RPC '${e}' ${s} sending request:`,i),f.send(n,"POST",d,r,15)})}Oo(e,n,r){const i=Qv(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=iC(),u=rC(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.xmlHttpFactory=new eC({})),this.Fo(f.initMessageHeaders,n,r),f.encodeInitMessageHeaders=!0;const p=s.join("");Te(Wn,`Creating RPC '${e}' stream ${i}: ${p}`,f);const v=a.createWebChannel(p,f);let _=!1,b=!1;const x=new gB({lo:F=>{b?Te(Wn,`Not sending because RPC '${e}' stream ${i} is closed:`,F):(_||(Te(Wn,`Opening RPC '${e}' stream ${i} transport.`),v.open(),_=!0),Te(Wn,`RPC '${e}' stream ${i} sending:`,F),v.send(F))},ho:()=>v.close()}),O=(F,k,R)=>{F.listen(k,P=>{try{R(P)}catch(z){setTimeout(()=>{throw z},0)}})};return O(v,Lc.EventType.OPEN,()=>{b||(Te(Wn,`RPC '${e}' stream ${i} transport opened.`),x.mo())}),O(v,Lc.EventType.CLOSE,()=>{b||(b=!0,Te(Wn,`RPC '${e}' stream ${i} transport closed`),x.po())}),O(v,Lc.EventType.ERROR,F=>{b||(b=!0,Iu(Wn,`RPC '${e}' stream ${i} transport errored:`,F),x.po(new ke(se.UNAVAILABLE,"The operation could not be completed")))}),O(v,Lc.EventType.MESSAGE,F=>{var k;if(!b){const R=F.data[0];Rt(!!R);const P=R,z=P.error||((k=P[0])===null||k===void 0?void 0:k.error);if(z){Te(Wn,`RPC '${e}' stream ${i} received error:`,z);const G=z.status;let Z=function(C){const N=sn[C];if(N!==void 0)return CC(N)}(G),E=z.message;Z===void 0&&(Z=se.INTERNAL,E="Unknown error status: "+G+" with message "+z.message),b=!0,x.po(new ke(Z,E)),v.close()}else Te(Wn,`RPC '${e}' stream ${i} received:`,R),x.yo(R)}}),O(u,nC.STAT_EVENT,F=>{F.stat===p_.PROXY?Te(Wn,`RPC '${e}' stream ${i} detected buffering proxy`):F.stat===p_.NOPROXY&&Te(Wn,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{x.fo()},0),x}}function Xv(){return typeof document<"u"?document:null}/**
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
 */function Hm(t){return new kj(t,!0)}/**
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
 */class BC{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Te("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class $C{constructor(e,n,r,i,s,a,u,f){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=f,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new BC(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===se.RESOURCE_EXHAUSTED?(Ws(n.toString()),Ws("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===se.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new ke(se.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class yB extends $C{constructor(e,n,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=xj(this.serializer,e),r=function(s){if(!("targetChange"in s))return je.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?je.min():a.readTime?os(a.readTime):je.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=I_(this.serializer),n.addTarget=function(s,a){let u;const f=a.target;if(u=y_(f)?{documents:Dj(s,f)}:{query:Lj(s,f)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=NC(s,a.resumeToken);const d=w_(s,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(je.min())>0){u.readTime=Jp(s,a.snapshotVersion.toTimestamp());const d=w_(s,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,e);const r=Fj(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=I_(this.serializer),n.removeTarget=e,this.i_(n)}}class _B extends $C{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Rt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=Oj(e.writeResults,e.commitTime),r=os(e.commitTime);return this.listener.A_(r,n)}return Rt(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=I_(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Nj(this.serializer,r))};this.i_(n)}}/**
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
 */class wB extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new ke(se.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,E_(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new ke(se.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.xo(e,E_(n,r),i,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===se.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ke(se.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class EB{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ws(n),this.y_=!1):Te("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class TB{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{r.enqueueAndForget(async()=>{dl(this)&&(Te("RemoteStore","Restarting streams for network reachability change."),await async function(f){const d=$e(f);d.M_.add(4),await eh(d),d.N_.set("Unknown"),d.M_.delete(4),await qm(d)}(this))})}),this.N_=new EB(r,i)}}async function qm(t){if(dl(t))for(const e of t.x_)await e(!0)}async function eh(t){for(const e of t.x_)await e(!1)}function zC(t,e){const n=$e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Ew(n)?ww(n):Uu(n).Xo()&&_w(n,e))}function yw(t,e){const n=$e(t),r=Uu(n);n.F_.delete(e),r.Xo()&&WC(n,e),n.F_.size===0&&(r.Xo()?r.n_():dl(n)&&n.N_.set("Unknown"))}function _w(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(je.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Uu(t).P_(e)}function WC(t,e){t.L_.xe(e),Uu(t).I_(e)}function ww(t){t.L_=new Sj({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Uu(t).start(),t.N_.w_()}function Ew(t){return dl(t)&&!Uu(t).Zo()&&t.F_.size>0}function dl(t){return $e(t).M_.size===0}function HC(t){t.L_=void 0}async function IB(t){t.N_.set("Online")}async function SB(t){t.F_.forEach((e,n)=>{_w(t,e)})}async function AB(t,e){HC(t),Ew(t)?(t.N_.D_(e),ww(t)):t.N_.set("Unknown")}async function RB(t,e,n){if(t.N_.set("Online"),e instanceof xC&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const u of s.targetIds)i.F_.has(u)&&(await i.remoteSyncer.rejectListen(u,a),i.F_.delete(u),i.L_.removeTarget(u))}(t,e)}catch(r){Te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zp(t,r)}else if(e instanceof up?t.L_.Ke(e):e instanceof PC?t.L_.He(e):t.L_.We(e),!n.isEqual(je.min()))try{const r=await jC(t.localStore);n.compareTo(r)>=0&&await function(s,a){const u=s.L_.rt(a);return u.targetChanges.forEach((f,d)=>{if(f.resumeToken.approximateByteSize()>0){const p=s.F_.get(d);p&&s.F_.set(d,p.withResumeToken(f.resumeToken,a))}}),u.targetMismatches.forEach((f,d)=>{const p=s.F_.get(f);if(!p)return;s.F_.set(f,p.withResumeToken(Qn.EMPTY_BYTE_STRING,p.snapshotVersion)),WC(s,f);const v=new Do(p.target,f,d,p.sequenceNumber);_w(s,v)}),s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){Te("RemoteStore","Failed to raise snapshot:",r),await Zp(t,r)}}async function Zp(t,e,n){if(!Xf(e))throw e;t.M_.add(1),await eh(t),t.N_.set("Offline"),n||(n=()=>jC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Te("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await qm(t)})}function qC(t,e){return e().catch(n=>Zp(t,n,e))}async function Km(t){const e=$e(t),n=Qo(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;bB(e);)try{const i=await cB(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,kB(e,i)}catch(i){await Zp(e,i)}KC(e)&&GC(e)}function bB(t){return dl(t)&&t.v_.length<10}function kB(t,e){t.v_.push(e);const n=Qo(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function KC(t){return dl(t)&&!Qo(t).Zo()&&t.v_.length>0}function GC(t){Qo(t).start()}async function CB(t){Qo(t).V_()}async function PB(t){const e=Qo(t);for(const n of t.v_)e.d_(n.mutations)}async function xB(t,e,n){const r=t.v_.shift(),i=hw.from(r,e,n);await qC(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Km(t)}async function NB(t,e){e&&Qo(t).E_&&await async function(r,i){if(function(a){return Ej(a)&&a!==se.ABORTED}(i.code)){const s=r.v_.shift();Qo(r).t_(),await qC(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Km(r)}}(t,e),KC(t)&&GC(t)}async function IS(t,e){const n=$e(t);n.asyncQueue.verifyOperationInProgress(),Te("RemoteStore","RemoteStore received new credentials");const r=dl(n);n.M_.add(3),await eh(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await qm(n)}async function OB(t,e){const n=$e(t);e?(n.M_.delete(2),await qm(n)):e||(n.M_.add(2),await eh(n),n.N_.set("Unknown"))}function Uu(t){return t.B_||(t.B_=function(n,r,i){const s=$e(n);return s.f_(),new yB(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:IB.bind(null,t),To:SB.bind(null,t),Ao:AB.bind(null,t),h_:RB.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Ew(t)?ww(t):t.N_.set("Unknown")):(await t.B_.stop(),HC(t))})),t.B_}function Qo(t){return t.k_||(t.k_=function(n,r,i){const s=$e(n);return s.f_(),new _B(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:CB.bind(null,t),Ao:NB.bind(null,t),R_:PB.bind(null,t),A_:xB.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Km(t)):(await t.k_.stop(),t.v_.length>0&&(Te("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Tw{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new $a,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,u=new Tw(e,n,a,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ke(se.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Iw(t,e){if(Ws("AsyncQueue",`${e}: ${t}`),Xf(t))return new ke(se.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cu{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Ce.comparator(n.key,r.key):(n,r)=>Ce.comparator(n.key,r.key),this.keyedMap=Mc(),this.sortedSet=new zt(this.comparator)}static emptySet(e){return new cu(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cu)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cu;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class SS{constructor(){this.q_=new zt(Ce.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Ve():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ku{constructor(e,n,r,i,s,a,u,f,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=f,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const a=[];return n.forEach(u=>{a.push({type:0,doc:u})}),new ku(e,n,cu.emptySet(n),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jm(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class DB{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class LB{constructor(){this.queries=new Vu(e=>gC(e),jm),this.onlineState="Unknown",this.z_=new Set}}async function MB(t,e){const n=$e(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new DB,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const u=Iw(a,`Initialization of query '${Ul(e.query)}' failed`);return void e.onError(u)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Sw(n)}async function FB(t,e){const n=$e(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const a=s.U_.indexOf(e);a>=0&&(s.U_.splice(a,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VB(t,e){const n=$e(t);let r=!1;for(const i of e){const s=i.query,a=n.queries.get(s);if(a){for(const u of a.U_)u.H_(i)&&(r=!0);a.K_=i}}r&&Sw(n)}function UB(t,e,n){const r=$e(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Sw(t){t.z_.forEach(e=>{e.next()})}var A_,AS;(AS=A_||(A_={})).J_="default",AS.Cache="cache";class jB{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ku(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=ku.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==A_.Cache}}/**
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
 */class YC{constructor(e){this.key=e}}class QC{constructor(e){this.key=e}}class BB{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Ze(),this.mutatedKeys=Ze(),this.Ia=vC(e),this.Ta=new cu(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new SS,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,a=i,u=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,v)=>{const _=i.get(p),b=Bm(this.query,v)?v:null,x=!!_&&this.mutatedKeys.has(_.key),O=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let F=!1;_&&b?_.data.isEqual(b.data)?x!==O&&(r.track({type:3,doc:b}),F=!0):this.Ra(_,b)||(r.track({type:2,doc:b}),F=!0,(f&&this.Ia(b,f)>0||d&&this.Ia(b,d)<0)&&(u=!0)):!_&&b?(r.track({type:0,doc:b}),F=!0):_&&!b&&(r.track({type:1,doc:_}),F=!0,(f||d)&&(u=!0)),F&&(b?(a=a.add(b),s=O?s.add(p):s.delete(p)):(a=a.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:u,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((p,v)=>function(b,x){const O=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ve()}};return O(b)-O(x)}(p.type,v.type)||this.Ia(p.doc,v.doc)),this.Va(r),i=i!=null&&i;const u=n&&!i?this.ma():[],f=this.Pa.size===0&&this.current&&!i?1:0,d=f!==this.ha;return this.ha=f,a.length!==0||d?{snapshot:new ku(this.query,e.Ta,s,a,e.mutatedKeys,f===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:u}:{fa:u}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new SS,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Ze(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new QC(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new YC(r))}),n}pa(e){this.la=e.hs,this.Pa=Ze();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return ku.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class $B{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zB{constructor(e){this.key=e,this.wa=!1}}class WB{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Vu(u=>gC(u),jm),this.Da=new Map,this.Ca=new Set,this.va=new zt(Ce.comparator),this.Fa=new Map,this.Ma=new mw,this.xa={},this.Oa=new Map,this.Na=bu.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function HB(t,e,n=!0){const r=nP(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await XC(r,e,n,!0),i}async function qB(t,e){const n=nP(t);await XC(n,e,!0,!1)}async function XC(t,e,n,r){const i=await fB(t.localStore,ss(e)),s=i.targetId,a=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let u;return r&&(u=await KB(t,e,s,a==="current",i.resumeToken)),t.isPrimaryClient&&n&&zC(t.remoteStore,i),u}async function KB(t,e,n,r,i){t.Ba=(v,_,b)=>async function(O,F,k,R){let P=F.view.da(k);P.Xi&&(P=await wS(O.localStore,F.query,!1).then(({documents:E})=>F.view.da(E,P)));const z=R&&R.targetChanges.get(F.targetId),G=R&&R.targetMismatches.get(F.targetId)!=null,Z=F.view.applyChanges(P,O.isPrimaryClient,z,G);return bS(O,F.targetId,Z.fa),Z.snapshot}(t,v,_,b);const s=await wS(t.localStore,e,!0),a=new BB(e,s.hs),u=a.da(s.documents),f=Zf.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=a.applyChanges(u,t.isPrimaryClient,f);bS(t,n,d.fa);const p=new $B(e,n,a);return t.ba.set(e,p),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),d.snapshot}async function GB(t,e,n){const r=$e(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(a=>!jm(a,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await S_(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&yw(r.remoteStore,i.targetId),R_(r,i.targetId)}).catch(Qf)):(R_(r,i.targetId),await S_(r.localStore,i.targetId,!0))}async function YB(t,e){const n=$e(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),yw(n.remoteStore,r.targetId))}async function QB(t,e,n){const r=r$(t);try{const i=await function(a,u){const f=$e(a),d=un.now(),p=u.reduce((b,x)=>b.add(x.key),Ze());let v,_;return f.persistence.runTransaction("Locally write mutations","readwrite",b=>{let x=Hs(),O=Ze();return f.os.getEntries(b,p).next(F=>{x=F,x.forEach((k,R)=>{R.isValidDocument()||(O=O.add(k))})}).next(()=>f.localDocuments.getOverlayedDocuments(b,x)).next(F=>{v=F;const k=[];for(const R of u){const P=gj(R,v.get(R.key).overlayedDocument);P!=null&&k.push(new sa(R.key,P,uC(P.value.mapValue),Vi.exists(!0)))}return f.mutationQueue.addMutationBatch(b,d,k,u)}).next(F=>{_=F;const k=F.applyToLocalDocumentSet(v,O);return f.documentOverlayCache.saveOverlays(b,F.batchId,k)})}).then(()=>({batchId:_.batchId,changes:_C(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,u,f){let d=a.xa[a.currentUser.toKey()];d||(d=new zt(ct)),d=d.insert(u,f),a.xa[a.currentUser.toKey()]=d}(r,i.batchId,n),await th(r,i.changes),await Km(r.remoteStore)}catch(i){const s=Iw(i,"Failed to persist write");n.reject(s)}}async function JC(t,e){const n=$e(t);try{const r=await lB(n.localStore,e);e.targetChanges.forEach((i,s)=>{const a=n.Fa.get(s);a&&(Rt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.wa=!0:i.modifiedDocuments.size>0?Rt(a.wa):i.removedDocuments.size>0&&(Rt(a.wa),a.wa=!1))}),await th(n,r,e)}catch(r){await Qf(r)}}function RS(t,e,n){const r=$e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,a)=>{const u=a.view.j_(e);u.snapshot&&i.push(u.snapshot)}),function(a,u){const f=$e(a);f.onlineState=u;let d=!1;f.queries.forEach((p,v)=>{for(const _ of v.U_)_.j_(u)&&(d=!0)}),d&&Sw(f)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XB(t,e,n){const r=$e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let a=new zt(Ce.comparator);a=a.insert(s,Kn.newNoDocument(s,je.min()));const u=Ze().add(s),f=new Wm(je.min(),new Map,new zt(ct),a,u);await JC(r,f),r.va=r.va.remove(s),r.Fa.delete(e),Aw(r)}else await S_(r.localStore,e,!1).then(()=>R_(r,e,n)).catch(Qf)}async function JB(t,e){const n=$e(t),r=e.batch.batchId;try{const i=await aB(n.localStore,e);eP(n,r,null),ZC(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await th(n,i)}catch(i){await Qf(i)}}async function ZB(t,e,n){const r=$e(t);try{const i=await function(a,u){const f=$e(a);return f.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return f.mutationQueue.lookupMutationBatch(d,u).next(v=>(Rt(v!==null),p=v.keys(),f.mutationQueue.removeMutationBatch(d,v))).next(()=>f.mutationQueue.performConsistencyCheck(d)).next(()=>f.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>f.localDocuments.getDocuments(d,p))})}(r.localStore,e);eP(r,e,n),ZC(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await th(r,i)}catch(i){await Qf(i)}}function ZC(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function eP(t,e,n){const r=$e(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function R_(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||tP(t,r)})}function tP(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(yw(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Aw(t))}function bS(t,e,n){for(const r of n)r instanceof YC?(t.Ma.addReference(r.key,e),e$(t,r)):r instanceof QC?(Te("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||tP(t,r.key)):Ve()}function e$(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Te("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Aw(t))}function Aw(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new Ce(Mt.fromString(e)),r=t.Na.next();t.Fa.set(r,new zB(n)),t.va=t.va.insert(n,r),zC(t.remoteStore,new Do(ss(cw(n.path)),r,"TargetPurposeLimboResolution",iw.oe))}}async function th(t,e,n){const r=$e(t),i=[],s=[],a=[];r.ba.isEmpty()||(r.ba.forEach((u,f)=>{a.push(r.Ba(f,e,n).then(d=>{if((d||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(f.targetId,d!=null&&d.fromCache?"not-current":"current"),d){i.push(d);const p=vw.Ki(f.targetId,d);s.push(p)}}))}),await Promise.all(a),r.Sa.h_(i),await async function(f,d){const p=$e(f);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>ie.forEach(d,_=>ie.forEach(_.qi,b=>p.persistence.referenceDelegate.addReference(v,_.targetId,b)).next(()=>ie.forEach(_.Qi,b=>p.persistence.referenceDelegate.removeReference(v,_.targetId,b)))))}catch(v){if(!Xf(v))throw v;Te("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const _=v.targetId;if(!v.fromCache){const b=p.ns.get(_),x=b.snapshotVersion,O=b.withLastLimboFreeSnapshotVersion(x);p.ns=p.ns.insert(_,O)}}}(r.localStore,s))}async function t$(t,e){const n=$e(t);if(!n.currentUser.isEqual(e)){Te("SyncEngine","User change. New user:",e.toKey());const r=await UC(n.localStore,e);n.currentUser=e,function(s,a){s.Oa.forEach(u=>{u.forEach(f=>{f.reject(new ke(se.CANCELLED,a))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await th(n,r.us)}}function n$(t,e){const n=$e(t),r=n.Fa.get(e);if(r&&r.wa)return Ze().add(r.key);{let i=Ze();const s=n.Da.get(e);if(!s)return i;for(const a of s){const u=n.ba.get(a);i=i.unionWith(u.view.Ea)}return i}}function nP(t){const e=$e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=JC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=n$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XB.bind(null,e),e.Sa.h_=VB.bind(null,e.eventManager),e.Sa.ka=UB.bind(null,e.eventManager),e}function r$(t){const e=$e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JB.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZB.bind(null,e),e}class kS{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Hm(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return oB(this.persistence,new iB,e.initialUser,this.serializer)}createPersistence(e){return new tB(gw.Hr,this.serializer)}createSharedClientState(e){return new dB}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class i${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>RS(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=t$.bind(null,this.syncEngine),await OB(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LB}()}createDatastore(e){const n=Hm(e.databaseInfo.databaseId),r=function(s){return new vB(s)}(e.databaseInfo);return function(s,a,u,f){return new wB(s,a,u,f)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,u){return new TB(r,i,s,a,u)}(this.localStore,this.datastore,e.asyncQueue,n=>RS(this.syncEngine,n,0),function(){return TS.D()?new TS:new pB}())}createSyncEngine(e,n){return function(i,s,a,u,f,d,p){const v=new WB(i,s,a,u,f,d);return p&&(v.La=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=$e(r);Te("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await eh(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class s${constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Ws("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class o${constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Hn.UNAUTHENTICATED,this.clientId=oC.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Te("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Te("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ke(se.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $a;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Iw(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jv(t,e){t.asyncQueue.verifyOperationInProgress(),Te("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await UC(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function CS(t,e){t.asyncQueue.verifyOperationInProgress();const n=await l$(t);Te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>IS(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>IS(e.remoteStore,i)),t._onlineComponents=e}function a$(t){return t.name==="FirebaseError"?t.code===se.FAILED_PRECONDITION||t.code===se.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function l$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Te("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jv(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!a$(n))throw n;Iu("Error using user provided cache. Falling back to memory cache: "+n),await Jv(t,new kS)}}else Te("FirestoreClient","Using default OfflineComponentProvider"),await Jv(t,new kS);return t._offlineComponents}async function rP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Te("FirestoreClient","Using user provided OnlineComponentProvider"),await CS(t,t._uninitializedComponentsProvider._online)):(Te("FirestoreClient","Using default OnlineComponentProvider"),await CS(t,new i$))),t._onlineComponents}function u$(t){return rP(t).then(e=>e.syncEngine)}async function PS(t){const e=await rP(t),n=e.eventManager;return n.onListen=HB.bind(null,e.syncEngine),n.onUnlisten=GB.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qB.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=YB.bind(null,e.syncEngine),n}/**
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
 */function iP(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const xS=new Map;/**
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
 */function sP(t,e,n){if(!n)throw new ke(se.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function c$(t,e,n,r){if(e===!0&&r===!0)throw new ke(se.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function NS(t){if(!Ce.isDocumentKey(t))throw new ke(se.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function OS(t){if(Ce.isDocumentKey(t))throw new ke(se.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Rw(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Ve()}function Wo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ke(se.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Rw(t);throw new ke(se.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class DS{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ke(se.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ke(se.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}c$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=iP((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ke(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ke(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ke(se.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new DS({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ke(se.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ke(se.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new DS(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new A9;switch(r.type){case"firstParty":return new C9(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ke(se.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xS.get(n);r&&(Te("ComponentProvider","Removing Datastore"),xS.delete(n),r.terminate())}(this),Promise.resolve()}}function f$(t,e,n,r={}){var i;const s=(t=Wo(t,Gm))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Iu("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let u,f;if(typeof r.mockUserToken=="string")u=r.mockUserToken,f=Hn.MOCK_USER;else{u=Tk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new ke(se.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new Hn(d)}t._authCredentials=new R9(new sC(u,f))}}/**
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
 */class Ym{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ym(this.firestore,e,this._query)}}class Vr{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ho(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vr(this.firestore,e,this._key)}}class Ho extends Ym{constructor(e,n,r){super(e,n,cw(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vr(this.firestore,null,new Ce(e))}withConverter(e){return new Ho(this.firestore,e,this._path)}}function LS(t,e,...n){if(t=bt(t),sP("collection","path",e),t instanceof Gm){const r=Mt.fromString(e,...n);return OS(r),new Ho(t,null,r)}{if(!(t instanceof Vr||t instanceof Ho))throw new ke(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Mt.fromString(e,...n));return OS(r),new Ho(t.firestore,null,r)}}function bw(t,e,...n){if(t=bt(t),arguments.length===1&&(e=oC.newId()),sP("doc","path",e),t instanceof Gm){const r=Mt.fromString(e,...n);return NS(r),new Vr(t,null,new Ce(r))}{if(!(t instanceof Vr||t instanceof Ho))throw new ke(se.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Mt.fromString(e,...n));return NS(r),new Vr(t.firestore,t instanceof Ho?t.converter:null,new Ce(r))}}/**
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
 */class h${constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new BC(this,"async_queue_retry"),this.hu=()=>{const n=Xv();n&&Te("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Xv();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Xv();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new $a;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Xf(e))throw e;Te("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Ws("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Tw.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Ve()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function MS(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Cu extends Gm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new h$}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aP(this),this._firestoreClient.terminate()}}function d$(t,e){const n=typeof t=="object"?t:Yf(),r=typeof t=="string"?t:"(default)",i=Xs(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_k("firestore");s&&f$(i,...s)}return i}function oP(t){return t._firestoreClient||aP(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function aP(t){var e,n,r;const i=t._freezeSettings(),s=function(u,f,d,p){return new $9(u,f,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,iP(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new o$(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
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
 */class Pu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pu(Qn.fromBase64String(e))}catch(n){throw new ke(se.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Pu(Qn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Qm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ke(se.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class kw{constructor(e){this._methodName=e}}/**
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
 */class Cw{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ke(se.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ke(se.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ct(this._lat,e._lat)||ct(this._long,e._long)}}/**
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
 */const p$=/^__.*__$/;class m${constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new sa(e,this.data,this.fieldMask,n,this.fieldTransforms):new Jf(e,this.data,n,this.fieldTransforms)}}class lP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new sa(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uP(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ve()}}class Pw{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Pw(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return em(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(uP(this.fu)&&p$.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class g${constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Hm(e)}Fu(e,n,r,i=!1){return new Pw({fu:e,methodName:n,vu:r,path:Nn.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cP(t){const e=t._freezeSettings(),n=Hm(t._databaseId);return new g$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function v$(t,e,n,r,i,s={}){const a=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);xw("Data must be an object, but it was:",a,r);const u=fP(r,a);let f,d;if(s.merge)f=new Dr(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const p=[];for(const v of s.mergeFields){const _=b_(e,v,n);if(!a.contains(_))throw new ke(se.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);dP(p,_)||p.push(_)}f=new Dr(p),d=a.fieldTransforms.filter(v=>f.covers(v.field))}else f=null,d=a.fieldTransforms;return new m$(new _r(u),f,d)}class Xm extends kw{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xm}}function y$(t,e,n,r){const i=t.Fu(1,e,n);xw("Data must be an object, but it was:",i,r);const s=[],a=_r.empty();hl(r,(f,d)=>{const p=Nw(e,f,n);d=bt(d);const v=i.Su(p);if(d instanceof Xm)s.push(p);else{const _=Jm(d,v);_!=null&&(s.push(p),a.set(p,_))}});const u=new Dr(s);return new lP(a,u,i.fieldTransforms)}function _$(t,e,n,r,i,s){const a=t.Fu(1,e,n),u=[b_(e,r,n)],f=[i];if(s.length%2!=0)throw new ke(se.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)u.push(b_(e,s[_])),f.push(s[_+1]);const d=[],p=_r.empty();for(let _=u.length-1;_>=0;--_)if(!dP(d,u[_])){const b=u[_];let x=f[_];x=bt(x);const O=a.Su(b);if(x instanceof Xm)d.push(b);else{const F=Jm(x,O);F!=null&&(d.push(b),p.set(b,F))}}const v=new Dr(d);return new lP(p,v,a.fieldTransforms)}function Jm(t,e){if(hP(t=bt(t)))return xw("Unsupported field value:",e,t),fP(t,e);if(t instanceof kw)return function(r,i){if(!uP(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const u of r){let f=Jm(u,i.bu(a));f==null&&(f={nullValue:"NULL_VALUE"}),s.push(f),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=bt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return cj(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=un.fromDate(r);return{timestampValue:Jp(i.serializer,s)}}if(r instanceof un){const s=new un(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jp(i.serializer,s)}}if(r instanceof Cw)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pu)return{bytesValue:NC(i.serializer,r._byteString)};if(r instanceof Vr){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:pw(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Rw(r)}`)}(t,e)}function fP(t,e){const n={};return aC(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hl(t,(r,i)=>{const s=Jm(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function hP(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof un||t instanceof Cw||t instanceof Pu||t instanceof Vr||t instanceof kw)}function xw(t,e,n){if(!hP(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Rw(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function b_(t,e,n){if((e=bt(e))instanceof Qm)return e._internalPath;if(typeof e=="string")return Nw(t,e);throw em("Field path arguments must be of type string or ",t,!1,void 0,n)}const w$=new RegExp("[~\\*/\\[\\]]");function Nw(t,e,n){if(e.search(w$)>=0)throw em(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Qm(...e.split("."))._internalPath}catch{throw em(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function em(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let u=`Function ${e}() called with invalid data`;n&&(u+=" (via `toFirestore()`)"),u+=". ";let f="";return(s||a)&&(f+=" (found",s&&(f+=` in field ${r}`),a&&(f+=` in document ${i}`),f+=")"),new ke(se.INVALID_ARGUMENT,u+t+f)}function dP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class pP{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vr(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new E$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mP("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class E$ extends pP{data(){return super.data()}}function mP(t,e){return typeof e=="string"?Nw(t,e):e instanceof Qm?e._internalPath:e._delegate._internalPath}/**
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
 */function T$(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ke(se.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class I${convertValue(e,n="none"){switch(tl(e)){case 0:return null;case 1:return e.booleanValue;case 2:return an(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(el(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Ve()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hl(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Cw(an(e.latitude),an(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ow(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(kf(e));default:return null}}convertTimestamp(e){const n=Yo(e);return new un(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Mt.fromString(e);Rt(VC(r));const i=new Cf(r.get(1),r.get(3)),s=new Ce(r.popFirst(5));return i.isEqual(n)||Ws(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function S$(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
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
 */class Vc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gP extends pP{constructor(e,n,r,i,s,a){super(e,n,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new cp(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mP("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class cp extends gP{data(e={}){return super.data(e)}}class A${constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vc(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new cp(this._firestore,this._userDataWriter,r.key,r,new Vc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ke(se.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(u=>{const f=new cp(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Vc(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);return u.doc,{type:"added",doc:f,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(u=>s||u.type!==3).map(u=>{const f=new cp(i._firestore,i._userDataWriter,u.doc.key,u.doc,new Vc(i._snapshot.mutatedKeys.has(u.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:R$(u.type),doc:f,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function R$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ve()}}class vP extends I${constructor(e){super(),this.firestore=e}convertBytes(e){return new Pu(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vr(this.firestore,null,n)}}function b$(t,e,n,...r){t=Wo(t,Vr);const i=Wo(t.firestore,Cu),s=cP(i);let a;return a=typeof(e=bt(e))=="string"||e instanceof Qm?_$(s,"updateDoc",t._key,e,n,r):y$(s,"updateDoc",t._key,e),Ow(i,[a.toMutation(t._key,Vi.exists(!0))])}function k$(t){return Ow(Wo(t.firestore,Cu),[new fw(t._key,Vi.none())])}function C$(t,e){const n=Wo(t.firestore,Cu),r=bw(t),i=S$(t.converter,e);return Ow(n,[v$(cP(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Vi.exists(!1))]).then(()=>r)}function P$(t,...e){var n,r,i;t=bt(t);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||MS(e[a])||(s=e[a],a++);const u={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(MS(e[a])){const v=e[a];e[a]=(n=v.next)===null||n===void 0?void 0:n.bind(v),e[a+1]=(r=v.error)===null||r===void 0?void 0:r.bind(v),e[a+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let f,d,p;if(t instanceof Vr)d=Wo(t.firestore,Cu),p=cw(t._key.path),f={next:v=>{e[a]&&e[a](x$(d,t,v))},error:e[a+1],complete:e[a+2]};else{const v=Wo(t,Ym);d=Wo(v.firestore,Cu),p=v._query;const _=new vP(d);f={next:b=>{e[a]&&e[a](new A$(d,_,v,b))},error:e[a+1],complete:e[a+2]},T$(t._query)}return function(_,b,x,O){const F=new s$(O),k=new jB(b,F,x);return _.asyncQueue.enqueueAndForget(async()=>MB(await PS(_),k)),()=>{F.$a(),_.asyncQueue.enqueueAndForget(async()=>FB(await PS(_),k))}}(oP(d),p,u,f)}function Ow(t,e){return function(r,i){const s=new $a;return r.asyncQueue.enqueueAndForget(async()=>QB(await u$(r),i,s)),s.promise}(oP(t),e)}function x$(t,e,n){const r=n.docs.get(e._key),i=new vP(t);return new gP(t,i,e._key,r,new Vc(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Fu=i})(fl),jr(new Ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),u=new Cu(new b9(r.getProvider("auth-internal")),new x9(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new ke(se.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cf(d.options.projectId,p)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Gn(eS,"4.6.2",e),Gn(eS,"4.6.2","esm2017")})();function Dw(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const N$=yP,_P=new ia("auth","Firebase",yP());/**
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
 */const tm=new Dm("@firebase/auth");function O$(t,...e){tm.logLevel<=nt.WARN&&tm.warn(`Auth (${fl}): ${t}`,...e)}function fp(t,...e){tm.logLevel<=nt.ERROR&&tm.error(`Auth (${fl}): ${t}`,...e)}/**
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
 */function pi(t,...e){throw Mw(t,...e)}function Ui(t,...e){return Mw(t,...e)}function Lw(t,e,n){const r=Object.assign(Object.assign({},N$()),{[e]:n});return new ia("auth","Firebase",r).create(e,{appName:t.name})}function Us(t){return Lw(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function D$(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&pi(t,"argument-error"),Lw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mw(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _P.create(t,...e)}function Fe(t,e,...n){if(!t)throw Mw(e,...n)}function Os(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fp(e),new Error(e)}function qs(t,e){t||Os(e)}/**
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
 */function k_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function L$(){return FS()==="http:"||FS()==="https:"}function FS(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function M$(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(L$()||Ik()||"connection"in navigator)?navigator.onLine:!0}function F$(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class nh{constructor(e,n){this.shortDelay=e,this.longDelay=n,qs(n>e,"Short delay should be less than long delay!"),this.isMobile=F3()||U3()}get(){return M$()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Fw(t,e){qs(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class wP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Os("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Os("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Os("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const V$={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const U$=new nh(3e4,6e4);function oa(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Js(t,e,n,r,i={}){return EP(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const u=Gf(Object.assign({key:t.config.apiKey},a)).slice(1),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode),wP.fetch()(TP(t,t.config.apiHost,n,u),Object.assign({method:e,headers:f,referrerPolicy:"no-referrer"},s))})}async function EP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},V$),e);try{const i=new B$(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ld(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const u=s.ok?a.errorMessage:a.error.message,[f,d]=u.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ld(t,"credential-already-in-use",a);if(f==="EMAIL_EXISTS")throw Ld(t,"email-already-in-use",a);if(f==="USER_DISABLED")throw Ld(t,"user-disabled",a);const p=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Lw(t,p,d);pi(t,p)}}catch(i){if(i instanceof mi)throw i;pi(t,"network-request-failed",{message:String(i)})}}async function rh(t,e,n,r,i={}){const s=await Js(t,e,n,r,i);return"mfaPendingCredential"in s&&pi(t,"multi-factor-auth-required",{_serverResponse:s}),s}function TP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fw(t.config,i):`${t.config.apiScheme}://${i}`}function j$(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class B${constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ui(this.auth,"network-request-failed")),U$.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ld(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ui(t,e,r);return i.customData._tokenResponse=n,i}function VS(t){return t!==void 0&&t.enterprise!==void 0}class $${constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return j$(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function z$(t,e){return Js(t,"GET","/v2/recaptchaConfig",oa(t,e))}/**
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
 */async function W$(t,e){return Js(t,"POST","/v1/accounts:delete",e)}async function IP(t,e){return Js(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function tf(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function H$(t,e=!1){const n=bt(t),r=await n.getIdToken(e),i=Vw(r);Fe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:tf(Zv(i.auth_time)),issuedAtTime:tf(Zv(i.iat)),expirationTime:tf(Zv(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zv(t){return Number(t)*1e3}function Vw(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fp("JWT malformed, contained fewer than 3 sections"),null;try{const i=vk(n);return i?JSON.parse(i):(fp("Failed to decode base64 JWT payload"),null)}catch(i){return fp("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function US(t){const e=Vw(t);return Fe(e,"internal-error"),Fe(typeof e.exp<"u","internal-error"),Fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xu(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof mi&&q$(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function q$({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class K${constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class C_{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=tf(this.lastLoginAt),this.creationTime=tf(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function nm(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xu(t,IP(n,{idToken:r}));Fe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?SP(s.providerUserInfo):[],u=Y$(t.providerData,a),f=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(u!=null&&u.length),p=f?d:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new C_(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,v)}async function G$(t){const e=bt(t);await nm(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Y$(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function SP(t){return t.map(e=>{var{providerId:n}=e,r=Dw(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Q$(t,e){const n=await EP(t,{},async()=>{const r=Gf({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=TP(t,i,"/v1/token",`key=${s}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",wP.fetch()(a,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function X$(t,e){return Js(t,"POST","/v2/accounts:revokeToken",oa(t,e))}/**
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
 */class fu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Fe(e.idToken,"internal-error"),Fe(typeof e.idToken<"u","internal-error"),Fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):US(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Fe(e.length!==0,"internal-error");const n=US(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Q$(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new fu;return r&&(Fe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(Fe(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(Fe(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fu,this.toJSON())}_performRefresh(){return Os("not implemented")}}/**
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
 */function To(t,e){Fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ds{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Dw(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new K$(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new C_(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xu(this,this.stsTokenManager.getToken(this.auth,e));return Fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return H$(this,e)}reload(){return G$(this)}_assign(e){this!==e&&(Fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ds(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nm(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Di(this.auth.app))return Promise.reject(Us(this.auth));const e=await this.getIdToken();return await xu(this,W$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,u,f,d,p;const v=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,b=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,x=(a=n.photoURL)!==null&&a!==void 0?a:void 0,O=(u=n.tenantId)!==null&&u!==void 0?u:void 0,F=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,k=(d=n.createdAt)!==null&&d!==void 0?d:void 0,R=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:P,emailVerified:z,isAnonymous:G,providerData:Z,stsTokenManager:E}=n;Fe(P&&E,e,"internal-error");const I=fu.fromJSON(this.name,E);Fe(typeof P=="string",e,"internal-error"),To(v,e.name),To(_,e.name),Fe(typeof z=="boolean",e,"internal-error"),Fe(typeof G=="boolean",e,"internal-error"),To(b,e.name),To(x,e.name),To(O,e.name),To(F,e.name),To(k,e.name),To(R,e.name);const C=new Ds({uid:P,auth:e,email:_,emailVerified:z,displayName:v,isAnonymous:G,photoURL:x,phoneNumber:b,tenantId:O,stsTokenManager:I,createdAt:k,lastLoginAt:R});return Z&&Array.isArray(Z)&&(C.providerData=Z.map(N=>Object.assign({},N))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new fu;i.updateFromServerResponse(n);const s=new Ds({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nm(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];Fe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?SP(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new fu;u.updateFromIdToken(r);const f=new Ds({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new C_(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(f,d),f}}/**
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
 */const jS=new Map;function Ls(t){qs(t instanceof Function,"Expected a class definition");let e=jS.get(t);return e?(qs(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,jS.set(t,e),e)}/**
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
 */class AP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}AP.type="NONE";const BS=AP;/**
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
 */function hp(t,e,n){return`firebase:${t}:${e}:${n}`}class hu{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=hp(this.userKey,i.apiKey,s),this.fullPersistenceKey=hp("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ds._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hu(Ls(BS),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||Ls(BS);const a=hp(r,e.config.apiKey,e.name);let u=null;for(const d of n)try{const p=await d._get(a);if(p){const v=Ds._fromJSON(e,p);d!==s&&(u=v),s=d;break}}catch{}const f=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!f.length?new hu(s,e,r):(s=f[0],u&&await s._set(a,u.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new hu(s,e,r))}}/**
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
 */function $S(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(RP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PP(e))return"Blackberry";if(xP(e))return"Webos";if(Uw(e))return"Safari";if((e.includes("chrome/")||bP(e))&&!e.includes("edge/"))return"Chrome";if(CP(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function RP(t=Mn()){return/firefox\//i.test(t)}function Uw(t=Mn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function bP(t=Mn()){return/crios\//i.test(t)}function kP(t=Mn()){return/iemobile/i.test(t)}function CP(t=Mn()){return/android/i.test(t)}function PP(t=Mn()){return/blackberry/i.test(t)}function xP(t=Mn()){return/webos/i.test(t)}function Zm(t=Mn()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function J$(t=Mn()){var e;return Zm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Z$(){return j3()&&document.documentMode===10}function NP(t=Mn()){return Zm(t)||CP(t)||xP(t)||PP(t)||/windows phone/i.test(t)||kP(t)}function ez(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function OP(t,e=[]){let n;switch(t){case"Browser":n=$S(Mn());break;case"Worker":n=`${$S(Mn())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fl}/${r}`}/**
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
 */class tz{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,u)=>{try{const f=e(s);a(f)}catch(f){u(f)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function nz(t,e={}){return Js(t,"GET","/v2/passwordPolicy",oa(t,e))}/**
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
 */const rz=6;class iz{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:rz,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,u;const f={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,f),this.validatePasswordCharacterOptions(e,f),f.isValid&&(f.isValid=(n=f.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),f.isValid&&(f.isValid=(r=f.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),f.isValid&&(f.isValid=(i=f.containsLowercaseLetter)!==null&&i!==void 0?i:!0),f.isValid&&(f.isValid=(s=f.containsUppercaseLetter)!==null&&s!==void 0?s:!0),f.isValid&&(f.isValid=(a=f.containsNumericCharacter)!==null&&a!==void 0?a:!0),f.isValid&&(f.isValid=(u=f.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),f}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class sz{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zS(this),this.idTokenSubscription=new zS(this),this.beforeStateQueue=new tz(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_P,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ls(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await hu.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await IP(this,{idToken:e}),r=await Ds._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Di(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,f=await this.tryRedirectSignIn(e);(!a||a===u)&&(f!=null&&f.user)&&(i=f.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nm(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=F$()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Di(this.app))return Promise.reject(Us(this));const n=e?bt(e):null;return n&&Fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Di(this.app)?Promise.reject(Us(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Di(this.app)?Promise.reject(Us(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ls(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nz(this),n=new iz(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ia("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await X$(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ls(e)||this._popupRedirectResolver;Fe(n,this,"argument-error"),this.redirectPersistenceManager=await hu.create(this,[Ls(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(Fe(u,this,"internal-error"),u.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const f=e.addObserver(n,r,i);return()=>{a=!0,f()}}else{const f=e.addObserver(n);return()=>{a=!0,f()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&O$(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function aa(t){return bt(t)}class zS{constructor(e){this.auth=e,this.observer=null,this.addObserver=q3(n=>this.observer=n)}get next(){return Fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let eg={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oz(t){eg=t}function DP(t){return eg.loadJS(t)}function az(){return eg.recaptchaEnterpriseScript}function lz(){return eg.gapiScript}function uz(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cz="recaptcha-enterprise",fz="NO_RECAPTCHA";class hz{constructor(e){this.type=cz,this.auth=aa(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,u)=>{z$(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new $$(f);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(f=>{u(f)})})}function i(s,a,u){const f=window.grecaptcha;VS(f)?f.enterprise.ready(()=>{f.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(fz)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(u=>{if(!n&&VS(window.grecaptcha))i(u,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let f=az();f.length!==0&&(f+=u),DP(f).then(()=>{i(u,s,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function WS(t,e,n,r=!1){const i=new hz(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function P_(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await WS(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await WS(t,e,n,n==="getOobCode");return r(t,a)}else return Promise.reject(s)})}/**
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
 */function dz(t,e){const n=Xs(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Af(s,e??{}))return i;pi(i,"already-initialized")}return n.initialize({options:e})}function pz(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ls);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mz(t,e,n){const r=aa(t);Fe(r._canInitEmulator,r,"emulator-config-failed"),Fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=LP(e),{host:a,port:u}=gz(e),f=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${a}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),vz()}function LP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gz(t){const e=LP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:HS(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:HS(a)}}}function HS(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function vz(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class jw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Os("not implemented")}_getIdTokenResponse(e){return Os("not implemented")}_linkToIdToken(e,n){return Os("not implemented")}_getReauthenticationResolver(e){return Os("not implemented")}}async function yz(t,e){return Js(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _z(t,e){return rh(t,"POST","/v1/accounts:signInWithPassword",oa(t,e))}/**
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
 */async function wz(t,e){return rh(t,"POST","/v1/accounts:signInWithEmailLink",oa(t,e))}async function Ez(t,e){return rh(t,"POST","/v1/accounts:signInWithEmailLink",oa(t,e))}/**
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
 */class Of extends jw{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Of(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Of(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return P_(e,n,"signInWithPassword",_z);case"emailLink":return wz(e,{email:this._email,oobCode:this._password});default:pi(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return P_(e,r,"signUpPassword",yz);case"emailLink":return Ez(e,{idToken:n,email:this._email,oobCode:this._password});default:pi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function du(t,e){return rh(t,"POST","/v1/accounts:signInWithIdp",oa(t,e))}/**
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
 */const Tz="http://localhost";class nl extends jw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new nl(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pi("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Dw(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new nl(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return du(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,du(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,du(e,n)}buildRequest(){const e={requestUri:Tz,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gf(n)}return e}}/**
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
 */function Iz(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Sz(t){const e=Oc(Dc(t)).link,n=e?Oc(Dc(e)).deep_link_id:null,r=Oc(Dc(t)).deep_link_id;return(r?Oc(Dc(r)).link:null)||r||n||e||t}class Bw{constructor(e){var n,r,i,s,a,u;const f=Oc(Dc(e)),d=(n=f.apiKey)!==null&&n!==void 0?n:null,p=(r=f.oobCode)!==null&&r!==void 0?r:null,v=Iz((i=f.mode)!==null&&i!==void 0?i:null);Fe(d&&p&&v,"argument-error"),this.apiKey=d,this.operation=v,this.code=p,this.continueUrl=(s=f.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=f.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=f.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const n=Sz(e);try{return new Bw(n)}catch{return null}}}/**
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
 */class ju{constructor(){this.providerId=ju.PROVIDER_ID}static credential(e,n){return Of._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bw.parseLink(n);return Fe(r,"argument-error"),Of._fromEmailAndCode(e,r.code,r.tenantId)}}ju.PROVIDER_ID="password";ju.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ju.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $w{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ih extends $w{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Cs extends ih{constructor(){super("facebook.com")}static credential(e){return nl._fromParams({providerId:Cs.PROVIDER_ID,signInMethod:Cs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cs.credentialFromTaggedObject(e)}static credentialFromError(e){return Cs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cs.credential(e.oauthAccessToken)}catch{return null}}}Cs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cs.PROVIDER_ID="facebook.com";/**
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
 */class Ps extends ih{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return nl._fromParams({providerId:Ps.PROVIDER_ID,signInMethod:Ps.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ps.credentialFromTaggedObject(e)}static credentialFromError(e){return Ps.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ps.credential(n,r)}catch{return null}}}Ps.GOOGLE_SIGN_IN_METHOD="google.com";Ps.PROVIDER_ID="google.com";/**
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
 */class Co extends ih{constructor(){super("github.com")}static credential(e){return nl._fromParams({providerId:Co.PROVIDER_ID,signInMethod:Co.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Co.credentialFromTaggedObject(e)}static credentialFromError(e){return Co.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Co.credential(e.oauthAccessToken)}catch{return null}}}Co.GITHUB_SIGN_IN_METHOD="github.com";Co.PROVIDER_ID="github.com";/**
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
 */class Po extends ih{constructor(){super("twitter.com")}static credential(e,n){return nl._fromParams({providerId:Po.PROVIDER_ID,signInMethod:Po.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Po.credentialFromTaggedObject(e)}static credentialFromError(e){return Po.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Po.credential(n,r)}catch{return null}}}Po.TWITTER_SIGN_IN_METHOD="twitter.com";Po.PROVIDER_ID="twitter.com";/**
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
 */async function Az(t,e){return rh(t,"POST","/v1/accounts:signUp",oa(t,e))}/**
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
 */class rl{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ds._fromIdTokenResponse(e,r,i),a=qS(r);return new rl({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qS(r);return new rl({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qS(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class rm extends mi{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,rm.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new rm(e,n,r,i)}}function MP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?rm._fromErrorAndOperation(t,s,e,r):s})}async function Rz(t,e,n=!1){const r=await xu(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rl._forOperation(t,"link",r)}/**
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
 */async function bz(t,e,n=!1){const{auth:r}=t;if(Di(r.app))return Promise.reject(Us(r));const i="reauthenticate";try{const s=await xu(t,MP(r,i,e,t),n);Fe(s.idToken,r,"internal-error");const a=Vw(s.idToken);Fe(a,r,"internal-error");const{sub:u}=a;return Fe(t.uid===u,r,"user-mismatch"),rl._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&pi(r,"user-mismatch"),s}}/**
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
 */async function FP(t,e,n=!1){if(Di(t.app))return Promise.reject(Us(t));const r="signIn",i=await MP(t,r,e),s=await rl._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function kz(t,e){return FP(aa(t),e)}/**
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
 */async function VP(t){const e=aa(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Cz(t,e,n){if(Di(t.app))return Promise.reject(Us(t));const r=aa(t),a=await P_(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Az).catch(f=>{throw f.code==="auth/password-does-not-meet-requirements"&&VP(t),f}),u=await rl._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(u.user),u}function Pz(t,e,n){return Di(t.app)?Promise.reject(Us(t)):kz(bt(t),ju.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&VP(t),r})}/**
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
 */async function xz(t,e){return Js(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Nz(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=bt(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},a=await xu(r,xz(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const u=r.providerData.find(({providerId:f})=>f==="password");u&&(u.displayName=r.displayName,u.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Oz(t,e,n,r){return bt(t).onIdTokenChanged(e,n,r)}function Dz(t,e,n){return bt(t).beforeAuthStateChanged(e,n)}function Lz(t,e,n,r){return bt(t).onAuthStateChanged(e,n,r)}function Mz(t){return bt(t).signOut()}const im="__sak";/**
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
 */class UP{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(im,"1"),this.storage.removeItem(im),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Fz(){const t=Mn();return Uw(t)||Zm(t)}const Vz=1e3,Uz=10;class jP extends UP{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Fz()&&ez(),this.fallbackToPolling=NP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,u,f)=>{this.notifyListeners(a,f)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);Z$()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Uz):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jP.type="LOCAL";const jz=jP;/**
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
 */class BP extends UP{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}BP.type="SESSION";const $P=BP;/**
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
 */function Bz(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class tg{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new tg(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(a).map(async d=>d(n.origin,s)),f=await Bz(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tg.receivers=[];/**
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
 */function zw(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class $z{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((u,f)=>{const d=zw("",20);i.port1.start();const p=setTimeout(()=>{f(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(v){const _=v;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(_.data.response);break;default:clearTimeout(p),clearTimeout(s),f(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function as(){return window}function zz(t){as().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function zP(){return typeof as().WorkerGlobalScope<"u"&&typeof as().importScripts=="function"}async function Wz(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Hz(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qz(){return zP()?self:null}/**
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
 */const WP="firebaseLocalStorageDb",Kz=1,sm="firebaseLocalStorage",HP="fbase_key";class sh{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ng(t,e){return t.transaction([sm],e?"readwrite":"readonly").objectStore(sm)}function Gz(){const t=indexedDB.deleteDatabase(WP);return new sh(t).toPromise()}function x_(){const t=indexedDB.open(WP,Kz);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sm,{keyPath:HP})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sm)?e(r):(r.close(),await Gz(),e(await x_()))})})}async function KS(t,e,n){const r=ng(t,!0).put({[HP]:e,value:n});return new sh(r).toPromise()}async function Yz(t,e){const n=ng(t,!1).get(e),r=await new sh(n).toPromise();return r===void 0?null:r.value}function GS(t,e){const n=ng(t,!0).delete(e);return new sh(n).toPromise()}const Qz=800,Xz=3;class qP{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await x_(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xz)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zP()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tg._getInstance(qz()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Wz(),!this.activeServiceWorker)return;this.sender=new $z(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Hz()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await x_();return await KS(e,im,"1"),await GS(e,im),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>KS(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Yz(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>GS(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ng(i,!1).getAll();return new sh(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qz)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qP.type="LOCAL";const Jz=qP;new nh(3e4,6e4);/**
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
 */function KP(t,e){return e?Ls(e):(Fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ww extends jw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return du(e,this._buildIdpRequest())}_linkToIdToken(e,n){return du(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return du(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zz(t){return FP(t.auth,new Ww(t),t.bypassAuthState)}function e8(t){const{auth:e,user:n}=t;return Fe(n,e,"internal-error"),bz(n,new Ww(t),t.bypassAuthState)}async function t8(t){const{auth:e,user:n}=t;return Fe(n,e,"internal-error"),Rz(n,new Ww(t),t.bypassAuthState)}/**
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
 */class GP{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:u}=e;if(a){this.reject(a);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(f))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zz;case"linkViaPopup":case"linkViaRedirect":return t8;case"reauthViaPopup":case"reauthViaRedirect":return e8;default:pi(this.auth,"internal-error")}}resolve(e){qs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){qs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const n8=new nh(2e3,1e4);async function YS(t,e,n){if(Di(t.app))return Promise.reject(Ui(t,"operation-not-supported-in-this-environment"));const r=aa(t);D$(t,e,$w);const i=KP(r,n);return new Ma(r,"signInViaPopup",e,i).executeNotNull()}class Ma extends GP{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ma.currentPopupAction&&Ma.currentPopupAction.cancel(),Ma.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Fe(e,this.auth,"internal-error"),e}async onExecution(){qs(this.filter.length===1,"Popup operations only handle one event");const e=zw();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ui(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ui(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ma.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ui(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,n8.get())};e()}}Ma.currentPopupAction=null;/**
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
 */const r8="pendingRedirect",dp=new Map;class i8 extends GP{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=dp.get(this.auth._key());if(!e){try{const r=await s8(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}dp.set(this.auth._key(),e)}return this.bypassAuthState||dp.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s8(t,e){const n=l8(e),r=a8(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function o8(t,e){dp.set(t._key(),e)}function a8(t){return Ls(t._redirectPersistence)}function l8(t){return hp(r8,t.config.apiKey,t.name)}async function u8(t,e,n=!1){if(Di(t.app))return Promise.reject(Us(t));const r=aa(t),i=KP(r,e),a=await new i8(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const c8=10*60*1e3;class f8{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!h8(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!YP(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ui(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=c8&&this.cachedEventUids.clear(),this.cachedEventUids.has(QS(e))}saveEventToCache(e){this.cachedEventUids.add(QS(e)),this.lastProcessedEventTime=Date.now()}}function QS(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function YP({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function h8(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return YP(t);default:return!1}}/**
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
 */async function d8(t,e={}){return Js(t,"GET","/v1/projects",e)}/**
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
 */const p8=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,m8=/^https?/;async function g8(t){if(t.config.emulator)return;const{authorizedDomains:e}=await d8(t);for(const n of e)try{if(v8(n))return}catch{}pi(t,"unauthorized-domain")}function v8(t){const e=k_(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!m8.test(n))return!1;if(p8.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const y8=new nh(3e4,6e4);function XS(){const t=as().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _8(t){return new Promise((e,n)=>{var r,i,s;function a(){XS(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{XS(),n(Ui(t,"network-request-failed"))},timeout:y8.get()})}if(!((i=(r=as().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=as().gapi)===null||s===void 0)&&s.load)a();else{const u=uz("iframefcb");return as()[u]=()=>{gapi.load?a():n(Ui(t,"network-request-failed"))},DP(`${lz()}?onload=${u}`).catch(f=>n(f))}}).catch(e=>{throw pp=null,e})}let pp=null;function w8(t){return pp=pp||_8(t),pp}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const E8=new nh(5e3,15e3),T8="__/auth/iframe",I8="emulator/auth/iframe",S8={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},A8=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function R8(t){const e=t.config;Fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fw(e,I8):`https://${t.config.authDomain}/${T8}`,r={apiKey:e.apiKey,appName:t.name,v:fl},i=A8.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Gf(r).slice(1)}`}async function b8(t){const e=await w8(t),n=as().gapi;return Fe(n,t,"internal-error"),e.open({where:document.body,url:R8(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:S8,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=Ui(t,"network-request-failed"),u=as().setTimeout(()=>{s(a)},E8.get());function f(){as().clearTimeout(u),i(r)}r.ping(f).then(f,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const k8={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},C8=500,P8=600,x8="_blank",N8="http://localhost";class JS{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function O8(t,e,n,r=C8,i=P8){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const f=Object.assign(Object.assign({},k8),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Mn().toLowerCase();n&&(u=bP(d)?x8:n),RP(d)&&(e=e||N8,f.scrollbars="yes");const p=Object.entries(f).reduce((_,[b,x])=>`${_}${b}=${x},`,"");if(J$(d)&&u!=="_self")return D8(e||"",u),new JS(null);const v=window.open(e||"",u,p);Fe(v,t,"popup-blocked");try{v.focus()}catch{}return new JS(v)}function D8(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const L8="__/auth/handler",M8="emulator/auth/handler",F8=encodeURIComponent("fac");async function ZS(t,e,n,r,i,s){Fe(t.config.authDomain,t,"auth-domain-config-required"),Fe(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fl,eventId:i};if(e instanceof $w){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",H3(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,v]of Object.entries({}))a[p]=v}if(e instanceof ih){const p=e.getScopes().filter(v=>v!=="");p.length>0&&(a.scopes=p.join(","))}t.tenantId&&(a.tid=t.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const f=await t._getAppCheckToken(),d=f?`#${F8}=${encodeURIComponent(f)}`:"";return`${V8(t)}?${Gf(u).slice(1)}${d}`}function V8({config:t}){return t.emulator?Fw(t,M8):`https://${t.authDomain}/${L8}`}/**
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
 */const ey="webStorageSupport";class U8{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$P,this._completeRedirectFn=u8,this._overrideRedirectResult=o8}async _openPopup(e,n,r,i){var s;qs((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await ZS(e,n,r,k_(),i);return O8(e,a,zw())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await ZS(e,n,r,k_(),i);return zz(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(qs(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await b8(e),r=new f8(e);return n.register("authEvent",i=>(Fe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ey,{type:ey},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ey];a!==void 0&&n(!!a),pi(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=g8(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return NP()||Uw()||Zm()}}const j8=U8;var eA="@firebase/auth",tA="1.7.3";/**
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
 */class B8{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $8(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function z8(t){jr(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;Fe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const f={apiKey:a,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OP(t)},d=new sz(r,i,s,f);return pz(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new Ar("auth-internal",e=>{const n=aa(e.getProvider("auth").getImmediate());return(r=>new B8(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(eA,tA,$8(t)),Gn(eA,tA,"esm2017")}/**
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
 */const W8=5*60,H8=Ek("authIdTokenMaxAge")||W8;let nA=null;const q8=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>H8)return;const i=n==null?void 0:n.token;nA!==i&&(nA=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function K8(t=Yf()){const e=Xs(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dz(t,{popupRedirectResolver:j8,persistence:[Jz,jz,$P]}),r=Ek("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=q8(s.toString());Dz(n,a,()=>a(n.currentUser)),Oz(n,u=>a(u))}}const i=yk("auth");return i&&mz(n,`http://${i}`),n}function G8(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oz({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ui("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",G8().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});z8("Browser");/**
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
 */const QP="firebasestorage.googleapis.com",XP="storageBucket",Y8=2*60*1e3,Q8=10*60*1e3;/**
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
 */class Xt extends mi{constructor(e,n,r=0){super(ty(e),`Firebase Storage: ${n} (${ty(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ty(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qt;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qt||(Qt={}));function ty(t){return"storage/"+t}function Hw(){const t="An unknown error occurred, please check the error payload for server response.";return new Xt(Qt.UNKNOWN,t)}function X8(t){return new Xt(Qt.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function J8(t){return new Xt(Qt.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Z8(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xt(Qt.UNAUTHENTICATED,t)}function e7(){return new Xt(Qt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function t7(t){return new Xt(Qt.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function n7(){return new Xt(Qt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function r7(){return new Xt(Qt.CANCELED,"User canceled the upload/download.")}function i7(t){return new Xt(Qt.INVALID_URL,"Invalid URL '"+t+"'.")}function s7(t){return new Xt(Qt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function o7(){return new Xt(Qt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+XP+"' property when initializing the app?")}function a7(){return new Xt(Qt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function l7(){return new Xt(Qt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function u7(t){return new Xt(Qt.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function N_(t){return new Xt(Qt.INVALID_ARGUMENT,t)}function JP(){return new Xt(Qt.APP_DELETED,"The Firebase app was deleted.")}function c7(t){return new Xt(Qt.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nf(t,e){return new Xt(Qt.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function kc(t){throw new Xt(Qt.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Lr{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Lr.makeFromUrl(e,n)}catch{return new Lr(e,"")}if(r.path==="")return r;throw s7(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+i+a,"i"),f={bucket:1,path:3};function d(z){z.path_=decodeURIComponent(z.path)}const p="v[A-Za-z0-9_]+",v=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",b=new RegExp(`^https?://${v}/${p}/b/${i}/o${_}`,"i"),x={bucket:1,path:3},O=n===QP?"(?:storage.googleapis.com|storage.cloud.google.com)":n,F="([^?#]*)",k=new RegExp(`^https?://${O}/${i}/${F}`,"i"),P=[{regex:u,indices:f,postModify:s},{regex:b,indices:x,postModify:d},{regex:k,indices:{bucket:1,path:2},postModify:d}];for(let z=0;z<P.length;z++){const G=P[z],Z=G.regex.exec(e);if(Z){const E=Z[G.indices.bucket];let I=Z[G.indices.path];I||(I=""),r=new Lr(E,I),G.postModify(r);break}}if(r==null)throw i7(e);return r}}class f7{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function h7(t,e,n){let r=1,i=null,s=null,a=!1,u=0;function f(){return u===2}let d=!1;function p(...F){d||(d=!0,e.apply(null,F))}function v(F){i=setTimeout(()=>{i=null,t(b,f())},F)}function _(){s&&clearTimeout(s)}function b(F,...k){if(d){_();return}if(F){_(),p.call(null,F,...k);return}if(f()||a){_(),p.call(null,F,...k);return}r<64&&(r*=2);let P;u===1?(u=2,P=0):P=(r+Math.random())*1e3,v(P)}let x=!1;function O(F){x||(x=!0,_(),!d&&(i!==null?(F||(u=2),clearTimeout(i),v(0)):F||(u=1)))}return v(0),s=setTimeout(()=>{a=!0,O(!0)},n),O}function d7(t){t(!1)}/**
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
 */function p7(t){return t!==void 0}function m7(t){return typeof t=="object"&&!Array.isArray(t)}function qw(t){return typeof t=="string"||t instanceof String}function rA(t){return Kw()&&t instanceof Blob}function Kw(){return typeof Blob<"u"}function iA(t,e,n,r){if(r<e)throw N_(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw N_(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Gw(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function ZP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var za;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(za||(za={}));/**
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
 */function g7(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class v7{constructor(e,n,r,i,s,a,u,f,d,p,v,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=f,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=v,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,x)=>{this.resolve_=b,this.reject_=x,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Md(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=u=>{const f=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(f,d)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const u=s.getErrorCode()===za.NO_ERROR,f=s.getStatus();if(!u||g7(f,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===za.ABORT;r(!1,new Md(!1,null,p));return}const d=this.successCodes_.indexOf(f)!==-1;r(!0,new Md(d,s))})},n=(r,i)=>{const s=this.resolve_,a=this.reject_,u=i.connection;if(i.wasSuccessCode)try{const f=this.callback_(u,u.getResponse());p7(f)?s(f):s()}catch(f){a(f)}else if(u!==null){const f=Hw();f.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,f)):a(f)}else if(i.canceled){const f=this.appDelete_?JP():r7();a(f)}else{const f=n7();a(f)}};this.canceled_?n(!1,new Md(!1,null,!0)):this.backoffId_=h7(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&d7(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Md{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function y7(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function _7(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function w7(t,e){e&&(t["X-Firebase-GMPID"]=e)}function E7(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function T7(t,e,n,r,i,s,a=!0){const u=ZP(t.urlParams),f=t.url+u,d=Object.assign({},t.headers);return w7(d,e),y7(d,n),_7(d,s),E7(d,r),new v7(f,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,a)}/**
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
 */function I7(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function S7(...t){const e=I7();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Kw())return new Blob(t);throw new Xt(Qt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function A7(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function R7(t){if(typeof atob>"u")throw u7("base-64");return atob(t)}/**
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
 */const ts={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ny{constructor(e,n){this.data=e,this.contentType=n||null}}function b7(t,e){switch(t){case ts.RAW:return new ny(ex(e));case ts.BASE64:case ts.BASE64URL:return new ny(tx(t,e));case ts.DATA_URL:return new ny(C7(e),P7(e))}throw Hw()}function ex(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=t.charCodeAt(++n);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function k7(t){let e;try{e=decodeURIComponent(t)}catch{throw nf(ts.DATA_URL,"Malformed data URL.")}return ex(e)}function tx(t,e){switch(t){case ts.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw nf(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case ts.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw nf(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=R7(e)}catch(i){throw i.message.includes("polyfill")?i:nf(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class nx{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw nf(ts.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=x7(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function C7(t){const e=new nx(t);return e.base64?tx(ts.BASE64,e.rest):k7(e.rest)}function P7(t){return new nx(t).contentType}function x7(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class xo{constructor(e,n){let r=0,i="";rA(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(rA(this.data_)){const r=this.data_,i=A7(r,e,n);return i===null?null:new xo(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new xo(r,!0)}}static getBlob(...e){if(Kw()){const n=e.map(r=>r instanceof xo?r.data_:r);return new xo(S7.apply(null,n))}else{const n=e.map(a=>qw(a)?b7(ts.RAW,a).data:a.data_);let r=0;n.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(a=>{for(let u=0;u<a.length;u++)i[s++]=a[u]}),new xo(i,!0)}}uploadData(){return this.data_}}/**
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
 */function rx(t){let e;try{e=JSON.parse(t)}catch{return null}return m7(e)?e:null}/**
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
 */function N7(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function O7(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ix(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function D7(t,e){return e}class nr{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||D7}}let Fd=null;function L7(t){return!qw(t)||t.length<2?t:ix(t)}function sx(){if(Fd)return Fd;const t=[];t.push(new nr("bucket")),t.push(new nr("generation")),t.push(new nr("metageneration")),t.push(new nr("name","fullPath",!0));function e(s,a){return L7(a)}const n=new nr("name");n.xform=e,t.push(n);function r(s,a){return a!==void 0?Number(a):a}const i=new nr("size");return i.xform=r,t.push(i),t.push(new nr("timeCreated")),t.push(new nr("updated")),t.push(new nr("md5Hash",null,!0)),t.push(new nr("cacheControl",null,!0)),t.push(new nr("contentDisposition",null,!0)),t.push(new nr("contentEncoding",null,!0)),t.push(new nr("contentLanguage",null,!0)),t.push(new nr("contentType",null,!0)),t.push(new nr("metadata","customMetadata",!0)),Fd=t,Fd}function M7(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Lr(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function F7(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const a=n[s];r[a.local]=a.xform(r,e[a.server])}return M7(r,t),r}function ox(t,e,n){const r=rx(e);return r===null?null:F7(t,r,n)}function V7(t,e,n,r){const i=rx(e);if(i===null||!qw(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(d=>{const p=t.bucket,v=t.fullPath,_="/b/"+a(p)+"/o/"+a(v),b=Gw(_,n,r),x=ZP({alt:"media",token:d});return b+x})[0]}function U7(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ax{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function lx(t){if(!t)throw Hw()}function j7(t,e){function n(r,i){const s=ox(t,i,e);return lx(s!==null),s}return n}function B7(t,e){function n(r,i){const s=ox(t,i,e);return lx(s!==null),V7(s,i,t.host,t._protocol)}return n}function ux(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=e7():i=Z8():n.getStatus()===402?i=J8(t.bucket):n.getStatus()===403?i=t7(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function $7(t){const e=ux(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=X8(t.path)),s.serverResponse=i.serverResponse,s}return n}function z7(t,e,n){const r=e.fullServerUrl(),i=Gw(r,t.host,t._protocol),s="GET",a=t.maxOperationRetryTime,u=new ax(i,s,B7(t,n),a);return u.errorHandler=$7(e),u}function W7(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function H7(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=W7(null,e)),r}function q7(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let P="";for(let z=0;z<2;z++)P=P+Math.random().toString().slice(2);return P}const f=u();a["Content-Type"]="multipart/related; boundary="+f;const d=H7(e,r,i),p=U7(d,n),v="--"+f+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+f+`\r
Content-Type: `+d.contentType+`\r
\r
`,_=`\r
--`+f+"--",b=xo.getBlob(v,r,_);if(b===null)throw a7();const x={name:d.fullPath},O=Gw(s,t.host,t._protocol),F="POST",k=t.maxUploadRetryTime,R=new ax(O,F,j7(t,n),k);return R.urlParams=x,R.headers=a,R.body=b.uploadData(),R.errorHandler=ux(e),R}class K7{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=za.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=za.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=za.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw kc("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw kc("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw kc("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw kc("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw kc("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class G7 extends K7{initXhr(){this.xhr_.responseType="text"}}function cx(){return new G7}/**
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
 */class il{constructor(e,n){this._service=e,n instanceof Lr?this._location=n:this._location=Lr.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new il(e,n)}get root(){const e=new Lr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ix(this._location.path)}get storage(){return this._service}get parent(){const e=N7(this._location.path);if(e===null)return null;const n=new Lr(this._location.bucket,e);return new il(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw c7(e)}}function Y7(t,e,n){t._throwIfRoot("uploadBytes");const r=q7(t.storage,t._location,sx(),new xo(e,!0),n);return t.storage.makeRequestWithTokens(r,cx).then(i=>({metadata:i,ref:t}))}function Q7(t){t._throwIfRoot("getDownloadURL");const e=z7(t.storage,t._location,sx());return t.storage.makeRequestWithTokens(e,cx).then(n=>{if(n===null)throw l7();return n})}function X7(t,e){const n=O7(t._location.path,e),r=new Lr(t._location.bucket,n);return new il(t.storage,r)}/**
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
 */function J7(t){return/^[A-Za-z]+:\/\//.test(t)}function Z7(t,e){return new il(t,e)}function fx(t,e){if(t instanceof Yw){const n=t;if(n._bucket==null)throw o7();const r=new il(n,n._bucket);return e!=null?fx(r,e):r}else return e!==void 0?X7(t,e):t}function eW(t,e){if(e&&J7(e)){if(t instanceof Yw)return Z7(t,e);throw N_("To use ref(service, url), the first argument must be a Storage instance.")}else return fx(t,e)}function sA(t,e){const n=e==null?void 0:e[XP];return n==null?null:Lr.makeFromBucketSpec(n,t)}function tW(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Tk(i,t.app.options.projectId))}class Yw{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=QP,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Y8,this._maxUploadRetryTime=Q8,this._requests=new Set,i!=null?this._bucket=Lr.makeFromBucketSpec(i,this._host):this._bucket=sA(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Lr.makeFromBucketSpec(this._url,e):this._bucket=sA(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){iA("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){iA("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new il(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new f7(JP());{const a=T7(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const oA="@firebase/storage",aA="0.12.5";/**
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
 */const hx="storage";function nW(t,e,n){return t=bt(t),Y7(t,e,n)}function dx(t){return t=bt(t),Q7(t)}function om(t,e){return t=bt(t),eW(t,e)}function rW(t=Yf(),e){t=bt(t);const r=Xs(t,hx).getImmediate({identifier:e}),i=_k("storage");return i&&iW(r,...i),r}function iW(t,e,n,r={}){tW(t,e,n,r)}function sW(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Yw(n,r,i,e,fl)}function oW(){jr(new Ar(hx,sW,"PUBLIC").setMultipleInstances(!0)),Gn(oA,aA,""),Gn(oA,aA,"esm2017")}oW();/**
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
 */const aW="/firebase-messaging-sw.js",lW="/firebase-cloud-messaging-push-scope",px="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",uW="https://fcmregistrations.googleapis.com/v1",mx="google.c.a.c_id",cW="google.c.a.c_l",fW="google.c.a.ts",hW="google.c.a.e";var lA;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(lA||(lA={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var Df;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Df||(Df={}));/**
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
 */function bs(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function dW(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const ry="fcm_token_details_db",pW=5,uA="fcm_token_object_Store";async function mW(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(ry))return null;let e=null;return(await Lm(ry,pW,{upgrade:async(r,i,s,a)=>{var u;if(i<2||!r.objectStoreNames.contains(uA))return;const f=a.objectStore(uA),d=await f.index("fcmSenderId").get(t);if(await f.clear(),!!d){if(i===2){const p=d;if(!p.auth||!p.p256dh||!p.endpoint)return;e={token:p.fcmToken,createTime:(u=p.createTime)!==null&&u!==void 0?u:Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:bs(p.vapidKey)}}}else if(i===3){const p=d;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:bs(p.auth),p256dh:bs(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:bs(p.vapidKey)}}}else if(i===4){const p=d;e={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:bs(p.auth),p256dh:bs(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:bs(p.vapidKey)}}}}}})).close(),await zv(ry),await zv("fcm_vapid_details_db"),await zv("undefined"),gW(e)?e:null}function gW(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const vW="firebase-messaging-database",yW=1,Lf="firebase-messaging-store";let iy=null;function gx(){return iy||(iy=Lm(vW,yW,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lf)}}})),iy}async function _W(t){const e=vx(t),r=await(await gx()).transaction(Lf).objectStore(Lf).get(e);if(r)return r;{const i=await mW(t.appConfig.senderId);if(i)return await Qw(t,i),i}}async function Qw(t,e){const n=vx(t),i=(await gx()).transaction(Lf,"readwrite");return await i.objectStore(Lf).put(e,n),await i.done,e}function vx({appConfig:t}){return t.appId}/**
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
 */const wW={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},sr=new ia("messaging","Messaging",wW);/**
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
 */async function EW(t,e){const n=await Jw(t),r=yx(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Xw(t.appConfig),i)).json()}catch(a){throw sr.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw sr.create("token-subscribe-failed",{errorInfo:a})}if(!s.token)throw sr.create("token-subscribe-no-token");return s.token}async function TW(t,e){const n=await Jw(t),r=yx(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Xw(t.appConfig)}/${e.token}`,i)).json()}catch(a){throw sr.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(s.error){const a=s.error.message;throw sr.create("token-update-failed",{errorInfo:a})}if(!s.token)throw sr.create("token-update-no-token");return s.token}async function IW(t,e){const r={method:"DELETE",headers:await Jw(t)};try{const s=await(await fetch(`${Xw(t.appConfig)}/${e}`,r)).json();if(s.error){const a=s.error.message;throw sr.create("token-unsubscribe-failed",{errorInfo:a})}}catch(i){throw sr.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Xw({projectId:t}){return`${uW}/projects/${t}/registrations`}async function Jw({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function yx({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==px&&(i.web.applicationPubKey=r),i}/**
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
 */const SW=7*24*60*60*1e3;async function AW(t){const e=await bW(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:bs(e.getKey("auth")),p256dh:bs(e.getKey("p256dh"))},r=await _W(t.firebaseDependencies);if(r){if(kW(r.subscriptionOptions,n))return Date.now()>=r.createTime+SW?RW(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await IW(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return cA(t.firebaseDependencies,n)}else return cA(t.firebaseDependencies,n)}async function RW(t,e){try{const n=await TW(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Qw(t.firebaseDependencies,r),n}catch(n){throw n}}async function cA(t,e){const r={token:await EW(t,e),createTime:Date.now(),subscriptionOptions:e};return await Qw(t,r),r.token}async function bW(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:dW(e)})}function kW(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function fA(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return CW(e,t),PW(e,t),xW(e,t),e}function CW(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function PW(t,e){e.data&&(t.data=e.data)}function xW(t,e){var n,r,i,s,a;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const u=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;u&&(t.fcmOptions.link=u);const f=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;f&&(t.fcmOptions.analyticsLabel=f)}/**
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
 */function NW(t){return typeof t=="object"&&!!t&&mx in t}/**
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
 */_x("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");_x("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function _x(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function OW(t){if(!t||!t.options)throw sy("App Configuration Object");if(!t.name)throw sy("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw sy(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function sy(t){return sr.create("missing-app-config-values",{valueName:t})}/**
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
 */class DW{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=OW(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function LW(t){try{t.swRegistration=await navigator.serviceWorker.register(aW,{scope:lW}),t.swRegistration.update().catch(()=>{})}catch(e){throw sr.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function MW(t,e){if(!e&&!t.swRegistration&&await LW(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw sr.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function FW(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=px)}/**
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
 */async function VW(t,e){if(!navigator)throw sr.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw sr.create("permission-blocked");return await FW(t,e==null?void 0:e.vapidKey),await MW(t,e==null?void 0:e.serviceWorkerRegistration),AW(t)}/**
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
 */async function UW(t,e,n){const r=jW(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[mx],message_name:n[cW],message_time:n[fW],message_device_time:Math.floor(Date.now()/1e3)})}function jW(t){switch(t){case Df.NOTIFICATION_CLICKED:return"notification_open";case Df.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function BW(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Df.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(fA(n)):t.onMessageHandler.next(fA(n)));const r=n.data;NW(r)&&r[hW]==="1"&&await UW(t,n.messageType,r)}const hA="@firebase/messaging",dA="0.12.9";/**
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
 */const $W=t=>{const e=new DW(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>BW(e,n)),e},zW=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>VW(e,r)}};function WW(){jr(new Ar("messaging",$W,"PUBLIC")),jr(new Ar("messaging-internal",zW,"PRIVATE")),Gn(hA,dA),Gn(hA,dA,"esm2017")}/**
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
 */async function HW(){try{await Q0()}catch{return!1}return typeof window<"u"&&Y0()&&Sk()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function qW(t=Yf()){return HW().then(e=>{if(!e)throw sr.create("unsupported-browser")},e=>{throw sr.create("indexed-db-unsupported")}),Xs(bt(t),"messaging").getImmediate()}WW();const KW={apiKey:"AIzaSyBLW-ddcrGA09zZpDw8SO8toVy0ORVqK_I",authDomain:"techytrans.firebaseapp.com",projectId:"techytrans",storageBucket:"techytrans.appspot.com",messagingSenderId:"38290558884",appId:"1:38290558884:web:f03ff61c1ca7ca6d3f7b31",measurementId:"G-V81RK10B3R"},oh=bk(KW),ci=K8(oh),am=d$(oh),wx=rW(oh);qW(oh);_9(oh);const GW=om(wx);Lz(ci,t=>{t?(console.log("user's well authenticated"),console.log("user photo url : ",t.photoURL)):console.log("sorry, user isn't authenticated")});const YW=()=>{const[t,e]=re.useState(!1),n=Nm(),[r,i]=re.useState({email:"",password:""}),s=d=>{const{name:p,value:v}=d.currentTarget;i(_=>({..._,[p]:v}))},a=re.useId(),u=async d=>{e(!0);try{const p=await Pz(ci,d.email,d.password);p.user&&(console.log(p.user.email,p.user.displayName),n("/dashboard"))}catch(p){console.error(p)}e(!1)},f=d=>{d.preventDefault(),u({email:r.email,password:r.password})};return B.jsx(B.Fragment,{children:B.jsx("div",{className:"head",children:B.jsxs("div",{className:"wrapper",style:{display:"flex",flexDirection:"column",gap:20},children:[B.jsx("div",{className:"title",children:B.jsx("div",{children:B.jsxs("span",{id:"title",children:["Login with ",B.jsx("strong",{className:"book_reader",children:"BookReader"})," "]})})}),B.jsx("div",{className:"form_fields",children:B.jsxs("form",{action:"",method:"post",className:"form",onSubmit:f,children:[B.jsx("div",{className:"first_field",style:{marginBlockEnd:"10px"},children:B.jsxs("label",{htmlFor:"",children:["Enter your email",B.jsx("br",{}),B.jsx("input",{placeholder:"Email...",type:"email",onChange:s,name:"email",id:`email_${a}`,value:r.email,style:{marginBlockStart:"4px",paddingBlock:"10px",width:"250px"}})]})}),B.jsx("div",{className:"second_field",children:B.jsxs("label",{htmlFor:"",children:["Enter your password",B.jsx("br",{}),B.jsx("input",{placeholder:"Password...",type:"password",name:"password",value:r.password,onChange:s,id:`password_${a}`,style:{marginBlockStart:"4px",paddingBlock:"10px",width:"250px"}})]})}),B.jsxs("div",{className:"",style:{marginBlockStart:"18px"},children:[B.jsxs("div",{className:"create-account",children:[B.jsx("span",{className:"login-text",children:"No account?"}),B.jsx("button",{type:"button",style:{border:"none",margin:"0px",backgroundColor:"white",fontSize:"0.9rem"},onClick:()=>n("/register",{replace:!0}),children:B.jsx("span",{style:{color:"blue",textDecoration:"underline"},children:"Register"})})]}),B.jsx("button",{className:"submit",type:"submit",children:t?"loading...":"LogIn"})]})]})})]})})})},QW=()=>B.jsx(B.Fragment,{children:B.jsx("div",{className:"Login",children:B.jsx(YW,{})})});function pA(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function we(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pA(Object(n),!0).forEach(function(r){vn(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pA(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lm(t){"@babel/helpers - typeof";return lm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lm(t)}function XW(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function JW(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ZW(t,e,n){return e&&JW(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function vn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zw(t,e){return tH(t)||rH(t,e)||Ex(t,e)||sH()}function ah(t){return eH(t)||nH(t)||Ex(t)||iH()}function eH(t){if(Array.isArray(t))return O_(t)}function tH(t){if(Array.isArray(t))return t}function nH(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function rH(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,u;try{for(n=n.call(t);!(i=(a=n.next()).done)&&(r.push(a.value),!(e&&r.length===e));i=!0);}catch(f){s=!0,u=f}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw u}}return r}}function Ex(t,e){if(t){if(typeof t=="string")return O_(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O_(t,e)}}function O_(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function iH(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function sH(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var mA=function(){},e1={},Tx={},Ix=null,Sx={mark:mA,measure:mA};try{typeof window<"u"&&(e1=window),typeof document<"u"&&(Tx=document),typeof MutationObserver<"u"&&(Ix=MutationObserver),typeof performance<"u"&&(Sx=performance)}catch{}var oH=e1.navigator||{},gA=oH.userAgent,vA=gA===void 0?"":gA,Xo=e1,Nt=Tx,yA=Ix,Vd=Sx;Xo.document;var Zs=!!Nt.documentElement&&!!Nt.head&&typeof Nt.addEventListener=="function"&&typeof Nt.createElement=="function",Ax=~vA.indexOf("MSIE")||~vA.indexOf("Trident/"),Ud,jd,Bd,$d,zd,Ks="___FONT_AWESOME___",D_=16,Rx="fa",bx="svg-inline--fa",sl="data-fa-i2svg",L_="data-fa-pseudo-element",aH="data-fa-pseudo-element-pending",t1="data-prefix",n1="data-icon",_A="fontawesome-i2svg",lH="async",uH=["HTML","HEAD","STYLE","SCRIPT"],kx=function(){try{return!0}catch{return!1}}(),Pt="classic",Yt="sharp",r1=[Pt,Yt];function lh(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Pt]}})}var Mf=lh((Ud={},vn(Ud,Pt,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),vn(Ud,Yt,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Ud)),Ff=lh((jd={},vn(jd,Pt,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),vn(jd,Yt,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),jd)),Vf=lh((Bd={},vn(Bd,Pt,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),vn(Bd,Yt,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Bd)),cH=lh(($d={},vn($d,Pt,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),vn($d,Yt,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),$d)),fH=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Cx="fa-layers-text",hH=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,dH=lh((zd={},vn(zd,Pt,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),vn(zd,Yt,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),zd)),Px=[1,2,3,4,5,6,7,8,9,10],pH=Px.concat([11,12,13,14,15,16,17,18,19,20]),mH=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Fa={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Uf=new Set;Object.keys(Ff[Pt]).map(Uf.add.bind(Uf));Object.keys(Ff[Yt]).map(Uf.add.bind(Uf));var gH=[].concat(r1,ah(Uf),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Fa.GROUP,Fa.SWAP_OPACITY,Fa.PRIMARY,Fa.SECONDARY]).concat(Px.map(function(t){return"".concat(t,"x")})).concat(pH.map(function(t){return"w-".concat(t)})),rf=Xo.FontAwesomeConfig||{};function vH(t){var e=Nt.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function yH(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Nt&&typeof Nt.querySelector=="function"){var _H=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];_H.forEach(function(t){var e=Zw(t,2),n=e[0],r=e[1],i=yH(vH(n));i!=null&&(rf[r]=i)})}var xx={styleDefault:"solid",familyDefault:"classic",cssPrefix:Rx,replacementClass:bx,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};rf.familyPrefix&&(rf.cssPrefix=rf.familyPrefix);var Nu=we(we({},xx),rf);Nu.autoReplaceSvg||(Nu.observeMutations=!1);var Re={};Object.keys(xx).forEach(function(t){Object.defineProperty(Re,t,{enumerable:!0,set:function(n){Nu[t]=n,sf.forEach(function(r){return r(Re)})},get:function(){return Nu[t]}})});Object.defineProperty(Re,"familyPrefix",{enumerable:!0,set:function(e){Nu.cssPrefix=e,sf.forEach(function(n){return n(Re)})},get:function(){return Nu.cssPrefix}});Xo.FontAwesomeConfig=Re;var sf=[];function wH(t){return sf.push(t),function(){sf.splice(sf.indexOf(t),1)}}var Io=D_,ns={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function EH(t){if(!(!t||!Zs)){var e=Nt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Nt.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return Nt.head.insertBefore(e,r),t}}var TH="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function jf(){for(var t=12,e="";t-- >0;)e+=TH[Math.random()*62|0];return e}function Bu(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function i1(t){return t.classList?Bu(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Nx(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function IH(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Nx(t[n]),'" ')},"").trim()}function rg(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function s1(t){return t.size!==ns.size||t.x!==ns.x||t.y!==ns.y||t.rotate!==ns.rotate||t.flipX||t.flipY}function SH(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),a="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),u="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(s," ").concat(a," ").concat(u)},d={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:f,path:d}}function AH(t){var e=t.transform,n=t.width,r=n===void 0?D_:n,i=t.height,s=i===void 0?D_:i,a=t.startCentered,u=a===void 0?!1:a,f="";return u&&Ax?f+="translate(".concat(e.x/Io-r/2,"em, ").concat(e.y/Io-s/2,"em) "):u?f+="translate(calc(-50% + ".concat(e.x/Io,"em), calc(-50% + ").concat(e.y/Io,"em)) "):f+="translate(".concat(e.x/Io,"em, ").concat(e.y/Io,"em) "),f+="scale(".concat(e.size/Io*(e.flipX?-1:1),", ").concat(e.size/Io*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var RH=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ox(){var t=Rx,e=bx,n=Re.cssPrefix,r=Re.replacementClass,i=RH;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),a=new RegExp("\\--".concat(t,"\\-"),"g"),u=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(u,".".concat(r))}return i}var wA=!1;function oy(){Re.autoAddCss&&!wA&&(EH(Ox()),wA=!0)}var bH={mixout:function(){return{dom:{css:Ox,insertCss:oy}}},hooks:function(){return{beforeDOMElementCreation:function(){oy()},beforeI2svg:function(){oy()}}}},Gs=Xo||{};Gs[Ks]||(Gs[Ks]={});Gs[Ks].styles||(Gs[Ks].styles={});Gs[Ks].hooks||(Gs[Ks].hooks={});Gs[Ks].shims||(Gs[Ks].shims=[]);var Li=Gs[Ks],Dx=[],kH=function t(){Nt.removeEventListener("DOMContentLoaded",t),um=1,Dx.map(function(e){return e()})},um=!1;Zs&&(um=(Nt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Nt.readyState),um||Nt.addEventListener("DOMContentLoaded",kH));function CH(t){Zs&&(um?setTimeout(t,0):Dx.push(t))}function uh(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Nx(t):"<".concat(e," ").concat(IH(r),">").concat(s.map(uh).join(""),"</").concat(e,">")}function EA(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ay=function(e,n,r,i){var s=Object.keys(e),a=s.length,u=n,f,d,p;for(r===void 0?(f=1,p=e[s[0]]):(f=0,p=r);f<a;f++)d=s[f],p=u(p,e[d],d,e);return p};function PH(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function M_(t){var e=PH(t);return e.length===1?e[0].toString(16):null}function xH(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function TA(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function F_(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=TA(e);typeof Li.hooks.addPack=="function"&&!i?Li.hooks.addPack(t,TA(e)):Li.styles[t]=we(we({},Li.styles[t]||{}),s),t==="fas"&&F_("fa",e)}var Wd,Hd,qd,tu=Li.styles,NH=Li.shims,OH=(Wd={},vn(Wd,Pt,Object.values(Vf[Pt])),vn(Wd,Yt,Object.values(Vf[Yt])),Wd),o1=null,Lx={},Mx={},Fx={},Vx={},Ux={},DH=(Hd={},vn(Hd,Pt,Object.keys(Mf[Pt])),vn(Hd,Yt,Object.keys(Mf[Yt])),Hd);function LH(t){return~gH.indexOf(t)}function MH(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!LH(i)?i:null}var jx=function(){var e=function(s){return ay(tu,function(a,u,f){return a[f]=ay(u,s,{}),a},{})};Lx=e(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var u=s[2].filter(function(f){return typeof f=="number"});u.forEach(function(f){i[f.toString(16)]=a})}return i}),Mx=e(function(i,s,a){if(i[a]=a,s[2]){var u=s[2].filter(function(f){return typeof f=="string"});u.forEach(function(f){i[f]=a})}return i}),Ux=e(function(i,s,a){var u=s[2];return i[a]=a,u.forEach(function(f){i[f]=a}),i});var n="far"in tu||Re.autoFetchSvg,r=ay(NH,function(i,s){var a=s[0],u=s[1],f=s[2];return u==="far"&&!n&&(u="fas"),typeof a=="string"&&(i.names[a]={prefix:u,iconName:f}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:u,iconName:f}),i},{names:{},unicodes:{}});Fx=r.names,Vx=r.unicodes,o1=ig(Re.styleDefault,{family:Re.familyDefault})};wH(function(t){o1=ig(t.styleDefault,{family:Re.familyDefault})});jx();function a1(t,e){return(Lx[t]||{})[e]}function FH(t,e){return(Mx[t]||{})[e]}function Va(t,e){return(Ux[t]||{})[e]}function Bx(t){return Fx[t]||{prefix:null,iconName:null}}function VH(t){var e=Vx[t],n=a1("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jo(){return o1}var l1=function(){return{prefix:null,iconName:null,rest:[]}};function ig(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Pt:n,i=Mf[r][t],s=Ff[r][t]||Ff[r][i],a=t in Li.styles?t:null;return s||a||null}var IA=(qd={},vn(qd,Pt,Object.keys(Vf[Pt])),vn(qd,Yt,Object.keys(Vf[Yt])),qd);function sg(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},vn(e,Pt,"".concat(Re.cssPrefix,"-").concat(Pt)),vn(e,Yt,"".concat(Re.cssPrefix,"-").concat(Yt)),e),a=null,u=Pt;(t.includes(s[Pt])||t.some(function(d){return IA[Pt].includes(d)}))&&(u=Pt),(t.includes(s[Yt])||t.some(function(d){return IA[Yt].includes(d)}))&&(u=Yt);var f=t.reduce(function(d,p){var v=MH(Re.cssPrefix,p);if(tu[p]?(p=OH[u].includes(p)?cH[u][p]:p,a=p,d.prefix=p):DH[u].indexOf(p)>-1?(a=p,d.prefix=ig(p,{family:u})):v?d.iconName=v:p!==Re.replacementClass&&p!==s[Pt]&&p!==s[Yt]&&d.rest.push(p),!i&&d.prefix&&d.iconName){var _=a==="fa"?Bx(d.iconName):{},b=Va(d.prefix,d.iconName);_.prefix&&(a=null),d.iconName=_.iconName||b||d.iconName,d.prefix=_.prefix||d.prefix,d.prefix==="far"&&!tu.far&&tu.fas&&!Re.autoFetchSvg&&(d.prefix="fas")}return d},l1());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&u===Yt&&(tu.fass||Re.autoFetchSvg)&&(f.prefix="fass",f.iconName=Va(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||a==="fa")&&(f.prefix=Jo()||"fas"),f}var UH=function(){function t(){XW(this,t),this.definitions={}}return ZW(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(u){n.definitions[u]=we(we({},n.definitions[u]||{}),a[u]),F_(u,a[u]);var f=Vf[Pt][u];f&&F_(f,a[u]),jx()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],u=a.prefix,f=a.iconName,d=a.icon,p=d[2];n[u]||(n[u]={}),p.length>0&&p.forEach(function(v){typeof v=="string"&&(n[u][v]=d)}),n[u][f]=d}),n}}]),t}(),SA=[],nu={},pu={},jH=Object.keys(pu);function BH(t,e){var n=e.mixoutsTo;return SA=t,nu={},Object.keys(pu).forEach(function(r){jH.indexOf(r)===-1&&delete pu[r]}),SA.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),lm(i[a])==="object"&&Object.keys(i[a]).forEach(function(u){n[a]||(n[a]={}),n[a][u]=i[a][u]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){nu[a]||(nu[a]=[]),nu[a].push(s[a])})}r.provides&&r.provides(pu)}),n}function V_(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=nu[t]||[];return s.forEach(function(a){e=a.apply(null,[e].concat(r))}),e}function ol(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=nu[t]||[];i.forEach(function(s){s.apply(null,n)})}function Ys(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return pu[t]?pu[t].apply(null,e):void 0}function U_(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Jo();if(e)return e=Va(n,e)||e,EA($x.definitions,n,e)||EA(Li.styles,n,e)}var $x=new UH,$H=function(){Re.autoReplaceSvg=!1,Re.observeMutations=!1,ol("noAuto")},zH={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zs?(ol("beforeI2svg",e),Ys("pseudoElements2svg",e),Ys("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;Re.autoReplaceSvg===!1&&(Re.autoReplaceSvg=!0),Re.observeMutations=!0,CH(function(){HH({autoReplaceSvgRoot:n}),ol("watch",e)})}},WH={icon:function(e){if(e===null)return null;if(lm(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Va(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=ig(e[0]);return{prefix:r,iconName:Va(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(Re.cssPrefix,"-"))>-1||e.match(fH))){var i=sg(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Jo(),iconName:Va(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Jo();return{prefix:s,iconName:Va(s,e)||e}}}},zr={noAuto:$H,config:Re,dom:zH,parse:WH,library:$x,findIconDefinition:U_,toHtml:uh},HH=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Nt:n;(Object.keys(Li.styles).length>0||Re.autoFetchSvg)&&Zs&&Re.autoReplaceSvg&&zr.dom.i2svg({node:r})};function og(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return uh(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Zs){var r=Nt.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function qH(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,a=t.transform;if(s1(a)&&n.found&&!r.found){var u=n.width,f=n.height,d={x:u/f/2,y:.5};i.style=rg(we(we({},s),{},{"transform-origin":"".concat(d.x+a.x/16,"em ").concat(d.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function KH(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,a=s===!0?"".concat(e,"-").concat(Re.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:we(we({},i),{},{id:a}),children:r}]}]}function u1(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,a=t.transform,u=t.symbol,f=t.title,d=t.maskId,p=t.titleId,v=t.extra,_=t.watchable,b=_===void 0?!1:_,x=r.found?r:n,O=x.width,F=x.height,k=i==="fak",R=[Re.replacementClass,s?"".concat(Re.cssPrefix,"-").concat(s):""].filter(function(C){return v.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(v.classes).join(" "),P={children:[],attributes:we(we({},v.attributes),{},{"data-prefix":i,"data-icon":s,class:R,role:v.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(F)})},z=k&&!~v.classes.indexOf("fa-fw")?{width:"".concat(O/F*16*.0625,"em")}:{};b&&(P.attributes[sl]=""),f&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(p||jf())},children:[f]}),delete P.attributes.title);var G=we(we({},P),{},{prefix:i,iconName:s,main:n,mask:r,maskId:d,transform:a,symbol:u,styles:we(we({},z),v.styles)}),Z=r.found&&n.found?Ys("generateAbstractMask",G)||{children:[],attributes:{}}:Ys("generateAbstractIcon",G)||{children:[],attributes:{}},E=Z.children,I=Z.attributes;return G.children=E,G.attributes=I,u?KH(G):qH(G)}function AA(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,a=t.extra,u=t.watchable,f=u===void 0?!1:u,d=we(we(we({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});f&&(d[sl]="");var p=we({},a.styles);s1(i)&&(p.transform=AH({transform:i,startCentered:!0,width:n,height:r}),p["-webkit-transform"]=p.transform);var v=rg(p);v.length>0&&(d.style=v);var _=[];return _.push({tag:"span",attributes:d,children:[e]}),s&&_.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),_}function GH(t){var e=t.content,n=t.title,r=t.extra,i=we(we(we({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=rg(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[e]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var ly=Li.styles;function j_(t){var e=t[0],n=t[1],r=t.slice(4),i=Zw(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(Re.cssPrefix,"-").concat(Fa.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Re.cssPrefix,"-").concat(Fa.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(Re.cssPrefix,"-").concat(Fa.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:a}}var YH={found:!1,width:512,height:512};function QH(t,e){!kx&&!Re.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function B_(t,e){var n=e;return e==="fa"&&Re.styleDefault!==null&&(e=Jo()),new Promise(function(r,i){if(Ys("missingIconAbstract"),n==="fa"){var s=Bx(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&ly[e]&&ly[e][t]){var a=ly[e][t];return r(j_(a))}QH(t,e),r(we(we({},YH),{},{icon:Re.showMissingIcons&&t?Ys("missingIconAbstract")||{}:{}}))})}var RA=function(){},$_=Re.measurePerformance&&Vd&&Vd.mark&&Vd.measure?Vd:{mark:RA,measure:RA},Uc='FA "6.5.2"',XH=function(e){return $_.mark("".concat(Uc," ").concat(e," begins")),function(){return zx(e)}},zx=function(e){$_.mark("".concat(Uc," ").concat(e," ends")),$_.measure("".concat(Uc," ").concat(e),"".concat(Uc," ").concat(e," begins"),"".concat(Uc," ").concat(e," ends"))},c1={begin:XH,end:zx},mp=function(){};function bA(t){var e=t.getAttribute?t.getAttribute(sl):null;return typeof e=="string"}function JH(t){var e=t.getAttribute?t.getAttribute(t1):null,n=t.getAttribute?t.getAttribute(n1):null;return e&&n}function ZH(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(Re.replacementClass)}function eq(){if(Re.autoReplaceSvg===!0)return gp.replace;var t=gp[Re.autoReplaceSvg];return t||gp.replace}function tq(t){return Nt.createElementNS("http://www.w3.org/2000/svg",t)}function nq(t){return Nt.createElement(t)}function Wx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?tq:nq:n;if(typeof t=="string")return Nt.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(a){i.setAttribute(a,t.attributes[a])});var s=t.children||[];return s.forEach(function(a){i.appendChild(Wx(a,{ceFn:r}))}),i}function rq(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var gp={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Wx(i),n)}),n.getAttribute(sl)===null&&Re.keepOriginalSource){var r=Nt.createComment(rq(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~i1(n).indexOf(Re.replacementClass))return gp.replace(e);var i=new RegExp("".concat(Re.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(u,f){return f===Re.replacementClass||f.match(i)?u.toSvg.push(f):u.toNode.push(f),u},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(u){return uh(u)}).join(`
`);n.setAttribute(sl,""),n.innerHTML=a}};function kA(t){t()}function Hx(t,e){var n=typeof e=="function"?e:mp;if(t.length===0)n();else{var r=kA;Re.mutateApproach===lH&&(r=Xo.requestAnimationFrame||kA),r(function(){var i=eq(),s=c1.begin("mutate");t.map(i),s(),n()})}}var f1=!1;function qx(){f1=!0}function z_(){f1=!1}var cm=null;function CA(t){if(yA&&Re.observeMutations){var e=t.treeCallback,n=e===void 0?mp:e,r=t.nodeCallback,i=r===void 0?mp:r,s=t.pseudoElementsCallback,a=s===void 0?mp:s,u=t.observeMutationsRoot,f=u===void 0?Nt:u;cm=new yA(function(d){if(!f1){var p=Jo();Bu(d).forEach(function(v){if(v.type==="childList"&&v.addedNodes.length>0&&!bA(v.addedNodes[0])&&(Re.searchPseudoElements&&a(v.target),n(v.target)),v.type==="attributes"&&v.target.parentNode&&Re.searchPseudoElements&&a(v.target.parentNode),v.type==="attributes"&&bA(v.target)&&~mH.indexOf(v.attributeName))if(v.attributeName==="class"&&JH(v.target)){var _=sg(i1(v.target)),b=_.prefix,x=_.iconName;v.target.setAttribute(t1,b||p),x&&v.target.setAttribute(n1,x)}else ZH(v.target)&&i(v.target)})}}),Zs&&cm.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function iq(){cm&&cm.disconnect()}function sq(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],u=s.slice(1);return a&&u.length>0&&(r[a]=u.join(":").trim()),r},{})),n}function oq(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=sg(i1(t));return i.prefix||(i.prefix=Jo()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=FH(i.prefix,t.innerText)||a1(i.prefix,M_(t.innerText))),!i.iconName&&Re.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function aq(t){var e=Bu(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return Re.autoA11y&&(n?e["aria-labelledby"]="".concat(Re.replacementClass,"-title-").concat(r||jf()):(e["aria-hidden"]="true",e.focusable="false")),e}function lq(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ns,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function PA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=oq(t),r=n.iconName,i=n.prefix,s=n.rest,a=aq(t),u=V_("parseNodeAttributes",{},t),f=e.styleParser?sq(t):[];return we({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:ns,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:f,attributes:a}},u)}var uq=Li.styles;function Kx(t){var e=Re.autoReplaceSvg==="nest"?PA(t,{styleParser:!1}):PA(t);return~e.extra.classes.indexOf(Cx)?Ys("generateLayersText",t,e):Ys("generateSvgReplacementMutation",t,e)}var Zo=new Set;r1.map(function(t){Zo.add("fa-".concat(t))});Object.keys(Mf[Pt]).map(Zo.add.bind(Zo));Object.keys(Mf[Yt]).map(Zo.add.bind(Zo));Zo=ah(Zo);function xA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zs)return Promise.resolve();var n=Nt.documentElement.classList,r=function(v){return n.add("".concat(_A,"-").concat(v))},i=function(v){return n.remove("".concat(_A,"-").concat(v))},s=Re.autoFetchSvg?Zo:r1.map(function(p){return"fa-".concat(p)}).concat(Object.keys(uq));s.includes("fa")||s.push("fa");var a=[".".concat(Cx,":not([").concat(sl,"])")].concat(s.map(function(p){return".".concat(p,":not([").concat(sl,"])")})).join(", ");if(a.length===0)return Promise.resolve();var u=[];try{u=Bu(t.querySelectorAll(a))}catch{}if(u.length>0)r("pending"),i("complete");else return Promise.resolve();var f=c1.begin("onTree"),d=u.reduce(function(p,v){try{var _=Kx(v);_&&p.push(_)}catch(b){kx||b.name==="MissingIcon"&&console.error(b)}return p},[]);return new Promise(function(p,v){Promise.all(d).then(function(_){Hx(_,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),f(),p()})}).catch(function(_){f(),v(_)})})}function cq(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Kx(t).then(function(n){n&&Hx([n],e)})}function fq(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:U_(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:U_(i||{})),t(r,we(we({},n),{},{mask:i}))}}var hq=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ns:r,s=n.symbol,a=s===void 0?!1:s,u=n.mask,f=u===void 0?null:u,d=n.maskId,p=d===void 0?null:d,v=n.title,_=v===void 0?null:v,b=n.titleId,x=b===void 0?null:b,O=n.classes,F=O===void 0?[]:O,k=n.attributes,R=k===void 0?{}:k,P=n.styles,z=P===void 0?{}:P;if(e){var G=e.prefix,Z=e.iconName,E=e.icon;return og(we({type:"icon"},e),function(){return ol("beforeDOMElementCreation",{iconDefinition:e,params:n}),Re.autoA11y&&(_?R["aria-labelledby"]="".concat(Re.replacementClass,"-title-").concat(x||jf()):(R["aria-hidden"]="true",R.focusable="false")),u1({icons:{main:j_(E),mask:f?j_(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:G,iconName:Z,transform:we(we({},ns),i),symbol:a,title:_,maskId:p,titleId:x,extra:{attributes:R,styles:z,classes:F}})})}},dq={mixout:function(){return{icon:fq(hq)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xA,n.nodeCallback=cq,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Nt:r,s=n.callback,a=s===void 0?function(){}:s;return xA(i,a)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,u=r.prefix,f=r.transform,d=r.symbol,p=r.mask,v=r.maskId,_=r.extra;return new Promise(function(b,x){Promise.all([B_(i,u),p.iconName?B_(p.iconName,p.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var F=Zw(O,2),k=F[0],R=F[1];b([n,u1({icons:{main:k,mask:R},prefix:u,iconName:i,transform:f,symbol:d,maskId:v,title:s,titleId:a,extra:_,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,u=n.styles,f=rg(u);f.length>0&&(i.style=f);var d;return s1(a)&&(d=Ys("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(d||s.icon),{children:r,attributes:i}}}},pq={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return og({type:"layer"},function(){ol("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(u){Array.isArray(u)?u.map(function(f){a=a.concat(f.abstract)}):a=a.concat(u.abstract)}),[{tag:"span",attributes:{class:["".concat(Re.cssPrefix,"-layers")].concat(ah(s)).join(" ")},children:a}]})}}}},mq={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,u=a===void 0?[]:a,f=r.attributes,d=f===void 0?{}:f,p=r.styles,v=p===void 0?{}:p;return og({type:"counter",content:n},function(){return ol("beforeDOMElementCreation",{content:n,params:r}),GH({content:n.toString(),title:s,extra:{attributes:d,styles:v,classes:["".concat(Re.cssPrefix,"-layers-counter")].concat(ah(u))}})})}}}},gq={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?ns:i,a=r.title,u=a===void 0?null:a,f=r.classes,d=f===void 0?[]:f,p=r.attributes,v=p===void 0?{}:p,_=r.styles,b=_===void 0?{}:_;return og({type:"text",content:n},function(){return ol("beforeDOMElementCreation",{content:n,params:r}),AA({content:n,transform:we(we({},ns),s),title:u,extra:{attributes:v,styles:b,classes:["".concat(Re.cssPrefix,"-layers-text")].concat(ah(d))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,u=null,f=null;if(Ax){var d=parseInt(getComputedStyle(n).fontSize,10),p=n.getBoundingClientRect();u=p.width/d,f=p.height/d}return Re.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,AA({content:n.innerHTML,width:u,height:f,transform:s,title:i,extra:a,watchable:!0})])}}},vq=new RegExp('"',"ug"),NA=[1105920,1112319];function yq(t){var e=t.replace(vq,""),n=xH(e,0),r=n>=NA[0]&&n<=NA[1],i=e.length===2?e[0]===e[1]:!1;return{value:M_(i?e[0]:e),isSecondary:r||i}}function OA(t,e){var n="".concat(aH).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Bu(t.children),a=s.filter(function(E){return E.getAttribute(L_)===e})[0],u=Xo.getComputedStyle(t,e),f=u.getPropertyValue("font-family").match(hH),d=u.getPropertyValue("font-weight"),p=u.getPropertyValue("content");if(a&&!f)return t.removeChild(a),r();if(f&&p!=="none"&&p!==""){var v=u.getPropertyValue("content"),_=~["Sharp"].indexOf(f[2])?Yt:Pt,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Ff[_][f[2].toLowerCase()]:dH[_][d],x=yq(v),O=x.value,F=x.isSecondary,k=f[0].startsWith("FontAwesome"),R=a1(b,O),P=R;if(k){var z=VH(O);z.iconName&&z.prefix&&(R=z.iconName,b=z.prefix)}if(R&&!F&&(!a||a.getAttribute(t1)!==b||a.getAttribute(n1)!==P)){t.setAttribute(n,P),a&&t.removeChild(a);var G=lq(),Z=G.extra;Z.attributes[L_]=e,B_(R,b).then(function(E){var I=u1(we(we({},G),{},{icons:{main:E,mask:l1()},prefix:b,iconName:P,extra:Z,watchable:!0})),C=Nt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=I.map(function(N){return uh(N)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function _q(t){return Promise.all([OA(t,"::before"),OA(t,"::after")])}function wq(t){return t.parentNode!==document.head&&!~uH.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(L_)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function DA(t){if(Zs)return new Promise(function(e,n){var r=Bu(t.querySelectorAll("*")).filter(wq).map(_q),i=c1.begin("searchPseudoElements");qx(),Promise.all(r).then(function(){i(),z_(),e()}).catch(function(){i(),z_(),n()})})}var Eq={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=DA,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Nt:r;Re.searchPseudoElements&&DA(i)}}},LA=!1,Tq={mixout:function(){return{dom:{unwatch:function(){qx(),LA=!0}}}},hooks:function(){return{bootstrap:function(){CA(V_("mutationObserverCallbacks",{}))},noAuto:function(){iq()},watch:function(n){var r=n.observeMutationsRoot;LA?z_():CA(V_("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},MA=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],u=s.slice(1).join("-");if(a&&u==="h")return r.flipX=!0,r;if(a&&u==="v")return r.flipY=!0,r;if(u=parseFloat(u),isNaN(u))return r;switch(a){case"grow":r.size=r.size+u;break;case"shrink":r.size=r.size-u;break;case"left":r.x=r.x-u;break;case"right":r.x=r.x+u;break;case"up":r.y=r.y-u;break;case"down":r.y=r.y+u;break;case"rotate":r.rotate=r.rotate+u;break}return r},n)},Iq={mixout:function(){return{parse:{transform:function(n){return MA(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=MA(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,u={transform:"translate(".concat(s/2," 256)")},f="translate(".concat(i.x*32,", ").concat(i.y*32,") "),d="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),p="rotate(".concat(i.rotate," 0 0)"),v={transform:"".concat(f," ").concat(d," ").concat(p)},_={transform:"translate(".concat(a/2*-1," -256)")},b={outer:u,inner:v,path:_};return{tag:"g",attributes:we({},b.outer),children:[{tag:"g",attributes:we({},b.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:we(we({},r.icon.attributes),b.path)}]}]}}}},uy={x:0,y:0,width:"100%",height:"100%"};function FA(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Sq(t){return t.tag==="g"?t.children:[t]}var Aq={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?sg(i.split(" ").map(function(a){return a.trim()})):l1();return s.prefix||(s.prefix=Jo()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,u=n.maskId,f=n.transform,d=s.width,p=s.icon,v=a.width,_=a.icon,b=SH({transform:f,containerWidth:v,iconWidth:d}),x={tag:"rect",attributes:we(we({},uy),{},{fill:"white"})},O=p.children?{children:p.children.map(FA)}:{},F={tag:"g",attributes:we({},b.inner),children:[FA(we({tag:p.tag,attributes:we(we({},p.attributes),b.path)},O))]},k={tag:"g",attributes:we({},b.outer),children:[F]},R="mask-".concat(u||jf()),P="clip-".concat(u||jf()),z={tag:"mask",attributes:we(we({},uy),{},{id:R,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,k]},G={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Sq(_)},z]};return r.push(G,{tag:"rect",attributes:we({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(R,")")},uy)}),{children:r,attributes:i}}}},Rq={provides:function(e){var n=!1;Xo.matchMedia&&(n=Xo.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:we(we({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=we(we({},s),{},{attributeName:"opacity"}),u={tag:"circle",attributes:we(we({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||u.children.push({tag:"animate",attributes:we(we({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:we(we({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(u),r.push({tag:"path",attributes:we(we({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:we(we({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:we(we({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:we(we({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},bq={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},kq=[bH,dq,pq,mq,gq,Eq,Tq,Iq,Aq,Rq,bq];BH(kq,{mixoutsTo:zr});zr.noAuto;zr.config;zr.library;zr.dom;var W_=zr.parse;zr.findIconDefinition;zr.toHtml;var Cq=zr.icon;zr.layer;zr.text;zr.counter;var Gx={exports:{}},Pq="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",xq=Pq,Nq=xq;function Yx(){}function Qx(){}Qx.resetWarningCache=Yx;var Oq=function(){function t(r,i,s,a,u,f){if(f!==Nq){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Qx,resetWarningCache:Yx};return n.PropTypes=n,n};Gx.exports=Oq();var Dq=Gx.exports;const Ye=Bf(Dq);function VA(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Zi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?VA(Object(n),!0).forEach(function(r){ru(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):VA(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fm(t){"@babel/helpers - typeof";return fm=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fm(t)}function ru(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Lq(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Mq(t,e){if(t==null)return{};var n=Lq(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function H_(t){return Fq(t)||Vq(t)||Uq(t)||jq()}function Fq(t){if(Array.isArray(t))return q_(t)}function Vq(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Uq(t,e){if(t){if(typeof t=="string")return q_(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return q_(t,e)}}function q_(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function jq(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bq(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,a=t.shake,u=t.flash,f=t.spin,d=t.spinPulse,p=t.spinReverse,v=t.pulse,_=t.fixedWidth,b=t.inverse,x=t.border,O=t.listItem,F=t.flip,k=t.size,R=t.rotation,P=t.pull,z=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":a,"fa-flash":u,"fa-spin":f,"fa-spin-reverse":p,"fa-spin-pulse":d,"fa-pulse":v,"fa-fw":_,"fa-inverse":b,"fa-border":x,"fa-li":O,"fa-flip":F===!0,"fa-flip-horizontal":F==="horizontal"||F==="both","fa-flip-vertical":F==="vertical"||F==="both"},ru(e,"fa-".concat(k),typeof k<"u"&&k!==null),ru(e,"fa-rotate-".concat(R),typeof R<"u"&&R!==null&&R!==0),ru(e,"fa-pull-".concat(P),typeof P<"u"&&P!==null),ru(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(z).map(function(G){return z[G]?G:null}).filter(function(G){return G})}function $q(t){return t=t-0,t===t}function Xx(t){return $q(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var zq=["style"];function Wq(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Hq(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Xx(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[Wq(i)]=s:e[i]=s,e},{})}function Jx(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(f){return Jx(t,f)}),i=Object.keys(e.attributes||{}).reduce(function(f,d){var p=e.attributes[d];switch(d){case"class":f.attrs.className=p,delete e.attributes.class;break;case"style":f.attrs.style=Hq(p);break;default:d.indexOf("aria-")===0||d.indexOf("data-")===0?f.attrs[d.toLowerCase()]=p:f.attrs[Xx(d)]=p}return f},{attrs:{}}),s=n.style,a=s===void 0?{}:s,u=Mq(n,zq);return i.attrs.style=Zi(Zi({},i.attrs.style),a),t.apply(void 0,[e.tag,Zi(Zi({},i.attrs),u)].concat(H_(r)))}var Zx=!1;try{Zx=!0}catch{}function qq(){if(!Zx&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function UA(t){if(t&&fm(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(W_.icon)return W_.icon(t);if(t===null)return null;if(t&&fm(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function cy(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ru({},t,e):{}}var jA={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},Bi=pm.forwardRef(function(t,e){var n=Zi(Zi({},jA),t),r=n.icon,i=n.mask,s=n.symbol,a=n.className,u=n.title,f=n.titleId,d=n.maskId,p=UA(r),v=cy("classes",[].concat(H_(Bq(n)),H_(a.split(" ")))),_=cy("transform",typeof n.transform=="string"?W_.transform(n.transform):n.transform),b=cy("mask",UA(i)),x=Cq(p,Zi(Zi(Zi(Zi({},v),_),b),{},{symbol:s,title:u,titleId:f,maskId:d}));if(!x)return qq("Could not find icon",p),null;var O=x.abstract,F={ref:e};return Object.keys(n).forEach(function(k){jA.hasOwnProperty(k)||(F[k]=n[k])}),Kq(O[0],F)});Bi.displayName="FontAwesomeIcon";Bi.propTypes={beat:Ye.bool,border:Ye.bool,beatFade:Ye.bool,bounce:Ye.bool,className:Ye.string,fade:Ye.bool,flash:Ye.bool,mask:Ye.oneOfType([Ye.object,Ye.array,Ye.string]),maskId:Ye.string,fixedWidth:Ye.bool,inverse:Ye.bool,flip:Ye.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ye.oneOfType([Ye.object,Ye.array,Ye.string]),listItem:Ye.bool,pull:Ye.oneOf(["right","left"]),pulse:Ye.bool,rotation:Ye.oneOf([0,90,180,270]),shake:Ye.bool,size:Ye.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ye.bool,spinPulse:Ye.bool,spinReverse:Ye.bool,symbol:Ye.oneOfType([Ye.bool,Ye.string]),title:Ye.string,titleId:Ye.string,transform:Ye.oneOfType([Ye.string,Ye.object]),swapOpacity:Ye.bool};var Kq=Jx.bind(null,pm.createElement),Gq={prefix:"fab",iconName:"google",icon:[488,512,[],"f1a0","M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"]},Yq={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]};const Qq=()=>{const[t,e]=re.useState(!1),n=Nm(),[r,i]=re.useState({email:"",password:"",phoneNumber:0}),s=re.useId(),a=v=>{const{name:_,value:b}=v.currentTarget;i({...r,[_]:b})},u=async v=>{try{const _=await Cz(ci,v.email,v.password);_.user?(console.log("login successfully"),console.log(_)):console.log("login failed")}catch(_){console.log(_)}},f=v=>{v.preventDefault(),ci.currentUser&&console.log("sorry try to login cause user is already authenticated"),u({email:r.email,password:r.password}),n("/dashboard",{replace:!0})},d=async()=>{try{e(!0);const v=new Ps,_=await YS(ci,v);_.user&&(n("/dashboard",{replace:!0}),console.log(_.user))}catch(v){console.log(v)}e(!1)},p=async()=>{try{const v=new Cs,_=await YS(ci,v);_.user&&(n("/dashboard",{replace:!0}),console.log(_.user))}catch(v){console.log(v)}};return B.jsx(B.Fragment,{children:B.jsx("div",{className:"head",children:B.jsxs("div",{className:"wrapper",style:{display:"flex",flexDirection:"column",gap:20},children:[B.jsx("div",{className:"title",children:B.jsx("div",{children:B.jsxs("span",{id:"title",children:["register with"," ",B.jsx("strong",{className:"book_reader",children:"BookReader"})," "]})})}),B.jsx("div",{className:"form_fields",children:B.jsxs("form",{onSubmit:f,action:"",method:"post",className:"form",children:[B.jsx("div",{className:"first_field",style:{marginBlockEnd:"10px"},children:B.jsxs("label",{htmlFor:"",children:["Enter your email",B.jsx("br",{}),B.jsx("input",{placeholder:"Email...",type:"email",required:!0,inputMode:"email",name:"email",onChange:a,value:r.email,id:`email_${s}`,style:{marginBlockStart:"4px",paddingBlock:"10px",width:"250px"}})]})}),B.jsx("div",{className:"second_field",children:B.jsxs("label",{htmlFor:"",children:["Enter your password",B.jsx("br",{}),B.jsx("input",{placeholder:"Password...",type:"password",name:"password",id:`password_${s}`,onChange:a,value:r.password,style:{marginBlockStart:"4px",paddingBlock:"10px",width:"250px"}})]})}),B.jsxs("div",{className:"",style:{marginBlockStart:"18px"},children:[B.jsxs("div",{className:"create-account",children:[B.jsx("span",{className:"login-text",children:"already register?"}),B.jsx("button",{type:"button",style:{border:"none",margin:"0px",backgroundColor:"white",fontSize:"0.9rem"},onClick:()=>n("/login",{replace:!0}),children:B.jsx("span",{style:{color:"blue",textDecoration:"underline"},children:"Login"})})]}),B.jsx("button",{className:"submit",type:"submit",children:t?"loading...":"Register"})]})]})}),B.jsxs("div",{className:"third-party",children:[B.jsxs("button",{type:"button",className:"google",onClick:d,children:[B.jsx(Bi,{icon:Gq,className:"google-icon"}),B.jsx("span",{children:"google"})]}),B.jsxs("button",{type:"button",className:"facebook",onClick:p,children:[B.jsx(Bi,{icon:Yq,className:"facebook-icon"}),B.jsx("span",{children:"facebook"})]})]})]})})})},Xq=()=>B.jsx(B.Fragment,{children:B.jsx("div",{className:"register",children:B.jsx(Qq,{})})});function Jq(){return B.jsx(B.Fragment,{children:B.jsx("div",{className:"main",style:{width:"100%"},children:B.jsxs("div",{className:"routes",children:[B.jsx("div",{className:"text-child",children:B.jsx("div",{children:B.jsxs("span",{id:"title",children:["Welcome ",B.jsx("strong",{className:"book_reader",children:"BookReader"})," "]})})}),B.jsxs("div",{className:"home-routes",children:[B.jsx("div",{className:"login",children:B.jsx(xI,{to:"login",children:"Login"})}),B.jsx("div",{className:"register",children:B.jsx(xI,{to:"register",children:"Register"})})]})]})})})}function Zq(){return B.jsx("div",{children:B.jsx("div",{className:"error",children:B.jsxs("div",{className:"errorFrame",children:[B.jsx("strong",{className:"errorMessage",children:"Oppps"}),B.jsx("strong",{className:"error404",children:"404"})]})})})}var eK={prefix:"fas",iconName:"cloud-arrow-up",icon:[640,512,[62338,"cloud-upload","cloud-upload-alt"],"f0ee","M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"]},tK=eK,nK={prefix:"fas",iconName:"pen",icon:[512,512,[128394],"f304","M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z"]},rK={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},iK={prefix:"fas",iconName:"chevron-down",icon:[512,512,[],"f078","M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]},sK={prefix:"fas",iconName:"circle-user",icon:[512,512,[62142,"user-circle"],"f2bd","M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z"]},oK={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},e2=oK;const aK="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let lK=(t=21)=>{let e="",n=crypto.getRandomValues(new Uint8Array(t));for(;t--;)e+=aK[n[t]&63];return e};var hm={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */hm.exports;(function(t,e){(function(){var n,r="4.17.21",i=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",u="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",d=500,p="__lodash_placeholder__",v=1,_=2,b=4,x=1,O=2,F=1,k=2,R=4,P=8,z=16,G=32,Z=64,E=128,I=256,C=512,N=30,M="...",U=800,D=16,pe=1,fe=2,he=3,de=1/0,H=9007199254740991,oe=17976931348623157e292,ae=NaN,ye=4294967295,Ie=ye-1,Le=ye>>>1,rt=[["ary",E],["bind",F],["bindKey",k],["curry",P],["curryRight",z],["flip",C],["partial",G],["partialRight",Z],["rearg",I]],qe="[object Arguments]",dt="[object Array]",_t="[object AsyncFunction]",Sn="[object Boolean]",An="[object Date]",Ft="[object DOMException]",nn="[object Error]",gt="[object Function]",Rn="[object GeneratorFunction]",yn="[object Map]",gi="[object Number]",Wr="[object Null]",Rr="[object Object]",pl="[object Promise]",ml="[object Proxy]",vi="[object RegExp]",Fn="[object Set]",br="[object String]",lr="[object Symbol]",eo="[object Undefined]",Hr="[object WeakMap]",wt="[object WeakSet]",Et="[object ArrayBuffer]",ur="[object DataView]",yi="[object Float32Array]",to="[object Float64Array]",cr="[object Int8Array]",qr="[object Int16Array]",cs="[object Int32Array]",fs="[object Uint8Array]",hs="[object Uint8ClampedArray]",no="[object Uint16Array]",$i="[object Uint32Array]",ro=/\b__p \+= '';/g,io=/\b(__p \+=) '' \+/g,gl=/(__e\(.*?\)|\b__t\)) \+\n'';/g,_i=/&(?:amp|lt|gt|quot|#39);/g,so=/[&<>"']/g,oo=RegExp(_i.source),wi=RegExp(so.source),$=/<%-([\s\S]+?)%>/g,K=/<%([\s\S]+?)%>/g,X=/<%=([\s\S]+?)%>/g,le=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,ve=/^\w*$/,Se=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,be=/[\\^$.*+?()[\]{}|]/g,ge=RegExp(be.source),Pe=/^\s+/,Me=/\s/,Jt=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,St=/\{\n\/\* \[wrapped with (.+)\] \*/,Ne=/,? & /,vt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,kt=/[()=,{}\[\]\/\s]/,zi=/\\(\\)?/g,fr=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,hr=/\w*$/,bn=/^[-+]0x[0-9a-f]+$/i,Ei=/^0b[01]+$/i,Xn=/^\[object .+?Constructor\]$/,Wi=/^0o[0-7]+$/i,Hi=/^(?:0|[1-9]\d*)$/,ds=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ze=/($^)/,cn=/['\n\r\u2028\u2029\\]/g,Wt="\\ud800-\\udfff",Ht="\\u0300-\\u036f",Ti="\\ufe20-\\ufe2f",qi="\\u20d0-\\u20ff",Kr=Ht+Ti+qi,vl="\\u2700-\\u27bf",ch="a-z\\xdf-\\xf6\\xf8-\\xff",fh="\\xac\\xb1\\xd7\\xf7",hh="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",dh="\\u2000-\\u206f",$u=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yl="A-Z\\xc0-\\xd6\\xd8-\\xde",zu="\\ufe0e\\ufe0f",Wu=fh+hh+dh+$u,Hu="['’]",ag="["+Wt+"]",qu="["+Wu+"]",la="["+Kr+"]",ph="\\d+",ps="["+vl+"]",Gr="["+ch+"]",ua="[^"+Wt+Wu+ph+vl+ch+yl+"]",ao="\\ud83c[\\udffb-\\udfff]",mh="(?:"+la+"|"+ao+")",yt="[^"+Wt+"]",lo="(?:\\ud83c[\\udde6-\\uddff]){2}",ms="[\\ud800-\\udbff][\\udc00-\\udfff]",Yr="["+yl+"]",gh="\\u200d",Ku="(?:"+Gr+"|"+ua+")",lg="(?:"+Yr+"|"+ua+")",vh="(?:"+Hu+"(?:d|ll|m|re|s|t|ve))?",yh="(?:"+Hu+"(?:D|LL|M|RE|S|T|VE))?",_h=mh+"?",uo="["+zu+"]?",Ki="(?:"+gh+"(?:"+[yt,lo,ms].join("|")+")"+uo+_h+")*",wh="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Eh="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Gu=uo+_h+Ki,co="(?:"+[ps,lo,ms].join("|")+")"+Gu,ug="(?:"+[yt+la+"?",la,lo,ms,ag].join("|")+")",cg=RegExp(Hu,"g"),fg=RegExp(la,"g"),Qr=RegExp(ao+"(?="+ao+")|"+ug+Gu,"g"),hg=RegExp([Yr+"?"+Gr+"+"+vh+"(?="+[qu,Yr,"$"].join("|")+")",lg+"+"+yh+"(?="+[qu,Yr+Ku,"$"].join("|")+")",Yr+"?"+Ku+"+"+vh,Yr+"+"+yh,Eh,wh,ph,co].join("|"),"g"),dg=RegExp("["+gh+Wt+Kr+zu+"]"),ca=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,_l=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Th=-1,at={};at[yi]=at[to]=at[cr]=at[qr]=at[cs]=at[fs]=at[hs]=at[no]=at[$i]=!0,at[qe]=at[dt]=at[Et]=at[Sn]=at[ur]=at[An]=at[nn]=at[gt]=at[yn]=at[gi]=at[Rr]=at[vi]=at[Fn]=at[br]=at[Hr]=!1;var ot={};ot[qe]=ot[dt]=ot[Et]=ot[ur]=ot[Sn]=ot[An]=ot[yi]=ot[to]=ot[cr]=ot[qr]=ot[cs]=ot[yn]=ot[gi]=ot[Rr]=ot[vi]=ot[Fn]=ot[br]=ot[lr]=ot[fs]=ot[hs]=ot[no]=ot[$i]=!0,ot[nn]=ot[gt]=ot[Hr]=!1;var Ih={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Yu={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Ot={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},pg={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},mg=parseFloat,Sh=parseInt,Qu=typeof ka=="object"&&ka&&ka.Object===Object&&ka,Ah=typeof self=="object"&&self&&self.Object===Object&&self,qt=Qu||Ah||Function("return this")(),wl=e&&!e.nodeType&&e,kn=wl&&!0&&t&&!t.nodeType&&t,Xu=kn&&kn.exports===wl,Ju=Xu&&Qu.process,_n=function(){try{var j=kn&&kn.require&&kn.require("util").types;return j||Ju&&Ju.binding&&Ju.binding("util")}catch{}}(),Zu=_n&&_n.isArrayBuffer,El=_n&&_n.isDate,fa=_n&&_n.isMap,ec=_n&&_n.isRegExp,ha=_n&&_n.isSet,Rh=_n&&_n.isTypedArray;function Vn(j,J,Y){switch(Y.length){case 0:return j.call(J);case 1:return j.call(J,Y[0]);case 2:return j.call(J,Y[0],Y[1]);case 3:return j.call(J,Y[0],Y[1],Y[2])}return j.apply(J,Y)}function da(j,J,Y,_e){for(var Ue=-1,ut=j==null?0:j.length;++Ue<ut;){var hn=j[Ue];J(_e,hn,Y(hn),j)}return _e}function Jn(j,J){for(var Y=-1,_e=j==null?0:j.length;++Y<_e&&J(j[Y],Y,j)!==!1;);return j}function bh(j,J){for(var Y=j==null?0:j.length;Y--&&J(j[Y],Y,j)!==!1;);return j}function Tl(j,J){for(var Y=-1,_e=j==null?0:j.length;++Y<_e;)if(!J(j[Y],Y,j))return!1;return!0}function Xr(j,J){for(var Y=-1,_e=j==null?0:j.length,Ue=0,ut=[];++Y<_e;){var hn=j[Y];J(hn,Y,j)&&(ut[Ue++]=hn)}return ut}function pa(j,J){var Y=j==null?0:j.length;return!!Y&&gs(j,J,0)>-1}function fo(j,J,Y){for(var _e=-1,Ue=j==null?0:j.length;++_e<Ue;)if(Y(J,j[_e]))return!0;return!1}function Tt(j,J){for(var Y=-1,_e=j==null?0:j.length,Ue=Array(_e);++Y<_e;)Ue[Y]=J(j[Y],Y,j);return Ue}function Ii(j,J){for(var Y=-1,_e=J.length,Ue=j.length;++Y<_e;)j[Ue+Y]=J[Y];return j}function Si(j,J,Y,_e){var Ue=-1,ut=j==null?0:j.length;for(_e&&ut&&(Y=j[++Ue]);++Ue<ut;)Y=J(Y,j[Ue],Ue,j);return Y}function kh(j,J,Y,_e){var Ue=j==null?0:j.length;for(_e&&Ue&&(Y=j[--Ue]);Ue--;)Y=J(Y,j[Ue],Ue,j);return Y}function Il(j,J){for(var Y=-1,_e=j==null?0:j.length;++Y<_e;)if(J(j[Y],Y,j))return!0;return!1}var Ch=y("length");function Ph(j){return j.split("")}function Sl(j){return j.match(vt)||[]}function Un(j,J,Y){var _e;return Y(j,function(Ue,ut,hn){if(J(Ue,ut,hn))return _e=ut,!1}),_e}function ma(j,J,Y,_e){for(var Ue=j.length,ut=Y+(_e?1:-1);_e?ut--:++ut<Ue;)if(J(j[ut],ut,j))return ut;return-1}function gs(j,J,Y){return J===J?f2(j,J,Y):ma(j,c,Y)}function ho(j,J,Y,_e){for(var Ue=Y-1,ut=j.length;++Ue<ut;)if(_e(j[Ue],J))return Ue;return-1}function c(j){return j!==j}function m(j,J){var Y=j==null?0:j.length;return Y?ce(j,J)/Y:ae}function y(j){return function(J){return J==null?n:J[j]}}function S(j){return function(J){return j==null?n:j[J]}}function q(j,J,Y,_e,Ue){return Ue(j,function(ut,hn,It){Y=_e?(_e=!1,ut):J(Y,ut,hn,It)}),Y}function Q(j,J){var Y=j.length;for(j.sort(J);Y--;)j[Y]=j[Y].value;return j}function ce(j,J){for(var Y,_e=-1,Ue=j.length;++_e<Ue;){var ut=J(j[_e]);ut!==n&&(Y=Y===n?ut:Y+ut)}return Y}function lt(j,J){for(var Y=-1,_e=Array(j);++Y<j;)_e[Y]=J(Y);return _e}function fn(j,J){return Tt(J,function(Y){return[Y,j[Y]]})}function et(j){return j&&j.slice(0,d1(j)+1).replace(Pe,"")}function ft(j){return function(J){return j(J)}}function rn(j,J){return Tt(J,function(Y){return j[Y]})}function Jr(j,J){return j.has(J)}function dr(j,J){for(var Y=-1,_e=j.length;++Y<_e&&gs(J,j[Y],0)>-1;);return Y}function ga(j,J){for(var Y=j.length;Y--&&gs(J,j[Y],0)>-1;);return Y}function tc(j,J){for(var Y=j.length,_e=0;Y--;)j[Y]===J&&++_e;return _e}var i2=S(Ih),s2=S(Yu);function o2(j){return"\\"+pg[j]}function a2(j,J){return j==null?n:j[J]}function Al(j){return dg.test(j)}function l2(j){return ca.test(j)}function u2(j){for(var J,Y=[];!(J=j.next()).done;)Y.push(J.value);return Y}function gg(j){var J=-1,Y=Array(j.size);return j.forEach(function(_e,Ue){Y[++J]=[Ue,_e]}),Y}function h1(j,J){return function(Y){return j(J(Y))}}function po(j,J){for(var Y=-1,_e=j.length,Ue=0,ut=[];++Y<_e;){var hn=j[Y];(hn===J||hn===p)&&(j[Y]=p,ut[Ue++]=Y)}return ut}function xh(j){var J=-1,Y=Array(j.size);return j.forEach(function(_e){Y[++J]=_e}),Y}function c2(j){var J=-1,Y=Array(j.size);return j.forEach(function(_e){Y[++J]=[_e,_e]}),Y}function f2(j,J,Y){for(var _e=Y-1,Ue=j.length;++_e<Ue;)if(j[_e]===J)return _e;return-1}function h2(j,J,Y){for(var _e=Y+1;_e--;)if(j[_e]===J)return _e;return _e}function Rl(j){return Al(j)?p2(j):Ch(j)}function Ai(j){return Al(j)?m2(j):Ph(j)}function d1(j){for(var J=j.length;J--&&Me.test(j.charAt(J)););return J}var d2=S(Ot);function p2(j){for(var J=Qr.lastIndex=0;Qr.test(j);)++J;return J}function m2(j){return j.match(Qr)||[]}function g2(j){return j.match(hg)||[]}var v2=function j(J){J=J==null?qt:bl.defaults(qt.Object(),J,bl.pick(qt,_l));var Y=J.Array,_e=J.Date,Ue=J.Error,ut=J.Function,hn=J.Math,It=J.Object,vg=J.RegExp,y2=J.String,Zr=J.TypeError,Nh=Y.prototype,_2=ut.prototype,kl=It.prototype,Oh=J["__core-js_shared__"],Dh=_2.toString,pt=kl.hasOwnProperty,w2=0,p1=function(){var o=/[^.]+$/.exec(Oh&&Oh.keys&&Oh.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Lh=kl.toString,E2=Dh.call(It),T2=qt._,I2=vg("^"+Dh.call(pt).replace(be,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Mh=Xu?J.Buffer:n,mo=J.Symbol,Fh=J.Uint8Array,m1=Mh?Mh.allocUnsafe:n,Vh=h1(It.getPrototypeOf,It),g1=It.create,v1=kl.propertyIsEnumerable,Uh=Nh.splice,y1=mo?mo.isConcatSpreadable:n,nc=mo?mo.iterator:n,va=mo?mo.toStringTag:n,jh=function(){try{var o=Ta(It,"defineProperty");return o({},"",{}),o}catch{}}(),S2=J.clearTimeout!==qt.clearTimeout&&J.clearTimeout,A2=_e&&_e.now!==qt.Date.now&&_e.now,R2=J.setTimeout!==qt.setTimeout&&J.setTimeout,Bh=hn.ceil,$h=hn.floor,yg=It.getOwnPropertySymbols,b2=Mh?Mh.isBuffer:n,_1=J.isFinite,k2=Nh.join,C2=h1(It.keys,It),dn=hn.max,jn=hn.min,P2=_e.now,x2=J.parseInt,w1=hn.random,N2=Nh.reverse,_g=Ta(J,"DataView"),rc=Ta(J,"Map"),wg=Ta(J,"Promise"),Cl=Ta(J,"Set"),ic=Ta(J,"WeakMap"),sc=Ta(It,"create"),zh=ic&&new ic,Pl={},O2=Ia(_g),D2=Ia(rc),L2=Ia(wg),M2=Ia(Cl),F2=Ia(ic),Wh=mo?mo.prototype:n,oc=Wh?Wh.valueOf:n,E1=Wh?Wh.toString:n;function T(o){if(Kt(o)&&!Be(o)&&!(o instanceof Je)){if(o instanceof ei)return o;if(pt.call(o,"__wrapped__"))return TE(o)}return new ei(o)}var xl=function(){function o(){}return function(l){if(!Vt(l))return{};if(g1)return g1(l);o.prototype=l;var h=new o;return o.prototype=n,h}}();function Hh(){}function ei(o,l){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=n}T.templateSettings={escape:$,evaluate:K,interpolate:X,variable:"",imports:{_:T}},T.prototype=Hh.prototype,T.prototype.constructor=T,ei.prototype=xl(Hh.prototype),ei.prototype.constructor=ei;function Je(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ye,this.__views__=[]}function V2(){var o=new Je(this.__wrapped__);return o.__actions__=pr(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=pr(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=pr(this.__views__),o}function U2(){if(this.__filtered__){var o=new Je(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function j2(){var o=this.__wrapped__.value(),l=this.__dir__,h=Be(o),g=l<0,w=h?o.length:0,A=JN(0,w,this.__views__),L=A.start,V=A.end,W=V-L,ee=g?V:L-1,te=this.__iteratees__,ne=te.length,me=0,Ae=jn(W,this.__takeCount__);if(!h||!g&&w==W&&Ae==W)return H1(o,this.__actions__);var Oe=[];e:for(;W--&&me<Ae;){ee+=l;for(var He=-1,De=o[ee];++He<ne;){var Ge=te[He],tt=Ge.iteratee,Pr=Ge.type,tr=tt(De);if(Pr==fe)De=tr;else if(!tr){if(Pr==pe)continue e;break e}}Oe[me++]=De}return Oe}Je.prototype=xl(Hh.prototype),Je.prototype.constructor=Je;function ya(o){var l=-1,h=o==null?0:o.length;for(this.clear();++l<h;){var g=o[l];this.set(g[0],g[1])}}function B2(){this.__data__=sc?sc(null):{},this.size=0}function $2(o){var l=this.has(o)&&delete this.__data__[o];return this.size-=l?1:0,l}function z2(o){var l=this.__data__;if(sc){var h=l[o];return h===f?n:h}return pt.call(l,o)?l[o]:n}function W2(o){var l=this.__data__;return sc?l[o]!==n:pt.call(l,o)}function H2(o,l){var h=this.__data__;return this.size+=this.has(o)?0:1,h[o]=sc&&l===n?f:l,this}ya.prototype.clear=B2,ya.prototype.delete=$2,ya.prototype.get=z2,ya.prototype.has=W2,ya.prototype.set=H2;function vs(o){var l=-1,h=o==null?0:o.length;for(this.clear();++l<h;){var g=o[l];this.set(g[0],g[1])}}function q2(){this.__data__=[],this.size=0}function K2(o){var l=this.__data__,h=qh(l,o);if(h<0)return!1;var g=l.length-1;return h==g?l.pop():Uh.call(l,h,1),--this.size,!0}function G2(o){var l=this.__data__,h=qh(l,o);return h<0?n:l[h][1]}function Y2(o){return qh(this.__data__,o)>-1}function Q2(o,l){var h=this.__data__,g=qh(h,o);return g<0?(++this.size,h.push([o,l])):h[g][1]=l,this}vs.prototype.clear=q2,vs.prototype.delete=K2,vs.prototype.get=G2,vs.prototype.has=Y2,vs.prototype.set=Q2;function ys(o){var l=-1,h=o==null?0:o.length;for(this.clear();++l<h;){var g=o[l];this.set(g[0],g[1])}}function X2(){this.size=0,this.__data__={hash:new ya,map:new(rc||vs),string:new ya}}function J2(o){var l=id(this,o).delete(o);return this.size-=l?1:0,l}function Z2(o){return id(this,o).get(o)}function eN(o){return id(this,o).has(o)}function tN(o,l){var h=id(this,o),g=h.size;return h.set(o,l),this.size+=h.size==g?0:1,this}ys.prototype.clear=X2,ys.prototype.delete=J2,ys.prototype.get=Z2,ys.prototype.has=eN,ys.prototype.set=tN;function _a(o){var l=-1,h=o==null?0:o.length;for(this.__data__=new ys;++l<h;)this.add(o[l])}function nN(o){return this.__data__.set(o,f),this}function rN(o){return this.__data__.has(o)}_a.prototype.add=_a.prototype.push=nN,_a.prototype.has=rN;function Ri(o){var l=this.__data__=new vs(o);this.size=l.size}function iN(){this.__data__=new vs,this.size=0}function sN(o){var l=this.__data__,h=l.delete(o);return this.size=l.size,h}function oN(o){return this.__data__.get(o)}function aN(o){return this.__data__.has(o)}function lN(o,l){var h=this.__data__;if(h instanceof vs){var g=h.__data__;if(!rc||g.length<i-1)return g.push([o,l]),this.size=++h.size,this;h=this.__data__=new ys(g)}return h.set(o,l),this.size=h.size,this}Ri.prototype.clear=iN,Ri.prototype.delete=sN,Ri.prototype.get=oN,Ri.prototype.has=aN,Ri.prototype.set=lN;function T1(o,l){var h=Be(o),g=!h&&Sa(o),w=!h&&!g&&wo(o),A=!h&&!g&&!w&&Ll(o),L=h||g||w||A,V=L?lt(o.length,y2):[],W=V.length;for(var ee in o)(l||pt.call(o,ee))&&!(L&&(ee=="length"||w&&(ee=="offset"||ee=="parent")||A&&(ee=="buffer"||ee=="byteLength"||ee=="byteOffset")||Ts(ee,W)))&&V.push(ee);return V}function I1(o){var l=o.length;return l?o[xg(0,l-1)]:n}function uN(o,l){return sd(pr(o),wa(l,0,o.length))}function cN(o){return sd(pr(o))}function Eg(o,l,h){(h!==n&&!bi(o[l],h)||h===n&&!(l in o))&&_s(o,l,h)}function ac(o,l,h){var g=o[l];(!(pt.call(o,l)&&bi(g,h))||h===n&&!(l in o))&&_s(o,l,h)}function qh(o,l){for(var h=o.length;h--;)if(bi(o[h][0],l))return h;return-1}function fN(o,l,h,g){return go(o,function(w,A,L){l(g,w,h(w),L)}),g}function S1(o,l){return o&&Yi(l,wn(l),o)}function hN(o,l){return o&&Yi(l,gr(l),o)}function _s(o,l,h){l=="__proto__"&&jh?jh(o,l,{configurable:!0,enumerable:!0,value:h,writable:!0}):o[l]=h}function Tg(o,l){for(var h=-1,g=l.length,w=Y(g),A=o==null;++h<g;)w[h]=A?n:nv(o,l[h]);return w}function wa(o,l,h){return o===o&&(h!==n&&(o=o<=h?o:h),l!==n&&(o=o>=l?o:l)),o}function ti(o,l,h,g,w,A){var L,V=l&v,W=l&_,ee=l&b;if(h&&(L=w?h(o,g,w,A):h(o)),L!==n)return L;if(!Vt(o))return o;var te=Be(o);if(te){if(L=eO(o),!V)return pr(o,L)}else{var ne=Bn(o),me=ne==gt||ne==Rn;if(wo(o))return G1(o,V);if(ne==Rr||ne==qe||me&&!w){if(L=W||me?{}:dE(o),!V)return W?zN(o,hN(L,o)):$N(o,S1(L,o))}else{if(!ot[ne])return w?o:{};L=tO(o,ne,V)}}A||(A=new Ri);var Ae=A.get(o);if(Ae)return Ae;A.set(o,L),$E(o)?o.forEach(function(De){L.add(ti(De,l,h,De,o,A))}):jE(o)&&o.forEach(function(De,Ge){L.set(Ge,ti(De,l,h,Ge,o,A))});var Oe=ee?W?$g:Bg:W?gr:wn,He=te?n:Oe(o);return Jn(He||o,function(De,Ge){He&&(Ge=De,De=o[Ge]),ac(L,Ge,ti(De,l,h,Ge,o,A))}),L}function dN(o){var l=wn(o);return function(h){return A1(h,o,l)}}function A1(o,l,h){var g=h.length;if(o==null)return!g;for(o=It(o);g--;){var w=h[g],A=l[w],L=o[w];if(L===n&&!(w in o)||!A(L))return!1}return!0}function R1(o,l,h){if(typeof o!="function")throw new Zr(a);return pc(function(){o.apply(n,h)},l)}function lc(o,l,h,g){var w=-1,A=pa,L=!0,V=o.length,W=[],ee=l.length;if(!V)return W;h&&(l=Tt(l,ft(h))),g?(A=fo,L=!1):l.length>=i&&(A=Jr,L=!1,l=new _a(l));e:for(;++w<V;){var te=o[w],ne=h==null?te:h(te);if(te=g||te!==0?te:0,L&&ne===ne){for(var me=ee;me--;)if(l[me]===ne)continue e;W.push(te)}else A(l,ne,g)||W.push(te)}return W}var go=Z1(Gi),b1=Z1(Sg,!0);function pN(o,l){var h=!0;return go(o,function(g,w,A){return h=!!l(g,w,A),h}),h}function Kh(o,l,h){for(var g=-1,w=o.length;++g<w;){var A=o[g],L=l(A);if(L!=null&&(V===n?L===L&&!Cr(L):h(L,V)))var V=L,W=A}return W}function mN(o,l,h,g){var w=o.length;for(h=We(h),h<0&&(h=-h>w?0:w+h),g=g===n||g>w?w:We(g),g<0&&(g+=w),g=h>g?0:WE(g);h<g;)o[h++]=l;return o}function k1(o,l){var h=[];return go(o,function(g,w,A){l(g,w,A)&&h.push(g)}),h}function Cn(o,l,h,g,w){var A=-1,L=o.length;for(h||(h=rO),w||(w=[]);++A<L;){var V=o[A];l>0&&h(V)?l>1?Cn(V,l-1,h,g,w):Ii(w,V):g||(w[w.length]=V)}return w}var Ig=eE(),C1=eE(!0);function Gi(o,l){return o&&Ig(o,l,wn)}function Sg(o,l){return o&&C1(o,l,wn)}function Gh(o,l){return Xr(l,function(h){return Is(o[h])})}function Ea(o,l){l=yo(l,o);for(var h=0,g=l.length;o!=null&&h<g;)o=o[Qi(l[h++])];return h&&h==g?o:n}function P1(o,l,h){var g=l(o);return Be(o)?g:Ii(g,h(o))}function Zn(o){return o==null?o===n?eo:Wr:va&&va in It(o)?XN(o):cO(o)}function Ag(o,l){return o>l}function gN(o,l){return o!=null&&pt.call(o,l)}function vN(o,l){return o!=null&&l in It(o)}function yN(o,l,h){return o>=jn(l,h)&&o<dn(l,h)}function Rg(o,l,h){for(var g=h?fo:pa,w=o[0].length,A=o.length,L=A,V=Y(A),W=1/0,ee=[];L--;){var te=o[L];L&&l&&(te=Tt(te,ft(l))),W=jn(te.length,W),V[L]=!h&&(l||w>=120&&te.length>=120)?new _a(L&&te):n}te=o[0];var ne=-1,me=V[0];e:for(;++ne<w&&ee.length<W;){var Ae=te[ne],Oe=l?l(Ae):Ae;if(Ae=h||Ae!==0?Ae:0,!(me?Jr(me,Oe):g(ee,Oe,h))){for(L=A;--L;){var He=V[L];if(!(He?Jr(He,Oe):g(o[L],Oe,h)))continue e}me&&me.push(Oe),ee.push(Ae)}}return ee}function _N(o,l,h,g){return Gi(o,function(w,A,L){l(g,h(w),A,L)}),g}function uc(o,l,h){l=yo(l,o),o=vE(o,l);var g=o==null?o:o[Qi(ri(l))];return g==null?n:Vn(g,o,h)}function x1(o){return Kt(o)&&Zn(o)==qe}function wN(o){return Kt(o)&&Zn(o)==Et}function EN(o){return Kt(o)&&Zn(o)==An}function cc(o,l,h,g,w){return o===l?!0:o==null||l==null||!Kt(o)&&!Kt(l)?o!==o&&l!==l:TN(o,l,h,g,cc,w)}function TN(o,l,h,g,w,A){var L=Be(o),V=Be(l),W=L?dt:Bn(o),ee=V?dt:Bn(l);W=W==qe?Rr:W,ee=ee==qe?Rr:ee;var te=W==Rr,ne=ee==Rr,me=W==ee;if(me&&wo(o)){if(!wo(l))return!1;L=!0,te=!1}if(me&&!te)return A||(A=new Ri),L||Ll(o)?cE(o,l,h,g,w,A):YN(o,l,W,h,g,w,A);if(!(h&x)){var Ae=te&&pt.call(o,"__wrapped__"),Oe=ne&&pt.call(l,"__wrapped__");if(Ae||Oe){var He=Ae?o.value():o,De=Oe?l.value():l;return A||(A=new Ri),w(He,De,h,g,A)}}return me?(A||(A=new Ri),QN(o,l,h,g,w,A)):!1}function IN(o){return Kt(o)&&Bn(o)==yn}function bg(o,l,h,g){var w=h.length,A=w,L=!g;if(o==null)return!A;for(o=It(o);w--;){var V=h[w];if(L&&V[2]?V[1]!==o[V[0]]:!(V[0]in o))return!1}for(;++w<A;){V=h[w];var W=V[0],ee=o[W],te=V[1];if(L&&V[2]){if(ee===n&&!(W in o))return!1}else{var ne=new Ri;if(g)var me=g(ee,te,W,o,l,ne);if(!(me===n?cc(te,ee,x|O,g,ne):me))return!1}}return!0}function N1(o){if(!Vt(o)||sO(o))return!1;var l=Is(o)?I2:Xn;return l.test(Ia(o))}function SN(o){return Kt(o)&&Zn(o)==vi}function AN(o){return Kt(o)&&Bn(o)==Fn}function RN(o){return Kt(o)&&fd(o.length)&&!!at[Zn(o)]}function O1(o){return typeof o=="function"?o:o==null?vr:typeof o=="object"?Be(o)?M1(o[0],o[1]):L1(o):tT(o)}function kg(o){if(!dc(o))return C2(o);var l=[];for(var h in It(o))pt.call(o,h)&&h!="constructor"&&l.push(h);return l}function bN(o){if(!Vt(o))return uO(o);var l=dc(o),h=[];for(var g in o)g=="constructor"&&(l||!pt.call(o,g))||h.push(g);return h}function Cg(o,l){return o<l}function D1(o,l){var h=-1,g=mr(o)?Y(o.length):[];return go(o,function(w,A,L){g[++h]=l(w,A,L)}),g}function L1(o){var l=Wg(o);return l.length==1&&l[0][2]?mE(l[0][0],l[0][1]):function(h){return h===o||bg(h,o,l)}}function M1(o,l){return qg(o)&&pE(l)?mE(Qi(o),l):function(h){var g=nv(h,o);return g===n&&g===l?rv(h,o):cc(l,g,x|O)}}function Yh(o,l,h,g,w){o!==l&&Ig(l,function(A,L){if(w||(w=new Ri),Vt(A))kN(o,l,L,h,Yh,g,w);else{var V=g?g(Gg(o,L),A,L+"",o,l,w):n;V===n&&(V=A),Eg(o,L,V)}},gr)}function kN(o,l,h,g,w,A,L){var V=Gg(o,h),W=Gg(l,h),ee=L.get(W);if(ee){Eg(o,h,ee);return}var te=A?A(V,W,h+"",o,l,L):n,ne=te===n;if(ne){var me=Be(W),Ae=!me&&wo(W),Oe=!me&&!Ae&&Ll(W);te=W,me||Ae||Oe?Be(V)?te=V:Zt(V)?te=pr(V):Ae?(ne=!1,te=G1(W,!0)):Oe?(ne=!1,te=Y1(W,!0)):te=[]:mc(W)||Sa(W)?(te=V,Sa(V)?te=HE(V):(!Vt(V)||Is(V))&&(te=dE(W))):ne=!1}ne&&(L.set(W,te),w(te,W,g,A,L),L.delete(W)),Eg(o,h,te)}function F1(o,l){var h=o.length;if(h)return l+=l<0?h:0,Ts(l,h)?o[l]:n}function V1(o,l,h){l.length?l=Tt(l,function(A){return Be(A)?function(L){return Ea(L,A.length===1?A[0]:A)}:A}):l=[vr];var g=-1;l=Tt(l,ft(xe()));var w=D1(o,function(A,L,V){var W=Tt(l,function(ee){return ee(A)});return{criteria:W,index:++g,value:A}});return Q(w,function(A,L){return BN(A,L,h)})}function CN(o,l){return U1(o,l,function(h,g){return rv(o,g)})}function U1(o,l,h){for(var g=-1,w=l.length,A={};++g<w;){var L=l[g],V=Ea(o,L);h(V,L)&&fc(A,yo(L,o),V)}return A}function PN(o){return function(l){return Ea(l,o)}}function Pg(o,l,h,g){var w=g?ho:gs,A=-1,L=l.length,V=o;for(o===l&&(l=pr(l)),h&&(V=Tt(o,ft(h)));++A<L;)for(var W=0,ee=l[A],te=h?h(ee):ee;(W=w(V,te,W,g))>-1;)V!==o&&Uh.call(V,W,1),Uh.call(o,W,1);return o}function j1(o,l){for(var h=o?l.length:0,g=h-1;h--;){var w=l[h];if(h==g||w!==A){var A=w;Ts(w)?Uh.call(o,w,1):Dg(o,w)}}return o}function xg(o,l){return o+$h(w1()*(l-o+1))}function xN(o,l,h,g){for(var w=-1,A=dn(Bh((l-o)/(h||1)),0),L=Y(A);A--;)L[g?A:++w]=o,o+=h;return L}function Ng(o,l){var h="";if(!o||l<1||l>H)return h;do l%2&&(h+=o),l=$h(l/2),l&&(o+=o);while(l);return h}function Ke(o,l){return Yg(gE(o,l,vr),o+"")}function NN(o){return I1(Ml(o))}function ON(o,l){var h=Ml(o);return sd(h,wa(l,0,h.length))}function fc(o,l,h,g){if(!Vt(o))return o;l=yo(l,o);for(var w=-1,A=l.length,L=A-1,V=o;V!=null&&++w<A;){var W=Qi(l[w]),ee=h;if(W==="__proto__"||W==="constructor"||W==="prototype")return o;if(w!=L){var te=V[W];ee=g?g(te,W,V):n,ee===n&&(ee=Vt(te)?te:Ts(l[w+1])?[]:{})}ac(V,W,ee),V=V[W]}return o}var B1=zh?function(o,l){return zh.set(o,l),o}:vr,DN=jh?function(o,l){return jh(o,"toString",{configurable:!0,enumerable:!1,value:sv(l),writable:!0})}:vr;function LN(o){return sd(Ml(o))}function ni(o,l,h){var g=-1,w=o.length;l<0&&(l=-l>w?0:w+l),h=h>w?w:h,h<0&&(h+=w),w=l>h?0:h-l>>>0,l>>>=0;for(var A=Y(w);++g<w;)A[g]=o[g+l];return A}function MN(o,l){var h;return go(o,function(g,w,A){return h=l(g,w,A),!h}),!!h}function Qh(o,l,h){var g=0,w=o==null?g:o.length;if(typeof l=="number"&&l===l&&w<=Le){for(;g<w;){var A=g+w>>>1,L=o[A];L!==null&&!Cr(L)&&(h?L<=l:L<l)?g=A+1:w=A}return w}return Og(o,l,vr,h)}function Og(o,l,h,g){var w=0,A=o==null?0:o.length;if(A===0)return 0;l=h(l);for(var L=l!==l,V=l===null,W=Cr(l),ee=l===n;w<A;){var te=$h((w+A)/2),ne=h(o[te]),me=ne!==n,Ae=ne===null,Oe=ne===ne,He=Cr(ne);if(L)var De=g||Oe;else ee?De=Oe&&(g||me):V?De=Oe&&me&&(g||!Ae):W?De=Oe&&me&&!Ae&&(g||!He):Ae||He?De=!1:De=g?ne<=l:ne<l;De?w=te+1:A=te}return jn(A,Ie)}function $1(o,l){for(var h=-1,g=o.length,w=0,A=[];++h<g;){var L=o[h],V=l?l(L):L;if(!h||!bi(V,W)){var W=V;A[w++]=L===0?0:L}}return A}function z1(o){return typeof o=="number"?o:Cr(o)?ae:+o}function kr(o){if(typeof o=="string")return o;if(Be(o))return Tt(o,kr)+"";if(Cr(o))return E1?E1.call(o):"";var l=o+"";return l=="0"&&1/o==-de?"-0":l}function vo(o,l,h){var g=-1,w=pa,A=o.length,L=!0,V=[],W=V;if(h)L=!1,w=fo;else if(A>=i){var ee=l?null:KN(o);if(ee)return xh(ee);L=!1,w=Jr,W=new _a}else W=l?[]:V;e:for(;++g<A;){var te=o[g],ne=l?l(te):te;if(te=h||te!==0?te:0,L&&ne===ne){for(var me=W.length;me--;)if(W[me]===ne)continue e;l&&W.push(ne),V.push(te)}else w(W,ne,h)||(W!==V&&W.push(ne),V.push(te))}return V}function Dg(o,l){return l=yo(l,o),o=vE(o,l),o==null||delete o[Qi(ri(l))]}function W1(o,l,h,g){return fc(o,l,h(Ea(o,l)),g)}function Xh(o,l,h,g){for(var w=o.length,A=g?w:-1;(g?A--:++A<w)&&l(o[A],A,o););return h?ni(o,g?0:A,g?A+1:w):ni(o,g?A+1:0,g?w:A)}function H1(o,l){var h=o;return h instanceof Je&&(h=h.value()),Si(l,function(g,w){return w.func.apply(w.thisArg,Ii([g],w.args))},h)}function Lg(o,l,h){var g=o.length;if(g<2)return g?vo(o[0]):[];for(var w=-1,A=Y(g);++w<g;)for(var L=o[w],V=-1;++V<g;)V!=w&&(A[w]=lc(A[w]||L,o[V],l,h));return vo(Cn(A,1),l,h)}function q1(o,l,h){for(var g=-1,w=o.length,A=l.length,L={};++g<w;){var V=g<A?l[g]:n;h(L,o[g],V)}return L}function Mg(o){return Zt(o)?o:[]}function Fg(o){return typeof o=="function"?o:vr}function yo(o,l){return Be(o)?o:qg(o,l)?[o]:EE(ht(o))}var FN=Ke;function _o(o,l,h){var g=o.length;return h=h===n?g:h,!l&&h>=g?o:ni(o,l,h)}var K1=S2||function(o){return qt.clearTimeout(o)};function G1(o,l){if(l)return o.slice();var h=o.length,g=m1?m1(h):new o.constructor(h);return o.copy(g),g}function Vg(o){var l=new o.constructor(o.byteLength);return new Fh(l).set(new Fh(o)),l}function VN(o,l){var h=l?Vg(o.buffer):o.buffer;return new o.constructor(h,o.byteOffset,o.byteLength)}function UN(o){var l=new o.constructor(o.source,hr.exec(o));return l.lastIndex=o.lastIndex,l}function jN(o){return oc?It(oc.call(o)):{}}function Y1(o,l){var h=l?Vg(o.buffer):o.buffer;return new o.constructor(h,o.byteOffset,o.length)}function Q1(o,l){if(o!==l){var h=o!==n,g=o===null,w=o===o,A=Cr(o),L=l!==n,V=l===null,W=l===l,ee=Cr(l);if(!V&&!ee&&!A&&o>l||A&&L&&W&&!V&&!ee||g&&L&&W||!h&&W||!w)return 1;if(!g&&!A&&!ee&&o<l||ee&&h&&w&&!g&&!A||V&&h&&w||!L&&w||!W)return-1}return 0}function BN(o,l,h){for(var g=-1,w=o.criteria,A=l.criteria,L=w.length,V=h.length;++g<L;){var W=Q1(w[g],A[g]);if(W){if(g>=V)return W;var ee=h[g];return W*(ee=="desc"?-1:1)}}return o.index-l.index}function X1(o,l,h,g){for(var w=-1,A=o.length,L=h.length,V=-1,W=l.length,ee=dn(A-L,0),te=Y(W+ee),ne=!g;++V<W;)te[V]=l[V];for(;++w<L;)(ne||w<A)&&(te[h[w]]=o[w]);for(;ee--;)te[V++]=o[w++];return te}function J1(o,l,h,g){for(var w=-1,A=o.length,L=-1,V=h.length,W=-1,ee=l.length,te=dn(A-V,0),ne=Y(te+ee),me=!g;++w<te;)ne[w]=o[w];for(var Ae=w;++W<ee;)ne[Ae+W]=l[W];for(;++L<V;)(me||w<A)&&(ne[Ae+h[L]]=o[w++]);return ne}function pr(o,l){var h=-1,g=o.length;for(l||(l=Y(g));++h<g;)l[h]=o[h];return l}function Yi(o,l,h,g){var w=!h;h||(h={});for(var A=-1,L=l.length;++A<L;){var V=l[A],W=g?g(h[V],o[V],V,h,o):n;W===n&&(W=o[V]),w?_s(h,V,W):ac(h,V,W)}return h}function $N(o,l){return Yi(o,Hg(o),l)}function zN(o,l){return Yi(o,fE(o),l)}function Jh(o,l){return function(h,g){var w=Be(h)?da:fN,A=l?l():{};return w(h,o,xe(g,2),A)}}function Nl(o){return Ke(function(l,h){var g=-1,w=h.length,A=w>1?h[w-1]:n,L=w>2?h[2]:n;for(A=o.length>3&&typeof A=="function"?(w--,A):n,L&&er(h[0],h[1],L)&&(A=w<3?n:A,w=1),l=It(l);++g<w;){var V=h[g];V&&o(l,V,g,A)}return l})}function Z1(o,l){return function(h,g){if(h==null)return h;if(!mr(h))return o(h,g);for(var w=h.length,A=l?w:-1,L=It(h);(l?A--:++A<w)&&g(L[A],A,L)!==!1;);return h}}function eE(o){return function(l,h,g){for(var w=-1,A=It(l),L=g(l),V=L.length;V--;){var W=L[o?V:++w];if(h(A[W],W,A)===!1)break}return l}}function WN(o,l,h){var g=l&F,w=hc(o);function A(){var L=this&&this!==qt&&this instanceof A?w:o;return L.apply(g?h:this,arguments)}return A}function tE(o){return function(l){l=ht(l);var h=Al(l)?Ai(l):n,g=h?h[0]:l.charAt(0),w=h?_o(h,1).join(""):l.slice(1);return g[o]()+w}}function Ol(o){return function(l){return Si(ZE(JE(l).replace(cg,"")),o,"")}}function hc(o){return function(){var l=arguments;switch(l.length){case 0:return new o;case 1:return new o(l[0]);case 2:return new o(l[0],l[1]);case 3:return new o(l[0],l[1],l[2]);case 4:return new o(l[0],l[1],l[2],l[3]);case 5:return new o(l[0],l[1],l[2],l[3],l[4]);case 6:return new o(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new o(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var h=xl(o.prototype),g=o.apply(h,l);return Vt(g)?g:h}}function HN(o,l,h){var g=hc(o);function w(){for(var A=arguments.length,L=Y(A),V=A,W=Dl(w);V--;)L[V]=arguments[V];var ee=A<3&&L[0]!==W&&L[A-1]!==W?[]:po(L,W);if(A-=ee.length,A<h)return oE(o,l,Zh,w.placeholder,n,L,ee,n,n,h-A);var te=this&&this!==qt&&this instanceof w?g:o;return Vn(te,this,L)}return w}function nE(o){return function(l,h,g){var w=It(l);if(!mr(l)){var A=xe(h,3);l=wn(l),h=function(V){return A(w[V],V,w)}}var L=o(l,h,g);return L>-1?w[A?l[L]:L]:n}}function rE(o){return Es(function(l){var h=l.length,g=h,w=ei.prototype.thru;for(o&&l.reverse();g--;){var A=l[g];if(typeof A!="function")throw new Zr(a);if(w&&!L&&rd(A)=="wrapper")var L=new ei([],!0)}for(g=L?g:h;++g<h;){A=l[g];var V=rd(A),W=V=="wrapper"?zg(A):n;W&&Kg(W[0])&&W[1]==(E|P|G|I)&&!W[4].length&&W[9]==1?L=L[rd(W[0])].apply(L,W[3]):L=A.length==1&&Kg(A)?L[V]():L.thru(A)}return function(){var ee=arguments,te=ee[0];if(L&&ee.length==1&&Be(te))return L.plant(te).value();for(var ne=0,me=h?l[ne].apply(this,ee):te;++ne<h;)me=l[ne].call(this,me);return me}})}function Zh(o,l,h,g,w,A,L,V,W,ee){var te=l&E,ne=l&F,me=l&k,Ae=l&(P|z),Oe=l&C,He=me?n:hc(o);function De(){for(var Ge=arguments.length,tt=Y(Ge),Pr=Ge;Pr--;)tt[Pr]=arguments[Pr];if(Ae)var tr=Dl(De),xr=tc(tt,tr);if(g&&(tt=X1(tt,g,w,Ae)),A&&(tt=J1(tt,A,L,Ae)),Ge-=xr,Ae&&Ge<ee){var en=po(tt,tr);return oE(o,l,Zh,De.placeholder,h,tt,en,V,W,ee-Ge)}var ki=ne?h:this,As=me?ki[o]:o;return Ge=tt.length,V?tt=fO(tt,V):Oe&&Ge>1&&tt.reverse(),te&&W<Ge&&(tt.length=W),this&&this!==qt&&this instanceof De&&(As=He||hc(As)),As.apply(ki,tt)}return De}function iE(o,l){return function(h,g){return _N(h,o,l(g),{})}}function ed(o,l){return function(h,g){var w;if(h===n&&g===n)return l;if(h!==n&&(w=h),g!==n){if(w===n)return g;typeof h=="string"||typeof g=="string"?(h=kr(h),g=kr(g)):(h=z1(h),g=z1(g)),w=o(h,g)}return w}}function Ug(o){return Es(function(l){return l=Tt(l,ft(xe())),Ke(function(h){var g=this;return o(l,function(w){return Vn(w,g,h)})})})}function td(o,l){l=l===n?" ":kr(l);var h=l.length;if(h<2)return h?Ng(l,o):l;var g=Ng(l,Bh(o/Rl(l)));return Al(l)?_o(Ai(g),0,o).join(""):g.slice(0,o)}function qN(o,l,h,g){var w=l&F,A=hc(o);function L(){for(var V=-1,W=arguments.length,ee=-1,te=g.length,ne=Y(te+W),me=this&&this!==qt&&this instanceof L?A:o;++ee<te;)ne[ee]=g[ee];for(;W--;)ne[ee++]=arguments[++V];return Vn(me,w?h:this,ne)}return L}function sE(o){return function(l,h,g){return g&&typeof g!="number"&&er(l,h,g)&&(h=g=n),l=Ss(l),h===n?(h=l,l=0):h=Ss(h),g=g===n?l<h?1:-1:Ss(g),xN(l,h,g,o)}}function nd(o){return function(l,h){return typeof l=="string"&&typeof h=="string"||(l=ii(l),h=ii(h)),o(l,h)}}function oE(o,l,h,g,w,A,L,V,W,ee){var te=l&P,ne=te?L:n,me=te?n:L,Ae=te?A:n,Oe=te?n:A;l|=te?G:Z,l&=~(te?Z:G),l&R||(l&=~(F|k));var He=[o,l,w,Ae,ne,Oe,me,V,W,ee],De=h.apply(n,He);return Kg(o)&&yE(De,He),De.placeholder=g,_E(De,o,l)}function jg(o){var l=hn[o];return function(h,g){if(h=ii(h),g=g==null?0:jn(We(g),292),g&&_1(h)){var w=(ht(h)+"e").split("e"),A=l(w[0]+"e"+(+w[1]+g));return w=(ht(A)+"e").split("e"),+(w[0]+"e"+(+w[1]-g))}return l(h)}}var KN=Cl&&1/xh(new Cl([,-0]))[1]==de?function(o){return new Cl(o)}:lv;function aE(o){return function(l){var h=Bn(l);return h==yn?gg(l):h==Fn?c2(l):fn(l,o(l))}}function ws(o,l,h,g,w,A,L,V){var W=l&k;if(!W&&typeof o!="function")throw new Zr(a);var ee=g?g.length:0;if(ee||(l&=~(G|Z),g=w=n),L=L===n?L:dn(We(L),0),V=V===n?V:We(V),ee-=w?w.length:0,l&Z){var te=g,ne=w;g=w=n}var me=W?n:zg(o),Ae=[o,l,h,g,w,te,ne,A,L,V];if(me&&lO(Ae,me),o=Ae[0],l=Ae[1],h=Ae[2],g=Ae[3],w=Ae[4],V=Ae[9]=Ae[9]===n?W?0:o.length:dn(Ae[9]-ee,0),!V&&l&(P|z)&&(l&=~(P|z)),!l||l==F)var Oe=WN(o,l,h);else l==P||l==z?Oe=HN(o,l,V):(l==G||l==(F|G))&&!w.length?Oe=qN(o,l,h,g):Oe=Zh.apply(n,Ae);var He=me?B1:yE;return _E(He(Oe,Ae),o,l)}function lE(o,l,h,g){return o===n||bi(o,kl[h])&&!pt.call(g,h)?l:o}function uE(o,l,h,g,w,A){return Vt(o)&&Vt(l)&&(A.set(l,o),Yh(o,l,n,uE,A),A.delete(l)),o}function GN(o){return mc(o)?n:o}function cE(o,l,h,g,w,A){var L=h&x,V=o.length,W=l.length;if(V!=W&&!(L&&W>V))return!1;var ee=A.get(o),te=A.get(l);if(ee&&te)return ee==l&&te==o;var ne=-1,me=!0,Ae=h&O?new _a:n;for(A.set(o,l),A.set(l,o);++ne<V;){var Oe=o[ne],He=l[ne];if(g)var De=L?g(He,Oe,ne,l,o,A):g(Oe,He,ne,o,l,A);if(De!==n){if(De)continue;me=!1;break}if(Ae){if(!Il(l,function(Ge,tt){if(!Jr(Ae,tt)&&(Oe===Ge||w(Oe,Ge,h,g,A)))return Ae.push(tt)})){me=!1;break}}else if(!(Oe===He||w(Oe,He,h,g,A))){me=!1;break}}return A.delete(o),A.delete(l),me}function YN(o,l,h,g,w,A,L){switch(h){case ur:if(o.byteLength!=l.byteLength||o.byteOffset!=l.byteOffset)return!1;o=o.buffer,l=l.buffer;case Et:return!(o.byteLength!=l.byteLength||!A(new Fh(o),new Fh(l)));case Sn:case An:case gi:return bi(+o,+l);case nn:return o.name==l.name&&o.message==l.message;case vi:case br:return o==l+"";case yn:var V=gg;case Fn:var W=g&x;if(V||(V=xh),o.size!=l.size&&!W)return!1;var ee=L.get(o);if(ee)return ee==l;g|=O,L.set(o,l);var te=cE(V(o),V(l),g,w,A,L);return L.delete(o),te;case lr:if(oc)return oc.call(o)==oc.call(l)}return!1}function QN(o,l,h,g,w,A){var L=h&x,V=Bg(o),W=V.length,ee=Bg(l),te=ee.length;if(W!=te&&!L)return!1;for(var ne=W;ne--;){var me=V[ne];if(!(L?me in l:pt.call(l,me)))return!1}var Ae=A.get(o),Oe=A.get(l);if(Ae&&Oe)return Ae==l&&Oe==o;var He=!0;A.set(o,l),A.set(l,o);for(var De=L;++ne<W;){me=V[ne];var Ge=o[me],tt=l[me];if(g)var Pr=L?g(tt,Ge,me,l,o,A):g(Ge,tt,me,o,l,A);if(!(Pr===n?Ge===tt||w(Ge,tt,h,g,A):Pr)){He=!1;break}De||(De=me=="constructor")}if(He&&!De){var tr=o.constructor,xr=l.constructor;tr!=xr&&"constructor"in o&&"constructor"in l&&!(typeof tr=="function"&&tr instanceof tr&&typeof xr=="function"&&xr instanceof xr)&&(He=!1)}return A.delete(o),A.delete(l),He}function Es(o){return Yg(gE(o,n,AE),o+"")}function Bg(o){return P1(o,wn,Hg)}function $g(o){return P1(o,gr,fE)}var zg=zh?function(o){return zh.get(o)}:lv;function rd(o){for(var l=o.name+"",h=Pl[l],g=pt.call(Pl,l)?h.length:0;g--;){var w=h[g],A=w.func;if(A==null||A==o)return w.name}return l}function Dl(o){var l=pt.call(T,"placeholder")?T:o;return l.placeholder}function xe(){var o=T.iteratee||ov;return o=o===ov?O1:o,arguments.length?o(arguments[0],arguments[1]):o}function id(o,l){var h=o.__data__;return iO(l)?h[typeof l=="string"?"string":"hash"]:h.map}function Wg(o){for(var l=wn(o),h=l.length;h--;){var g=l[h],w=o[g];l[h]=[g,w,pE(w)]}return l}function Ta(o,l){var h=a2(o,l);return N1(h)?h:n}function XN(o){var l=pt.call(o,va),h=o[va];try{o[va]=n;var g=!0}catch{}var w=Lh.call(o);return g&&(l?o[va]=h:delete o[va]),w}var Hg=yg?function(o){return o==null?[]:(o=It(o),Xr(yg(o),function(l){return v1.call(o,l)}))}:uv,fE=yg?function(o){for(var l=[];o;)Ii(l,Hg(o)),o=Vh(o);return l}:uv,Bn=Zn;(_g&&Bn(new _g(new ArrayBuffer(1)))!=ur||rc&&Bn(new rc)!=yn||wg&&Bn(wg.resolve())!=pl||Cl&&Bn(new Cl)!=Fn||ic&&Bn(new ic)!=Hr)&&(Bn=function(o){var l=Zn(o),h=l==Rr?o.constructor:n,g=h?Ia(h):"";if(g)switch(g){case O2:return ur;case D2:return yn;case L2:return pl;case M2:return Fn;case F2:return Hr}return l});function JN(o,l,h){for(var g=-1,w=h.length;++g<w;){var A=h[g],L=A.size;switch(A.type){case"drop":o+=L;break;case"dropRight":l-=L;break;case"take":l=jn(l,o+L);break;case"takeRight":o=dn(o,l-L);break}}return{start:o,end:l}}function ZN(o){var l=o.match(St);return l?l[1].split(Ne):[]}function hE(o,l,h){l=yo(l,o);for(var g=-1,w=l.length,A=!1;++g<w;){var L=Qi(l[g]);if(!(A=o!=null&&h(o,L)))break;o=o[L]}return A||++g!=w?A:(w=o==null?0:o.length,!!w&&fd(w)&&Ts(L,w)&&(Be(o)||Sa(o)))}function eO(o){var l=o.length,h=new o.constructor(l);return l&&typeof o[0]=="string"&&pt.call(o,"index")&&(h.index=o.index,h.input=o.input),h}function dE(o){return typeof o.constructor=="function"&&!dc(o)?xl(Vh(o)):{}}function tO(o,l,h){var g=o.constructor;switch(l){case Et:return Vg(o);case Sn:case An:return new g(+o);case ur:return VN(o,h);case yi:case to:case cr:case qr:case cs:case fs:case hs:case no:case $i:return Y1(o,h);case yn:return new g;case gi:case br:return new g(o);case vi:return UN(o);case Fn:return new g;case lr:return jN(o)}}function nO(o,l){var h=l.length;if(!h)return o;var g=h-1;return l[g]=(h>1?"& ":"")+l[g],l=l.join(h>2?", ":" "),o.replace(Jt,`{
/* [wrapped with `+l+`] */
`)}function rO(o){return Be(o)||Sa(o)||!!(y1&&o&&o[y1])}function Ts(o,l){var h=typeof o;return l=l??H,!!l&&(h=="number"||h!="symbol"&&Hi.test(o))&&o>-1&&o%1==0&&o<l}function er(o,l,h){if(!Vt(h))return!1;var g=typeof l;return(g=="number"?mr(h)&&Ts(l,h.length):g=="string"&&l in h)?bi(h[l],o):!1}function qg(o,l){if(Be(o))return!1;var h=typeof o;return h=="number"||h=="symbol"||h=="boolean"||o==null||Cr(o)?!0:ve.test(o)||!le.test(o)||l!=null&&o in It(l)}function iO(o){var l=typeof o;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?o!=="__proto__":o===null}function Kg(o){var l=rd(o),h=T[l];if(typeof h!="function"||!(l in Je.prototype))return!1;if(o===h)return!0;var g=zg(h);return!!g&&o===g[0]}function sO(o){return!!p1&&p1 in o}var oO=Oh?Is:cv;function dc(o){var l=o&&o.constructor,h=typeof l=="function"&&l.prototype||kl;return o===h}function pE(o){return o===o&&!Vt(o)}function mE(o,l){return function(h){return h==null?!1:h[o]===l&&(l!==n||o in It(h))}}function aO(o){var l=ud(o,function(g){return h.size===d&&h.clear(),g}),h=l.cache;return l}function lO(o,l){var h=o[1],g=l[1],w=h|g,A=w<(F|k|E),L=g==E&&h==P||g==E&&h==I&&o[7].length<=l[8]||g==(E|I)&&l[7].length<=l[8]&&h==P;if(!(A||L))return o;g&F&&(o[2]=l[2],w|=h&F?0:R);var V=l[3];if(V){var W=o[3];o[3]=W?X1(W,V,l[4]):V,o[4]=W?po(o[3],p):l[4]}return V=l[5],V&&(W=o[5],o[5]=W?J1(W,V,l[6]):V,o[6]=W?po(o[5],p):l[6]),V=l[7],V&&(o[7]=V),g&E&&(o[8]=o[8]==null?l[8]:jn(o[8],l[8])),o[9]==null&&(o[9]=l[9]),o[0]=l[0],o[1]=w,o}function uO(o){var l=[];if(o!=null)for(var h in It(o))l.push(h);return l}function cO(o){return Lh.call(o)}function gE(o,l,h){return l=dn(l===n?o.length-1:l,0),function(){for(var g=arguments,w=-1,A=dn(g.length-l,0),L=Y(A);++w<A;)L[w]=g[l+w];w=-1;for(var V=Y(l+1);++w<l;)V[w]=g[w];return V[l]=h(L),Vn(o,this,V)}}function vE(o,l){return l.length<2?o:Ea(o,ni(l,0,-1))}function fO(o,l){for(var h=o.length,g=jn(l.length,h),w=pr(o);g--;){var A=l[g];o[g]=Ts(A,h)?w[A]:n}return o}function Gg(o,l){if(!(l==="constructor"&&typeof o[l]=="function")&&l!="__proto__")return o[l]}var yE=wE(B1),pc=R2||function(o,l){return qt.setTimeout(o,l)},Yg=wE(DN);function _E(o,l,h){var g=l+"";return Yg(o,nO(g,hO(ZN(g),h)))}function wE(o){var l=0,h=0;return function(){var g=P2(),w=D-(g-h);if(h=g,w>0){if(++l>=U)return arguments[0]}else l=0;return o.apply(n,arguments)}}function sd(o,l){var h=-1,g=o.length,w=g-1;for(l=l===n?g:l;++h<l;){var A=xg(h,w),L=o[A];o[A]=o[h],o[h]=L}return o.length=l,o}var EE=aO(function(o){var l=[];return o.charCodeAt(0)===46&&l.push(""),o.replace(Se,function(h,g,w,A){l.push(w?A.replace(zi,"$1"):g||h)}),l});function Qi(o){if(typeof o=="string"||Cr(o))return o;var l=o+"";return l=="0"&&1/o==-de?"-0":l}function Ia(o){if(o!=null){try{return Dh.call(o)}catch{}try{return o+""}catch{}}return""}function hO(o,l){return Jn(rt,function(h){var g="_."+h[0];l&h[1]&&!pa(o,g)&&o.push(g)}),o.sort()}function TE(o){if(o instanceof Je)return o.clone();var l=new ei(o.__wrapped__,o.__chain__);return l.__actions__=pr(o.__actions__),l.__index__=o.__index__,l.__values__=o.__values__,l}function dO(o,l,h){(h?er(o,l,h):l===n)?l=1:l=dn(We(l),0);var g=o==null?0:o.length;if(!g||l<1)return[];for(var w=0,A=0,L=Y(Bh(g/l));w<g;)L[A++]=ni(o,w,w+=l);return L}function pO(o){for(var l=-1,h=o==null?0:o.length,g=0,w=[];++l<h;){var A=o[l];A&&(w[g++]=A)}return w}function mO(){var o=arguments.length;if(!o)return[];for(var l=Y(o-1),h=arguments[0],g=o;g--;)l[g-1]=arguments[g];return Ii(Be(h)?pr(h):[h],Cn(l,1))}var gO=Ke(function(o,l){return Zt(o)?lc(o,Cn(l,1,Zt,!0)):[]}),vO=Ke(function(o,l){var h=ri(l);return Zt(h)&&(h=n),Zt(o)?lc(o,Cn(l,1,Zt,!0),xe(h,2)):[]}),yO=Ke(function(o,l){var h=ri(l);return Zt(h)&&(h=n),Zt(o)?lc(o,Cn(l,1,Zt,!0),n,h):[]});function _O(o,l,h){var g=o==null?0:o.length;return g?(l=h||l===n?1:We(l),ni(o,l<0?0:l,g)):[]}function wO(o,l,h){var g=o==null?0:o.length;return g?(l=h||l===n?1:We(l),l=g-l,ni(o,0,l<0?0:l)):[]}function EO(o,l){return o&&o.length?Xh(o,xe(l,3),!0,!0):[]}function TO(o,l){return o&&o.length?Xh(o,xe(l,3),!0):[]}function IO(o,l,h,g){var w=o==null?0:o.length;return w?(h&&typeof h!="number"&&er(o,l,h)&&(h=0,g=w),mN(o,l,h,g)):[]}function IE(o,l,h){var g=o==null?0:o.length;if(!g)return-1;var w=h==null?0:We(h);return w<0&&(w=dn(g+w,0)),ma(o,xe(l,3),w)}function SE(o,l,h){var g=o==null?0:o.length;if(!g)return-1;var w=g-1;return h!==n&&(w=We(h),w=h<0?dn(g+w,0):jn(w,g-1)),ma(o,xe(l,3),w,!0)}function AE(o){var l=o==null?0:o.length;return l?Cn(o,1):[]}function SO(o){var l=o==null?0:o.length;return l?Cn(o,de):[]}function AO(o,l){var h=o==null?0:o.length;return h?(l=l===n?1:We(l),Cn(o,l)):[]}function RO(o){for(var l=-1,h=o==null?0:o.length,g={};++l<h;){var w=o[l];g[w[0]]=w[1]}return g}function RE(o){return o&&o.length?o[0]:n}function bO(o,l,h){var g=o==null?0:o.length;if(!g)return-1;var w=h==null?0:We(h);return w<0&&(w=dn(g+w,0)),gs(o,l,w)}function kO(o){var l=o==null?0:o.length;return l?ni(o,0,-1):[]}var CO=Ke(function(o){var l=Tt(o,Mg);return l.length&&l[0]===o[0]?Rg(l):[]}),PO=Ke(function(o){var l=ri(o),h=Tt(o,Mg);return l===ri(h)?l=n:h.pop(),h.length&&h[0]===o[0]?Rg(h,xe(l,2)):[]}),xO=Ke(function(o){var l=ri(o),h=Tt(o,Mg);return l=typeof l=="function"?l:n,l&&h.pop(),h.length&&h[0]===o[0]?Rg(h,n,l):[]});function NO(o,l){return o==null?"":k2.call(o,l)}function ri(o){var l=o==null?0:o.length;return l?o[l-1]:n}function OO(o,l,h){var g=o==null?0:o.length;if(!g)return-1;var w=g;return h!==n&&(w=We(h),w=w<0?dn(g+w,0):jn(w,g-1)),l===l?h2(o,l,w):ma(o,c,w,!0)}function DO(o,l){return o&&o.length?F1(o,We(l)):n}var LO=Ke(bE);function bE(o,l){return o&&o.length&&l&&l.length?Pg(o,l):o}function MO(o,l,h){return o&&o.length&&l&&l.length?Pg(o,l,xe(h,2)):o}function FO(o,l,h){return o&&o.length&&l&&l.length?Pg(o,l,n,h):o}var VO=Es(function(o,l){var h=o==null?0:o.length,g=Tg(o,l);return j1(o,Tt(l,function(w){return Ts(w,h)?+w:w}).sort(Q1)),g});function UO(o,l){var h=[];if(!(o&&o.length))return h;var g=-1,w=[],A=o.length;for(l=xe(l,3);++g<A;){var L=o[g];l(L,g,o)&&(h.push(L),w.push(g))}return j1(o,w),h}function Qg(o){return o==null?o:N2.call(o)}function jO(o,l,h){var g=o==null?0:o.length;return g?(h&&typeof h!="number"&&er(o,l,h)?(l=0,h=g):(l=l==null?0:We(l),h=h===n?g:We(h)),ni(o,l,h)):[]}function BO(o,l){return Qh(o,l)}function $O(o,l,h){return Og(o,l,xe(h,2))}function zO(o,l){var h=o==null?0:o.length;if(h){var g=Qh(o,l);if(g<h&&bi(o[g],l))return g}return-1}function WO(o,l){return Qh(o,l,!0)}function HO(o,l,h){return Og(o,l,xe(h,2),!0)}function qO(o,l){var h=o==null?0:o.length;if(h){var g=Qh(o,l,!0)-1;if(bi(o[g],l))return g}return-1}function KO(o){return o&&o.length?$1(o):[]}function GO(o,l){return o&&o.length?$1(o,xe(l,2)):[]}function YO(o){var l=o==null?0:o.length;return l?ni(o,1,l):[]}function QO(o,l,h){return o&&o.length?(l=h||l===n?1:We(l),ni(o,0,l<0?0:l)):[]}function XO(o,l,h){var g=o==null?0:o.length;return g?(l=h||l===n?1:We(l),l=g-l,ni(o,l<0?0:l,g)):[]}function JO(o,l){return o&&o.length?Xh(o,xe(l,3),!1,!0):[]}function ZO(o,l){return o&&o.length?Xh(o,xe(l,3)):[]}var eD=Ke(function(o){return vo(Cn(o,1,Zt,!0))}),tD=Ke(function(o){var l=ri(o);return Zt(l)&&(l=n),vo(Cn(o,1,Zt,!0),xe(l,2))}),nD=Ke(function(o){var l=ri(o);return l=typeof l=="function"?l:n,vo(Cn(o,1,Zt,!0),n,l)});function rD(o){return o&&o.length?vo(o):[]}function iD(o,l){return o&&o.length?vo(o,xe(l,2)):[]}function sD(o,l){return l=typeof l=="function"?l:n,o&&o.length?vo(o,n,l):[]}function Xg(o){if(!(o&&o.length))return[];var l=0;return o=Xr(o,function(h){if(Zt(h))return l=dn(h.length,l),!0}),lt(l,function(h){return Tt(o,y(h))})}function kE(o,l){if(!(o&&o.length))return[];var h=Xg(o);return l==null?h:Tt(h,function(g){return Vn(l,n,g)})}var oD=Ke(function(o,l){return Zt(o)?lc(o,l):[]}),aD=Ke(function(o){return Lg(Xr(o,Zt))}),lD=Ke(function(o){var l=ri(o);return Zt(l)&&(l=n),Lg(Xr(o,Zt),xe(l,2))}),uD=Ke(function(o){var l=ri(o);return l=typeof l=="function"?l:n,Lg(Xr(o,Zt),n,l)}),cD=Ke(Xg);function fD(o,l){return q1(o||[],l||[],ac)}function hD(o,l){return q1(o||[],l||[],fc)}var dD=Ke(function(o){var l=o.length,h=l>1?o[l-1]:n;return h=typeof h=="function"?(o.pop(),h):n,kE(o,h)});function CE(o){var l=T(o);return l.__chain__=!0,l}function pD(o,l){return l(o),o}function od(o,l){return l(o)}var mD=Es(function(o){var l=o.length,h=l?o[0]:0,g=this.__wrapped__,w=function(A){return Tg(A,o)};return l>1||this.__actions__.length||!(g instanceof Je)||!Ts(h)?this.thru(w):(g=g.slice(h,+h+(l?1:0)),g.__actions__.push({func:od,args:[w],thisArg:n}),new ei(g,this.__chain__).thru(function(A){return l&&!A.length&&A.push(n),A}))});function gD(){return CE(this)}function vD(){return new ei(this.value(),this.__chain__)}function yD(){this.__values__===n&&(this.__values__=zE(this.value()));var o=this.__index__>=this.__values__.length,l=o?n:this.__values__[this.__index__++];return{done:o,value:l}}function _D(){return this}function wD(o){for(var l,h=this;h instanceof Hh;){var g=TE(h);g.__index__=0,g.__values__=n,l?w.__wrapped__=g:l=g;var w=g;h=h.__wrapped__}return w.__wrapped__=o,l}function ED(){var o=this.__wrapped__;if(o instanceof Je){var l=o;return this.__actions__.length&&(l=new Je(this)),l=l.reverse(),l.__actions__.push({func:od,args:[Qg],thisArg:n}),new ei(l,this.__chain__)}return this.thru(Qg)}function TD(){return H1(this.__wrapped__,this.__actions__)}var ID=Jh(function(o,l,h){pt.call(o,h)?++o[h]:_s(o,h,1)});function SD(o,l,h){var g=Be(o)?Tl:pN;return h&&er(o,l,h)&&(l=n),g(o,xe(l,3))}function AD(o,l){var h=Be(o)?Xr:k1;return h(o,xe(l,3))}var RD=nE(IE),bD=nE(SE);function kD(o,l){return Cn(ad(o,l),1)}function CD(o,l){return Cn(ad(o,l),de)}function PD(o,l,h){return h=h===n?1:We(h),Cn(ad(o,l),h)}function PE(o,l){var h=Be(o)?Jn:go;return h(o,xe(l,3))}function xE(o,l){var h=Be(o)?bh:b1;return h(o,xe(l,3))}var xD=Jh(function(o,l,h){pt.call(o,h)?o[h].push(l):_s(o,h,[l])});function ND(o,l,h,g){o=mr(o)?o:Ml(o),h=h&&!g?We(h):0;var w=o.length;return h<0&&(h=dn(w+h,0)),hd(o)?h<=w&&o.indexOf(l,h)>-1:!!w&&gs(o,l,h)>-1}var OD=Ke(function(o,l,h){var g=-1,w=typeof l=="function",A=mr(o)?Y(o.length):[];return go(o,function(L){A[++g]=w?Vn(l,L,h):uc(L,l,h)}),A}),DD=Jh(function(o,l,h){_s(o,h,l)});function ad(o,l){var h=Be(o)?Tt:D1;return h(o,xe(l,3))}function LD(o,l,h,g){return o==null?[]:(Be(l)||(l=l==null?[]:[l]),h=g?n:h,Be(h)||(h=h==null?[]:[h]),V1(o,l,h))}var MD=Jh(function(o,l,h){o[h?0:1].push(l)},function(){return[[],[]]});function FD(o,l,h){var g=Be(o)?Si:q,w=arguments.length<3;return g(o,xe(l,4),h,w,go)}function VD(o,l,h){var g=Be(o)?kh:q,w=arguments.length<3;return g(o,xe(l,4),h,w,b1)}function UD(o,l){var h=Be(o)?Xr:k1;return h(o,cd(xe(l,3)))}function jD(o){var l=Be(o)?I1:NN;return l(o)}function BD(o,l,h){(h?er(o,l,h):l===n)?l=1:l=We(l);var g=Be(o)?uN:ON;return g(o,l)}function $D(o){var l=Be(o)?cN:LN;return l(o)}function zD(o){if(o==null)return 0;if(mr(o))return hd(o)?Rl(o):o.length;var l=Bn(o);return l==yn||l==Fn?o.size:kg(o).length}function WD(o,l,h){var g=Be(o)?Il:MN;return h&&er(o,l,h)&&(l=n),g(o,xe(l,3))}var HD=Ke(function(o,l){if(o==null)return[];var h=l.length;return h>1&&er(o,l[0],l[1])?l=[]:h>2&&er(l[0],l[1],l[2])&&(l=[l[0]]),V1(o,Cn(l,1),[])}),ld=A2||function(){return qt.Date.now()};function qD(o,l){if(typeof l!="function")throw new Zr(a);return o=We(o),function(){if(--o<1)return l.apply(this,arguments)}}function NE(o,l,h){return l=h?n:l,l=o&&l==null?o.length:l,ws(o,E,n,n,n,n,l)}function OE(o,l){var h;if(typeof l!="function")throw new Zr(a);return o=We(o),function(){return--o>0&&(h=l.apply(this,arguments)),o<=1&&(l=n),h}}var Jg=Ke(function(o,l,h){var g=F;if(h.length){var w=po(h,Dl(Jg));g|=G}return ws(o,g,l,h,w)}),DE=Ke(function(o,l,h){var g=F|k;if(h.length){var w=po(h,Dl(DE));g|=G}return ws(l,g,o,h,w)});function LE(o,l,h){l=h?n:l;var g=ws(o,P,n,n,n,n,n,l);return g.placeholder=LE.placeholder,g}function ME(o,l,h){l=h?n:l;var g=ws(o,z,n,n,n,n,n,l);return g.placeholder=ME.placeholder,g}function FE(o,l,h){var g,w,A,L,V,W,ee=0,te=!1,ne=!1,me=!0;if(typeof o!="function")throw new Zr(a);l=ii(l)||0,Vt(h)&&(te=!!h.leading,ne="maxWait"in h,A=ne?dn(ii(h.maxWait)||0,l):A,me="trailing"in h?!!h.trailing:me);function Ae(en){var ki=g,As=w;return g=w=n,ee=en,L=o.apply(As,ki),L}function Oe(en){return ee=en,V=pc(Ge,l),te?Ae(en):L}function He(en){var ki=en-W,As=en-ee,nT=l-ki;return ne?jn(nT,A-As):nT}function De(en){var ki=en-W,As=en-ee;return W===n||ki>=l||ki<0||ne&&As>=A}function Ge(){var en=ld();if(De(en))return tt(en);V=pc(Ge,He(en))}function tt(en){return V=n,me&&g?Ae(en):(g=w=n,L)}function Pr(){V!==n&&K1(V),ee=0,g=W=w=V=n}function tr(){return V===n?L:tt(ld())}function xr(){var en=ld(),ki=De(en);if(g=arguments,w=this,W=en,ki){if(V===n)return Oe(W);if(ne)return K1(V),V=pc(Ge,l),Ae(W)}return V===n&&(V=pc(Ge,l)),L}return xr.cancel=Pr,xr.flush=tr,xr}var KD=Ke(function(o,l){return R1(o,1,l)}),GD=Ke(function(o,l,h){return R1(o,ii(l)||0,h)});function YD(o){return ws(o,C)}function ud(o,l){if(typeof o!="function"||l!=null&&typeof l!="function")throw new Zr(a);var h=function(){var g=arguments,w=l?l.apply(this,g):g[0],A=h.cache;if(A.has(w))return A.get(w);var L=o.apply(this,g);return h.cache=A.set(w,L)||A,L};return h.cache=new(ud.Cache||ys),h}ud.Cache=ys;function cd(o){if(typeof o!="function")throw new Zr(a);return function(){var l=arguments;switch(l.length){case 0:return!o.call(this);case 1:return!o.call(this,l[0]);case 2:return!o.call(this,l[0],l[1]);case 3:return!o.call(this,l[0],l[1],l[2])}return!o.apply(this,l)}}function QD(o){return OE(2,o)}var XD=FN(function(o,l){l=l.length==1&&Be(l[0])?Tt(l[0],ft(xe())):Tt(Cn(l,1),ft(xe()));var h=l.length;return Ke(function(g){for(var w=-1,A=jn(g.length,h);++w<A;)g[w]=l[w].call(this,g[w]);return Vn(o,this,g)})}),Zg=Ke(function(o,l){var h=po(l,Dl(Zg));return ws(o,G,n,l,h)}),VE=Ke(function(o,l){var h=po(l,Dl(VE));return ws(o,Z,n,l,h)}),JD=Es(function(o,l){return ws(o,I,n,n,n,l)});function ZD(o,l){if(typeof o!="function")throw new Zr(a);return l=l===n?l:We(l),Ke(o,l)}function eL(o,l){if(typeof o!="function")throw new Zr(a);return l=l==null?0:dn(We(l),0),Ke(function(h){var g=h[l],w=_o(h,0,l);return g&&Ii(w,g),Vn(o,this,w)})}function tL(o,l,h){var g=!0,w=!0;if(typeof o!="function")throw new Zr(a);return Vt(h)&&(g="leading"in h?!!h.leading:g,w="trailing"in h?!!h.trailing:w),FE(o,l,{leading:g,maxWait:l,trailing:w})}function nL(o){return NE(o,1)}function rL(o,l){return Zg(Fg(l),o)}function iL(){if(!arguments.length)return[];var o=arguments[0];return Be(o)?o:[o]}function sL(o){return ti(o,b)}function oL(o,l){return l=typeof l=="function"?l:n,ti(o,b,l)}function aL(o){return ti(o,v|b)}function lL(o,l){return l=typeof l=="function"?l:n,ti(o,v|b,l)}function uL(o,l){return l==null||A1(o,l,wn(l))}function bi(o,l){return o===l||o!==o&&l!==l}var cL=nd(Ag),fL=nd(function(o,l){return o>=l}),Sa=x1(function(){return arguments}())?x1:function(o){return Kt(o)&&pt.call(o,"callee")&&!v1.call(o,"callee")},Be=Y.isArray,hL=Zu?ft(Zu):wN;function mr(o){return o!=null&&fd(o.length)&&!Is(o)}function Zt(o){return Kt(o)&&mr(o)}function dL(o){return o===!0||o===!1||Kt(o)&&Zn(o)==Sn}var wo=b2||cv,pL=El?ft(El):EN;function mL(o){return Kt(o)&&o.nodeType===1&&!mc(o)}function gL(o){if(o==null)return!0;if(mr(o)&&(Be(o)||typeof o=="string"||typeof o.splice=="function"||wo(o)||Ll(o)||Sa(o)))return!o.length;var l=Bn(o);if(l==yn||l==Fn)return!o.size;if(dc(o))return!kg(o).length;for(var h in o)if(pt.call(o,h))return!1;return!0}function vL(o,l){return cc(o,l)}function yL(o,l,h){h=typeof h=="function"?h:n;var g=h?h(o,l):n;return g===n?cc(o,l,n,h):!!g}function ev(o){if(!Kt(o))return!1;var l=Zn(o);return l==nn||l==Ft||typeof o.message=="string"&&typeof o.name=="string"&&!mc(o)}function _L(o){return typeof o=="number"&&_1(o)}function Is(o){if(!Vt(o))return!1;var l=Zn(o);return l==gt||l==Rn||l==_t||l==ml}function UE(o){return typeof o=="number"&&o==We(o)}function fd(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=H}function Vt(o){var l=typeof o;return o!=null&&(l=="object"||l=="function")}function Kt(o){return o!=null&&typeof o=="object"}var jE=fa?ft(fa):IN;function wL(o,l){return o===l||bg(o,l,Wg(l))}function EL(o,l,h){return h=typeof h=="function"?h:n,bg(o,l,Wg(l),h)}function TL(o){return BE(o)&&o!=+o}function IL(o){if(oO(o))throw new Ue(s);return N1(o)}function SL(o){return o===null}function AL(o){return o==null}function BE(o){return typeof o=="number"||Kt(o)&&Zn(o)==gi}function mc(o){if(!Kt(o)||Zn(o)!=Rr)return!1;var l=Vh(o);if(l===null)return!0;var h=pt.call(l,"constructor")&&l.constructor;return typeof h=="function"&&h instanceof h&&Dh.call(h)==E2}var tv=ec?ft(ec):SN;function RL(o){return UE(o)&&o>=-H&&o<=H}var $E=ha?ft(ha):AN;function hd(o){return typeof o=="string"||!Be(o)&&Kt(o)&&Zn(o)==br}function Cr(o){return typeof o=="symbol"||Kt(o)&&Zn(o)==lr}var Ll=Rh?ft(Rh):RN;function bL(o){return o===n}function kL(o){return Kt(o)&&Bn(o)==Hr}function CL(o){return Kt(o)&&Zn(o)==wt}var PL=nd(Cg),xL=nd(function(o,l){return o<=l});function zE(o){if(!o)return[];if(mr(o))return hd(o)?Ai(o):pr(o);if(nc&&o[nc])return u2(o[nc]());var l=Bn(o),h=l==yn?gg:l==Fn?xh:Ml;return h(o)}function Ss(o){if(!o)return o===0?o:0;if(o=ii(o),o===de||o===-de){var l=o<0?-1:1;return l*oe}return o===o?o:0}function We(o){var l=Ss(o),h=l%1;return l===l?h?l-h:l:0}function WE(o){return o?wa(We(o),0,ye):0}function ii(o){if(typeof o=="number")return o;if(Cr(o))return ae;if(Vt(o)){var l=typeof o.valueOf=="function"?o.valueOf():o;o=Vt(l)?l+"":l}if(typeof o!="string")return o===0?o:+o;o=et(o);var h=Ei.test(o);return h||Wi.test(o)?Sh(o.slice(2),h?2:8):bn.test(o)?ae:+o}function HE(o){return Yi(o,gr(o))}function NL(o){return o?wa(We(o),-H,H):o===0?o:0}function ht(o){return o==null?"":kr(o)}var OL=Nl(function(o,l){if(dc(l)||mr(l)){Yi(l,wn(l),o);return}for(var h in l)pt.call(l,h)&&ac(o,h,l[h])}),qE=Nl(function(o,l){Yi(l,gr(l),o)}),dd=Nl(function(o,l,h,g){Yi(l,gr(l),o,g)}),DL=Nl(function(o,l,h,g){Yi(l,wn(l),o,g)}),LL=Es(Tg);function ML(o,l){var h=xl(o);return l==null?h:S1(h,l)}var FL=Ke(function(o,l){o=It(o);var h=-1,g=l.length,w=g>2?l[2]:n;for(w&&er(l[0],l[1],w)&&(g=1);++h<g;)for(var A=l[h],L=gr(A),V=-1,W=L.length;++V<W;){var ee=L[V],te=o[ee];(te===n||bi(te,kl[ee])&&!pt.call(o,ee))&&(o[ee]=A[ee])}return o}),VL=Ke(function(o){return o.push(n,uE),Vn(KE,n,o)});function UL(o,l){return Un(o,xe(l,3),Gi)}function jL(o,l){return Un(o,xe(l,3),Sg)}function BL(o,l){return o==null?o:Ig(o,xe(l,3),gr)}function $L(o,l){return o==null?o:C1(o,xe(l,3),gr)}function zL(o,l){return o&&Gi(o,xe(l,3))}function WL(o,l){return o&&Sg(o,xe(l,3))}function HL(o){return o==null?[]:Gh(o,wn(o))}function qL(o){return o==null?[]:Gh(o,gr(o))}function nv(o,l,h){var g=o==null?n:Ea(o,l);return g===n?h:g}function KL(o,l){return o!=null&&hE(o,l,gN)}function rv(o,l){return o!=null&&hE(o,l,vN)}var GL=iE(function(o,l,h){l!=null&&typeof l.toString!="function"&&(l=Lh.call(l)),o[l]=h},sv(vr)),YL=iE(function(o,l,h){l!=null&&typeof l.toString!="function"&&(l=Lh.call(l)),pt.call(o,l)?o[l].push(h):o[l]=[h]},xe),QL=Ke(uc);function wn(o){return mr(o)?T1(o):kg(o)}function gr(o){return mr(o)?T1(o,!0):bN(o)}function XL(o,l){var h={};return l=xe(l,3),Gi(o,function(g,w,A){_s(h,l(g,w,A),g)}),h}function JL(o,l){var h={};return l=xe(l,3),Gi(o,function(g,w,A){_s(h,w,l(g,w,A))}),h}var ZL=Nl(function(o,l,h){Yh(o,l,h)}),KE=Nl(function(o,l,h,g){Yh(o,l,h,g)}),eM=Es(function(o,l){var h={};if(o==null)return h;var g=!1;l=Tt(l,function(A){return A=yo(A,o),g||(g=A.length>1),A}),Yi(o,$g(o),h),g&&(h=ti(h,v|_|b,GN));for(var w=l.length;w--;)Dg(h,l[w]);return h});function tM(o,l){return GE(o,cd(xe(l)))}var nM=Es(function(o,l){return o==null?{}:CN(o,l)});function GE(o,l){if(o==null)return{};var h=Tt($g(o),function(g){return[g]});return l=xe(l),U1(o,h,function(g,w){return l(g,w[0])})}function rM(o,l,h){l=yo(l,o);var g=-1,w=l.length;for(w||(w=1,o=n);++g<w;){var A=o==null?n:o[Qi(l[g])];A===n&&(g=w,A=h),o=Is(A)?A.call(o):A}return o}function iM(o,l,h){return o==null?o:fc(o,l,h)}function sM(o,l,h,g){return g=typeof g=="function"?g:n,o==null?o:fc(o,l,h,g)}var YE=aE(wn),QE=aE(gr);function oM(o,l,h){var g=Be(o),w=g||wo(o)||Ll(o);if(l=xe(l,4),h==null){var A=o&&o.constructor;w?h=g?new A:[]:Vt(o)?h=Is(A)?xl(Vh(o)):{}:h={}}return(w?Jn:Gi)(o,function(L,V,W){return l(h,L,V,W)}),h}function aM(o,l){return o==null?!0:Dg(o,l)}function lM(o,l,h){return o==null?o:W1(o,l,Fg(h))}function uM(o,l,h,g){return g=typeof g=="function"?g:n,o==null?o:W1(o,l,Fg(h),g)}function Ml(o){return o==null?[]:rn(o,wn(o))}function cM(o){return o==null?[]:rn(o,gr(o))}function fM(o,l,h){return h===n&&(h=l,l=n),h!==n&&(h=ii(h),h=h===h?h:0),l!==n&&(l=ii(l),l=l===l?l:0),wa(ii(o),l,h)}function hM(o,l,h){return l=Ss(l),h===n?(h=l,l=0):h=Ss(h),o=ii(o),yN(o,l,h)}function dM(o,l,h){if(h&&typeof h!="boolean"&&er(o,l,h)&&(l=h=n),h===n&&(typeof l=="boolean"?(h=l,l=n):typeof o=="boolean"&&(h=o,o=n)),o===n&&l===n?(o=0,l=1):(o=Ss(o),l===n?(l=o,o=0):l=Ss(l)),o>l){var g=o;o=l,l=g}if(h||o%1||l%1){var w=w1();return jn(o+w*(l-o+mg("1e-"+((w+"").length-1))),l)}return xg(o,l)}var pM=Ol(function(o,l,h){return l=l.toLowerCase(),o+(h?XE(l):l)});function XE(o){return iv(ht(o).toLowerCase())}function JE(o){return o=ht(o),o&&o.replace(ds,i2).replace(fg,"")}function mM(o,l,h){o=ht(o),l=kr(l);var g=o.length;h=h===n?g:wa(We(h),0,g);var w=h;return h-=l.length,h>=0&&o.slice(h,w)==l}function gM(o){return o=ht(o),o&&wi.test(o)?o.replace(so,s2):o}function vM(o){return o=ht(o),o&&ge.test(o)?o.replace(be,"\\$&"):o}var yM=Ol(function(o,l,h){return o+(h?"-":"")+l.toLowerCase()}),_M=Ol(function(o,l,h){return o+(h?" ":"")+l.toLowerCase()}),wM=tE("toLowerCase");function EM(o,l,h){o=ht(o),l=We(l);var g=l?Rl(o):0;if(!l||g>=l)return o;var w=(l-g)/2;return td($h(w),h)+o+td(Bh(w),h)}function TM(o,l,h){o=ht(o),l=We(l);var g=l?Rl(o):0;return l&&g<l?o+td(l-g,h):o}function IM(o,l,h){o=ht(o),l=We(l);var g=l?Rl(o):0;return l&&g<l?td(l-g,h)+o:o}function SM(o,l,h){return h||l==null?l=0:l&&(l=+l),x2(ht(o).replace(Pe,""),l||0)}function AM(o,l,h){return(h?er(o,l,h):l===n)?l=1:l=We(l),Ng(ht(o),l)}function RM(){var o=arguments,l=ht(o[0]);return o.length<3?l:l.replace(o[1],o[2])}var bM=Ol(function(o,l,h){return o+(h?"_":"")+l.toLowerCase()});function kM(o,l,h){return h&&typeof h!="number"&&er(o,l,h)&&(l=h=n),h=h===n?ye:h>>>0,h?(o=ht(o),o&&(typeof l=="string"||l!=null&&!tv(l))&&(l=kr(l),!l&&Al(o))?_o(Ai(o),0,h):o.split(l,h)):[]}var CM=Ol(function(o,l,h){return o+(h?" ":"")+iv(l)});function PM(o,l,h){return o=ht(o),h=h==null?0:wa(We(h),0,o.length),l=kr(l),o.slice(h,h+l.length)==l}function xM(o,l,h){var g=T.templateSettings;h&&er(o,l,h)&&(l=n),o=ht(o),l=dd({},l,g,lE);var w=dd({},l.imports,g.imports,lE),A=wn(w),L=rn(w,A),V,W,ee=0,te=l.interpolate||ze,ne="__p += '",me=vg((l.escape||ze).source+"|"+te.source+"|"+(te===X?fr:ze).source+"|"+(l.evaluate||ze).source+"|$","g"),Ae="//# sourceURL="+(pt.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Th+"]")+`
`;o.replace(me,function(De,Ge,tt,Pr,tr,xr){return tt||(tt=Pr),ne+=o.slice(ee,xr).replace(cn,o2),Ge&&(V=!0,ne+=`' +
__e(`+Ge+`) +
'`),tr&&(W=!0,ne+=`';
`+tr+`;
__p += '`),tt&&(ne+=`' +
((__t = (`+tt+`)) == null ? '' : __t) +
'`),ee=xr+De.length,De}),ne+=`';
`;var Oe=pt.call(l,"variable")&&l.variable;if(!Oe)ne=`with (obj) {
`+ne+`
}
`;else if(kt.test(Oe))throw new Ue(u);ne=(W?ne.replace(ro,""):ne).replace(io,"$1").replace(gl,"$1;"),ne="function("+(Oe||"obj")+`) {
`+(Oe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(V?", __e = _.escape":"")+(W?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ne+`return __p
}`;var He=eT(function(){return ut(A,Ae+"return "+ne).apply(n,L)});if(He.source=ne,ev(He))throw He;return He}function NM(o){return ht(o).toLowerCase()}function OM(o){return ht(o).toUpperCase()}function DM(o,l,h){if(o=ht(o),o&&(h||l===n))return et(o);if(!o||!(l=kr(l)))return o;var g=Ai(o),w=Ai(l),A=dr(g,w),L=ga(g,w)+1;return _o(g,A,L).join("")}function LM(o,l,h){if(o=ht(o),o&&(h||l===n))return o.slice(0,d1(o)+1);if(!o||!(l=kr(l)))return o;var g=Ai(o),w=ga(g,Ai(l))+1;return _o(g,0,w).join("")}function MM(o,l,h){if(o=ht(o),o&&(h||l===n))return o.replace(Pe,"");if(!o||!(l=kr(l)))return o;var g=Ai(o),w=dr(g,Ai(l));return _o(g,w).join("")}function FM(o,l){var h=N,g=M;if(Vt(l)){var w="separator"in l?l.separator:w;h="length"in l?We(l.length):h,g="omission"in l?kr(l.omission):g}o=ht(o);var A=o.length;if(Al(o)){var L=Ai(o);A=L.length}if(h>=A)return o;var V=h-Rl(g);if(V<1)return g;var W=L?_o(L,0,V).join(""):o.slice(0,V);if(w===n)return W+g;if(L&&(V+=W.length-V),tv(w)){if(o.slice(V).search(w)){var ee,te=W;for(w.global||(w=vg(w.source,ht(hr.exec(w))+"g")),w.lastIndex=0;ee=w.exec(te);)var ne=ee.index;W=W.slice(0,ne===n?V:ne)}}else if(o.indexOf(kr(w),V)!=V){var me=W.lastIndexOf(w);me>-1&&(W=W.slice(0,me))}return W+g}function VM(o){return o=ht(o),o&&oo.test(o)?o.replace(_i,d2):o}var UM=Ol(function(o,l,h){return o+(h?" ":"")+l.toUpperCase()}),iv=tE("toUpperCase");function ZE(o,l,h){return o=ht(o),l=h?n:l,l===n?l2(o)?g2(o):Sl(o):o.match(l)||[]}var eT=Ke(function(o,l){try{return Vn(o,n,l)}catch(h){return ev(h)?h:new Ue(h)}}),jM=Es(function(o,l){return Jn(l,function(h){h=Qi(h),_s(o,h,Jg(o[h],o))}),o});function BM(o){var l=o==null?0:o.length,h=xe();return o=l?Tt(o,function(g){if(typeof g[1]!="function")throw new Zr(a);return[h(g[0]),g[1]]}):[],Ke(function(g){for(var w=-1;++w<l;){var A=o[w];if(Vn(A[0],this,g))return Vn(A[1],this,g)}})}function $M(o){return dN(ti(o,v))}function sv(o){return function(){return o}}function zM(o,l){return o==null||o!==o?l:o}var WM=rE(),HM=rE(!0);function vr(o){return o}function ov(o){return O1(typeof o=="function"?o:ti(o,v))}function qM(o){return L1(ti(o,v))}function KM(o,l){return M1(o,ti(l,v))}var GM=Ke(function(o,l){return function(h){return uc(h,o,l)}}),YM=Ke(function(o,l){return function(h){return uc(o,h,l)}});function av(o,l,h){var g=wn(l),w=Gh(l,g);h==null&&!(Vt(l)&&(w.length||!g.length))&&(h=l,l=o,o=this,w=Gh(l,wn(l)));var A=!(Vt(h)&&"chain"in h)||!!h.chain,L=Is(o);return Jn(w,function(V){var W=l[V];o[V]=W,L&&(o.prototype[V]=function(){var ee=this.__chain__;if(A||ee){var te=o(this.__wrapped__),ne=te.__actions__=pr(this.__actions__);return ne.push({func:W,args:arguments,thisArg:o}),te.__chain__=ee,te}return W.apply(o,Ii([this.value()],arguments))})}),o}function QM(){return qt._===this&&(qt._=T2),this}function lv(){}function XM(o){return o=We(o),Ke(function(l){return F1(l,o)})}var JM=Ug(Tt),ZM=Ug(Tl),e4=Ug(Il);function tT(o){return qg(o)?y(Qi(o)):PN(o)}function t4(o){return function(l){return o==null?n:Ea(o,l)}}var n4=sE(),r4=sE(!0);function uv(){return[]}function cv(){return!1}function i4(){return{}}function s4(){return""}function o4(){return!0}function a4(o,l){if(o=We(o),o<1||o>H)return[];var h=ye,g=jn(o,ye);l=xe(l),o-=ye;for(var w=lt(g,l);++h<o;)l(h);return w}function l4(o){return Be(o)?Tt(o,Qi):Cr(o)?[o]:pr(EE(ht(o)))}function u4(o){var l=++w2;return ht(o)+l}var c4=ed(function(o,l){return o+l},0),f4=jg("ceil"),h4=ed(function(o,l){return o/l},1),d4=jg("floor");function p4(o){return o&&o.length?Kh(o,vr,Ag):n}function m4(o,l){return o&&o.length?Kh(o,xe(l,2),Ag):n}function g4(o){return m(o,vr)}function v4(o,l){return m(o,xe(l,2))}function y4(o){return o&&o.length?Kh(o,vr,Cg):n}function _4(o,l){return o&&o.length?Kh(o,xe(l,2),Cg):n}var w4=ed(function(o,l){return o*l},1),E4=jg("round"),T4=ed(function(o,l){return o-l},0);function I4(o){return o&&o.length?ce(o,vr):0}function S4(o,l){return o&&o.length?ce(o,xe(l,2)):0}return T.after=qD,T.ary=NE,T.assign=OL,T.assignIn=qE,T.assignInWith=dd,T.assignWith=DL,T.at=LL,T.before=OE,T.bind=Jg,T.bindAll=jM,T.bindKey=DE,T.castArray=iL,T.chain=CE,T.chunk=dO,T.compact=pO,T.concat=mO,T.cond=BM,T.conforms=$M,T.constant=sv,T.countBy=ID,T.create=ML,T.curry=LE,T.curryRight=ME,T.debounce=FE,T.defaults=FL,T.defaultsDeep=VL,T.defer=KD,T.delay=GD,T.difference=gO,T.differenceBy=vO,T.differenceWith=yO,T.drop=_O,T.dropRight=wO,T.dropRightWhile=EO,T.dropWhile=TO,T.fill=IO,T.filter=AD,T.flatMap=kD,T.flatMapDeep=CD,T.flatMapDepth=PD,T.flatten=AE,T.flattenDeep=SO,T.flattenDepth=AO,T.flip=YD,T.flow=WM,T.flowRight=HM,T.fromPairs=RO,T.functions=HL,T.functionsIn=qL,T.groupBy=xD,T.initial=kO,T.intersection=CO,T.intersectionBy=PO,T.intersectionWith=xO,T.invert=GL,T.invertBy=YL,T.invokeMap=OD,T.iteratee=ov,T.keyBy=DD,T.keys=wn,T.keysIn=gr,T.map=ad,T.mapKeys=XL,T.mapValues=JL,T.matches=qM,T.matchesProperty=KM,T.memoize=ud,T.merge=ZL,T.mergeWith=KE,T.method=GM,T.methodOf=YM,T.mixin=av,T.negate=cd,T.nthArg=XM,T.omit=eM,T.omitBy=tM,T.once=QD,T.orderBy=LD,T.over=JM,T.overArgs=XD,T.overEvery=ZM,T.overSome=e4,T.partial=Zg,T.partialRight=VE,T.partition=MD,T.pick=nM,T.pickBy=GE,T.property=tT,T.propertyOf=t4,T.pull=LO,T.pullAll=bE,T.pullAllBy=MO,T.pullAllWith=FO,T.pullAt=VO,T.range=n4,T.rangeRight=r4,T.rearg=JD,T.reject=UD,T.remove=UO,T.rest=ZD,T.reverse=Qg,T.sampleSize=BD,T.set=iM,T.setWith=sM,T.shuffle=$D,T.slice=jO,T.sortBy=HD,T.sortedUniq=KO,T.sortedUniqBy=GO,T.split=kM,T.spread=eL,T.tail=YO,T.take=QO,T.takeRight=XO,T.takeRightWhile=JO,T.takeWhile=ZO,T.tap=pD,T.throttle=tL,T.thru=od,T.toArray=zE,T.toPairs=YE,T.toPairsIn=QE,T.toPath=l4,T.toPlainObject=HE,T.transform=oM,T.unary=nL,T.union=eD,T.unionBy=tD,T.unionWith=nD,T.uniq=rD,T.uniqBy=iD,T.uniqWith=sD,T.unset=aM,T.unzip=Xg,T.unzipWith=kE,T.update=lM,T.updateWith=uM,T.values=Ml,T.valuesIn=cM,T.without=oD,T.words=ZE,T.wrap=rL,T.xor=aD,T.xorBy=lD,T.xorWith=uD,T.zip=cD,T.zipObject=fD,T.zipObjectDeep=hD,T.zipWith=dD,T.entries=YE,T.entriesIn=QE,T.extend=qE,T.extendWith=dd,av(T,T),T.add=c4,T.attempt=eT,T.camelCase=pM,T.capitalize=XE,T.ceil=f4,T.clamp=fM,T.clone=sL,T.cloneDeep=aL,T.cloneDeepWith=lL,T.cloneWith=oL,T.conformsTo=uL,T.deburr=JE,T.defaultTo=zM,T.divide=h4,T.endsWith=mM,T.eq=bi,T.escape=gM,T.escapeRegExp=vM,T.every=SD,T.find=RD,T.findIndex=IE,T.findKey=UL,T.findLast=bD,T.findLastIndex=SE,T.findLastKey=jL,T.floor=d4,T.forEach=PE,T.forEachRight=xE,T.forIn=BL,T.forInRight=$L,T.forOwn=zL,T.forOwnRight=WL,T.get=nv,T.gt=cL,T.gte=fL,T.has=KL,T.hasIn=rv,T.head=RE,T.identity=vr,T.includes=ND,T.indexOf=bO,T.inRange=hM,T.invoke=QL,T.isArguments=Sa,T.isArray=Be,T.isArrayBuffer=hL,T.isArrayLike=mr,T.isArrayLikeObject=Zt,T.isBoolean=dL,T.isBuffer=wo,T.isDate=pL,T.isElement=mL,T.isEmpty=gL,T.isEqual=vL,T.isEqualWith=yL,T.isError=ev,T.isFinite=_L,T.isFunction=Is,T.isInteger=UE,T.isLength=fd,T.isMap=jE,T.isMatch=wL,T.isMatchWith=EL,T.isNaN=TL,T.isNative=IL,T.isNil=AL,T.isNull=SL,T.isNumber=BE,T.isObject=Vt,T.isObjectLike=Kt,T.isPlainObject=mc,T.isRegExp=tv,T.isSafeInteger=RL,T.isSet=$E,T.isString=hd,T.isSymbol=Cr,T.isTypedArray=Ll,T.isUndefined=bL,T.isWeakMap=kL,T.isWeakSet=CL,T.join=NO,T.kebabCase=yM,T.last=ri,T.lastIndexOf=OO,T.lowerCase=_M,T.lowerFirst=wM,T.lt=PL,T.lte=xL,T.max=p4,T.maxBy=m4,T.mean=g4,T.meanBy=v4,T.min=y4,T.minBy=_4,T.stubArray=uv,T.stubFalse=cv,T.stubObject=i4,T.stubString=s4,T.stubTrue=o4,T.multiply=w4,T.nth=DO,T.noConflict=QM,T.noop=lv,T.now=ld,T.pad=EM,T.padEnd=TM,T.padStart=IM,T.parseInt=SM,T.random=dM,T.reduce=FD,T.reduceRight=VD,T.repeat=AM,T.replace=RM,T.result=rM,T.round=E4,T.runInContext=j,T.sample=jD,T.size=zD,T.snakeCase=bM,T.some=WD,T.sortedIndex=BO,T.sortedIndexBy=$O,T.sortedIndexOf=zO,T.sortedLastIndex=WO,T.sortedLastIndexBy=HO,T.sortedLastIndexOf=qO,T.startCase=CM,T.startsWith=PM,T.subtract=T4,T.sum=I4,T.sumBy=S4,T.template=xM,T.times=a4,T.toFinite=Ss,T.toInteger=We,T.toLength=WE,T.toLower=NM,T.toNumber=ii,T.toSafeInteger=NL,T.toString=ht,T.toUpper=OM,T.trim=DM,T.trimEnd=LM,T.trimStart=MM,T.truncate=FM,T.unescape=VM,T.uniqueId=u4,T.upperCase=UM,T.upperFirst=iv,T.each=PE,T.eachRight=xE,T.first=RE,av(T,function(){var o={};return Gi(T,function(l,h){pt.call(T.prototype,h)||(o[h]=l)}),o}(),{chain:!1}),T.VERSION=r,Jn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){T[o].placeholder=T}),Jn(["drop","take"],function(o,l){Je.prototype[o]=function(h){h=h===n?1:dn(We(h),0);var g=this.__filtered__&&!l?new Je(this):this.clone();return g.__filtered__?g.__takeCount__=jn(h,g.__takeCount__):g.__views__.push({size:jn(h,ye),type:o+(g.__dir__<0?"Right":"")}),g},Je.prototype[o+"Right"]=function(h){return this.reverse()[o](h).reverse()}}),Jn(["filter","map","takeWhile"],function(o,l){var h=l+1,g=h==pe||h==he;Je.prototype[o]=function(w){var A=this.clone();return A.__iteratees__.push({iteratee:xe(w,3),type:h}),A.__filtered__=A.__filtered__||g,A}}),Jn(["head","last"],function(o,l){var h="take"+(l?"Right":"");Je.prototype[o]=function(){return this[h](1).value()[0]}}),Jn(["initial","tail"],function(o,l){var h="drop"+(l?"":"Right");Je.prototype[o]=function(){return this.__filtered__?new Je(this):this[h](1)}}),Je.prototype.compact=function(){return this.filter(vr)},Je.prototype.find=function(o){return this.filter(o).head()},Je.prototype.findLast=function(o){return this.reverse().find(o)},Je.prototype.invokeMap=Ke(function(o,l){return typeof o=="function"?new Je(this):this.map(function(h){return uc(h,o,l)})}),Je.prototype.reject=function(o){return this.filter(cd(xe(o)))},Je.prototype.slice=function(o,l){o=We(o);var h=this;return h.__filtered__&&(o>0||l<0)?new Je(h):(o<0?h=h.takeRight(-o):o&&(h=h.drop(o)),l!==n&&(l=We(l),h=l<0?h.dropRight(-l):h.take(l-o)),h)},Je.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},Je.prototype.toArray=function(){return this.take(ye)},Gi(Je.prototype,function(o,l){var h=/^(?:filter|find|map|reject)|While$/.test(l),g=/^(?:head|last)$/.test(l),w=T[g?"take"+(l=="last"?"Right":""):l],A=g||/^find/.test(l);w&&(T.prototype[l]=function(){var L=this.__wrapped__,V=g?[1]:arguments,W=L instanceof Je,ee=V[0],te=W||Be(L),ne=function(Ge){var tt=w.apply(T,Ii([Ge],V));return g&&me?tt[0]:tt};te&&h&&typeof ee=="function"&&ee.length!=1&&(W=te=!1);var me=this.__chain__,Ae=!!this.__actions__.length,Oe=A&&!me,He=W&&!Ae;if(!A&&te){L=He?L:new Je(this);var De=o.apply(L,V);return De.__actions__.push({func:od,args:[ne],thisArg:n}),new ei(De,me)}return Oe&&He?o.apply(this,V):(De=this.thru(ne),Oe?g?De.value()[0]:De.value():De)})}),Jn(["pop","push","shift","sort","splice","unshift"],function(o){var l=Nh[o],h=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",g=/^(?:pop|shift)$/.test(o);T.prototype[o]=function(){var w=arguments;if(g&&!this.__chain__){var A=this.value();return l.apply(Be(A)?A:[],w)}return this[h](function(L){return l.apply(Be(L)?L:[],w)})}}),Gi(Je.prototype,function(o,l){var h=T[l];if(h){var g=h.name+"";pt.call(Pl,g)||(Pl[g]=[]),Pl[g].push({name:l,func:h})}}),Pl[Zh(n,k).name]=[{name:"wrapper",func:n}],Je.prototype.clone=V2,Je.prototype.reverse=U2,Je.prototype.value=j2,T.prototype.at=mD,T.prototype.chain=gD,T.prototype.commit=vD,T.prototype.next=yD,T.prototype.plant=wD,T.prototype.reverse=ED,T.prototype.toJSON=T.prototype.valueOf=T.prototype.value=TD,T.prototype.first=T.prototype.head,nc&&(T.prototype[nc]=_D),T},bl=v2();kn?((kn.exports=bl)._=bl,wl._=bl):qt._=bl}).call(ka)})(hm,hm.exports);var Kd=hm.exports;const uK=t=>{if(t)return!0},cK=t=>{var n,r;const e=Kd.assignIn(Kd.result(t,"FileInfo"));if(Kd.isMatchWith(e,{valid:!0},uK))return Kd.setWith(e,"ImageInfo",{previewImage:URL.createObjectURL((n=e.file)==null?void 0:n[0]),singleFile:(r=e.file)==null?void 0:r[0]},Object)},fK=({setOpen:t,setPicture:e})=>{const[n,r]=re.useState(),[i,s]=re.useState(""),[a,u]=re.useState(!1),[f,d]=re.useState(!1),p=async x=>{var k,R;const O=x.target.validity,F=x.target.files;if(O&&O.valid){const P=cK({FileInfo:{file:F,valid:O.valid}});u(!!(P!=null&&P.valid)),r((k=P==null?void 0:P.ImageInfo)==null?void 0:k.singleFile),s(`${(R=P==null?void 0:P.ImageInfo)==null?void 0:R.previewImage}`)}},v=om(wx),_=om(v,`users/${(n==null?void 0:n.name)+lK()}`),b=async()=>{try{if(n&&ci.currentUser){d(!0);const x=await nW(_,n);await Nz(ci.currentUser,{photoURL:x.metadata.fullPath}),d(!1);const O=await dx(x.ref);e(O),t(!1)}}catch(x){console.log(x)}};return B.jsx(B.Fragment,{children:B.jsx("div",{className:"frame",children:B.jsxs("div",{className:"uploadFrame",children:[B.jsx("button",{className:"backbutton",onClick:()=>{t(!1),u(!1)},children:B.jsx(Bi,{icon:e2,style:{fontSize:"1.1rem"}})}),B.jsxs("div",{className:"framecontent",children:[B.jsx("div",{className:"divText",children:B.jsx("strong",{className:"uploadText",children:"Choose your image"})}),a?B.jsx("div",{className:"image",children:B.jsx("img",{src:i,alt:"userImage"})}):B.jsxs("div",{className:"upload",children:[B.jsx("label",{className:"button",htmlFor:"input-file",children:B.jsx(Bi,{icon:tK,style:{width:"100px",height:"100px"}})}),B.jsx("input",{type:"file",id:"input-file",onChange:p,style:{display:"none"}})]}),B.jsx("div",{className:"save",children:B.jsx("button",{type:"button",onClick:b,children:f?"Loading...":"Upload"})})]})]})})})},hK=({picture:t,setPicture:e})=>{var f,d;const[n,r]=re.useState(!1),i=om(GW,`${(f=ci.currentUser)==null?void 0:f.photoURL}`),s=Nm(),a=async()=>{await Mz(ci),s("/login",{replace:!0})},u=p=>{if(p){const v=p.split(" "),_=v[0].charAt(0).toUpperCase(),b=`${v[1]}`.toLowerCase();return`${_}. ${b}`}};return re.useEffect(()=>{dx(i).then(p=>{e(p)}).catch(p=>console.log(p))},[i]),B.jsxs(B.Fragment,{children:[n&&B.jsx(fK,{setOpen:r,setPicture:e}),B.jsxs("div",{className:"navbar",children:[B.jsx("div",{className:"logo",children:B.jsx("strong",{className:"book_reader",children:"BookReader"})}),B.jsxs("div",{className:"right-side",children:[B.jsxs("div",{className:"user",children:[B.jsx("div",{className:"username",children:B.jsx("strong",{children:u(`${(d=ci.currentUser)==null?void 0:d.displayName}`)})}),B.jsx("div",{className:"picture",children:t.length>0?B.jsx("img",{src:t,alt:"",width:"35px",height:"35px"}):B.jsx(Bi,{style:{fontSize:"1.7rem",color:"gray"},icon:sK})}),B.jsx("div",{className:"icon",children:B.jsx("button",{type:"button",className:"upload",onClick:()=>r(p=>!p),children:B.jsx(Bi,{icon:iK})})})]}),B.jsx("div",{className:"Logout",children:B.jsx("button",{type:"button",className:"logout",onClick:a,children:"LogOut"})})]})]})]})},dK=({id:t,setOpen:e})=>{const n=bw(am,"books",t),[r,i]=re.useState(""),s=u=>{const f=u.target;i(f.value)},a=async()=>{try{const u=await b$(n,{title:r});e(!1),console.log(u)}catch(u){throw new Error(`${u}`)}};return B.jsx(B.Fragment,{children:B.jsx("div",{className:"frameforupdate",children:B.jsxs("div",{className:"updateFrame",children:[B.jsx("button",{className:"backbutton",onClick:()=>e(!1),children:B.jsx(Bi,{icon:e2,style:{fontSize:"1.1rem"}})}),B.jsx("div",{className:"updateText",children:B.jsx("strong",{className:"update",children:" Update the book "})}),B.jsxs("div",{className:"framecontent",children:[B.jsx("div",{className:"title",children:B.jsxs("label",{htmlFor:"titlefor",children:[B.jsx("span",{children:"Enter the book title"}),B.jsx("br",{}),B.jsx("input",{name:"titlefor",className:"titleinput",type:"text",placeholder:"enter a title...",value:r,onChange:s})]})}),B.jsx("div",{className:"updatebutton",children:B.jsx("button",{type:"button",onClick:a,children:"Update"})})]})]})})})},pK=({id:t})=>{const e=bw(am,"books",t),n=async()=>{try{await k$(e)}catch(r){throw new Error(`${r}`)}};return B.jsx(B.Fragment,{children:B.jsx("div",{className:"delete",children:B.jsx("button",{type:"button",onClick:n,children:B.jsx(Bi,{className:"del",icon:rK})})})})};var t2={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(ka,function(){var n=1e3,r=6e4,i=36e5,s="millisecond",a="second",u="minute",f="hour",d="day",p="week",v="month",_="quarter",b="year",x="date",O="Invalid Date",F=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,k=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,R={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(pe){var fe=["th","st","nd","rd"],he=pe%100;return"["+pe+(fe[(he-20)%10]||fe[he]||fe[0])+"]"}},P=function(pe,fe,he){var de=String(pe);return!de||de.length>=fe?pe:""+Array(fe+1-de.length).join(he)+pe},z={s:P,z:function(pe){var fe=-pe.utcOffset(),he=Math.abs(fe),de=Math.floor(he/60),H=he%60;return(fe<=0?"+":"-")+P(de,2,"0")+":"+P(H,2,"0")},m:function pe(fe,he){if(fe.date()<he.date())return-pe(he,fe);var de=12*(he.year()-fe.year())+(he.month()-fe.month()),H=fe.clone().add(de,v),oe=he-H<0,ae=fe.clone().add(de+(oe?-1:1),v);return+(-(de+(he-H)/(oe?H-ae:ae-H))||0)},a:function(pe){return pe<0?Math.ceil(pe)||0:Math.floor(pe)},p:function(pe){return{M:v,y:b,w:p,d,D:x,h:f,m:u,s:a,ms:s,Q:_}[pe]||String(pe||"").toLowerCase().replace(/s$/,"")},u:function(pe){return pe===void 0}},G="en",Z={};Z[G]=R;var E="$isDayjsObject",I=function(pe){return pe instanceof U||!(!pe||!pe[E])},C=function pe(fe,he,de){var H;if(!fe)return G;if(typeof fe=="string"){var oe=fe.toLowerCase();Z[oe]&&(H=oe),he&&(Z[oe]=he,H=oe);var ae=fe.split("-");if(!H&&ae.length>1)return pe(ae[0])}else{var ye=fe.name;Z[ye]=fe,H=ye}return!de&&H&&(G=H),H||!de&&G},N=function(pe,fe){if(I(pe))return pe.clone();var he=typeof fe=="object"?fe:{};return he.date=pe,he.args=arguments,new U(he)},M=z;M.l=C,M.i=I,M.w=function(pe,fe){return N(pe,{locale:fe.$L,utc:fe.$u,x:fe.$x,$offset:fe.$offset})};var U=function(){function pe(he){this.$L=C(he.locale,null,!0),this.parse(he),this.$x=this.$x||he.x||{},this[E]=!0}var fe=pe.prototype;return fe.parse=function(he){this.$d=function(de){var H=de.date,oe=de.utc;if(H===null)return new Date(NaN);if(M.u(H))return new Date;if(H instanceof Date)return new Date(H);if(typeof H=="string"&&!/Z$/i.test(H)){var ae=H.match(F);if(ae){var ye=ae[2]-1||0,Ie=(ae[7]||"0").substring(0,3);return oe?new Date(Date.UTC(ae[1],ye,ae[3]||1,ae[4]||0,ae[5]||0,ae[6]||0,Ie)):new Date(ae[1],ye,ae[3]||1,ae[4]||0,ae[5]||0,ae[6]||0,Ie)}}return new Date(H)}(he),this.init()},fe.init=function(){var he=this.$d;this.$y=he.getFullYear(),this.$M=he.getMonth(),this.$D=he.getDate(),this.$W=he.getDay(),this.$H=he.getHours(),this.$m=he.getMinutes(),this.$s=he.getSeconds(),this.$ms=he.getMilliseconds()},fe.$utils=function(){return M},fe.isValid=function(){return this.$d.toString()!==O},fe.isSame=function(he,de){var H=N(he);return this.startOf(de)<=H&&H<=this.endOf(de)},fe.isAfter=function(he,de){return N(he)<this.startOf(de)},fe.isBefore=function(he,de){return this.endOf(de)<N(he)},fe.$g=function(he,de,H){return M.u(he)?this[de]:this.set(H,he)},fe.unix=function(){return Math.floor(this.valueOf()/1e3)},fe.valueOf=function(){return this.$d.getTime()},fe.startOf=function(he,de){var H=this,oe=!!M.u(de)||de,ae=M.p(he),ye=function(An,Ft){var nn=M.w(H.$u?Date.UTC(H.$y,Ft,An):new Date(H.$y,Ft,An),H);return oe?nn:nn.endOf(d)},Ie=function(An,Ft){return M.w(H.toDate()[An].apply(H.toDate("s"),(oe?[0,0,0,0]:[23,59,59,999]).slice(Ft)),H)},Le=this.$W,rt=this.$M,qe=this.$D,dt="set"+(this.$u?"UTC":"");switch(ae){case b:return oe?ye(1,0):ye(31,11);case v:return oe?ye(1,rt):ye(0,rt+1);case p:var _t=this.$locale().weekStart||0,Sn=(Le<_t?Le+7:Le)-_t;return ye(oe?qe-Sn:qe+(6-Sn),rt);case d:case x:return Ie(dt+"Hours",0);case f:return Ie(dt+"Minutes",1);case u:return Ie(dt+"Seconds",2);case a:return Ie(dt+"Milliseconds",3);default:return this.clone()}},fe.endOf=function(he){return this.startOf(he,!1)},fe.$set=function(he,de){var H,oe=M.p(he),ae="set"+(this.$u?"UTC":""),ye=(H={},H[d]=ae+"Date",H[x]=ae+"Date",H[v]=ae+"Month",H[b]=ae+"FullYear",H[f]=ae+"Hours",H[u]=ae+"Minutes",H[a]=ae+"Seconds",H[s]=ae+"Milliseconds",H)[oe],Ie=oe===d?this.$D+(de-this.$W):de;if(oe===v||oe===b){var Le=this.clone().set(x,1);Le.$d[ye](Ie),Le.init(),this.$d=Le.set(x,Math.min(this.$D,Le.daysInMonth())).$d}else ye&&this.$d[ye](Ie);return this.init(),this},fe.set=function(he,de){return this.clone().$set(he,de)},fe.get=function(he){return this[M.p(he)]()},fe.add=function(he,de){var H,oe=this;he=Number(he);var ae=M.p(de),ye=function(rt){var qe=N(oe);return M.w(qe.date(qe.date()+Math.round(rt*he)),oe)};if(ae===v)return this.set(v,this.$M+he);if(ae===b)return this.set(b,this.$y+he);if(ae===d)return ye(1);if(ae===p)return ye(7);var Ie=(H={},H[u]=r,H[f]=i,H[a]=n,H)[ae]||1,Le=this.$d.getTime()+he*Ie;return M.w(Le,this)},fe.subtract=function(he,de){return this.add(-1*he,de)},fe.format=function(he){var de=this,H=this.$locale();if(!this.isValid())return H.invalidDate||O;var oe=he||"YYYY-MM-DDTHH:mm:ssZ",ae=M.z(this),ye=this.$H,Ie=this.$m,Le=this.$M,rt=H.weekdays,qe=H.months,dt=H.meridiem,_t=function(Ft,nn,gt,Rn){return Ft&&(Ft[nn]||Ft(de,oe))||gt[nn].slice(0,Rn)},Sn=function(Ft){return M.s(ye%12||12,Ft,"0")},An=dt||function(Ft,nn,gt){var Rn=Ft<12?"AM":"PM";return gt?Rn.toLowerCase():Rn};return oe.replace(k,function(Ft,nn){return nn||function(gt){switch(gt){case"YY":return String(de.$y).slice(-2);case"YYYY":return M.s(de.$y,4,"0");case"M":return Le+1;case"MM":return M.s(Le+1,2,"0");case"MMM":return _t(H.monthsShort,Le,qe,3);case"MMMM":return _t(qe,Le);case"D":return de.$D;case"DD":return M.s(de.$D,2,"0");case"d":return String(de.$W);case"dd":return _t(H.weekdaysMin,de.$W,rt,2);case"ddd":return _t(H.weekdaysShort,de.$W,rt,3);case"dddd":return rt[de.$W];case"H":return String(ye);case"HH":return M.s(ye,2,"0");case"h":return Sn(1);case"hh":return Sn(2);case"a":return An(ye,Ie,!0);case"A":return An(ye,Ie,!1);case"m":return String(Ie);case"mm":return M.s(Ie,2,"0");case"s":return String(de.$s);case"ss":return M.s(de.$s,2,"0");case"SSS":return M.s(de.$ms,3,"0");case"Z":return ae}return null}(Ft)||ae.replace(":","")})},fe.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},fe.diff=function(he,de,H){var oe,ae=this,ye=M.p(de),Ie=N(he),Le=(Ie.utcOffset()-this.utcOffset())*r,rt=this-Ie,qe=function(){return M.m(ae,Ie)};switch(ye){case b:oe=qe()/12;break;case v:oe=qe();break;case _:oe=qe()/3;break;case p:oe=(rt-Le)/6048e5;break;case d:oe=(rt-Le)/864e5;break;case f:oe=rt/i;break;case u:oe=rt/r;break;case a:oe=rt/n;break;default:oe=rt}return H?oe:M.a(oe)},fe.daysInMonth=function(){return this.endOf(v).$D},fe.$locale=function(){return Z[this.$L]},fe.locale=function(he,de){if(!he)return this.$L;var H=this.clone(),oe=C(he,de,!0);return oe&&(H.$L=oe),H},fe.clone=function(){return M.w(this.$d,this)},fe.toDate=function(){return new Date(this.valueOf())},fe.toJSON=function(){return this.isValid()?this.toISOString():null},fe.toISOString=function(){return this.$d.toISOString()},fe.toString=function(){return this.$d.toUTCString()},pe}(),D=U.prototype;return N.prototype=D,[["$ms",s],["$s",a],["$m",u],["$H",f],["$W",d],["$M",v],["$y",b],["$D",x]].forEach(function(pe){D[pe[1]]=function(fe){return this.$g(fe,pe[0],pe[1])}}),N.extend=function(pe,fe){return pe.$i||(pe(fe,U,N),pe.$i=!0),N},N.locale=C,N.isDayjs=I,N.unix=function(pe){return N(1e3*pe)},N.en=Z[G],N.Ls=Z,N.p={},N})})(t2);var mK=t2.exports;const n2=Bf(mK);var r2={exports:{}};(function(t,e){(function(n,r){t.exports=r()})(ka,function(){return function(n,r,i){n=n||{};var s=r.prototype,a={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function u(d,p,v,_){return s.fromToBase(d,p,v,_)}i.en.relativeTime=a,s.fromToBase=function(d,p,v,_,b){for(var x,O,F,k=v.$locale().relativeTime||a,R=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],P=R.length,z=0;z<P;z+=1){var G=R[z];G.d&&(x=_?i(d).diff(v,G.d,!0):v.diff(d,G.d,!0));var Z=(n.rounding||Math.round)(Math.abs(x));if(F=x>0,Z<=G.r||!G.r){Z<=1&&z>0&&(G=R[z-1]);var E=k[G.l];b&&(Z=b(""+Z)),O=typeof E=="string"?E.replace("%d",Z):E(Z,p,G.l,F);break}}if(p)return O;var I=F?k.future:k.past;return typeof I=="function"?I(O):I.replace("%s",O)},s.to=function(d,p){return u(d,p,this,!0)},s.from=function(d,p){return u(d,p,this)};var f=function(d){return d.$u?i.utc():i()};s.toNow=function(d){return this.to(f(this),d)},s.fromNow=function(d){return this.from(f(this),d)}}})})(r2);var gK=r2.exports;const vK=Bf(gK);n2.extend(vK);const yK=()=>{const[t,e]=re.useState({title:"",author:"",state:"create"}),[n,r]=re.useState(""),[i,s]=re.useState(!1),[a,u]=re.useState([]),[f,d]=re.useState(""),p=x=>{const{name:O,value:F}=x.currentTarget;e(k=>{var R;return{...k,author:`${(R=ci.currentUser)==null?void 0:R.displayName}`,[O]:F}})},v=async()=>{e(x=>({...x,title:""}));try{if(t.state==="search")return null;const x=await C$(LS(am,"books"),{author:t.author,title:t.title,date_created:un.fromDate(new Date)});console.log("Document written with ID: ",x.id)}catch(x){throw new Error(`${x}`)}},_=x=>{x.preventDefault(),v()};re.useEffect(()=>{(async()=>{try{P$(LS(am,"books"),O=>{const F=O.docs.map(k=>({...k.data(),date_publish:`${(k.data().date_created.seconds+k.data().date_created.nanoseconds/1e9)*1e3}`,id:k.id}));u(F),console.log(F)})}catch(O){console.error(O)}})()},[]);const b=x=>n2(new Date(parseInt(x))).fromNow();return B.jsxs(B.Fragment,{children:[B.jsx(hK,{picture:n,setPicture:r}),i&&B.jsx(dK,{id:f,setOpen:s}),B.jsx("div",{className:"main",children:B.jsxs("div",{className:"bookFrame",children:[B.jsx("div",{className:"title",children:B.jsx("div",{children:B.jsxs("span",{id:"title",children:["Welcome to ",B.jsx("strong",{className:"book_reader",children:"BookReader"})," "]})})}),B.jsx("form",{onSubmit:_,children:B.jsxs("div",{className:"inputCase",children:[B.jsxs("div",{className:"create-search",children:[B.jsx("input",{type:"text",className:"inputText",name:"title",value:t.title,onChange:p,placeholder:t.state==="create"?"create a new book":"search a book"}),B.jsx("button",{type:"submit",className:"add-search",children:t.state==="create"?"Create":"Search"})]}),B.jsxs("div",{className:"choice",children:[B.jsx("input",{type:"radio",name:"state",id:"add",defaultChecked:!0,onChange:p,value:"create",className:"create"}),B.jsx("label",{htmlFor:"create",children:"Create"}),B.jsx("input",{type:"radio",name:"state",id:"search",onChange:p,value:"search",className:"search"}),B.jsx("label",{htmlFor:"search",children:"Search"})]}),B.jsx("div",{className:"books",children:a.filter(x=>t.title.toLowerCase()===""?x:t.title.toLowerCase()!=""&&t.state==="search"?x.title.toLowerCase().includes(t.title.toLowerCase()):x).map((x,O)=>B.jsxs("div",{className:"bookFrame",children:[B.jsxs("div",{className:"left-side",children:[B.jsxs("div",{className:"author-date",children:[B.jsx("span",{className:"author",style:{textTransform:"capitalize"},children:x.author}),B.jsxs("span",{className:"date",style:{fontSize:"0.8rem"},children:[" . ",b(x.date_publish)]})]}),B.jsx("div",{className:"book-title",children:B.jsx("strong",{className:"title",children:x.title})})]}),B.jsxs("div",{className:"right-side",children:[B.jsx("div",{className:"update",children:B.jsx("button",{type:"button",onClick:()=>{s(!0),d(x.id)},children:B.jsx(Bi,{className:"upd",icon:nK})})}),B.jsx(pK,{id:x.id})]})]},O))})]})})]})})]})},_K=()=>B.jsx("div",{children:B.jsx(yK,{})}),wK=m3([{path:"/",errorElement:B.jsx(Zq,{}),children:[{element:B.jsx(Jq,{}),index:!0},{path:"dashboard",element:B.jsx(_K,{})},{path:"login",element:B.jsx(QW,{})},{path:"register",element:B.jsx(Xq,{})}]}]);fy.createRoot(document.getElementById("root")).render(B.jsx(pm.StrictMode,{children:B.jsx(S3,{router:wK})}));
