<template>
  <div class="page-vcard-detail cpage-scroll go-back-top">
        <div class="search-bar">
      <search-bar></search-bar>
    </div> 
    <one-vcard @updateData="update" :qrcode="qrcode" v-if="card_info.name" :card_info="card_info" :type="2"></one-vcard>
    <div class="group">
      <giving-list @updateData="update" :givingList="givingList"></giving-list>
    </div>
    <div class="group">
      <consumption-list :consumptionList="consumption"></consumption-list>
    </div>
    <!-- record end-->
    <recommend-list></recommend-list>
    <common-bottom></common-bottom>
  </div>

</template>

<script>
import api from "api/api";
import recommendList from "components/goods/recommend";
import consumptionList from "components/vcard/consumptionGroup";
import givingList from "components/vcard/givingStatusGroup";
import oneVcard from "components/vcard/oneVcard";

import searchBar from "components/common/searchBar";
export default {
  name: "VcardDetail",
  components: {
    recommendList,
    consumptionList,
    givingList,
    searchBar,
    oneVcard
  },
  data() {
    return {
      qrcode: {
        x_str: ""
      },
      consumption: [],
      givingList: [],
      card_info: {}
    };
  },
  activated: function() {
    this.fetchData();
  },
  computed: {},
  created() {
    this.init();
  },
  methods: {
    async init() {
      // -----卡片使用记录
      const that = this;
      const cardDetailResult = await api.getCardInfo({
        type: "vcard",
        ...that.$route.params
      });
      const card_info = cardDetailResult.data;
      that.card_info = Object.assign({}, card_info, {
        use_info: card_info.card_info.use_info
      });
      const consumptionResult = await api.getConsumptionList({
        type: "vcard",
        id: that.$route.params.id
      });
      that.consumption = consumptionResult.data.list;

      // that.consumption = cardDetailResult.data;

      const qrcode = await api.getMyVcard({ list_no: card_info.list_no });
      console.log(qrcode);
      that.qrcode = qrcode.data;

      const presentResult = await api.getMyGive({
        status: -1,
        type: 1,
        list_no: card_info.list_no
      });
      that.givingList = presentResult.data.list;

      console.log(presentResult, 12312321);
    },
    update() {
      this.init();
      console.log(123);
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

@backcolor: #fff; //模块背景颜色 白色
@maringtop: 0.6rem; //上边距1rem;

.page-vcard-detail {
  .group {
  }
  // ===================vux-cpts
}
</style>
