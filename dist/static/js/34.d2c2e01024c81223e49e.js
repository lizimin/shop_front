webpackJsonp([34],{"/ozl":function(t,i,n){"use strict";function e(t){n("rwj/")}Object.defineProperty(i,"__esModule",{value:!0});var a=n("HqzV"),o=n("N580"),c=n("Yz5L"),r={components:{searchBar:o.a,Search:a.a,recommendList:c.a},name:"activity-detail",data:function(){return{icon:"success",art_id:0,activity:{art_title:"",create_time:"",cont_text:""},msg:"123"}},computed:{},watch:{$route:function(t,i){var n=t.params.art_id;this.art_id=parseInt(n),this.fetchData()}},created:function(){console.log(123),this.art_id=this.$route.params.art_id,this.fetchData()},methods:{fetchData:function(){var t=this;this.xarpost("Activity/getActivity",{art_id:t.art_id}).then(function(i){var n=i.data,e=i.error;i.message;0==e&&n&&(t.activity=n)})}}},s=function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:" page-activity-detail cpage-scroll-pb50",attrs:{id:"detail"}},[n("div",{staticClass:"search-bar"},[n("search-bar")],1),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"content-title"},[t._v("\n\t\t\t\t"+t._s(t.activity.art_title)+"\n\t\t\t")]),t._v(" "),n("div",{staticClass:"content-info"},[n("div",{staticClass:"time"},[t._v(t._s(t.activity.create_time))]),t._v(" "),n("div",{staticClass:"author"},[t._v("小矮人汽车")])]),t._v(" "),n("div",{staticClass:"content-txt",domProps:{innerHTML:t._s(t.activity.cont_text)}}),t._v(" "),t._m(0,!1,!1),t._v(" "),n("recommend-list",{staticStyle:{width:"100%"}}),t._v(" "),n("common-bottom")],1)])},l=[function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"content-txt"},[n("p",[n("img",{attrs:{src:"http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/1.jpg",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/2.jpg",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/3.jpg",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/4.jpg",alt:""}})]),t._v(" "),n("p",[n("img",{attrs:{src:"http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/5.jpg",alt:""}})])])}],p={render:s,staticRenderFns:l},m=p,A=n("VU/8"),d=e,g=A(r,m,!1,d,null,null);i.default=g.exports},SJlO:function(t,i,n){i=t.exports=n("FZ+f")(!0),i.push([t.i,"\n.page-activity-detail {\n  background: #fff;\n  padding: 0.4rem 0.3rem;\n}\n.page-activity-detail .content-title {\n  font-size: 0.5rem;\n  margin-top: 0.2rem;\n  color: #000;\n}\n.page-activity-detail .content-info {\n  padding: 0.1rem 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  line-height: .5rem;\n  font-size: .3rem;\n}\n.page-activity-detail .content-info .time {\n  color: #888888;\n}\n.page-activity-detail .content-info .author {\n  color: #576b95;\n  margin-left: 0.1rem;\n}\n.page-activity-detail .content-txt {\n  color: #111111;\n  font-size: .34rem;\n}\n.page-activity-detail .content-txt img {\n  width: 6.9rem;\n  margin: 0 auto;\n  display: block;\n}\n","",{version:3,sources:["/Users/sam/Desktop/work/code/xar/wx_mall_my/src/view/activity/detail.vue"],names:[],mappings:";AACA;EACE,iBAAiB;EACjB,uBAAuB;CACxB;AACD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,YAAY;CACb;AACD;EACE,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,eAAe;CAChB;AACD;EACE,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,kBAAkB;CACnB;AACD;EACE,cAAc;EACd,eAAe;EACf,eAAe;CAChB",file:"detail.vue",sourcesContent:["\n.page-activity-detail {\n  background: #fff;\n  padding: 0.4rem 0.3rem;\n}\n.page-activity-detail .content-title {\n  font-size: 0.5rem;\n  margin-top: 0.2rem;\n  color: #000;\n}\n.page-activity-detail .content-info {\n  padding: 0.1rem 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  line-height: .5rem;\n  font-size: .3rem;\n}\n.page-activity-detail .content-info .time {\n  color: #888888;\n}\n.page-activity-detail .content-info .author {\n  color: #576b95;\n  margin-left: 0.1rem;\n}\n.page-activity-detail .content-txt {\n  color: #111111;\n  font-size: .34rem;\n}\n.page-activity-detail .content-txt img {\n  width: 6.9rem;\n  margin: 0 auto;\n  display: block;\n}\n"],sourceRoot:""}])},"rwj/":function(t,i,n){var e=n("SJlO");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);n("rjj0")("255233ee",e,!0)}});