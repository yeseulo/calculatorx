parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aiJW":[function(require,module,exports) {

},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.scss");var t=document.querySelector(".display"),e=document.querySelector(".btn-clear"),r=document.querySelectorAll(".btn-num"),s=document.querySelectorAll(".operator"),i={result:"0",operator:null,starter:null,isEnd:!1,clear:function(){this.result="0",this.operator=null,this.starter=null,this.isEnd=!1},show:function(){t.innerText=this.result},insertNumber:function(t){this.isEnd?(this.result=t,this.isEnd=!1):this.result="0"===this.result?t:this.result+t},applyOperator:function(t){if(this.operator&&this.isEnd)this.operator=t;else{var e=parseFloat(this.result);if(null!==this.starter||isNaN(e)){if(this.operator){var r=this.calculate(this.starter,this.operator,e);this.result=r,this.starter=r}}else this.starter=e;this.isEnd=!0,this.operator=t}},calculate:function(t,e,r){switch(e){case"+":return t+r;case"-":return t-r;case"*":return t*r;case"/":return t/r;default:return r}}};r.forEach(function(t){t.addEventListener("click",function(t){var e=t.target;i.insertNumber(e.value),i.show()})}),s.forEach(function(t){t.addEventListener("click",function(t){var e=t.target;i.applyOperator(e.value),i.show()})}),e.addEventListener("click",function(){i.clear(),i.show()}),i.show();
},{"./styles.scss":"aiJW"}]},{},["H99C"], null)
//# sourceMappingURL=/calculatorx/src.c6ad442c.js.map