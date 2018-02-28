<template>
  <div id="goods">
    <swiper :list="demo01_list"></swiper>

  </div>

</template>

<script>
import { Swiper } from 'vux';
export default {
  name: 'HelloWorld',
  components: {
    Swiper
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      demo01_list: [
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg'
          // title: '送你一朵fua'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg'
          // title: '送你一辆车'
        },
        {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/5.jpg',
          // title: '送你一次旅行',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
