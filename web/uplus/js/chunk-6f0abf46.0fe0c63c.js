(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f0abf46"],{"11e9":function(t,e,n){var a=n("52a7"),o=n("4630"),r=n("6821"),c=n("6a99"),i=n("69a8"),s=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=r(t),e=c(e,!0),s)try{return u(t,e)}catch(n){}if(i(t,e))return o(!a.f.call(t,e),t[e])}},"309b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-main",{staticClass:"main"},[n("div",{staticClass:"comName"},[t._v("企业名称： "+t._s(t.companyName))]),n("div",{staticClass:"btn-box"},[n("el-button",{on:{click:t.addGoods}},[t._v("新增商品")]),n("el-button",{on:{click:t.goodsPlanManage}},[t._v("商品计划管理")])],1),n("el-table",{attrs:{data:t.goodsInfoList}},[n("el-table-column",{attrs:{prop:"id",align:"center",label:"商品ID"}}),n("el-table-column",{attrs:{prop:"name",align:"center",label:"商品名称"}}),n("el-table-column",{attrs:{prop:"youServers",align:"center",label:"商品包含服务"}}),n("el-table-column",{attrs:{prop:"ptGoodsPlanName",align:"center",label:"所属计划"}}),n("el-table-column",{attrs:{prop:"beginTimeValue",align:"center",label:"生效时间"}}),n("el-table-column",{attrs:{prop:"endTimeValue",align:"center",label:"失效时间"}}),n("el-table-column",{attrs:{label:"操作",align:"center",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.edit(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.undercarriage(e.row)}}},[t._v(t._s(e.row.deleteFlag?"上架":"下架"))])]}}])})],1),n("div",{staticClass:"demonstration-box"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)},o=[],r=(n("ac6a"),n("c5f6"),n("7f7f"),n("386d"),n("9cf8")),c=n("b383"),i={name:"goodsList",mixins:[r["a"]],data:function(){return{companyName:this.$route.query.companyName,id:this.$route.query.id,goodsInfoList:[],currentPage:1}},created:function(){this.search()},methods:{edit:function(t){this.$router.push("addOrEditGoods?type=edit&goodsId="+t.id+"&companyName="+this.companyName+"&companyId="+this.id+"&goodsName="+t.name)},undercarriage:function(t){var e=this,n=t.deleteFlag;n=!n,this.api.delete("/goods/".concat(t.id,"?upload=").concat(n)).then(function(t){e.$message(t.message)}).catch(function(t){e.$message(t.data.message)})},addGoods:function(){this.$router.push("addOrEditGoods?type=add&companyName="+this.companyName+"&companyId="+this.id)},search:function(){var t=this,e=this.id,n={companyId:e,page:this.currentPage-1,size:20};this.axios.get("/goods?"+c.stringify(n)).then(function(e){var n=Number(e.data.code);200===n?(t.goodsInfoList=e.data.data.list,t.goodsInfoList.forEach(function(e,n){t.goodsInfoList[n].beginTimeValue=t.timeFormater(e.beginTime).format("YYYY-MM-DD"),t.goodsInfoList[n].endTimeValue=t.timeFormater(e.endTime).format("YYYY-MM-DD")}),t.setPage(e.data.data)):t.$message(t.mes.busy)}).catch(function(e){console.log(e),t.$message(t.mes.busy)})},goodsPlanManage:function(){this.$router.push("goodsPlan?companyId="+this.id+"&companyName="+this.companyName)}}},s=i,u=(n("629b"),n("2877")),l=Object(u["a"])(s,a,o,!1,null,"7c981b6a",null);l.options.__file="goodsList.vue";e["default"]=l.exports},"386d":function(t,e,n){n("214f")("search",1,function(t,e,n){return[function(n){"use strict";var a=t(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,a):new RegExp(n)[e](String(a))},n]})},"52a7":function(t,e){e.f={}.propertyIsEnumerable},"5dbc":function(t,e,n){var a=n("d3f4"),o=n("8b97").set;t.exports=function(t,e,n){var r,c=e.constructor;return c!==n&&"function"==typeof c&&(r=c.prototype)!==n.prototype&&a(r)&&o&&o(t,r),t}},"629b":function(t,e,n){"use strict";var a=n("c35e"),o=n.n(a);o.a},"8b97":function(t,e,n){var a=n("d3f4"),o=n("cb7c"),r=function(t,e){if(o(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:r}},9093:function(t,e,n){var a=n("ce10"),o=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,o)}},"91dd":function(t,e,n){"use strict";function a(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,r){e=e||"&",n=n||"=";var c={};if("string"!==typeof t||0===t.length)return c;var i=/\+/g;t=t.split(e);var s=1e3;r&&"number"===typeof r.maxKeys&&(s=r.maxKeys);var u=t.length;s>0&&u>s&&(u=s);for(var l=0;l<u;++l){var f,p,d,g,m=t[l].replace(i,"%20"),h=m.indexOf(n);h>=0?(f=m.substr(0,h),p=m.substr(h+1)):(f=m,p=""),d=decodeURIComponent(f),g=decodeURIComponent(p),a(c,d)?o(c[d])?c[d].push(g):c[d]=[c[d],g]:c[d]=g}return c};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},"9cf8":function(t,e,n){"use strict";n("386d");var a={size:20,totalCount:100,totalPage:1},o={data:function(){return{pageParams:a,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=o},aa77:function(t,e,n){var a=n("5ca1"),o=n("be13"),r=n("79e5"),c=n("fdef"),i="["+c+"]",s="​",u=RegExp("^"+i+i+"*"),l=RegExp(i+i+"*$"),f=function(t,e,n){var o={},i=r(function(){return!!c[t]()||s[t]()!=s}),u=o[t]=i?e(p):c[t];n&&(o[n]=u),a(a.P+a.F*i,"String",o)},p=f.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=f},b383:function(t,e,n){"use strict";e.decode=e.parse=n("91dd"),e.encode=e.stringify=n("e099")},c35e:function(t,e,n){},c5f6:function(t,e,n){"use strict";var a=n("7726"),o=n("69a8"),r=n("2d95"),c=n("5dbc"),i=n("6a99"),s=n("79e5"),u=n("9093").f,l=n("11e9").f,f=n("86cc").f,p=n("aa77").trim,d="Number",g=a[d],m=g,h=g.prototype,b=r(n("2aeb")(h))==d,y="trim"in String.prototype,v=function(t){var e=i(t,!1);if("string"==typeof e&&e.length>2){e=y?e.trim():p(e,3);var n,a,o,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+e}for(var c,s=e.slice(2),u=0,l=s.length;u<l;u++)if(c=s.charCodeAt(u),c<48||c>o)return NaN;return parseInt(s,a)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof g&&(b?s(function(){h.valueOf.call(n)}):r(n)!=d)?c(new m(v(e)),n,g):v(e)};for(var I,N=n("9e1e")?u(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;N.length>_;_++)o(m,I=N[_])&&!o(g,I)&&f(g,I,l(m,I));g.prototype=h,h.constructor=g,n("2aba")(a,d,g)}},e099:function(t,e,n){"use strict";var a=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,i){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===typeof t?r(c(t),function(c){var i=encodeURIComponent(a(c))+n;return o(t[c])?r(t[c],function(t){return i+encodeURIComponent(a(t))}).join(e):i+encodeURIComponent(a(t[c]))}).join(e):i?encodeURIComponent(a(i))+n+encodeURIComponent(a(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function r(t,e){if(t.map)return t.map(e);for(var n=[],a=0;a<t.length;a++)n.push(e(t[a],a));return n}var c=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-6f0abf46.0fe0c63c.js.map