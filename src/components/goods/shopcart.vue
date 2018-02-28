<template>
  <div class="card-content cpts-shopcart">
    <div class="product">
      <div class="product-name">{{proInfo.pro_name}}</div>
      <div class="product-des">{{proInfo.pro_dep}}</div>
    </div>
    <goods-attention :attentionList="proInfo.clause" v-if="proInfo.clause&&proInfo.clause.length"></goods-attention>
    <div class="goods-prop">
      <div class="goods-prop-line" v-show="skuCode.code.length">
        <div class="hd">已选</div>
        <div class="bd">
          <span> {{proInfo.pro_name}}</span>

          <span v-for="(item,index) in skuCode.name" :key="index"> -{{item}}</span>
        </div>
      </div>
      <div class="goods-prop-line" v-for="(item,IIdx) in propList" :key="IIdx">
        <div class="hd">{{item.property_name}}</div>
        <div class="bd">
          <div class="item" :class="{on:pop.status}" v-for="(pop,PIdx) in item.value" :key="PIdx" @click="togglePop(IIdx,PIdx)">
            {{pop.pv_value}}
          </div>
        </div>
      </div>
      <div class="goods-prop-line line-price">
        <div class="hd">数量</div>
        <div class="bd">
          <number :min="1" :max="50" v-model="count"></number>
          <div class="bd-price">
            <span>总价:</span>
            <span class="bd-price-num">￥{{currentProSku.mall_price*count || 0}}</span>
          </div>
        </div>
      </div>
    </div>
    <use-attention></use-attention>
    <div v-transfer-dom>

    </div>
  </div>
</template>

<script>
import api from "api/api";
import goodsAttention from "components/goods/goodsAttention";
import useAttention from "components/goods/useAttention";
import number from "components/goods/number";
import { mapState } from "vuex";

import { Confirm, XNumber, TransferDom } from "vux";
export default {
  directives: {
    TransferDom
  },
  props: {
    type: {
      type: Number,
      default: 1
    },
    proInfo: {
      type: Object,
      default: function() {
        return {
          pro_name: "",
          pro_id: "",
          pro_img: "",
          pro_content: ""
        };
      }
    }
  },

  components: {
    goodsAttention,
    useAttention,
    XNumber,
    number,
    Confirm
  },
  data() {
    return {
      count: 1,
      propList: [],
      choosePop: [],
      proSku: [],
      proInfo: {
        pro_name: "",
        pro_id: "",
        pro_img: "",
        pro_content: ""
      },
      pro_code: "",
      sku_pro: {}
    };
  },

  computed: {
    currentProSku: function() {
      const that = this;
      let result = {};
      const { code } = that.skuCode;
      const { pro_name } = that.proInfo;
      if (code.length) {
        let codeStr = "";
        code.map(item => {
          codeStr += `${item}`;
        });
        console.log(codeStr);
        result = that.proSku.filter(
          item => item.sku_code === parseInt(`${that.proInfo.pro_id}${codeStr}`)
        );
      }
      console.log(result[0]);
      if (result.length) {
        that.$emit(
          "updateSku",
          Object.assign({}, result[0], { pro_name, pro_quantity: that.count })
        );
        return result[0];
      } else {
        that.$emit("updateSku", {});
        return {};
      }
    },
    skuCode: function() {
      let checkflag = true;
      const code = [];
      const name = [];
      this.propList.map(group => {
        const validItem = group.value.filter(item => item.status);
        if (validItem.length) {
          code.push(validItem[0].pv_id);
          name.push(validItem[0].pv_value);
        } else {
          checkflag = false;
        }
      });
      if (checkflag) {
        return {
          code,
          name
        };
      } else {
        return {
          code: [],
          name: []
        };
      }
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      this.setData(this.proInfo);
    },
    setData(proInfo) {
      const that = this;
      // const productResult = await api.getProduct({ pro_id: that.productId });
      const { property, pro_sku } = proInfo;
      // this.proInfo = productResult.data;
      let { code } = this.$route.query;
      if (code && property && pro_sku) {
        code = code
          .split("P")
          .filter(item => item)
          .map(item => parseInt(item));
        code.map((item, index) => {
          property[index].value.map(pvalue => {
            if (pvalue.pv_id === item) pvalue.status = true;
          });
        });

        this.propList = property;
        this.proSku = pro_sku;
      }
    },
    togglePop(IIdx, PIdx) {
      const that = this;
      console.log(IIdx, PIdx);
      that.propList = that.propList.map((group, gindex) => {
        if (gindex === IIdx) {
          group.value = group.value.map((item, iindex) => {
            if (iindex === PIdx) {
              item.status = !item.status;
              group.isSelect = item.status; //  判断是否有选中
            } else {
              item.status = false;
            }
            return item;
          });
        }
        group.s_index = PIdx; //  选中某一项
        return group;
      });
    }
  },
  watch: {
    currentProSku: function() {
      const that = this;
      this.$nextTick(function() {
        const $el = document.querySelector(".item.on .item-rule");
        const $el2 = document.querySelector(".item.on .item-info");
        that.ruleHeight = $el
          ? $el.clientHeight * 1 + $el2.clientHeight * 1 + 10
          : 0;
      });
    },
    proInfo: function(newvalue) {
      this.setData(this.newvalue);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

.cpts-shopcart {
  .product {
    background: #fff;
    margin-top: 0.1rem;
    padding: 0.2rem 0.3rem;
    &-name {
      font-size: 0.3rem;
      color: #000;
    }
    &-des {
      font-size: 0.26rem;
      color: #fe4d3d;
    }
  }
  .goods-prop {
    background: #fafafa;
    padding: 0.2rem 0.1rem;
    &-line {
      font-size: 0.26rem;
      display: flex;
      line-height: 0.68rem;
      margin-bottom: 0.1rem;
      background: none;
      .hd {
        padding: 0 0.2rem;
        color: #909090;
        min-width: 1.2rem;
      }
      .bd {
        display: flex;
        flex-wrap: wrap;
        .item {
          min-width: 1rem;
          border: 1px solid #ececec;
          text-align: center;
          border-radius: 0.07rem;
          padding: 0 0.2rem;
          margin: 0 0.2rem 0.2rem 0;
          &.on {
            background: #fef0f1;
            border: 1px solid #fe4d3d;
          }
        }
      }
    }
    .line-price {
      .bd {
        width: 5.4rem;
        justify-content: space-between;
        .bd-price-num {
          color: #fe4d3d;
          font-size: 0.4rem;
        }
      }
    }
  }
}
</style>
