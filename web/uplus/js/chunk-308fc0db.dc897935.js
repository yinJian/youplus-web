(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-308fc0db"],{"0565":function(e,t,n){},"16f7":function(e,t,n){"use strict";var a=n("dea8"),i=n.n(a);i.a},2426:function(e,t,n){},"45cb":function(e,t,n){"use strict";var a=n("2426"),i=n.n(a);i.a},"4fb0":function(e,t,n){},"6ed9":function(e,t,n){"use strict";var a=n("4fb0"),i=n.n(a);i.a},"7f94":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("v-head",{attrs:{uname:e.username}}),n("el-aside",{attrs:{width:"220px"}},[n("v-sidebar")],1),n("el-main",[n("router-view")],1)],1)},i=[],s=(n("c839"),n("3f87"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-header",{staticClass:"header"},[a("div",{staticClass:"side"},[a("span",[a("img",{attrs:{src:n("9d64"),alt:""}})]),a("span",{staticStyle:{"padding-left":"10px"}},[e._v("U-Plus sys")])]),a("div",{staticClass:"side"},[a("span",{staticStyle:{"padding-right":"10px"}},[e._v(e._s(e.uname))]),a("el-button",{attrs:{plain:""},on:{click:function(t){e.exit()}}},[e._v("退出")])],1)])}),r=[],l={data:function(){return{name:"default"}},props:{uname:{type:String,default:"无"}},methods:{exit:function(){sessionStorage.clear(),this.$router.push("/login")}}},o=l,c=(n("16f7"),n("048f")),d=Object(c["a"])(o,s,r,!1,null,"5f9c2a74",null);d.options.__file="header.vue";var u=d.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"sidebar",staticStyle:{left:"0px"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":this.$router.path,"background-color":"#F0F6F6","text-color":"#3C3F41","active-text-color":"black",collapse:e.isCollapse,router:""},on:{select:e.menuSelected,open:e.handleOpen,close:e.handleClose}},[n("nav-menu",{attrs:{navMenus:e.leftMenus.childs}})],1)],1)},h=[],m=[{label:"企业管理",url:"/comManage",children:[{label:"企业列表",url:"/comManage/comList",id:"11"},{label:"信息复核",url:"/comManage/infoRecheck",id:"12"}]},{label:"医疗网络",ul:"/hosNetwork",children:[{label:"医院管理",url:"/hosNetwork/hospital",id:"21"},{label:"医生管理",url:"/hosNetwork/doctor",id:"22"},{label:"体检管理",url:"/hosNetwork/phyExamination",id:"23"},{label:"中医管理",url:"/hosNetwork/chMedicine",id:"24"},{label:"齿科管理",url:"/hosNetwork/dentistry",id:"25"}]},{label:"用户管理",ul:"/userManage",children:[{label:"用户列表",url:"/userManage/userList",id:"31"},{label:"驻场人员",url:"/userManage/userFiled",id:"32"}]},{label:"数据字典",children:[{label:"地区管理",url:"/wordBook/region",id:"41"},{label:"科室管理",url:"/wordBook/department",id:"42"},{label:"医院等级",url:"/wordBook/hosLevel",id:"43"},{label:"医生职称",url:"/wordBook/doctorTitle",id:"44"}]},{label:"系统管理",children:[{label:"用户管理",url:"/systemManage/user",id:"51"},{label:"角色管理",url:"/systemManage/role",id:"52"}]}],f=m,y=n("c4f6"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navMenu"},e._l(e.navMenus,function(t,a){return n("label",{key:a},[null==t.childs&&t.entity&&"ENABLE"===t.entity.state?n("el-menu-item",{key:t.entity.id,attrs:{data:t,index:t.entity.name,route:t.entity.value}},[n("i",{class:t.entity.icon}),n("span",{staticClass:"item_title",attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.entity.alias))])]):e._e(),t.childs&&t.entity&&"ENABLE"===t.entity.state?n("el-submenu",{key:t.entity.id,attrs:{data:t,index:t.entity.name}},[n("template",{slot:"title"},[n("i",{class:t.entity.icon}),n("span",{staticClass:"item_title"},[e._v(" "+e._s(t.entity.alias))])]),n("NavMenu",{attrs:{navMenus:t.childs}})],2):e._e()],1)}),0)},I=[],g={name:"NavMenu",props:["navMenus"],data:function(){return{}},mounted:function(){},methods:{}},N=g,M=(n("d67b"),n("45cb"),Object(c["a"])(N,v,I,!1,null,"0a7dc948",null));M.options.__file="navMenu.vue";var E=M.exports,L={name:"sidebar",components:{navMenu:E},data:function(){return{data:f,leftMenus:y["a"],defaultProps:{children:"children",label:"label"},isCollapse:!1}},created:function(){this.init()},mounted:function(){},methods:{handleNodeClick:function(e){this.$router.push({path:e.url})},handleOpen:function(){},handleClose:function(){},menuSelected:function(e){},init:function(){this.axios.get("/menu").then(function(e){console.log(e)}).catch(function(e){console.log(e)})}}},b=L,k=(n("bf87"),Object(c["a"])(b,p,h,!1,null,null,null));k.options.__file="sidebar.vue";var w=k.exports,B=(n("b5aa"),n("4a1a")),_=n("a27e");function A(e){return U.apply(this,arguments)}function U(){return U=Object(B["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e,this)})),U.apply(this,arguments)}function x(e){return new Promise(function(t,n){_["a"].get("/dict?groupId="+e).then(function(e){t(e)}).catch(function(e){n(e)})})}var O=A,C=n("dd36"),K=[{name:"departmentList",groupId:1},{name:"subDepartmentList",groupId:2},{name:"hosLevelList",groupId:3},{name:"doctorTitleList",groupId:4},{name:"skillTagList",groupId:5},{name:"propertyList",groupId:6},{name:"typeList",groupId:7},{name:"paperTypeList",groupId:9},{name:"hopType",groupId:10}],S=K,$={components:{vHead:u,vSidebar:w},data:function(){return{username:""}},created:function(){this.username=localStorage.username,this.sessionList(),this.addressList()},mounted:function(){},methods:{sessionList:function(){O("").then(function(e){var t=e.data.data;S.forEach(function(e,n){var a=t.filter(function(t){return t.groupId==e.groupId});sessionStorage.setItem(e.name,JSON.stringify(a))})})},addressList:function(){var e=this;Object(C["a"])("area",{parentId:"-1"}).then(function(t){(t.data.code="200")?sessionStorage.setItem("addressProvince",JSON.stringify(t.data.data)):e.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),e.$message("系统繁忙，请稍后再试!")})}}},T=$,F=(n("6ed9"),Object(c["a"])(T,a,i,!1,null,null,null));F.options.__file="main.vue";t["default"]=F.exports},"9d64":function(e,t,n){e.exports=n.p+"img/logo.f184566b.png"},bf87:function(e,t,n){"use strict";var a=n("0565"),i=n.n(a);i.a},c4f6:function(e,t,n){"use strict";var a={entity:null,childs:[{entity:{id:1,parentMenuId:0,name:"systemManage",icon:"el-icon-menu\r\n",alias:"企业管理",state:"ENABLE",sort:0,value:null,type:"NONE",discription:"用于企业管理的菜单",createUserId:1},childs:[{entity:{id:11,parentMenuId:1,name:"comList",icon:"el-icon-document",alias:"企业列表",state:"ENABLE",sort:0,value:"/comManage/comList",type:"NONE",discription:"用于权限管理的菜单",createUserId:1},childs:null},{entity:{id:12,parentMenuId:1,name:"infoRecheck",icon:"el-icon-edit",alias:"信息复核",state:"ENABLE",sort:1,value:"/comManage/infoRecheck",type:"LINK",discription:"用于角色管理的菜单",createUserId:1},childs:null}]},{entity:{id:2,parentMenuId:0,name:"hosNetwork",icon:"el-icon-news",alias:"医疗网络",state:"ENABLE",sort:1,value:null,type:"NONE",discription:"用于医疗网络的菜单",createUserId:1},childs:[{entity:{id:21,parentMenuId:1,name:"hospitalManage",icon:"el-icon-phone-outline\r\n",alias:"医院管理",state:"ENABLE",sort:0,value:"/hosNetwork/hospital",type:"NONE",discription:"用于医院管理的菜单",createUserId:1},childs:null},{entity:{id:22,parentMenuId:2,name:"doctorManage",icon:"el-icon-sold-out\r\n",alias:"医生管理",state:"ENABLE",sort:1,value:"/hosNetwork/doctor",type:"LINK",discription:"用于邮箱管理的菜单",createUserId:1},childs:null},{entity:{id:23,parentMenuId:2,name:"phyExamination",icon:"el-icon-service\r\n",alias:"体检管理",state:"ENABLE",sort:2,value:"/hosNetwork/phyExamination",type:"LINK",discription:"用于体检管理的菜单",createUserId:1},childs:null},{entity:{id:24,parentMenuId:2,name:"chMedicine",icon:"el-icon-circle-plus-outline",alias:"中医管理",state:"ENABLE",sort:3,value:"/hosNetwork/chMedicine",type:"LINK",discription:"用于中医管理的菜单",createUserId:1},childs:null},{entity:{id:25,parentMenuId:2,name:"dentistry",icon:"el-icon-caret-top",alias:"齿科管理",state:"ENABLE",sort:4,value:"/hosNetwork/dentistry",type:"LINK",discription:"用于齿科管理的菜单",createUserId:1},childs:null}]},{entity:{id:3,parentMenuId:0,name:"contentManage",icon:"el-icon-view",alias:"用户管理",state:"ENABLE",sort:0,value:null,type:"NONE",discription:"用于用户管理的菜单",createUserId:1},childs:[{entity:{id:31,parentMenuId:3,name:"userListManage",icon:"el-icon-more-outline",alias:"用户列表",state:"ENABLE",sort:0,value:"/userManage/userList",type:"LINK",discription:"用于用户列表的菜单",createUserId:1},childs:null},{entity:{id:32,parentMenuId:3,name:"userFiledManage",icon:"el-icon-sort-down",alias:"驻场人员",state:"ENABLE",sort:1,value:"/userManage/userFiled",type:"LINK",discription:"用于驻场人员的菜单",createUserId:1},childs:null}]},{entity:{id:4,parentMenuId:0,name:"dataManage",icon:"el-icon-rank",alias:"数据字典",state:"ENABLE",sort:3,value:null,type:"NONE",discription:"用于数据字典的菜单",createUserId:1},childs:[{entity:{id:41,parentMenuId:4,name:"regionManage",icon:"el-icon-location-outline",alias:"地区管理",state:"ENABLE",sort:0,value:"/wordBook/region",type:"LINK",discription:"用于地区管理的菜单",createUserId:1},childs:null},{entity:{id:42,parentMenuId:4,name:"hosLevelManage",icon:"el-icon-star-on",alias:"医院等级",state:"ENABLE",sort:1,value:"/wordBook/hosLevel",type:"LINK",discription:"用于医院等级的菜单",createUserId:1},childs:null},{entity:{id:43,parentMenuId:4,name:"doctorTitleManage",icon:"el-icon-info",alias:"医生职称",state:"ENABLE",sort:2,value:"/wordBook/doctorTitle",type:"LINK",discription:"用于医生职称的菜单",createUserId:1},childs:null},{entity:{id:44,parentMenuId:4,name:"department",icon:"el-icon-time",alias:"科室管理",state:"ENABLE",sort:3,value:"/wordBook/department",type:"LINK",discription:"用于科室管理的菜单",createUserId:1},childs:null},{entity:{id:45,parentMenuId:4,name:"skill",icon:"el-icon-refresh",alias:"人员技能",state:"ENABLE",sort:3,value:"/wordBook/skillTag",type:"LINK",discription:"用于人员技能的菜单",createUserId:1},childs:null}]},{entity:{id:5,parentMenuId:0,name:"sysManage",icon:"el-icon-bell",alias:"系统管理",state:"ENABLE",sort:4,value:null,type:"NONE",discription:"用于系统管理的菜单",createUserId:1},childs:[{entity:{id:51,parentMenuId:5,name:"userManage",icon:"el-icon-printer",alias:"用户管理",state:"ENABLE",sort:0,value:"/systemManage/user",type:"LINK",discription:"用于用户管理的菜单",createUserId:1},childs:null},{entity:{id:52,parentMenuId:5,name:"articleManage",icon:"el-icon-edit-outline",alias:"角色管理",state:"ENABLE",sort:1,value:"/systemManage/role",type:"LINK",discription:"用于角色管理的菜单",createUserId:1},childs:null}]}]};t["a"]=a},d67b:function(e,t,n){"use strict";var a=n("f1fa"),i=n.n(a);i.a},dea8:function(e,t,n){},f1fa:function(e,t,n){}}]);
//# sourceMappingURL=chunk-308fc0db.dc897935.js.map