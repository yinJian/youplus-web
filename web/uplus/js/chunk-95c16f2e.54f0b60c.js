(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95c16f2e"],{"0e02":function(t,e,a){"use strict";var n=a("154e"),i=a.n(n);i.a},1404:function(t,e,a){"use strict";var n=a("db9c"),i=a.n(n);i.a},"154e":function(t,e,a){},"386d":function(t,e,a){a("214f")("search",1,function(t,e,a){return[function(a){"use strict";var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},a]})},"3ebc":function(t,e,a){"use strict";a.d(e,"b",function(){return f}),a.d(e,"c",function(){return h}),a.d(e,"i",function(){return p}),a.d(e,"l",function(){return g}),a.d(e,"a",function(){return L}),a.d(e,"f",function(){return o}),a.d(e,"g",function(){return c}),a.d(e,"d",function(){return u}),a.d(e,"e",function(){return l}),a.d(e,"n",function(){return v}),a.d(e,"o",function(){return k}),a.d(e,"p",function(){return m}),a.d(e,"q",function(){return y}),a.d(e,"j",function(){return _}),a.d(e,"h",function(){return C}),a.d(e,"m",function(){return S}),a.d(e,"k",function(){return b});var n=a("2ef0"),i=a.n(n),s=a("7c15");function r(t){return i.a.sortBy(t,function(t){return t.sortId})}function o(t){return s["a"].get("/role").then(function(e){return t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function c(t){return s["a"].get("/user").then(function(e){var a={id:"",name:"全部",roleId:""};return e.data.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function u(t){return s["a"].get("/company?page=0&size=1000").then(function(e){var a={id:"",name:"全部"};return e.data.list.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function l(t,e){if(t)return s["a"].get("/goods?companyId=".concat(t,"&page=0&size=1000")).then(function(t){return e&&e(t.data),t.data}).catch(function(t){console.log(t)}),[]}function d(t){var e={dKey:"",id:"",dValue:"全部"};return t.unshift(e),t}var f=r(JSON.parse(sessionStorage.departmentList)),h=r(JSON.parse(sessionStorage.doctorTitleList)),p=r(JSON.parse(sessionStorage.hosLevelList)),g=r(JSON.parse(sessionStorage.propertyList)),v=r(JSON.parse(sessionStorage.skillTagList)),m=r(JSON.parse(sessionStorage.subDepartmentList)),y=r(JSON.parse(sessionStorage.typeList)),b=r(JSON.parse(sessionStorage.paperTypeList)),C=r(JSON.parse(sessionStorage.hopType)),L=JSON.parse(sessionStorage.addressProvince);y=d(y),h=d(h),p=d(p),g=d(g),v=d(v),b=d(b),C=d(C);var S=[{id:1,dKey:1,dValue:"男"},{id:0,dKey:0,dValue:"女"}],k=[{id:0,dKey:0,dValue:"启用"},{id:-1,dKey:-1,dValue:"停用"}],_=[{id:"1234560",dKey:!0,dValue:"是"},{id:"1234567",dKey:!1,dValue:"否"}]},"65b8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address-group"},[a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{directives:[{name:"show",rawName:"v-show",value:t.isDistrict,expression:"isDistrict"}],staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})}))],1)},i=[],s=a("3ebc"),r=a("dd36"),o=!0,c={name:"userAddress",props:{seletStyle:{default:function(){return{}}},defaultValue:{default:function(){return{}},type:Object},isDistrict:{default:!0,type:Boolean}},data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{addressAddAll:function(t){var e={areaCode:"",id:"",parentId:"",areaName:"全部"};return t.unshift(e),t},handleProvince:function(){var t=JSON.parse(JSON.stringify(s["a"]));this.provinceList=this.addressAddAll(t)},handleData:function(t,e,a){var n=this;t&&Object(r["a"])("area",{parentId:t}).then(function(t){if(t.data.code=n.ok){var i=t.data.data;return i=n.addressAddAll(i),a&&a(i),"province"===e?n.cityList=i:n.countryList=i}n.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),n.$message("系统繁忙，请稍后再试!")})},getData:function(){var t=this,e=this.provinceList.filter(function(e){return t.province===e.id}),a=this.cityList.filter(function(e){return t.city===e.id}),n=this.countryList.filter(function(e){return t.country===e.id}),i=e.length>0?e[0].areaCode:"",s=a.length>0?a[0].areaCode:"",r=n.length>0?n[0].areaCode:"",o={province:i,city:s,country:r,checkProvince:e,checkCity:a,checkCountry:n};return o}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.province,n=e.city,i=e.country;if(o=!1,!a)return o=!0;var s=this.lodash.filter(this.provinceList,function(t){return t.areaCode==a});this.province=s[0].id,Object(r["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!n)return o=!0;var a=t.lodash.filter(t.cityList,function(t){return t.areaCode==n});t.city=a[0].id,Object(r["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!i)return o=!0;var a=t.lodash.filter(t.countryList,function(t){return t.areaCode==i});t.country=a[0].id,o=!0}})}})}},province:function(t,e){o&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"),this.$emit("countryChange",this.getData()))},city:function(t,e){o&&(this.countryList=[],this.country="",this.handleData(t,"city"),this.$emit("countryChange",this.getData()))},country:function(t,e){this.$emit("countryChange",this.getData())}}},u=c,l=(a("0e02"),a("2877")),d=Object(l["a"])(u,n,i,!1,null,"498b59aa",null);d.options.__file="address.vue";e["a"]=d.exports},7537:function(t,e,a){},"7a3c":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userFiled"},[a("userfiled-options",{ref:"userfiledOptions",on:{search:t.search}}),a("userfiled-table",{attrs:{loading:t.loading,data:t.data},on:{search:t.search}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)},i=[],s=(a("386d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"group"},[a("span",[t._v("驻场人员姓名：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入驻场人员姓名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),a("span",[t._v("驻场人员手机号：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入驻场人员手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),a("div",{staticClass:"group"},[a("span",{staticClass:"text"},[t._v("地区：")]),a("user-address",{ref:"userfileAddress"})],1)]),a("div",{staticClass:"right"},[a("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("查询")]),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.addCom}},[t._v("新增驻场人员")])],1)])],1)}),r=[],o=a("65b8"),c={name:"doctorOptions",data:function(){return{userName:"",mobile:""}},components:{UserAddress:o["a"]},methods:{addCom:function(){this.$router.push("addUserfiled?type=add")},search:function(){this.$emit("search")},getData:function(){var t={userName:this.userName,mobile:this.mobile};return this.lodash.assign({},t,this.$refs.userfileAddress.getData())}}},u=c,l=(a("a026"),a("2877")),d=Object(l["a"])(u,s,r,!1,null,"1eeacb18",null);d.options.__file="userfiledOptions.vue";var f=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-table",{attrs:{data:t.userFiledList}},[a("el-table-column",{attrs:{prop:"id",label:"人员ID"}}),a("el-table-column",{attrs:{prop:"userName",label:"姓名"}}),a("el-table-column",{attrs:{prop:"nickName",label:"微信昵称"}}),a("el-table-column",{attrs:{prop:"address",label:"地区"}}),a("el-table-column",{attrs:{prop:"mobile",label:"手机号码"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.delMsg(e.row)}}},[t._v("删除")])]}}])})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("确认删除该条信息？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)],1)},p=[],g={name:"userfiledTable",props:["data","loading"],data:function(){return{userFiledList:[],dialogVisible:!1,id:""}},methods:{handleClick:function(t){this.id=t.id,this.$router.push("addUserfiled?type=edit&id=".concat(this.id))},delMsg:function(t){this.id=t.id,this.dialogVisible=!0},sure:function(){var t=this;this.api.delete("/groundPerson/".concat(this.id)).then(function(){t.userFiledList=t.userFiledList.filter(function(e){return e.id!==t.id})}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1}},watch:{data:function(t){this.userFiledList=t}}},v=g,m=(a("bd9f"),Object(l["a"])(v,h,p,!1,null,"3bb1a152",null));m.options.__file="userfiledTable.vue";var y=m.exports,b=a("b383"),C=a.n(b),L=a("9cf8"),S={name:"userFiled",mixins:[L["a"]],data:function(){return{type:"",id:"",data:[],currentPage:1,loading:!1,state:!1}},mounted:function(){this.search()},methods:{search:function(){var t=this;this.loading=!0;var e=this.$refs.userfiledOptions.getData(),a={size:20,page:this.currentPage-1},n=this.lodash.assign({},e,a),i=C.a.stringify(n||{});this.api.get("/groundPerson?".concat(i)).then(function(e){t.loading=!1,e.data&&(t.data=e.data.list,t.setPage(e.data),t.dataInit())}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.data)})},dataInit:function(){this.data.map(function(t){t.country&&(t.address=t.address||"".concat(t.provinceValue,"-").concat(t.countryValue,"-").concat(t.cityValue))})},dialogState:function(t){t=t||{},this.state=t.state,this.type=t.type,this.id=t.id}},watch:{currentPage:function(){this.search()}},components:{UserfiledOptions:f,UserfiledTable:y}},k=S,_=(a("1404"),Object(l["a"])(k,n,i,!1,null,"7547e430",null));_.options.__file="userFiled.vue";e["default"]=_.exports},"7ab3":function(t,e,a){},"9cf8":function(t,e,a){"use strict";a("386d");var n={size:20,totalCount:100,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=i},a026:function(t,e,a){"use strict";var n=a("7537"),i=a.n(n);i.a},bd9f:function(t,e,a){"use strict";var n=a("7ab3"),i=a.n(n);i.a},db9c:function(t,e,a){}}]);
//# sourceMappingURL=chunk-95c16f2e.54f0b60c.js.map