<template>
  <div id="my" class="page-my-vcards cpage-scroll">
    <div class="search-bar">
      <search-bar></search-bar>
    </div> 
    <!-- my-wallet start-->
    <my-vcards :cardGoods="cardGoods" :morelink="'/myVcards/index'" :myvcards="myvcards"></my-vcards>
    <my-given-vcards :cardGoods="cardGoods"  :morelink="'/myVcards/vcardlist'" :type=2 :givenvcards="givenvcards"></my-given-vcards>
    <!-- my-wallet end-->
    <!-- record start-->
    <consumption-list type="vcard"></consumption-list>
    <!-- record end-->
    <recommend-list></recommend-list>
  </div>

</template>

<script>
import {
  Grid,
  GridItem,
  Swiper,
  SwiperItem,
  GroupTitle,
  FlexboxItem,
  Cell,
  Marquee,
  MarqueeItem,
  Flexbox
} from "vux";
import api from "api/api";
import recommendList from "components/goods/recommend";
import myVcards from "components/vcard/vcardGroup";
import givenVcards from "components/vcard/givenVcardGroup";

import searchBar from "components/common/searchBar";
import consumptionList from "components/vcard/consumptionGroup";

export default {
  name: "MyVcards",
  components: {
    Grid,
    recommendList,
    consumptionList,
    myVcards: myVcards,
    myGivenVcards: givenVcards,
    GridItem,
    Swiper,
    SwiperItem,
    Marquee,
    MarqueeItem,
    GroupTitle,
    FlexboxItem,
    searchBar,
    Cell,
    Flexbox
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",

      cardGoods: [],
      myvcards: [],
      givenvcards: [],
      consumption: []
    };
  },
  activated: function() {
    this.fetchData();
  },
  computed: {
    activity_list1: function() {
      return this.activity_list.filter((item, index) => index % 2 === 0);
    },
    activity_list2: function() {
      return this.activity_list.filter((item, index) => index % 2 !== 0);
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      // -----我的卡片组件
      const cardResult = await api.getVcardsByUser();
      const ReCardResult = await api.getRecommendVcards();
      this.cardGoods = ReCardResult.data.list.map((item, index) => {
        item.styleClass = `card${index * 1 + 1}`;
        return item;
      });
      this.myvcards = cardResult.data.list.map((item, index) => {
        item.styleClass = `card${index * 1 + 1}`;
        return item;
      });
      // 获赠的卡片
      const givenCardResult = await api.getMyGive({ type: 0, status: 1 });
      this.givenvcards = givenCardResult.data.list.map((item, index) => {
        item.styleClass = `card${index * 1 + 1}`;
        item.card_code = item.card_code;
        item.vc_id = item.vc_id;
        return item;
      });
    },
    fetchData: function() {
      var self = this;
      this.xarpost("Customer/getCustomer").then(d => {
        let { data, error, message } = d;
        self.customer = data;
      });
    },
    kaifa: function() {
      this.showtoast("功能开发中...");
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

.page-my-vcards {
  // ===================vux-cpts

}
</style>
