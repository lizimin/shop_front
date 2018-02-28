<template>
  <div id="my" class="page-vcard-orderlist">
    <scroll-hd :title="'我的收益'"></scroll-hd>
    <!-- <common-scroll :key="'scroll'" ref="scroll" :dataMethod="'getVcardsByUser'" :title="'我的卡片'"></common-scroll> -->
    <!-- 注意   初始的list由mixinsScroll获取， pullUpload的判断由page决定，依赖计算参看mixinScroll -->
    <scroll :list="list" ref="scroll" @pullingUp="onPullingUp" :pullUpLoad="pullUpLoad" @pullingDown="onPullingDown" :pullDownRefresh="pullDownLoad">
        <group>
            <cell v-for="item in list" :title="item.amount" :value="item.is_send ? '已发放': '未结算'"></cell>
        </group> 
       <div style="text-align:center;margin:.1rem;">
          <p >
              <qrcode :value="sharelink" type="img"></qrcode>
           </p>
           <p style="margin:.1rem;">你每成功邀请一个好友购买，将获得相应的奖励</p>
            <p style="margin:.1rem;">
              奖励金额实时存入我的收益，请前往我的进行查看</p>
       </div>
    </scroll>
  </div>

</template>

<script>
import api from "api/api";
import scroll from "components/common/scroll/scroll";
import scrollHd from "components/common/scroll/scrollHd";
import { mixinsScroll } from "mixins/scroll";
import { parseTime } from "../../../utils/index";
import { Group, Cell, Qrcode } from "vux";

import { mapGetters } from "vuex";
export default {
  name: "salary_record",
  components: {
    scrollHd,
    scroll,
    Group,
    Qrcode,
    Cell
  },
  data() {
    return {
      apiMethod: "getUserSalaryRecord"
    };
  },
  mixins: [mixinsScroll],
  // 控制上拉刷新和下拉加载用computed
  computed: {
    ...mapGetters(["userInfo"]),
    pullDownLoad: function() {
      return false;
    },
    sharelink: function() {
      const { customer_id } = this.userInfo;

      return `${
        this.site_url
      }index.html#/goods/49?code=P96&referer=${customer_id}`;
    }
  },
  methods: {
    // 由于每个列表页的数据格式不一致
    onPullingUp() {
      console.log("onPullingUp");
    },
    onPullingDown() {
      console.log("onPullingDown");
    }
  },
  watch: {}
};
</script>


<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

.page-vcard-orderlist {
  .listwrapper {
    // background: #000;
    .list-item {
    }
  }
}
</style>
