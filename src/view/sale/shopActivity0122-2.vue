<template>
 <keep-alive>
  <div class="page-activity0122-bonus cpage-scroll go-back-top" ref="bodyscroll">
    <!-- header -->
      <div class="header">
          <img src="../../assets/activity0122logo.jpg" alt=""> 
      </div>
      <!-- form -->
      <div class="body">
       <div class="form" v-if="showType==='form'">
        <div class="hd">
          请填写基本信息
        </div>
        <div class="bd">
          <div class="bd-input">
            <div class="label">
                车牌号
            </div>
            <div class="input">
               <input class="form__input" placeholder="请输入车牌号" v-model.trim="plate_no" @input="$v.plate_no.$touch()">
            </div>
          </div>
          <div class="bd-input">
            <div class="label">
                接车单号
            </div>
            <div class="input">
               <input class="form__input" placeholder="请输入接车单号" v-model.trim="recp_no" @input="$v.recp_no.$touch()">
            </div>
          </div>
          <div class="bd-input">
            <div class="label">
                洗车单号
            </div>
            <div class="input">
               <input class="form__input" placeholder="请输入洗车单号" v-model.trim="vcard_no" @input="$v.vcard_no.$touch()">
            </div>
          </div>
          <div class="bd-input">
            <div class="label">
                金额
            </div>
            <div class="input">
               <input class="form__input" placeholder="请输入金额" v-model.trim="price" @input="$v.price.$touch()">
            </div>
          </div>
           <div class="bd-input sbumit">
            <div class="label" @click="sbumit">
                提交
            </div>
          
          </div>
        </div>
      </div>
      <div class="qrcode" v-if="showType==='qrcode'"> 
        <div class="qrode-wrapper">
          <div class="code">
            <spinner v-if="!qrcodelink"></spinner>
            <img :src="qrcodelink" alt="" v-if="qrcodelink" >
          </div>
          <div class="text">
            <p>
            微信打开扫一扫
            </p>
            <p>
                关注即可领取 <span class="yellow">￥1</span>  元现金红包   
            </p>
          </div>
          <div class="btn" @click="goBackForm">
            返回
          </div>

        </div>
      </div>
      </div>
    
      <!-- footer -->
      <div class="footer">
        <p>本活动为云南小矮人汽车服务连锁有限公司版权所有</p>
        <p>

          <img src="../../assets/activity0122footer.png" alt="">
        </p>
        
      </div>
       <div v-transfer-dom>
      <popup v-model="showpop" position="top" :show-mask="false">
        <div class="yellow-pop">
          {{errorMessage}}
        </div>
      </popup>
    </div>
  </div>
 </keep-alive>
</template>

<script>
import { Popup, TransferDom, Spinner } from "vux";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  between,
  requiredUnless,
  numeric
} from "vuelidate/lib/validators";

