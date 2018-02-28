<template>
  <div class="card-content cpts-shopcart">
    <div class="product">
      <div class="product-name">{{proInfo.pro_name}}</div>
      <div class="product-des">{{proInfo.pro_dep}}</div>
    </div>
    <goods-attention :attentionList="proInfo.clause" v-if="proInfo.clause&&proInfo.clause.length"></goods-attention>
    <div class="goods-prop">
      <div class="goods-prop-line" v-show="false">
        <div class="hd">已选</div>
        <div class="bd">
          <span> {{proInfo.pro_name}}</span>
          <span v-for="(item,index) in skuCode.name" :key="index"> -{{item}}</span>
        </div>
      </div>
      <div class="goods-prop-line line-card" v-for="(item,IIdx) in propList" :key="IIdx">
        <div class="bd" :style="{height:ruleHeight?ruleHeight+'px':'auto'}">
          <div class="item" :class="{on:pop.status}" v-for="(pop,PIdx) in item.value" :key="PIdx" @click="togglePop(IIdx,PIdx)">
            <div class="item-info">
              <div class="item-info-icon">
                <div class="angle"></div>
                <span class="fa fa-check"></span>
              </div>
              <p class="item-info-name">
                <span> {{pop.pv_value}}</span>
              </p>
              <p class="item-info-price">
                <span>
                  ¥{{proSku[PIdx].mall_price||0}}</span>
              </p>
            </div>
            <transition name="slide">
              <div class="item-rule" v-if="pop.status">
                <div class="txt" v-html="currentProSku.card_use_rule"></div>
              </div>
            </transition>
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
      ruleHeight: 0,
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
        result = that.proSku.filter(
          item => item.sku_code === parseInt(`${that.proInfo.pro_id}${codeStr}`)
        );
      }
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
      const { proInfo } = this;
      // console.log(proInfo.property, proInfo.property.length);
      if (proInfo.property && proInfo.property.length) {
        this.setData(proInfo);
      }
    },
    setData(proInfo) {
      const that = this;
      // const productResult = await api.getProduct({ pro_id: that.productId });
      const { property, pro_sku } = proInfo;
      // this.proInfo = productResult.data;
      // console.log("set");
      let { code } = this.$route.query;
      if (code&&code!=='undefined' && property && pro_sku) {
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
      } else {
        proInfo.property.map(p => {
          p.value.map((pvalue,index) => {
            if (index === 0) pvalue.status = true;
          });
        });

        this.propList = property;
        this.proSku = pro_sku;
      }
    },
    togglePop(IIdx, PIdx) {
      const that = this;
      // console.log(that.propList, 'that.propList');
      that.propList = that.propList.map((group, gindex) => {
        if (gindex === IIdx) {
          group.value = group.value.map((item, iindex) => {
            if (iindex === PIdx) {
              item.status = !item.status;
              group.isSelect = item.status; //判断是否有选中
            } else {
              item.status = false;
            }
            return item;
          });
        }

        group.s_index = PIdx; //选中某一项
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
      const proInfo = newvalue;
      if (proInfo.property && proInfo.property.length) {
        console.log(213);
        this.setData(proInfo);
      }
    }
  }
};
</script>
<style>
.cpts-shopcart .item-rule li {
  line-height: 1.5;
}
</style>

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
        min-width: 0.8rem;
      }
      .bd {
        display: flex;
        // .item {
        //   min-width: 1.3rem;
        //   border: 1px solid #ececec;
        //   text-align: center;
        //   border-radius: 0.07rem;
        //   padding: 0 0.2rem;
        //   margin: 0 0.2rem 0 0;
        //   &.on {
        //     background: #fef0f1;
        //     border: 1px solid #fe4d3d;
        //   }
        // }
      }
    }
    .line-price {
      .bd {
        width: 5.8rem;
        justify-content: space-between;
        .bd-price-num {
          color: #fe4d3d;
          font-size: 0.4rem;
        }
      }
    }
    .line-card {
      display: flex;
      flex-wrap: wrap;
      padding: 0 0.2rem;
      .bd {
        position: relative;
        width: 100%;
        transition: height 0.6s;
      }
      .item {
        flex: 0 0 2.2rem;
        padding: 0;
        margin: 0;
        margin-right: 0.1rem;

        &-info {
          height: 0.8rem;
          padding: 0.1rem 0;
          font-size: 0.26rem;
          line-height: 0.4rem;
          text-align: center;
          position: relative;
          z-index: 100;
          border: 1px solid #ececec;
          border-radius: 0.07rem;
          &-name {
            span {
              padding: 0 0.2rem;
              border-bottom: 1px solid #eee;
            }
          }
          &-price {
            color: #fe4d3d;
          }
          &-icon {
            position: absolute;
            top: 0;
            right: 0rem;
            display: block;
            width: 0.4rem;
            height: 0.4rem;
            line-height: 0.3rem;
            text-align: right;
            display: none;
            .angle {
              position: absolute;
              left: 0;
              top: 0;
              width: 0;
              height: 0;
              border-top: 0.4rem solid #fe4d3d;
              border-left: 0.4rem solid transparent;
            }
            .fa {
              position: relative;
              font-size: 0.16rem;
              z-index: 100;
              vertical-align: 3px;
              color: #fff;
              margin-right: 0.02rem;
            }
          }
        }
        &-rule {
          display: none;
          position: absolute;
          width: 6.75rem;
          top: 1.1rem;
          padding-right: -1px;
          left: 0;
          border-radius: 0 0 0.07rem 0.07rem;
          // height: 1.5rem;
          overflow: hidden;
          li {
            display: block;
            line-height: 1.5;
          }
        }
        &.on {
          .item-info {
            background: #fef0f1;
            height: 0.9rem;
            border: 1px solid #fe4d3d;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: none;
            &-icon {
              display: block;
            }
          }
          .item-rule {
            display: block;
            background: #fef0f1;
            border: 1px solid #fe4d3d;
            .txt {
              padding: 0.2rem;
              line-height: 1.5;
              li {
                line-height: 1.5;
              }
            }
          }
        }
      }
      // background: #000;
    }
  }
  .slide-enter-active {
    animation: slide-in 0.5s;
  }
  .slide-leave-active {
    animation: slide-in 0.5s reverse;
  }
  @keyframes slide-in {
    0% {
      height: inherit;
    }

    100% {
      height: inherit;
    }
  }
}
</style>
