<template>
  <div id="my" class="page-vcard-orderlist">
    <common-scroll :key="'scroll'" ref="scroll" :dataMethod="'getVcardsByUser'" :title="'卡片列表'"></common-scroll>
  </div>

</template>

<script>
import { Grid } from "vux";
import api from "api/api";
import commonScroll from "components/common/commonScroll";
export default {
  name: "orderList",
  components: {
    commonScroll,
    Grid
  },
  data() {
    return {
      lists: []
    };
  },
  computed: {},
  created() {
    this.init();
  },
  methods: {
    async init() {}
  },
  watch: {}
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

.page-vcard-orderlist {
  // ===================vux-cpts
}
</style>
