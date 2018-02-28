<template>
  <div id="goods" ref="good" class="vcard page-goods cpage-scroll-pb50 go-back-top">
      <div class="share-btn" @click="showshare=!showshare" v-show="currentProSku&&currentProSku.share_amount!==0">
        <div class="avatar">

        <span class="fa fa-rmb "></span>
        </div>
        <div class="txt">
        
          <span class="" >赚¥{{currentProSku.share_amount}}</span>
        </div>
      </div>
    <!-- header -->
    <div class="header">
      <banner-swiper :imgList="proInfo.pro_img"></banner-swiper>
      <div class="near-min">最近门店</div>
      <div class="sanjiao"></div>
      <div class="sanjiao1"></div>
      <div class="near">
        <router-link to="/tmap">
          <span class="fa fa-map-marker"></span> 您附近有{{nearShopList.length}}家店</router-link>
      </div>
    </div>
    <!-- nearshop -->
    <nearShop :lat="lat" :lng="lng"></nearShop>

    <!-- shopcart -->
    <shopcart v-if="proInfo&&proInfo.pro_type===0" :proInfo="proInfo" @updateSku="updateSku"></shopcart>
    <vcard-shopcart v-if="proInfo&&proInfo.pro_type===1" :proInfo="proInfo" @updateSku="updateSku"></vcard-shopcart>
  
    <!-- recommend -->
    <recommend-list></recommend-list>
    <!-- pro-content -->
    <div class="comment">

      <commentlist :limit="3" :pro_id="pro_id"></commentlist>
    </div>
    <div class="pro-content">
      <div class="hd">
        产品详情
      </div>
      <div class="bd" v-html="proInfo.pro_content"></div>
     
    </div>
      <!-- comment -->
     <common-bottom></common-bottom>
    <!-- pay-line -->
    <div class="pay-menu-line">
      <div class="btn-share">
      </div>
      <div class="btn-present">赠送给好友</div>
      <div class="btn-pay" @click="buyVcard">
        立即购买
      </div>
    </div>
    <share ref="share"></share>
      <div v-transfer-dom>
      <slide-up v-model="showshare" :cancelText="'邀请好友'" :titleText="'收益须知'">
         <div class="slide-content-group" style="text-align:center;" >
           <p >
              <qrcode :value="sharelink" type="img"></qrcode>
           </p>
            <p style="margin:.1rem;">你每成功邀请一个好友购买，将获得相应的奖励</p>
            <p style="margin:.1rem;">
              奖励金额实时存入我的收益，请前往我的进行查看</p>
          </div>
      </slide-up>

    </div>
  </div>
</template>

<script>
import {
  XButton,
  Box,
  Swiper,
  Qrcode,
  Flexbox,
  TransferDom,
  FlexboxItem,
  XNumber,
  Group
} from "vux";

import api from "api/api";

import nearShop from "../../components/goods/nearShop";
import commentlist from "../../components/comment/commentlist";
import share from "../../components/share/index";
import recommendList from "../../components/goods/recommend";
import shopcart from "components/goods/shopcart";
import vcardShopcart from "components/goods/vcardShopcart";
import bannerSwiper from "components/goods/bannerSwiper";

import slideUp from "components/common/slideUp";

