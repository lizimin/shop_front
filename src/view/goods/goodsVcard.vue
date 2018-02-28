<template>
  <div id="goods" class="vcard page-goods  cpage-scroll">
    <!-- header -->
    <div class="header">
      <banner-swiper></banner-swiper>
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
    <shopcart :productId="productId" @updateSku="updateSku"></shopcart>
    <!-- comment -->
    <div class="comment">
      <comment :limit="3" :pro_id="pro_id"></comment>
    </div>
    <!-- recommend -->
    <recommend-list></recommend-list>
    <!-- pro-content -->
    <div class="pro-content">
      <div class="hd">
        产品详情
      </div>
      <div class="bd" v-html="proinfo.pro_content"></div>
    </div>
    <!-- pay-line -->
    <div class="pay-menu-line">
      <div class="btn-share" @click="shareFun">

      </div>
      <div class="btn-present">赠送给好友</div>
      <div class="btn-pay" @click="buyVcard">
        立即购买
      </div>
    </div>
    <share ref="share"></share>
  </div>
</template>

<script>
import {
  XButton,
  Box,
  Swiper,
  Flexbox,
  FlexboxItem,
  XNumber,
  Group
} from "vux";
import api from "api/api";
import nearShop from "../../components/goods/nearShop";
import comment from "../../components/comment/index";
import share from "../../components/share/index";
import recommendList from "../../components/goods/recommend";
import shopcart from "components/goods/VcardShopcart";
import bannerSwiper from "components/goods/bannerSwiper";
export default {
  name: "goodsVcard",
  components: {
    XButton,
    Box,
    nearShop,
    Swiper,
    Flexbox,
    FlexboxItem,
    comment,
    share,
    recommendList,
    bannerSwiper,
    XNumber,
    shopcart,

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
      proinfo: {
        pro_content: ""
      },
      currentProSku: {}
    };
  },
  created() {
    this.init();
  },
  beforeUpdate: function() {
    this.setWxShare(
      "线上洗车卡上线啦",
      "全省通用，随意分享。",
      this.site_url + "index.html#/vcard/" + this.pro_id
    );
  },
  computed: {
    productId: function() {
      return parseInt(this.$route.params.id) || 0;
    }
  },
  watch: {
    pro_id: function(newvalue, oldvalue) {}
  },
  methods: {
    async init() {
      var self = this;
      self.getNearShop();
      const productResult = await api.getProduct({
        pro_id: self.$route.params.id
      });
      self.proinfo = productResult.data;
    },
    updateSku: function(proSku) {
      this.currentProSku = proSku;
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
        var proinfo = [];
        const {
          sku_id,
          pro_id,
          sku_name,
          pro_name,
          pro_quantity
        } = self.currentProSku;
        proinfo.push({
          sku_id,
          pro_id,
          sku_name,
          pro_name,
          pro_quantity
        });
        console.log(this.sku_pro, "sku_prosku_prosku_prosku_pro");
        this.xarpay(pro_name, sku_name, pro_id, JSON.stringify(proinfo)).then(
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
<style lang="less" scoped>
.page-goods {
  background: #f3f4f5;
  .pro-content {
    margin-top: 0.1rem;
    background: #fff;

    margin-bottom: 50px;
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
      padding: 0.2rem;
      line-height: 1.5;
      font-size: 0.24rem;
    }
  }
  .comment {
    margin-top: 0.1rem;
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
    bottom: 50px;
    padding: 0px;
    margin: 0px;
    border: 0px;
    background: rgba(255, 255, 255, 0.95);
    border-top: 0.5px solid #d8d8d8;
    // border-bottom: 1px solid #d8d8d8;
    display: flex;
    line-height: 1rem;
    color: #fff;
    text-align: center;
    font-size: 0.32rem;
    .btn-share {
      flex: 0 0 3.1rem;
      background: url(../../assets/btn-share.png) left center no-repeat;
      background-size: auto 1rem;
    }
    .btn-present {
      flex: 0 0 2.2rem;
      background: #00c37a;
    }
    .btn-pay {
      background: #fe4d3d;
      flex: 0 0 2.2rem;
    }
  }
}
</style>

