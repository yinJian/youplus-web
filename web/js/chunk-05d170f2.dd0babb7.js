(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05d170f2"],{"0bfb":function(t,e,r){"use strict";var n=r("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"11e9":function(t,e,r){var n=r("52a7"),i=r("4630"),a=r("6821"),o=r("6a99"),s=r("69a8"),c=r("c69a"),u=Object.getOwnPropertyDescriptor;e.f=r("9e1e")?u:function(t,e){if(t=a(t),e=o(e,!0),c)try{return u(t,e)}catch(r){}if(s(t,e))return i(!n.f.call(t,e),t[e])}},"214f":function(t,e,r){"use strict";var n=r("32e9"),i=r("2aba"),a=r("79e5"),o=r("be13"),s=r("2b4c");t.exports=function(t,e,r){var c=s(t),u=r(o,c,""[t]),f=u[0],l=u[1];a(function(){var e={};return e[c]=function(){return 7},7!=""[t](e)})&&(i(String.prototype,t,f),n(RegExp.prototype,c,2==e?function(t,e){return l.call(t,this,e)}:function(t){return l.call(t,this)}))}},"28a5":function(t,e,r){r("214f")("split",2,function(t,e,n){"use strict";var i=r("aae3"),a=n,o=[].push,s="split",c="length",u="lastIndex";if("c"=="abbc"[s](/(b)*/)[1]||4!="test"[s](/(?:)/,-1)[c]||2!="ab"[s](/(?:ab)*/)[c]||4!="."[s](/(.?)(.?)/)[c]||"."[s](/()()/)[c]>1||""[s](/.?/)[c]){var f=void 0===/()??/.exec("")[1];n=function(t,e){var r=String(this);if(void 0===t&&0===e)return[];if(!i(t))return a.call(r,t,e);var n,s,l,p,d,v=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,b=void 0===e?4294967295:e>>>0,m=new RegExp(t.source,h+"g");f||(n=new RegExp("^"+m.source+"$(?!\\s)",h));while(s=m.exec(r)){if(l=s.index+s[0][c],l>g&&(v.push(r.slice(g,s.index)),!f&&s[c]>1&&s[0].replace(n,function(){for(d=1;d<arguments[c]-2;d++)void 0===arguments[d]&&(s[d]=void 0)}),s[c]>1&&s.index<r[c]&&o.apply(v,s.slice(1)),p=s[0][c],g=l,v[c]>=b))break;m[u]===s.index&&m[u]++}return g===r[c]?!p&&m.test("")||v.push(""):v.push(r.slice(g)),v[c]>b?v.slice(0,b):v}}else"0"[s](void 0,0)[c]&&(n=function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)});return[function(r,i){var a=t(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,i):n.call(String(a),r,i)},n]})},"3b2b":function(t,e,r){var n=r("7726"),i=r("5dbc"),a=r("86cc").f,o=r("9093").f,s=r("aae3"),c=r("0bfb"),u=n.RegExp,f=u,l=u.prototype,p=/a/g,d=/a/g,v=new u(p)!==p;if(r("9e1e")&&(!v||r("79e5")(function(){return d[r("2b4c")("match")]=!1,u(p)!=p||u(d)==d||"/a/i"!=u(p,"i")}))){u=function(t,e){var r=this instanceof u,n=s(t),a=void 0===e;return!r&&n&&t.constructor===u&&a?t:i(v?new f(n&&!a?t.source:t,e):f((n=t instanceof u)?t.source:t,n&&a?c.call(t):e),r?this:l,u)};for(var h=function(t){t in u||a(u,t,{configurable:!0,get:function(){return f[t]},set:function(e){f[t]=e}})},g=o(f),b=0;g.length>b;)h(g[b++]);l.constructor=u,u.prototype=l,r("2aba")(n,"RegExp",u)}r("7a56")("RegExp")},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,r){var n=r("d3f4"),i=r("8b97").set;t.exports=function(t,e,r){var a,o=e.constructor;return o!==r&&"function"==typeof o&&(a=o.prototype)!==r.prototype&&n(a)&&i&&i(t,a),t}},"8b97":function(t,e,r){var n=r("d3f4"),i=r("cb7c"),a=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:a}},9093:function(t,e,r){var n=r("ce10"),i=r("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}},"91dd":function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,a){e=e||"&",r=r||"=";var o={};if("string"!==typeof t||0===t.length)return o;var s=/\+/g;t=t.split(e);var c=1e3;a&&"number"===typeof a.maxKeys&&(c=a.maxKeys);var u=t.length;c>0&&u>c&&(u=c);for(var f=0;f<u;++f){var l,p,d,v,h=t[f].replace(s,"%20"),g=h.indexOf(r);g>=0?(l=h.substr(0,g),p=h.substr(g+1)):(l=h,p=""),d=decodeURIComponent(l),v=decodeURIComponent(p),n(o,d)?i(o[d])?o[d].push(v):o[d]=[o[d],v]:o[d]=v}return o};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},"9d64":function(t,e,r){t.exports=r.p+"img/logo.f184566b.png"},a481:function(t,e,r){r("214f")("replace",2,function(t,e,r){return[function(n,i){"use strict";var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a,i):r.call(String(a),n,i)},r]})},a53d:function(t,e,r){"use strict";var n=r("e565"),i=r.n(n);i.a},aae3:function(t,e,r){var n=r("d3f4"),i=r("2d95"),a=r("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},b383:function(t,e,r){"use strict";e.decode=e.parse=r("91dd"),e.encode=e.stringify=r("e099")},dd7b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),r("div",{staticClass:"login-main"},[t._m(1),r("div",{staticClass:"login-right col-md-4 col-xs-12 col-sm-6"},[r("div",{staticClass:"loginModule"},[r("h2",[t._v("会员登录")]),r("ul",[r("li",[r("div",{staticClass:"field pr"},[r("label",{staticClass:"text name",attrs:{for:""}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"ipttxt",attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),r("li",[r("div",{staticClass:"field pr"},[r("label",{staticClass:"text psd",attrs:{for:""}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"ipttxt",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.login()},input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),r("li",[r("input",{staticClass:"loginBtn",attrs:{type:"submit",value:"登录"},on:{click:function(e){t.login()}}})])])])])])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"login-tit"},[n("div",{staticClass:"login-container"},[n("img",{attrs:{src:r("9d64"),alt:"",width:"28",height:"28"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-left col-md-8 hidden-sm hidden-xs"},[r("h3",[t._v("u-plus")]),r("p",[t._v("卓越的管理系统")])])}],a=(r("a481"),r("3b2b"),r("28a5"),{methods:{isNoEmpty:function(t){return!!t},isHid:function(t){var e=/^.{3,18}$/;return e.test(t)},isPhoneNum:function(t){var e=/^[0-9]{0,18}$/;return e.test(t)},isAddress:function(t){for(var e=0,r=0;r<t.length;r++)t.charCodeAt(r)>255&&e++;return!(e<4||t.length>=120)},isZipCode:function(t){var e=/^[0-9]{6}$/;return e.test(t)},isName:function(t){for(var e=0,r=t.split(""),n=0;n<r.length;n++)r[n].charCodeAt(0)<299?e++:e+=2;var i=new RegExp(/^([A-Za-z]|[\u00B7]|[\u4E00-\u9FA5])*$/).test(t),a=t.replace(/[·]/g,0),o=new RegExp(/[.．。，、?]/g).test(t),s=new RegExp(/^(([A-Za-z]|[\u00B7]|[\u4E00-\u9FA5])+0)*([A-Za-z]|[\u00B7]|[\u4E00-\u9FA5])+$/).test(a);return!(e<3||e>27||!i||o||!s)},isIdCard:function(t){var e,r,n,i=new Date,a=i.getFullYear(),o=i.getMonth()+1,s=i.getDate(),c=t=t.toLocaleUpperCase();if(!c)return!1;var u=c.length;if(18!==u)return!1;if(18===u){for(var f=0;f<u-1;f++)if(isNaN(t.charAt(f)))return!1;if(isNaN(t.charAt(17))&&"X"!==t.charAt(17))return!1;if("7"===t.charAt(0)||"8"===t.charAt(0)||"9"===t.charAt(0))return!1;if(t.indexOf("X")>0&&17!==t.indexOf("X")||t.indexOf("x")>0&&17!==t.indexOf("x"))return!1;if(e=c.substring(6,10),e>a||e<1900)return!1;if(r=c.substring(10,12),r>12||r<=0)return!1;if(e===a&&r>o)return!1;if(n=c.substring(12,14),n>31||n<=0)return!1;if((4===r||6===r||9===r||11===r)&&n>30)return!1;if(2===r){var l=!1;if(e%100===0?e%400===0&&(l=!0):e%4===0&&(l=!0),l){if(n>29)return!1}else if(n>28)return!1}if(e===a&&r===o&&n>s)return!1;var p="",d=7*c.charAt(0)+9*c.charAt(1)+10*c.charAt(2)+5*c.charAt(3)+8*c.charAt(4)+4*c.charAt(5)+2*c.charAt(6)+1*c.charAt(7)+6*c.charAt(8)+3*c.charAt(9)+7*c.charAt(10)+9*c.charAt(11)+10*c.charAt(12)+5*c.charAt(13)+8*c.charAt(14)+4*c.charAt(15)+2*c.charAt(16);switch(d%=11,d){case 0:p="1";break;case 1:p="0";break;case 2:p="X";break;case 3:p="9";break;case 4:p="8";break;case 5:p="7";break;case 6:p="6";break;case 7:p="5";break;case 8:p="4";break;case 9:p="3";break;case 10:p="2";break}if("x"===c.charAt(17)||"X"===c.charAt(17)){if("x"!==p&&"X"!==p)return!1}else if(c.charAt(17)!==p)return!1}return!0},isAge:function(t){var e=/^[1-9]{1}[0-9]{1,2}$/,r=1*t;return!!(e.test(t)&&r>29&&r<121)},isMoneyNum:function(t){var e=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;return e.test(t)},isYearNum:function(t){var e=/^([1-9][0-9]*)$/;return e.test(t)},isMate:function(t,e){return t!==e},isFather:function(t){return"M"===t},isMother:function(t){return"F"===t},isPolicyCode:function(t){var e=/^\d{8}$/;return e.test(t)},isIdCard2:function(t,e){return"护照"===t?!!e:this.isIdCard(e)},isPremium:function(t){var e=/^[0-9]{8}$/;return e.test(t)},isPaymentYear:function(t){var e=/^[0-9]{8}$/;return e.test(t)},isEmail:function(t){if("无"===t)return!0;if(""!==t&&"无"!==t){var e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return e.test(t)}},isPhoneNumJ:function(t){if("无"===t)return!0;if(""!==t&&"无"!==t){var e=/^[0-9]{0,18}$/;return e.test(t)}},isBooblean:function(t){return t},getBirthdayFromIdCard:function(t){var e="";return null!=t&&""!==t&&(15===t.length?e="19"+t.substr(6,6):18===t.length&&(e=t.substr(6,8)),e=e.replace(/(.{4})(.{2})/,"$1-$2-")),e}}}),o=(r("b383"),{name:"",mixins:[a],data:function(){return{username:"",password:"",validateData:{}}},created:function(){},mounted:function(){},computed:{},methods:{login:function(){if(this.setValidateData(),this.validateEngine(this.validateData)){var t={userid:this.username,password:this.password};this.axios.post("",t).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},validateEngine:function(t){for(var e=0;e<t.length;e++)if(!this[t[e].type](t[e].value))return this.$message(t[e].info),!1;return!0},setValidateData:function(){this.validateData=[{type:"isNoEmpty",value:this.username,info:"账户不能为空"},{type:"isNoEmpty",value:this.password,info:"密码不能为空"}]}}}),s=o,c=(r("a53d"),r("2877")),u=Object(c["a"])(s,n,i,!1,null,"963ec168",null);u.options.__file="login.vue";e["default"]=u.exports},e099:function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,s){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"===typeof t?a(o(t),function(o){var s=encodeURIComponent(n(o))+r;return i(t[o])?a(t[o],function(t){return s+encodeURIComponent(n(t))}).join(e):s+encodeURIComponent(n(t[o]))}).join(e):s?encodeURIComponent(n(s))+r+encodeURIComponent(n(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function a(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var o=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},e565:function(t,e,r){}}]);
//# sourceMappingURL=chunk-05d170f2.dd0babb7.js.map