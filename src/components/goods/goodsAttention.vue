<template>
  <div class="card-content cpts-goods-attention">
    <div class="line" @click="showdetail=!showdetail">
      <div class="item" v-for="item in attentionList">
        <span class="fa fa-check-circle-o"></span>
        <span>{{item.title}}</span>
      </div>
    </div>
    <div v-transfer-dom>
      <slide-up v-model="showdetail" :cancelText="'已知晓'" :titleText="'条款'">
        <div class="slide-content">
          <div class="slide-content-group" v-for="item in attentionList">
            <h3>{{item.title}}</h3>
            <p>
              <span class="fa fa-circle"></span> {{item.des}}</p>
          </div>
        </div>
      </slide-up>

    </div>

  </div>
</template>

<script>
import { Qrcode, Confirm, TransferDom } from 'vux';
import api from 'api/api';

import slideUp from 'components/common/slideUp';
export default {
  directives: {
    TransferDom
  },
  props: {
    type: {
      type: Number,
      default: 1
    },
    attentionList: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    Qrcode,
    slideUp,
    Confirm
  },
  data() {
    return {
      showdetail: false,
      qrWidth: 80,
      menus: {
        menu1: 'Close me',
        menu2: 'Close me'
      },
      showNotice: false
    };
  },

  computed: {},
  created() {
    this.init();
  },
  methods: {
    async init() {}
  }
};
</script>

<style lang="less" scoped>
@import '~styles/index.less'; // 全局自定义样式

.cpts-goods-attention {
  height: 0.8rem;
  background: #fff;
  border-top: 1px solid @gray;
  border-bottom: 1px solid @gray;
  .line {
    display: flex;
    justify-content: space-between;
    line-height: 0.8rem;
    padding: 0 0.4rem;
    font-size: 0.28rem;
    color: #8d8c8c;
    .fa {
      color: #fe4d3d;
      font-weight: lighter;
    }
  }
}
</style>
