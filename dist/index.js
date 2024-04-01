"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=u(function(R,c){
var i=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-ln/dist');function N(e,r,t){return i(r)||i(t)||i(e)||t<0||e<0||e>1?NaN:t===0?r:r+t*s(e/(1-e))}c.exports=N
});var q=u(function(b,o){
var l=require('@stdlib/utils-constant-function/dist'),y=require('@stdlib/stats-base-dists-degenerate-quantile/dist').factory,a=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-ln/dist');function d(e,r){if(a(e)||a(r)||r<0)return l(NaN);if(r===0)return y(e);return t;function t(n){return a(n)||n<0||n>1?NaN:e+r*x(n/(1-n))}}o.exports=d
});var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=f(),F=q();g(v,"factory",F);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
