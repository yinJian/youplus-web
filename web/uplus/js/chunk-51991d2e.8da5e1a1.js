(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51991d2e"],{"11e9":function(t,e,n){var o=n("52a7"),a=n("4630"),r=n("6821"),i=n("6a99"),s=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=r(t),e=i(e,!0),c)try{return u(t,e)}catch(n){}if(s(t,e))return a(!o.f.call(t,e),t[e])}},"386d":function(t,e,n){n("214f")("search",1,function(t,e,n){return[function(n){"use strict";var o=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,o):new RegExp(n)[e](String(o))},n]})},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,n){var o=n("d3f4"),a=n("8b97").set;t.exports=function(t,e,n){var r,i=e.constructor;return i!==n&&"function"==typeof i&&(r=i.prototype)!==n.prototype&&o(r)&&a&&a(t,r),t}},"68bd":function(t,e,n){"use strict";var o=n("a997"),a=n.n(o);a.a},"8b97":function(t,e,n){var o=n("d3f4"),a=n("cb7c"),r=function(t,e){if(a(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{o=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:r}},9093:function(t,e,n){var o=n("ce10"),a=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return o(t,a)}},"91dd":function(t,e,n){"use strict";function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,r){e=e||"&",n=n||"=";var i={};if("string"!==typeof t||0===t.length)return i;var s=/\+/g;t=t.split(e);var c=1e3;r&&"number"===typeof r.maxKeys&&(c=r.maxKeys);var u=t.length;c>0&&u>c&&(u=c);for(var l=0;l<u;++l){var f,d,p,g,m=t[l].replace(s,"%20"),h=m.indexOf(n);h>=0?(f=m.substr(0,h),d=m.substr(h+1)):(f=m,d=""),p=decodeURIComponent(f),g=decodeURIComponent(d),o(i,p)?a(i[p])?i[p].push(g):i[p]=[i[p],g]:i[p]=g}return i};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},"9cf8":function(t,e,n){"use strict";n("386d");var o={size:20,totalCount:100,totalPage:1},a={data:function(){return{pageParams:o,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=a},a3d5:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",[n("div",{staticClass:"comName"},[t._v("企业名称： "+t._s(t.companyName))]),n("div",{staticClass:"btn-box"},[n("el-button",{on:{click:t.addGoodsPlan}},[t._v("新增商品计划")])],1),n("el-table",{attrs:{data:t.goodsPlanList}},[n("el-table-column",{attrs:{prop:"id",label:"ID"}}),n("el-table-column",{attrs:{prop:"name",label:"商品计划名称"}}),n("el-table-column",{attrs:{prop:"goodsName",label:"所属商品"}}),n("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.undercarriage(e.row)}}},[t._v(t._s(e.row.deleteFlag?"上架":"下架"))])]}}])})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"demonstration-box"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),n("el-dialog",{attrs:{title:"新增商品",visible:t.dialogVisible,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("div",{staticClass:"list"},[n("label",{staticClass:"list-item require",attrs:{for:""}},[n("i",[t._v("商品计划：")])]),n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.goodsName,callback:function(e){t.goodsName=e},expression:"goodsName"}})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)]),n("div",{staticStyle:{"text-align":"center","margin-top":"10px"}},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:t.back}},[t._v("返回")])],1)],1)},a=[],r=(n("c5f6"),n("386d"),n("9cf8")),i=n("b383"),s={name:"goodsPlan",data:function(){return{companyName:this.$route.query.companyName,companyId:this.$route.query.companyId,goodsPlanList:[],currentPage:1,goodsPlanInfo:[],dialogVisible:!1,goodsName:""}},mixins:[r["a"]],created:function(){this.search()},methods:{edit:function(t){this.goodsPlanInfo=t},undercarriage:function(t){var e=this,n=t.deleteFlag;n=!n,this.api.delete("/goodsPlan/".concat(t.id,"?upload=").concat(n)).then(function(t){e.$message(t.message)}).catch(function(t){e.$message("返回数据格式错误，接口不通")})},search:function(){var t=this,e={companyId:this.companyId};this.axios.get("/goodsPlan?"+i.stringify(e)).then(function(e){var n=Number(e.data.code);200===n?t.goodsPlanList=e.data.data:t.$message(t.mes.busy)}).catch(function(e){console.log(e),t.$message(t.mes.busy)})},addGoodsPlan:function(){this.dialogVisible=!0},confirm:function(){var t=this,e={name:this.goodsName,companyId:this.companyId};this.axios.post("/goodsPlan",i.stringify(e)).then(function(e){var n=Number(e.data.code);200===n?(t.$message(t.mes.success),t.dialogVisible=!1,t.search()):t.$message(t.mes.busy)}).catch(function(e){console.log(e),t.$message(t.mes.busy)})},handleClose:function(){},back:function(){this.$router.back()}}},c=s,u=(n("68bd"),n("2877")),l=Object(u["a"])(c,o,a,!1,null,"01ebd136",null);l.options.__file="goodsPlan.vue";e["default"]=l.exports},a997:function(t,e,n){},aa77:function(t,e,n){var o=n("5ca1"),a=n("be13"),r=n("79e5"),i=n("fdef"),s="["+i+"]",c="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),f=function(t,e,n){var a={},s=r(function(){return!!i[t]()||c[t]()!=c}),u=a[t]=s?e(d):i[t];n&&(a[n]=u),o(o.P+o.F*s,"String",a)},d=f.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},b383:function(t,e,n){"use strict";e.decode=e.parse=n("91dd"),e.encode=e.stringify=n("e099")},c5f6:function(t,e,n){"use strict";var o=n("7726"),a=n("69a8"),r=n("2d95"),i=n("5dbc"),s=n("6a99"),c=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",g=o[p],m=g,h=g.prototype,b=r(n("2aeb")(h))==p,v="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=v?e.trim():d(e,3);var n,o,a,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+e}for(var i,c=e.slice(2),u=0,l=c.length;u<l;u++)if(i=c.charCodeAt(u),i<48||i>a)return NaN;return parseInt(c,o)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(b?c(function(){h.valueOf.call(n)}):r(n)!=p)?i(new m(y(e)),n,g):y(e)};for(var I,P=n("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;P.length>_;_++)a(m,I=P[_])&&!a(g,I)&&f(g,I,l(m,I));g.prototype=h,h.constructor=g,n("2aba")(o,p,g)}},e099:function(t,e,n){"use strict";var o=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,s){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===typeof t?r(i(t),function(i){var s=encodeURIComponent(o(i))+n;return a(t[i])?r(t[i],function(t){return s+encodeURIComponent(o(t))}).join(e):s+encodeURIComponent(o(t[i]))}).join(e):s?encodeURIComponent(o(s))+n+encodeURIComponent(o(t)):""};var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function r(t,e){if(t.map)return t.map(e);for(var n=[],o=0;o<t.length;o++)n.push(e(t[o],o));return n}var i=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-51991d2e.8da5e1a1.js.map