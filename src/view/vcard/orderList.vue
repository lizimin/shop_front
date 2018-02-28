<template>
  <div id="my" class="page-vcard-orderlist">
    <scroll-hd :title="'我的卡片'"></scroll-hd>
    <!-- <common-scroll :key="'scroll'" ref="scroll" :dataMethod="'getVcardsByUser'" :title="'我的卡片'"></common-scroll> -->
    <!-- 注意   初始的list由mixinsScroll获取， pullUpload的判断由page决定，依赖计算参看mixinScroll -->
    <scroll :list="list" ref="scroll" @pullingUp="onPullingUp" :pullUpLoad="pullUpLoad" @pullingDown="onPullingDown" :pullDownRefresh="pullDownLoad">
      <ul class="listwrapper">
        <li v-for="(item,index) in list" :key="index" class="list-item">
          {{item.name}}
        </li>
      </ul>

    </scroll>
  </div>

</template>

<script>
import api from 'api/api';
import scroll from 'components/common/scroll/scroll';
import scrollHd from 'components/common/scroll/scrollHd';
import { mixinsScroll } from 'mixins/scroll';
export default {
  name: 'orderList',
  components: {
    scrollHd,
    scroll
  },
  data() {
    return {
      apiMethod: 'getVcardsByUser'
    };
  },
  mixins: [mixinsScroll],
  // 控制上拉刷新和下拉加载用computed
  computed: {
    pullDownLoad: function() {
      return false;
    }
  },
  methods: {
    // 由于每个列表页的数据格式不一致
    onPullingUp() {
      console.log('onPullingUp');
    },
    onPullingDown() {
      console.log('onPullingDown');
    }
  },
  watch: {}
};
</script>


<style lang="less" scoped>
@import '~styles/index.less'; // 全局自定义样式

.page-vcard-orderlist {
  .listwrapper {
    // background: #000;
    .list-item {
    }
  }
}
</style>
