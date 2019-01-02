(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45a6739e"],{"0bfb":function(t,e,a){"use strict";var n=a("cb7c");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},"0c12":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}]},[a("div",{staticClass:"box"},[a("h3",[t._v(t._s(t.activeheader))]),a("div",{staticClass:"input-box"},[a("span"),a("label",{staticClass:"label require",attrs:{for:""}},[t._v("医生名称：")]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label require"},[t._v("所在地区:")]),a("user-address",{ref:"addDocAddress",attrs:{defaultValue:t.defaultAddress,seletStyle:"width:216px"},on:{countryChange:t.countryChange}})],1),a("div",{staticClass:"input-box"},[a("label",{class:{label:!0,require:!0,disabled:t.state}},[t._v("所在医院:")]),a("el-select",{attrs:{placeholder:"请选择",disabled:t.state},model:{value:t.hospitalId,callback:function(e){t.hospitalId=e},expression:"hospitalId"}},t._l(t.hosName,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),a("span",{staticClass:"hosTip"},[t._v(t._s(t.hosTip))])],1),a("div",{staticClass:"input-box"},[a("span"),a("label",{staticClass:"label",attrs:{for:""}},[t._v("所在科室：")]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.dept,callback:function(e){t.dept=e},expression:"dept"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label require"},[t._v("标准科室:")]),a("hos-offices",{ref:"addDocOffices",attrs:{defaultValue:t.defaultOffices,seletStyle:"width:216px"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label require"},[t._v("医生职称:")]),a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.level,callback:function(e){t.level=e},expression:"level"}},t._l(t.doctorTitleList,function(t){return a("el-option",{key:t.id,attrs:{label:t.dValue,value:t.id}})}))],1),a("div",{staticClass:"input-box"},[a("span"),a("label",{staticClass:"label require"},[t._v("医生电话：")]),a("el-input",{staticClass:"input-width",attrs:{placeholder:"请输入内容"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label"},[t._v("上传照片")]),t.imageUrl?t._e():a("div",{staticClass:"avatar-uploader"},[a("div",{staticClass:"el-upload el-upload--text",attrs:{tabindex:"0"}},[a("label",{staticClass:"el-icon-plus avatar-uploader-icon",attrs:{for:"upPhoto"}}),a("input",{staticClass:"el-upload__input",attrs:{type:"file",name:"file",id:"upPhoto"},on:{change:t.fileChange}})])]),t.imageUrl?a("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):t._e(),t.imageUrl?a("span",{staticClass:"photoDel",on:{click:t.delPhoto}},[t._v("删除")]):t._e()]),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label"},[t._v("医生简介：")]),a("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:t.info,callback:function(e){t.info=e},expression:"info"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label"},[t._v("医生擅长：")]),a("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:t.skill,callback:function(e){t.skill=e},expression:"skill"}})],1),a("div",{staticClass:"input-box"},[a("label",{staticClass:"label"},[t._v("备注：")]),a("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:t.remark,callback:function(e){t.remark=e},expression:"remark"}})],1),a("div",{staticClass:"input-box box-last"},[a("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),a("el-button",{on:{click:t.cancle}},[t._v("取消")])],1)])])},i=[],s=(a("7f7f"),a("cadf"),a("551c"),a("097d"),a("3ebc")),r=a("fc37"),o=a("d48e"),c=a("65b8"),l=a("de99"),u=a("b383"),d=a.n(u),f=["新增医生","修改医生信息"],p=["请先选择地区","该地区没有对应医院信息，请先新建医院"],h=[],v={name:"addDoc",data:function(){return{name:"",dept:"",hospitalId:"",level:"",imageUrl:"",phone:"",info:"",skill:"",remark:"",loading:!1,id:"",hosTip:p[0],state:!0,defaultAddress:null,defaultOffices:null,activeheader:f[0],check:o["a"].methods.check,checkTip:o["a"].tips.checkTip,doctorTitleList:s["c"],hosName:[]}},components:{UserAddress:c["a"],HosOffices:l["a"]},mounted:function(){this.editInit()},methods:{fileChange:function(t){var e=this;this.loading=!0,Object(r["c"])(t,function(t){e.loading=!1,e.imageUrl=t.url})},delPhoto:function(){this.imageUrl=""},editInit:function(){var t=this,e=this.$route.query,a=e.type,n=e.id;"edit"===a&&(this.activeheader=f[1]),n&&(this.loading=!0,this.api.get("/doctor/".concat(n)).then(function(e){t.dataInit(e.data),setTimeout(function(){t.loading=!1},20)}).catch(function(e){console.log(e),t.loading=!1,t.$message(e.message)}))},dataInit:function(t){var e=this;t=t||{};var a=t,n=a.name,i=a.hospitalName,r=a.dept,o=a.dept1,c=a.dept2,l=a.headIcon,u=a.hospitalId,d=a.level,f=a.phone,p=a.skill,h=a.remark,v=a.info,m=a.id,g=a.province,b=a.city,y=a.country;this.name=n,this.hospitalName=i,this.dept=r,this.phone=f,this.skill=p,this.remark=h,this.info=v,this.id=m,this.imageUrl=l;var k=s["c"].filter(function(t){return t.id==d});k.length>0&&(this.level=k[0].dValue),u&&setTimeout(function(){e.hospitalId=u,e.hosTip=""},1e3),this.defaultAddress={province:g,city:b,country:y},this.defaultOffices={dept1:o,dept2:c}},handleAvatarSuccess:function(t,e){this.imageUrl=URL.createObjectURL(e.raw)},countryChange:function(t){var e=this,a=d.a.stringify(t);this.api.get("/hospital?".concat(a)).then(function(t){if(e.hosName=t.data.list,e.hospitalId="",e.hosName.length<1)return e.state=!0,e.hosTip=p[1];e.state=!1,e.hosTip=""}).catch(function(t){console.log(t),e.$message(t.message)})},submit:function(){var t=this,e=this.$refs.addDocAddress.getData(),a=this.$refs.addDocOffices.getData(),n={name:this.name,dept:this.dept,hospitalId:this.hospitalId,level:this.level,phone:this.phone,headIcon:this.imageUrl,info:this.info,remark:this.remark,skill:this.skill},i=this.lodash.assign({},n,e,a);this.check(i,h).then(function(){t.addUser(i)},function(){t.$message(t.checkTip)}).catch(function(e){console.log(e),t.$message(e.data.message)})},editUser:function(t){var e=this;t.id=this.id,this.api.put("/doctor",t,"form").then(function(t){e.$router.go(-1)}).catch(function(t){console.log(t),e.$message(t.data.message)})},addUser:function(t){var e=this;if("edit"===this.$route.query.type)return this.editUser(t);this.api.post("/doctor",t,"form").then(function(t){e.$router.go(-1)}).catch(function(t){console.log(t),e.$message(t.data.message)})},cancle:function(){this.$router.go(-1)}}},m=v,g=(a("3c7c"),a("2877")),b=Object(g["a"])(m,n,i,!1,null,"60db247e",null);b.options.__file="addDoc.vue";e["default"]=b.exports},"28a5":function(t,e,a){a("214f")("split",2,function(t,e,n){"use strict";var i=a("aae3"),s=n,r=[].push,o="split",c="length",l="lastIndex";if("c"=="abbc"[o](/(b)*/)[1]||4!="test"[o](/(?:)/,-1)[c]||2!="ab"[o](/(?:ab)*/)[c]||4!="."[o](/(.?)(.?)/)[c]||"."[o](/()()/)[c]>1||""[o](/.?/)[c]){var u=void 0===/()??/.exec("")[1];n=function(t,e){var a=String(this);if(void 0===t&&0===e)return[];if(!i(t))return s.call(a,t,e);var n,o,d,f,p,h=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,g=void 0===e?4294967295:e>>>0,b=new RegExp(t.source,v+"g");u||(n=new RegExp("^"+b.source+"$(?!\\s)",v));while(o=b.exec(a)){if(d=o.index+o[0][c],d>m&&(h.push(a.slice(m,o.index)),!u&&o[c]>1&&o[0].replace(n,function(){for(p=1;p<arguments[c]-2;p++)void 0===arguments[p]&&(o[p]=void 0)}),o[c]>1&&o.index<a[c]&&r.apply(h,o.slice(1)),f=o[0][c],m=d,h[c]>=g))break;b[l]===o.index&&b[l]++}return m===a[c]?!f&&b.test("")||h.push(""):h.push(a.slice(m)),h[c]>g?h.slice(0,g):h}}else"0"[o](void 0,0)[c]&&(n=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)});return[function(a,i){var s=t(this),r=void 0==a?void 0:a[e];return void 0!==r?r.call(a,s,i):n.call(String(s),a,i)},n]})},"331c":function(t,e,a){},3846:function(t,e,a){a("9e1e")&&"g"!=/./g.flags&&a("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:a("0bfb")})},"3c7c":function(t,e,a){"use strict";var n=a("9ddd"),i=a.n(n);i.a},"3ebc":function(t,e,a){"use strict";a.d(e,"b",function(){return f}),a.d(e,"c",function(){return p}),a.d(e,"i",function(){return h}),a.d(e,"l",function(){return v}),a.d(e,"a",function(){return C}),a.d(e,"f",function(){return o}),a.d(e,"g",function(){return c}),a.d(e,"d",function(){return l}),a.d(e,"e",function(){return u}),a.d(e,"n",function(){return m}),a.d(e,"o",function(){return _}),a.d(e,"p",function(){return g}),a.d(e,"q",function(){return b}),a.d(e,"j",function(){return S}),a.d(e,"h",function(){return k}),a.d(e,"m",function(){return x}),a.d(e,"k",function(){return y});var n=a("2ef0"),i=a.n(n),s=a("7c15");function r(t){return i.a.sortBy(t,function(t){return t.sortId})}function o(t){return s["a"].get("/role").then(function(e){return t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function c(t){return s["a"].get("/user").then(function(e){var a={id:"",name:"全部",roleId:""};return e.data.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function l(t){return s["a"].get("/company?page=0&size=1000").then(function(e){var a={id:"",name:"全部"};return e.data.list.unshift(a),t&&t(e.data),e.data}).catch(function(t){console.log(t)}),[]}function u(t,e){if(t)return s["a"].get("/goods?companyId=".concat(t,"&page=0&size=1000")).then(function(t){return e&&e(t.data),t.data}).catch(function(t){console.log(t)}),[]}function d(t){var e={dKey:"",id:"",dValue:"全部"};return t.unshift(e),t}var f=r(JSON.parse(sessionStorage.departmentList)),p=r(JSON.parse(sessionStorage.doctorTitleList)),h=r(JSON.parse(sessionStorage.hosLevelList)),v=r(JSON.parse(sessionStorage.propertyList)),m=r(JSON.parse(sessionStorage.skillTagList)),g=r(JSON.parse(sessionStorage.subDepartmentList)),b=r(JSON.parse(sessionStorage.typeList)),y=r(JSON.parse(sessionStorage.paperTypeList)),k=r(JSON.parse(sessionStorage.hopType)),C=JSON.parse(sessionStorage.addressProvince);b=d(b),p=d(p),h=d(h),v=d(v),m=d(m),y=d(y),k=d(k);var x=[{id:1,dKey:1,dValue:"男"},{id:0,dKey:0,dValue:"女"}],_=[{id:0,dKey:0,dValue:"启用"},{id:-1,dKey:-1,dValue:"停用"}],S=[{id:"1234560",dKey:!0,dValue:"是"},{id:"1234567",dKey:!1,dValue:"否"}]},"40ba":function(t,e,a){},"65b8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"address-group"},[a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})})),a("el-select",{directives:[{name:"show",rawName:"v-show",value:t.isDistrict,expression:"isDistrict"}],staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.areaName,value:t.id}})}))],1)},i=[],s=a("3ebc"),r=a("dd36"),o=!0,c={name:"userAddress",props:{seletStyle:{default:function(){return{}}},defaultValue:{default:function(){return{}},type:Object},isDistrict:{default:!0,type:Boolean}},data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{addressAddAll:function(t){var e={areaCode:"",id:"",parentId:"",areaName:"全部"};return t.unshift(e),t},handleProvince:function(){var t=JSON.parse(JSON.stringify(s["a"]));this.provinceList=this.addressAddAll(t)},handleData:function(t,e,a){var n=this;t&&Object(r["a"])("area",{parentId:t}).then(function(t){if(t.data.code=n.ok){var i=t.data.data;return i=n.addressAddAll(i),a&&a(i),"province"===e?n.cityList=i:n.countryList=i}n.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),n.$message("系统繁忙，请稍后再试!")})},getData:function(){var t=this,e=this.provinceList.filter(function(e){return t.province===e.id}),a=this.cityList.filter(function(e){return t.city===e.id}),n=this.countryList.filter(function(e){return t.country===e.id}),i=e.length>0?e[0].areaCode:"",s=a.length>0?a[0].areaCode:"",r=n.length>0?n[0].areaCode:"",o={province:i,city:s,country:r,checkProvince:e,checkCity:a,checkCountry:n};return o}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.province,n=e.city,i=e.country;if(o=!1,!a)return o=!0;var s=this.lodash.filter(this.provinceList,function(t){return t.areaCode==a});this.province=s[0].id,Object(r["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!n)return o=!0;var a=t.lodash.filter(t.cityList,function(t){return t.areaCode==n});t.city=a[0].id,Object(r["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!i)return o=!0;var a=t.lodash.filter(t.countryList,function(t){return t.areaCode==i});t.country=a[0].id,o=!0}})}})}},province:function(t,e){o&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"))},city:function(t,e){o&&(this.countryList=[],this.country="",this.handleData(t,"city"))},country:function(t,e){this.$emit("countryChange",this.getData())}}},l=c,u=(a("a092"),a("2877")),d=Object(u["a"])(l,n,i,!1,null,"3db8313c",null);d.options.__file="address.vue";e["a"]=d.exports},"6b54":function(t,e,a){"use strict";a("3846");var n=a("cb7c"),i=a("0bfb"),s=a("9e1e"),r="toString",o=/./[r],c=function(t){a("2aba")(RegExp.prototype,r,t,!0)};a("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?c(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?i.call(t):void 0)}):o.name!=r&&c(function(){return o.call(this)})},"9ddd":function(t,e,a){},a092:function(t,e,a){"use strict";var n=a("331c"),i=a.n(n);i.a},aae3:function(t,e,a){var n=a("d3f4"),i=a("2d95"),s=a("2b4c")("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==i(t))}},d48e:function(t,e,a){"use strict";e["a"]={methods:{check:function(t,e){var a=this;return new Promise(function(n,i){a.lodash.some(e,function(e){t[e]||a.lodash.isBoolean(t[e])||i()}),n()})}},tips:{checkTip:"请补全信息后提交"}}},de99:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hos-offices"},[a("el-select",{staticClass:"offices-input",style:t.seletStyle,attrs:{placeholder:"选择一级科室"},model:{value:t.dept1,callback:function(e){t.dept1=e},expression:"dept1"}},t._l(t.departmentList,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.dValue,value:t.dKey}})})),a("el-select",{staticClass:"offices-input",style:t.seletStyle,attrs:{placeholder:"选择二级科室"},model:{value:t.dept2,callback:function(e){t.dept2=e},expression:"dept2"}},t._l(t.subDepart,function(t){return a("el-option",{key:t.id?t.id:1e3*Math.random(),attrs:{label:t.dValue,value:t.dKey}})}))],1)},i=[],s=(a("cadf"),a("551c"),a("097d"),a("3ebc")),r=(a("dd36"),!0),o={name:"hosOffices",props:["seletStyle","defaultValue"],data:function(){return{departmentList:s["b"],subDepart:[],dept1:"",dept2:""}},mounted:function(){this.dataInit()},methods:{dataInit:function(){var t=JSON.parse(JSON.stringify(s["b"]));this.departmentList=this.addAll(t)},addAll:function(t){var e={id:"",dKey:"",dValue:"全部"};t.filter(function(t){return"全部"!==t.dValue});return t.unshift(e),t},handleData:function(t){if(t){var e=this.lodash.filter(s["p"],function(e){return e.parentKey===t});this.subDepart=this.addAll(e)}},getData:function(){var t={dept1:this.dept1,dept2:this.dept2};return t}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,a=e.dept1,n=e.dept2;if(r=!1,!a)return r=!0;this.handleData(a),this.dept1=a,setTimeout(function(){if(!n)return r=!0;t.dept2=n,r=!0},500)}},dept1:function(t,e){t&&r&&(this.subDepart=[],this.dept2="",this.handleData(t))}}},c=o,l=(a("e459"),a("2877")),u=Object(l["a"])(c,n,i,!1,null,"05e25fea",null);u.options.__file="hosOffices.vue";e["a"]=u.exports},e459:function(t,e,a){"use strict";var n=a("40ba"),i=a.n(n);i.a},fc37:function(t,e,a){"use strict";a.d(e,"f",function(){return o}),a.d(e,"a",function(){return c}),a.d(e,"b",function(){return l}),a.d(e,"d",function(){return u}),a.d(e,"e",function(){return d}),a.d(e,"c",function(){return f});a("7f7f"),a("6b54"),a("28a5");var n=a("2ef0"),i=a.n(n),s=a("bc3a"),r=a.n(s);function o(t){if(!t)return"";var e=new Date(t).getFullYear(),a=new Date(t).getMonth(),n=new Date(t).getDate();return a<10&&(a="0"+parseInt(a)),n<10&&(n="0"+parseInt(n)),"".concat(e,"-").concat(a,"-").concat(n)}function c(t){if(!t)return"";var e=t.getFullYear(),a=t.getMonth(),n=t.getDate();return a<10&&(a="0"+parseInt(a)),n<10&&(n="0"+parseInt(n)),"".concat(e,"-").concat(a,"-").concat(n)}function l(t){if(!t)return"";var e=t.getHours(),a=t.getMinutes();return e<10&&(e="0"+parseInt(e)),a<10&&(a="0"+parseInt(a)),"".concat(e,"：").concat(a)}function u(t){return t?i.a.map(t.split("-"),function(t){var e=t.split("：")[0],a=t.split("：")[1],n=(new Date).getFullYear(),i=(new Date).getMonth(),s=(new Date).getDay();return e=e.trim(),a=a.trim(),new Date(n,i,s,e,a)}):""}function d(t,e){t=t||"0",e=e||"code",t=t.toString();var a=[{code:"0",name:"启用"},{code:"-1",name:"停用"}],n=i.a.filter(a,function(a){return a[e]===t})||a;return n}function f(t,e){if(t){var a=t.target.files[0];if(a){var n=new FormData;n.append("chunk","0"),n.append("chunks","1"),n.append("file",a,a.name);var i={headers:{"Content-Type":"multipart/form-data"}};r.a.get("/weChat/qiniu/token").then(function(t){var a=t.data.data;n.append("token",a),p(n,i,e)})}}}function p(t,e,a){r.a.post("http://upload-z1.qiniup.com/",t,e).then(function(t){var e={message:"ok",url:"http://qiniu.tianyalei.com/".concat(t.data.key)};a&&a(e)}).catch(function(t){console.log(t,"pppp")})}}}]);
//# sourceMappingURL=chunk-45a6739e.a9bf2177.js.map