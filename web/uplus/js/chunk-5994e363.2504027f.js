(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5994e363"],{"21e6":function(t,e,a){"use strict";var n=a("7ec0"),i=a.n(n);i.a},"331c":function(t,e,a){},"386d":function(t,e,a){a("214f")("search",1,function(t,e,a){return[function(a){"use strict";var n=t(this),i=void 0==a?void 0:a[e];return void 0!==i?i.call(a,n):new RegExp(a)[e](String(n))},a]})},"3ebc":function(t,e,a){"use strict";a.d(e,"b",function(){return h}),a.d(e,"c",function(){return f}),a.d(e,"i",function(){return p}),a.d(e,"l",function(){return g}),a.d(e,"a",function(){return L}),a.d(e,"f",function(){return o}),a.d(e,"g",function(){return c}),a.d(e,"d",function(){return l}),a.d(e,"e",function(){return u}),a.d(e,"n",function(){return v}),a.d(e,"o",function(){return S}),a.d(e,"p",function(){return m}),a.d(e,"q",function(){return y}),a.d(e,"j",function(){return k}),a.d(e,"h",function(){return C}),a.d(e,"m",function(){return _}),a.d(e,"k",function(){return b});a("cadf"),a("551c"),a("097d");var n=a("2ef0"),i=a.n(n),s=a("7c15");function r(t){return i.a.sortBy(t,function(t){return t.sortId})}function o(t){return s["a"].get("/role").then(function(e){return t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function c(t){return s["a"].get("/user").then(function(e){var a={id:"",name:"全部",roleId:""};return e.data.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function l(t){return s["a"].get("/company?page=0&size=1000").then(function(e){var a={id:"",name:"全部"};return e.data.list.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function u(t,e){if(t)return s["a"].get("/goods?companyId=".concat(t,"&page=0&size=1000")).then(function(t){return e&&e(t.data),t.data}).catch(function(t){console.log(t)}),[]}function d(t){var e={dKey:"",id:"",dValue:"全部"};return t.unshift(e),t}var h=r(JSON.parse(sessionStorage.departmentList)),f=r(JSON.parse(sessionStorage.doctorTitleList)),p=r(JSON.parse(sessionStorage.hosLevelList)),g=r(JSON.parse(sessionStorage.propertyList)),v=r(JSON.parse(sessionStorage.skillTagList)),m=r(JSON.parse(sessionStorage.subDepartmentList)),y=r(JSON.parse(sessionStorage.typeList)),b=r(JSON.parse(sessionStorage.paperTypeList)),C=r(JSON.parse(sessionStorage.hopType)),L=JSON.parse(sessionStorage.addressProvince);y=d(y),f=d(f),p=d(p),g=d(g),v=d(v),b=d(b),C=d(C);var _=[{id:1,dKey:1,dValue:"男"},{id:0,dKey:0,dValue:"女"}],S=[{id:0,dKey:0,dValue:"启用"},{id:-1,dKey:-1,dValue:"停用"}],k=[{id:"1234560",dKey:!0,dValue:"是"},{id:"1234567",dKey:!1,dValue:"否"}]},"41e0":function(t,e,a){},5390:function(t,e,a){"use strict";var n=a("c28d"),i=a.n(n);i.a},"65b8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address-group"},[a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{directives:[{name:"show",rawName:"v-show",value:t.isDistrict,expression:"isDistrict"}],staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})}))],1)},i=[],s=a("3ebc"),r=a("dd36"),o=!0,c={name:"userAddress",props:{seletStyle:{default:function(){return{}}},defaultValue:{default:function(){return{}},type:Object},isDistrict:{default:!0,type:Boolean}},data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{addressAddAll:function(t){var e={areaCode:"",id:"",parentId:"",areaName:"全部"};return t.unshift(e),t},handleProvince:function(){var t=JSON.parse(JSON.stringify(s["a"]));this.provinceList=this.addressAddAll(t)},handleData:function(t,e,a){var n=this;t&&Object(r["a"])("area",{parentId:t}).then(function(t){if(t.data.code=n.ok){var i=t.data.data;return i=n.addressAddAll(i),a&&a(i),"province"===e?n.cityList=i:n.countryList=i}n.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),n.$message("系统繁忙，请稍后再试!")})},getData:function(){var t=this,e=this.provinceList.filter(function(e){return t.province===e.id}),a=this.cityList.filter(function(e){return t.city===e.id}),n=this.countryList.filter(function(e){return t.country===e.id}),i=e.length>0?e[0].areaCode:"",s=a.length>0?a[0].areaCode:"",r=n.length>0?n[0].areaCode:"",o={province:i,city:s,country:r,checkProvince:e,checkCity:a,checkCountry:n};return o}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.province,n=e.city,i=e.country;if(o=!1,!a)return o=!0;var s=this.lodash.filter(this.provinceList,function(t){return t.areaCode==a});this.province=s[0].id,Object(r["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!n)return o=!0;var a=t.lodash.filter(t.cityList,function(t){return t.areaCode==n});t.city=a[0].id,Object(r["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!i)return o=!0;var a=t.lodash.filter(t.countryList,function(t){return t.areaCode==i});t.country=a[0].id,o=!0}})}})}},province:function(t,e){o&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"))},city:function(t,e){o&&(this.countryList=[],this.country="",this.handleData(t,"city"))},country:function(t,e){this.$emit("countryChange",this.getData())}}},l=c,u=(a("a092"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"3db8313c",null);d.options.__file="address.vue";e["a"]=d.exports},"7ec0":function(t,e,a){},"9cf8":function(t,e,a){"use strict";a("386d"),a("cadf"),a("551c"),a("097d");var n={size:20,totalCount:100,totalPage:1},i={data:function(){return{pageParams:n,currentPage:1}},methods:{setPage:function(t){this.pageParams.totalCount=t.totalCount,this.pageParams.totalPage=t.totalPage},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.currentPage=t}},watch:{currentPage:function(){this.search()}}};e["a"]=i},a092:function(t,e,a){"use strict";var n=a("331c"),i=a.n(n);i.a},a7c1:function(t,e,a){"use strict";var n=a("41e0"),i=a.n(n);i.a},c28d:function(t,e,a){},ec8a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hospital"},[a("hos-options",{ref:"options",on:{search:t.search}}),a("hos-table",{attrs:{loading:t.loading,data:t.data},on:{search:t.search}}),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.pageParams.size,layout:"total, prev, pager, next",total:t.pageParams.totalCount},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1)],1)},i=[],s=(a("386d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",{staticClass:"item"},[t._v("\n          医院名称："),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入医院名称"},model:{value:t.comName,callback:function(e){t.comName=e},expression:"comName"}}),t._v("\n          医院等级："),a("el-select",{staticClass:"com-input",attrs:{placeholder:"全部"},model:{value:t.gradeValue,callback:function(e){t.gradeValue=e},expression:"gradeValue"}},t._l(t.hosGrade,function(t){return a("el-option",{key:t.id,attrs:{label:t.dValue,value:t.dKey}})}))],1),a("div",{staticClass:"area item"},[a("span",{staticClass:"text"},[t._v("地区：")]),a("user-address",{ref:"address"})],1)]),a("div",{staticClass:"right"},[a("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.search}},[t._v("查询")]),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.addCom}},[t._v("新增医院")])],1)])],1)}),r=[],o=a("3ebc"),c=a("65b8"),l={name:"hosOptions",data:function(){return{hosGrade:o["i"],comName:"",gradeValue:""}},components:{UserAddress:c["a"]},methods:{addCom:function(){this.$router.push("hospitalAdd?type=add")},search:function(){this.$emit("search")},getData:function(){var t={level:this.gradeValue,name:this.comName};return this.lodash.assign({},t,this.$refs.address.getData())}}},u=l,d=(a("21e6"),a("2877")),h=Object(d["a"])(u,s,r,!1,null,"e7d4677c",null);h.options.__file="hosOptions.vue";var f=h.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("el-table",{attrs:{data:t.hospitalList}},[a("el-table-column",{attrs:{prop:"id",label:"医院ID",width:"120"}}),a("el-table-column",{attrs:{prop:"name",label:"医院名字","min-width":"150"}}),a("el-table-column",{attrs:{prop:"otherName",label:"医院别名","min-width":"150"}}),a("el-table-column",{attrs:{prop:"levelName",label:"医院等级",width:"150"}}),a("el-table-column",{attrs:{prop:"address",label:"医院地区","min-width":"120"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.delMsg(e.row)}}},[t._v("删除")])]}}])})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("确认删除该条信息？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.sure}},[t._v("确 定")])],1)])],1)],1)},g=[],v={name:"hosTable",props:["data","loading"],data:function(){return{hospitalList:[],dialogVisible:!1,id:""}},methods:{handleClick:function(t){this.id=t.id,this.$router.push("hospitalAdd?type=edit&id=".concat(this.id))},delMsg:function(t){this.id=t.id,this.dialogVisible=!0},sure:function(){var t=this;this.api.delete("/hospital/".concat(this.id)).then(function(){t.hospitalList=t.hospitalList.filter(function(e){return e.id!==t.id})}).catch(function(e){console.log(e),t.$message(e.data.message)}),this.dialogVisible=!1}},watch:{data:function(t){this.hospitalList=t}}},m=v,y=(a("a7c1"),Object(d["a"])(m,p,g,!1,null,"fcdc2c58",null));y.options.__file="hosTable.vue";var b=y.exports,C=a("b383"),L=a.n(C),_=a("9cf8"),S={name:"hospital",mixins:[_["a"]],data:function(){return{data:[],currentPage:1,loading:!1}},components:{HosOptions:f,HosTable:b},mounted:function(){this.search()},methods:{search:function(){var t=this;this.loading=!0;var e=this.$refs.options.getData(),a={page:this.currentPage-1,size:20},n=this.lodash.assign({},e,a),i=L.a.stringify(n||{});this.api.get("/hospital?".concat(i)).then(function(e){t.loading=!1,e.data&&(t.data=e.data.list,t.setPage(e.data),t.dataInit())}).catch(function(e){console.log(e),t.$message(e.message)})},dataInit:function(){this.data.map(function(t){var e=o["i"].filter(function(e){return e.dKey==t.level});return e.length>0?t.levelName=e[0].dValue:t})}},watch:{currentPage:function(){this.search()}}},k=S,N=(a("5390"),Object(d["a"])(k,n,i,!1,null,"61be4a5c",null));N.options.__file="hospital.vue";e["default"]=N.exports}}]);
//# sourceMappingURL=chunk-5994e363.2504027f.js.map