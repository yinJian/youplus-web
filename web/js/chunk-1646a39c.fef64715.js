(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1646a39c"],{"11e9":function(e,t,n){var r=n("52a7"),a=n("4630"),o=n("6821"),i=n("6a99"),s=n("69a8"),c=n("c69a"),l=Object.getOwnPropertyDescriptor;t.f=n("9e1e")?l:function(e,t){if(e=o(e),t=i(t,!0),c)try{return l(e,t)}catch(n){}if(s(e,t))return a(!r.f.call(e,t),e[t])}},"386d":function(e,t,n){n("214f")("search",1,function(e,t,n){return[function(n){"use strict";var r=e(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,r):new RegExp(n)[t](String(r))},n]})},"3fb4":function(e,t,n){"use strict";var r=n("efdb"),a=n.n(r);a.a},"52a7":function(e,t){t.f={}.propertyIsEnumerable},"5dbc":function(e,t,n){var r=n("d3f4"),a=n("8b97").set;e.exports=function(e,t,n){var o,i=t.constructor;return i!==n&&"function"==typeof i&&(o=i.prototype)!==n.prototype&&r(o)&&a&&a(e,o),e}},"8b97":function(e,t,n){var r=n("d3f4"),a=n("cb7c"),o=function(e,t){if(a(e),!r(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(e,[]),t=!(e instanceof Array)}catch(a){t=!0}return function(e,n){return o(e,n),t?e.__proto__=n:r(e,n),e}}({},!1):void 0),check:o}},9093:function(e,t,n){var r=n("ce10"),a=n("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},aa77:function(e,t,n){var r=n("5ca1"),a=n("be13"),o=n("79e5"),i=n("fdef"),s="["+i+"]",c="​",l=RegExp("^"+s+s+"*"),u=RegExp(s+s+"*$"),f=function(e,t,n){var a={},s=o(function(){return!!i[e]()||c[e]()!=c}),l=a[e]=s?t(d):i[e];n&&(a[n]=l),r(r.P+r.F*s,"String",a)},d=f.trim=function(e,t){return e=String(a(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(u,"")),e};e.exports=f},c5f6:function(e,t,n){"use strict";var r=n("7726"),a=n("69a8"),o=n("2d95"),i=n("5dbc"),s=n("6a99"),c=n("79e5"),l=n("9093").f,u=n("11e9").f,f=n("86cc").f,d=n("aa77").trim,p="Number",b=r[p],h=b,m=b.prototype,v=o(n("2aeb")(m))==p,g="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){t=g?t.trim():d(t,3);var n,r,a,o=t.charCodeAt(0);if(43===o||45===o){if(n=t.charCodeAt(2),88===n||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:r=2,a=49;break;case 79:case 111:r=8,a=55;break;default:return+t}for(var i,c=t.slice(2),l=0,u=c.length;l<u;l++)if(i=c.charCodeAt(l),i<48||i>a)return NaN;return parseInt(c,r)}}return+t};if(!b(" 0o1")||!b("0b1")||b("+0x1")){b=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof b&&(v?c(function(){m.valueOf.call(n)}):o(n)!=p)?i(new h(y(t)),n,b):y(t)};for(var _,I=n("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;I.length>x;x++)a(h,_=I[x])&&!a(b,_)&&f(b,_,u(h,_));b.prototype=m,m.constructor=b,n("2aba")(r,p,b)}},cee0:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header",[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[e._v("企业名称：中国平安")])]),n("div",{},[n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:e.addServes}},[e._v("服务单新增")]),n("el-button",{staticClass:"btn",attrs:{type:"primary"}},[e._v("服务单导入")])],1)]),n("el-main",[n("el-table",{attrs:{data:e.servesInfoList}},[n("el-table-column",{attrs:{prop:"id",label:"服务单ID"}}),n("el-table-column",{attrs:{prop:"userName",label:"被服务人姓名"}}),n("el-table-column",{attrs:{prop:"mobile",label:"被服务人电话"}}),n("el-table-column",{attrs:{prop:"mobile",label:"关联权益人"}}),n("el-table-column",{attrs:{prop:"mobile",label:"所属商品"}}),n("el-table-column",{attrs:{prop:"beginTime",label:"生效起期"}}),n("el-table-column",{attrs:{prop:"endTime",label:"生效至期"}}),n("el-table-column",{attrs:{prop:"status",label:"生效状态"}}),n("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.handleClick(t.row)}}},[e._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){e.goodsManageClick(t.row)}}},[e._v("删除")])]}}])})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:e.pageShow,expression:"pageShow"}],staticClass:"demonstration-box"},[n("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":100,layout:"total, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)],1)],1)},a=[],o=(n("c5f6"),n("386d"),n("d7a6"),n("dd36"),n("b383")),i={name:"servesList",data:function(){return{servesInfoList:[],comName:"",value:"",currentPage:1,pageShow:!1}},created:function(){this.id=this.$route.query.id,this.search()},methods:{addServes:function(){this.$router.push("addOrEditServe?type=add")},handleClick:function(){this.$router.push("addOrEditCom?type=edit&id=66")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},goodsManageClick:function(){this.$router.push("../goodsManage/?comName=中国平安")},search:function(){var e=this,t={companyid:id,page:this.currentPage-1,size:20};this.axios.get("/order?"+o.stringify(t)).then(function(t){var n=Number(t.data.code);200===n?e.servesInfoList=t.data.data.list:e.$message(e.mes.busy)}).catch(function(t){console.log(t),e.$message(e.mes.busy)})}}},s=i,c=(n("3fb4"),n("2877")),l=Object(c["a"])(s,r,a,!1,null,"37827022",null);l.options.__file="servesList.vue";t["default"]=l.exports},d7a6:function(e,t,n){"use strict";n.r(t),n.d(t,"servesInfo",function(){return r}),n.d(t,"sexList",function(){return a}),n.d(t,"idTypeList",function(){return o}),n.d(t,"servesList",function(){return i}),n.d(t,"servesItem",function(){return s}),n.d(t,"waitItem",function(){return c}),n.d(t,"ptCashPrePay",function(){return f}),n.d(t,"singleDurationItem",function(){return l}),n.d(t,"selfPayItem",function(){return u}),n.d(t,"ptPhoneDoctor",function(){return d});var r={id:"284949",comName:"金雕",address:"13900139000",property:"张海东",type:"安享一生",isQuoted:"2019-9-22",phone:"2019-9-22",joinTime:"生效",action:"001"},a=[{label:"男",value:"1"},{label:"女",value:"2"}],o=[{label:"身份证",value:"01"},{label:"护照",value:"02"}],i=["押金垫付","电话医生","体检服务","门诊绿通","住院绿通","手术绿通","二次诊疗"],s={label:"服务次数",radioText1:"不限",radioText2:"限制",timesText:"次数",times:""},c={label:"等待期",radioText1:"无",radioText2:"有",timesText:"月数",times:""},l={label:"单次时长",radioText1:"不限",radioText2:"限制",timesText:"时间(分钟)",times:""},u={label:"自费购买",radioText1:"不允许",radioText2:"允许",timesText:"单价(元)",times:""},f={cityCodes:"",serverTimes:"",waitMonths:"",remark:"",filePaths:""},d={cityCodes:"",serverTimes:"",singleDuration:"",selfPay:"",waitMonths:""}},efdb:function(e,t,n){},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-1646a39c.fef64715.js.map