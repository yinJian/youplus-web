(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2060868a"],{"30ba":function(e,t,n){"use strict";n("b3f9");var i=n("853b"),a=n("b7c3"),s=n("2d57"),c="toString",o=/./[c],l=function(e){n("f6d5")(RegExp.prototype,c,e,!0)};n("7372")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?l(function(){var e=i(this);return"/".concat(e.source,"/","flags"in e?e.flags:!s&&e instanceof RegExp?a.call(e):void 0)}):o.name!=c&&l(function(){return o.call(this)})},"3dfb":function(e,t,n){var i=n("26dc")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[i]=!1,!"/./"[e](t)}catch(a){}}return!0}},"3ff3":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"role-new"},[n("div",{staticClass:"list"},[n("span",[e._v("角色姓名：")]),n("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入角色姓名"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),n("div",{staticClass:"list manage"},[n("span",[e._v("权限管理：")]),n("div",{staticClass:"right"},[n("div",{staticClass:"title"},[e._v("企业管理")]),n("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.companyMange,function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),n("div",{staticClass:"title"},[e._v("医疗网络")]),n("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.hosNetworkList,function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),n("div",{staticClass:"title"},[e._v("用户管理")]),n("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.userManageList,function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),n("div",{staticClass:"title"},[e._v("数据字典")]),n("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.wordBookList,function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1),n("div",{staticClass:"title"},[e._v("系统管理")]),n("el-checkbox-group",{model:{value:e.companyCheck,callback:function(t){e.companyCheck=t},expression:"companyCheck"}},e._l(e.systemList,function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])}),1)],1)]),n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"list"},[n("span",[e._v("允许删除：")]),n("el-radio-group",{model:{value:e.delMsg,callback:function(t){e.delMsg=t},expression:"delMsg"}},[n("el-radio",{attrs:{label:3}},[e._v("是")]),n("el-radio",{attrs:{label:6}},[e._v("否")])],1)],1),n("div",{staticClass:"list"},[n("span",[e._v("角色状态：")]),n("el-radio-group",{model:{value:e.state,callback:function(t){e.state=t},expression:"state"}},[n("el-radio",{attrs:{label:"0"}},[e._v("启用")]),n("el-radio",{attrs:{label:"-1"}},[e._v("停用")])],1)],1),n("div",{staticClass:"list submit"},[n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")]),n("el-button",{on:{click:e.cancle}},[e._v("取消")])],1)])},a=[],s=(n("c4d7"),n("e64a"),n("7847"),n("30ba"),n("58e0"),n("d48e")),c=n("c4f6"),o=["name","state","menuIds"],l={name:"roleNew",data:function(){return{name:"",delMsg:"",state:"0",companyCheck:[],companyMange:["企业列表","信息复核"],hosNetworkList:["医生管理","体检管理","中医管理","齿科管理"],userManageList:["用户列表","驻场人员"],wordBookList:["地区管理","科室管理","医院等级","医生职称"],systemList:["用户管理","角色管理"],check:s["a"].methods.check,checkTip:s["a"].tips.checkTip}},mounted:function(){this.editInit()},methods:{editInit:function(){var e=this,t=this.$route.query,n=t.type,i=t.id;i&&(this.loading=!0,this.type=n,this.id=i,this.api.get("/role/".concat(i)).then(function(t){e.dataInit(t.data),e.loading=!1}).catch(function(t){console.log(t),e.loading=!1,e.$message(t.data.message)}))},dataInit:function(e){var t=this;e=e||{};var n=e,i=n.menus,a=n.role,s=a.name,c=a.state;if(this.name=s,this.state=c.toString(),i&&!this.lodash.isArray(i)){var o=JSON.parse(i),l=[];this.lodash.forEach(o.childs,function(e){t.lodash.forEach(e.childs,function(e){l.push(e.entity.alias)})}),this.companyCheck=l}},submit:function(){var e=this,t=JSON.parse(JSON.stringify(c["a"])),n=[].concat(this.companyCheck);if(n.length<1)return this.$message("请补全信息后提交");t=this.lodash.filter(t.childs,function(t){return t.children=e.lodash.filter(t.childs,function(t){return e.lodash.includes(n,t.entity.alias)}),t.children.length>0});var i={name:this.name,state:this.state,menuIds:[JSON.stringify(t)]};this.check(i,o).then(function(){e.addUser(i)},function(){e.$message(e.checkTip)}).catch(function(t){console.log(t),e.$message(t.data.message)})},editUser:function(e){var t=this;e.id=this.id,this.loading=!0,this.api.put("/role",e).then(function(e){t.loading=!1,t.$router.go(-1)}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.data.message)})},addUser:function(e){var t=this;if("edit"===this.$route.query.type)return this.editUser(e);this.loading=!0,this.api.post("/role",e).then(function(e){t.$router.go(-1),t.loading=!1}).catch(function(e){console.log(e,"2134"),t.loading=!1,t.$message(e.data.message)})},cancle:function(){this.$router.go(-1)}}},r=l,d=(n("f153"),n("048f")),u=Object(d["a"])(r,i,a,!1,null,"477bf302",null);u.options.__file="roleNew.vue";t["default"]=u.exports},"5c02":function(e,t,n){},"6c5a":function(e,t,n){var i=n("1068"),a=n("85eb"),s=n("26dc")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[s])?!!t:"RegExp"==a(e))}},b3f9:function(e,t,n){n("2d57")&&"g"!=/./g.flags&&n("c810").f(RegExp.prototype,"flags",{configurable:!0,get:n("b7c3")})},c49e:function(e,t,n){var i=n("6c5a"),a=n("da87");e.exports=function(e,t,n){if(i(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},c4d7:function(e,t,n){"use strict";var i=n("9736"),a=n("0a37")(!0);i(i.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n("5713")("includes")},c4f6:function(e,t,n){"use strict";var i={entity:null,childs:[{entity:{id:1,parentMenuId:0,name:"systemManage",icon:"el-icon-menu\r\n",alias:"企业管理",state:"ENABLE",sort:0,value:null,type:"NONE",discription:"用于企业管理的菜单",createUserId:1},childs:[{entity:{id:11,parentMenuId:1,name:"comList",icon:"el-icon-document",alias:"企业列表",state:"ENABLE",sort:0,value:"/comManage/comList",type:"NONE",discription:"用于权限管理的菜单",createUserId:1},childs:null},{entity:{id:12,parentMenuId:1,name:"infoRecheck",icon:"el-icon-edit",alias:"信息复核",state:"ENABLE",sort:1,value:"/comManage/infoRecheck",type:"LINK",discription:"用于角色管理的菜单",createUserId:1},childs:null}]},{entity:{id:2,parentMenuId:0,name:"hosNetwork",icon:"el-icon-news",alias:"医疗网络",state:"ENABLE",sort:1,value:null,type:"NONE",discription:"用于医疗网络的菜单",createUserId:1},childs:[{entity:{id:21,parentMenuId:1,name:"hospitalManage",icon:"el-icon-phone-outline\r\n",alias:"医院管理",state:"ENABLE",sort:0,value:"/hosNetwork/hospital",type:"NONE",discription:"用于医院管理的菜单",createUserId:1},childs:null},{entity:{id:22,parentMenuId:2,name:"doctorManage",icon:"el-icon-sold-out\r\n",alias:"医生管理",state:"ENABLE",sort:1,value:"/hosNetwork/doctor",type:"LINK",discription:"用于邮箱管理的菜单",createUserId:1},childs:null},{entity:{id:23,parentMenuId:2,name:"phyExamination",icon:"el-icon-service\r\n",alias:"体检管理",state:"ENABLE",sort:2,value:"/hosNetwork/phyExamination",type:"LINK",discription:"用于体检管理的菜单",createUserId:1},childs:null},{entity:{id:24,parentMenuId:2,name:"chMedicine",icon:"el-icon-circle-plus-outline",alias:"中医管理",state:"ENABLE",sort:3,value:"/hosNetwork/chMedicine",type:"LINK",discription:"用于中医管理的菜单",createUserId:1},childs:null},{entity:{id:25,parentMenuId:2,name:"dentistry",icon:"el-icon-caret-top",alias:"齿科管理",state:"ENABLE",sort:4,value:"/hosNetwork/dentistry",type:"LINK",discription:"用于齿科管理的菜单",createUserId:1},childs:null}]},{entity:{id:3,parentMenuId:0,name:"contentManage",icon:"el-icon-view",alias:"用户管理",state:"ENABLE",sort:0,value:null,type:"NONE",discription:"用于用户管理的菜单",createUserId:1},childs:[{entity:{id:31,parentMenuId:3,name:"userListManage",icon:"el-icon-more-outline",alias:"用户列表",state:"ENABLE",sort:0,value:"/userManage/userList",type:"LINK",discription:"用于用户列表的菜单",createUserId:1},childs:null},{entity:{id:32,parentMenuId:3,name:"userFiledManage",icon:"el-icon-sort-down",alias:"驻场人员",state:"ENABLE",sort:1,value:"/userManage/userFiled",type:"LINK",discription:"用于驻场人员的菜单",createUserId:1},childs:null}]},{entity:{id:4,parentMenuId:0,name:"dataManage",icon:"el-icon-rank",alias:"数据字典",state:"ENABLE",sort:3,value:null,type:"NONE",discription:"用于数据字典的菜单",createUserId:1},childs:[{entity:{id:41,parentMenuId:4,name:"regionManage",icon:"el-icon-location-outline",alias:"地区管理",state:"ENABLE",sort:0,value:"/wordBook/region",type:"LINK",discription:"用于地区管理的菜单",createUserId:1},childs:null},{entity:{id:42,parentMenuId:4,name:"hosLevelManage",icon:"el-icon-star-on",alias:"医院等级",state:"ENABLE",sort:1,value:"/wordBook/hosLevel",type:"LINK",discription:"用于医院等级的菜单",createUserId:1},childs:null},{entity:{id:43,parentMenuId:4,name:"doctorTitleManage",icon:"el-icon-info",alias:"医生职称",state:"ENABLE",sort:2,value:"/wordBook/doctorTitle",type:"LINK",discription:"用于医生职称的菜单",createUserId:1},childs:null},{entity:{id:44,parentMenuId:4,name:"department",icon:"el-icon-time",alias:"科室管理",state:"ENABLE",sort:3,value:"/wordBook/department",type:"LINK",discription:"用于科室管理的菜单",createUserId:1},childs:null},{entity:{id:45,parentMenuId:4,name:"skill",icon:"el-icon-refresh",alias:"人员技能",state:"ENABLE",sort:3,value:"/wordBook/skillTag",type:"LINK",discription:"用于人员技能的菜单",createUserId:1},childs:null}]},{entity:{id:5,parentMenuId:0,name:"sysManage",icon:"el-icon-bell",alias:"系统管理",state:"ENABLE",sort:4,value:null,type:"NONE",discription:"用于系统管理的菜单",createUserId:1},childs:[{entity:{id:51,parentMenuId:5,name:"userManage",icon:"el-icon-printer",alias:"用户管理",state:"ENABLE",sort:0,value:"/systemManage/user",type:"LINK",discription:"用于用户管理的菜单",createUserId:1},childs:null},{entity:{id:52,parentMenuId:5,name:"articleManage",icon:"el-icon-edit-outline",alias:"角色管理",state:"ENABLE",sort:1,value:"/systemManage/role",type:"LINK",discription:"用于角色管理的菜单",createUserId:1},childs:null}]}]};t["a"]=i},d48e:function(e,t,n){"use strict";t["a"]={methods:{check:function(e,t){var n=this;return new Promise(function(i,a){n.lodash.some(t,function(t){e[t]||n.lodash.isBoolean(e[t])||a()}),i()})}},tips:{checkTip:"请补全信息后提交"}}},e64a:function(e,t,n){"use strict";var i=n("9736"),a=n("c49e"),s="includes";i(i.P+i.F*n("3dfb")(s),"String",{includes:function(e){return!!~a(this,e,s).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},f153:function(e,t,n){"use strict";var i=n("5c02"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-2060868a.9870a8cb.js.map