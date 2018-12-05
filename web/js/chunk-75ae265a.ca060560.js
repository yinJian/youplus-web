(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75ae265a"],{1801:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dentistry"},[n("dentistry-options"),n("dentistry-table")],1)},l=[],i=(n("cadf"),n("551c"),n("097d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",{staticClass:"header"},[n("div",{staticClass:"left"},[t._v("\n        齿科机构名称："),n("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入中医机构名称"},model:{value:t.agency,callback:function(e){t.agency=e},expression:"agency"}}),t._v("\n        齿科分院名称："),n("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入中医分院名称"},model:{value:t.branch,callback:function(e){t.branch=e},expression:"branch"}})],1),n("div",{staticClass:"right"},[n("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"}},[t._v("查询")]),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.addCom}},[t._v("新增齿科机构")])],1)])],1)}),c=[],r=(n("2ef0"),{name:"dentistryOptions",data:function(){return{agency:"",branch:""}},methods:{addCom:function(){this.$router.push("addOrg?type=add")}}}),o=r,s=(n("4c24"),n("2877")),u=Object(s["a"])(o,i,c,!1,null,"7a1c7e18",null);u.options.__file="dentistryOptions.vue";var d=u.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-main",[n("el-table",{attrs:{data:t.dentistryList}},[n("el-table-column",{attrs:{prop:"id",label:"齿科机构ID"}}),n("el-table-column",{attrs:{prop:"agencyName",label:"齿科机构名称"}}),n("el-table-column",{attrs:{prop:"contacts",label:"联系人"}}),n("el-table-column",{attrs:{prop:"mobile",label:"联系电话"}}),n("el-table-column",{attrs:{prop:"branchNum",label:"分院数量"}}),n("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.handleClick(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.branchClick(e.row)}}},[t._v("分院管理")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.delMsg(e.row)}}},[t._v("删除")])]}}])})],1),n("div",{staticClass:"demonstration-box"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":100,layout:"total, prev, pager, next",total:1e3},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),n("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("span",[t._v("确认删除该条信息？")]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)],1)},f=[],p=(n("6c7b"),n("553b")),h={name:"dentistryTable",data:function(){return{dentistryList:Array(8).fill(p["b"]),dialogVisible:!1,currentPage:1}},methods:{handleClick:function(){this.$router.push("addOrg?type=edit&id=66")},branchClick:function(){this.$router.push("addSub?type=edit&id=66")},delMsg:function(){this.dialogVisible=!0},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))}}},v=h,m=(n("62c7"),Object(s["a"])(v,b,f,!1,null,"fc928cd4",null));m.options.__file="dentistryTable.vue";var g=m.exports,y={name:"dentistry",data:function(){return{}},components:{DentistryOptions:d,DentistryTable:g}},_=y,C=(n("9d7d"),Object(s["a"])(_,a,l,!1,null,"7fa090ad",null));C.options.__file="dentistry.vue";e["default"]=C.exports},"36bd":function(t,e,n){"use strict";var a=n("4bf8"),l=n("77f1"),i=n("9def");t.exports=function(t){var e=a(this),n=i(e.length),c=arguments.length,r=l(c>1?arguments[1]:void 0,n),o=c>2?arguments[2]:void 0,s=void 0===o?n:l(o,n);while(s>r)e[r++]=t;return e}},"3a77":function(t,e,n){},"464f":function(t,e,n){},"4c24":function(t,e,n){"use strict";var a=n("5c69"),l=n.n(a);l.a},"553b":function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"d",function(){return hospitalInfo}),n.d(e,"f",function(){return l}),n.d(e,"e",function(){return i}),n.d(e,"a",function(){return c}),n.d(e,"b",function(){return r});var a=JSON.parse(sessionStorage.hosLevelList),l=[{value:"130000",label:"脑外科",children:[{value:"130100",label:"大脑组织受损"},{value:"1301002",label:"皮下组织受损"}]},{value:"140000",label:"皮肤科",children:[{value:"1301200",label:"神经性皮炎"},{value:"13012002",label:"过敏性皮炎"}]}],i={id:"001",agencyName:"苏州附属第一医院",contacts:"张先生",mobile:"18736012415",branchNum:"32"},c={id:"010",agencyName:"蒙氏中医堂",contacts:"蒙先生",mobile:"18536054217",branchNum:"62"},r={id:"020",agencyName:"齿科哪都通",contacts:"齿先生",mobile:"13958741684",branchNum:"27"}},"5c69":function(t,e,n){},"62c7":function(t,e,n){"use strict";var a=n("3a77"),l=n.n(a);l.a},"6c7b":function(t,e,n){var a=n("5ca1");a(a.P,"Array",{fill:n("36bd")}),n("9c6c")("fill")},"9d7d":function(t,e,n){"use strict";var a=n("464f"),l=n.n(a);l.a}}]);
//# sourceMappingURL=chunk-75ae265a.ca060560.js.map