(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-652da8d8"],{"057a":function(t,e,s){var a=s("d0e9"),o=s("a9d3"),i=s("aed2"),r=s("dc29"),n=s("946c"),c=s("c3c2"),d=Object.getOwnPropertyDescriptor;e.f=s("2d57")?d:function(t,e){if(t=i(t),e=r(e,!0),c)try{return d(t,e)}catch(s){}if(n(t,e))return o(!a.f.call(t,e),t[e])}},"0ba2":function(t,e,s){},3439:function(t,e,s){},"380d":function(t,e,s){"use strict";var a=s("3439"),o=s.n(a);o.a},3930:function(t,e,s){var a=s("1068"),o=s("853b"),i=function(t,e){if(o(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=s("6d6a")(Function.call,s("057a").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(o){e=!0}return function(t,s){return i(t,s),e?t.__proto__=s:a(t,s),t}}({},!1):void 0),check:i}},5246:function(t,e,s){"use strict";var a=s("b040"),o=s("946c"),i=s("85eb"),r=s("d082"),n=s("dc29"),c=s("7372"),d=s("efd2").f,l=s("057a").f,u=s("c810").f,h=s("c6db").trim,f="Number",p=a[f],m=p,v=p.prototype,y=i(s("c580")(v))==f,g="trim"in String.prototype,P=function(t){var e=n(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():h(e,3);var s,a,o,i=e.charCodeAt(0);if(43===i||45===i){if(s=e.charCodeAt(2),88===s||120===s)return NaN}else if(48===i){switch(e.charCodeAt(1)){case 66:case 98:a=2,o=49;break;case 79:case 111:a=8,o=55;break;default:return+e}for(var r,c=e.slice(2),d=0,l=c.length;d<l;d++)if(r=c.charCodeAt(d),r<48||r>o)return NaN;return parseInt(c,a)}}return+e};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof p&&(y?c(function(){v.valueOf.call(s)}):i(s)!=f)?r(new m(P(e)),s,p):P(e)};for(var I,b=s("2d57")?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;b.length>C;C++)o(m,I=b[C])&&!o(p,I)&&u(p,I,l(m,I));p.prototype=v,v.constructor=p,s("f6d5")(a,f,p)}},"571e":function(t,e,s){},"65b8":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address-group"},[s("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return s("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})}),1),s("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return s("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})}),1),s("el-select",{directives:[{name:"show",rawName:"v-show",value:t.isDistrict,expression:"isDistrict"}],staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return s("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})}),1)],1)},o=[],i=s("7622"),r=s("dd36"),n=!0,c={name:"userAddress",props:{seletStyle:{default:function(){return{}}},defaultValue:{default:function(){return{}},type:Object},isDistrict:{default:!0,type:Boolean}},data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{handleProvince:function(){this.provinceList=i["a"]},handleData:function(t,e,s){var a=this;t&&Object(r["a"])("area",{parentId:t}).then(function(t){if(t.data.code=a.ok)return s&&s(t.data.data),"province"===e?a.cityList=t.data.data:a.countryList=t.data.data;a.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),a.$message("系统繁忙，请稍后再试!")})},getData:function(){var t=this,e=this.provinceList.filter(function(e){return t.province===e.id}),s=this.cityList.filter(function(e){return t.city===e.id}),a=this.countryList.filter(function(e){return t.country===e.id}),o=e.length>0?e[0].areaCode:"",i=s.length>0?s[0].areaCode:"",r=a.length>0?a[0].areaCode:"",n={province:o,city:i,country:r,checkProvince:e,checkCity:s,checkCountry:a};return n}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,s=e.province,a=e.city,o=e.country;if(n=!1,!s)return n=!0;var i=this.lodash.filter(this.provinceList,function(t){return t.areaCode==s});this.province=i[0].id,Object(r["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!a)return n=!0;var s=t.lodash.filter(t.cityList,function(t){return t.areaCode==a});t.city=s[0].id,Object(r["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!o)return n=!0;var s=t.lodash.filter(t.countryList,function(t){return t.areaCode==o});t.country=s[0].id,n=!0}})}})}},province:function(t,e){t&&n&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"))},city:function(t,e){t&&n&&(this.countryList=[],this.country="",this.handleData(t,"city"))},country:function(t,e){this.$emit("countryChange",this.getData())}}},d=c,l=(s("6d15"),s("048f")),u=Object(l["a"])(d,a,o,!1,null,"3ea7b8be",null);u.options.__file="address.vue";e["a"]=u.exports},"6c5a":function(t,e,s){var a=s("1068"),o=s("85eb"),i=s("26dc")("match");t.exports=function(t){var e;return a(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},"6d15":function(t,e,s){"use strict";var a=s("b2e8"),o=s.n(a);o.a},7622:function(t,e,s){"use strict";s.d(e,"a",function(){return a});var a=JSON.parse(sessionStorage.addressProvince)},a197:function(t,e,s){"use strict";var a=s("0ba2"),o=s.n(a);o.a},a8f6:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},b2e8:function(t,e,s){},c6db:function(t,e,s){var a=s("9736"),o=s("da87"),i=s("7372"),r=s("a8f6"),n="["+r+"]",c="​",d=RegExp("^"+n+n+"*"),l=RegExp(n+n+"*$"),u=function(t,e,s){var o={},n=i(function(){return!!r[t]()||c[t]()!=c}),d=o[t]=n?e(h):r[t];s&&(o[s]=d),a(a.P+a.F*n,"String",o)},h=u.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(l,"")),t};t.exports=u},cd03:function(t,e,s){"use strict";var a=s("6c5a"),o=s("853b"),i=s("7a5b"),r=s("a6c0"),n=s("5cda"),c=s("54aa"),d=s("7861"),l=Math.min,u=[].push,h="split",f="length",p="lastIndex",m=!!function(){try{return new RegExp("x","y")}catch(t){}}();s("6e77")("split",2,function(t,e,s,v){var y=s;return"c"=="abbc"[h](/(b)*/)[1]||4!="test"[h](/(?:)/,-1)[f]||2!="ab"[h](/(?:ab)*/)[f]||4!="."[h](/(.?)(.?)/)[f]||"."[h](/()()/)[f]>1||""[h](/.?/)[f]?y=function(t,e){var o=String(this);if(void 0===t&&0===e)return[];if(!a(t))return s.call(o,t,e);var i,r,n,c=[],l=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=void 0===e?4294967295:e>>>0,v=new RegExp(t.source,l+"g");while(i=d.call(v,o)){if(r=v[p],r>h&&(c.push(o.slice(h,i.index)),i[f]>1&&i.index<o[f]&&u.apply(c,i.slice(1)),n=i[0][f],h=r,c[f]>=m))break;v[p]===i.index&&v[p]++}return h===o[f]?!n&&v.test("")||c.push(""):c.push(o.slice(h)),c[f]>m?c.slice(0,m):c}:"0"[h](void 0,0)[f]&&(y=function(t,e){return void 0===t&&0===e?[]:s.call(this,t,e)}),[function(s,a){var o=t(this),i=void 0==s?void 0:s[e];return void 0!==i?i.call(s,o,a):y.call(String(o),s,a)},function(t,e){var a=v(y,t,this,e,y!==s);if(a.done)return a.value;var d=o(t),u=String(this),h=i(d,RegExp),f=d.unicode,p=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),g=new h(m?d:"^(?:"+d.source+")",p),P=void 0===e?4294967295:e>>>0;if(0===P)return[];if(0===u.length)return null===c(g,u)?[u]:[];var I=0,b=0,C=[];while(b<u.length){g.lastIndex=m?b:0;var D,_=c(g,m?u:u.slice(b));if(null===_||(D=l(n(g.lastIndex+(m?0:b)),u.length))===I)b=r(u,b,f);else{if(C.push(u.slice(I,b)),C.length===P)return C;for(var k=1;k<=_.length-1;k++)if(C.push(_[k]),C.length===P)return C;b=I=D}}return C.push(u.slice(I)),C}]})},ce1f:function(t,e,s){"use strict";var a=s("571e"),o=s.n(a);o.a},d082:function(t,e,s){var a=s("1068"),o=s("3930").set;t.exports=function(t,e,s){var i,r=e.constructor;return r!==s&&"function"==typeof r&&(i=r.prototype)!==s.prototype&&a(i)&&o&&o(t,i),t}},d0e9:function(t,e){e.f={}.propertyIsEnumerable},e544:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contianer"},[s("h3",{staticClass:"title"},[t._v("企业名称："+t._s(t.companyName)+"-"+t._s(t.goodsName))]),s("div",{staticClass:"list"},[t._m(0),s("el-select",{attrs:{placeholder:"请选择"},model:{value:t.goodsInfo.ptGoodsPlanId,callback:function(e){t.$set(t.goodsInfo,"ptGoodsPlanId",e)},expression:"goodsInfo.ptGoodsPlanId"}},t._l(t.goodsPlanList,function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),s("div",{staticClass:"list"},[t._m(1),s("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.goodsInfo.name,callback:function(e){t.$set(t.goodsInfo,"name",e)},expression:"goodsInfo.name"}})],1),s("div",{staticClass:"list"},[t._m(2),s("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:t.goodsInfo.remark,callback:function(e){t.$set(t.goodsInfo,"remark",e)},expression:"goodsInfo.remark"}})],1),s("div",{staticClass:"list"},[s("span"),t._m(3),s("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.goodsInfo.beginTime,callback:function(e){t.$set(t.goodsInfo,"beginTime",e)},expression:"goodsInfo.beginTime"}}),s("span"),t._m(4),s("el-date-picker",{attrs:{"value-format":"yyyy-MM-dd",type:"date",placeholder:"选择日期"},model:{value:t.goodsInfo.endTime,callback:function(e){t.$set(t.goodsInfo,"endTime",e)},expression:"goodsInfo.endTime"}})],1),s("div",{staticClass:"pl"},[s("p",[t._v("商品绑定优加服务：")]),s("el-checkbox-group",{on:{change:t.handleCheckedServesChange},model:{value:t.checkedServes,callback:function(e){t.checkedServes=e},expression:"checkedServes"}},t._l(t.servesList,function(e){return s("el-checkbox",{key:e,attrs:{label:e}},[t._v(t._s(e))])}),1)],1),t.goodsInfo.ptCashPrePay?s("div",{staticClass:"pl"},[s("p",[t._v("押金垫付设置")]),s("serve-address",{ref:"cashAddress",attrs:{cityCodes:t.ptCashPrePayData.cityCodes}}),s("serve-radio",{ref:"cashServesItem",attrs:{item:t.servesItem,serverTimes:t.ptCashPrePayData.serverTimes,isEdit:t.hasPtCashPrePayData}}),s("serve-radio",{ref:"cashWaitItem",attrs:{item:t.waitItem,serverTimes:t.ptCashPrePayData.waitMonths,isEdit:t.hasPtCashPrePayData}}),s("div",{staticClass:"list"},[s("label",{staticClass:"list-item require"},[t._v("沟通确认提示文案:")]),s("el-input",{attrs:{type:"textarea",rows:2,size:"medium",placeholder:"请输入内容"},model:{value:t.ptCashPrePay.remark,callback:function(e){t.$set(t.ptCashPrePay,"remark",e)},expression:"ptCashPrePay.remark"}})],1)],1):t._e(),t.goodsInfo.ptPhoneDoctor?s("div",{staticClass:"pl"},[s("p",[t._v("电话医生设置")]),s("serve-address",{ref:"docAddress",attrs:{cityCodes:t.ptPhoneDoctorData.cityCodes}}),s("serve-radio",{ref:"docServesItem",attrs:{item:t.servesItem,serverTimes:t.ptPhoneDoctorData.serverTimes,isEdit:t.hasPtPhoneDoctorData}}),s("serve-radio",{ref:"singleDurationItem",attrs:{item:t.singleDurationItem,serverTimes:t.ptPhoneDoctorData.singleDuration,isEdit:t.hasPtPhoneDoctorData}}),s("serve-radio",{ref:"selfPayItem",attrs:{item:t.selfPayItem,serverTimes:t.ptPhoneDoctorData.selfPay,isEdit:t.hasPtPhoneDoctorData}}),s("serve-radio",{ref:"docWaitItem",attrs:{item:t.waitItem,serverTimes:t.ptPhoneDoctorData.waitMonths,isEdit:t.hasPtPhoneDoctorData}})],1):t._e(),s("div",{staticClass:"list btn-submit pl"},[s("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("提交")]),s("el-button",{attrs:{type:"primary",plain:""},on:{click:t.back}},[t._v("返回")])],1)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"list-item"},[s("i",[t._v("所属商品计划:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"list-item require"},[s("i",[t._v("商品名称：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"list-item"},[s("i",[t._v("商品简介：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[t._v("商品生效日期：")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"list-item require",attrs:{for:""}},[s("i",[t._v("商品失效日期：")])])}],i=(s("5246"),s("f4b1"),s("a2f3"),s("e468"),s("65b8")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list"},[s("label",{attrs:{for:""}},[t._v(t._s(t.item.label)+"：")]),s("el-radio",{attrs:{label:"-1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v(t._s(t.item.radioText1))]),s("el-radio",{attrs:{label:"1"},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v(t._s(t.item.radioText2))]),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.radio,expression:"radio == 1"}]},[s("label",{staticClass:"pl",attrs:{for:""}},[t._v(t._s(t.item.timesText)+"：")]),s("el-input",{staticClass:"width",model:{value:t.times,callback:function(e){t.times=e},expression:"times"}})],1)],1)},n=[],c={name:"serveRadio",props:["item","serverTimes","isEdit"],data:function(){return{radio:"",times:""}},methods:{getData:function(){var t=1==this.radio?this.times:this.radio;return Number(t)}},watch:{isEdit:function(t){t&&(this.radio="-1"==this.serverTimes?String(this.serverTimes):"1",this.times="-1"==this.serverTimes?"":this.serverTimes)}}},d=c,l=(s("380d"),s("048f")),u=Object(l["a"])(d,r,n,!1,null,"32bfa263",null);u.options.__file="serveRadio.vue";var h=u.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"list"},[t._m(0),s("user-address",{ref:"address",attrs:{isDistrict:t.isDistrict}}),s("el-button",{on:{click:t.addAddress}},[t._v("添加")]),s("el-checkbox",{staticClass:"pl",model:{value:t.allCity,callback:function(e){t.allCity=e},expression:"allCity"}},[t._v("全国")])],1),s("div",{staticClass:"list"},t._l(t.addressName,function(e,a){return s("span",{key:a,staticClass:"pl"},[t._v(t._s(e))])}),0)])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("label",{staticClass:"list-item"},[s("i",[t._v("服务区域:")])])}],m=(s("cd03"),{name:"serveAddress",props:{cityCodes:{type:String}},data:function(){return{addressList:[],isDistrict:!1,addressName:[],allCity:"",arr:[]}},components:{UserAddress:i["a"]},methods:{addAddress:function(t){if(this.allCity=!1,this.arr.push(1),this.addressList=this.addressList.concat(this.$refs.address.getData().checkCity),this.$refs.address.getData().checkProvince.length)if(this.$refs.address.getData().checkCity.length){var e=this.$refs.address.getData().checkCity[0].areaName;this.addressName.indexOf(e)>-1?this.$message("您已添加，请勿重复"):(this.addressName.push(this.$refs.address.getData().checkCity[0].areaName),console.log(this.addressName))}else this.$message("请选择区域的市级");else this.$message("请选择区域的省级")},getData:function(){var t="";return t=this.addressName.join(","),t||"-1"}},watch:{allCity:function(t){console.log(t),t&&(this.addressName.length=0,this.addressList.length=0)},cityCodes:function(t){console.log(t),"-1"==t?this.allCity=!0:this.addressName=this.addressName.concat(t.split(","))}}}),v=m,y=(s("a197"),Object(l["a"])(v,f,p,!1,null,"70b6b63e",null));y.options.__file="serveAddress.vue";var g=y.exports,P=["押金垫付","电话医生","体检服务","门诊绿通","住院绿通","手术绿通","二次诊疗"],I={label:"服务次数",radioText1:"不限",radioText2:"限制",timesText:"次数"},b={label:"等待期",radioText1:"无",radioText2:"有",timesText:"天数"},C={label:"单次时长",radioText1:"不限",radioText2:"限制",timesText:"时间(分钟)"},D={label:"自费购买",radioText1:"不允许",radioText2:"允许",timesText:"单价(元)"},_={cityCodes:"",serverTimes:"",waitMonths:"",remark:"",filePaths:""},k={cityCodes:"",serverTimes:"",singleDuration:"",selfPay:"",waitMonths:""},x={id:"",reason:"",name:"",ptGoodsPlanId:"",beginTime:"",endTime:"",remark:"",companyId:"",youBodyCheck:0,youOutpatient:0,youHospital:0,youOperation:0,youSecondMed:0,ptCashPrePay:0,ptPhoneDoctor:0},N=s("5ee4"),S={name:"addOrEditGoods",data:function(){return{comName:"",companyId:"",goodsName:"",isEdit:"",goodsId:"",goodsPlanList:[],checkedServes:[],servesList:JSON.parse(JSON.stringify(P)),servesItem:JSON.parse(JSON.stringify(I)),waitItem:JSON.parse(JSON.stringify(b)),singleDurationItem:JSON.parse(JSON.stringify(C)),selfPayItem:JSON.parse(JSON.stringify(D)),ptCashPrePay:JSON.parse(JSON.stringify(_)),ptPhoneDoctor:JSON.parse(JSON.stringify(k)),goodsInfo:JSON.parse(JSON.stringify(x)),ptCashPrePayData:{addressName:[]},hasPtCashPrePayData:!1,ptPhoneDoctorData:{addressName:[]},hasPtPhoneDoctorData:!1}},components:{UserAddress:i["a"],serveRadio:h,serveAddress:g},created:function(){this.init(),this.getGoodsPlan(),this.isEdit&&this.getGoodsInfo()},methods:{init:function(){var t=this.$route.query;this.companyName=t.companyName,this.companyId=t.companyId,this.goodsId=t.goodsId,this.isEdit="edit"===t.type,this.goodsName=this.isEdit?t.goodsName:"新增商品",this.goodsInfo.companyId=this.companyId,t.goodsId?this.goodsInfo.id=t.goodsId:delete this.goodsInfo.id},getGoodsInfo:function(){var t=this;this.axios.get("/goods/".concat(this.goodsId,"/detail")).then(function(e){var s=Number(e.data.code);if(200===s){var a=e.data.data.modified;for(var o in console.log(a),x)t.goodsInfo[o]=a[o];t.goodsInfo.beginTime=t.timeFormater(a.beginTime).format("YYYY-MM-DD"),t.goodsInfo.endTime=t.timeFormater(a.endTime).format("YYYY-MM-DD"),a.youCashPrePayId&&(t.setPtCashPrePay(a.youCashPrePayId),t.checkedServes.push("押金垫付")),a.youPhoneDoctorId&&(t.setPtPhoneDoctor(a.youPhoneDoctorId),t.checkedServes.push("电话医生")),t.goodsInfo.youBodyCheck&&t.checkedServes.push("体检服务"),t.goodsInfo.youOutpatient&&t.checkedServes.push("门诊绿通"),t.goodsInfo.youHospital&&t.checkedServes.push("住院绿通"),t.goodsInfo.youOperation&&t.checkedServes.push("手术绿通"),t.goodsInfo.youSecondMed&&t.checkedServes.push("二次诊疗"),console.log(t.goodsInfo)}}).catch(function(t){console.log(t)})},setPtCashPrePay:function(t){var e=this;this.axios.get("/goods/cashPrePay/".concat(t)).then(function(t){var s=Number(t.data.code);200===s&&(e.ptCashPrePayData=t.data.data,e.hasPtCashPrePayData=!0,console.log(t.data.data))}).catch(function(t){console.log(t)})},setPtPhoneDoctor:function(){var t=this;this.axios.get("/goods/phoneDoctor/".concat(id)).then(function(e){var s=Number(e.data.code);200===s&&(t.ptPhoneDoctorData=e.data.data,t.hasPtPhoneDoctorData=!0,console.log(e.data.data))}).catch(function(t){console.log(t)})},getGoodsPlan:function(){var t=this,e={companyId:this.companyId};this.axios.get("/goodsPlan?"+N.stringify(e)).then(function(e){var s=Number(e.data.code);200===s?t.goodsPlanList=e.data.data:t.$message(t.mes.busy)}).catch(function(e){console.log(e),t.$message(t.mes.busy)})},handleCheckedServesChange:function(t){console.log(t)},getPtCashPrePay:function(){this.ptCashPrePay.cityCodes=this.$refs.cashAddress.getData(),this.ptCashPrePay.serverTimes=this.$refs.cashServesItem.getData(),this.ptCashPrePay.waitMonths=this.$refs.cashWaitItem.getData()},getPtPhoneDoctor:function(){this.ptPhoneDoctor.cityCodes=this.$refs.docAddress.getData(),this.ptPhoneDoctor.serverTimes=this.$refs.docServesItem.getData(),this.ptPhoneDoctor.singleDuration=this.$refs.singleDurationItem.getData(),this.ptPhoneDoctor.selfPay=1===this.$refs.selfPayItem.getData(),this.ptPhoneDoctor.waitMonths=this.$refs.docWaitItem.getData()},getParams:function(){this.goodsInfo.ptCashPrePay?(this.getPtCashPrePay(),this.goodsInfo.ptCashPrePay=this.ptCashPrePay):delete this.goodsInfo.ptCashPrePay,this.goodsInfo.youCashPrePayId>=0&&delete this.goodsInfo.youCashPrePayId,this.goodsInfo.ptPhoneDoctor?(this.getPtPhoneDoctor(),this.goodsInfo.ptPhoneDoctor=this.ptPhoneDoctor):delete this.goodsInfo.ptPhoneDoctor,this.goodsInfo.youPhoneDoctorId>=0&&delete this.goodsInfo.youPhoneDoctorId,console.log(this.goodsInfo)},update:function(){var t=this;this.axios.put("/goods",this.goodsInfo).then(function(e){var s=Number(e.data.code);200===s?(t.$message(t.mes.success),t.$router.back()):t.$message(t.mes.busy)}).catch(function(e){console.log(e),t.$message(t.mes.busy)})},add:function(){var t=this;delete this.goodsInfo.reason,this.axios.post("/goods",this.goodsInfo).then(function(e){var s=Number(e.data.code);200===s?(t.$message(t.mes.success),t.$router.back()):t.$message(t.mes.busy)}).catch(function(e){console.log(e),t.$message(t.mes.busy)})},submit:function(){this.getParams(),this.isEdit?this.update():this.add()},back:function(){this.$router.back()}},watch:{checkedServes:function(t,e){this.goodsInfo.youBodyCheck=t.indexOf("体检服务")>-1?1:0,this.goodsInfo.youOutpatient=t.indexOf("门诊绿通")>-1?1:0,this.goodsInfo.youHospital=t.indexOf("住院绿通")>-1?1:0,this.goodsInfo.youOperation=t.indexOf("手术绿通")>-1?1:0,this.goodsInfo.youSecondMed=t.indexOf("二次诊疗")>-1?1:0,this.goodsInfo.ptCashPrePay=t.indexOf("押金垫付")>-1?1:0,this.goodsInfo.ptPhoneDoctor=t.indexOf("电话医生")>-1?1:0}}},O=S,T=(s("ce1f"),Object(l["a"])(O,a,o,!1,null,"518cd48f",null));T.options.__file="addOrEditGoods.vue";e["default"]=T.exports},efd2:function(t,e,s){var a=s("370e"),o=s("123b").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,o)}}}]);
//# sourceMappingURL=chunk-652da8d8.42f7bdca.js.map