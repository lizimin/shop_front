webpackJsonp([25],{"97MU":function(t,e,a){"use strict";function s(t){a("aNeC")}Object.defineProperty(e,"__esModule",{value:!0});var n=(a("NYxO"),a("wpcj")),o=a("3Lt7"),r=a("YxJB"),i=a("QTi7"),d={directives:{},components:{Qrcode:n.a,FlexboxItem:o.a,Flexbox:r.a,Box:i.a},name:"myvcard",data:function(){return{out_trade_no:"",use_record_list:[]}},computed:{},created:function(){this.out_trade_no=this.$route.query.out_trade_no,this.fetchData()},activated:function(){},deactivated:function(){},methods:{fetchData:function(){var t=this;t.xarpost("Vcard/getMyVcard",{out_trade_no:this.out_trade_no}).then(function(e){var a=e.data,s=e.error;e.message;0==s&&(t.use_record_list=a,console.log(a))})}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"myvcard"}},t._l(t.use_record_list,function(e,s){return a("box",{key:s,staticStyle:{"margin-top":"10px",padding:"0 10px","background-color":"#fff"}},[a("flexbox",{staticStyle:{padding:"5px"},attrs:{gutter:0,wrap:"wrap"}},[a("flexbox-item",{attrs:{span:.5}},[a("span",{staticClass:"des"},[t._v("消费时间：")])]),t._v(" "),a("flexbox-item",{attrs:{span:.5}},[a("div",{staticClass:"des-value"},[t._v("6666")])]),t._v(" "),a("flexbox-item",{attrs:{span:.5}},[a("span",{staticClass:"des"},[t._v("消费地点：")])]),t._v(" "),a("flexbox-item",{attrs:{span:.5}},[a("div",{staticClass:"des-value"},[t._v("777777776")])]),t._v(" "),a("flexbox-item",{attrs:{span:.5}},[a("span",{staticClass:"des"},[t._v("洗车卡编号：")])]),t._v(" "),a("flexbox-item",{attrs:{span:.5}},[a("div",{staticClass:"des-value"},[t._v("777777776")])]),t._v(" "),a("flexbox-item",{attrs:{span:.5}},[a("span",{staticClass:"des"},[t._v("剩余次数：")])]),t._v(" "),a("flexbox-item",{attrs:{span:.5}},[a("div",{staticClass:"des-value"},[t._v("777777776")])])],1)],1)}))},l=[],u={render:c,staticRenderFns:l},v=u,f=a("VU/8"),_=s,p=f(d,v,!1,_,"data-v-4f23f1be",null);e.default=p.exports},TLqN:function(t,e,a){e=t.exports=a("FZ+f")(!0),e.push([t.i,"\n.des[data-v-4f23f1be]{\n  color: #888888;\n}\n.des-value[data-v-4f23f1be]{\n  float: right;\n}\n","",{version:3,sources:["/Users/sam/Desktop/work/code/xar/wx_mall_my/src/view/vcard/useRecord.vue"],names:[],mappings:";AACA;EACE,eAAe;CAChB;AACD;EACE,aAAa;CACd",file:"useRecord.vue",sourcesContent:["\n.des[data-v-4f23f1be]{\n  color: #888888;\n}\n.des-value[data-v-4f23f1be]{\n  float: right;\n}\n"],sourceRoot:""}])},aNeC:function(t,e,a){var s=a("TLqN");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("d132de6c",s,!0)}});