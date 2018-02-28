<template>
  <div class="page-givenvcard">
    <!-- <div class="red-bag">

    </div> -->
    <div class="header" :class="[ isShow ? 'is_lingqu': '']">
      <div class="logo">
        <!-- <img class="logo-img" src="../../../static/image/xcklogo.png"> -->
      </div>
      <div class="owner" :class="[ isShow ? 'error' : '']">
        <div class="avatar">

          <img :src="given_customer.cavatar" class="customer-header" alt="">
        </div>
        <div class="txt">
          <span class="">{{given_customer.cname}}</span>
          <span class="">赠送你</span>
        </div>
      </div>
      <div v-show="!is_me || vcard.is_use == 1">
        <p class="notice-text" :class="[ isShow ? 'error' : '']">
          <span>{{card_info.name?`一次${card_info.extra_data.use_position}`:'卡片信息不存在'}}</span>
        </p>
        <div v-html="getBtnMsg" @click="lingqu" class="btn-getcard" :class="[isShow ? 'error' : '']"></div>
      </div>
      <div v-show="is_me  && vcard.is_use == 0" class="qr_car_info">
        <h1>{{card_info.extra_data.use_position}}</h1>
        <p>{{card_info.extra_data.use_rule}}</p>
      </div>
      <div class="qr-view" ref="qrcon">
        
        <qrcode :value="qr_data.x_str" :size="qr_size" v-show="is_me  && vcard.is_use == 0" class="qr-view-con" @click.native="locdQrcode"></qrcode>
      </div>
      <div class="cardinfo">
        <!-- {{card_info.extend_info.use_position}} -->
      </div>
      <div class="marquee" :class="[isShow ? 'main-backcolor' : '']">
        <marquee :item-height="20">
          <marquee-item v-for="(item,index) in logList" :key="index">
            <span>{{item.to_customer.cname}}</span>
            <span>领取了1张优惠卡</span>
          </marquee-item>
        </marquee>
        <router-link :to="'/sale'">
          <div class="btn" :class="[isShow ? 'btn-is-use' : '']">
            <div class="txt">
              我要送卡
            </div>
            <div class="icon">
              <span class="fa fa-gift"></span>
            </div>

          </div>
        </router-link>
      </div>
    </div>
    <!-- <div class="cardrule">
      <div class="hd">
        使用规则
      </div>
      <div class="bd" v-html="card_info.extra_data.use_rule">
      </div>
    </div> -->
    <div class="nearShop">
      <nearShop :shopInfo="nearShop" :showMore="true" style="margin-bottom:10px;"></nearShop>
    </div>

    <recommend-list style="padding-bottom:50px;"></recommend-list>
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
      },
      logList: []
    };
  },
  created: function() {
    this.init();
  },
  activated: function() {},
  mounted() {},
  deactivated: function() {},
  computed: {
    isShow: function() {
      //通过其他的状态判断能不能使用
      return (
        (this.card_status == 1 && this.is_me == 0) ||
        this.card_status == 2 ||
        this.card_status == 3 ||
        this.vcard.is_use == 1
      );
    },
    getBtnMsg: function() {
      var btnMsg = "正在获取中"; //  超时24小时已退回
      var self = this;
      if (self.card_status == 0) btnMsg = "点击领取";
      if (self.card_status == -2) btnMsg = "无法领取";
      // if(self.error == 12005) btnMsg = '超时24小时已退回'
      //  if(self.givevcard.status == 1 && self.givevcard.toCustomer) btnMsg = '已被'+self.givevcard.toCustomer.cname+'领取'
      if (self.card_status == 1) btnMsg = "已被领取";
      if (self.card_status == 1 && this.is_me == 1 && this.vcard.is_use)
        btnMsg = "您已使用";
      if (self.card_status == 2) btnMsg = "过期退回";
      if (self.card_status == 3) btnMsg = "用户已撤销赠送";
      if (self.error == 20000) btnMsg = "领取成功"; //  本地返回设置
      return btnMsg;
    }
  },
  watch: {
    is_me: function(newvalue, oldvalue) {
      this.locdQrcode();
      if (this.is_me) {
        console.log(this.$refs.qrcon, "aaaaaaaaaaa");
        this.qr_size = this.$refs.qrcon.clientWidth;
      }
    }
  },
  methods: {
    async locdQrcode() {
      if (this.is_me != 1) return;
      const that = this;
      const result = await api.getMyVcard({ card_code: that.card_code });
      this.qr_data = result.data;
    },
    async init() {
      const that = this;
      that.$vux.loading.show();
      this.checkSubscribe();
      this.card_code = this.$route.params.card_code;
      this.getNearShop();
      const vcardResult = await api.getGiveVcardInfo(this.$route.params);
      const logResult = await api.vcardReceiveLog({
        page: 1,
        page_size: 30
      });
      this.logList = logResult.data.list;
      console.log(vcardResult, "aaaaaaaaaaaaaa");
      if (!vcardResult.error) {
        const {
          given_customer,
          card_info,
          status,
          customer_id,
          to_customer_id,
          is_me,
          Vcard
        } = vcardResult.data;
        this.given_customer = given_customer;
        this.card_status = status;
        this.card_info = card_info;
        this.customer_id = customer_id;
        this.to_customer_id = to_customer_id;
        this.is_me = is_me;
        this.vcard = Vcard;
        this.locdQrcode();
        // console.log(123, given_customer);
      } else {
        that.card_status = -2;
      }
      that.$vux.loading.hide();
    },
    checkSubscribe: function() {
      let self = this;
      self.xarpost("Wechat/ckechfollow").then(d => {
        let { data, error, message } = d;
        console.log(data);
        if (error === 0) self.subscribe = data.subscribe;
      });
    },
    getGiveVcard: function() {
      let self = this;
      self
        .xarpost("Vcard/getGiveVcardInfo", { card_code: self.card_code })
        .then(d => {
          let { data, error, message } = d;
          self.error = error;
          self.givevcard = data;
          if (error === 0) {
            var cname =
              data.Customer && data.Customer.cname
                ? data.Customer.cname
                : "您的好友";
            var title = cname + "赠送了您一张洗车卡，快来领取吧";
            self.setWechatTitle(title);
            if (data.status == 1) {
              // self.noticeBuy()
            }
          } else {
            // self.noticeBuy(message+'，点击确定、带您购买新的洗车卡')
          }
        });
    },
    lingqu: function() {
      let self = this;
      if (self.card_status !== 0) return;
      if (!self.subscribe) {
        this.$refs.follow.showBox = true;
      } else {
        self.$vux.loading.show({
          text: "正在领取中..."
        });
        self
          .xarpost("Vcard/getGiveVcard", { card_code: self.card_code })
          .then(d => {
            let { data, error, message } = d;
            self.$vux.loading.hide();
            if (error === 0) {
              self.error = 20000;
              self.card_status = 1;
              self.is_me = 1;
              self.showtoast("领取成功");
            } else {
              self.showtoast(message);
            }
          });
      }
    },
    noticeBuy: function(
      content = "该洗车卡已被领取，现在带您去购买新的洗车卡？"
    ) {
      let self = this;
      self.$vux.alert.show({
        title: "小矮人",
        content: content,
        onHide() {
          self.$router.push("/vcard/2");
        }
      });
    },
    getNearShop: function() {
      var self = this;
      self.getLocation(false).then(function(res) {
        self
          .xarpost("Shopinfo/getNearShop", {
            lat: res.latitude,
            lng: res.longitude
          })
          .then(d => {
            let { data, error, message } = d;
            self.nearShop = data[0];
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
.qr_car_info {
  position: absolute;
  top: 2.5rem;
  left: 0.8rem;
  width: 3.5rem;
}
.qr-view {
  text-align: center;
  position: absolute;
  top: 2.3rem;
  left: 4.65rem;
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

.page-givenvcard {
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
    margin-top: 0.2rem;
    // padding-top: 40px;
    // background-color: #fff;
  }
}
.page-givenvcard {
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
    min-width: 2.64rem;
    height: 0.8rem;
    line-height: 0.8rem;
    border-radius: 0 0.4rem 0.4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #272727;
    color: @yellow;
    padding: 0 0.3rem;
    .avatar {
      width: 0.62rem;
      height: 0.62rem;
      background: #fff;
      border-radius: 50%;
      background: #fff;
      padding: 2px;
      img {
        width: 100%;
        padding: 0;
        border-radius: 50%;
      }
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
    padding-top: 2.75rem;
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
  .btn-getcard {
    display: block;
    position: relative;
    background: @red;
    text-align: center;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 2.87rem;
    height: 0.69rem;
    border-radius: 0.35rem;
    line-height: 0.69rem;
    color: #fff;
    &.error {
      background: #9c9c9c;
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
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 0.3rem;
    position: absolute;
    font-size: 0.24rem;
    top: 4.88rem;
    left: 0.6rem;
    li {
      height: 20px;
      line-height: 20px;
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
