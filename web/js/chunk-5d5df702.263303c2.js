(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d5df702"],{"0962":function(t,e,a){},"0eb5":function(t,e,a){"use strict";a.d(e,"c",function(){return i}),a.d(e,"b",function(){return n}),a.d(e,"a",function(){return s}),a.d(e,"f",function(){return l}),a.d(e,"d",function(){return r}),a.d(e,"e",function(){return o});var i=[{value:"A",label:"A公司"},{value:"B",label:"B公司"}],n=[{value:"A",label:"洗漱用品"},{value:"B",label:"日用品"}],s=[{value:"A",label:"身份证"},{value:"B",label:"护照"}],l={id:"010",userName:"龙先生",cardNum:"4127512441365",mobile:"18547814217",address:"北京市朝阳区",policyNum:"2145125422630",compony:"中国平安",state:"正常",server:"押金垫付(不限)押金垫付(不限)"},r={id:"010",coverName:"龙先生",coverMobile:"13524541258",insuredName:"张先生",insuredMobile:"13987456254",good:"基金A",dateBegin:"2018-05-01",dateEnd:"2018-08-08",state:"正常",server:"押金垫付(不限)押金垫付(不限)"},o={id:"010",userName:"龙先生",nickName:"樱桃小丸子",address:"北京市-西城区-西城路",mobile:"13987456254",remarks:"销售人员"}},"36bd":function(t,e,a){"use strict";var i=a("4bf8"),n=a("77f1"),s=a("9def");t.exports=function(t){var e=i(this),a=s(e.length),l=arguments.length,r=n(l>1?arguments[1]:void 0,a),o=l>2?arguments[2]:void 0,c=void 0===o?a:n(o,a);while(c>r)e[r++]=t;return e}},"3e91":function(t,e,a){"use strict";var i=a("73d6"),n=a.n(i);n.a},"52ba":function(t,e,a){"use strict";var i=a("fadf"),n=a.n(i);n.a},"656e":function(t,e,a){"use strict";var i=a("d2b9"),n=a.n(i);n.a},"65b8":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address-group"},[a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return a("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return a("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})}))],1)},n=[],s=(a("cadf"),a("551c"),a("097d"),a("7622")),l=a("dd36"),r=!0,o={name:"userAddress",props:["seletStyle","defaultValue"],data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{handleProvince:function(){this.provinceList=s["a"]},handleData:function(t,e,a){var i=this;t&&Object(l["a"])("area",{parentId:t}).then(function(t){if(t.data.code=i.ok)return a&&a(t.data.data),"province"===e?i.cityList=t.data.data:i.countryList=t.data.data;i.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),i.$message("系统繁忙，请稍后再试!")})},getData:function(){var t=this,e=this.provinceList.filter(function(e){return t.province===e.id}),a=this.cityList.filter(function(e){return t.city===e.id}),i=this.countryList.filter(function(e){return t.country===e.id}),n=e.length>0?e[0].areaCode:"",s=a.length>0?a[0].areaCode:"",l=i.length>0?i[0].areaCode:"",r={province:n,city:s,country:l};return r}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.province,i=e.city,n=e.country;if(r=!1,!a)return r=!0;var s=this.lodash.filter(this.provinceList,function(t){return t.areaCode==a});this.province=s[0].id,Object(l["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!i)return r=!0;var a=t.lodash.filter(t.cityList,function(t){return t.areaCode==i});t.city=a[0].id,Object(l["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!n)return r=!0;var a=t.lodash.filter(t.countryList,function(t){return t.areaCode==n});t.country=a[0].id,r=!0}})}})}},province:function(t,e){t&&r&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"))},city:function(t,e){t&&r&&(this.countryList=[],this.country="",this.handleData(t,"city"))},country:function(t,e){this.$emit("countryChange",this.getData())}}},c=o,u=(a("52ba"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,"29084cf2",null);d.options.__file="address.vue";e["a"]=d.exports},"6c7b":function(t,e,a){var i=a("5ca1");i(i.P,"Array",{fill:a("36bd")}),a("9c6c")("fill")},"73d6":function(t,e,a){},7622:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var i=JSON.parse(sessionStorage.addressProvince)},"7a3c":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"userFiled"},[a("userfiled-options",{on:{dialogState:t.dialogState}}),a("userfiled-table",{on:{dialogState:t.dialogState}}),t.state?a("add-userfiled",{attrs:{header:t.title,data:t.data},on:{dialogState:t.dialogState}}):t._e()],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-header",{staticClass:"header"},[a("div",{staticClass:"left"},[a("div",[a("span",[t._v("驻场人员姓名：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入驻场人员姓名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),a("span",[t._v("驻场人员手机号：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入驻场人员手机号"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),a("div",{staticClass:"group"},[a("span",{staticClass:"text"},[t._v("地区：")]),a("user-address")],1)]),a("div",{staticClass:"right"},[a("el-button",{staticClass:"btn",attrs:{type:"primary",icon:"el-icon-search"}},[t._v("查询")]),a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.addCom}},[t._v("新增驻场人员")])],1)])],1)},l=[],r=a("65b8"),o={name:"doctorOptions",data:function(){return{userName:"",mobile:""}},components:{UserAddress:r["a"]},methods:{addCom:function(){var t={title:"新增驻场人员",state:!0};this.$emit("dialogState",t)}}},c=o,u=(a("656e"),a("2877")),d=Object(u["a"])(c,s,l,!1,null,"7eb95d9a",null);d.options.__file="userfiledOptions.vue";var f=d.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",[a("el-main",[a("el-table",{attrs:{data:t.userFiledList}},[a("el-table-column",{attrs:{prop:"id",label:"人员ID"}}),a("el-table-column",{attrs:{prop:"userName",label:"姓名"}}),a("el-table-column",{attrs:{prop:"nickName",label:"微信昵称"}}),a("el-table-column",{attrs:{prop:"address",label:"地区"}}),a("el-table-column",{attrs:{prop:"mobile",label:"手机号码"}}),a("el-table-column",{attrs:{prop:"remarks",label:"备注"}}),a("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.handleClick(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){t.delMsg(e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":100,layout:"total, prev, pager, next",total:1e3},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e}}})],1),a("el-dialog",{attrs:{title:"提示",visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("span",[t._v("确认删除该条信息？")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogVisible=!1}}},[t._v("确 定")])],1)])],1)],1)},v=[],b=(a("6c7b"),a("0eb5")),h={name:"userfiledTable",data:function(){return{userFiledList:Array(8).fill(b["e"]),dialogVisible:!1,currentPage:1}},methods:{handleClick:function(){var t={title:"信息编辑",state:!0};this.$emit("dialogState",t)},delMsg:function(){this.dialogVisible=!0},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))}}},m=h,y=(a("9cb0"),Object(u["a"])(m,p,v,!1,null,"64e18683",null));y.options.__file="userfiledTable.vue";var g=y.exports,C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{attrs:{title:t.header,width:"60%",visible:t.dialogVisible,"before-close":t.cancle},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("div",{staticClass:"dialog-content"},[a("div",{staticClass:"list"},[a("span",[t._v("驻场人员姓名：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入驻场人员姓名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}})],1),a("div",{staticClass:"list"},[a("span",[t._v("驻场人员手机号：")]),a("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入驻场人员姓名"},model:{value:t.mobile,callback:function(e){t.mobile=e},expression:"mobile"}})],1),a("div",{staticClass:"list"},[a("span",[t._v("地区：")]),a("user-address")],1)]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:t.cancle}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.confirm}},[t._v("确 定")])],1)])},_=[],k={name:"addUserfiled",props:["header"],data:function(){return{dialogVisible:!0,userName:"",mobile:""}},mounted:function(){},components:{UserAddress:r["a"]},methods:{cancle:function(){this.$emit("dialogState",{state:!1})},confirm:function(){this.$emit("dialogState",{state:!1})}}},L=k,N=(a("e6a1"),Object(u["a"])(L,C,_,!1,null,"d3e5f1aa",null));N.options.__file="addUserfiled.vue";var S=N.exports,x={name:"userFiled",data:function(){return{title:"",data:"",state:!1}},methods:{dialogState:function(t){t=t||{},this.state=t.state,this.title=t.title,this.data=t.data}},components:{UserfiledOptions:f,UserfiledTable:g,AddUserfiled:S}},w=x,V=(a("3e91"),Object(u["a"])(w,i,n,!1,null,"e0b1ea36",null));V.options.__file="userFiled.vue";e["default"]=V.exports},"8c78":function(t,e,a){},"9cb0":function(t,e,a){"use strict";var i=a("0962"),n=a.n(i);n.a},d2b9:function(t,e,a){},e6a1:function(t,e,a){"use strict";var i=a("8c78"),n=a.n(i);n.a},fadf:function(t,e,a){}}]);
//# sourceMappingURL=chunk-5d5df702.263303c2.js.map