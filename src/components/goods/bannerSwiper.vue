<template>
  <div class="card-content cpts-bannerswiper">
    <swiper height="200px" dots-position="center" :list="TranImgList" :auto="true" :interval="3500">
      <!-- <swiper-item class="swiper-demo-img">
        <img src="../../assets/vcard1.jpg" alt="">
      </swiper-item>
      <swiper-item class="swiper-demo-img">
        <img src="../../assets/vcard2.jpg" alt="">
      </swiper-item>
      <swiper-item class="swiper-demo-img">
        <img src="../../assets/vcard3.jpg" alt="">
      </swiper-item> -->
    </swiper>
  </div>
</template>

<script>
import api from "api/api";

import { Confirm, XNumber, TransferDom, Swiper, SwiperItem } from "vux";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    imgList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {};
  },

  computed: {
    TranImgList: function() {
      return this.imgList.map(item => {
        return { img: item };
      });
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {}
  },
  watch: {}
};
</script>

<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

.cpts-bannerswiper {
  img {
    width: 100%;
    height: 200px;
  }
}
</style>
