webpackJsonp([14],{"3pLG":function(n,a,t){var e=t("hvdx");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("rjj0")("595c8128",e,!0)},"DWb+":function(n,a,t){"use strict";function e(n){t("3pLG")}var r=t("Xxa5"),o=t.n(r),c=t("exGp"),i=t.n(c),A=t("wpcj"),d=t("62KO"),s=t("63CM"),f=t.n(s),C=t("/kga"),l=t("P9l9"),p=t("xJtg"),h={directives:{TransferDom:f.a},props:{type:{type:Number,default:1},card_code:{type:String,default:""},card_info:{type:Object,default:function(){return{background:"",exp_time_str:"",name:"",sku_id:"",vc_id:"",extra_data:{allow_car_type:[],detail_des:"",short_des:"",use_position:"",use_rule:""},use_info:{can_use:0,cancel:0,count:0,used:0}}}}},components:{Qrcode:A.a,Confirm:d.a,share:p.a,XDialog:C.a},data:function(){return{qrWidth:80,showNotice:!1,qrcode:{x_str:""},giveVcard:{given_customer:{cname:"",cavatar:""}},showBox:!1}},mounted:function(){console.log(this.$refs.qrcon.clientWidth,80808),this.qrWidth=this.$refs.qrcon.clientWidth},computed:{typeString:function(){var n=this,a=n.card_info.extra_data.allow_car_type,t="";return a.length?(a.map(function(n){return t+=n.name+"、"}),t.substring(0,t.length-1)):"暂无适用车型"},desStr:function(){return this.card_info.extra_data.detail_des||this.card_info.short_des},canUse:function(){return this.card_info.use_info.can_use||0},useCount:function(){return this.card_info.use_info.count||0},expTimeStr:function(){return this.card_info.exp_time_str||"无使用期限限制"},share_str:function(){var n="赠送给好友";return this.giveVcard.given_customer.cname&&(n="由"+this.giveVcard.given_customer.cname+"赠送"),n}},watch:{card_code:function(n,a){this.card_code=n,this.loadQrcode(),this.locadCardInfo()}},created:function(){this.init(),this.loadQrcode(),this.locadCardInfo()},methods:{share:function(){this.$refs.share.showBox=!0},showNoticeF:function(){if(this.card_code)return void this.showtoast("赠送的卡不能再次赠送哦");this.showNotice=!0},hide:function(){this.showBox=!1},locadCardInfo:function(){var n=this;return i()(o.a.mark(function a(){var t,e;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t=n,t.card_code){a.next=3;break}return a.abrupt("return");case 3:return a.next=5,l.a.getGiveVcardInfo({card_code:t.card_code});case 5:e=a.sent,t.giveVcard=e.data;case 7:case"end":return a.stop()}},a,n)}))()},init:function(){var n=this;return i()(o.a.mark(function a(){return o.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:case"end":return n.stop()}},a,n)}))()},QRrefresh:function(){var n=this;return i()(o.a.mark(function a(){return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:console.log("刷新"),n.loadQrcode();case 2:case"end":return a.stop()}},a,n)}))()},loadQrcode:function(){var n=this;return i()(o.a.mark(function a(){var t,e,r;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t=n,e={},t.card_info.list_no&&(e.list_no=t.card_info.list_no),t.card_code&&(e.card_code=t.card_code),e){a.next=6;break}return a.abrupt("return");case 6:return a.next=8,l.a.getMyVcard(e);case 8:r=a.sent,0==r.error&&(t.qrcode=r.data);case 10:case"end":return a.stop()}},a,n)}))()},confirm:function(){var n=this;return i()(o.a.mark(function a(){var t,e,r,c,i;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(t=n,0!==t.card_info.use_info.can_use){a.next=4;break}return t.$vux.toast.show({text:"卡片可用次数为0",type:"warn"}),a.abrupt("return");case 4:return a.next=6,l.a.giveVcard({list_no:t.$route.params.id});case 6:e=a.sent,e.error?t.$vux.toast.show({text:e.message,type:"error"}):(n.showBox=!n.showBox,console.log(n.$store),r=n.$store.state.vux.userinfo,c=r.cname?r.cname:"我",console.log(r),i="卡券",n.card_info&&n.card_info.sku&&n.card_info.sku.sku_use_rule&&(i=n.card_info.sku.sku_use_rule),c+="赠送了一次"+i+"。快去领取吧",t.setWxShare(c,"线上新玩法、小矮人汽车带你玩转共享"+i,t.site_url+"index.html#/giveVcard/"+e.data.card_code),t.$emit("updateData"));case 8:case"end":return a.stop()}},a,n)}))()}}},B=function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("div",{staticClass:"card-content cpts-onevcard"},[e("div",{staticClass:"card-box",class:{cardused:0===n.canUse}},[e("div",{staticClass:"card-info",style:{backgroundImage:"url()"}},[e("h1",[n._v(n._s(n.card_info.extra_data.use_position))]),n._v(" "),e("p",[n._v(n._s(n.desStr))])]),n._v(" "),e("div",{staticClass:"card-No"},[e("span",[n._v(n._s(n.card_info.list_no))])]),n._v(" "),e("div",{staticClass:"card-bottom"},[e("span",{directives:[{name:"show",rawName:"v-show",value:n.canUse,expression:"canUse"}]},[n._v(n._s(n.expTimeStr))]),n._v(" "),e("span",{staticClass:"count"},[n._v("\n        剩余\n        "),e("i",{staticClass:"used"},[n._v(n._s(n.canUse))]),n._v("/"+n._s(n.useCount)+" 次 ")])]),n._v(" "),e("div",{staticClass:"card-qrcode"},[e("div",{ref:"qrcon",staticClass:"card-qrcode-con"},[n.qrcode.x_str?e("qrcode",{attrs:{size:n.qrWidth,value:n.qrcode.x_str,type:"canvas"},nativeOn:{click:function(a){n.QRrefresh(a)}}}):n._e()],1)])]),n._v(" "),n.canUse?e("div",{staticClass:"share"},[e("div",{staticClass:"share_sl",on:{click:n.showNoticeF}},[e("i",{staticClass:"fa fa-gift fa-2x"}),n._v(" "),e("span",[n._v(n._s(n.share_str))])]),n._v(" "),e("div",{staticClass:"share_sr",on:{click:n.share}},[e("span",[n._v("分享领红包")]),n._v(" "),e("i",{staticClass:"fa fa-envelope-o fa-fw"}),n._v(" "),e("i",{staticClass:"fa fa-angle-right"})])]):n._e(),n._v(" "),e("div",{directives:[{name:"transfer-dom",rawName:"v-transfer-dom"}]},[e("confirm",{attrs:{title:"确认赠送?"},on:{"on-cancel":function(a){n.showNotice=!n.showNotice},"on-confirm":n.confirm},model:{value:n.showNotice,callback:function(a){n.showNotice=a},expression:"showNotice"}},[e("p",{staticStyle:{padding:"10px","text-align":"left"}},[n._v("确认将扣除您一次消费机会、点击确认转发给好友即可。"),e("br"),n._v("24小时好友未领取洗车卡会自动退回您的账户。")])])],1),n._v(" "),e("share",{ref:"share"}),n._v(" "),e("x-dialog",{attrs:{"hide-on-blur":"","dialog-style":{"max-width":"100%",width:"100%",height:"100%","background-color":"transparent"}},model:{value:n.showBox,callback:function(a){n.showBox=a},expression:"showBox"}},[e("img",{staticStyle:{width:"100%",height:"100%"},attrs:{src:t("gWSe")},on:{click:n.hide}})])],1)},v=[],u={render:B,staticRenderFns:v},m=u,g=t("VU/8"),E=e,b=g(h,m,!1,E,"data-v-72c7f485",null);a.a=b.exports},Qjvp:function(n,a,t){a=n.exports=t("FZ+f")(!0),a.push([n.i,"\n*[data-v-3d836bf7] {\n  margin: 0;\n  padding: 0;\n}\na[data-v-3d836bf7] {\n  text-decoration: none;\n  color: inherit;\n}\nh1[data-v-3d836bf7] {\n  font-size: 26px;\n}\nh2[data-v-3d836bf7] {\n  font-size: 16px;\n}\nh3[data-v-3d836bf7] {\n  font-size: 12px;\n}\nh4[data-v-3d836bf7] {\n  font-size: 12px;\n}\nli[data-v-3d836bf7] {\n  list-style: none;\n}\nhtml[data-v-3d836bf7],\nbody[data-v-3d836bf7],\n#app[data-v-3d836bf7] {\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n}\n.link-txt[data-v-3d836bf7] {\n  text-align: center;\n  margin-top: 20px;\n}\n.link-txt[data-v-3d836bf7],\n.link-txt a[data-v-3d836bf7] {\n  color: #a5a5a8;\n}\n.page-wrapper[data-v-3d836bf7] {\n  background: #f9f9f9;\n  height: auto;\n  width: 100%;\n}\n.weui-cells[data-v-3d836bf7] {\n  background: #fff;\n}\n.cpage-scroll[data-v-3d836bf7] {\n  height: 100vh;\n  overflow: scroll;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.cpage-scroll-pb50[data-v-3d836bf7] {\n  height: 100vh;\n  padding-bottom: 50px;\n  overflow: scroll;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.search-bar[data-v-3d836bf7] {\n  position: relative;\n  background: #fff;\n  z-index: 1000;\n  height: 44px;\n  margin-bottom: .1rem;\n}\n","",{version:3,sources:["/Users/sam/Desktop/work/code/xar/wx_mall_my/src/view/vcard/givenVcardDetail.vue"],names:[],mappings:";AACA;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,YAAY;EACZ,aAAa;EACb,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;;EAEE,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,aAAa;EACb,YAAY;CACb;AACD;EACE,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,iBAAiB;EACjB,wBAAwB;MACpB,oBAAoB;EACxB,kCAAkC;CACnC;AACD;EACE,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,wBAAwB;MACpB,oBAAoB;EACxB,kCAAkC;CACnC;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,qBAAqB;CACtB",file:"givenVcardDetail.vue",sourcesContent:["\n*[data-v-3d836bf7] {\n  margin: 0;\n  padding: 0;\n}\na[data-v-3d836bf7] {\n  text-decoration: none;\n  color: inherit;\n}\nh1[data-v-3d836bf7] {\n  font-size: 26px;\n}\nh2[data-v-3d836bf7] {\n  font-size: 16px;\n}\nh3[data-v-3d836bf7] {\n  font-size: 12px;\n}\nh4[data-v-3d836bf7] {\n  font-size: 12px;\n}\nli[data-v-3d836bf7] {\n  list-style: none;\n}\nhtml[data-v-3d836bf7],\nbody[data-v-3d836bf7],\n#app[data-v-3d836bf7] {\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n}\n.link-txt[data-v-3d836bf7] {\n  text-align: center;\n  margin-top: 20px;\n}\n.link-txt[data-v-3d836bf7],\n.link-txt a[data-v-3d836bf7] {\n  color: #a5a5a8;\n}\n.page-wrapper[data-v-3d836bf7] {\n  background: #f9f9f9;\n  height: auto;\n  width: 100%;\n}\n.weui-cells[data-v-3d836bf7] {\n  background: #fff;\n}\n.cpage-scroll[data-v-3d836bf7] {\n  height: 100vh;\n  overflow: scroll;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.cpage-scroll-pb50[data-v-3d836bf7] {\n  height: 100vh;\n  padding-bottom: 50px;\n  overflow: scroll;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.search-bar[data-v-3d836bf7] {\n  position: relative;\n  background: #fff;\n  z-index: 1000;\n  height: 44px;\n  margin-bottom: .1rem;\n}\n"],sourceRoot:""}])},"ZJ+t":function(n,a,t){"use strict";function e(n){t("qmwS")}Object.defineProperty(a,"__esModule",{value:!0});var r=t("Xxa5"),o=t.n(r),c=t("exGp"),i=t.n(c),A=t("P9l9"),d=t("Yz5L"),s=t("EyRS"),f=t("DWb+"),C={name:"VcardDetail",components:{recommendList:d.a,consumptionList:s.a,oneVcard:f.a},data:function(){return{qrcode:{},consumption:[],card_info:{},card_code:""}},activated:function(){this.fetchData()},computed:{},created:function(){this.init()},methods:{init:function(){var n=this;return i()(o.a.mark(function a(){var t,e;return o.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=n,a.next=3,A.a.getConsumptionList({type:"vcard",id:t.$route.params.id});case 3:e=a.sent,t.consumption=e.data.list,t.card_code=t.$route.params.card_code;case 6:case"end":return a.stop()}},a,n)}))()},fetchData:function(){var n=this;this.xarpost("Customer/getCustomer").then(function(a){var t=a.data;a.error,a.message;n.customer=t})},kaifa:function(){this.showtoast("功能开发中...")}}},l=function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("div",{staticClass:"page-vcard-detail"},[t("one-vcard",{attrs:{type:1,card_code:n.card_code}}),n._v(" "),t("consumption-list",{attrs:{consumptionList:n.consumption}}),n._v(" "),t("recommend-list")],1)},p=[],h={render:l,staticRenderFns:p},B=h,v=t("VU/8"),u=e,m=v(C,B,!1,u,"data-v-3d836bf7",null);a.default=m.exports},gWSe:function(n,a,t){n.exports=t.p+"static/img/notice-share.3e5daaa.png"},hvdx:function(n,a,t){a=n.exports=t("FZ+f")(!0),a.push([n.i,'\n*[data-v-72c7f485] {\n  margin: 0;\n  padding: 0;\n}\na[data-v-72c7f485] {\n  text-decoration: none;\n  color: inherit;\n}\nh1[data-v-72c7f485] {\n  font-size: 26px;\n}\nh2[data-v-72c7f485] {\n  font-size: 16px;\n}\nh3[data-v-72c7f485] {\n  font-size: 12px;\n}\nh4[data-v-72c7f485] {\n  font-size: 12px;\n}\nli[data-v-72c7f485] {\n  list-style: none;\n}\nhtml[data-v-72c7f485],\nbody[data-v-72c7f485],\n#app[data-v-72c7f485] {\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n}\n.link-txt[data-v-72c7f485] {\n  text-align: center;\n  margin-top: 20px;\n}\n.link-txt[data-v-72c7f485],\n.link-txt a[data-v-72c7f485] {\n  color: #a5a5a8;\n}\n.page-wrapper[data-v-72c7f485] {\n  background: #f9f9f9;\n  height: auto;\n  width: 100%;\n}\n.weui-cells[data-v-72c7f485] {\n  background: #fff;\n}\n.cpage-scroll[data-v-72c7f485] {\n  height: 100vh;\n  overflow: scroll;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.cpage-scroll-pb50[data-v-72c7f485] {\n  height: 100vh;\n  padding-bottom: 50px;\n  overflow: scroll;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.search-bar[data-v-72c7f485] {\n  position: relative;\n  background: #fff;\n  z-index: 1000;\n  height: 44px;\n  margin-bottom: .1rem;\n}\n.notice[data-v-72c7f485] {\n  color: #ffd100;\n  padding: 1rem;\n  padding-top: 3rem;\n  text-align: left;\n}\n.cpts-onevcard[data-v-72c7f485] {\n  background: #fafafa;\n  padding: 0.2rem 0.37rem;\n}\n.cpts-onevcard .card-box[data-v-72c7f485] {\n  color: #fff;\n  width: 100%;\n  height: 4.44rem;\n  background: #ff6642;\n  border-radius: 0.07rem;\n  position: relative;\n  overflow: hidden;\n}\n.cpts-onevcard .card-box.cardused[data-v-72c7f485] {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.cpts-onevcard .card-box .card-info[data-v-72c7f485] {\n  width: 70%;\n  padding: 0.33rem;\n  height: 2.4rem;\n  overflow: hidden;\n}\n.cpts-onevcard .card-box .card-info h1[data-v-72c7f485] {\n  margin-bottom: 0.05rem;\n  font-size: 0.56rem;\n}\n.cpts-onevcard .card-box .card-info p[data-v-72c7f485] {\n  padding: 0.06rem 0;\n  width: 3.6rem;\n  font-size: 0.22rem;\n}\n.cpts-onevcard .card-box .card-No[data-v-72c7f485] {\n  padding: 0.23rem;\n  padding-top: 0;\n  font-size: 0.38rem;\n  font-family: "\\9ED1\\4F53";\n}\n.cpts-onevcard .card-box .card-bottom[data-v-72c7f485] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.28rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 0.76rem;\n  line-height: 0.76rem;\n  padding: 0 0.23rem;\n}\n.cpts-onevcard .card-box .card-bottom .count i[data-v-72c7f485] {\n  margin: 0 0.05rem;\n}\n.cpts-onevcard .card-box .card-qrcode[data-v-72c7f485] {\n  position: absolute;\n  top: 0.1rem;\n  right: 0.1rem;\n  width: 2.4rem;\n  height: 2.4rem;\n  background: #fff;\n  border-radius: 0.07rem;\n  padding: 0.17rem;\n}\n.cpts-onevcard .card-box .card-qrcode img[data-v-72c7f485] {\n  width: 100%;\n}\n.cpts-onevcard .card-box .card-qrcode-con[data-v-72c7f485] {\n  width: 100%;\n  height: 100%;\n}\n.cpts-onevcard .share[data-v-72c7f485] {\n  margin-top: 0.25rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.cpts-onevcard .share .share_sl[data-v-72c7f485] {\n  width: 2.2rem;\n  height: 0.46rem;\n  padding: 0.05rem 0.1rem;\n  background: #26a96d;\n  border-radius: 0.04rem;\n  position: relative;\n}\n.cpts-onevcard .share .share_sl i[data-v-72c7f485] {\n  color: #fff;\n  font-size: 0.3rem;\n  margin-left: 0.1rem;\n  line-height: 0.46rem;\n}\n.cpts-onevcard .share .share_sl span[data-v-72c7f485] {\n  position: absolute;\n  background: #fff;\n  right: 0.06rem;\n  top: 0.06rem;\n  bottom: 0.06rem;\n  left: 0.6rem;\n  font-size: 0.26rem;\n  line-height: 0.45rem;\n  text-align: center;\n  color: #26a96d;\n}\n.cpts-onevcard .share .share_sr[data-v-72c7f485] {\n  height: 0.48rem;\n  padding: 0.1rem;\n  font-size: 0.26rem;\n  color: #272727;\n}\n.cpts-onevcard .share .share_sr .fa-angle-right[data-v-72c7f485] {\n  color: #a5a5a8;\n  font-size: 0.4rem;\n  vertical-align: -2px;\n}\n',"",{version:3,sources:["/Users/sam/Desktop/work/code/xar/wx_mall_my/src/components/vcard/oneVcard.vue"],names:[],mappings:";AACA;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,iBAAiB;CAClB;AACD;;;EAGE,YAAY;EACZ,aAAa;EACb,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;;EAEE,eAAe;CAChB;AACD;EACE,oBAAoB;EACpB,aAAa;EACb,YAAY;CACb;AACD;EACE,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,iBAAiB;EACjB,wBAAwB;MACpB,oBAAoB;EACxB,kCAAkC;CACnC;AACD;EACE,cAAc;EACd,qBAAqB;EACrB,iBAAiB;EACjB,wBAAwB;MACpB,oBAAoB;EACxB,kCAAkC;CACnC;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,qBAAqB;CACtB;AACD;EACE,eAAe;EACf,cAAc;EACd,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,wBAAwB;CACzB;AACD;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,gCAAgC;UACxB,wBAAwB;CACjC;AACD;EACE,WAAW;EACX,iBAAiB;EACjB,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,cAAc;EACd,mBAAmB;CACpB;AACD;EACE,iBAAiB;EACjB,eAAe;EACf,mBAAmB;EACnB,0BAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,SAAS;EACT,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,mBAAmB;EACnB,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,qCAAqC;EACrC,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;CACpB;AACD;EACE,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,cAAc;EACd,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,uBAAuB;EACvB,iBAAiB;CAClB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;CACxC;AACD;EACE,cAAc;EACd,gBAAgB;EAChB,wBAAwB;EACxB,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;CACpB;AACD;EACE,YAAY;EACZ,kBAAkB;EAClB,oBAAoB;EACpB,qBAAqB;CACtB;AACD;EACE,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;CAChB;AACD;EACE,eAAe;EACf,kBAAkB;EAClB,qBAAqB;CACtB",file:"oneVcard.vue",sourcesContent:['\n*[data-v-72c7f485] {\n  margin: 0;\n  padding: 0;\n}\na[data-v-72c7f485] {\n  text-decoration: none;\n  color: inherit;\n}\nh1[data-v-72c7f485] {\n  font-size: 26px;\n}\nh2[data-v-72c7f485] {\n  font-size: 16px;\n}\nh3[data-v-72c7f485] {\n  font-size: 12px;\n}\nh4[data-v-72c7f485] {\n  font-size: 12px;\n}\nli[data-v-72c7f485] {\n  list-style: none;\n}\nhtml[data-v-72c7f485],\nbody[data-v-72c7f485],\n#app[data-v-72c7f485] {\n  width: 100%;\n  height: 100%;\n  font-size: 14px;\n}\n.link-txt[data-v-72c7f485] {\n  text-align: center;\n  margin-top: 20px;\n}\n.link-txt[data-v-72c7f485],\n.link-txt a[data-v-72c7f485] {\n  color: #a5a5a8;\n}\n.page-wrapper[data-v-72c7f485] {\n  background: #f9f9f9;\n  height: auto;\n  width: 100%;\n}\n.weui-cells[data-v-72c7f485] {\n  background: #fff;\n}\n.cpage-scroll[data-v-72c7f485] {\n  height: 100vh;\n  overflow: scroll;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.cpage-scroll-pb50[data-v-72c7f485] {\n  height: 100vh;\n  padding-bottom: 50px;\n  overflow: scroll;\n  -ms-touch-action: pan-y;\n      touch-action: pan-y;\n  -webkit-overflow-scrolling: touch;\n}\n.search-bar[data-v-72c7f485] {\n  position: relative;\n  background: #fff;\n  z-index: 1000;\n  height: 44px;\n  margin-bottom: .1rem;\n}\n.notice[data-v-72c7f485] {\n  color: #ffd100;\n  padding: 1rem;\n  padding-top: 3rem;\n  text-align: left;\n}\n.cpts-onevcard[data-v-72c7f485] {\n  background: #fafafa;\n  padding: 0.2rem 0.37rem;\n}\n.cpts-onevcard .card-box[data-v-72c7f485] {\n  color: #fff;\n  width: 100%;\n  height: 4.44rem;\n  background: #ff6642;\n  border-radius: 0.07rem;\n  position: relative;\n  overflow: hidden;\n}\n.cpts-onevcard .card-box.cardused[data-v-72c7f485] {\n  -webkit-filter: grayscale(100%);\n          filter: grayscale(100%);\n}\n.cpts-onevcard .card-box .card-info[data-v-72c7f485] {\n  width: 70%;\n  padding: 0.33rem;\n  height: 2.4rem;\n  overflow: hidden;\n}\n.cpts-onevcard .card-box .card-info h1[data-v-72c7f485] {\n  margin-bottom: 0.05rem;\n  font-size: 0.56rem;\n}\n.cpts-onevcard .card-box .card-info p[data-v-72c7f485] {\n  padding: 0.06rem 0;\n  width: 3.6rem;\n  font-size: 0.22rem;\n}\n.cpts-onevcard .card-box .card-No[data-v-72c7f485] {\n  padding: 0.23rem;\n  padding-top: 0;\n  font-size: 0.38rem;\n  font-family: "黑体";\n}\n.cpts-onevcard .card-box .card-bottom[data-v-72c7f485] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 0.28rem;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  background-color: rgba(0, 0, 0, 0.2);\n  height: 0.76rem;\n  line-height: 0.76rem;\n  padding: 0 0.23rem;\n}\n.cpts-onevcard .card-box .card-bottom .count i[data-v-72c7f485] {\n  margin: 0 0.05rem;\n}\n.cpts-onevcard .card-box .card-qrcode[data-v-72c7f485] {\n  position: absolute;\n  top: 0.1rem;\n  right: 0.1rem;\n  width: 2.4rem;\n  height: 2.4rem;\n  background: #fff;\n  border-radius: 0.07rem;\n  padding: 0.17rem;\n}\n.cpts-onevcard .card-box .card-qrcode img[data-v-72c7f485] {\n  width: 100%;\n}\n.cpts-onevcard .card-box .card-qrcode-con[data-v-72c7f485] {\n  width: 100%;\n  height: 100%;\n}\n.cpts-onevcard .share[data-v-72c7f485] {\n  margin-top: 0.25rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.cpts-onevcard .share .share_sl[data-v-72c7f485] {\n  width: 2.2rem;\n  height: 0.46rem;\n  padding: 0.05rem 0.1rem;\n  background: #26a96d;\n  border-radius: 0.04rem;\n  position: relative;\n}\n.cpts-onevcard .share .share_sl i[data-v-72c7f485] {\n  color: #fff;\n  font-size: 0.3rem;\n  margin-left: 0.1rem;\n  line-height: 0.46rem;\n}\n.cpts-onevcard .share .share_sl span[data-v-72c7f485] {\n  position: absolute;\n  background: #fff;\n  right: 0.06rem;\n  top: 0.06rem;\n  bottom: 0.06rem;\n  left: 0.6rem;\n  font-size: 0.26rem;\n  line-height: 0.45rem;\n  text-align: center;\n  color: #26a96d;\n}\n.cpts-onevcard .share .share_sr[data-v-72c7f485] {\n  height: 0.48rem;\n  padding: 0.1rem;\n  font-size: 0.26rem;\n  color: #272727;\n}\n.cpts-onevcard .share .share_sr .fa-angle-right[data-v-72c7f485] {\n  color: #a5a5a8;\n  font-size: 0.4rem;\n  vertical-align: -2px;\n}\n'],sourceRoot:""}])},qmwS:function(n,a,t){var e=t("Qjvp");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t("rjj0")("7d324aba",e,!0)}});