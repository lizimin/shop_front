webpackJsonp([30],{"3QXj":function(e,n,t){"use strict";function o(e){t("4QY9")}Object.defineProperty(n,"__esModule",{value:!0});var a=t("Xxa5"),i=t.n(a),s=t("exGp"),r=t.n(s),d=t("GQaK"),c=t("P9l9"),l=t("HqzV"),p=t("N580"),A={name:"catSelect",components:{searchBar:p.a,Search:l.a},data:function(){return{ParentCatList:[],listHeight:[],scrollY:0,conHeight:0}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"],this.init()},mounted:function(){var e=document.getElementsByTagName("body");console.log(e[0].clientHeight),this.conHeight=e[0].clientHeight-95},methods:{init:function(){var e=this;return r()(i.a.mark(function n(){var t,o;return i.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e,n.next=3,c.a.getProductList({cat_id:0});case 3:o=n.sent,console.log(o),t.ParentCatList=o.data.list,e.$nextTick(function(){e._initScroll(),e._calculateHeight()});case 7:case"end":return n.stop()}},n,e)}))()},_initScroll:function(){var e=this;this.meunScroll=new d.a(this.$refs.menuWrapper,{click:!0}),this.goodsScroll=new d.a(this.$refs.catWrapper,{click:!0,probeType:3}),this.goodsScroll.on("scroll",function(n){n.y<=0&&(e.scrollY=Math.abs(Math.round(n.y)))})},selectMenu:function(e,n){if(n._constructed){var t=this.$refs.goodList,o=t[e];this.goodsScroll.scrollToElement(o,300)}},selectGood:function(e){var n=this;console.log(e);var t=e.sku_code;e.goods_name;"vcard"===e.goods_redirect_type?n.$router.push("/vcard/"+e.pro_id+"?code="+t):n.$router.push("/goods/"+e.pro_id+"?code="+t)},_calculateHeight:function(){var e=this.$refs.goodList,n=0;this.listHeight.push(n);for(var t=0;t<e.length;t++){n+=e[t].clientHeight,this.listHeight.push(n)}},selectSecCat:function(e){var n=this;console.log(e);var t=e;n.s_index=e,n.currentFistCat=t},_followScroll:function(e){var n=this.$refs.menuList,t=n[e];this.meunScroll.scrollToElement(t,300,0,-100)}},computed:{goodsList:function(){return[]},currentIndex:function(){for(var e=0;e<this.listHeight.length;e++){var n=this.listHeight[e],t=this.listHeight[e+1];if(!t||this.scrollY>=n&&this.scrollY<t)return this._followScroll(e),e}return 0}}},g=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"page-shop"},[t("div",{staticClass:"search-bar"},[t("search-bar")],1),e._v(" "),t("div",{staticClass:"goods",style:{height:e.conHeight+"px"}},[t("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[t("ul",e._l(e.ParentCatList,function(n,o){return t("li",{ref:"menuList",refInFor:!0,staticClass:"menu-item",class:{current:e.currentIndex===o},on:{click:function(n){e.selectMenu(o,n)}}},[t("div",{staticClass:"text "},[t("span",{staticClass:"icon",class:e.classMap[0]}),e._v(e._s(n.cat_name)+"\n          ")])])}))]),e._v(" "),t("div",{ref:"catWrapper",staticClass:"cat-wrapper"},[t("ul",e._l(e.ParentCatList,function(n){return t("li",{ref:"goodList",refInFor:!0,staticClass:"good-list"},[t("h3",{staticClass:"title"},[e._v(e._s(n.cat_name))]),e._v(" "),t("ul",{staticClass:"good-list-con"},e._l(n.product,function(n){return t("li",{staticClass:"good-item ",on:{click:function(t){e.selectGood(n,t)}}},[t("div",{staticClass:"good-item-hd"},[t("img",{attrs:{src:n.photo}})]),e._v(" "),t("div",{staticClass:"good-item-bd"},[t("p",[e._v(" "+e._s(n.goods_name))])])])}))])}))])])])},m=[],h={render:g,staticRenderFns:m},f=h,u=t("VU/8"),B=o,C=u(A,f,!1,B,"data-v-9c34d222",null);n.default=C.exports},"4QY9":function(e,n,t){var o=t("sSf4");"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t("rjj0")("1b5fa115",o,!0)},sSf4:function(e,n,t){n=e.exports=t("FZ+f")(!0),n.push([e.i,"\n.page-shop .goods[data-v-9c34d222] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n}\n.page-shop .goods .menu-wrapper[data-v-9c34d222] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 2rem;\n          flex: 0 0 2rem;\n  width: 80px;\n  background: #fff;\n}\n.page-shop .goods .menu-wrapper .menu-item[data-v-9c34d222] {\n  padding: 0.1rem;\n  line-height: 0.6rem;\n  border-bottom: 1px solid #eee;\n}\n.page-shop .goods .menu-wrapper .menu-item .text[data-v-9c34d222] {\n  padding: 0.1rem;\n}\n.page-shop .goods .menu-wrapper .menu-item.current[data-v-9c34d222] {\n  position: relative;\n  background: #f3f4f5;\n}\n.page-shop .goods .menu-wrapper .menu-item.current .text[data-v-9c34d222] {\n  border: none;\n}\n.page-shop .goods .cat-wrapper[data-v-9c34d222] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 5.4rem;\n          flex: 0 0 5.4rem;\n}\n.page-shop .goods .cat-wrapper h3[data-v-9c34d222] {\n  line-height: 2;\n  padding-left: 0.1rem;\n  font-size: 0.3rem;\n  margin: 0.1rem 0;\n}\n.page-shop .goods .cat-wrapper .good-list-con[data-v-9c34d222] {\n  background: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-bottom: 0.14rem;\n}\n.page-shop .goods .cat-wrapper .good-list-con .good-item[data-v-9c34d222] {\n  width: 1.5rem;\n  text-align: center;\n  padding: 0.14rem;\n}\n.page-shop .goods .cat-wrapper .good-list-con .good-item-hd[data-v-9c34d222] {\n  width: 1.5rem;\n  height: 1.5rem;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.page-shop .goods .cat-wrapper .good-list-con .good-item-hd img[data-v-9c34d222] {\n  width: 100%;\n}\n.page-shop .goods .cat-wrapper .good-list-con .good-item-bd[data-v-9c34d222] {\n  font-size: 0.24rem;\n  height: 1rem;\n  overflow: hidden;\n  text-align: left;\n}\n","",{version:3,sources:["/Users/sam/Desktop/work/code/xar/wx_mall_my/src/view/shop/catSelect.vue"],names:[],mappings:";AACA;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,iBAAiB;CAClB;AACD;EACE,oBAAoB;MAChB,mBAAmB;UACf,eAAe;EACvB,YAAY;EACZ,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,oBAAoB;EACpB,8BAA8B;CAC/B;AACD;EACE,gBAAgB;CACjB;AACD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,aAAa;CACd;AACD;EACE,oBAAoB;MAChB,qBAAqB;UACjB,iBAAiB;CAC1B;AACD;EACE,eAAe;EACf,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;CAClB;AACD;EACE,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,oBAAoB;MAChB,gBAAgB;EACpB,wBAAwB;CACzB;AACD;EACE,cAAc;EACd,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,cAAc;EACd,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE,YAAY;CACb;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,iBAAiB;CAClB",file:"catSelect.vue",sourcesContent:["\n.page-shop .goods[data-v-9c34d222] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  overflow: hidden;\n}\n.page-shop .goods .menu-wrapper[data-v-9c34d222] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 2rem;\n          flex: 0 0 2rem;\n  width: 80px;\n  background: #fff;\n}\n.page-shop .goods .menu-wrapper .menu-item[data-v-9c34d222] {\n  padding: 0.1rem;\n  line-height: 0.6rem;\n  border-bottom: 1px solid #eee;\n}\n.page-shop .goods .menu-wrapper .menu-item .text[data-v-9c34d222] {\n  padding: 0.1rem;\n}\n.page-shop .goods .menu-wrapper .menu-item.current[data-v-9c34d222] {\n  position: relative;\n  background: #f3f4f5;\n}\n.page-shop .goods .menu-wrapper .menu-item.current .text[data-v-9c34d222] {\n  border: none;\n}\n.page-shop .goods .cat-wrapper[data-v-9c34d222] {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 5.4rem;\n          flex: 0 0 5.4rem;\n}\n.page-shop .goods .cat-wrapper h3[data-v-9c34d222] {\n  line-height: 2;\n  padding-left: 0.1rem;\n  font-size: 0.3rem;\n  margin: 0.1rem 0;\n}\n.page-shop .goods .cat-wrapper .good-list-con[data-v-9c34d222] {\n  background: #fff;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-bottom: 0.14rem;\n}\n.page-shop .goods .cat-wrapper .good-list-con .good-item[data-v-9c34d222] {\n  width: 1.5rem;\n  text-align: center;\n  padding: 0.14rem;\n}\n.page-shop .goods .cat-wrapper .good-list-con .good-item-hd[data-v-9c34d222] {\n  width: 1.5rem;\n  height: 1.5rem;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.page-shop .goods .cat-wrapper .good-list-con .good-item-hd img[data-v-9c34d222] {\n  width: 100%;\n}\n.page-shop .goods .cat-wrapper .good-list-con .good-item-bd[data-v-9c34d222] {\n  font-size: 0.24rem;\n  height: 1rem;\n  overflow: hidden;\n  text-align: left;\n}\n"],sourceRoot:""}])}});