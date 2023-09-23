// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function e(r){return"number"==typeof r}function n(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function i(r,t,e){var i=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(r){var t,n,c;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!e(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==t)&&(c=4294967295+c+1),c<0?(n=(-c).toString(t),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(t),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(r){return"string"==typeof r}var u=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,s=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,b=/\.0$/,w=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var t,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":u(i)<1e-4?((t=r.precision)>0&&(t-=1),n=i.toExponential(t)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,w,"e"),n=s.call(n,b,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,y,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function A(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function S(r,t,e){var n=t-r.length;return n<0?r:r=e?r+A(n):A(n)+r}var _=String.fromCharCode,j=isNaN,E=Array.isArray;function F(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function N(r){var t,e,n,o,a,u,f,p,s;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(u="",f=1,p=0;p<r.length;p++)if(l(n=r[p]))u+=n;else{if(t=void 0!==n.precision,!(n=F(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),e=n.flags,s=0;s<e.length;s++)switch(o=e.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,j(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,j(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!j(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=j(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=S(n.arg,n.width,n.padRight)),u+=n.arg||"",f+=1}return u}var U=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function x(r){var t,e,n,i;for(e=[],i=0,n=U.exec(r);n;)(t=r.slice(i,U.lastIndex-n[0].length)).length&&e.push(t),e.push(T(n)),i=U.lastIndex,n=U.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function O(r){return"string"==typeof r}function k(r){var t,e,n;if(!O(r))throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=x(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return N.apply(null,e)}var I=Object.prototype,V=I.toString,P=I.__defineGetter__,$=I.__defineSetter__,C=I.__lookupGetter__,R=I.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(C.call(r,t)||R.call(r,t)?(n=r.__proto__,r.__proto__=I,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&P&&P.call(r,t,e.get),a&&$&&$.call(r,t,e.set),r};function Z(r,t,e){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function W(r){return r!=r}function L(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var X,q=L(),z=Object.prototype.toString,M=Object.prototype.hasOwnProperty,Y="function"==typeof Symbol?Symbol:void 0,B="function"==typeof Y?Y.toStringTag:"",D=q&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return z.call(r);e=r[B],o=B,t=null!=(i=r)&&M.call(i,o);try{r[B]=void 0}catch(t){return z.call(r)}return n=z.call(r),t?r[B]=e:delete r[B],n}:function(r){return z.call(r)},H="function"==typeof Uint32Array,J="function"==typeof Uint32Array?Uint32Array:null,K="function"==typeof Uint32Array?Uint32Array:void 0;X=function(){var r,t,e;if("function"!=typeof J)return!1;try{t=new J(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(H&&e instanceof Uint32Array||"[object Uint32Array]"===D(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q,rr=X,tr=L(),er=Object.prototype.toString,nr=Object.prototype.hasOwnProperty,ir="function"==typeof Y?Y.toStringTag:"",or=tr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return er.call(r);e=r[ir],o=ir,t=null!=(i=r)&&nr.call(i,o);try{r[ir]=void 0}catch(t){return er.call(r)}return n=er.call(r),t?r[ir]=e:delete r[ir],n}:function(r){return er.call(r)},ar="function"==typeof Float64Array,cr="function"==typeof Float64Array?Float64Array:null,lr="function"==typeof Float64Array?Float64Array:void 0;Q=function(){var r,t,e;if("function"!=typeof cr)return!1;try{t=new cr([1,3.14,-3.14,NaN]),e=t,r=(ar&&e instanceof Float64Array||"[object Float64Array]"===or(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?lr:function(){throw new Error("not implemented")};var ur,fr=Q,pr=L(),sr=Object.prototype.toString,yr=Object.prototype.hasOwnProperty,gr="function"==typeof Y?Y.toStringTag:"",dr=pr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return sr.call(r);e=r[gr],o=gr,t=null!=(i=r)&&yr.call(i,o);try{r[gr]=void 0}catch(t){return sr.call(r)}return n=sr.call(r),t?r[gr]=e:delete r[gr],n}:function(r){return sr.call(r)},hr="function"==typeof Uint8Array,br="function"==typeof Uint8Array?Uint8Array:null,wr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,t,e;if("function"!=typeof br)return!1;try{t=new br(t=[1,3.14,-3.14,256,257]),e=t,r=(hr&&e instanceof Uint8Array||"[object Uint8Array]"===dr(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var vr,mr=ur,Ar=L(),Sr=Object.prototype.toString,_r=Object.prototype.hasOwnProperty,jr="function"==typeof Y?Y.toStringTag:"",Er=Ar&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return Sr.call(r);e=r[jr],o=jr,t=null!=(i=r)&&_r.call(i,o);try{r[jr]=void 0}catch(t){return Sr.call(r)}return n=Sr.call(r),t?r[jr]=e:delete r[jr],n}:function(r){return Sr.call(r)},Fr="function"==typeof Uint16Array,Nr="function"==typeof Uint16Array?Uint16Array:null,Ur="function"==typeof Uint16Array?Uint16Array:void 0;vr=function(){var r,t,e;if("function"!=typeof Nr)return!1;try{t=new Nr(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Fr&&e instanceof Uint16Array||"[object Uint16Array]"===Er(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ur:function(){throw new Error("not implemented")};var Tr,xr={uint16:vr,uint8:mr};(Tr=new xr.uint16(1))[0]=4660;var Or=52===new xr.uint8(Tr.buffer)[0],kr=!0===Or?1:0,Ir=new fr(1),Vr=new rr(Ir.buffer);function Pr(r){return Ir[0]=r,Vr[kr]}var $r,Cr=L(),Rr=Object.prototype.toString,Gr=Object.prototype.hasOwnProperty,Zr="function"==typeof Y?Y.toStringTag:"",Wr=Cr&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n,i,o;if(null==r)return Rr.call(r);e=r[Zr],o=Zr,t=null!=(i=r)&&Gr.call(i,o);try{r[Zr]=void 0}catch(t){return Rr.call(r)}return n=Rr.call(r),t?r[Zr]=e:delete r[Zr],n}:function(r){return Rr.call(r)},Lr="function"==typeof Float64Array,Xr="function"==typeof Float64Array?Float64Array:null,qr="function"==typeof Float64Array?Float64Array:void 0;$r=function(){var r,t,e;if("function"!=typeof Xr)return!1;try{t=new Xr([1,3.14,-3.14,NaN]),e=t,r=(Lr&&e instanceof Float64Array||"[object Float64Array]"===Wr(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?qr:function(){throw new Error("not implemented")};var zr=!0===Or?1:0,Mr=new $r(1),Yr=new rr(Mr.buffer),Br=Number.NEGATIVE_INFINITY,Dr=.6931471803691238,Hr=1.9082149292705877e-10,Jr=1048575;function Kr(r){var t,e,n,i,o,a,c,l,u,f,p,s;return 0===r?Br:W(r)||r<0?NaN:(o=0,(e=Pr(r))<1048576&&(o-=54,e=Pr(r*=0x40000000000000)),e>=2146435072?r+r:(o+=(e>>20)-1023|0,o+=(l=614244+(e&=Jr)&1048576|0)>>20|0,c=(r=function(r,t){return Mr[0]=r,Yr[zr]=t>>>0,Mr[0]}(r,e|1072693248^l))-1,(Jr&2+e)<3?0===c?0===o?0:o*Dr+o*Hr:(a=c*c*(.5-.3333333333333333*c),0===o?c-a:o*Dr-(a-o*Hr-c)):(l=e-398458|0,u=440401-e|0,i=(p=(s=(f=c/(2+c))*f)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),n=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),a=n+i,(l|=u)>0?(t=.5*c*c,0===o?c-(t-f*(t+a)):o*Dr-(t-(f*(t+a)+o*Hr)-c)):0===o?c-f*(c-a):o*Dr-(f*(c-a)-o*Hr-c))))}function Qr(r,t,e){return W(t)||W(e)||W(r)||e<0||r<0||r>1?NaN:0===e?t:t+e*Kr(r/(1-r))}function rt(r){return function(){return r}}function tt(r){return W(r)?rt(NaN):function(t){return W(t)||t<0||t>1?NaN:r}}return Z((function(r,t){return W(r)||r<0||r>1?NaN:t}),"factory",tt),Z(Qr,"factory",(function(r,t){return W(r)||W(t)||t<0?rt(NaN):0===t?tt(r):function(e){return W(e)||e<0||e>1?NaN:r+t*Kr(e/(1-e))}})),Qr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).quantile=t();
//# sourceMappingURL=browser.js.map
