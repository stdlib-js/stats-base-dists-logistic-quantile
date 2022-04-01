// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return r({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,e=Object.prototype,o=e.toString,a=e.__defineGetter__,i=e.__defineSetter__,u=e.__lookupGetter__,f=e.__lookupSetter__;var c=n,y=function(r,t,n){var c,y,l,v;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((y="value"in n)&&(u.call(r,t)||f.call(r,t)?(c=r.__proto__,r.__proto__=e,delete r[t],r[t]=n.value,r.__proto__=c):r[t]=n.value),l="get"in n,v="set"in n,y&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,t,n.get),v&&i&&i.call(r,t,n.set),r},l=t()?c:y;var v=function(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})};var p=function(r){return r!=r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var A=function(){return b&&"symbol"==typeof Symbol.toStringTag},_=Object.prototype.toString,w=_;var m=function(r){return w.call(r)},d=Object.prototype.hasOwnProperty;var U=function(r,t){return null!=r&&d.call(r,t)},N="function"==typeof Symbol?Symbol.toStringTag:"",s=U,j=N,h=_;var g=m,S=function(r){var t,n,e;if(null==r)return h.call(r);n=r[j],t=s(r,j);try{r[j]=void 0}catch(t){return h.call(r)}return e=h.call(r),t?r[j]=n:delete r[j],e},E=A()?S:g,F=E,O="function"==typeof Uint32Array;var T="function"==typeof Uint32Array?Uint32Array:null,P=function(r){return O&&r instanceof Uint32Array||"[object Uint32Array]"===F(r)},I=T;var x=function(){var r,t;if("function"!=typeof I)return!1;try{t=new I(t=[1,3.14,-3.14,4294967296,4294967297]),r=P(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var G="function"==typeof Uint32Array?Uint32Array:void 0,V=function(){throw new Error("not implemented")},k=x()?G:V,C=E,Y="function"==typeof Float64Array;var q="function"==typeof Float64Array?Float64Array:null,z=function(r){return Y&&r instanceof Float64Array||"[object Float64Array]"===C(r)},B=q;var D=function(){var r,t;if("function"!=typeof B)return!1;try{t=new B([1,3.14,-3.14,NaN]),r=z(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r};var H="function"==typeof Float64Array?Float64Array:void 0,J=function(){throw new Error("not implemented")},K=D()?H:J,L=E,M="function"==typeof Uint8Array;var Q="function"==typeof Uint8Array?Uint8Array:null,R=function(r){return M&&r instanceof Uint8Array||"[object Uint8Array]"===L(r)},W=Q;var X=function(){var r,t;if("function"!=typeof W)return!1;try{t=new W(t=[1,3.14,-3.14,256,257]),r=R(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,tr=E,nr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,or=function(r){return nr&&r instanceof Uint16Array||"[object Uint16Array]"===tr(r)},ar=er;var ir=function(){var r,t;if("function"!=typeof ar)return!1;try{t=new ar(t=[1,3.14,-3.14,65536,65537]),r=or(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r};var ur,fr="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},yr={uint16:ir()?fr:cr,uint8:rr};(ur=new yr.uint16(1))[0]=4660;var lr=52===new yr.uint8(ur.buffer)[0],vr=k,pr=!0===lr?1:0,br=new K(1),Ar=new vr(br.buffer);var _r=function(r){return br[0]=r,Ar[pr]},wr=k,mr=!0===lr?1:0,dr=new K(1),Ur=new wr(dr.buffer);var Nr=function(r,t){return dr[0]=r,Ur[mr]=t>>>0,dr[0]},sr=Nr,jr=Number.NEGATIVE_INFINITY;var hr=_r,gr=sr,Sr=p,Er=jr,Fr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Or=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Tr=.6931471803691238,Pr=1.9082149292705877e-10;var Ir=function(r){var t,n,e,o,a,i,u,f,c,y,l;return 0===r?Er:Sr(r)||r<0?NaN:(o=0,(n=hr(r))<1048576&&(o-=54,n=hr(r*=0x40000000000000)),n>=2146435072?r+r:(o+=(n>>20)-1023|0,o+=(u=(n&=1048575)+614244&1048576|0)>>20|0,i=(r=gr(r,n|1072693248^u))-1,(1048575&2+n)<3?0===i?0===o?0:o*Tr+o*Pr:(a=i*i*(.5-.3333333333333333*i),0===o?i-a:o*Tr-(a-o*Pr-i)):(u=n-398458|0,f=440401-n|0,e=(y=(l=(c=i/(2+i))*c)*l)*Fr(y),a=l*Or(y)+e,(u|=f)>0?(t=.5*i*i,0===o?i-(t-c*(t+a)):o*Tr-(t-(c*(t+a)+o*Pr)-i)):0===o?i-c*(i-a):o*Tr-(c*(i-a)-o*Pr-i))))},xr=p,Gr=Ir;var Vr=function(r,t,n){return xr(t)||xr(n)||xr(r)||n<0||r<0||r>1?NaN:0===n?t:t+n*Gr(r/(1-r))};var kr=function(r){return function(){return r}},Cr=p;var Yr=kr,qr=p;var zr=function(r,t){return Cr(r)||r<0||r>1?NaN:t};v(zr,"factory",(function(r){return qr(r)?Yr(NaN):function(t){if(qr(t)||t<0||t>1)return NaN;return r}}));var Br=kr,Dr=zr.factory,Hr=p,Jr=Ir;var Kr=Vr,Lr=function(r,t){return Hr(r)||Hr(t)||t<0?Br(NaN):0===t?Dr(r):function(n){if(Hr(n)||n<0||n>1)return NaN;return r+t*Jr(n/(1-n))}};v(Kr,"factory",Lr);var Mr=Kr;export{Mr as default,Lr as factory};
//# sourceMappingURL=mod.js.map
