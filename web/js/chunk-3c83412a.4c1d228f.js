(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c83412a"],{"52ba":function(t,e,s){"use strict";var i=s("fadf"),a=s.n(i);a.a},"60d6":function(t,e,s){},"65b8":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"address-group"},[s("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.province,callback:function(e){t.province=e},expression:"province"}},t._l(t.provinceList,function(t){return s("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})})),s("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},t._l(t.cityList,function(t){return s("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})})),s("el-select",{staticClass:"address-input",style:t.seletStyle,attrs:{placeholder:"全部"},model:{value:t.country,callback:function(e){t.country=e},expression:"country"}},t._l(t.countryList,function(t){return s("el-option",{key:t.id,attrs:{label:t.areaName,value:t.id}})}))],1)},a=[],r=(s("cadf"),s("551c"),s("097d"),s("7622")),n=s("dd36"),c=!0,l={name:"userAddress",props:["seletStyle","defaultValue"],data:function(){return{provinceList:[],cityList:[],countryList:[],province:"",city:"",country:""}},mounted:function(){this.handleProvince()},methods:{handleProvince:function(){this.provinceList=r["a"]},handleData:function(t,e,s){var i=this;t&&Object(n["a"])("area",{parentId:t}).then(function(t){if(t.data.code=i.ok)return s&&s(t.data.data),"province"===e?i.cityList=t.data.data:i.countryList=t.data.data;i.$message("系统繁忙，请稍后再试")}).catch(function(t){console.log(t),i.$message("系统繁忙，请稍后再试!")})},getData:function(){var t=this,e=this.provinceList.filter(function(e){return t.province===e.id}),s=this.cityList.filter(function(e){return t.city===e.id}),i=this.countryList.filter(function(e){return t.country===e.id}),a=e.length>0?e[0].areaCode:"",r=s.length>0?s[0].areaCode:"",n=i.length>0?i[0].areaCode:"",c={province:a,city:r,country:n};return c}},watch:{defaultValue:function(){var t=this;if(this.defaultValue){var e=this.defaultValue,s=e.province,i=e.city,a=e.country;if(c=!1,!s)return c=!0;var r=this.lodash.filter(this.provinceList,function(t){return t.areaCode==s});this.province=r[0].id,Object(n["a"])("area",{parentId:this.province}).then(function(e){if(e.data.code=t.ok){if(t.cityList=e.data.data,!i)return c=!0;var s=t.lodash.filter(t.cityList,function(t){return t.areaCode==i});t.city=s[0].id,Object(n["a"])("area",{parentId:t.city}).then(function(e){if(e.data.code=t.ok){if(t.countryList=e.data.data,!a)return c=!0;var s=t.lodash.filter(t.countryList,function(t){return t.areaCode==a});t.country=s[0].id,c=!0}})}})}},province:function(t,e){t&&c&&(this.cityList=[],this.countryList=[],this.city="",this.country="",this.handleData(t,"province"))},city:function(t,e){t&&c&&(this.countryList=[],this.country="",this.handleData(t,"city"))},country:function(t,e){this.$emit("countryChange",this.getData())}}},o=l,d=(s("52ba"),s("2877")),u=Object(d["a"])(o,i,a,!1,null,"29084cf2",null);u.options.__file="address.vue";e["a"]=u.exports},7174:function(t,e,s){"use strict";var i=s("60d6"),a=s.n(i);a.a},7622:function(t,e,s){"use strict";s.d(e,"a",function(){return i});var i=JSON.parse(sessionStorage.addressProvince)},b8aa:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"userPathChose"},[s("h3",{staticClass:"title"},[t._v("用户姓名："),s("span",[t._v(t._s(t.userName))])]),s("div",{staticClass:"info"},[s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("证件号码:")]),s("div",[t._v(t._s(t.cardNum))])]),s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("手机号码:")]),s("div",[t._v(t._s(t.mobile))])]),s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("用户地区:")]),s("div",[t._v(t._s(t.address))])]),s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("预约手机号码:")]),s("div",[t._v(t._s(t.orderMobile))])]),s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("所患疾病:")]),s("div",[t._v(t._s(t.code))])]),s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("期望就诊地区:")]),s("div",[t._v(t._s(t.orderAddress))])]),s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("预约医院:")]),s("div",[t._v(t._s(t.hospital))])]),s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("预约科室:")]),s("div",[t._v(t._s(t.offices))])]),s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("订单编号:")]),s("div",[t._v(t._s(t.orderNum))])]),s("div",{staticClass:"list"},[t._m(0),s("user-address",{attrs:{seletStyle:"width:220px"}})],1),s("div",{staticClass:"list"},[t._m(1),s("el-input",{staticClass:"com-input",attrs:{placeholder:"请输入指定医生"},model:{value:t.orderUser,callback:function(e){t.orderUser=e},expression:"orderUser"}}),s("div",{staticClass:"blue",on:{click:t.dateDetail}},[t._v("点击查看人员排班情况")])],1),s("div",{staticClass:"list"},[s("div",{staticClass:"left"},[t._v("派单备注:")]),s("div",[t._v(t._s(t.remark))])]),s("div",{staticClass:"list"},[s("div",{staticClass:"left"}),s("div",[s("el-button",[t._v("派单")]),s("el-button",{on:{click:t.back}},[t._v("返回上一步")])],1)])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left require"},[s("span",[t._v("接待人员地区:")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"left require"},[s("span",[t._v("接待人员姓名:")])])}],r=s("65b8"),n={name:"userPathChose",data:function(){return{userName:"龙先生",cardNum:"145114520",mobile:"1395458451",code:"感冒",orderMobile:"12547845214",address:"北京市-北京市-北京市",orderAddress:"北京市-北京市-朝阳市",hospital:"首都医科大学附属北京朝阳医院",offices:"内科-消化内科",orderNum:"1452124245120",orderUser:"",remark:"无"}},components:{UserAddress:r["a"]},methods:{back:function(){this.$router.back(-1)},dateDetail:function(){this.$router.push("userDate?type=choose")}}},c=n,l=(s("7174"),s("2877")),o=Object(l["a"])(c,i,a,!1,null,"3a6db7ea",null);o.options.__file="userPathChose.vue";e["default"]=o.exports},fadf:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3c83412a.4c1d228f.js.map