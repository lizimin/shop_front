<template>
  <div class="cpts-customption">

    <div class="customption-wrapper">
      <div class="hd">
        <div class="title">
          <span class="txt">
            赠送记录
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
        <div class="line" v-for="(item,index) in givingList" :key="index">
          <div class="content">

            <p class=" title ">

              <span> 时间{{item.create_time}}</span>
            </p>
            <p class="time">
              <span>卡号：{{item.card_code}}</span>

            </p>
          </div>
          <div class="menu">
            <p @click="cancelGive(item)" v-show="!item.status" class="btn-cancel">撤回赠送</p>
            <p class="status" :class="`status${item.status}`">
              <span>状态：</span>{{GIVINGSTATUS.filter(status=>status.type===item.status)[0].text}}</p>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Rater } from 'vux';
import api from 'api/api';
const GIVINGSTATUS = [
  {
    type: 0,
    text: '未被领取'
  },
  {
    type: 1,
    text: '已被领取'
  },
  {
    type: 2,
    text: '过期退回'
  },
  {
    type: 3,
    text: '已撤销'
  }
];
export default {
  components: {
    Rater
  },
  props: {
    givingList: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: 'vcard'
    }
  },
  mounted() {
    // this.calcWidth();
  },
  data() {
    return {
      GIVINGSTATUS
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      // const result = await api.getConsumptionList({ type: this.type });
      // this.consumptionList = result.data.list;
      // console.log(this.consumptionList, "consumptionList");
    },
    async cancelGive(card) {
      const { card_code } = card;
      const result = await api.resetGiveVcard({ card_code });
      console.log(result);
      if (result.error) {
        this.$vux.toast.show({
          text: result.message,
          type: 'cancel',
          time: 3000
        });
      } else {
        this.$emit('updateData');
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import '~styles/index.less'; // 全局自定义样式

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
        flex: 0 0 4.2rem;
        overflow: hidden;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 100%;
        }
      }
      .time {
        color: @graycolor;
        line-height: 1;
        font-size: 0.26rem;
      }
      .menu {
        flex: 0 0 2.2rem;
        padding-right: 0.2rem;
        font-size: 0.24rem;
        line-height: 0.38rem;
        .btn-cancel {
          border: 1px solid @red;
          color: @red;
          text-align: center;
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