import BScroll from "better-scroll";
import { setTimeout } from "timers";
import api from "api/api";
export default {
  name: "shopActivity0122getBonus",
  components: { Popup, Spinner },
  directives: {
    TransferDom
  },
  mounted() {
    // this.meunScroll = new BScroll(this.$refs.bodyscroll, {
    //   click: true
    // });
  },
  mixins: [validationMixin],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showpop: false,
      plate_no: "",
      recp_no: "",
      vcard_no: "",
      price: "",
      errorMessage: "未填写完整或填写不正确",
      showType: "form",
      qrcodelink: "",
      clearTimeout: ""
    };
  },
  validations: {
    plate_no: {
      required,
      isPlate: function(val) {
        return /^(([\u4e00-\u9fa5][a-zA-Z]|[\u4e00-\u9fa5]{2}\d{2}|[\u4e00-\u9fa5]{2}[a-zA-Z])[-]?|([wW][Jj][\u4e00-\u9fa5]{1}[-]?)|([a-zA-Z]{2}))([A-Za-z0-9]{5}|[DdFf][A-HJ-NP-Za-hj-np-z0-9][0-9]{4}|[0-9]{5}[DdFf])$/.test(
          val
        );
      }
    },
    recp_no: {
      required: requiredUnless("isRecp")
    },
    vcard_no: {
      required: requiredUnless("isVcard")
    },
    price: {
      required
    },
    validationGroup: ["plate_no", "recp_no", "vcard_no", "price"]
  },
  computed: {
    isRecp() {
      return this.recp_no;
    },
    isVcard() {
      return this.recp_no;
    }
  },
  methods: {
    showMessage(message) {
      const that = this;
      that.errorMessage = message;
      that.showpop = true;
      clearTimeout(that.messageTimer);
      that.messageTimer = setTimeout(() => {
        that.showpop = false;
      }, 1000);
    },
    async sbumit() {
      const that = this;
      const { recp_no, vcard_no, plate_no, price, isRecp } = that;
      if (that.$v.validationGroup.$invalid) {
        if (that.$v.plate_no.$invalid) {
          that.showMessage("车牌号不合法");
          return;
        }
        if (isRecp && that.$v.recp_no.$invalid) {
          that.showMessage("接车单不合法");
          return;
        }
        if (!isRecp && that.$v.vcard_no.$invalid) {
          that.showMessage("洗车单不合法");
          return;
        }

        if (that.$v.price.$invalid) {
          that.showMessage("金额不合法");
          return;
        }
      } else {
        that.$vux.loading.show();
        const result = await api.addActivityUser({
          plate: plate_no,
          xcd_no: vcard_no,
          jcd_no: recp_no,
          amount: price
        });
        console.log(result);
        if (result.error) {
          that.showMessage(result.message);
        } else {
          that.showType = "qrcode";
          that.$vux.loading.hide();
          const qrResult = await api.productQr({
            pro_id: 51,
            ac_id: result.data.ac_id
          });
          console.log(qrResult);
          that.qrcodelink = qrResult.data.qrurl;
        }
      }
      console.log(123, this.$v);
    },
    goBackForm() {
      this.showType = "form";
      this.qrcodelink = "";
    }
  },
  mounted() {
    this.setWxShare(
      "扫码关注，赢现金红包！",
      "平台上线，回馈老客户",
      `${this.site_url}/index.html#/sale/shopActivity0122getBonus`
    );
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.page-activity0122-bonus {
  height: 100vh;
  background: #ec4432;
  .header {
    img {
      width: 100%;
    }
  }
  .body {
    height: 6.1rem;
    overflow: hidden;
    width: 6.2rem;
    margin: 0 auto;
    .form {
      .hd {
        color: #fff;
        font-size: 0.26rem;
        font-weight: lighter;
        margin-bottom: 0.1rem;
      }
      .bd {
        .bd-input {
          background: #fff;
          display: flex;
          height: 0.9rem;
          border-radius: 0.07rem;
          padding: 0 0.3rem;
          justify-content: space-between;
          align-items: center;
          font-size: 0.36rem;
          margin-bottom: 0.2rem;
          .label,
          .input,
          input {
            height: 0.7rem;
            line-height: 0.7rem;
          }
          .label {
            width: 1.8rem;
          }
          .input {
            width: 3.2rem;
          }
          input::-webkit-input-placeholder {
            font-size: 0.36rem;
          }
          input {
            border: none;
            padding: 0;
            font-size: 0.36rem;
            margin: 0;
            display: block;
            width: 100%;
          }
        }
        .bd-input.sbumit {
          .label {
            width: 100%;
          }
          background: #ffd100;
          text-align: center;
          color: #ec4632;
        }
      }
    }
    .qrcode {
      text-align: center;
      .code {
        // padding: 0.15rem;
        background: #fff;
        margin: 0 auto;
        width: 2.7rem;
        height: 2.7rem;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 100%;
          height: 100%;
          background: #e6e6e6;
        }
      }
      .text {
        margin: 0.2rem 0;
        font-size: 0.3rem;
        line-height: 1.5;
        color: #fff;
        .yellow {
          color: #fef502;
        }
      }
      .btn {
        margin-top: 0.5rem;
        border: 0.5px solid #fff;
        line-height: 0.9rem;
        border-radius: 0.07rem;
        font-size: 0.36rem;
        color: #fff;
        height: 0.9rem;
      }
    }
  }

  .footer {
    text-align: center;
    color: #fff;
    p {
      margin-bottom: 0.2rem;
      font-size: 0.22rem;
    }
    img {
      width: 2.08rem;
    }
  }
}
.yellow-pop {
  background: #ffd100;
  line-height: 4;
  color: #272727;
  text-align: center;
}
/*.shopindex {
  background:url(../../static/image/shopindex.png) no-repeat;
  width: 100%;
  height:100%;
  background-size:100% 100%;
  position:absolute;
}*/
</style>
