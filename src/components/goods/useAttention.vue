<template>
  <div class="card-content cpts-goods-attention">
    <div class="line" @click="showdetail=!showdetail">
      <div class="hd">
        <div class="hd-icon">
          <svg width="29px" height="29px" viewBox="0 0 29 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
            <title>Shape</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="洗车卡详情" transform="translate(-22.000000, -1073.000000)" fill-rule="nonzero" fill="#FE4D3D">
                <path d="M36.5092809,1073 C28.4919731,1073 22,1079.05864 22,1086.5168 C22,1093.35492 27.4502812,1099.00611 34.5189052,1099.90959 C34.4072953,1100.56506 34.1840756,1102 34.2770838,1102 C34.3514904,1102 38.164827,1100.47648 40.6946504,1099.44899 C46.6657775,1097.78375 50.9999601,1092.61087 50.9999601,1086.49908 C51.0185618,1079.05864 44.5265887,1073 36.5092809,1073 Z M30,1083.80491 C30,1083.18557 30.6617647,1082.66667 31.5,1082.66667 C32.3382353,1082.66667 33,1083.16883 33,1083.80491 L33,1085.41183 C33,1085.71313 32.8455882,1086.01443 32.5588235,1086.2153 C32.2720588,1086.4329 31.8970588,1086.53333 31.5220588,1086.53333 C30.7058824,1086.53333 30.0220588,1086.03117 30.0220588,1085.39509 L30.0220588,1083.80491 L30,1083.80491 Z M36.9711075,1093.3 C34.1396469,1093.3 31.8089888,1092.18742 31,1090.80126 L31.9823435,1090.4 C32.7142857,1091.4761 34.6789727,1092.42453 37.0096308,1092.42453 C39.3788122,1092.42453 41.3242376,1091.4761 42.0176565,1090.43648 C42.3451043,1090.58239 42.5569823,1090.63711 43,1090.83774 C42.1910112,1092.20566 39.7640449,1093.3 36.9711075,1093.3 Z M43,1085.4 C43,1086.01667 42.3382353,1086.53333 41.5,1086.53333 C40.6838235,1086.53333 40,1086.03333 40,1085.4 L40,1083.8 C40,1083.18333 40.6617647,1082.66667 41.5,1082.66667 C42.3161765,1082.66667 43,1083.16667 43,1083.8 L43,1085.4 L43,1085.4 Z" id="Shape"></path>
              </g>
            </g>
          </svg>
        </div>
        <div class="hd-check">
          <span class="check">在线咨询
          </span>
          <span class="angle"></span>

        </div>
      </div>
      <div class="bd">
        <i>1.</i>
        <span class="txt">选购卡片</span>
        <span class="fa fa-angle-right"></span>
        <i>2.</i>
        <span class="txt">发券码到手机</span>
        <span class="fa fa-angle-right"></span>
        <i>3.</i>
        <span class="txt">到店凭券享受服务</span>
      </div>
    </div>
    <div v-transfer-dom>
      <slide-up v-model="showdetail" :cancelText="'继续购买'" :titleText="'卡片使用说明'">
        <div class="slide-content">
          <div class="slide-content-group">
           
            <p class="txt-center">
             <img src="../../assets/qrcode_zx.jpg" alt="">
             </p>
          </div>
          
        </div>
      </slide-up>
    </div>
  </div>
</template>

<script>
import { Qrcode, Confirm, TransferDom } from "vux";

export default {
  directives: {
    TransferDom
  },
  props: {
    type: {
      type: Number,
      default: 1
    },
    attentionList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    Qrcode,
    Confirm
  },
  data() {
    return {
      showdetail: false,
      qrWidth: 80,
      showNotice: false
    };
  },

  computed: {},
  created() {
    this.init();
  },
  methods: {
    async init() {}
  }
};
</script>

<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

.cpts-goods-attention {
  height: 0.8rem;
  background: #fff;
  position: relative;
  // margin-top: 0.1rem;
  border-top: 1px solid @gray;
  border-bottom: 1px solid @gray;

  .line {
    display: flex;
    justify-content: space-between;
    line-height: 0.8rem;
    padding: 0 0.2rem;
    font-size: 0.28rem;
    color: #8d8c8c;
    .hd {
      font-size: 0.2rem;
      display: flex;
      &-icon {
        flex: 0 0 0.5rem;
        justify-content: center;
        align-items: center;
        display: flex;
        svg {
          width: 0.3rem;
          pointer-events: none;
          // height: 1rem;
        }
      }
      .fa {
        font-size: 0.34rem;
        margin-right: 0.1rem;
        vertical-align: -1px;
        color: #fe4d3d;
        font-weight: lighter;
      }
      &-check {
        position: relative;
        .check {
          background: #fe4d3d;
          color: #fff;
          padding: 0.1rem 0.2rem;
          border-radius: 0.07rem;
          position: relative;
        }
        .angle {
          position: absolute;
          width: 0;
          height: 0;
          left: -0.05rem;
          top: 50%;
          margin-top: -0.1rem;
          border-top: 0.1rem solid transparent;
          border-right: 0.2rem solid #fe4d3d;
          border-bottom: 0.1rem solid transparent;
        }
      }
    }
    .bd {
      font-size: 0.18rem;
      i {
        color: #ff4d00;
      }
      .txt {
        color: #272727;
      }
    }
  }
  .slide-group {
  }
}
</style>
