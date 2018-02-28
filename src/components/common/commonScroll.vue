<template>
  <div class="cpts-verticalscrol">
    <div class="cpts-verticalscrol-hd">
      <div class="hd-left" solt="left" @click="goback">
        <span class="fa fa-angle-left"></span>
      </div>
      <div class="hd-middle" solt="middle">
        {{title}}
      </div>
      <div class="hd-right" solt="right">

      </div>
    </div>
    <div class="cpts-verticalscrol-bd">

      <scroll ref="scroll" :data="dataList" :scrollbar="scrollbarObj" :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp" @click="clickItem">


      </scroll>
    </div>
  </div>
</template>

<script >
const normalScrollListPage = {
  previousTxt: "",
  followingTxt: ""
};
import { ease } from "./js/ease";
import api from "api/api";

import Scroll from "./scroll/scroll.vue";
export default {
  props: {
    title: {
      type: String,
      default: "查看列表"
    },
    dataMethod: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      scrollbar: true,
      scrollbarFade: true,
      pullDownRefresh: true,
      pullDownRefreshThreshold: 90,
      pullDownRefreshStop: 40,
      pullUpLoad: false,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: "正在加载数据中",
      pullUpLoadNoMoreTxt: "没有更多了",
      startY: 0,
      scrollToX: 0,
      scrollToY: -200,
      scrollToTime: 700,
      scrollToEasing: "bounce",
      scrollToEasingOptions: ["bounce", "swipe", "swipeBounce"],
      dataList: [],
      itemIndex: 0,
      page: {
        current_page: 0,
        last_page: 0,
        total: 0
      }
    };
  },
  created() {
    // console.log(api);
    this.init();
  },
  components: {
    Scroll
  },
  watch: {
    page: function(newvlaue) {
      if (newvlaue.current_page < newvlaue.last_page) {
        this.pullUpLoad = true;
      }
    },
    scrollbarObj: {
      handler() {
        this.rebuildScroll();
      },
      deep: true
    },
    pullDownRefreshObj: {
      handler() {
        this.rebuildScroll();
      },
      deep: true
    },
    pullUpLoadObj: {
      handler() {
        this.rebuildScroll();
      },
      deep: true
    },
    startY() {
      this.rebuildScroll();
    }
  },
  computed: {
    scrollbarObj: function() {
      return this.scrollbar ? { fade: this.scrollbarFade } : false;
    },
    pullDownRefreshObj: function() {
      return this.pullDownRefresh
        ? {
            threshold: parseInt(this.pullDownRefreshThreshold),
            stop: parseInt(this.pullDownRefreshStop)
          }
        : false;
    },
    pullUpLoadObj: function() {
      return this.pullUpLoad
        ? {
            threshold: parseInt(this.pullUpLoadThreshold),
            txt: {
              more: this.pullUpLoadMoreTxt,
              noMore: this.pullUpLoadNoMoreTxt
            }
          }
        : false;
    }
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    async init() {
      const { dataMethod } = this;

      const reuslt = await api[dataMethod]();
      console.log(reuslt);
      const { list, page_data } = reuslt.data;
      if (list.length) {
        this.dataList = list;
        this.page = page_data;
      }
    },
    scrollTo() {
      this.$refs.scroll.scrollTo(
        this.scrollToX,
        this.scrollToY,
        this.scrollToTime,
        ease[this.scrollToEasing]
      );
    },
    onPullingDown() {
      // 模拟更新数据
      console.log("pulling down and load data");
      setTimeout(() => {
        if (this._isDestroyed) {
          return;
        }
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift(normalScrollListPage.newDataTxt + new Date());
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate();
        }
      }, 2000);
    },
    onPullingUp() {
      // 初始时候page为空对象
      //  const { dataMethod } = this;
      // if (dataMethod) {
      //   if (this.dataList.length) {
      //     // 初次加载有数据
      //     // 初次加载便加载完毕所有数据
      //   } else {
      //     // 初次加载没数据
      //     console.log("初次加载没数据");
      //     this.$refs.scroll.forceUpdate();
      //   }
      // }
      // setTimeout(() => {
      //   if (this._isDestroyed) {
      //     return;
      //   }
      //   if (Math.random() > 0.5) {
      //     // 如果有新数据
      //     this.items = this.items.concat(newPage);
      //   } else {
      //     // 如果没有新数据
      //     this.$refs.scroll.forceUpdate();
      //   }
      // }, 1500);
    },
    clickItem() {
      this.$router.back();
    },
    updateScrollbar(val) {
      this.scrollbar = val;
    },
    updateScrollbarFade(val) {
      this.scrollbarFade = val;
    },
    updatePullDownRefresh(val) {
      this.pullDownRefresh = val;
    },
    updatePullDownRefreshThreshold(val) {
      this.pullDownRefreshThreshold = val;
    },
    updatePullDownRefreshStop(val) {
      this.pullDownRefreshStop = val;
    },
    updatePullUpLoad(val) {
      this.pullUpLoad = val;
    },
    updatePullUpLoadThreshold(val) {
      this.pullUpLoadThreshold = val;
    },
    updatePullUpLoadMoreTxt(val) {
      this.pullUpLoadMoreTxt = val;
    },
    updatePullUpLoadNoMoreTxt(val) {
      this.pullUpLoadNoMoreTxt = val;
    },
    updateStartY(val) {
      this.startY = val;
    },
    updateScrollToX(val) {
      this.scrollToX = val;
    },
    updateScrollToY(val) {
      this.scrollToY = val;
    },
    updateScrollToTime(val) {
      this.scrollToTime = val;
    },
    updateScrollToEasing(val) {
      this.scrollToEasing = val;
    },
    rebuildScroll() {
      Vue.nextTick(() => {
        this.$refs.scroll.destroy();
        this.$refs.scroll.initScroll();
      });
    }
  }
};
</script>
<style lang="less" scoped>
.cpts-verticalscrol {
  height: 100%;
  // background: #000;
  &-hd {
    height: 1rem;
    display: flex;
    background: #fff;
    border-bottom: 1px solid #eee;
    line-height: 1rem;
    // text-align: center;
    .hd-left {
      flex: 0 0 1.7rem;
      padding-left: 0.3rem;
      font-size: 0.4rem;
    }
    .hd-middle {
      flex: 0 0 3.5rem;
      text-align: center;
    }
    .hd-right {
      flex: 0 0 2rem;
    }
  }
  &-bd {
    height: calc(~"100vh - 1rem");
    background: red;
  }
}
</style>


