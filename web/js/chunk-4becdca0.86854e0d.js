(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4becdca0"],{"386d":function(t,e,a){a("214f")("search",1,function(t,e,a){return[function(a){"use strict";var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},a]})},3939:function(t,e,a){},5517:function(t,e,a){"use strict";var n=a("8e0c"),i=a.n(n);i.a},"55aa":function(t,e,a){},"65b8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address-group"},[a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return a("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return a("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})}))],1)},i=[],s=a("7622"),c=a("dd36"),o=!0,r={name:"userAddress",props:["seletStyle","defaultValue"],data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{handleProvince:function(){this.provinceList=s["a"]},handleData:function(t,e,a){var n=this;t&&Object(c["a"])("area",{parentId:t}).then(function(t){if(t.data.code=n.ok)return a&&a(t.data.data),"province"===e?n.cityList=t.data.data:n.countryList=t.data.data;n.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),n.$message("系统繁忙，请稍后再试!")})},getData:function(){var t={province:this.province,city:this.city,country:this.country};return t}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.province,n=e.city,i=e.country;if(o=!1,!a)return o=!0;var s=this.lodash.filter(this.provinceList,function(t){return t.areaName==a});this.province=s[0].id,Object(c["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!n)return o=!0;var a=t.lodash.filter(t.cityList,function(t){return t.areaName==n});t.city=a[0].id,Object(c["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!i)return o=!0;var a=t.lodash.filter(t.countryList,function(t){return t.areaName==i});t.country=a[0].id,o=!0}})}})}},province:function(t,e){t&&o&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"))},city:function(t,e){t&&o&&(this.countryList=[],this.country="",this.handleData(t,"city"))}}},l=r,d=(a("a51d"),a("2877")),u=Object(d["a"])(l,n,i,!1,null,"3e286fda",null);u.options.__file="address.vue";e["a"]=u.exports},"65ea":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"branch"},[a("branch-options",{ref:"branchOptions",on:{search:t.search}}),a("branch-table",{ref:"branchTable",attrs:{branchTotalSize:t.totalSize,loading:t.loading,data:t.data,pageShow:t.pageShow},on:{search:t.search}})],1)},i=[],s=(a("386d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"group"},[a("span",[t._v("分院名称：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入分院名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticClass:"group area"},[a("span",[t._v("地区：")]),a("user-address",{ref:"branchAddress"})],1)]),a("div",{staticClass:"right"},[a("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("查询")]),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.addCom}},[t._v("新增分院")])],1)])],1)}),c=[],o=(a("7f7f"),a("65b8")),r={name:"branchOptions",data:function(){return{name:"",code:"0",codeId:""}},components:{UserAddress:o["a"]},mounted:function(){if(this.$route.query){var t=this.$route.query,e=t.code,a=t.codeId;this.code=e,this.codeId=a}},methods:{addCom:function(){this.$router.push("branchAdd?type=add&code=".concat(this.code,"&codeId=").concat(this.codeId))},search:function(){this.$emit("search")},getData:function(){var t={name:this.name},e=this.code,a=this.codeId;return"0"===e&&(t.physicalId=a),"1"===e&&(t.chinaMedId=a),"2"===e&&(t.dentistryId=a),this.lodash.assign({},t,this.$refs.branchAddress.getData())}}},l=r,d=(a("d12c"),a("2877")),u=Object(d["a"])(l,s,c,!1,null,"d714bb94",null);u.options.__file="branchOptions.vue";var h=u.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-table",{attrs:{data:t.branchList}},[a("el-table-column",{attrs:{prop:"id",label:"分院ID"}}),a("el-table-column",{attrs:{prop:"name",label:"分院名称"}}),a("el-table-column",{attrs:{prop:"area",label:"地区"}}),a("el-table-column",{attrs:{prop:"address",label:"分院地址"}}),a("el-table-column",{attrs:{prop:"workTime",label:"营业时间"}}),a("el-table-column",{attrs:{prop:"phone",label:"联系电话"}}),a("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("编辑")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.code,expression:"code == 0"}],attrs:{type:"text",size:"small"},on:{click:function(a){t.delMsg(e.row)}}},[t._v("下线")])]}}])})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:t.pageShow,expression:"pageShow"}],staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.size,layout:"total, prev, pager, next",total:t.totalSize},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("确认删除该条信息？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)],1)},p=[],v=["/physical","/chinaMed","/dentistry"],b={name:"branchTable",props:["pageShow","data","loading","branchTotalSize"],data:function(){return{branchList:[],dialogVisible:!1,currentPage:1,id:"",code:"",codeId:"",totalSize:this.branchTotalSize,size:20}},mounted:function(){this.$route.query&&(this.code=this.$route.query.code,this.codeId=this.$route.query.codeId)},methods:{handleClick:function(t){this.id=t.id,this.$router.push("branchAdd?type=edit&code=".concat(this.code,"&codeId=").concat(this.codeId,"&id=").concat(this.id))},delMsg:function(t){this.id=t.id,this.dialogVisible=!0},sure:function(){var t=this,e=v[this.code];this.axios.delete("".concat(e,"/").concat(this.id)).then(function(){t.branchList=t.branchList.filter(function(e){return e.id!==t.id})}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1},getData:function(){return{size:this.size,page:this.currentPage-1}},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.$emit("search")}},watch:{data:function(t){this.branchList=t}}},g=b,y=(a("8350"),Object(d["a"])(g,f,p,!1,null,"82145e0e",null));y.options.__file="branchTable.vue";var m=y.exports,_=a("b383"),w=a.n(_),C=["/physicalChild","/chinaMedChild","/dentistryChild"],S={name:"branch",data:function(){return{data:[],totalSize:0,pageShow:!1,loading:!1}},components:{BranchOptions:h,BranchTable:m},mounted:function(){this.search()},methods:{search:function(){var t=this;if(this.$route.query){this.loading=!0;var e=this.$route.query.code,a=this.$refs.branchOptions.getData(),n=this.$refs.branchTable.getData(),i=this.lodash.assign({},a,n),s=w.a.stringify(i||{}),c=C[e];this.axios.get("".concat(c,"?").concat(s)).then(function(e){t.loading=!1,t.data=e.data.data.list,t.totalSize=e.data.data.totalPage,t.pageShow=t.data.length>20,t.dataInit()}).catch(function(e){console.log(e),t.$message(e.data.message)})}},dataInit:function(){this.data.map(function(t){t.area=t.area||t.province+t.city+t.country})}}},k=S,L=(a("5517"),Object(d["a"])(k,n,i,!1,null,"692b9eb8",null));L.options.__file="branch.vue";e["default"]=L.exports},7622:function(t,e,a){"use strict";a.d(e,"a",function(){return n});var n=JSON.parse(sessionStorage.addressProvince)},7899:function(t,e,a){},"7f7f":function(t,e,a){var n=a("86cc").f,i=Function.prototype,s=/^\s*function ([^ (]*)/,c="name";c in i||a("9e1e")&&n(i,c,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},8350:function(t,e,a){"use strict";var n=a("7899"),i=a.n(n);i.a},"8e0c":function(t,e,a){},a51d:function(t,e,a){"use strict";var n=a("3939"),i=a.n(n);i.a},d12c:function(t,e,a){"use strict";var n=a("55aa"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-4becdca0.86854e0d.js.map