(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-030cacd6"],{1801:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dentistry"},[n("dentistry-options",{ref:"dentistryOptions",on:{search:t.search}}),n("dentistry-table",{attrs:{loading:t.loading,data:t.data},on:{search:t.search}}),n("div",{staticClass:"demonstration-box"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)},i=[],o=(n("386d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",{staticClass:"header"},[n("div",{staticClass:"left item"},[n("span",[t._v("齿科机构名称：")]),n("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入中医机构名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("span",[t._v("齿科分院名称：")]),n("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入中医分院名称"},model:{value:t.childName,callback:function(e){t.childName=e},expression:"childName"}})],1),n("div",{staticClass:"right item"},[n("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("查询")]),n("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.addCom}},[t._v("新增齿科机构")])],1)])],1)}),r=[],s=(n("7f7f"),{name:"dentistryOptions",data:function(){return{name:"",childName:""}},methods:{addCom:function(){this.$router.push("addOrg?type=new&code=2")},search:function(){this.$emit("search")},getData:function(){var t={childName:this.childName,name:this.name};return t}}}),c=s,l=(n("b4a7"),n("2877")),u=Object(l["a"])(c,o,r,!1,null,"46064888",null);u.options.__file="dentistryOptions.vue";var d=u.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("el-table",{attrs:{data:t.dentistryList}},[n("el-table-column",{attrs:{prop:"id",label:"齿科机构ID",width:"200"}}),n("el-table-column",{attrs:{prop:"name",label:"齿科机构名称",width:"280"}}),n("el-table-column",{attrs:{prop:"contactPerson",label:"联系人",width:"230"}}),n("el-table-column",{attrs:{prop:"phone",label:"联系电话",width:"300"}}),n("el-table-column",{attrs:{prop:"count",label:"分院数量"}}),n("el-table-column",{attrs:{label:"操作",width:"320"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.handleClick(e.row)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.branchClick(e.row)}}},[t._v("分院管理")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){t.stopClick(e.row)}}},[t._v(t._s(e.row.deleteFlag?"下线":"上线"))])]}}])})],1),n("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[n("span",[t._v(t._s(t.dialogContent))]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)],1)},p=[],f=["确认上线该机构信息?","确认下线该机构信息?","确认删除该机构信息?"],g={name:"dentistryTable",props:["data","loading"],data:function(){return{dentistryList:[],dialogContent:"",dialogVisible:!1,id:""}},methods:{handleClick:function(t){this.id=t.id,this.$router.push("addOrg?type=edit&code=2&id=".concat(this.id))},branchClick:function(t){this.id=t.id,this.$router.push("branch?code=2&id=".concat(this.id))},stopClick:function(t){if(this.id=t.id,this.dialogVisible=!0,t.deleteFlag)return this.dialogContent=f[1];this.dialogContent=f[0]},sure:function(){var t=this,e=this.lodash.filter(this.dentistryList,function(e){return e.id===t.id}),n=e[0],a=n.deleteFlag,i=n.id,o=n.name,r=n.contactPerson,s=n.phone;a=!a;var c={deleteFlag:a,id:i,name:o,contactPerson:r,phone:s};this.api.put("/dentistry",c,"form").then(function(){t.$emit("search")}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1}},watch:{data:function(t){this.dentistryList=t}}},m=g,b=(n("b0ba"),Object(l["a"])(m,h,p,!1,null,"3dd853ae",null));b.options.__file="dentistryTable.vue";var v=b.exports,y=n("b383"),C=n.n(y),w=n("9cf8"),_={name:"dentistry",mixins:[w["a"]],data:function(){return{data:[],currentPage:1,loading:!1}},components:{DentistryOptions:d,DentistryTable:v},mounted:function(){this.search()},methods:{search:function(){var t=this;this.loading=!0;var e=this.$refs.dentistryOptions.getData(),n={size:20,page:this.currentPage-1},a=this.lodash.assign({},e,n),i=C.a.stringify(a||{});this.api.get("/dentistry?".concat(i)).then(function(e){t.loading=!1,e.data&&(t.data=e.data.list,t.setPage(e.data))}).catch(function(e){console.log(e),t.$message(e.message)})}},watch:{currentPage:function(){this.search()}}},P=_,k=(n("93a9"),Object(l["a"])(P,a,i,!1,null,"4134d957",null));k.options.__file="dentistry.vue";e["default"]=k.exports},"201d":function(t,e,n){},"386d":function(t,e,n){n("214f")("search",1,function(t,e,n){return[function(n){"use strict";var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a):new RegExp(n)[e](String(a))},n]})},"6d78":function(t,e,n){},"91dd":function(t,e,n){"use strict";function a(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,n,o){e=e||"&",n=n||"=";var r={};if("string"!==typeof t||0===t.length)return r;var s=/\+/g;t=t.split(e);var c=1e3;o&&"number"===typeof o.maxKeys&&(c=o.maxKeys);var l=t.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var d,h,p,f,g=t[u].replace(s,"%20"),m=g.indexOf(n);m>=0?(d=g.substr(0,m),h=g.substr(m+1)):(d=g,h=""),p=decodeURIComponent(d),f=decodeURIComponent(h),a(r,p)?i(r[p])?r[p].push(f):r[p]=[r[p],f]:r[p]=f}return r};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},"93a9":function(t,e,n){"use strict";var a=n("b495"),i=n.n(a);i.a},"9cf8":function(t,e,n){"use strict";n("386d");var a={size:20,totalCount:100,totalPage:1},i={data:function(){return{pageParams:a,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=i},b0ba:function(t,e,n){"use strict";var a=n("201d"),i=n.n(a);i.a},b383:function(t,e,n){"use strict";e.decode=e.parse=n("91dd"),e.encode=e.stringify=n("e099")},b495:function(t,e,n){},b4a7:function(t,e,n){"use strict";var a=n("6d78"),i=n.n(a);i.a},e099:function(t,e,n){"use strict";var a=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,n,s){return e=e||"&",n=n||"=",null===t&&(t=void 0),"object"===typeof t?o(r(t),function(r){var s=encodeURIComponent(a(r))+n;return i(t[r])?o(t[r],function(t){return s+encodeURIComponent(a(t))}).join(e):s+encodeURIComponent(a(t[r]))}).join(e):s?encodeURIComponent(a(s))+n+encodeURIComponent(a(t)):""};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function o(t,e){if(t.map)return t.map(e);for(var n=[],a=0;a<t.length;a++)n.push(e(t[a],a));return n}var r=Object.keys||function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}}}]);
//# sourceMappingURL=chunk-030cacd6.44f6c66c.js.map