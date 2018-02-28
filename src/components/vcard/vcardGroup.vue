<template>
  <div class="cpts-myvcard">
    <div class="hd">
      <div class="title">
        <span class="icon">
          <i class="fa" :class="iconClass"></i>
        </span>
        <span class="txt">
          {{hdText}}
        </span>
        <span>({{myvcards.length}})</span>
      </div>
      <div class="link">
        <router-link :to="morelink">
          <span>
            {{linkText}}
          </span>
          <span class="fa fa-angle-right"></span>
        </router-link>
      </div>
    </div>
    <div class="empty-wrapper" v-show="!myvcards.length">

      <div class="bd">
        <div class="card-list">
          <div class="mycard" slot="mycard">
            <div class="card-content">
              <div class="card-content-wrapper">
                <p class="title">
                  {{empyStr.hdText}}
                </p>
                <p class="des">
                  {{empyStr.bdText}}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="goods-list" v-show="type==1">
          <div class="shopcard" v-for="(item,index) in cardGoods" :key="index" :class="item.styleClass">
            <router-link :to="`/goods/${item.pro_id}?code=${item.sku_code}`">
              <div class="card-content">
                <p class="title">
                  {{item.extra_data.use_position}}
                </p>
              </div>
              <div class="btn">
                <router-link :to="'/vcard/2'">
                  <span>去购买</span>
                </router-link>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="mycards-wrapper" v-show="myvcards.length">
      <div class="content">
        <div class="box">
          <div>
            <div class="card-list">

              <div v-for="(item,index) in myvcards" :key="index" class="card-item" :class="item.styleClass">
                <router-link :to=" type===1?`/myVcards/vcard/${item.list_no}`:`/myVcards/givenVcard/${item.card_code}`">
                  <h3>{{item.extra_data.use_position}}</h3>
                  <p>{{item.extra_data.short_des}}</p>
                  <div class="card-item_bottom">
                    <span>{{item.exp_time_str}}</span>
                    <span class="count">
                      <i class="used">{{item.use_info.can_use}}</i>/{{item.use_info.count}} </span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "vcardsGroup",
  props: {
    cardGoods: {
      type: Array,
      default: () => []
    },
    type: {
      type: Number,
      default: 1
    },
    myvcards: {
      type: Array,
      default: function() {
        return [];
      }
    },
    morelink: {
      type: String,
      default: "/myVcards"
    },
    showMoreLink: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    iconClass: function() {
      return this.type === 1 ? "fa-credit-card" : "fa-credit-card";
    },
    hdText: function() {
      return this.type === 1 ? "我的卡包" : "获赠的卡";
    },
    linkText: function() {
      return this.type === 1 ? "更多卡片" : "";
    },
    empyStr: function() {
      return this.type === 1
        ? {
            hdText: "还没有卡",
            bdText: "快去选购吧"
          }
        : {
            hdText: "没有人送你哦",
            bdText: "快去许愿"
          };
    }
  },
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

@backcolor: #fff; //模块背景颜色 白色
@maringtop: 0.6rem; //上边距1rem;
.cpts-myvcard {
  margin-bottom: 0.1rem;
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
      a{
        display: block;
        
      }
      .fa {
        margin-left: 0.05rem;
        font-size: 0.4rem;
        vertical-align: -2px;
      }
    }
  }
  .bd {
    height: 2.09rem;
    background: #fafafa;
    display: flex;
    padding-top: 0.3rem;
    padding-left: 0.37rem;
    .card-list {
      flex: 0 0 2.6rem;
      .mycard {
        overflow: auto;
        .card-content {
          border: 1px dashed #979797;
          border-radius: 7px;
          width: 2.3rem;
          height: 1.5rem;
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;

          p.title {
            font-size: 0.28rem;
          }
          p.des {
            font-size: 0.16rem;
            line-height: 1;
          }
        }
      }
    }
    .goods-list {
      overflow: scroll;
      display: flex;
      // width: 4rem;
      .shopcard {
        width: 1.5rem;
        margin-right: 0.3rem;
        &:last-child {
          padding-right: 0.3rem;
        }
        .title {
          text-align: center;
          width: 1.5rem;
          height: 1rem;
          line-height: 1rem;
          color: #fff;
          border-radius: 0.05rem;
          opacity: 0.7;
          overflow: hidden;
        }
        .btn {
          text-align: center;
          span {
            font-size: 0.2rem;
            padding: 0.05rem 0.2rem;
            background: @red;
            border-radius: 0.3rem;
            color: #fff;
          }
        }
        &.card1 .title {
          background: @dark;
        }
        &.card2 .title {
          background: @red;
        }
        &.card3 .title {
          background: @yellow;
        }
        &.card4 .title {
          background: @dark;
        }
        &.card5 .title {
          background: @red;
        }
        &.card6 .title {
          background: @yellow;
        }
      }
    }
  }
  .mycards-wrapper {
    .box {
      background: #fafafa;
      padding: 0.28rem;
      overflow: hidden;
      .card-list {
        display: flex;
        flex-wrap: nowrap;
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
      }
      .card-item {
        display: inline-block;
        width: 2.3rem;
        min-width: 2.3rem;
        height: 1.5rem;
        border-radius: 0.07rem;
        background: #ff6642;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        margin: 0.1rem;
        margin-right: 0rem;
        padding: 0.09rem;
        position: relative;
        overflow: hidden;
        &.card2 {
          background: @blue;
        }
        &.card3 {
          background: @yellow;
        }
        h3 {
          color: #fff;
          font-size: 0.3rem;
          font-weight: normal;
          line-height: 2;
        }
        p {
          color: rgba(0, 0, 0, 0.4);
          font-size: 0.2rem;
          margin-top: 0.05rem;
          line-height: 1;
        }
        .card-item_bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: rgba(0, 0, 0, 0.1);
          height: 0.4rem;
          color: #fff;
          line-height: 0.4rem;
          display: flex;
          padding-left: 0.1rem;
          justify-content: space-between;
          padding: 0.05rem 0.1rem;
          font-size: 0.2rem;
          .count {
            color: rgba(0, 0, 0, 0.8);
            i {
              color: #fff;
              margin: 0 0.05rem;
              font-size: 0.18rem;
            }
          }
        }
      }
    }
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
