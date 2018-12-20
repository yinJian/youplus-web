(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2023d38d"],{"0c12":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("div",{staticClass:"box"},[a("h3",[t._v(t._s(t.activeheader))]),a("div",{staticClass:"input-box"},[a("span"),a("label",{staticClass:"label require",attrs:{for:""}},[t._v("医生名称：")]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label require"},[t._v("所在地区:")]),a("user-address",{ref:"addDocAddress",attrs:{defaultValue:t.defaultAddress,seletStyle:"width:216px"},on:{countryChange:t.countryChange}})],1),a("div",{staticClass:"input-box"},[a("label",{class:{label:!0,require:!0,disabled:t.state}},[t._v("所在医院:")]),a("el-select",{attrs:{placeholder:"请选择",disabled:t.state},model:{value:t.hospitalId,callback:function(e){t.hospitalId=e},expression:"hospitalId"}},t._l(t.hosName,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),a("span",{staticClass:"hosTip"},[t._v(t._s(t.hosTip))])],1),a("div",{staticClass:"input-box"},[a("span"),a("label",{staticClass:"label",attrs:{for:""}},[t._v("所在科室：")]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.dept,callback:function(e){t.dept=e},expression:"dept"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label require"},[t._v("标准科室:")]),a("hos-offices",{ref:"addDocOffices",attrs:{defaultValue:t.defaultOffices,seletStyle:"width:216px"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label require"},[t._v("医生职称:")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}},t._l(t.doctorTitleList,function(t){return a("el-option",{key:t.id,attrs:{label:t.dValue,value:t.dKey}})}))],1),a("div",{staticClass:"input-box"},[a("span"),a("label",{staticClass:"label require",attrs:{for:""}},[t._v("医生电话：")]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label",attrs:{for:""}},[t._v("上传照片")]),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label"},[t._v("医生简介：")]),a("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:t.info,callback:function(e){t.info=e},expression:"info"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label"},[t._v("医生擅长：")]),a("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:t.skill,callback:function(e){t.skill=e},expression:"skill"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label"},[t._v("备注：")]),a("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1),a("div",{staticClass:"input-box box-last"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),a("el-button",{on:{click:t.cancle}},[t._v("取消")])],1)])])},s=[],n=(a("7f7f"),a("3ebc")),o=a("d48e"),l=a("65b8"),r=a("de99"),c=a("b383"),d=a.n(c),u=["新增医生","修改医生信息"],p=["请先选择地区","该地区没有对应医院信息，请先新建医院"],f=["name","hospitalId","dept1","dept2","level","province","city","country","phone"],h={name:"addDoc",data:function(){return{name:"",dept:"",hospitalId:"",level:"",imageUrl:"",phone:"",info:"",skill:"",remark:"",loading:!1,id:"",hosTip:p[0],state:!0,defaultAddress:null,defaultOffices:null,activeheader:u[0],check:o["a"].methods.check,checkTip:o["a"].tips.checkTip,doctorTitleList:n["b"],hosName:[]}},components:{UserAddress:l["a"],HosOffices:r["a"]},mounted:function(){this.editInit()},methods:{editInit:function(){var t=this,e=this.$route.query,a=e.type,i=e.id;"edit"===a&&(this.activeheader=u[1]),i&&(this.loading=!0,this.api.get("/doctor/".concat(i)).then(function(e){t.dataInit(e.data),setTimeout(function(){t.loading=!1},20)}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.message)}))},dataInit:function(t){t=t||{};var e=t,a=e.name,i=e.hospitalName,s=e.dept,n=e.dept1,o=e.dept2,l=e.headIcon,r=e.hospitalId,c=e.level,d=e.phone,u=e.skill,p=e.remark,f=e.info,h=e.id,v=e.province,m=e.city,y=e.country;this.name=a,this.hospitalName=i,this.dept=s,this.hospitalId=r,this.level=c,this.phone=d,this.skill=u,this.remark=p,this.info=f,this.id=h,this.imageUrl=l,this.hospitalId&&(this.hosTip="",this.state=!1),this.defaultAddress={province:v,city:m,country:y},this.defaultOffices={dept1:n,dept2:o}},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},beforeAvatarUpload:function(t){var e="image/jpeg"===t.type,a=t.size/1024/1024<2;return e||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),e&&a},countryChange:function(t){var e=this,a=d.a.stringify(t);this.api.get("/hospital?".concat(a)).then(function(t){if(e.hosName=t.data.list,e.hosName.length<1)return e.state=!0,e.hosTip=p[1];e.state=!1,e.hosTip=""}).catch(function(t){console.log(t),e.$message(t.message)})},submit:function(){var t=this,e=this.$refs.addDocAddress.getData(),a=this.$refs.addDocOffices.getData(),i={name:this.name,dept:this.dept,hospitalId:this.hospitalId,level:this.level,phone:this.phone,info:this.info,remark:this.remark,skill:this.skill},s=this.lodash.assign({},i,e,a);this.check(s,f).then(function(){t.addUser(s)},function(){t.$message(t.checkTip)}).catch(function(e){console.log(e),t.$message(e.data.message)})},editUser:function(t){var e=this;t.id=this.id,this.api.put("/doctor",t,"form").then(function(t){t.data.code===e.ok&&e.$router.go(-1)}).catch(function(t){console.log(t),e.$message(t.data.message)})},addUser:function(t){var e=this;if("edit"===this.$route.query.type)return this.editUser(t);this.api.post("/doctor",t,"form").then(function(t){e.$router.go(-1)}).catch(function(t){console.log(t),e.$message(t.data.message)})},cancle:function(){this.$router.go(-1)}}},v=h,m=(a("a9e5"),a("2877")),y=Object(m["a"])(v,i,s,!1,null,"f89a122e",null);y.options.__file="addDoc.vue";e["default"]=y.exports},"3ebc":function(t,e,a){"use strict";a.d(e,"a",function(){return d}),a.d(e,"b",function(){return u}),a.d(e,"g",function(){return p}),a.d(e,"j",function(){return f}),a.d(e,"e",function(){return l}),a.d(e,"c",function(){return r}),a.d(e,"d",function(){return c}),a.d(e,"l",function(){return g}),a.d(e,"m",function(){return h}),a.d(e,"n",function(){return v}),a.d(e,"h",function(){return k}),a.d(e,"f",function(){return y}),a.d(e,"k",function(){return b}),a.d(e,"i",function(){return m});a("cadf"),a("551c"),a("097d");var i=a("2ef0"),s=a.n(i),n=a("7c15");function o(t){return s.a.sortBy(t,function(t){return t.sortId})}function l(t){return n["a"].get("/role").then(function(e){return t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function r(t){return n["a"].get("/company?page=0&size=1000").then(function(e){return t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function c(t,e){if(t)return n["a"].get("/goods?companyId=".concat(t,"&page=0&size=1000")).then(function(t){return e&&e(t.data),t.data}).catch(function(t){console.log(t)}),[]}var d=o(JSON.parse(sessionStorage.departmentList)),u=o(JSON.parse(sessionStorage.doctorTitleList)),p=o(JSON.parse(sessionStorage.hosLevelList)),f=o(JSON.parse(sessionStorage.propertyList)),h=(o(JSON.parse(sessionStorage.skillTagList)),o(JSON.parse(sessionStorage.subDepartmentList))),v=o(JSON.parse(sessionStorage.typeList)),m=o(JSON.parse(sessionStorage.paperTypeList)),y=o(JSON.parse(sessionStorage.hopType)),b=[{id:1,dKey:1,dValue:"男"},{id:0,dKey:0,dValue:"女"}],g=[{id:0,dKey:0,dValue:"启用"},{id:-1,dKey:-1,dValue:"停用"}],k=[{id:"1234560",dKey:!0,dValue:"是"},{id:"1234567",dKey:!1,dValue:"否"}]},"52ba":function(t,e,a){"use strict";var i=a("fadf"),s=a.n(i);s.a},"65b8":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address-group"},[a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return a("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return a("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})}))],1)},s=[],n=a("7622"),o=a("dd36"),l=!0,r={name:"userAddress",props:["seletStyle","defaultValue"],data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{handleProvince:function(){this.provinceList=n["a"]},handleData:function(t,e,a){var i=this;t&&Object(o["a"])("area",{parentId:t}).then(function(t){if(t.data.code=i.ok)return a&&a(t.data.data),"province"===e?i.cityList=t.data.data:i.countryList=t.data.data;i.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),i.$message("系统繁忙，请稍后再试!")})},getData:function(){var t=this,e=this.provinceList.filter(function(e){return t.province===e.id}),a=this.cityList.filter(function(e){return t.city===e.id}),i=this.countryList.filter(function(e){return t.country===e.id}),s=e.length>0?e[0].areaCode:"",n=a.length>0?a[0].areaCode:"",o=i.length>0?i[0].areaCode:"",l={province:s,city:n,country:o};return l}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.province,i=e.city,s=e.country;if(l=!1,!a)return l=!0;var n=this.lodash.filter(this.provinceList,function(t){return t.areaCode==a});this.province=n[0].id,Object(o["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!i)return l=!0;var a=t.lodash.filter(t.cityList,function(t){return t.areaCode==i});t.city=a[0].id,Object(o["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!s)return l=!0;var a=t.lodash.filter(t.countryList,function(t){return t.areaCode==s});t.country=a[0].id,l=!0}})}})}},province:function(t,e){t&&l&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"))},city:function(t,e){t&&l&&(this.countryList=[],this.country="",this.handleData(t,"city"))},country:function(t,e){this.$emit("countryChange",this.getData())}}},c=r,d=(a("52ba"),a("2877")),u=Object(d["a"])(c,i,s,!1,null,"29084cf2",null);u.options.__file="address.vue";e["a"]=u.exports},7622:function(t,e,a){"use strict";a.d(e,"a",function(){return i});var i=JSON.parse(sessionStorage.addressProvince)},"8f72":function(t,e,a){},a9e5:function(t,e,a){"use strict";var i=a("ab96"),s=a.n(i);s.a},ab96:function(t,e,a){},b8a5:function(t,e,a){"use strict";var i=a("8f72"),s=a.n(i);s.a},d48e:function(t,e,a){"use strict";e["a"]={methods:{check:function(t,e){var a=this;return new Promise(function(i,s){a.lodash.some(e,function(e){t[e]||a.lodash.isBoolean(t[e])||s()}),i()})}},tips:{checkTip:"请补全信息后提交"}}},de99:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hos-offices"},[a("el-select",{staticClass:"offices-input",style:t.seletStyle,attrs:{placeholder:"选择一级科室"},model:{value:t.dept1,callback:function(e){t.dept1=e},expression:"dept1"}},t._l(t.departmentList,function(t){return a("el-option",{key:t.id,attrs:{label:t.dValue,value:t.dKey}})})),a("el-select",{staticClass:"offices-input",style:t.seletStyle,attrs:{placeholder:"选择二级科室"},model:{value:t.dept2,callback:function(e){t.dept2=e},expression:"dept2"}},t._l(t.subDepart,function(t){return a("el-option",{key:t.id,attrs:{label:t.dValue,value:t.dKey}})}))],1)},s=[],n=a("3ebc"),o=(a("7622"),a("dd36"),!0),l={name:"hosOffices",props:["seletStyle","defaultValue"],data:function(){return{departmentList:n["a"],subDepart:[],dept1:"",dept2:""}},methods:{handleData:function(t){t&&(this.subDepart=this.lodash.filter(n["m"],function(e){return e.parentKey===t}))},getData:function(){var t={dept1:this.dept1,dept2:this.dept2};return t}},watch:{defaultValue:function(){if(this.defaultValue){var t=this.defaultValue,e=t.dept1,a=t.dept2;if(o=!1,!e)return o=!0;if(this.handleData(e),this.dept1=e,!a)return o=!0;this.dept2=a,o=!0}},dept1:function(t,e){t&&o&&(this.subDepart=[],this.dept2="",this.handleData(t))}}},r=l,c=(a("b8a5"),a("2877")),d=Object(c["a"])(r,i,s,!1,null,"28701845",null);d.options.__file="hosOffices.vue";e["a"]=d.exports},fadf:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2023d38d.050b03de.js.map