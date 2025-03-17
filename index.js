// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,w,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=Array.isArray;function E(r){return r!=r}function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,u,f,l,s,p,y,d,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))u+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(a=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,E(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),u+=n.arg||"",f+=1}return u}var x=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=x.exec(r);n;)(e=r.slice(i,x.lastIndex-n[0].length)).length&&t.push(e),t.push(N(n)),i=x.lastIndex,n=x.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function j(r){var e,t;if("string"!=typeof r)throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var F=Object.prototype,T=F.toString,I=F.__defineGetter__,V=F.__defineSetter__,$=F.__lookupGetter__,O=F.__lookupSetter__,C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||O.call(r,e)?(n=r.__proto__,r.__proto__=F,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&I&&I.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r};function P(r,e,t){C(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function R(r){return r!=r}var G,Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),W=Object.prototype.toString,L=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,q="function"==typeof X?X.toStringTag:"",z=Z&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return W.call(r);t=r[q],a=q,e=null!=(i=r)&&L.call(i,a);try{r[q]=void 0}catch(e){return W.call(r)}return n=W.call(r),e?r[q]=t:delete r[q],n}:function(r){return W.call(r)},M="function"==typeof Uint32Array,Y="function"==typeof Uint32Array?Uint32Array:null,B="function"==typeof Uint32Array?Uint32Array:void 0;G=function(){var r,e,t;if("function"!=typeof Y)return!1;try{e=new Y(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(M&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")};var D,H=G,J="function"==typeof Float64Array,K="function"==typeof Float64Array?Float64Array:null,Q="function"==typeof Float64Array?Float64Array:void 0;D=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K([1,3.14,-3.14,NaN]),t=e,r=(J&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")};var rr,er=D,tr="function"==typeof Uint8Array,nr="function"==typeof Uint8Array?Uint8Array:null,ir="function"==typeof Uint8Array?Uint8Array:void 0;rr=function(){var r,e,t;if("function"!=typeof nr)return!1;try{e=new nr(e=[1,3.14,-3.14,256,257]),t=e,r=(tr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar,or=rr,cr="function"==typeof Uint16Array,ur="function"==typeof Uint16Array?Uint16Array:null,fr="function"==typeof Uint16Array?Uint16Array:void 0;ar=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur(e=[1,3.14,-3.14,65536,65537]),t=e,r=(cr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var lr,sr={uint16:ar,uint8:or};(lr=new sr.uint16(1))[0]=4660;var pr=52===new sr.uint8(lr.buffer)[0],yr=!0===pr?1:0,dr=new er(1),gr=new H(dr.buffer);function hr(r){return dr[0]=r,gr[yr]}var wr=!0===pr?1:0,br=new er(1),vr=new H(br.buffer),mr=1023,Ar=Number.NEGATIVE_INFINITY,_r=.6931471803691238,Er=1.9082149292705877e-10,Ur=0x40000000000000,Sr=.3333333333333333,xr=1048575,Nr=2146435072,kr=1048576,jr=1072693248;function Fr(r){var e,t,n,i,a,o,c,u,f,l,s,p;return 0===r?Ar:R(r)||r<0?NaN:(a=0,(t=hr(r))<kr&&(a-=54,t=hr(r*=Ur)),t>=Nr?r+r:(a+=(t>>20)-mr|0,a+=(u=614244+(t&=xr)&1048576|0)>>20|0,c=(r=function(r,e){return br[0]=r,vr[wr]=e>>>0,br[0]}(r,t|u^jr))-1,(xr&2+t)<3?0===c?0===a?0:a*_r+a*Er:(o=c*c*(.5-Sr*c),0===a?c-o:a*_r-(o-a*Er-c)):(u=t-398458|0,f=440401-t|0,i=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=n+i,(u|=f)>0?(e=.5*c*c,0===a?c-(e-l*(e+o)):a*_r-(e-(l*(e+o)+a*Er)-c)):0===a?c-l*(c-o):a*_r-(l*(c-o)-a*Er-c))))}function Tr(r,e,t){return R(e)||R(t)||R(r)||t<0||r<0||r>1?NaN:0===t?e:e+t*Fr(r/(1-r))}function Ir(r){return function(){return r}}function Vr(r){return R(r)?Ir(NaN):function(e){return R(e)||e<0||e>1?NaN:r}}return P((function(r,e){return R(r)||r<0||r>1?NaN:e}),"factory",Vr),P(Tr,"factory",(function(r,e){return R(r)||R(e)||e<0?Ir(NaN):0===e?Vr(r):function(t){return R(t)||t<0||t>1?NaN:r+e*Fr(t/(1-t))}})),Tr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=e();
//# sourceMappingURL=index.js.map
