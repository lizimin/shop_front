<template>
  <div id="app">
    <div v-transfer-dom>
      <!-- <loading v-model="isLoading" position="absolute"></loading> -->
      <spinner v-if="isLoading" class="loading-v vux-spinner-android" type="crescent" size="25px"></spinner>
      <toast v-model="toastdata.status" position="middle" type="text" :time="2000" width="auto">{{ toastdata.text }}</toast>
    </div>
    <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
        <router-view></router-view>

    </transition>
    <go-back-top :threshold="500" :right="160" :bottom="60" :width="40" :height="40" :svgMajorColor="'#FFD100'" :svgMinorColor="'#FFD100'" :svgType="'rocket'" />
    <tabbar active-color="#000" v-show="isShowTabbar">
      <tabbar-item :key="index" v-for="(item,index) in tabbarList" :link="item.link" :selected="item.selected">
        <img slot="icon" :src="item.icon">
        <img slot="icon-active" :src="item.iconActive">
        <span slot="label" :class="[item.isActive ? '': 'def-icon-class']">{{item.label}}</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, TransferDom, Loading, Toast, Spinner } from 'vux';
import { mapState } from 'vuex';
export default {
  name: 'app',
  directives: {
    TransferDom
  },
  components: {
    Tabbar,
    TabbarItem,
    Loading,
    Toast,
    Spinner
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading,
      direction: state => state.vux.direction,
      openid: state => state.vux.openid,
      showtabbar: state => state.vux.showtabbar,
      toastdata: state => state.vux.toastdata
    }),
    isShowTabbar() {
      // console.log(this.$route.path);
      const blackList = [
        /myVcards\/orderlist/,
        /myVcards\/vcardlist/,
        /myVcards\/givinglist/,
        /sale\/shopActivity0122/,
        /count_page/
      ];
      return !blackList.some(item => item.test(this.$route.path));
    }
  },
  data() {
    return {
      tabbarList: [
        {
          icon: '../static/image/def-icon1.png',
          iconActive: '../static/image/icon1.png',
          label: '商城',
          link: '/shop',
          selected: false
        },
        {
          icon: '../static/image/def-icon2.png',
          iconActive: '../static/image/icon2.png',
          label: '优惠卡',
          link: '/sale',
          selected: false
        },
        {
          icon: '../static/image/def-icon3.png',
          iconActive: '../static/image/icon3.png',
          label: '门店',
          link: '/tmap',
          selected: false
        },
        {
          icon: '../static/image/def-icon4.png',
          iconActive: '../static/image/icon4.png',
          label: '我的',
          link: '/my',
          selected: false
        }
      ]
    };
  },
  mounted: function(e) {
    var path = this.$route.path;
    var self = this;
    const url = document.location.href;
  
    this.tabbarList.map(function(item, index) {
      if (url.indexOf(item.link) != -1) {
        item.selected = true;
      }
      // console.log(url, item.link);
    });
  }
};
</script>
<style>
@import 'assets/css/font-awesome.min.css';
</style>

<style lang="less" >
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
// @import './styles/reset.less';
@import './styles/index.less'; // 全局自定义样式
body {
  background-color: #ffffff;
  max-width: 750px;
  margin: 0 auto;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.def-icon-class {
  color: #807f7f;
}
.select-icon-class {
  color: #fe4d3d;
}
.router-view {
  width: 100%;
}
.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #f70968;
}
.vux-demo-tabbar
  .weui-tabbar_item.weui-bar__item_on
  .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
}
.vux-pop-out-leave-active {
  opacity: 0;
}
.vux-pop-in-enter {
  opacity: 0;
}
.vux-pop-in-leave-active {
  opacity: 0;
}
.loading-v {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1000;
}
#app {
  background-color: #f3f4f5;
  .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
  .vux-slider .vux-indicator-right > a > .vux-icon-dot.active {
    background: #ffc107;
  }
}

.vux-spinner-android {
  stroke: #ffc107;
}
</style>
