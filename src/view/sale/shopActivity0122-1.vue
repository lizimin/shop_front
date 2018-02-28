<template>
 <keep-alive>
  <div class="page-activity0122-index cpage-scroll go-back-top" ref="bodyscroll">
    <!-- <img src="../../static/image/shopindex.png" style="width:100%;"> -->
    <div class="tips">
      <img src="../../assets/activity01221.jpg" alt="">
      <img src="../../assets/activity01222.jpg" alt="">
       <div class="links">
         <div class="linkswrapper">
          <router-link :to="item.link" v-for="(item,index) in links" :key="index">
            <div class="link " :class="`link${index}`">
            </div>
          </router-link>
           <router-link  class="moresale" :to="'/shop'">
           
          </router-link>
          
        </div>
       </div>
      <img src="../../assets/activity01223.jpg" alt="">
      <img src="../../assets/activity01224.jpg" alt="">
      <!-- <img src="../../assets/activity01221.jpg" alt=""> -->
      <img src="../../assets/activity01225.jpg" alt="">
      <!-- <img src="../../assets/commonbottom.jpg" alt=""> -->
    </div>
  </div>
 </keep-alive>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "shopActivity0122",
  mounted() {
    // this.meunScroll = new BScroll(this.$refs.bodyscroll, {
    //   click: true
    // });
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      links: [
        {
          src:
            "http://ma.gotomore.cn/public/uploads/image/20180113/d039c8dcbebbdba7dcd12149f4215430.jpg",
          hdText: "任意部位修复做漆",
          link: "/goods/49?code=P96",
          mall_price: "199.00",
          showLayer: false,
          market_price: "299"
        },
        {
          src:
            "http://ma.gotomore.cn/public/uploads/image/20180113/cc5b0fadd7edb19a2b3e3de1de3b2bb9.jpg",
          hdText: "无忧保养套餐",
          link: "/goods/48?code=P95",
          mall_price: "680.00",
          showLayer: false,
          market_price: "800"
        }
      ]
    };
  },
  mounted() {
    this.setWxShare(
      "庆祝平台上线99元做漆你不入？",
      "任意部位做漆低至￥99，一车仅限一次，手快有手慢无。",
      `${this.site_url}/index.html#/sale/shopActivity0122`
    );
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" >
.page-activity0122-index {
  height: 100vh;
  overflow: scroll;
  .tips {
    img {
      display: block;
      width: 100%;
    }
  }
  .links {
    position: relative;
    a {
      width: 100%;
      display: block;
      height: 2.53rem;
    }
    a.moresale {
      margin-top: 1rem;
    }
    .linkswrapper {
      width: 6.8rem;
      position: absolute;
      top: 0.9rem;
      left: 0.35rem;
    }
  }
}
/*.shopindex {
  background:url(../../static/image/shopindex.png) no-repeat;
  width: 100%;
  height:100%;
  background-size:100% 100%;
  position:absolute;
}*/
</style>