import { mapGetters } from "vuex";
export default {
  name: "goods",
  directives: {
    TransferDom
  },
  components: {
    XButton,
    Box,
    nearShop,
    Swiper,
    Flexbox,
    FlexboxItem,
    Qrcode,
    commentlist,
    share,
    recommendList,
    bannerSwiper,
    XNumber,
    shopcart,
    slideUp,
    vcardShopcart,

    Group
  },
  data() {
    return {
      pro_id: 0,
      pro_code: "",
      sku_pro: {},
      nearShop: {},
      nearShopList: [],
      commentInfo: {},
      lat: 0,
      lng: 0,
      proInfo: {
        pro_content: "",
        pro_img: []
      },
      currentProSku: {},
      showshare: false,
      sharelink: ""
    };
  },
  created() {
    this.getNearShop();
    this.init();
  },
  mounted() {
    this.shareElement = document.getElementsByClassName("page-goods")[0];
    // console.log(this.shareElement);
    this.shareElement.addEventListener("scroll", this.handleScrolling);
  },
  computed: {
    ...mapGetters(["userInfo"]),
    productId: function() {
      return parseInt(this.$route.params.id) || 0;
    }
  },
  watch: {
    proInfo: function(newvalue, oldvalue) {
      const { pro_name, pro_dep, pro_id } = this.proInfo;
      this.pro_id = pro_id
      const { code, referer } = this.$route.query;
      var { customer_id } = this.userInfo;
      // if (referer != undefined && parseInt(referer) > 0) customer_id = referer;
      const sharename = pro_name || "线上优惠卡上线啦";
      const gooddep = pro_dep || "全省通用，随意分享。";
      const title = pro_name ? `${pro_name}-小矮人汽车` : "小矮人汽车";
      document.title = title;
      this.sharelink = `${
        this.site_url
      }index.html#/goods/${pro_id}?code=${code}&referer=${customer_id}`;
      // console.log(`${this.site_url}index.html#/goods/${pro_id}?code=${code}`);
      this.setWxShare(
        sharename,
        gooddep,
        `${
          this.site_url
        }index.html#/goods/${pro_id}?code=${code}&referer=${customer_id}`
      );
    },
    $route: async function() {
      const that = this;
      that.$vux.loading.show();
      await that.init();
      // that.proInfo = {
      //   pro_content: '',
      //   pro_img: []
      // };
      that.$vux.loading.hide();
      that.startScrollToTop();
    }
  },
  methods: {
    handleScrolling(e) {
      clearInterval(this.scrollTimer);
      // console.log(e.target.scrollTop);
      this.scrollTimer = setTimeout(() => {
        if (this.shareElement) {
          document.getElementsByClassName("share-btn")[0].style.top =
            e.target.scrollTop * 1 + 30 + "px";
        } else {
          clearInterval(this.scrollTimer);
        }
      }, 500);
    },
    async init() {
      var self = this;
      const productResult = await api.getProduct({
        pro_id: self.$route.params.id
      });
      if (productResult.data) {
        self.proInfo = productResult.data;
      }
    },
    updateSku: function(proSku) {
      this.currentProSku = proSku;
    },
    startScrollToTop() {
      const that = this;
      const scrollableElement = this.$refs.good;
      if (scrollableElement) {
        let scrollTop = scrollableElement.scrollTop;
        let speed = 20 / 150;
        that.scrollToTopTimer = setInterval(() => {
          if (scrollableElement) {
            scrollTop -= scrollTop * speed;
            if (scrollTop <= 1) {
              scrollTop = 0;
              clearTimeout(that.scrollToTopTimer);
            }
            scrollableElement.scrollTop = scrollTop;
          } else {
            clearTimeout(that.scrollToTopTimer);
          }
        }, 20);
      }
    },
    getNearShop: function() {
      var self = this;
      self.getLocation(false).then(function(res) {
        self.lat = res.latitude;
        self.lng = res.longitude;
        self
          .xarpost("Shopinfo/getNearShop", {
            lat: res.latitude,
            lng: res.longitude
          })
          .then(d => {
            let { data, error, message } = d;
            // self.nearShop = data[0]
            self.nearShopList = data;
          });
      });
    },
    shareFun: function() {
      this.$refs.share.showBox = true;
    },

    buyVcard: function() {
      var self = this;
      if (self.currentProSku) {
        var proInfo = [];
        const {
          sku_id,
          pro_id,
          sku_name,
          pro_name,
          pro_quantity
        } = self.currentProSku;
        var { referer, shop_id } = this.$route.query;
        if(!referer) referer = 0
        if(!shop_id) shop_id = 0
        proInfo.push({
          sku_id,
          pro_id,
          sku_name,
          pro_name,
          pro_quantity
        });
        // console.log(pro_id);
        this.xarpay(
          pro_name,
          sku_name,
          pro_id,
          JSON.stringify(proInfo),
          JSON.stringify({ referer: referer, shop_id: shop_id })
        ).then(
          function() {
            self.$router.push({
              path:
                "/buySuccess?sharePath=/vcard/2&title=购买成功&description=您可以到您的卡包中查看订单"
            });
          },
          function() {
            console.log("aaaa");
          }
        );
      } else {
        this.showtoast("请先选择商品属性");
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
@import "~styles/index.less"; // 全局自定义样式
.page-goods {
  background: #f3f4f5;
  position: relative;
  .pro-content {
    margin-top: 0.1rem;
    background: #fff;

    .hd {
      display: flex;
      justify-content: space-between;
      height: 0.7rem;
      padding: 0 0.2rem;
      align-items: center;
      border-bottom: 1px solid #eee;
      &-right {
        font-size: 0.22rem;
        .fa {
          font-size: 0.4rem;
        }
      }
    }
    .bd {
      padding: 0.2rem 0;
      line-height: 1.5;
      font-size: 0.24rem;
      img {
        width: 100%;
        display: block;
      }
    }
  }
  .comment {
    margin-top: 0.1rem;
  }
  .share-btn {
    position: absolute;
    z-index: 1100;
    top: 30px;
    right: 0;
    min-width: 0.6rem;
    height: 0.6rem;
    line-height: 0.8rem;
    border-radius: 0.4rem 0 0 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #272727;
    color: @yellow;
    padding: 0 0.1rem;
    transition: all 0.3s;
    .avatar {
      width: 0.42rem;
      height: 0.42rem;
      background: #fff;
      border-radius: 50%;
      background: #fff;
      padding: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      .fa {
        padding-top: 0.08rem;
      }
      img {
        width: 100%;
        padding: 0;
        border-radius: 50%;
      }
      margin-right: 0.2rem;
    }
    .txt {
      font-size: 0.24rem;
      padding-right: 0.1rem;
      span {
        margin: 0 0.02rem;
      }
    }
    &.error {
      background-color: @yellow;
      color: #000000;
    }
  }
  .header {
    height: 200px;
    width: 100%;
    position: relative;

    .near-min {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 10;
      height: 25px;
      width: 100px;
      bottom: 0px;
      left: 0px;
      color: #fff;
      line-height: 25px;
      padding-left: 10px;
      font-size: 12px;
      border-top-right-radius: 2px;
    }
    .sanjiao {
      width: 0;
      height: 0;
      position: absolute;
      bottom: 0px;
      left: 110px;
      border-bottom: 25px solid rgba(0, 0, 0, 0.5);
      border-right: 25px solid transparent;
    }
    .sanjiao1 {
      width: 0;
      height: 0;
      position: absolute;
      bottom: 0px;
      right: 110px;
      border-bottom: 25px solid #fff;
      border-left: 25px solid transparent;
      margin: 0px;
    }
    .near {
      position: absolute;
      background-color: #fff;
      z-index: 10;
      height: 25px;
      width: 100px;
      bottom: 0px;
      right: 0px;
      color: #000;
      line-height: 25px;
      text-align: right;
      padding-right: 10px;
      font-size: 12px;
      margin: 0px;
      border-top-left-radius: 2px;
    }
  }
  .pay-menu-line {
    position: fixed;
    z-index: 1000;
    height: 1rem;
    width: 7.5rem;
    bottom: 55px;
    padding: 0px;
    margin: 0px;
    border: 0px;
    // background: rgba(255, 255, 255, 0.95);
    // border-top: 0.5px solid #d8d8d8;
    // border-bottom: 1px solid #d8d8d8;
    display: flex;
    line-height: 1rem;
    color: #fff;
    text-align: center;
    font-size: 0.32rem;
    .btn-share {
      opacity: 0;
      flex: 0 0 3.1rem;
      background: url(../../assets/btn-share.png) left center no-repeat;
      background-size: auto 1rem;
    }
    .btn-present {
      opacity: 0;
      flex: 0 0 2rem;
      background: #00c37a;
    }
    .btn-pay {
      background: #fe4d3d;
      flex: 0 0 2.2rem;
      border-radius: 0.1rem;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }
}
</style>

border: 2px solid #FE4D3D;
border-radius: 7px;
