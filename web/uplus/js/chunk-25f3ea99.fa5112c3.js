(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25f3ea99"],{"21f2":function(t,e,a){"use strict";var n=a("caf2"),i=a.n(n);i.a},"331c":function(t,e,a){},"386d":function(t,e,a){a("214f")("search",1,function(t,e,a){return[function(a){"use strict";var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},a]})},"3ad2":function(t,e,a){},"3ebc":function(t,e,a){"use strict";a.d(e,"b",function(){return f}),a.d(e,"c",function(){return p}),a.d(e,"i",function(){return h}),a.d(e,"l",function(){return v}),a.d(e,"a",function(){return _}),a.d(e,"f",function(){return r}),a.d(e,"g",function(){return c}),a.d(e,"d",function(){return l}),a.d(e,"e",function(){return u}),a.d(e,"n",function(){return g}),a.d(e,"o",function(){return k}),a.d(e,"p",function(){return m}),a.d(e,"q",function(){return y}),a.d(e,"j",function(){return S}),a.d(e,"h",function(){return C}),a.d(e,"m",function(){return L}),a.d(e,"k",function(){return b});var n=a("2ef0"),i=a.n(n),s=a("7c15");function o(t){return i.a.sortBy(t,function(t){return t.sortId})}function r(t){return s["a"].get("/role").then(function(e){return t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function c(t){return s["a"].get("/user").then(function(e){var a={id:"",name:"全部",roleId:""};return e.data.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function l(t){return s["a"].get("/company?page=0&size=1000").then(function(e){var a={id:"",name:"全部"};return e.data.list.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function u(t,e){if(t)return s["a"].get("/goods?companyId=".concat(t,"&page=0&size=1000")).then(function(t){return e&&e(t.data),t.data}).catch(function(t){console.log(t)}),[]}function d(t){var e={dKey:"",id:"",dValue:"全部"};return t.unshift(e),t}var f=o(JSON.parse(sessionStorage.departmentList)),p=o(JSON.parse(sessionStorage.doctorTitleList)),h=o(JSON.parse(sessionStorage.hosLevelList)),v=o(JSON.parse(sessionStorage.propertyList)),g=o(JSON.parse(sessionStorage.skillTagList)),m=o(JSON.parse(sessionStorage.subDepartmentList)),y=o(JSON.parse(sessionStorage.typeList)),b=o(JSON.parse(sessionStorage.paperTypeList)),C=o(JSON.parse(sessionStorage.hopType)),_=JSON.parse(sessionStorage.addressProvince);y=d(y),p=d(p),h=d(h),v=d(v),g=d(g),b=d(b),C=d(C);var L=[{id:1,dKey:1,dValue:"男"},{id:0,dKey:0,dValue:"女"}],k=[{id:0,dKey:0,dValue:"启用"},{id:-1,dKey:-1,dValue:"停用"}],S=[{id:"1234560",dKey:!0,dValue:"是"},{id:"1234567",dKey:!1,dValue:"否"}]},"40ba":function(t,e,a){},"65b8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address-group"},[a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{directives:[{name:"show",rawName:"v-show",value:t.isDistrict,expression:"isDistrict"}],staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})}))],1)},i=[],s=a("3ebc"),o=a("dd36"),r=!0,c={name:"userAddress",props:{seletStyle:{default:function(){return{}}},defaultValue:{default:function(){return{}},type:Object},isDistrict:{default:!0,type:Boolean}},data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{addressAddAll:function(t){var e={areaCode:"",id:"",parentId:"",areaName:"全部"};return t.unshift(e),t},handleProvince:function(){var t=JSON.parse(JSON.stringify(s["a"]));this.provinceList=this.addressAddAll(t)},handleData:function(t,e,a){var n=this;t&&Object(o["a"])("area",{parentId:t}).then(function(t){if(t.data.code=n.ok){var i=t.data.data;return i=n.addressAddAll(i),a&&a(i),"province"===e?n.cityList=i:n.countryList=i}n.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),n.$message("系统繁忙，请稍后再试!")})},getData:function(){var t=this,e=this.provinceList.filter(function(e){return t.province===e.id}),a=this.cityList.filter(function(e){return t.city===e.id}),n=this.countryList.filter(function(e){return t.country===e.id}),i=e.length>0?e[0].areaCode:"",s=a.length>0?a[0].areaCode:"",o=n.length>0?n[0].areaCode:"",r={province:i,city:s,country:o,checkProvince:e,checkCity:a,checkCountry:n};return r}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.province,n=e.city,i=e.country;if(r=!1,!a)return r=!0;var s=this.lodash.filter(this.provinceList,function(t){return t.areaCode==a});this.province=s[0].id,Object(o["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!n)return r=!0;var a=t.lodash.filter(t.cityList,function(t){return t.areaCode==n});t.city=a[0].id,Object(o["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!i)return r=!0;var a=t.lodash.filter(t.countryList,function(t){return t.areaCode==i});t.country=a[0].id,r=!0}})}})}},province:function(t,e){r&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"))},city:function(t,e){r&&(this.countryList=[],this.country="",this.handleData(t,"city"))},country:function(t,e){this.$emit("countryChange",this.getData())}}},l=c,u=(a("a092"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"3db8313c",null);d.options.__file="address.vue";e["a"]=d.exports},"6e09":function(t,e,a){"use strict";var n=a("be8d"),i=a.n(n);i.a},"95a5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hospital"},[a("doctor-options",{ref:"doctorOptions",on:{search:t.search}}),a("doctor-table",{attrs:{loading:t.loading,data:t.data},on:{search:t.search}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)},i=[],s=(a("386d"),a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"group"},[a("span",[t._v("医生姓名：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入医生名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("span",[t._v("医院职称：")]),a("el-select",{staticClass:"com-input",attrs:{placeholder:"全部"},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}},t._l(t.hosGrade,function(t){return a("el-option",{key:t.id,attrs:{label:t.dValue,value:t.dKey}})}))],1),a("div",{staticClass:"group"},[a("span",[t._v("医院名称：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入医院名称"},model:{value:t.hospitalName,callback:function(e){t.hospitalName=e},expression:"hospitalName"}}),a("span",[t._v("医生手机：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入医生手机号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("div",{staticClass:"group"},[a("span",{staticClass:"text"},[t._v("科室：")]),a("hos-offices",{ref:"doctorOffices"})],1),a("div",{staticClass:"group"},[a("span",{staticClass:"text"},[t._v("地区：")]),a("user-address",{ref:"doctorAddress"})],1)]),a("div",{staticClass:"right"},[a("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("查询")]),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.addCom}},[t._v("新增医生")])],1)])],1)}),o=[],r=(a("7f7f"),a("3ebc")),c=a("65b8"),l=a("de99"),u={name:"doctorOptions",data:function(){return{hosGrade:r["c"],name:"",hospitalName:"",phone:"",level:""}},components:{UserAddress:c["a"],HosOffices:l["a"]},methods:{addCom:function(){this.$router.push("addDoc?type=add")},search:function(){this.$emit("search")},getData:function(){var t={name:this.name,hospitalName:this.hospitalName,phone:this.phone,level:this.level};return this.lodash.assign({},t,this.$refs.doctorOffices.getData(),this.$refs.doctorAddress.getData())}}},d=u,f=(a("21f2"),a("2877")),p=Object(f["a"])(d,s,o,!1,null,"a7025544",null);p.options.__file="doctorOptions.vue";var h=p.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-table",{attrs:{data:t.hospitalList}},[a("el-table-column",{attrs:{prop:"id",label:"医生ID",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"医生名字"}}),a("el-table-column",{attrs:{prop:"hospitalName",label:"所在医院"}}),a("el-table-column",{attrs:{prop:"dept",label:"所在科室"}}),a("el-table-column",{attrs:{prop:"address",label:"地区"}}),a("el-table-column",{attrs:{prop:"levelName",label:"医生职称",width:"120"}}),a("el-table-column",{attrs:{prop:"phone",label:"医生手机号"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.delMsg(e.row)}}},[t._v("删除")])]}}])})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("确认删除该条信息？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)],1)},g=[],m={name:"doctorTable",props:["data","loading"],data:function(){return{hospitalList:[],dialogVisible:!1,id:""}},methods:{handleClick:function(t){this.id=t.id,this.$router.push("addDoc?type=edit&id=".concat(this.id))},delMsg:function(t){this.id=t.id,this.dialogVisible=!0},sure:function(){var t=this;this.api.delete("/doctor/".concat(this.id)).then(function(){t.hospitalList=t.hospitalList.filter(function(e){return e.id!==t.id})}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1}},watch:{data:function(t){this.hospitalList=t}}},y=m,b=(a("f586"),Object(f["a"])(y,v,g,!1,null,"679a1106",null));b.options.__file="doctorTable.vue";var C=b.exports,_=a("b383"),L=a.n(_),k=a("9cf8"),S={name:"doctor",mixins:[k["a"]],data:function(){return{data:[],currentPage:1,loading:!1}},components:{DoctorOptions:h,DoctorTable:C},mounted:function(){this.search()},methods:{search:function(){var t=this;this.loading=!0;var e=this.$refs.doctorOptions.getData(),a={size:20,page:this.currentPage-1},n=this.lodash.assign({},e,a),i=L.a.stringify(n||{});this.api.get("/doctor?".concat(i)).then(function(e){t.loading=!1,e.data&&(t.data=e.data.list,t.setPage(e.data),t.dataInit())}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.data)})},dataInit:function(){this.data.map(function(t){t.country&&(t.address=t.address||"".concat(t.provinceValue,"-").concat(t.cityValue,"-").concat(t.countryValue));var e=r["c"].filter(function(e){return e.id==t.level});return e.length>0?t.levelName=e[0].dValue:t})}},watch:{currentPage:function(){this.search()}}},O=S,V=(a("6e09"),Object(f["a"])(O,n,i,!1,null,"16b98d86",null));V.options.__file="doctor.vue";e["default"]=V.exports},"9cf8":function(t,e,a){"use strict";a("386d"),a("cadf"),a("551c"),a("097d");var n={size:20,totalCount:100,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=i},a092:function(t,e,a){"use strict";var n=a("331c"),i=a.n(n);i.a},be8d:function(t,e,a){},caf2:function(t,e,a){},de99:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hos-offices"},[a("el-select",{staticClass:"offices-input",style:t.seletStyle,attrs:{placeholder:"选择一级科室"},model:{value:t.dept1,callback:function(e){t.dept1=e},expression:"dept1"}},t._l(t.departmentList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.dValue,value:t.dKey}})})),a("el-select",{staticClass:"offices-input",style:t.seletStyle,attrs:{placeholder:"选择二级科室"},model:{value:t.dept2,callback:function(e){t.dept2=e},expression:"dept2"}},t._l(t.subDepart,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.dValue,value:t.dKey}})}))],1)},i=[],s=(a("cadf"),a("551c"),a("097d"),a("3ebc")),o=(a("dd36"),!0),r={name:"hosOffices",props:["seletStyle","defaultValue"],data:function(){return{departmentList:s["b"],subDepart:[],dept1:"",dept2:""}},mounted:function(){this.dataInit()},methods:{dataInit:function(){var t=JSON.parse(JSON.stringify(s["b"]));this.departmentList=this.addAll(t)},addAll:function(t){var e={id:"",dKey:"",dValue:"全部"};t.filter(function(t){return"全部"!==t.dValue});return t.unshift(e),t},handleData:function(t){if(t){var e=this.lodash.filter(s["p"],function(e){return e.parentKey===t});this.subDepart=this.addAll(e)}},getData:function(){var t={dept1:this.dept1,dept2:this.dept2};return t}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.dept1,n=e.dept2;if(o=!1,!a)return o=!0;this.handleData(a),this.dept1=a,setTimeout(function(){if(!n)return o=!0;t.dept2=n,o=!0},500)}},dept1:function(t,e){t&&o&&(this.subDepart=[],this.dept2="",this.handleData(t))}}},c=r,l=(a("e459"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"05e25fea",null);u.options.__file="hosOffices.vue";e["a"]=u.exports},e459:function(t,e,a){"use strict";var n=a("40ba"),i=a.n(n);i.a},f586:function(t,e,a){"use strict";var n=a("3ad2"),i=a.n(n);i.a}}]);
//# sourceMappingURL=chunk-25f3ea99.fa5112c3.js.map