(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66b604f4"],{"0741":function(e,t,a){},"3d2e":function(e,t,a){"use strict";var n=a("0741"),o=a.n(n);o.a},6933:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-main",{staticClass:"main"},[a("div",{staticClass:"comName"},[e._v("企业名称： "+e._s(e.comName))]),a("div",{staticClass:"btn-box"},[a("el-button",{on:{click:e.addGoods}},[e._v("新增商品")]),a("el-button",[e._v("商品计划管理")])],1),a("el-table",{attrs:{data:e.goodsInfoList}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"name",label:"商品名称"}}),a("el-table-column",{attrs:{prop:"youServers",label:"商品包含服务"}}),a("el-table-column",{attrs:{prop:"ptGoodsPlanName",label:"所属计划"}}),a("el-table-column",{attrs:{prop:"beginTime",label:"生效时间"}}),a("el-table-column",{attrs:{prop:"endTime",label:"失效时间"}}),a("el-table-column",{attrs:{label:"操作",width:"220"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.handleClick(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){e.undercarriage(t.row)}}},[e._v("下架")])]}}])})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.pageShow,expression:"pageShow"}],staticClass:"demonstration-box"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":100,layout:"total, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}})],1)],1)},o=[],l=a("dd36"),i={name:"goodsManage",data:function(){return{comName:this.$route.query.comName,goodsInfoList:[],currentPage:1,pageShow:!1}},created:function(){this.init()},methods:{handleClick:function(e){this.$router.push("addOrEditGoods?type=edit&id="+e.id)},undercarriage:function(){},addGoods:function(){this.$router.push("addOrEditGoods?type=add")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},init:function(){var e=this,t=this.$route.query.id,a={companyId:t,page:this.currentPage-1,size:20};Object(l["a"])("goods",a).then(function(t){e.goodsInfoList=t.data.data.list,e.pageShow=e.goodsInfoList.length>20}).catch(function(e){console.log(e)})}}},s=i,r=(a("3d2e"),a("2877")),c=Object(r["a"])(s,n,o,!1,null,"1c6df058",null);c.options.__file="goodsManage.vue";t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-66b604f4.a8908617.js.map