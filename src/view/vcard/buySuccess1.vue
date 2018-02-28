<template>
  <div class="page-buysuccess cpage-scroll">
    <!-- <div class="red-bag">

    </div> -->
    <div class="header">
      <div class="logo">
        <!-- <img class="logo-img" src="../../../static/image/xcklogo.png"> -->
      </div>
      <div class="owner ">
        <div class="avatar">
          <span class="fa fa-check"></span>
        </div>

      </div>
      <div>
        <p class="notice-text">
          <span>购买成功</span>
        </p>
        <div class="marquee">
          <!-- <marquee :item-height="20">
            <marquee-item v-for="i in 5" :key="i">
              <span>{{i}}</span>
              <span>成功购买了闲时卡 *10次 ￥99元</span>
            </marquee-item>
          </marquee> -->
        </div>
        <div class="btn-invitation">
          <span>邀请好友完成订单奖励现金红包</span>
        </div>
         <router-link :to="'/my'">
        <div class="btn-orderdetail">
          <span>查看订单</span>
        </div>
         </router-link>
      </div>

    </div>
    <div class="invitationgroup" v-show="false">
      <div class="icon">
        <span class="fa fa-gift"></span>
      </div>
      <div class="info">
        <p class="hd">
          请好友洗车
        </p>
        <p class="bd">
          赠送给好友1次免费洗车机会
        </p>
      </div>
      <div class="btn">
        <span>我要赠送</span>
      </div>
    </div>
    <div class="nearShop">
      <nearShop  :lat="lat" :lng="lng" :showMore="true"></nearShop>
    </div>

    <recommend-list></recommend-list>
    <!-- <div class="header">
      修改意见 ： 1.顶部收缩，减少高度。
      <br/> 2.增加 怎么使用 介绍区域<br/> 3.能有快速购买赠送区域
      <br/>
    </div> -->

    <!-- <group>
      <cell title="更多洗车卡" link="/vcard/2"></cell>
    </group>
    -->
    <follow ref="follow" :message="message"></follow>
  </div>
</template>
<script>
import {
  Qrcode,
  XDialog,
  TransferDomDirective as TransferDom,
  XButton,
  Flexbox,
  Marquee,
  Swiper,
  SwiperItem,
  MarqueeItem,
  FlexboxItem,
  Cell,
  Group
} from "vux";
import follow from "../../components/wechat/follow";
import nearShop from "../../components/goods/nearShop";

import recommendList from "../../components/goods/recommend";
import api from "api/api";

