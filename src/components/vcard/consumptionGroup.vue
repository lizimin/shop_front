<template>
  <div class="cpts-customption">

    <div class="customption-wrapper">
      <div class="hd">
        <div class="title">
          <span class="txt">
            近期使用记录
          </span>
        </div>
        <div class="link">
          更多记录
          <span class="fa fa-angle-right"></span>
        </div>
      </div>
      <div class="bd">
        <div class="empty-wrapper" v-show="false">
          赶快去使用吧
        </div>
        <div class="line" v-for="(item,index) in consumptionList" :key="index">
          <div class="content">

            <p class=" title ">

              <span> {{item.action}}</span>
            </p>
            <p class="time">
              <span>卡号：</span>{{item.out_trade_no}}

            </p>
          </div>
          <div class="price">
            <p v-if="item.vc_action_type == 1">
              <span v-if="!item.comment">待评价</span>
              <rater active-color="#FE4D3D" :font-size="12" :disabled="true" v-model="item.comment.range" :step="1" :min="0" :max="5"></rater>

            </p>
            <p>
              {{item.create_time}}
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Rater } from "vux";
import api from "api/api";
export default {
  components: {
    Rater
  },
  props: {
    consumptionList: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: "vcard"
    }
  },
  mounted() {
    // this.calcWidth();
  },
  data() {
    return {};
  },
  created() {
    this.init();
  },
  computed: {
    actionType: function(actionType){
      var result = ''
      switch (actionType) {
        case 1:
          result = '消费'
          break;
      
        default:
          result = ''
          break;
      }
      return result
    }
  },
  methods: {
    async init() {
      // const result = await api.getConsumptionList({ type: this.type });
      // this.consumptionList = result.data.list;
      // console.log(this.consumptionList, "consumptionList");
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

@backcolor: #fff; //模块背景颜色 白色
@maringtop: 0.6rem; //上边距1rem;
.cpts-customption {
  margin-top: 0.1rem;
  line-height: 0.7rem;
  font-size: 0.28rem;
  background: #fff;
  .hd {
    border-bottom: 1px solid #eaeaea;
    height: 0.7rem;
    line-height: 0.7rem;
    padding: 0 0.24rem;
    display: flex;
    justify-content: space-between;
    .link {
      color: @graycolor;
      font-size: 0.22rem;
      .fa {
        margin-left: 0.05rem;
        font-size: 0.4rem;
        vertical-align: -2px;
      }
    }
  }
  .bd {
    background: #fafafa;
    .line {
      width: 7.2rem;
      margin: 0 auto;
      padding: 0.2rem 0rem;
      display: flex;
      border-bottom: 1px solid @gray;
      justify-content: space-between;
      border-bottom: 1px solid #ccc;
      line-height: 2;
      font-weight: normal;
      &:last-child {
        border: none;
      }
      .content {
        padding: 0;
        line-height: 0.5rem;
      }
      .time {
        color: @graycolor;
        line-height: 1;
        font-size: 0.26rem;
      }
      .price {
        display: flex;
        flex: 0 0 2.5rem;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        color: #9c9c9c;
        font-size: 0.2rem;
        p {
          width: 100%;
          text-align: right;
        }
      }
    }
  }
  .customption-wrapper {
  }
}
.mtop {
  margin-top: @maringtop;
}
.viscroll-wrapper {
  position: relative;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
}
</style>
