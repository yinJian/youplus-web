(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0bf816dc"],{"1f06":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"2bb8":function(e,t,s){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,s,i){return t=t||"&",s=s||"=",null===e&&(e=void 0),"object"===typeof e?o(n(e),function(n){var i=encodeURIComponent(r(n))+s;return a(e[n])?o(e[n],function(e){return i+encodeURIComponent(r(e))}).join(t):i+encodeURIComponent(r(e[n]))}).join(t):i?encodeURIComponent(r(i))+s+encodeURIComponent(r(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function o(e,t){if(e.map)return e.map(t);for(var s=[],r=0;r<e.length;r++)s.push(t(e[r],r));return s}var n=Object.keys||function(e){var t=[];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.push(s);return t}},"3ebc":function(e,t,s){"use strict";s.d(t,"b",function(){return f}),s.d(t,"c",function(){return p}),s.d(t,"i",function(){return v}),s.d(t,"l",function(){return m}),s.d(t,"a",function(){return C}),s.d(t,"f",function(){return i}),s.d(t,"g",function(){return l}),s.d(t,"d",function(){return c}),s.d(t,"e",function(){return u}),s.d(t,"n",function(){return b}),s.d(t,"o",function(){return N}),s.d(t,"p",function(){return y}),s.d(t,"q",function(){return I}),s.d(t,"j",function(){return R}),s.d(t,"h",function(){return g}),s.d(t,"m",function(){return x}),s.d(t,"k",function(){return h});var r=s("c1f9"),a=s.n(r),o=s("7c15");function n(e){return a.a.sortBy(e,function(e){return e.sortId})}function i(e){return o["a"].get("/role").then(function(t){return e&&e(t.data),t.data}).catch(function(e){console.log(e)}),[]}function l(e){return o["a"].get("/user").then(function(t){var s={id:"",name:"全部",roleId:""};return t.data.unshift(s),e&&e(t.data),t.data}).catch(function(e){console.log(e)}),[]}function c(e){return o["a"].get("/company?page=0&size=1000").then(function(t){var s={id:"",name:"全部"};return t.data.list.unshift(s),e&&e(t.data),t.data}).catch(function(e){console.log(e)}),[]}function u(e,t){if(e)return o["a"].get("/goods?companyId=".concat(e,"&page=0&size=1000")).then(function(e){return t&&t(e.data),e.data}).catch(function(e){console.log(e)}),[]}function d(e){var t={dKey:"",id:"",dValue:"全部"};return e.unshift(t),e}var f=n(JSON.parse(sessionStorage.departmentList)),p=n(JSON.parse(sessionStorage.doctorTitleList)),v=n(JSON.parse(sessionStorage.hosLevelList)),m=n(JSON.parse(sessionStorage.propertyList)),b=n(JSON.parse(sessionStorage.skillTagList)),y=n(JSON.parse(sessionStorage.subDepartmentList)),I=n(JSON.parse(sessionStorage.typeList)),h=n(JSON.parse(sessionStorage.paperTypeList)),g=n(JSON.parse(sessionStorage.hopType)),C=JSON.parse(sessionStorage.addressProvince);I=d(I),p=d(p),v=d(v),m=d(m),b=d(b),h=d(h),g=d(g);var x=[{id:1,dKey:1,dValue:"男"},{id:0,dKey:0,dValue:"女"}],N=[{id:0,dKey:0,dValue:"启用"},{id:-1,dKey:-1,dValue:"停用"}],R=[{id:"1234560",dKey:!0,dValue:"是"},{id:"1234567",dKey:!1,dValue:"否"}]},"48e1":function(e,t){t.f={}.propertyIsEnumerable},5552:function(e,t,s){},"5ee4":function(e,t,s){"use strict";t.decode=t.parse=s("a2d3"),t.encode=t.stringify=s("2bb8")},"62fa":function(e,t,s){var r=s("f9b8"),a=s("c094").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},"704d":function(e,t,s){var r=s("48e1"),a=s("6eb7"),o=s("e00b"),n=s("163c"),i=s("ba1a"),l=s("24a4"),c=Object.getOwnPropertyDescriptor;t.f=s("4f1d")?c:function(e,t){if(e=o(e),t=n(t,!0),l)try{return c(e,t)}catch(s){}if(i(e,t))return a(!r.f.call(e,t),e[t])}},7378:function(e,t,s){"use strict";var r=s("c8da"),a=s("ba1a"),o=s("f498"),n=s("d545"),i=s("163c"),l=s("3f16"),c=s("62fa").f,u=s("704d").f,d=s("e6bd").f,f=s("98d3").trim,p="Number",v=r[p],m=v,b=v.prototype,y=o(s("565a")(b))==p,I="trim"in String.prototype,h=function(e){var t=i(e,!1);if("string"==typeof t&&t.length>2){t=I?t.trim():f(t,3);var s,r,a,o=t.charCodeAt(0);if(43===o||45===o){if(s=t.charCodeAt(2),88===s||120===s)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var n,l=t.slice(2),c=0,u=l.length;c<u;c++)if(n=l.charCodeAt(c),n<48||n>a)return NaN;return parseInt(l,r)}}return+t};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(e){var t=arguments.length<1?0:e,s=this;return s instanceof v&&(y?l(function(){b.valueOf.call(s)}):o(s)!=p)?n(new m(h(t)),s,v):h(t)};for(var g,C=s("4f1d")?c(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;C.length>x;x++)a(m,g=C[x])&&!a(v,g)&&d(v,g,u(m,g));v.prototype=b,b.constructor=v,s("f57d")(r,p,v)}},"78b8":function(e,t,s){"use strict";var r=s("5552"),a=s.n(r);a.a},"98d3":function(e,t,s){var r=s("a345"),a=s("f1e5"),o=s("3f16"),n=s("1f06"),i="["+n+"]",l="​",c=RegExp("^"+i+i+"*"),u=RegExp(i+i+"*$"),d=function(e,t,s){var a={},i=o(function(){return!!n[e]()||l[e]()!=l}),c=a[e]=i?t(f):n[e];s&&(a[s]=c),r(r.P+r.F*i,"String",a)},f=d.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},a2d3:function(e,t,s){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,s,o){t=t||"&",s=s||"=";var n={};if("string"!==typeof e||0===e.length)return n;var i=/\+/g;e=e.split(t);var l=1e3;o&&"number"===typeof o.maxKeys&&(l=o.maxKeys);var c=e.length;l>0&&c>l&&(c=l);for(var u=0;u<c;++u){var d,f,p,v,m=e[u].replace(i,"%20"),b=m.indexOf(s);b>=0?(d=m.substr(0,b),f=m.substr(b+1)):(d=m,f=""),p=decodeURIComponent(d),v=decodeURIComponent(f),r(n,p)?a(n[p])?n[p].push(v):n[p]=[n[p],v]:n[p]=v}return n};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},b451:function(e,t,s){var r=s("27e0"),a=s("2724"),o=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=s("6333")(Function.call,s("704d").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,s){return o(e,s),t?e.__proto__=s:r(e,s),e}}({},!1):void 0),check:o}},d545:function(e,t,s){var r=s("27e0"),a=s("b451").set;e.exports=function(e,t,s){var o,n=t.constructor;return n!==s&&"function"==typeof n&&(o=n.prototype)!==s.prototype&&r(o)&&a&&a(e,o),e}},e826:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-main",[s("h3",{staticStyle:{"padding-bottom":"5px","border-bottom":"1px solid #eee"}},[e._v("企业名称："+e._s(e.companyName))]),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("被服务人姓名：")])]),s("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.servesInfo.userName,callback:function(t){e.$set(e.servesInfo,"userName",t)},expression:"servesInfo.userName"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("被服务人性别：")])]),s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.servesInfo.sex,callback:function(t){e.$set(e.servesInfo,"sex",t)},expression:"servesInfo.sex"}},e._l(e.sexList,function(e){return s("el-option",{key:e.dValue,attrs:{label:e.dValue,value:e.dKey}})}),1)],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("被服务人证件类型：")])]),s("el-select",{attrs:{placeholder:"全部"},model:{value:e.servesInfo.paperType,callback:function(t){e.$set(e.servesInfo,"paperType",t)},expression:"servesInfo.paperType"}},e._l(e.paperTypeList,function(e){return s("el-option",{key:e.dKey,attrs:{label:e.dValue,value:e.dKey}})}),1)],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("被服务人证件号码：")])]),s("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.servesInfo.paper,callback:function(t){e.$set(e.servesInfo,"paper",t)},expression:"servesInfo.paper"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("被服务人电话号码：")])]),s("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.servesInfo.mobile,callback:function(t){e.$set(e.servesInfo,"mobile",t)},expression:"servesInfo.mobile"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item",attrs:{for:""}},[s("i",[e._v("被服务人电子邮件：")])]),s("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.servesInfo.email,callback:function(t){e.$set(e.servesInfo,"email",t)},expression:"servesInfo.email"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("所属商品：")])]),s("el-select",{attrs:{placeholder:"全部"},model:{value:e.servesInfo.ptGoodsId,callback:function(t){e.$set(e.servesInfo,"ptGoodsId",t)},expression:"servesInfo.ptGoodsId"}},e._l(e.goodsInfoList,function(e){return s("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("保单号/服务单号：")])]),s("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.servesInfo.cardNum,callback:function(t){e.$set(e.servesInfo,"cardNum",t)},expression:"servesInfo.cardNum"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("商品生效日期：")])]),s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.servesInfo.beginTime,callback:function(t){e.$set(e.servesInfo,"beginTime",t)},expression:"servesInfo.beginTime"}}),s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("商品失效日期：")])]),s("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.servesInfo.endTime,callback:function(t){e.$set(e.servesInfo,"endTime",t)},expression:"servesInfo.endTime"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item"},[s("i",[e._v("特别约定：")])]),s("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:e.servesInfo.remark,callback:function(t){e.$set(e.servesInfo,"remark",t)},expression:"servesInfo.remark"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item textarea-label"},[s("i",[e._v("保单状态：")])]),s("div",{staticClass:"list-radio"},[s("el-radio",{attrs:{label:"0"},model:{value:e.servesInfo.status,callback:function(t){e.$set(e.servesInfo,"status",t)},expression:"servesInfo.status"}},[e._v("正常")]),s("el-radio",{attrs:{label:"1"},model:{value:e.servesInfo.status,callback:function(t){e.$set(e.servesInfo,"status",t)},expression:"servesInfo.status"}},[e._v("中止")]),s("el-radio",{attrs:{label:"2"},model:{value:e.servesInfo.status,callback:function(t){e.$set(e.servesInfo,"status",t)},expression:"servesInfo.status"}},[e._v("终止")]),s("el-radio",{attrs:{label:"3"},model:{value:e.servesInfo.status,callback:function(t){e.$set(e.servesInfo,"status",t)},expression:"servesInfo.status"}},[e._v("失效")])],1)]),s("div",{staticClass:"list btn-center"},[s("el-button",{attrs:{type:"primary"},on:{click:e.addOrderRelation}},[e._v("增加关联权益人")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.otherInfo,expression:"otherInfo"}],staticClass:"other-info"},[s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("关联权益人姓名：")])]),s("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.orderRelation.userName,callback:function(t){e.$set(e.orderRelation,"userName",t)},expression:"orderRelation.userName"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("关联权益人性别：")])]),s("el-select",{attrs:{placeholder:"全部"},model:{value:e.orderRelation.sex,callback:function(t){e.$set(e.orderRelation,"sex",t)},expression:"orderRelation.sex"}},e._l(e.sexList,function(e){return s("el-option",{key:e.dValue,attrs:{label:e.dValue,value:e.dKey}})}),1)],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("关联权益人证件类型：")])]),s("el-select",{attrs:{placeholder:"全部"},model:{value:e.orderRelation.paperType,callback:function(t){e.$set(e.orderRelation,"paperType",t)},expression:"orderRelation.paperType"}},e._l(e.paperTypeList,function(e){return s("el-option",{key:e.dKey,attrs:{label:e.dValue,value:e.dKey}})}),1)],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("关联权益人证件号码：")])]),s("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.orderRelation.paper,callback:function(t){e.$set(e.orderRelation,"paper",t)},expression:"orderRelation.paper"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[e._v("关联权益人手机号码：")])]),s("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.orderRelation.mobile,callback:function(t){e.$set(e.orderRelation,"mobile",t)},expression:"orderRelation.mobile"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item",attrs:{for:""}},[s("i",[e._v("关联权益人电子邮件：")])]),s("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.orderRelation.email,callback:function(t){e.$set(e.orderRelation,"email",t)},expression:"orderRelation.email"}})],1),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item textarea-label"},[s("i",[e._v("与被服务人关系：")])]),s("div",{staticClass:"list-radio"},[s("el-radio",{attrs:{label:"1"},model:{value:e.orderRelation.relationType,callback:function(t){e.$set(e.orderRelation,"relationType",t)},expression:"orderRelation.relationType"}},[e._v("父母")]),s("el-radio",{attrs:{label:"2"},model:{value:e.orderRelation.relationType,callback:function(t){e.$set(e.orderRelation,"relationType",t)},expression:"orderRelation.relationType"}},[e._v("子女")]),s("el-radio",{attrs:{label:"3"},model:{value:e.orderRelation.relationType,callback:function(t){e.$set(e.orderRelation,"relationType",t)},expression:"orderRelation.relationType"}},[e._v("配偶")]),s("el-radio",{attrs:{label:"4"},model:{value:e.orderRelation.relationType,callback:function(t){e.$set(e.orderRelation,"relationType",t)},expression:"orderRelation.relationType"}},[e._v("其他")])],1)])]),s("div",{staticClass:"btn-center"},[s("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("提交")]),s("el-button",{attrs:{type:""},on:{click:e.cancel}},[e._v("取消")])],1)])},a=[],o=(s("7378"),{id:"",reason:"",userName:"",ptGoodsId:"",companyId:"",sex:"",paperType:"",paper:"",mobile:"",cardNum:"",email:"",beginTime:"",endTime:"",remark:"",status:"",orderRelation:{id:"",userName:"",sex:"",paperType:"",paper:"",mobile:"",email:"",relationType:""}}),n=s("3ebc"),i=s("5ee4"),l={name:"addOrEditServe",data:function(){return{companyName:"",sexList:n["m"],paperTypeList:n["k"],goodPlanList:[],otherInfo:!1,servesInfo:JSON.parse(JSON.stringify(o)),goodsInfoList:[],orderRelation:{}}},created:function(){this.init()},methods:{init:function(){var e=this.$route.query;this.companyName=e.companyName,this.companyId=e.companyId,this.isEdit="edit"===e.type,this.goodsName=this.isEdit?e.goodsName:"新增商品",this.servesInfo.companyId=this.companyId,this.getGoodsList(),e.id?(this.servesInfo.id=e.id,this.getEditServe()):delete this.servesInfo.id},getGoodsList:function(){var e=this,t=this.companyId,s={companyId:t,page:0,size:1e3};this.axios.get("/goods?"+i.stringify(s)).then(function(t){var s=Number(t.data.code);200===s?e.goodsInfoList=t.data.data.list:e.$message(e.mes.busy)}).catch(function(t){console.log(t),e.$message(e.mes.busy)})},addOrderRelation:function(){this.otherInfo=!0},confirm:function(){var e=this;this.otherInfo?this.servesInfo.orderRelation=this.orderRelation:delete this.servesInfo.orderRelation,this.servesInfo.status=Number(this.servesInfo.status),this.servesInfo.ptGoodsId=Number(this.servesInfo.ptGoodsId),this.servesInfo.companyId=Number(this.servesInfo.companyId),this.servesInfo.sex=Number(this.servesInfo.sex);var t=this.edit?"put":"post";this.axios[t]("/order",this.servesInfo).then(function(t){var s=Number(t.data.code);200===s?(e.$message(e.mes.success),e.$router.back()):e.$message(e.mes.busy)}).catch(function(t){console.log(t),e.$message(e.mes.busy)})},cancel:function(){this.$router.back()},getGoodsPlan:function(){var e=this,t={companyId:this.companyId};this.axios.get("/goodsPlan?"+i.stringify(t)).then(function(t){var s=Number(t.data.code);200===s?e.goodPlanList=t.data.data:e.$message(e.mes.busy)}).catch(function(t){console.log(t),e.$message(e.mes.busy)})},getEditServe:function(){var e=this;this.axios.get("/order/".concat(this.servesInfo.id)).then(function(t){var s=Number(t.data.code);if(200===s){var r=t.data.data;for(var a in o)e.servesInfo[a]=r[a];e.servesInfo.beginTime=e.timeFormater(r.beginTime).format("YYYY-MM-DD"),e.servesInfo.endTime=e.timeFormater(r.endTime).format("YYYY-MM-DD"),e.servesInfo.status=String(e.servesInfo.status),e.otherInfo=!!e.servesInfo.orderRelation,e.orderRelation=e.servesInfo.orderRelation||{}}else e.$message(e.mes.busy)}).catch(function(t){console.log(t),e.$message(e.mes.busy)})}}},c=l,u=(s("78b8"),s("048f")),d=Object(u["a"])(c,r,a,!1,null,"0994bff3",null);d.options.__file="addOrEditServe.vue";t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-0bf816dc.d929f371.js.map