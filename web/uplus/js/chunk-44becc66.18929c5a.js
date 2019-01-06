(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44becc66"],{"09f1":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userList"},[a("list-options",{ref:"listOptions",on:{search:t.search}}),a("list-table",{attrs:{loading:t.loading,data:t.data},on:{search:t.search}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)},i=[],s=(a("7f7f"),a("386d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"item"},[a("span",[t._v("用户姓名：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入用户姓名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),a("div",{staticClass:"item"},[a("span",{staticClass:"user-num"},[t._v("手机号：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入用户手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}}),a("span",{staticClass:"user-num"},[t._v("保单号：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入用户保单号"},model:{value:t.cardNum,callback:function(e){t.cardNum=e},expression:"cardNum"}})],1),a("div",{staticClass:"area item"},[a("span",[t._v("证件号码：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入用户证件号码"},model:{value:t.paper,callback:function(e){t.paper=e},expression:"paper"}}),a("span",[t._v("所属企业：")]),a("el-select",{staticClass:"com-input",attrs:{placeholder:"全部"},model:{value:t.companyId,callback:function(e){t.companyId=e},expression:"companyId"}},t._l(t.companys,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),a("div",{staticClass:"area address item"},[a("span",{staticClass:"text"},[t._v("地区：")]),a("user-address",{ref:"listAddress"})],1)]),a("div",{staticClass:"right"},[a("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("查询")]),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.addCom}},[t._v("新增用户")])],1)])],1)}),r=[],o=a("3ebc"),c=(a("0eb5"),a("dd36"),a("65b8")),u={name:"listOptions",data:function(){return{companys:[],userName:"",mobile:"",cardNum:"",paper:"",companyId:""}},components:{UserAddress:c["a"]},mounted:function(){this.dataInit()},methods:{dataInit:function(){var t=this;Object(o["d"])(function(e){t.companys=e.list})},addCom:function(){this.$router.push("addUser?type=add")},search:function(){this.$emit("search")},getData:function(){var t={userName:this.userName,mobile:this.mobile,cardNum:this.cardNum,paper:this.paper,companyId:this.companyId};return this.lodash.assign({},t,this.$refs.listAddress.getData())}}},l=u,d=(a("cf8c"),a("2877")),p=Object(d["a"])(l,s,r,!1,null,"6d19bf16",null);p.options.__file="listOptions.vue";var f=p.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-table",{attrs:{data:t.userInfoList,align:"center"}},[a("el-table-column",{attrs:{prop:"id",label:"用户ID"}}),a("el-table-column",{attrs:{prop:"userName",label:"用户姓名"}}),a("el-table-column",{attrs:{prop:"paper",label:"证件号码"}}),a("el-table-column",{attrs:{prop:"mobile",label:"手机号"}}),a("el-table-column",{attrs:{prop:"address",label:"用户地区"}}),a("el-table-column",{attrs:{prop:"cardNum",label:"保单号/服务号"}}),a("el-table-column",{attrs:{prop:"companyName",label:"所属企业"}}),a("el-table-column",{attrs:{prop:"statusName",label:"状态"}}),a("el-table-column",{attrs:{prop:"youServers",label:"当前服务"}}),a("el-table-column",{attrs:{label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("查看")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.disPath(e.row)}}},[t._v("派单")])]}}])})],1)],1)],1)},m=[],v=a("b383"),y=a.n(v),g={name:"listTable",props:["data","loading"],data:function(){return{userInfoList:[],id:""}},methods:{handleClick:function(t){this.id=t.id;var e=t.provinceValue&&t.cityValue&&t.countryValue?"".concat(t.provinceValue,"-").concat(t.cityValue,"-").concat(t.countryValue):"",a={type:"edit",id:this.id,cardNum:t.paper,mobile:t.mobile,userName:t.userName,address:e};a=y.a.stringify(a||{}),this.$router.push("userDetail?".concat(a))},disPath:function(t){this.id=t.id;var e=t.provinceValue&&t.cityValue&&t.countryValue?"".concat(t.provinceValue,"-").concat(t.cityValue,"-").concat(t.countryValue):"",a={type:"disPath",id:this.id,cardNum:t.paper,mobile:t.mobile,userName:t.userName,address:e};a=y.a.stringify(a||{}),this.$router.push("userDetail?".concat(a))}},watch:{data:function(t){this.userInfoList=t}}},b=g,C=(a("ebe2"),Object(d["a"])(b,h,m,!1,null,"65dab3e9",null));C.options.__file="listTable.vue";var N=C.exports,L=a("9cf8"),S=[{code:0,name:"正常"},{code:1,name:"中止"},{code:2,name:"终止"},{code:3,name:"失效"}],_={name:"userList",mixins:[L["a"]],data:function(){return{data:[],currentPage:1,loading:!1}},components:{ListOptions:f,ListTable:N},mounted:function(){this.search()},methods:{search:function(){var t=this;this.loading=!0;var e=this.$refs.listOptions.getData(),a={page:this.currentPage-1,size:20},n=this.lodash.assign({},e,a),i=y.a.stringify(n||{});this.api.get("/customer?".concat(i)).then(function(e){t.loading=!1,e.data&&(t.data=e.data.list,t.setPage(e.data),t.dataInit())}).catch(function(e){console.log(e),t.$message(e.message)})},dataInit:function(){this.data.map(function(t){return t.address=t.address||t.provinceValue+t.cityValue+t.countryValue,t.statusName="",S.map(function(e){e.code===t.status&&(t.statusName=e.name)}),t})}},watch:{currentPage:function(){this.search()}}},k=_,O=(a("817e"),Object(d["a"])(k,n,i,!1,null,"4ad47d42",null));O.options.__file="userList.vue";e["default"]=O.exports},"0e02":function(t,e,a){"use strict";var n=a("154e"),i=a.n(n);i.a},"0eb5":function(t,e,a){"use strict"},"154e":function(t,e,a){},"386d":function(t,e,a){a("214f")("search",1,function(t,e,a){return[function(a){"use strict";var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},a]})},"3ebc":function(t,e,a){"use strict";a.d(e,"b",function(){return p}),a.d(e,"c",function(){return f}),a.d(e,"i",function(){return h}),a.d(e,"l",function(){return m}),a.d(e,"a",function(){return N}),a.d(e,"f",function(){return o}),a.d(e,"g",function(){return c}),a.d(e,"d",function(){return u}),a.d(e,"e",function(){return l}),a.d(e,"n",function(){return v}),a.d(e,"o",function(){return S}),a.d(e,"p",function(){return y}),a.d(e,"q",function(){return g}),a.d(e,"j",function(){return _}),a.d(e,"h",function(){return C}),a.d(e,"m",function(){return L}),a.d(e,"k",function(){return b});var n=a("2ef0"),i=a.n(n),s=a("7c15");function r(t){return i.a.sortBy(t,function(t){return t.sortId})}function o(t){return s["a"].get("/role").then(function(e){return t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function c(t){return s["a"].get("/user").then(function(e){var a={id:"",name:"全部",roleId:""};return e.data.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function u(t){return s["a"].get("/company?page=0&size=1000").then(function(e){var a={id:"",name:"全部"};return e.data.list.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function l(t,e){if(t)return s["a"].get("/goods?companyId=".concat(t,"&page=0&size=1000")).then(function(t){return e&&e(t.data),t.data}).catch(function(t){console.log(t)}),[]}function d(t){var e={dKey:"",id:"",dValue:"全部"};return t.unshift(e),t}var p=r(JSON.parse(sessionStorage.departmentList)),f=r(JSON.parse(sessionStorage.doctorTitleList)),h=r(JSON.parse(sessionStorage.hosLevelList)),m=r(JSON.parse(sessionStorage.propertyList)),v=r(JSON.parse(sessionStorage.skillTagList)),y=r(JSON.parse(sessionStorage.subDepartmentList)),g=r(JSON.parse(sessionStorage.typeList)),b=r(JSON.parse(sessionStorage.paperTypeList)),C=r(JSON.parse(sessionStorage.hopType)),N=JSON.parse(sessionStorage.addressProvince);g=d(g),f=d(f),h=d(h),m=d(m),v=d(v),b=d(b),C=d(C);var L=[{id:1,dKey:1,dValue:"男"},{id:0,dKey:0,dValue:"女"}],S=[{id:0,dKey:0,dValue:"启用"},{id:-1,dKey:-1,dValue:"停用"}],_=[{id:"1234560",dKey:!0,dValue:"是"},{id:"1234567",dKey:!1,dValue:"否"}]},"65b8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address-group"},[a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{directives:[{name:"show",rawName:"v-show",value:t.isDistrict,expression:"isDistrict"}],staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})}))],1)},i=[],s=a("3ebc"),r=a("dd36"),o=!0,c={name:"userAddress",props:{seletStyle:{default:function(){return{}}},defaultValue:{default:function(){return{}},type:Object},isDistrict:{default:!0,type:Boolean}},data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{addressAddAll:function(t){var e={areaCode:"",id:"",parentId:"",areaName:"全部"};return t.unshift(e),t},handleProvince:function(){var t=JSON.parse(JSON.stringify(s["a"]));this.provinceList=this.addressAddAll(t)},handleData:function(t,e,a){var n=this;t&&Object(r["a"])("area",{parentId:t}).then(function(t){if(t.data.code=n.ok){var i=t.data.data;return i=n.addressAddAll(i),a&&a(i),"province"===e?n.cityList=i:n.countryList=i}n.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),n.$message("系统繁忙，请稍后再试!")})},getData:function(){var t=this,e=this.provinceList.filter(function(e){return t.province===e.id}),a=this.cityList.filter(function(e){return t.city===e.id}),n=this.countryList.filter(function(e){return t.country===e.id}),i=e.length>0?e[0].areaCode:"",s=a.length>0?a[0].areaCode:"",r=n.length>0?n[0].areaCode:"",o={province:i,city:s,country:r,checkProvince:e,checkCity:a,checkCountry:n};return o}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.province,n=e.city,i=e.country;if(o=!1,!a)return o=!0;var s=this.lodash.filter(this.provinceList,function(t){return t.areaCode==a});this.province=s[0].id,Object(r["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!n)return o=!0;var a=t.lodash.filter(t.cityList,function(t){return t.areaCode==n});t.city=a[0].id,Object(r["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!i)return o=!0;var a=t.lodash.filter(t.countryList,function(t){return t.areaCode==i});t.country=a[0].id,o=!0}})}})}},province:function(t,e){o&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"),this.$emit("countryChange",this.getData()))},city:function(t,e){o&&(this.countryList=[],this.country="",this.handleData(t,"city"),this.$emit("countryChange",this.getData()))},country:function(t,e){this.$emit("countryChange",this.getData())}}},u=c,l=(a("0e02"),a("2877")),d=Object(l["a"])(u,n,i,!1,null,"498b59aa",null);d.options.__file="address.vue";e["a"]=d.exports},"817e":function(t,e,a){"use strict";var n=a("91a7"),i=a.n(n);i.a},"91a7":function(t,e,a){},"9cf8":function(t,e,a){"use strict";a("386d");var n={size:20,totalCount:100,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=i},a56a:function(t,e,a){},cf8c:function(t,e,a){"use strict";var n=a("a56a"),i=a.n(n);i.a},ddfa:function(t,e,a){},ebe2:function(t,e,a){"use strict";var n=a("ddfa"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-44becc66.18929c5a.js.map