webpackJsonp([27],{"2mp3":function(e,t,n){"use strict";function r(e){n("ivBX")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("Dd8w"),o=n.n(a),c=n("NYxO"),s=n("wpcj"),i={directives:{},components:{Qrcode:s.a},name:"myvcard",data:function(){return{x_now:0,x_str:"",timer:null,show_qrcode:!1}},computed:o()({},Object(c.c)({openid:function(e){return e.vux.openid}})),created:function(){console.log("hahahah");var e=this;e.fetchData(),e.timer=setInterval(function(){var t=Date.parse(new Date)/1e3;e.x_now+30<t&&(e.x_now=t,e.fetchData())},1e3)},activated:function(){},deactivated:function(){clearInterval(this.timer)},methods:{fetchData:function(){var e=this;e.xarpost("AllQrcode/getMyVcard").then(function(t){var n=t.data,r=t.error,a=t.message;0==r?n?(e.x_str=n.x_str,e.x_now=n.x_now,e.show_qrcode=!0):(e.$vux.alert.show({title:"小矮人",content:"您还没有可以使用的洗车卡，现在带您去购买。",onHide:function(){e.$router.push("/vcard/2")}}),clearInterval(e.timer)):10001==r&&(clearInterval(e.timer),e.showtoast(a))})}}},d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"myvcard"}},[n("div",{staticClass:"qrcode"},[e.show_qrcode?n("div",[n("qrcode",{attrs:{value:e.x_str,type:"canvas"}}),e._v(" "),n("p",[e._v("请将此二维码出示给店员验证即可")]),e._v(" "),n("p",[e._v("二维码30秒内有效，30秒自动更新。")])],1):e._e()])])},v=[],u={render:d,staticRenderFns:v},l=u,f=n("VU/8"),p=r,m=f(i,l,!1,p,"data-v-60a5e40b",null);t.default=m.exports},ivBX:function(e,t,n){var r=n("rJC8");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n("rjj0")("156c0a14",r,!0)},rJC8:function(e,t,n){t=e.exports=n("FZ+f")(!0),t.push([e.i,"\n.qrcode[data-v-60a5e40b] {\n  text-align: center;\n  padding: 30px;\n  background-color: #fff;\n}\n","",{version:3,sources:["/Users/sam/Desktop/work/code/xar/wx_mall_my/src/view/vcard/myvcard.vue"],names:[],mappings:";AACA;EACE,mBAAmB;EACnB,cAAc;EACd,uBAAuB;CACxB",file:"myvcard.vue",sourcesContent:["\n.qrcode[data-v-60a5e40b] {\n  text-align: center;\n  padding: 30px;\n  background-color: #fff;\n}\n"],sourceRoot:""}])}});