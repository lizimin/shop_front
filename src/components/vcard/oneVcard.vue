<template>
  <div class="card-content cpts-onevcard">
    <div class="card-box" :class="{cardused:canUse===0}">
      <div class="card-info" :style="{backgroundImage: 'url()'}">
        <h1>{{card_info.extra_data.use_position}}</h1>
        <p>{{desStr}}</p>
      
      </div>
      <div class="card-No">
        <span>{{card_info.list_no}}</span>
      </div>
      <div class="card-bottom">

        <span v-show="canUse">{{expTimeStr}}</span>
        <span class="count">
          剩余
          <i class="used">{{canUse}}</i>/{{useCount}} 次 </span>

      </div>
      <div class="card-qrcode">
        <div class="card-qrcode-con" ref="qrcon">

          <qrcode :size="qrWidth" v-if="qrcode.x_str" :value="qrcode.x_str" type="canvas" @click.native="QRrefresh"></qrcode>
        </div>

        <!-- <img src="../assets/qr.png" alt=""> -->
      </div>
    </div>
    <div class="share" v-if="canUse">
      <div class="share_sl" @click="showNoticeF">
        <i class="fa fa-gift fa-2x"></i>
        <span>{{share_str}}</span>
      </div>
      <div class="share_sr" @click="share">
        <span>分享领红包</span>
        <i class="fa fa-envelope-o fa-fw"></i>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
    <div v-transfer-dom>
      <confirm v-model="showNotice" :title="'确认赠送?'" @on-cancel="showNotice=!showNotice" @on-confirm="confirm">
        <p style="padding:10px;text-align:left;">确认将扣除您一次消费机会、点击确认转发给好友即可。<br>24小时好友未领取洗车卡会自动退回您的账户。</p>
      </confirm>
    </div>
    <share ref="share" ></share>
    <x-dialog v-model="showBox" hide-on-blur :dialog-style="{'max-width': '100%', width: '100%', height: '100%', 'background-color': 'transparent'}">
      <img @click="hide" src="../../../static/image/notice-share.png" style="width:100%;height:100%;">
    </x-dialog>
  </div>
