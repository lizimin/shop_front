<template>
  <div id="vcard" class="vcard page-goods-vcard">
    <div class="header">
      <swiper v-model="demo02_index" height="200px" :show-desc-mask="f" dots-position="center" :auto="f">
        <swiper-item class="swiper-demo-img">
          <img src="../../assets/vcard1.jpg" alt="">
        </swiper-item>
        <swiper-item class="swiper-demo-img">
          <img src="../../assets/vcard2.jpg" alt="">
        </swiper-item>
        <swiper-item class="swiper-demo-img">
          <img src="../../assets/vcard3.jpg" alt="">
        </swiper-item>
      </swiper>
      <div class="near-min">最近门店</div>
      <div class="sanjiao"></div>
      <div class="sanjiao1"></div>
      <div class="near">
        <router-link to="/tmap">
          <span class="fa fa-map-marker"></span> 您附近有{{nearShopList.length}}家店</router-link>
      </div>
    </div>
    <nearShop :lat="lat" :lng="lng"></nearShop>
    <shopcart :productId="productId" @updateSku="updateSku"></shopcart>
    <comment :limit="3" :pro_id="pro_id"></comment>
    <recommend-list></recommend-list>
    <div class="pro-content" v-html="pro_info.pro_content">
      {{pro_info.pro_content}}
    </div>
    <div class="pro-content">
      <img src="../../assets/d1.jpg" alt=""><img src="../../assets/d2.jpg" alt=""><img src="../../assets/d3.jpg" alt=""><img src="../../assets/d4.jpg" alt=""><img src="../../assets/d5.jpg" alt=""><img src="../../assets/d6.jpg" alt="">

    </div>
    <div style="height:100px; background-color:#fff;"></div>
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
  SwiperItem,
  Flexbox,
  FlexboxItem,
  XNumber,
  Group
} from 'vux';
import nearShop from '../../components/goods/nearShop';
import comment from '../../components/comment/index';
import share from '../../components/share/index';
import recommendList from '../../components/goods/recommend';
import shopcart from 'components/goods/VcardShopcart';
export default {
  name: 'vcard',
  components: {
    XButton,
    Box,
    nearShop,
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    comment,
    share,
    recommendList,
    shopcart,
    XNumber,
    Group
  },
  data() {
    return {
      pro_id: 0,
      pro_info: {
        property: [],
        pro_sku: []
      },
      gutter: 0,
      sku_code_list: [],
      select_property: {},
      pro_code: '',
      sku_pro: {},
      nearShop: {},
      nearShopList: [],
      commentInfo: {},
      demo02_index: 0,
      lat: 0,
      lng: 0,
      f: false,
      t: true,
      pro_quantity: 1,
      demo01_list: [
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg',
          title: '送你一次旅行',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }
      ]
    };
  },
  mounted: function(e) {
    var pro_id = this.$route.params.id;
    this.pro_id = parseInt(pro_id);
    console.log(pro_id);
    var self = this;
    this.xarpost('Product/getProduct', { pro_id: this.pro_id }).then(
      function(d) {
        let { data, error, message } = d;
        data.property.map(function(item) {
          item.is_select = 0;
          item.s_index = 0;
          item.value.map(function(i, elem) {
            i.select = 0;
          });
        });
        self.pro_info = data;
      },
      function(d) {
        this.showtoast('加载失败');
      }
    );
    self.getNearShop();
  },
  beforeUpdate: function() {
    this.setWxShare(
      '线上洗车卡上线啦',
      '全省通用，随意分享。',
      this.site_url + 'index.html#/vcard/' + this.pro_id
    );
  },
  computed: {
    productId: function() {
      return parseInt(this.$route.params.id) || 0;
    }
  },
  methods: {
    updateSku: function(e) {
      console.log(e);
      this.sku_pro = e.sku_pro;
      this.pro_code = e.pro_code;
      this.pro_quantity = e.pro_quantity;
    },
    getNearShop: function() {
      var self = this;
      self.getLocation(false).then(function(res) {
        self.lat = res.latitude;
        self.lng = res.longitude;
        self
          .xarpost('Shopinfo/getNearShop', {
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
      console.log('aaaaaaaa');
      if (this.pro_code) {
        var proinfo = [];
        proinfo.push({
          sku_id: this.sku_pro.sku_id,
          pro_id: this.pro_id,
          pro_name: this.sku_pro.sku_name,
          pro_quantity: self.pro_quantity
        });
        console.log(this.sku_pro, 'sku_prosku_prosku_prosku_pro');
        this.xarpay(
          this.pro_info.pro_name,
          this.sku_pro.sku_name,
          this.pro_id,
          JSON.stringify(proinfo)
        ).then(
          function() {
            self.$router.push({
              path:
                '/buySuccess?sharePath=/vcard/2&title=购买成功&description=您可以到您的卡包中查看订单'
            });
          },
          function() {
            console.log('aaaa');
          }
        );
      } else {
        this.showtoast('请先选择商品属性');
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.page-goods-vcard {
  .swiper-demo-img {
    img {
      width: 100%;
    }
  }
  .pro-content {
    img {
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      border: none;
      display: block;
    }
  }
}
.vcard {
  .pay-menu-line {
    position: fixed;
    height: 1rem;
    width: 7.5rem;
    z-index: 1000;
    bottom: 50px;
    padding: 0px;
    margin: 0px;
    border: 0px;
    background: rgba(255, 255, 255, 0.95);
    border-top: 0.5px solid #d8d8d8;
    // border-bottom: 0.5px solid #d8d8d8;
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
  .show-commit-more {
    padding: 20px;
    text-align: center;
    span {
      border: 1px solid #ff0000;
      padding: 5px 15px;
      height: 20px;
      line-height: 20px;
      border-radius: 10px;
      color: #ff0000;
    }
  }
  .header {
    font-size: 14px;
    height: auto;
  }
  .shuxing {
    .card-group {
      min-height: 100px;
      position: relative;
      display: flex;
      justify-content: space-between;
      .card-name {
        // position: relative;
        flex: 0 0 115px;
        .card-des {
          position: absolute;
          top: 57px;
          left: 0;
          width: calc(~'100vw - 20px');
          .card-des_wrapper {
            padding: 10px 0px;
            border: 1px solid #fe4d3d;
            border-radius: 3px;
            background: #fef0f1;
            padding: 10px 20px;
            height: 24px;
            overflow: hidden;
            display: flex;
            line-height: 24px;
            font-size: 14px;
            .fa {
              display: block;
              width: 24px;
              height: 24px;
              text-align: center;
              color: #fff;
              border-radius: 50%;
              background: #272727;
            }
            .price {
              margin-left: 10px;
              margin-right: 20px;
            }
            .txt {
            }
          }
          // padding: 10px;
        }
        &.on {
          height: 120px;
        }
        &:first-child {
          border-bottom-left-radius: 0px;
          .card-des .card-des_wrapper {
            border-top-left-radius: 0px;
          }
        }
        &:last-child {
          border-bottom-right-radius: 0px;
          .card-des .card-des_wrapper {
            border-top-right-radius: 0px;
          }
        }
        .pro-base-sele {
          position: relative;
          background: #fef0f1;
          height: 32px;
          z-index: 100;
          border-radius: 3px 3px 0 0;
          border-bottom: none;
        }
      }
    }
  }
  .vcard {
    background-color: #f3f4f5;
    height: 100%;
  }
  .pro-info {
    margin: 20px;
    padding-bottom: 10px;
  }
  .pro-des {
    color: #979797;
    font-size: 14px;
  }
  .card-logo {
    width: 60%;
    text-align: center;
    padding-top: 10px;
  }
  .card-bottom {
    width: 100%;
    height: 100%;
  }
  .card {
    margin: 20px;
    height: 180px;
    border-radius: 10px;
    background-color: #ffd100;
    text-align: center;
  }
  .btn-base {
    background-color: #fff;
    color: #000;
    margin-right: 10px;
  }
  .btn-select {
    background-color: #000;
    color: #fff;
  }
  .card-body {
    background-color: #fff;
  }
  .shuxing {
    padding: 10px;
    background-color: #fff;
    text-align: left;
    margin: auto;
  }
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
  .pro-base {
    padding: 10px 0px;
    border-radius: 3px;
    width: auto;
    color: #000;
    text-align: center;
    border: 1px solid #000;
    background-color: #fff;
    margin: 5px 0px;
  }
  .pro-base-sele {
    border: 1px solid #fe4d3d;
    background-color: rgba(254, 77, 61, 0.2);
  }
  .btn-bottom {
    position: fixed;
    height: 50px;
    width: 100%;
    background-color: #fff;
    bottom: 50px;
    padding: 0px;
    margin: 0px;
  }
  .header {
    width: 100%;
    position: relative;
  }
  .kefu {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .tuijian {
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 14px;
    color: #272727;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  .goumai {
    width: 100%;
    height: 50px;
    background-color: #fe4d3d;
    font-size: 20px;
    color: #fff;
    line-height: 50px;
    text-align: center;
    border-top: 1px solid #fe4d3d;
  }
  .btn-bottom_xsam {
    position: fixed;
    height: 50px;
    width: 100%;
    bottom: 65px;
    padding: 0px;
    margin: 0px;
    border: 0px;
  }
  .goumai_xsam {
    position: absolute;
    width: 25%;
    height: 40px;
    background-color: #fe4d3d;
    font-size: 16px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    margin: 5px;
    float: right;
    border: 2px solid;
    border-radius: 8px;
    bottom: 60px;
    right: 15px;
  }
  .goumai_share {
    position: absolute;
    width: 25%;
    height: 40px;
    font-size: 16px;
    color: #fff;
    line-height: 40px;
    text-align: center;
    margin: 5px;
    float: right;
    border: 2px solid;
    border-radius: 8px;
    bottom: 120px;
    right: -10px;
  }
  .notice {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: #fff;
    padding: 10px;
    font-size: 10px;
    margin-bottom: 10px;
  }
  .buzou {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #fe4d3d;
    border-radius: 50%;
    font-size: 10px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    font-style: italic;
    margin-right: 5px;
  }
}
</style>
border: 2px solid #FE4D3D;
border-radius: 7px;