export default {
  directives: {
    TransferDom
  },
  components: {
    Qrcode,
    recommendList,
    XDialog,
    TransferDom,
    XButton,
    follow,
    Flexbox,
    Swiper,
    SwiperItem,
    Marquee,
    MarqueeItem,
    FlexboxItem,
    nearShop,
    Cell,
    Group
  },
  name: "giveVcard",
  data() {
    return {
      card_code: "",
      t: true,
      message: "领取洗车卡需要先关注公众号才能使用哦! 长按识别二维码自动关注",
      subscribe: false,
      givevcard: {
        toCustomer: {},
        status: 2
      },
      error: 0,
      nearShop: {},
      nearShopList: [],
      // 2018-1-6
      card_info: {
        exp_time: "",
        exp_time_str: "",
        extend_info: {
          detail_des: "",
          use_position: ""
        },
        extra_data: {
          use_rule: ""
        },
        name: "",
        sku_id: "",
        vc_id: ""
      },
      lat: 0,
      lng: 0,
      card_status: -1,
      given_customer: {
        cavatar: "",
        cname: ""
      },
      customer_id: 0,
      to_customer_id: 0,
      is_me: 0,
      qr_data: {
        x_str: ""
      },
      qr_size: 80,
      vcard: {
        is_use: 0
      }
    };
  },
  created: function() {
    this.init();
    this.getNearShop();
  },
  activated: function() {},
  mounted() {},
  deactivated: function() {},
  computed: {},
  watch: {},
  methods: {
    async init() {},
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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式
.qr-view {
  text-align: center;
  position: absolute;
  top: 2.3rem;
  left: 2.65rem;
  width: 2rem;
  height: 2rem;

  &-con {
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 0.05rem;
    padding: 0.1rem;
  }
}

.page-buysuccess {
  .logo-img {
    width: 121px;
    height: 131px;
    /*padding-top:30px;*/
    margin: 0px auto;
    padding: 10px 0px;
  }
  .qrcode {
    text-align: center;
    padding: 30px;
    background-color: #fff;
  }
  .header {
    background-color: #ffd100;
    height: 330px;
    position: relative;
  }
  //已被领取背景
  .is_lingqu {
    background-color: #e6e6e6;
  }

  .notice-text {
    font-family: MicrosoftYaHei-Bold;
    font-size: 35px;
    color: #272727;
    letter-spacing: 0;
    padding: 10px;
    text-align: center;
  }
  .customer {
    height: 50px;
    width: 60%;
    background-color: #272727;
    border-radius: 0 25px 25px 0;
  }
  .customer-header {
    width: 40px;
    padding: 5px;
    display: inline-block;
    border-radius: 50%;
  }
  .cname {
    color: #ffd100;
    line-height: 50px;
    font-size: 18px;
    vertical-align: top;
    padding-top: 5px;
  }
  .give {
    color: #fff;
    line-height: 50px;
    font-size: 18px;
    vertical-align: top;
    padding-top: 5px;
  }
  .logo {
    height: 160px;
    text-align: center;
  }
  .lq-btn {
    background-color: #f3f4f5;
    color: #a3a3a3;
    padding: 10px;
    position: absolute;
    width: 70%;
    top: 285px;
    left: 15%;
    line-height: 30px;
  }
  .lq-btn-red {
    background-color: #fe4d3d;
    color: #fff;
    box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2);
  }
  .nearShop {
    padding-top: 40px;
    background-color: #fff;
  }
}
.page-buysuccess {
  .red-bag {
    position: fixed;
    right: 0.2rem;
    top: 4rem;
    width: 0.7rem;
    height: 0.85rem;
    background: url("~assets/redbag.png") center top no-repeat;
    background-size: auto 100%;
    z-index: 1000;
  }
  .header {
    height: 6.1rem;
  }
  .logo {
    height: 0.7rem;
    width: 100%;
    position: absolute;
    background: url("~assets/givenlogo.png") 4.66rem top no-repeat;
    background-size: auto 100%;
  }
  .owner {
    position: absolute;
    top: 1.2rem;
    min-width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0 0.4rem 0.4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #272727;
    color: @yellow;
    padding: 0 0 0 0.3rem;
    .avatar {
      width: 0.62rem;
      height: 0.62rem;
      background: #fff;
      border-radius: 50%;
      background: #fff;
      line-height: 0.62rem;
      color: #000000;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2px;
      margin-right: 0.2rem;
    }
    .txt {
      font-size: 0.24rem;
      span {
        margin: 0 0.02rem;
      }
    }
    &.error {
      background-color: @yellow;
      color: #000000;
    }
  }
  .notice-text {
    padding-top: 2.15rem;
    position: relative;
    &.error {
      span {
        padding: 0 0.3rem;
        color: #9c9c9c;
        position: relative;
      }
      span:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background: #9c9c9c;
      }
    }
  }
  .btn-invitation,
  .btn-orderdetail {
    display: block;
    position: relative;
    background: @red;
    text-align: center;
    left: 0;
    margin: 0 auto;
    margin-top: 0.1rem;
    width: 5.5rem;
    height: 0.8rem;
    border-radius: 0.07rem;
    line-height: 0.8rem;
    color: #fff;
    &.error {
      background: #9c9c9c;
    }
  }
  .btn-orderdetail {
    background: none;
    border: 1px solid #272727;
    color: #272727;
  }
  .invitationgroup {
    background: #272727;
    padding: 0.2rem 0.3rem 0.2rem 0.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      flex: 0 0 0.8rem;
      height: 0.8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f23030;
      border-radius: 50%;
      color: #fff;
      font-size: 0.5rem;
    }
    .info {
      color: #fff;
      margin-left: 0.1rem;
      .hd {
        font-size: 0.32rem;
      }
      .bd {
        font-size: 0.28rem;
      }
    }
    .btn {
      flex: 0 0 2rem;
      height: 0.7rem;
      line-height: 0.7rem;
      text-align: center;
      color: #fff;
      background: #f23030;
      border-radius: 0.07rem;
    }
  }
  .cardinfo {
    padding: 0.1rem;
    text-align: center;
    color: #802a25;
  }
  .marquee {
    width: 5.7rem;
    height: 0.76rem;
    margin: 0 auto;
    border-radius: 0.04rem;
    // background: #fff;
    display: flex;
    align-items: center;
    padding: 0 0.3rem;
    // position: absolute;
    font-size: 0.24rem;
    top: 3.88rem;
    left: 0.6rem;
    li {
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: #802a25;
    }
    .btn {
      position: absolute;
      right: 0;
      top: 0;
      width: 2rem;
      border-left: 1px solid @gray;
      height: 0.76rem;
      display: flex;
      align-items: center;
      padding: 0 0.15rem;
      font-size: 0.26rem;
      .icon {
        margin: 0 0.1rem;
        background: @red;
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
        text-align: center;
        font-size: 0.3rem;
        color: #fff;
        line-height: 0.5rem;
      }
      .fa {
      }
    }
    .btn-is-use {
      background: #e74e42;
      color: #fff;
    }
    li {
      span {
        margin: 0 0.2rem;
      }
    }
  }
  //正常背景
  .main-backcolor {
    background-color: #ffd100;
  }
  .nearShop {
    padding-top: 0;
  }
  .cardrule {
    position: relative;

    background: #fff;

    .hd {
      display: flex;
      justify-content: space-between;
      height: 0.7rem;
      padding: 0 0.2rem;
      align-items: center;
      border-bottom: 1px solid @gray;
      &-right {
        font-size: 0.22rem;
        .fa {
          font-size: 0.28rem;
        }
      }
    }
    .bd {
      padding: 0.2rem 0.4rem;
      li {
        line-height: 1.5;
        position: relative;
        padding-left: 0.2rem;
        &:before {
          content: "";
          width: 2px;
          height: 2px;
          background: @red;
          position: absolute;
          left: 0;
          top: 0.15rem;
        }
      }
    }
  }
}
</style>