</template>
<script>
import { Qrcode, Confirm, TransferDom, XDialog } from "vux";
import api from "api/api";
import share from "../share/index";
export default {
  directives: {
    TransferDom
  },
  props: {
    type: {
      type: Number,
      default: 1
    },
    card_code: {
      type: String,
      default: ""
    },
    card_info: {
      type: Object,
      default: function() {
        return {
          background: "",
          exp_time_str: "",
          name: "",
          sku_id: "",
          vc_id: "",
          extra_data: {
            allow_car_type: [],
            detail_des: "",
            short_des: "",
            use_position: "",
            use_rule: ""
          },
          use_info: {
            can_use: 0,
            cancel: 0,
            count: 0,
            used: 0
          }
        };
      }
    }
  },
  components: {
    Qrcode,
    Confirm,
    share,
    XDialog
  },
  data() {
    return {
      qrWidth: 80,
      showNotice: false,
      qrcode: {
        x_str: ""
      },
      giveVcard: {
        given_customer: {
          cname: "",
          cavatar: ""
        }
      },
      showBox: false
    };
  },
  mounted() {
    console.log(this.$refs.qrcon.clientWidth, 80808);
    this.qrWidth = this.$refs.qrcon.clientWidth;
  },
  computed: {
    typeString: function() {
      const that = this;
      const { allow_car_type } = that.card_info.extra_data;
      let allowString = "";
      if (allow_car_type.length) {
        allow_car_type.map(item => (allowString += `${item.name}、`));
        return allowString.substring(0, allowString.length - 1);
      } else {
        return "暂无适用车型";
      }
    },
    desStr: function() {
      return this.card_info.extra_data.detail_des || this.card_info.short_des;
    },
    canUse: function() {
      return this.card_info.use_info.can_use || 0;
    },
    useCount: function() {
      return this.card_info.use_info.count || 0;
    },
    expTimeStr: function() {
      return this.card_info.exp_time_str || "无使用期限限制";
    },
    share_str: function() {
      var str = "赠送给好友";
      if (this.giveVcard.given_customer.cname)
        str = "由" + this.giveVcard.given_customer.cname + "赠送";
      return str;
    }
  },
  watch: {
    card_code: function(newvalue, oldvalue) {
      this.card_code = newvalue;
      this.loadQrcode();
      this.locadCardInfo();
    }
  },
  created() {
    this.init();
    this.loadQrcode();
    this.locadCardInfo();
  },
  methods: {
    share() {
      this.$refs.share.showBox = true;
    },
    showNoticeF() {
      if (this.card_code) {
        this.showtoast("赠送的卡不能再次赠送哦");
        return;
      }
      this.showNotice = true;

      // this.confirm()
    },
    hide() {
      this.showBox = false;
    },
    async locadCardInfo() {
      const that = this;
      if (!that.card_code) return;
      const cardDetailResult = await api.getGiveVcardInfo({
        card_code: that.card_code
      });
      that.giveVcard = cardDetailResult.data;
    },
    async init() {},
    async QRrefresh() {
      console.log("刷新");
      this.loadQrcode();
    },
    async loadQrcode() {
      const that = this;

      const req_data = {};
      if (that.card_info.list_no) {
        req_data.list_no = that.card_info.list_no;
      }
      if (that.card_code) {
        req_data.card_code = that.card_code;
      }
      if (!req_data) return;
      const qrcode = await api.getMyVcard(req_data);
      if (qrcode.error == 0) that.qrcode = qrcode.data;
    },
    async confirm() {
      const that = this;
      if (that.card_info.use_info.can_use === 0) {
        that.$vux.toast.show({
          text: "卡片可用次数为0",
          // position: "top",
          type: "warn"
        });
        return;
      }
      const result = await api.giveVcard({ list_no: that.$route.params.id });
      // console.log(result);
      if (result.error) {
        that.$vux.toast.show({
          text: result.message,
          type: "error"
        });
        // that.init();
      } else {
        this.showBox = !this.showBox;
        console.log(this.$store);
        var userinfo = this.$store.state.vux.userinfo;
        var name = userinfo.cname ? userinfo.cname : "我";
        console.log(userinfo);
        var pro_name = "卡券";
        if (
          this.card_info &&
          this.card_info.sku &&
          this.card_info.sku.sku_use_rule
        )
          pro_name = this.card_info.sku.sku_use_rule;
        name += "赠送了一次" + pro_name + "。快去领取吧";

        that.setWxShare(
          name,
          "线上新玩法、小矮人汽车带你玩转共享" + pro_name,
          that.site_url + "index.html#/giveVcard/" + result.data.card_code
        );
        // that.share();

        that.$emit("updateData");
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

@backcolor: #fff; //模块背景颜色 白色
@maringtop: 0.6rem; //上边距1rem;
.notice {
  color: #ffd100;
  padding: 1rem;
  padding-top: 3rem;
  text-align: left;
}
.cpts-onevcard {
  background: #fafafa;
  padding: 0.2rem 0.37rem;
  .card-box {
    color: #fff;
    width: 100%;
    height: 4.44rem;
    background: #ff6642;
    border-radius: 0.07rem;
    position: relative;
    overflow: hidden;
    &.cardused {
      filter: grayscale(100%);
    }
    .card-info {
      width: 70%;
      padding: 0.33rem;
      height: 2.4rem;
      overflow: hidden;
      h1 {
        margin-bottom: 0.05rem;
        font-size: 0.56rem;
      }
      p {
        padding: 0.06rem 0;
        width: 3.6rem;
        font-size: 0.22rem;
      }
    }
    .card-No {
      padding: 0.23rem;
      padding-top: 0;
      font-size: 0.38rem;
      font-family: "黑体";
    }
    .card-bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      font-size: 0.28rem;
      justify-content: space-between;
      background-color: rgba(0, 0, 0, 0.2);
      height: 0.76rem;
      line-height: 0.76rem;
      padding: 0 0.23rem;
      .count i {
        margin: 0 0.05rem;
      }
    }
    .card-qrcode {
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      width: 2.4rem;
      height: 2.4rem;
      background: #fff;
      border-radius: 0.07rem;
      padding: 0.17rem;
      img {
        width: 100%;
      }
      &-con {
        width: 100%;
        height: 100%;
      }
    }
  }
  .share {
    margin-top: 0.25rem;
    display: flex;
    justify-content: space-between;
    .share_sl {
      width: 2.2rem;
      height: 0.46rem;
      padding: 0.05rem 0.1rem;
      background: #26a96d;
      border-radius: 0.04rem;
      position: relative;
      i {
        color: #fff;
        font-size: 0.3rem;
        margin-left: 0.1rem;
        line-height: 0.46rem;
      }
      span {
        position: absolute;
        background: #fff;
        right: 0.06rem;
        top: 0.06rem;
        bottom: 0.06rem;
        left: 0.6rem;
        font-size: 0.26rem;
        line-height: 0.45rem;
        text-align: center;
        color: #26a96d;
      }
    }
    .share_sr {
      height: 0.48rem;
      padding: 0.1rem;
      font-size: 0.26rem;
      color: #272727;
      .fa-angle-right {
        color: @graycolor;
        font-size: 0.4rem;
        vertical-align: -2px;
      }
    }
  }
}
</style>
