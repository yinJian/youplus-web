(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-312a9936"],{"019a":function(t,e,r){(function(){var e=r("8ef3"),n=r("5c53").utf8,i=r("50aa"),a=r("5c53").bin,o=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?a.stringToBytes(t):n.stringToBytes(t):i(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var s=e.bytesToWords(t),u=8*t.length,c=1732584193,f=-271733879,l=-1732584194,p=271733878,d=0;d<s.length;d++)s[d]=16711935&(s[d]<<8|s[d]>>>24)|4278255360&(s[d]<<24|s[d]>>>8);s[u>>>5]|=128<<u%32,s[14+(u+64>>>9<<4)]=u;var h=o._ff,v=o._gg,g=o._hh,m=o._ii;for(d=0;d<s.length;d+=16){var y=c,b=f,A=l,x=p;c=h(c,f,l,p,s[d+0],7,-680876936),p=h(p,c,f,l,s[d+1],12,-389564586),l=h(l,p,c,f,s[d+2],17,606105819),f=h(f,l,p,c,s[d+3],22,-1044525330),c=h(c,f,l,p,s[d+4],7,-176418897),p=h(p,c,f,l,s[d+5],12,1200080426),l=h(l,p,c,f,s[d+6],17,-1473231341),f=h(f,l,p,c,s[d+7],22,-45705983),c=h(c,f,l,p,s[d+8],7,1770035416),p=h(p,c,f,l,s[d+9],12,-1958414417),l=h(l,p,c,f,s[d+10],17,-42063),f=h(f,l,p,c,s[d+11],22,-1990404162),c=h(c,f,l,p,s[d+12],7,1804603682),p=h(p,c,f,l,s[d+13],12,-40341101),l=h(l,p,c,f,s[d+14],17,-1502002290),f=h(f,l,p,c,s[d+15],22,1236535329),c=v(c,f,l,p,s[d+1],5,-165796510),p=v(p,c,f,l,s[d+6],9,-1069501632),l=v(l,p,c,f,s[d+11],14,643717713),f=v(f,l,p,c,s[d+0],20,-373897302),c=v(c,f,l,p,s[d+5],5,-701558691),p=v(p,c,f,l,s[d+10],9,38016083),l=v(l,p,c,f,s[d+15],14,-660478335),f=v(f,l,p,c,s[d+4],20,-405537848),c=v(c,f,l,p,s[d+9],5,568446438),p=v(p,c,f,l,s[d+14],9,-1019803690),l=v(l,p,c,f,s[d+3],14,-187363961),f=v(f,l,p,c,s[d+8],20,1163531501),c=v(c,f,l,p,s[d+13],5,-1444681467),p=v(p,c,f,l,s[d+2],9,-51403784),l=v(l,p,c,f,s[d+7],14,1735328473),f=v(f,l,p,c,s[d+12],20,-1926607734),c=g(c,f,l,p,s[d+5],4,-378558),p=g(p,c,f,l,s[d+8],11,-2022574463),l=g(l,p,c,f,s[d+11],16,1839030562),f=g(f,l,p,c,s[d+14],23,-35309556),c=g(c,f,l,p,s[d+1],4,-1530992060),p=g(p,c,f,l,s[d+4],11,1272893353),l=g(l,p,c,f,s[d+7],16,-155497632),f=g(f,l,p,c,s[d+10],23,-1094730640),c=g(c,f,l,p,s[d+13],4,681279174),p=g(p,c,f,l,s[d+0],11,-358537222),l=g(l,p,c,f,s[d+3],16,-722521979),f=g(f,l,p,c,s[d+6],23,76029189),c=g(c,f,l,p,s[d+9],4,-640364487),p=g(p,c,f,l,s[d+12],11,-421815835),l=g(l,p,c,f,s[d+15],16,530742520),f=g(f,l,p,c,s[d+2],23,-995338651),c=m(c,f,l,p,s[d+0],6,-198630844),p=m(p,c,f,l,s[d+7],10,1126891415),l=m(l,p,c,f,s[d+14],15,-1416354905),f=m(f,l,p,c,s[d+5],21,-57434055),c=m(c,f,l,p,s[d+12],6,1700485571),p=m(p,c,f,l,s[d+3],10,-1894986606),l=m(l,p,c,f,s[d+10],15,-1051523),f=m(f,l,p,c,s[d+1],21,-2054922799),c=m(c,f,l,p,s[d+8],6,1873313359),p=m(p,c,f,l,s[d+15],10,-30611744),l=m(l,p,c,f,s[d+6],15,-1560198380),f=m(f,l,p,c,s[d+13],21,1309151649),c=m(c,f,l,p,s[d+4],6,-145523070),p=m(p,c,f,l,s[d+11],10,-1120210379),l=m(l,p,c,f,s[d+2],15,718787259),f=m(f,l,p,c,s[d+9],21,-343485551),c=c+y>>>0,f=f+b>>>0,l=l+A>>>0,p=p+x>>>0}return e.endian([c,f,l,p])};o._ff=function(t,e,r,n,i,a,o){var s=t+(e&r|~e&n)+(i>>>0)+o;return(s<<a|s>>>32-a)+e},o._gg=function(t,e,r,n,i,a,o){var s=t+(e&n|r&~n)+(i>>>0)+o;return(s<<a|s>>>32-a)+e},o._hh=function(t,e,r,n,i,a,o){var s=t+(e^r^n)+(i>>>0)+o;return(s<<a|s>>>32-a)+e},o._ii=function(t,e,r,n,i,a,o){var s=t+(r^(e|~n))+(i>>>0)+o;return(s<<a|s>>>32-a)+e},o._blocksize=16,o._digestsize=16,t.exports=function(t,r){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(o(t,r));return r&&r.asBytes?n:r&&r.asString?a.bytesToString(n):e.bytesToHex(n)}})()},"057a":function(t,e,r){var n=r("d0e9"),i=r("a9d3"),a=r("aed2"),o=r("dc29"),s=r("946c"),u=r("c3c2"),c=Object.getOwnPropertyDescriptor;e.f=r("2d57")?c:function(t,e){if(t=a(t),e=o(e,!0),u)try{return c(t,e)}catch(r){}if(s(t,e))return i(!n.f.call(t,e),t[e])}},"2bb8":function(t,e,r){"use strict";var n=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,s){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"===typeof t?a(o(t),function(o){var s=encodeURIComponent(n(o))+r;return i(t[o])?a(t[o],function(t){return s+encodeURIComponent(n(t))}).join(e):s+encodeURIComponent(n(t[o]))}).join(e):s?encodeURIComponent(n(s))+r+encodeURIComponent(n(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function a(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var o=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},3930:function(t,e,r){var n=r("1068"),i=r("853b"),a=function(t,e){if(i(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=r("6d6a")(Function.call,r("057a").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,r){return a(t,r),e?t.__proto__=r:n(t,r),t}}({},!1):void 0),check:a}},"5c53":function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},"5ee4":function(t,e,r){"use strict";e.decode=e.parse=r("a2d3"),e.encode=e.stringify=r("2bb8")},"639c":function(t,e,r){"use strict";var n=r("655d"),i=r.n(n);i.a},"655d":function(t,e,r){},"6c5a":function(t,e,r){var n=r("1068"),i=r("85eb"),a=r("26dc")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"8ef3":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var i=t[n]<<16|t[n+1]<<8|t[n+2],a=0;a<4;a++)8*n+6*a<=8*t.length?r.push(e.charAt(i>>>6*(3-a)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,i=0;n<t.length;i=++n%4)0!=i&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*i+8)-1)<<2*i|e.indexOf(t.charAt(n))>>>6-2*i);return r}};t.exports=r})()},"9d64":function(t,e,r){t.exports=r.p+"img/logo.1d58d6de.png"},a2d3:function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,a){e=e||"&",r=r||"=";var o={};if("string"!==typeof t||0===t.length)return o;var s=/\+/g;t=t.split(e);var u=1e3;a&&"number"===typeof a.maxKeys&&(u=a.maxKeys);var c=t.length;u>0&&c>u&&(c=u);for(var f=0;f<c;++f){var l,p,d,h,v=t[f].replace(s,"%20"),g=v.indexOf(r);g>=0?(l=v.substr(0,g),p=v.substr(g+1)):(l=v,p=""),d=decodeURIComponent(l),h=decodeURIComponent(p),n(o,d)?i(o[d])?o[d].push(h):o[d]=[o[d],h]:o[d]=h}return o};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},bbce:function(t,e,r){var n=r("b040"),i=r("d082"),a=r("c810").f,o=r("efd2").f,s=r("6c5a"),u=r("b7c3"),c=n.RegExp,f=c,l=c.prototype,p=/a/g,d=/a/g,h=new c(p)!==p;if(r("2d57")&&(!h||r("7372")(function(){return d[r("26dc")("match")]=!1,c(p)!=p||c(d)==d||"/a/i"!=c(p,"i")}))){c=function(t,e){var r=this instanceof c,n=s(t),a=void 0===e;return!r&&n&&t.constructor===c&&a?t:i(h?new f(n&&!a?t.source:t,e):f((n=t instanceof c)?t.source:t,n&&a?u.call(t):e),r?this:l,c)};for(var v=function(t){t in c||a(c,t,{configurable:!0,get:function(){return f[t]},set:function(e){f[t]=e}})},g=o(f),m=0;g.length>m;)v(g[m++]);l.constructor=c,c.prototype=l,r("f6d5")(n,"RegExp",c)}r("668c")("RegExp")},cd03:function(t,e,r){"use strict";var n=r("6c5a"),i=r("853b"),a=r("7a5b"),o=r("a6c0"),s=r("5cda"),u=r("54aa"),c=r("7861"),f=Math.min,l=[].push,p="split",d="length",h="lastIndex",v=!!function(){try{return new RegExp("x","y")}catch(t){}}();r("6e77")("split",2,function(t,e,r,g){var m=r;return"c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[d]||2!="ab"[p](/(?:ab)*/)[d]||4!="."[p](/(.?)(.?)/)[d]||"."[p](/()()/)[d]>1||""[p](/.?/)[d]?m=function(t,e){var i=String(this);if(void 0===t&&0===e)return[];if(!n(t))return r.call(i,t,e);var a,o,s,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,v=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,f+"g");while(a=c.call(g,i)){if(o=g[h],o>p&&(u.push(i.slice(p,a.index)),a[d]>1&&a.index<i[d]&&l.apply(u,a.slice(1)),s=a[0][d],p=o,u[d]>=v))break;g[h]===a.index&&g[h]++}return p===i[d]?!s&&g.test("")||u.push(""):u.push(i.slice(p)),u[d]>v?u.slice(0,v):u}:"0"[p](void 0,0)[d]&&(m=function(t,e){return void 0===t&&0===e?[]:r.call(this,t,e)}),[function(r,n){var i=t(this),a=void 0==r?void 0:r[e];return void 0!==a?a.call(r,i,n):m.call(String(i),r,n)},function(t,e){var n=g(m,t,this,e,m!==r);if(n.done)return n.value;var c=i(t),l=String(this),p=a(c,RegExp),d=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(v?"y":"g"),y=new p(v?c:"^(?:"+c.source+")",h),b=void 0===e?4294967295:e>>>0;if(0===b)return[];if(0===l.length)return null===u(y,l)?[l]:[];var A=0,x=0,w=[];while(x<l.length){y.lastIndex=v?x:0;var C,_=u(y,v?l:l.slice(x));if(null===_||(C=f(s(y.lastIndex+(v?0:x)),l.length))===A)x=o(l,x,d);else{if(w.push(l.slice(A,x)),w.length===b)return w;for(var k=1;k<=_.length-1;k++)if(w.push(_[k]),w.length===b)return w;x=A=C}}return w.push(l.slice(A)),w}]})},d082:function(t,e,r){var n=r("1068"),i=r("3930").set;t.exports=function(t,e,r){var a,o=e.constructor;return o!==r&&"function"==typeof o&&(a=o.prototype)!==r.prototype&&n(a)&&i&&i(t,a),t}},d0e9:function(t,e){e.f={}.propertyIsEnumerable},dd7b:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login"},[t._m(0),r("div",{staticClass:"login-main"},[r("div",{staticClass:"main"},[r("div",{staticClass:"left"},[r("h2",[t._v("优加健康后台系统")]),r("ul",[r("li",[r("div",{staticClass:"field pr"},[r("label",{staticClass:"text name",attrs:{for:""}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"ipttxt",attrs:{type:"text",placeholder:"用户名"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})])]),r("li",[r("div",{staticClass:"field pr"},[r("label",{staticClass:"text psd",attrs:{for:""}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"ipttxt",attrs:{type:"password",placeholder:"密码"},domProps:{value:t.password},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.login()},input:function(e){e.target.composing||(t.password=e.target.value)}}})])]),r("li",[r("input",{staticClass:"loginBtn",attrs:{type:"submit",value:"登录"},on:{click:function(e){t.login()}}})])])])])]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"login-tit"},[n("div",{staticClass:"login-container"},[n("img",{staticClass:"logo",attrs:{src:r("9d64"),alt:""}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"footer"},[r("span",[t._v("优加健保健康科技（北京）有限公司")])])}],a=(r("7f43"),r("019a")),o=r.n(a),s=(r("28f9"),r("bbce"),r("cd03"),{methods:{isNoEmpty:function(t){return!!t},isHid:function(t){var e=/^.{3,18}$/;return e.test(t)},isPhoneNum:function(t){var e=/^[0-9]{0,18}$/;return e.test(t)},isAddress:function(t){for(var e=0,r=0;r<t.length;r++)t.charCodeAt(r)>255&&e++;return!(e<4||t.length>=120)},isZipCode:function(t){var e=/^[0-9]{6}$/;return e.test(t)},isName:function(t){for(var e=0,r=t.split(""),n=0;n<r.length;n++)r[n].charCodeAt(0)<299?e++:e+=2;var i=new RegExp(/^([A-Za-z]|[\u00B7]|[\u4E00-\u9FA5])*$/).test(t),a=t.replace(/[·]/g,0),o=new RegExp(/[.．。，、?]/g).test(t),s=new RegExp(/^(([A-Za-z]|[\u00B7]|[\u4E00-\u9FA5])+0)*([A-Za-z]|[\u00B7]|[\u4E00-\u9FA5])+$/).test(a);return!(e<3||e>27||!i||o||!s)},isIdCard:function(t){var e,r,n,i=new Date,a=i.getFullYear(),o=i.getMonth()+1,s=i.getDate(),u=t=t.toLocaleUpperCase();if(!u)return!1;var c=u.length;if(18!==c)return!1;if(18===c){for(var f=0;f<c-1;f++)if(isNaN(t.charAt(f)))return!1;if(isNaN(t.charAt(17))&&"X"!==t.charAt(17))return!1;if("7"===t.charAt(0)||"8"===t.charAt(0)||"9"===t.charAt(0))return!1;if(t.indexOf("X")>0&&17!==t.indexOf("X")||t.indexOf("x")>0&&17!==t.indexOf("x"))return!1;if(e=u.substring(6,10),e>a||e<1900)return!1;if(r=u.substring(10,12),r>12||r<=0)return!1;if(e===a&&r>o)return!1;if(n=u.substring(12,14),n>31||n<=0)return!1;if((4===r||6===r||9===r||11===r)&&n>30)return!1;if(2===r){var l=!1;if(e%100===0?e%400===0&&(l=!0):e%4===0&&(l=!0),l){if(n>29)return!1}else if(n>28)return!1}if(e===a&&r===o&&n>s)return!1;var p="",d=7*u.charAt(0)+9*u.charAt(1)+10*u.charAt(2)+5*u.charAt(3)+8*u.charAt(4)+4*u.charAt(5)+2*u.charAt(6)+1*u.charAt(7)+6*u.charAt(8)+3*u.charAt(9)+7*u.charAt(10)+9*u.charAt(11)+10*u.charAt(12)+5*u.charAt(13)+8*u.charAt(14)+4*u.charAt(15)+2*u.charAt(16);switch(d%=11,d){case 0:p="1";break;case 1:p="0";break;case 2:p="X";break;case 3:p="9";break;case 4:p="8";break;case 5:p="7";break;case 6:p="6";break;case 7:p="5";break;case 8:p="4";break;case 9:p="3";break;case 10:p="2";break}if("x"===u.charAt(17)||"X"===u.charAt(17)){if("x"!==p&&"X"!==p)return!1}else if(u.charAt(17)!==p)return!1}return!0},isAge:function(t){var e=/^[1-9]{1}[0-9]{1,2}$/,r=1*t;return!!(e.test(t)&&r>29&&r<121)},isMoneyNum:function(t){var e=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;return e.test(t)},isYearNum:function(t){var e=/^([1-9][0-9]*)$/;return e.test(t)},isMate:function(t,e){return t!==e},isFather:function(t){return"M"===t},isMother:function(t){return"F"===t},isPolicyCode:function(t){var e=/^\d{8}$/;return e.test(t)},isIdCard2:function(t,e){return"护照"===t?!!e:this.isIdCard(e)},isPremium:function(t){var e=/^[0-9]{8}$/;return e.test(t)},isPaymentYear:function(t){var e=/^[0-9]{8}$/;return e.test(t)},isEmail:function(t){if("无"===t)return!0;if(""!==t&&"无"!==t){var e=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;return e.test(t)}},isPhoneNumJ:function(t){if("无"===t)return!0;if(""!==t&&"无"!==t){var e=/^[0-9]{0,18}$/;return e.test(t)}},isBooblean:function(t){return t},getBirthdayFromIdCard:function(t){var e="";return null!=t&&""!==t&&(15===t.length?e="19"+t.substr(6,6):18===t.length&&(e=t.substr(6,8)),e=e.replace(/(.{4})(.{2})/,"$1-$2-")),e}}}),u=r("5ee4"),c={name:"",mixins:[s],data:function(){return{username:"",password:"",validateData:{}}},created:function(){},mounted:function(){},computed:{},methods:{login:function(){var t=this;if(this.setValidateData(),this.validateEngine(this.validateData)){var e={account:this.username,password:o()(this.password).toLowerCase()};this.axios.post("/api/authserver/user/login",u.stringify(e)).then(function(e){var r=e.data;if("200"===String(r.code)){var n=r.data;t.$store.commit("setToken",n),localStorage.setItem("token",n),localStorage.setItem("username",t.username),t.$router.push("/")}else t.$message(r.message||t.mes.busy)}).catch(function(t){console.log(t)})}},validateEngine:function(t){for(var e=0;e<t.length;e++)if(!this[t[e].type](t[e].value))return this.$message(t[e].info),!1;return!0},setValidateData:function(){this.validateData=[{type:"isNoEmpty",value:this.username,info:"账户不能为空"},{type:"isNoEmpty",value:this.password,info:"密码不能为空"}]}}},f=c,l=(r("639c"),r("048f")),p=Object(l["a"])(f,n,i,!1,null,"7850369c",null);p.options.__file="login.vue";e["default"]=p.exports},efd2:function(t,e,r){var n=r("370e"),i=r("123b").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,i)}}}]);
//# sourceMappingURL=chunk-312a9936.4d71d717.js.map