(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17117f57"],{"0a49":function(e,t,r){var a=r("9b43"),i=r("626a"),n=r("4bf8"),s=r("9def"),o=r("cd1c");e.exports=function(e,t){var r=1==e,l=2==e,c=3==e,u=4==e,d=6==e,p=5==e||d,f=t||o;return function(t,o,h){for(var m,g,v=n(t),y=i(v),b=a(o,h,3),k=s(y.length),F=0,x=r?f(t,k):l?f(t,0):void 0;k>F;F++)if((p||F in y)&&(m=y[F],g=b(m,F,v),e))if(r)x[F]=g;else if(g)switch(e){case 3:return!0;case 5:return m;case 6:return F;case 2:x.push(m)}else if(u)return!1;return d?-1:c||u?u:x}}},"0bfb":function(e,t,r){"use strict";var a=r("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},"0e02":function(e,t,r){"use strict";var a=r("154e"),i=r.n(a);i.a},1169:function(e,t,r){var a=r("2d95");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"154e":function(e,t,r){},"20d6":function(e,t,r){"use strict";var a=r("5ca1"),i=r("0a49")(6),n="findIndex",s=!0;n in[]&&Array(1)[n](function(){s=!1}),a(a.P+a.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(n)},2617:function(e,t,r){},"28a5":function(e,t,r){r("214f")("split",2,function(e,t,a){"use strict";var i=r("aae3"),n=a,s=[].push,o="split",l="length",c="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[l]||2!="ab"[o](/(?:ab)*/)[l]||4!="."[o](/(.?)(.?)/)[l]||"."[o](/()()/)[l]>1||""[o](/.?/)[l]){var u=void 0===/()??/.exec("")[1];a=function(e,t){var r=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(r,e,t);var a,o,d,p,f,h=[],m=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,v=void 0===t?4294967295:t>>>0,y=new RegExp(e.source,m+"g");u||(a=new RegExp("^"+y.source+"$(?!\\s)",m));while(o=y.exec(r)){if(d=o.index+o[0][l],d>g&&(h.push(r.slice(g,o.index)),!u&&o[l]>1&&o[0].replace(a,function(){for(f=1;f<arguments[l]-2;f++)void 0===arguments[f]&&(o[f]=void 0)}),o[l]>1&&o.index<r[l]&&s.apply(h,o.slice(1)),p=o[0][l],g=d,h[l]>=v))break;y[c]===o.index&&y[c]++}return g===r[l]?!p&&y.test("")||h.push(""):h.push(r.slice(g)),h[l]>v?h.slice(0,v):h}}else"0"[o](void 0,0)[l]&&(a=function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)});return[function(r,i){var n=e(this),s=void 0==r?void 0:r[t];return void 0!==s?s.call(r,n,i):a.call(String(n),r,i)},a]})},3846:function(e,t,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"3ebc":function(e,t,r){"use strict";r.d(t,"b",function(){return p}),r.d(t,"c",function(){return f}),r.d(t,"i",function(){return h}),r.d(t,"l",function(){return m}),r.d(t,"a",function(){return F}),r.d(t,"f",function(){return o}),r.d(t,"g",function(){return l}),r.d(t,"d",function(){return c}),r.d(t,"e",function(){return u}),r.d(t,"n",function(){return g}),r.d(t,"o",function(){return C}),r.d(t,"p",function(){return v}),r.d(t,"q",function(){return y}),r.d(t,"j",function(){return w}),r.d(t,"h",function(){return k}),r.d(t,"m",function(){return x}),r.d(t,"k",function(){return b});var a=r("2ef0"),i=r.n(a),n=r("7c15");function s(e){return i.a.sortBy(e,function(e){return e.sortId})}function o(e){return n["a"].get("/role").then(function(t){return e&&e(t.data),t.data}).catch(function(e){console.log(e)}),[]}function l(e){return n["a"].get("/user").then(function(t){var r={id:"",name:"全部",roleId:""};return t.data.unshift(r),e&&e(t.data),t.data}).catch(function(e){console.log(e)}),[]}function c(e){return n["a"].get("/company?page=0&size=1000").then(function(t){var r={id:"",name:"全部"};return t.data.list.unshift(r),e&&e(t.data),t.data}).catch(function(e){console.log(e)}),[]}function u(e,t){if(e)return n["a"].get("/goods?companyId=".concat(e,"&page=0&size=1000")).then(function(e){return t&&t(e.data),e.data}).catch(function(e){console.log(e)}),[]}function d(e){var t={dKey:"",id:"",dValue:"全部"};return e.unshift(t),e}var p=s(JSON.parse(sessionStorage.departmentList)),f=s(JSON.parse(sessionStorage.doctorTitleList)),h=s(JSON.parse(sessionStorage.hosLevelList)),m=s(JSON.parse(sessionStorage.propertyList)),g=s(JSON.parse(sessionStorage.skillTagList)),v=s(JSON.parse(sessionStorage.subDepartmentList)),y=s(JSON.parse(sessionStorage.typeList)),b=s(JSON.parse(sessionStorage.paperTypeList)),k=s(JSON.parse(sessionStorage.hopType)),F=JSON.parse(sessionStorage.addressProvince);y=d(y),f=d(f),h=d(h),m=d(m),g=d(g),b=d(b),k=d(k);var x=[{id:1,dKey:1,dValue:"男"},{id:0,dKey:0,dValue:"女"}],C=[{id:0,dKey:0,dValue:"启用"},{id:-1,dKey:-1,dValue:"停用"}],w=[{id:"1234560",dKey:!0,dValue:"是"},{id:"1234567",dKey:!1,dValue:"否"}]},"4a3b":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}]},[r("div",{staticClass:"box"},[r("h3",[e._v(e._s(e.activeheader))]),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-width":"150px"}},[r("el-form-item",{attrs:{prop:"areaOwner"}},[r("el-checkbox",{attrs:{label:"1"},model:{value:e.ruleForm.areaOwner,callback:function(t){e.$set(e.ruleForm,"areaOwner",t)},expression:"ruleForm.areaOwner"}},[e._v("地区负责人")])],1),r("el-form-item",{attrs:{label:"姓名",prop:"userName"}},[r("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入用户姓名"},model:{value:e.ruleForm.userName,callback:function(t){e.$set(e.ruleForm,"userName",t)},expression:"ruleForm.userName"}})],1),r("el-form-item",{attrs:{label:"性别",prop:"sex"}},[r("el-select",{staticClass:"input-width",attrs:{placeholder:"请选择用户性别"},model:{value:e.ruleForm.sex,callback:function(t){e.$set(e.ruleForm,"sex",t)},expression:"ruleForm.sex"}},e._l(e.sexList,function(e){return r("el-option",{key:e.dValue,attrs:{label:e.dValue,value:e.dKey}})}))],1),r("el-form-item",{attrs:{label:"地区",prop:"province"}},[r("user-address",{ref:"userfileAddress",attrs:{defaultValue:e.defaultAddress,seletStyle:"width:217px"},on:{countryChange:e.countryChange}})],1),r("el-form-item",{attrs:{label:"所属地区负责人",prop:"areaOwnerId"}},[r("el-select",{staticClass:"input-width",attrs:{placeholder:"请选择所属地区负责人"},model:{value:e.ruleForm.areaOwnerId,callback:function(t){e.$set(e.ruleForm,"areaOwnerId",t)},expression:"ruleForm.areaOwnerId"}},e._l(e.arealist,function(e){return r("el-option",{key:e.id,attrs:{label:e.userName,value:e.id}})}))],1),r("el-form-item",{attrs:{label:"所在医院",prop:"hospitalId"}},[r("el-select",{staticClass:"input-width",attrs:{filterable:"",placeholder:"请选择",disabled:e.hosArray.length<1},model:{value:e.ruleForm.hospitalId,callback:function(t){e.$set(e.ruleForm,"hospitalId",t)},expression:"ruleForm.hospitalId"}},e._l(e.hosArray,function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),e.hosArray.length<1?r("span",{staticClass:"red"},[e._v(e._s(e.hosTips))]):e._e(),e.ruleForm.hospitalId?r("el-button",{attrs:{type:"primary"},on:{click:e.hosAdd}},[e._v("添加")]):e._e(),r("span",{staticStyle:{color:"#f56c6c",position:"absolute",left:"-78px"}},[e._v("*")])],1),e.hosNameArray.length>0?r("el-form-item",e._l(e.hosNameArray,function(t){return r("el-tag",{key:t.id,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){e.delHos(t.id)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])})):e._e(),r("el-form-item",{attrs:{label:"所在科室",prop:"dept1"}},[r("el-select",{staticClass:"com-input",staticStyle:{width:"217px","margin-right":"20px"},attrs:{placeholder:"请选择一级科室"},on:{change:e.changeDep},model:{value:e.ruleForm.dept1,callback:function(t){e.$set(e.ruleForm,"dept1",t)},expression:"ruleForm.dept1"}},e._l(e.codeTypes,function(e){return r("el-option",{key:e.dKey,attrs:{label:e.dValue,value:e.dKey}})})),r("el-select",{staticClass:"com-input",staticStyle:{width:"217px"},attrs:{placeholder:"请选择二级科室"},model:{value:e.ruleForm.dept2,callback:function(t){e.$set(e.ruleForm,"dept2",t)},expression:"ruleForm.dept2"}},e._l(e.codeTypes2,function(e){return r("el-option",{key:e.dKey,attrs:{label:e.dValue,value:e.dKey}})}))],1),r("el-form-item",{attrs:{label:"护士职称",prop:"level"}},[r("el-select",{staticClass:"com-input",staticStyle:{width:"217px"},attrs:{placeholder:"请选择护士职称"},model:{value:e.ruleForm.level,callback:function(t){e.$set(e.ruleForm,"level",t)},expression:"ruleForm.level"}},e._l(e.levelList,function(e){return r("el-option",{key:e.dKey,attrs:{label:e.dValue,value:e.dKey}})}))],1),r("el-form-item",{attrs:{label:"护士证/资格证照",prop:"nurseNum"}},[r("el-input",{staticClass:"input-width2",attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.nurseNum,callback:function(t){e.$set(e.ruleForm,"nurseNum",t)},expression:"ruleForm.nurseNum"}})],1),r("el-form-item",{attrs:{label:"身份证号",prop:"paper"}},[r("el-input",{staticClass:"input-width2",attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.paper,callback:function(t){e.$set(e.ruleForm,"paper",t)},expression:"ruleForm.paper"}})],1),r("el-form-item",{attrs:{label:"手机号码",prop:"mobile"}},[r("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.mobile,callback:function(t){e.$set(e.ruleForm,"mobile",t)},expression:"ruleForm.mobile"}})],1),r("el-form-item",{attrs:{label:"银行名称",prop:"bank"}},[r("el-input",{staticClass:"input-width2",attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.bank,callback:function(t){e.$set(e.ruleForm,"bank",t)},expression:"ruleForm.bank"}})],1),r("el-form-item",{attrs:{label:"银行账号",prop:"bankCardNum"}},[r("el-input",{staticClass:"input-width2",attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.bankCardNum,callback:function(t){e.$set(e.ruleForm,"bankCardNum",t)},expression:"ruleForm.bankCardNum"}})],1),r("el-form-item",{attrs:{label:"收件地址",prop:"address"}},[r("el-input",{staticClass:"input-width2",attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.address,callback:function(t){e.$set(e.ruleForm,"address",t)},expression:"ruleForm.address"}})],1),r("el-form-item",{attrs:{label:"电子邮件",prop:"email"}},[r("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.email,callback:function(t){e.$set(e.ruleForm,"email",t)},expression:"ruleForm.email"}})],1),r("el-form-item",{attrs:{label:"身份证号正面"}},[e.paperPics2?e._e():r("div",{staticClass:"avatar-uploader"},[r("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[r("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),r("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:e.fileChange2}})])]),e.paperPics2?r("img",{staticClass:"avatar",attrs:{src:e.paperPics2},on:{click:function(t){e.imgLook(e.paperPics2)}}}):e._e(),e.paperPics2?r("span",{staticClass:"photoDel",on:{click:e.delPhoto2}},[e._v("删除")]):e._e()]),r("el-form-item",{attrs:{label:"身份证号反面"}},[e.paperPics3?e._e():r("div",{staticClass:"avatar-uploader"},[r("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[r("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),r("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:e.fileChange3}})])]),e.paperPics3?r("img",{staticClass:"avatar",attrs:{src:e.paperPics3},on:{click:function(t){e.imgLook(e.paperPics3)}}}):e._e(),e.paperPics3?r("span",{staticClass:"photoDel",on:{click:e.delPhoto3}},[e._v("删除")]):e._e()]),r("el-form-item",{attrs:{label:"护士证照"}},[e.ruleForm.nursePics?e._e():r("div",{staticClass:"avatar-uploader"},[r("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[r("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),r("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:e.fileChange4}})])]),e.ruleForm.nursePics?r("img",{staticClass:"avatar",attrs:{src:e.ruleForm.nursePics},on:{click:function(t){e.imgLook(e.ruleForm.nursePics)}}}):e._e(),e.ruleForm.nursePics?r("span",{staticClass:"photoDel",on:{click:e.delPhoto4}},[e._v("删除")]):e._e()]),r("el-form-item",{attrs:{label:"人员技能标签",prop:"skills"}},[r("el-select",{staticClass:"input-width",attrs:{placeholder:"请选择"},model:{value:e.skill,callback:function(t){e.skill=t},expression:"skill"}},e._l(e.skillTagList,function(e){return r("el-option",{key:e.id,attrs:{label:e.dValue,value:e.dKey}})})),e.skill?r("el-button",{attrs:{type:"primary"},on:{click:e.skillAdd}},[e._v("添加")]):e._e()],1),e.skillArry.length>0?r("el-form-item",e._l(e.skillArry,function(t){return r("el-tag",{key:t.id,attrs:{closable:"","disable-transitions":!1},on:{close:function(r){e.delSkill(t.id)}}},[e._v("\n            "+e._s(t.name)+"\n          ")])})):e._e(),r("el-form-item",{attrs:{label:"人员排版选择"}},[r("el-date-picker",{staticClass:"input-width",attrs:{type:"dates","value-format":"yyyy-MM-dd",placeholder:"选择日期"},model:{value:e.paibandates,callback:function(t){e.paibandates=t},expression:"paibandates"}}),r("el-button",{attrs:{type:"primary"},on:{click:e.getpaiban}},[e._v("添加")])],1),e.paibanArry.length>0?r("el-form-item",e._l(e.paibanArry,function(t,a){return r("el-tag",{key:a,attrs:{closable:"","disable-transitions":!1},on:{close:function(t){e.delpaiban(a)}}},[e._v("\n            "+e._s(t.date)),r("el-checkbox",{model:{value:t.shangwu,callback:function(r){e.$set(t,"shangwu",r)},expression:"tag.shangwu"}},[e._v("上午")]),r("el-checkbox",{model:{value:t.xiawu,callback:function(r){e.$set(t,"xiawu",r)},expression:"tag.xiawu"}},[e._v("下午")])],1)})):e._e(),r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入内容"},model:{value:e.ruleForm.remark,callback:function(t){e.$set(e.ruleForm,"remark",t)},expression:"ruleForm.remark"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("提交")]),r("el-button",{on:{click:e.cancle}},[e._v("取消")])],1)],1),r("el-dialog",{attrs:{"custom-class":"bigDig",visible:e.imgDiv,"show-close":!1},on:{"update:visible":function(t){e.imgDiv=t}}},[r("img",{attrs:{src:e.imgUrl}})])],1)])},i=[],n=(r("20d6"),r("7f7f"),r("28a5"),r("cadf"),r("551c"),r("097d"),r("d48e")),s=r("3ebc"),o=r("fc37"),l=r("65b8"),c=r("b383"),u=r.n(c),d=["新增人员","修改信息"],p=["请先选择地区","该地区没有对应医院信息,请先新建医院"],f=[{id:"11",name:"星期一上午"},{id:"21",name:"星期二上午"},{id:"31",name:"星期三上午"},{id:"41",name:"星期四上午"},{id:"51",name:"星期五上午"}],h=[{id:"12",name:"星期一下午"},{id:"22",name:"星期二下午"},{id:"32",name:"星期三下午"},{id:"42",name:"星期四下午"},{id:"52",name:"星期五下午"}],m={name:"addUserfiled",data:function(){return{imgDiv:!1,imgUrl:"",ruleForm:{userName:"",sex:"",hospitalId:"",hospitalIds:"",skills:"",paper:"",mobile:"",bank:"",bankCardNum:"",areaOwner:!1,remark:"",province:"",city:"",country:"",workTimes:"",areaOwnerId:"",dept1:"",dept2:"",level:"",address:"",email:"",paperPics:"",nursePics:"",state:"0",nurseNum:""},rules:{userName:[{required:!0,message:"请输入姓名",trigger:"blur"}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],province:[{required:!0,message:"请选择地区",trigger:"change"}],hospitalId:[{required:!1,message:"请添加所在医院",trigger:"change"}],paper:[{required:!0,message:"请输入身份证号",trigger:"blur"}],mobile:[{required:!0,message:"请输入手机号",trigger:"blur"}],bank:[{required:!0,message:"请输入银行名称",trigger:"blur"}],bankCardNum:[{required:!0,message:"请输入银行账号",trigger:"blur"}],dept1:[{required:!0,message:"请选择所在科室",trigger:"change"}],level:[{required:!0,message:"请选择护士职称",trigger:"change"}],address:[{required:!0,message:"请输入收件地址",trigger:"blur"}]},skill:"",sexList:s["m"],skillTagList:s["n"],hosTips:p[0],hospitalIdArray:[],hosArray:[],hosNameArray:[],loading:!1,skillArry:[],hospitalArry:[],dateMorList:f,dateAfterList:h,dateAfterChecked:[],defaultAddress:null,activeheader:d[0],check:n["a"].methods.check,checkTip:n["a"].tips.checkTip,arealist:[],codeTypes:[],codeTypes2:[],levelList:[],paperPics2:"",paperPics3:"",paibandates:[],paibanArry:[]}},components:{UserAddress:l["a"]},mounted:function(){this.getarea(),this.editInit(),this.getDict("1"),this.getDict("4")},methods:{imgLook:function(e){this.imgDiv=!0,this.imgUrl=e},getDict:function(e){var t=this;this.axios.get("/dict?groupId="+e).then(function(r){200==r.data.code?"1"==e?t.codeTypes=r.data.data:"4"==e&&(t.levelList=r.data.data):t.$message(t.mes.busy)}).catch(function(e){console.log(e),t.$message(t.mes.busy)})},changeDep:function(){var e=this,t=this.ruleForm.dept1;this.axios.get("/dict?groupId=2&parentKey="+t).then(function(t){200==t.data.code?e.codeTypes2=t.data.data:e.$message(e.mes.busy)}).catch(function(t){console.log(t),e.$message(e.mes.busy)})},getarea:function(){var e=this,t=u.a.stringify({province:this.ruleForm.province,city:this.ruleForm.city,country:this.ruleForm.country,areaOwner:!0});this.api.get("/groundPerson?".concat(t)).then(function(t){e.loading=!1,t.data&&(e.arealist=t.data.list)}).catch(function(t){console.log(t),e.$message(t.data)})},fileChange2:function(e){var t=this;this.loading=!0,Object(o["c"])(e,function(e){t.loading=!1,t.paperPics2=e.url})},fileChange3:function(e){var t=this;this.loading=!0,Object(o["c"])(e,function(e){t.loading=!1,t.paperPics3=e.url})},fileChange4:function(e){var t=this;this.loading=!0,Object(o["c"])(e,function(e){t.loading=!1,t.ruleForm.nursePics=e.url})},delPhoto2:function(){this.paperPics2=""},delPhoto3:function(){this.paperPics3=""},delPhoto4:function(){this.ruleForm.nursePics=""},editInit:function(){var e=this,t=this.$route.query,r=t.type,a=t.id;"edit"===r&&(this.activeheader=d[1]),a&&(this.loading=!0,this.api.get("/groundPerson/".concat(a)).then(function(t){if(e.ruleForm=t.data,e.changeDep(),e.ruleForm.paperPics&&(e.paperPics2=e.ruleForm.paperPics.split(",")[0],e.paperPics3=e.ruleForm.paperPics.split(",")[1]),e.loading=!1,e.ruleForm.hospitalIds){!1;var r=u.a.stringify({province:e.ruleForm.province,city:e.ruleForm.city,country:e.ruleForm.country});e.api.get("/hospital?".concat(r)).then(function(t){e.hosArray=t.data.list;var r=e.ruleForm.hospitalIds.split(",");r.map(function(t){e.hosAdd(t)}),setTimeout(function(){!0},1e3)})}if(e.ruleForm.skills){var a=e.ruleForm.skills.split(",");a.map(function(t){e.skillAdd(t)})}if(e.ruleForm.workTimes){e.paibanArry=JSON.parse(e.ruleForm.workTimes);for(var i=0;i<e.paibanArry.length;i++)e.paibandates.push(e.paibanArry[i].date)}e.defaultAddress={province:e.ruleForm.province,city:e.ruleForm.city,country:e.ruleForm.country}}).catch(function(t){console.log(t),e.loading=!1,e.$message(t.data.message)}))},hosAdd:function(e){var t=this.ruleForm.hospitalId;e=parseInt(e),e&&(t=e);var r=this.hosArray.filter(function(e){return e.id==t}),a=this.hosNameArray.filter(function(e){return e.id==t}),i=r[0].name;if(i||(i=r[0].id),!(a.length>0)){var n=[].concat([],this.hosNameArray,{id:t,name:i});this.hosNameArray=n}},delHos:function(e){this.hosNameArray.splice(this.hosNameArray.findIndex(function(t){return t.id===e}),1)},delSkill:function(e){this.skillArry.splice(this.skillArry.findIndex(function(t){return t.id===e}),1)},delpaiban:function(e){this.paibanArry.splice(e,1),this.paibandates.splice(e,1)},skillAdd:function(e){var t=this.skill;e=parseInt(e),e&&(t=e);var r=this.skillTagList.filter(function(e){return e.dKey==t}),a=this.skillArry.filter(function(e){return e.id==t}),i=r[0].dValue;if(!(a.length>0)){var n=[].concat([],this.skillArry,{id:t,name:i});this.skillArry=n}},getpaiban:function(){this.paibanArry=[];for(var e=0;e<this.paibandates.length;e++)this.paibanArry.push({date:this.paibandates[e],shangwu:!1,xiawu:!1})},submit:function(){var e=this;console.log(this.paibanArry),this.ruleForm.workTimes=JSON.stringify(this.paibanArry),this.ruleForm.paperPics=this.paperPics2+","+this.paperPics3;var t=this.$refs.userfileAddress.getData();this.ruleForm.province=t.province,this.ruleForm.city=t.city,this.ruleForm.country=t.country;var r=this.hosNameArray.map(function(e){return e.id});if(0==r.length)return this.$message("请添加所在医院！"),!1;this.ruleForm.hospitalIds=r.join(",");var a=this.skillArry.map(function(e){return e.id});this.ruleForm.skills=a.join(","),delete this.ruleForm.operatorId,delete this.ruleForm.createTime,delete this.ruleForm.updateTime,delete this.ruleForm.deleteFlag,delete this.ruleForm.handler,delete this.ruleForm.nurseNum,delete this.ruleForm.wechatName,delete this.ruleForm.openid,delete this.ruleForm.sign,delete this.ruleForm.hibernateLazyInitializer,this.$refs["ruleForm"].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.addUser(e.ruleForm)})},editUser:function(e){var t=this;e.id=this.ruleForm.id,null==this.ruleForm.state&&(this.ruleForm.state="0"),null==this.ruleForm.areaOwnerId&&(this.ruleForm.areaOwnerId=""),this.loading=!0,this.api.put("/groundPerson",e,"form").then(function(e){t.loading=!1,t.$router.go(-1)}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.data.message)})},addUser:function(e){var t=this;if("edit"===this.$route.query.type)return this.editUser(e);this.loading=!0,this.api.post("/groundPerson",e,"form").then(function(e){t.$router.go(-1),t.loading=!1}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.data.message)})},countryChange:function(e){var t=this,r=this.$refs.userfileAddress.getData();this.ruleForm.province=r.province,this.ruleForm.city=r.city,this.ruleForm.country=r.country,this.getarea();var a={page:0,size:1e4,province:r.province,city:r.city,country:r.country},i=u.a.stringify(a||{});this.api.get("/hospital?".concat(i)).then(function(e){t.hosArray=e.data.list,t.hosNameArray=[],t.hospitalArry<1&&(t.hosTips=p[1])}).catch(function(e){console.log(e),t.$message(e.message)})},cancle:function(){this.$router.go(-1)}}},g=m,v=(r("5a75"),r("2877")),y=Object(v["a"])(g,a,i,!1,null,"51412906",null);y.options.__file="addUserfiled.vue";t["default"]=y.exports},"5a75":function(e,t,r){"use strict";var a=r("2617"),i=r.n(a);i.a},"65b8":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"address-group"},[r("el-select",{staticClass:"address-input",style:e.seletStyle,attrs:{placeholder:"全部"},model:{value:e.province,callback:function(t){e.province=t},expression:"province"}},e._l(e.provinceList,function(e){return r("el-option",{key:e.id?e.id:1e3*Math.random(),attrs:{label:e.areaName,value:e.id}})})),r("el-select",{staticClass:"address-input",style:e.seletStyle,attrs:{placeholder:"全部"},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}},e._l(e.cityList,function(e){return r("el-option",{key:e.id?e.id:1e3*Math.random(),attrs:{label:e.areaName,value:e.id}})})),r("el-select",{directives:[{name:"show",rawName:"v-show",value:e.isDistrict,expression:"isDistrict"}],staticClass:"address-input",style:e.seletStyle,attrs:{placeholder:"全部"},model:{value:e.country,callback:function(t){e.country=t},expression:"country"}},e._l(e.countryList,function(e){return r("el-option",{key:e.id?e.id:1e3*Math.random(),attrs:{label:e.areaName,value:e.id}})}))],1)},i=[],n=r("3ebc"),s=r("dd36"),o=!0,l={name:"userAddress",props:{seletStyle:{default:function(){return{}}},defaultValue:{default:function(){return{}},type:Object},isDistrict:{default:!0,type:Boolean}},data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{addressAddAll:function(e){var t={areaCode:"",id:"",parentId:"",areaName:"全部"};return e.unshift(t),e},handleProvince:function(){var e=JSON.parse(JSON.stringify(n["a"]));this.provinceList=this.addressAddAll(e)},handleData:function(e,t,r){var a=this;e&&Object(s["a"])("area",{parentId:e}).then(function(e){if(e.data.code=a.ok){var i=e.data.data;return i=a.addressAddAll(i),r&&r(i),"province"===t?a.cityList=i:a.countryList=i}a.$message("系统繁忙，请稍后再试")}).catch(function(e){console.log(e),a.$message("系统繁忙，请稍后再试!")})},getData:function(){var e=this,t=this.provinceList.filter(function(t){return e.province===t.id}),r=this.cityList.filter(function(t){return e.city===t.id}),a=this.countryList.filter(function(t){return e.country===t.id}),i=t.length>0?t[0].areaCode:"",n=r.length>0?r[0].areaCode:"",s=a.length>0?a[0].areaCode:"",o={province:i,city:n,country:s,checkProvince:t,checkCity:r,checkCountry:a};return o}},watch:{defaultValue:function(){var e=this;if(this.defaultValue){var t=this.defaultValue,r=t.province,a=t.city,i=t.country;if(o=!1,!r)return o=!0;var n=this.lodash.filter(this.provinceList,function(e){return e.areaCode==r});this.province=n[0].id,Object(s["a"])("area",{parentId:this.province}).then(function(t){if(t.data.code=e.ok){if(e.cityList=t.data.data,!a)return o=!0;var r=e.lodash.filter(e.cityList,function(e){return e.areaCode==a});e.city=r[0].id,Object(s["a"])("area",{parentId:e.city}).then(function(t){if(t.data.code=e.ok){if(e.countryList=t.data.data,!i)return o=!0;var r=e.lodash.filter(e.countryList,function(e){return e.areaCode==i});e.country=r[0].id,o=!0}})}})}},province:function(e,t){o&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(e,"province"),this.$emit("countryChange",this.getData()))},city:function(e,t){o&&(this.countryList=[],this.country="",this.handleData(e,"city"),this.$emit("countryChange",this.getData()))},country:function(e,t){this.$emit("countryChange",this.getData())}}},c=l,u=(r("0e02"),r("2877")),d=Object(u["a"])(c,a,i,!1,null,"498b59aa",null);d.options.__file="address.vue";t["a"]=d.exports},"6b54":function(e,t,r){"use strict";r("3846");var a=r("cb7c"),i=r("0bfb"),n=r("9e1e"),s="toString",o=/./[s],l=function(e){r("2aba")(RegExp.prototype,s,e,!0)};r("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?l(function(){var e=a(this);return"/".concat(e.source,"/","flags"in e?e.flags:!n&&e instanceof RegExp?i.call(e):void 0)}):o.name!=s&&l(function(){return o.call(this)})},aae3:function(e,t,r){var a=r("d3f4"),i=r("2d95"),n=r("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==i(e))}},cd1c:function(e,t,r){var a=r("e853");e.exports=function(e,t){return new(a(e))(t)}},d48e:function(e,t,r){"use strict";t["a"]={methods:{check:function(e,t){var r=this;return new Promise(function(a,i){r.lodash.some(t,function(t){e[t]||r.lodash.isBoolean(e[t])||0==e[t]||i()}),a()})}},tips:{checkTip:"请补全信息后提交"}}},e853:function(e,t,r){var a=r("d3f4"),i=r("1169"),n=r("2b4c")("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),a(t)&&(t=t[n],null===t&&(t=void 0))),void 0===t?Array:t}},fc37:function(e,t,r){"use strict";r.d(t,"f",function(){return o}),r.d(t,"a",function(){return l}),r.d(t,"b",function(){return c}),r.d(t,"d",function(){return u}),r.d(t,"e",function(){return d}),r.d(t,"c",function(){return p});r("7f7f"),r("6b54"),r("28a5");var a=r("2ef0"),i=r.n(a),n=r("bc3a"),s=r.n(n);function o(e){if(!e)return"";var t=new Date(e).getFullYear(),r=new Date(e).getMonth()+1,a=new Date(e).getDate();return r<10&&(r="0"+parseInt(r)),a<10&&(a="0"+parseInt(a)),"".concat(t,"-").concat(r,"-").concat(a)}function l(e){if(!e)return"";var t=e.getFullYear(),r=e.getMonth(),a=e.getDate();return r<10&&(r="0"+parseInt(r)),a<10&&(a="0"+parseInt(a)),"".concat(t,"-").concat(r,"-").concat(a)}function c(e){if(!e)return"";var t=e.getHours(),r=e.getMinutes();return t<10&&(t="0"+parseInt(t)),r<10&&(r="0"+parseInt(r)),"".concat(t,"：").concat(r)}function u(e){return e?i.a.map(e.split("-"),function(e){var t=e.split("：")[0],r=e.split("：")[1],a=(new Date).getFullYear(),i=(new Date).getMonth(),n=(new Date).getDay();return t=t.trim(),r=r.trim(),new Date(a,i,n,t,r)}):""}function d(e,t){e=e||"0",t=t||"code",e=e.toString();var r=[{code:"0",name:"启用"},{code:"-1",name:"停用"}],a=i.a.filter(r,function(r){return r[t]===e})||r;return a}function p(e,t){if(e){var r=e.target.files[0];if(r){var a=new FormData;a.append("chunk","0"),a.append("chunks","1"),a.append("file",r,r.name);var i={headers:{"Content-Type":"multipart/form-data"}};s.a.get("/weChat/qiniu/token").then(function(e){var r=e.data.data;a.append("token",r),f(a,i,t)})}}}function f(e,t,r){s.a.post("http://upload-z1.qiniup.com/",e,t).then(function(e){var t={message:"ok",url:"http://qiniu1.tianyalei.com/".concat(e.data.key)};r&&r(t)}).catch(function(e){console.log(e,"pppp")})}}}]);
//# sourceMappingURL=chunk-17117f57.e1682bdb.js.map