(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5d7bfea"],{"0fb9":function(t,e,n){},bb99:function(t,e,n){"use strict";var a=n("0fb9"),i=n.n(a);i.a},ce92:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[n("div",{staticClass:"box"},[n("h3",[t._v(t._s(t.activeheader))]),n("div",{staticClass:"input-box"},[n("span"),n("label",{staticClass:"label require",attrs:{for:""}},[t._v("机构名称：")]),n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),n("div",{staticClass:"input-box"},[n("span"),n("label",{staticClass:"label require contact",attrs:{for:""}},[t._v("联系人：")]),n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.contactPerson,callback:function(e){t.contactPerson=e},expression:"contactPerson"}})],1),n("div",{staticClass:"input-box"},[n("span"),n("label",{staticClass:"label require",attrs:{for:""}},[t._v("联系电话：")]),n("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),n("div",{staticClass:"input-box box-last"},[n("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),n("el-button",{on:{click:t.cancle}},[t._v("取消")])],1)])])},i=[],s=(n("58e0"),n("d48e")),c=["新增体检机构","新增中医机构","新增齿科机构"],o=["修改体检机构","修改中医机构","修改齿科机构"],r=["name","contactPerson","phone"],l=["/physical","/chinaMed","/dentistry"],h={name:"addOrg",data:function(){return{name:"",contactPerson:"",phone:"",loading:!1,check:s["a"].methods.check,checkTip:s["a"].tips.checkTip,activeheader:c[0],code:"0",id:""}},mounted:function(){this.editInit()},methods:{editInit:function(){var t=this;if(this.$route.query){var e=this.$route.query,n=e.type,a=e.code,i=e.id;this.code=a,this.id=i;var s="edit"===n?o:c;if(this.activeheader=s[this.code],i){this.loading=!0;var r=l[this.code];this.api.get("".concat(r,"/").concat(i)).then(function(e){t.dataInit(e.data),t.loading=!1}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.data.message)})}}},dataInit:function(t){t=t||{};var e=t,n=e.id,a=e.name,i=e.phone,s=e.contactPerson;this.id=n,this.name=a,this.phone=i,this.contactPerson=s},submit:function(){var t=this,e={name:this.name,contactPerson:this.contactPerson,phone:this.phone};this.check(e,r).then(function(){t.addUser(e)},function(){t.$message(t.checkTip)}).catch(function(e){t.$message(e)})},editUser:function(t){var e=this;t.id=this.id,this.api.put(l[this.code],t,"form").then(function(t){e.$router.go(-1)}).catch(function(t){console.log(t),e.$message(t.data.message)})},addUser:function(t){var e=this;if("edit"===this.$route.query.type)return this.editUser(t);this.api.post(l[this.code],t,"form").then(function(t){e.$router.go(-1)}).catch(function(t){e.$message(t.data.message)})},cancle:function(){this.$router.go(-1)}}},d=h,u=(n("bb99"),n("048f")),p=Object(u["a"])(d,a,i,!1,null,"cea46994",null);p.options.__file="addOrg.vue";e["default"]=p.exports},d48e:function(t,e,n){"use strict";e["a"]={methods:{check:function(t,e){var n=this;return new Promise(function(a,i){n.lodash.some(e,function(e){t[e]||n.lodash.isBoolean(t[e])||i()}),a()})}},tips:{checkTip:"请补全信息后提交"}}}}]);
//# sourceMappingURL=chunk-c5d7bfea.1578ce79.js.map