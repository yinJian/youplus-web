(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f157395"],{"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"27ae":function(module,exports,__webpack_require__){(function(global){var __WEBPACK_AMD_DEFINE_ARRAY__,__WEBPACK_AMD_DEFINE_RESULT__;(function(t,e){module.exports=e(t)})("undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof global?global:this,function(global){"use strict";var _Base64=global.Base64,version="2.4.9",buffer;if(module.exports)try{buffer=eval("require('buffer').Buffer")}catch(err){buffer=void 0}var b64chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64tab=function(t){for(var e={},a=0,n=t.length;a<n;a++)e[t.charAt(a)]=a;return e}(b64chars),fromCharCode=String.fromCharCode,cb_utob=function(t){if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?fromCharCode(192|e>>>6)+fromCharCode(128|63&e):fromCharCode(224|e>>>12&15)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)}e=65536+1024*(t.charCodeAt(0)-55296)+(t.charCodeAt(1)-56320);return fromCharCode(240|e>>>18&7)+fromCharCode(128|e>>>12&63)+fromCharCode(128|e>>>6&63)+fromCharCode(128|63&e)},re_utob=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,utob=function(t){return t.replace(re_utob,cb_utob)},cb_encode=function(t){var e=[0,2,1][t.length%3],a=t.charCodeAt(0)<<16|(t.length>1?t.charCodeAt(1):0)<<8|(t.length>2?t.charCodeAt(2):0),n=[b64chars.charAt(a>>>18),b64chars.charAt(a>>>12&63),e>=2?"=":b64chars.charAt(a>>>6&63),e>=1?"=":b64chars.charAt(63&a)];return n.join("")},btoa=global.btoa?function(t){return global.btoa(t)}:function(t){return t.replace(/[\s\S]{1,3}/g,cb_encode)},_encode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t)).toString("base64")}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t)).toString("base64")}:function(t){return btoa(utob(t))},encode=function(t,e){return e?_encode(String(t)).replace(/[+\/]/g,function(t){return"+"==t?"-":"_"}).replace(/=/g,""):_encode(String(t))},encodeURI=function(t){return encode(t,!0)},re_btou=new RegExp(["[À-ß][-¿]","[à-ï][-¿]{2}","[ð-÷][-¿]{3}"].join("|"),"g"),cb_btou=function(t){switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),a=e-65536;return fromCharCode(55296+(a>>>10))+fromCharCode(56320+(1023&a));case 3:return fromCharCode((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return fromCharCode((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},btou=function(t){return t.replace(re_btou,cb_btou)},cb_decode=function(t){var e=t.length,a=e%4,n=(e>0?b64tab[t.charAt(0)]<<18:0)|(e>1?b64tab[t.charAt(1)]<<12:0)|(e>2?b64tab[t.charAt(2)]<<6:0)|(e>3?b64tab[t.charAt(3)]:0),r=[fromCharCode(n>>>16),fromCharCode(n>>>8&255),fromCharCode(255&n)];return r.length-=[0,0,2,1][a],r.join("")},atob=global.atob?function(t){return global.atob(t)}:function(t){return t.replace(/[\s\S]{1,4}/g,cb_decode)},_decode=buffer?buffer.from&&Uint8Array&&buffer.from!==Uint8Array.from?function(t){return(t.constructor===buffer.constructor?t:buffer.from(t,"base64")).toString()}:function(t){return(t.constructor===buffer.constructor?t:new buffer(t,"base64")).toString()}:function(t){return btou(atob(t))},decode=function(t){return _decode(String(t).replace(/[-_]/g,function(t){return"-"==t?"+":"/"}).replace(/[^A-Za-z0-9\+\/]/g,""))},noConflict=function(){var t=global.Base64;return global.Base64=_Base64,t};if(global.Base64={VERSION:version,atob:atob,btoa:btoa,fromBase64:decode,toBase64:encode,utob:utob,encode:encode,encodeURI:encodeURI,btou:btou,decode:decode,noConflict:noConflict,__buffer__:buffer},"function"===typeof Object.defineProperty){var noEnum=function(t){return{value:t,enumerable:!1,writable:!0,configurable:!0}};global.Base64.extendString=function(){Object.defineProperty(String.prototype,"fromBase64",noEnum(function(){return decode(this)})),Object.defineProperty(String.prototype,"toBase64",noEnum(function(t){return encode(this,t)})),Object.defineProperty(String.prototype,"toBase64URI",noEnum(function(){return encode(this,!0)}))}}return global["Meteor"]&&(Base64=global.Base64),module.exports?module.exports.Base64=global.Base64:(__WEBPACK_AMD_DEFINE_ARRAY__=[],__WEBPACK_AMD_DEFINE_RESULT__=function(){return global.Base64}.apply(exports,__WEBPACK_AMD_DEFINE_ARRAY__),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)),{Base64:global.Base64}})}).call(this,__webpack_require__("c8ba"))},"28a5":function(t,e,a){a("214f")("split",2,function(t,e,n){"use strict";var r=a("aae3"),o=n,i=[].push,s="split",c="length",u="lastIndex";if("c"=="abbc"[s](/(b)*/)[1]||4!="test"[s](/(?:)/,-1)[c]||2!="ab"[s](/(?:ab)*/)[c]||4!="."[s](/(.?)(.?)/)[c]||"."[s](/()()/)[c]>1||""[s](/.?/)[c]){var l=void 0===/()??/.exec("")[1];n=function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!r(t))return o.call(a,t,e);var n,s,f,d,p,m=[],b=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,b+"g");l||(n=new RegExp("^"+v.source+"$(?!\\s)",b));while(s=v.exec(a)){if(f=s.index+s[0][c],f>h&&(m.push(a.slice(h,s.index)),!l&&s[c]>1&&s[0].replace(n,function(){for(p=1;p<arguments[c]-2;p++)void 0===arguments[p]&&(s[p]=void 0)}),s[c]>1&&s.index<a[c]&&i.apply(m,s.slice(1)),d=s[0][c],h=f,m[c]>=g))break;v[u]===s.index&&v[u]++}return h===a[c]?!d&&v.test("")||m.push(""):m.push(a.slice(h)),m[c]>g?m.slice(0,g):m}}else"0"[s](void 0,0)[c]&&(n=function(t,e){return void 0===t&&0===e?[]:o.call(this,t,e)});return[function(a,r){var o=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,o,r):n.call(String(o),a,r)},n]})},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"3ebc":function(t,e,a){"use strict";a.d(e,"b",function(){return d}),a.d(e,"c",function(){return p}),a.d(e,"i",function(){return m}),a.d(e,"l",function(){return b}),a.d(e,"a",function(){return y}),a.d(e,"f",function(){return s}),a.d(e,"g",function(){return c}),a.d(e,"d",function(){return u}),a.d(e,"e",function(){return l}),a.d(e,"n",function(){return h}),a.d(e,"o",function(){return w}),a.d(e,"p",function(){return g}),a.d(e,"q",function(){return v}),a.d(e,"j",function(){return A}),a.d(e,"h",function(){return C}),a.d(e,"m",function(){return P}),a.d(e,"k",function(){return _});var n=a("2ef0"),r=a.n(n),o=a("7c15");function i(t){return r.a.sortBy(t,function(t){return t.sortId})}function s(t){return o["a"].get("/role").then(function(e){return t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function c(t){return o["a"].get("/user").then(function(e){var a={id:"",name:"全部",roleId:""};return e.data.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function u(t){return o["a"].get("/company?page=0&size=1000").then(function(e){var a={id:"",name:"全部"};return e.data.list.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function l(t,e){if(t)return o["a"].get("/goods?companyId=".concat(t,"&page=0&size=1000")).then(function(t){return e&&e(t.data),t.data}).catch(function(t){console.log(t)}),[]}function f(t){var e={dKey:"",id:"",dValue:"全部"};return t.unshift(e),t}var d=i(JSON.parse(sessionStorage.departmentList)),p=i(JSON.parse(sessionStorage.doctorTitleList)),m=i(JSON.parse(sessionStorage.hosLevelList)),b=i(JSON.parse(sessionStorage.propertyList)),h=i(JSON.parse(sessionStorage.skillTagList)),g=i(JSON.parse(sessionStorage.subDepartmentList)),v=i(JSON.parse(sessionStorage.typeList)),_=i(JSON.parse(sessionStorage.paperTypeList)),C=i(JSON.parse(sessionStorage.hopType)),y=JSON.parse(sessionStorage.addressProvince);v=f(v),p=f(p),m=f(m),b=f(b),h=f(h),_=f(_),C=f(C);var P=[{id:1,dKey:1,dValue:"男"},{id:0,dKey:0,dValue:"女"}],w=[{id:0,dKey:0,dValue:"启用"},{id:-1,dKey:-1,dValue:"停用"}],A=[{id:"1234560",dKey:!0,dValue:"是"},{id:"1234567",dKey:!1,dValue:"否"}]},"6b54":function(t,e,a){"use strict";a("3846");var n=a("cb7c"),r=a("0bfb"),o=a("9e1e"),i="toString",s=/./[i],c=function(t){a("2aba")(RegExp.prototype,i,t,!0)};a("79e5")(function(){return"/a/b"!=s.call({source:"a",flags:"b"})})?c(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?r.call(t):void 0)}):s.name!=i&&c(function(){return s.call(this)})},"79f7":function(t,e,a){},aae3:function(t,e,a){var n=a("d3f4"),r=a("2d95"),o=a("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[o])?!!e:"RegExp"==r(t))}},c4ea:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticClass:"list"},[a("label",{staticClass:"list-item",attrs:{for:""}},[a("i",[t._v("企业ID：")])]),a("div",{staticClass:"input-width",domProps:{textContent:t._s(t.comParams.id)}})]),a("div",{staticClass:"list"},[a("span"),a("label",{staticClass:"list-item require",attrs:{for:""}},[a("i",[t._v("企业名称：")])]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.comParams.name,callback:function(e){t.$set(t.comParams,"name",e)},expression:"comParams.name"}})],1),a("div",{staticClass:"list"},[a("span"),a("label",{staticClass:"list-item require",attrs:{for:""}},[a("i",[t._v("企业地址：")])]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.comParams.address,callback:function(e){t.$set(t.comParams,"address",e)},expression:"comParams.address"}})],1),a("div",{staticClass:"list"},[a("label",{staticClass:"list-item require",attrs:{for:""}},[a("i",[t._v("公司性质：")])]),a("el-select",{attrs:{placeholder:"全部"},model:{value:t.comParams.property,callback:function(e){t.$set(t.comParams,"property",e)},expression:"comParams.property"}},t._l(t.propertyList,function(t){return a("el-option",{key:t.id,attrs:{label:t.dValue,value:t.dKey}})}))],1),a("div",{staticClass:"list"},[a("label",{staticClass:"list-item require",attrs:{for:""}},[a("i",[t._v("公司类型：")])]),a("el-select",{attrs:{placeholder:"全部"},model:{value:t.comParams.type,callback:function(e){t.$set(t.comParams,"type",e)},expression:"comParams.type"}},t._l(t.typeList,function(t){return a("el-option",{key:t.id,attrs:{label:t.dValue,value:t.dKey}})}))],1),a("div",{staticClass:"list"},[a("label",{staticClass:"list-item require",attrs:{for:""}},[a("i",[t._v("是否上市：")])]),a("el-select",{attrs:{placeholder:"全部"},model:{value:t.comParams.ipo,callback:function(e){t.$set(t.comParams,"ipo",e)},expression:"comParams.ipo"}},t._l(t.ipoList,function(t){return a("el-option",{key:t.id,attrs:{label:t.dValue,value:t.dKey}})}))],1),a("div",{staticClass:"list"},[a("span"),a("label",{staticClass:"list-item require",attrs:{for:""}},[a("i",[t._v("联系电话：")])]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.comParams.mobile,callback:function(e){t.$set(t.comParams,"mobile",e)},expression:"comParams.mobile"}})],1),a("div",{staticClass:"list"},[a("span"),a("label",{staticClass:"list-item require",attrs:{for:""}},[t._v("销售电话：")]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.comParams.saleMobile,callback:function(e){t.$set(t.comParams,"saleMobile",e)},expression:"comParams.saleMobile"}})],1),a("div",{staticClass:"list"},[a("label",{staticClass:"list-item require",attrs:{for:""}},[t._v("注册资本：")]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.comParams.capital,callback:function(e){t.$set(t.comParams,"capital",e)},expression:"comParams.capital"}})],1),a("div",{staticClass:"list"},[a("label",{staticClass:"list-item require",attrs:{for:""}},[t._v("营业执照：")]),t.comParams.license?t._e():a("div",{staticClass:"avatar-uploader"},[a("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[a("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),a("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:t.fileChange}})])]),t.comParams.license?a("img",{staticClass:"avatar",attrs:{src:t.comParams.license}}):t._e(),t.comParams.license?a("span",{staticClass:"photoDel",on:{click:t.delPhoto}},[t._v("删除")]):t._e()]),a("div",{staticClass:"list"},[a("label",{staticClass:"list-item require"},[t._v("公司简介：")]),a("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:t.comParams.intro,callback:function(e){t.$set(t.comParams,"intro",e)},expression:"comParams.intro"}})],1),a("div",{staticClass:"list box-last"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),a("el-button",{on:{click:t.back}},[t._v("取消")])],1)])},r=[],o=(a("7f7f"),a("cadf"),a("551c"),a("097d"),a("3ebc")),i={id:"",name:"",address:"",property:"",type:"",mobile:"",saleMobile:"",ipo:"",capital:"",intro:"",license:"",contactPerson:"",reason:""},s=a("fc37"),c=(a("96cf"),a("1da1")),u=a("a27e"),l=a("b383");function f(t,e){return d.apply(this,arguments)}function d(){return d=Object(c["a"])(regeneratorRuntime.mark(function t(e,a){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p(e,a);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)})),d.apply(this,arguments)}function p(t,e){return new Promise(function(a,n){var r=l.stringify(e);u["a"].post("/".concat(t),r).then(function(t){a(t)}).catch(function(t){n(t)})})}var m=f;a("b383");function b(t,e){return h.apply(this,arguments)}function h(){return h=Object(c["a"])(regeneratorRuntime.mark(function t(e,a){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g(e,a);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}},t,this)})),h.apply(this,arguments)}function g(t,e){return new Promise(function(a,n){u["a"].put("/".concat(t),e).then(function(t){a(t)}).catch(function(t){n(t)})})}var v=b,_=a("dd36"),C=a("27ae").Base64,y="youplus",P="youplus123456",w=C.encode(y+":"+P),A={url:"http://v0.api.upyun.com/youplus/",headers:{Authorization:w}},x=A,E={name:"addOrEditCom",data:function(){return{propertyList:o["l"],typeList:o["q"],ipoList:o["j"],loading:!1,comParams:JSON.parse(JSON.stringify(i)),upyun:x,isEdit:"edit"===this.$route.query.type,fileList:[]}},created:function(){this.isEdit&&this.init()},methods:{init:function(){var t=this;this.comParams.id=this.$route.query.id,Object(_["a"])("company/".concat(this.comParams.id)).then(function(e){t.comParams=e.data.data}).catch(function(e){t.$message(e.data.message)})},fileChange:function(t){var e=this;this.loading=!0,Object(s["c"])(t,function(t){e.loading=!1,e.comParams.license=t.url})},delPhoto:function(){this.comParams.license=""},upLoadSuccess:function(t,e,a){console.log(t)},handleRemove:function(t,e){console.log(t,e)},handlePreview:function(t){console.log(t)},handleExceed:function(t,e){this.$message.warning("当前限制选择 3 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove:function(t,e){return this.$confirm("确定移除 ".concat(t.name,"？"))},back:function(){this.$router.back()},submit:function(){var t=this,e="系统繁忙，请稍后再试";this.isEdit?v("company",this.comParams).then(function(a){console.log(a.data),200==a.data.code&&(e="操作成功"),t.$message(e)}).catch(function(e){console.log(e),t.$message(e.data.message)}):m("company",this.comParams).then(function(a){console.log(a.data),200==a.data.code&&(e="操作成功"),t.$router.push("comList"),t.$message(e)}).catch(function(e){console.log(e),t.$message(e.data.message)})}}},S=E,k=(a("ddfa"),a("2877")),D=Object(k["a"])(S,n,r,!1,null,"1e8cb3f2",null);D.options.__file="addOrEditCom.vue";e["default"]=D.exports},ddfa:function(t,e,a){"use strict";var n=a("79f7"),r=a.n(n);r.a},fc37:function(t,e,a){"use strict";a.d(e,"f",function(){return s}),a.d(e,"a",function(){return c}),a.d(e,"b",function(){return u}),a.d(e,"d",function(){return l}),a.d(e,"e",function(){return f}),a.d(e,"c",function(){return d});a("7f7f"),a("6b54"),a("28a5");var n=a("2ef0"),r=a.n(n),o=a("bc3a"),i=a.n(o);function s(t){if(!t)return"";var e=new Date(t).getFullYear(),a=new Date(t).getMonth(),n=new Date(t).getDate();return a<10&&(a="0"+parseInt(a)),n<10&&(n="0"+parseInt(n)),"".concat(e,"-").concat(a,"-").concat(n)}function c(t){if(!t)return"";var e=t.getFullYear(),a=t.getMonth(),n=t.getDate();return a<10&&(a="0"+parseInt(a)),n<10&&(n="0"+parseInt(n)),"".concat(e,"-").concat(a,"-").concat(n)}function u(t){if(!t)return"";var e=t.getHours(),a=t.getMinutes();return e<10&&(e="0"+parseInt(e)),a<10&&(a="0"+parseInt(a)),"".concat(e,"：").concat(a)}function l(t){return t?r.a.map(t.split("-"),function(t){var e=t.split("：")[0],a=t.split("：")[1],n=(new Date).getFullYear(),r=(new Date).getMonth(),o=(new Date).getDay();return e=e.trim(),a=a.trim(),new Date(n,r,o,e,a)}):""}function f(t,e){t=t||"0",e=e||"code",t=t.toString();var a=[{code:"0",name:"启用"},{code:"-1",name:"停用"}],n=r.a.filter(a,function(a){return a[e]===t})||a;return n}function d(t,e){if(t){var a=t.target.files[0];if(a){var n=new FormData;n.append("chunk","0"),n.append("chunks","1"),n.append("file",a,a.name);var r={headers:{"Content-Type":"multipart/form-data"}};i.a.get("/weChat/qiniu/token").then(function(t){var a=t.data.data;n.append("token",a),p(n,r,e)})}}}function p(t,e,a){i.a.post("http://upload-z1.qiniup.com/",t,e).then(function(t){var e={message:"ok",url:"http://qiniu.tianyalei.com/".concat(t.data.key)};a&&a(e)}).catch(function(t){console.log(t,"pppp")})}}}]);
//# sourceMappingURL=chunk-5f157395.48486a0f.js.map