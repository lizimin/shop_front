<template>
  <div class="page-vcard-detail">
    <one-vcard :type="1" :card_code="card_code"></one-vcard>
    <consumption-list :consumptionList="consumption"></consumption-list>
    <!-- record end-->
    <recommend-list></recommend-list>
  </div>

</template>

<script>
import api from "api/api";
import recommendList from "components/goods/recommend";
import consumptionList from "components/vcard/consumptionGroup";
import oneVcard from "components/vcard/oneVcard";

export default {
  name: "VcardDetail",
  components: {
    recommendList,
    consumptionList,
    oneVcard
  },
  data() {
    return {
      qrcode: {},
      consumption: [],
      card_info: {},
      card_code: ""
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
      const consumptionResult = await api.getConsumptionList({
        type: "vcard",
        id: that.$route.params.id
      });
      that.consumption = consumptionResult.data.list;
      that.card_code = that.$route.params.card_code;

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
  // ===================vux-cpts
}
</style>
