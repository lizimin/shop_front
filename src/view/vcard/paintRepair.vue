
<template>
 <keep-alive>
  <div class="page-sale-paintrepair go-back-top">
    <div class="search-bar">
      <search-bar></search-bar>
    </div>
    <div class="goods" :style="{height:conHeight+'px'}">
      <div class="good-wrapper" ref="goodWrapper">
        <ul class="go-back-top">
          <li v-for="(item,index) in goodsList" class="good-item" :class="{'current':currentIndex===index}" @click="selectGood(item,$event)" ref="goodList">
            <div class="pic">
              <img :src="item.photo" alt="">
            </div>
            <div class="info">
              <div class="info-hd">
                <span class="info-hd-title">
                  {{item.goods_name}}
                </span>
                <!-- 现价格 -->
                <span class="info-hd-mallprice">
                  ￥{{item.mall_price}}
                  <!-- ￥99.00 -->
                </span>
                <!-- 原价格 -->
                <span class="info-hd-marketprice">
                  ￥{{item.market_price}}
                  <!-- ￥190 -->

                </span>
              </div>
              <div class="info-bd">
                {{item.detail_des}}

                <!-- 端头(保险杠)￥99.00，任意部位 ￥199.00，两个部位 ￥298.00 -->
              </div>
            </div>
          </li>

          <common-bottom></common-bottom>
        </ul>
      </div>

    </div>

  </div>
 </keep-alive>
</template>

<script>
import BScroll from "better-scroll";
import api from "api/api";
import { Search } from "vux";

import searchBar from "components/common/searchBar";
export default {
  name: "saleList",
  components: {
    searchBar,
    Search
  },
  data() {
    return {
      goodsList: [],
      listHeight: [],
      scrollY: 0,
      conHeight: 0
    };
  },
  created() {
    this.classMap = ["decrease", "discount", "special", "invoice", "guarantee"];
    this.init();
  },
  mounted() {
    const $body = document.getElementsByTagName("body");
    console.log($body[0].clientHeight);
    this.conHeight = $body[0].clientHeight - 95;
  },
  methods: {
    async init() {
      const that = this;
      // const catResult = await api.getCatList({ pid: 0 });
      // console.log(catResult);
      const result = await api.getRecommendGoodsList();
      const { list } = result.data;
      that.goodsList = result.data.list;
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      });
    },
    _initScroll() {
      this.meunScroll = new BScroll(this.$refs.goodWrapper, {
        click: true
      });
    },
    selectGood(good, event) {
      const that = this;
      const { sku_code, goods_name: pro_name } = good;

      if (good.goods_redirect_type === "vcard") {
        that.$router.push(`/goods/${good.pro_id}?code=${sku_code}`);
      } else {
        that.$router.push(`/goods/${good.pro_id}?code=${sku_code}`);
      }
    },
    _calculateHeight() {
      const goodList = this.$refs.goodList;
      let height = 0;
      this.listHeight.push(height);
      for (let i = 0; i < goodList.length; i++) {
        const item = goodList[i];
        height += item.clientHeight;
        this.listHeight.push(height);
      }
    },
    selectSecCat: function(index) {
      var self = this;
      console.log(index);
      var pid = index;
      self.s_index = index;
      self.currentFistCat = pid;
    },
    _followScroll(index) {
      const goodList = this.$refs.goodList;
      const el = goodList[index];
      this.meunScroll.scrollToElement(el, 300, 0, -100);
    }
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i + 1];
        if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
          this._followScroll(i);
          return i;
        }
      }
      return 0;
    }
  }
};
</script>
<style lang="less" scoped>
.page-sale-paintrepair {
  background: #f3f3f3;
  .search-bar {
    position: relative;
    background: #fff;
    z-index: 1000;
    height: 44px;
  }
  .goods {
    display: flex;
    justify-content: space-between;
    // height: ;
    overflow: hidden;
    .good-item {
      background: #fff;
      margin-bottom: 0.1rem;
      img {
        width: 100%;
      }
      .info {
        padding: 0.2rem 0.3rem;
        line-height: 1.5;

        &-hd {
          span {
            padding: 0 0.1rem 0 0;
          }
          &-title {
            font-size: 0.36rem;
          }
          &-mallprice {
            font-size: 0.32rem;
            color: #f23030;
          }
          &-marketprice {
            font-size: 0.32rem;
            color: #959595;
            text-decoration: line-through;
          }
        }
        &-bd {
          margin-top: 0.05rem;
          font-size: 0.3rem;
          color: #959595;
        }
      }
    }
  }
}
</style>
