
<template>
  <div class="page-shop"> 
    <div class="search-bar">
      <search-bar></search-bar>
    </div>
    <div class="goods" :style="{height:conHeight+'px'}">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <li v-for="(item,index) in ParentCatList" class="menu-item" :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)" ref="menuList">
            <div class="text ">
              <span class="icon" :class="classMap[0]"></span>{{item.cat_name}}
            </div>
          </li>
        </ul>
      </div>
      <div class="cat-wrapper" ref="catWrapper">
        <ul>
          <li v-for="item in ParentCatList" class="good-list" ref="goodList">
            <h3 class="title">{{item.cat_name}}</h3>
            <ul class="good-list-con">

              <li @click="selectGood(good,$event)" v-for="good in item.product" class="good-item ">
                <!-- <router-link :to="good.goods_redirect_type!=='vcard'?`/goods/${good.pro_id}`:`/vcard/${good.pro_id}`"> -->
                <div class="good-item-hd">
                  <img :src="good.photo">
                </div>
                <div class="good-item-bd">
                  <p> {{good.goods_name}}</p>
                  <!-- <p> {{good.goods_price}}</p> -->

                </div>
                <!-- </router-link> -->
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import api from "api/api";
import { Search } from "vux";

import searchBar from "components/common/searchBar";
export default {
  name: "catSelect",
  components: {
    searchBar,
    Search
  },
  data() {
    return {
      ParentCatList: [],
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
      const proResult = await api.getProductList({ cat_id: 0 });
      console.log(proResult);
      that.ParentCatList = proResult.data.list;
      this.$nextTick(() => {
        this._initScroll();
        this._calculateHeight();
      });
    },
    _initScroll() {
      this.meunScroll = new BScroll(this.$refs.menuWrapper, {
        click: true
      });
      this.goodsScroll = new BScroll(this.$refs.catWrapper, {
        click: true,
        probeType: 3
      });
      this.goodsScroll.on("scroll", pos => {
        // 判断滑动方向，避免下拉时分类高亮错误（如第一分类商品数量为1时，下拉使得第二分类高亮）
        if (pos.y <= 0) {
          this.scrollY = Math.abs(Math.round(pos.y));
        }
      });
    },
    selectMenu(index, event) {
      if (!event._constructed) {
        return;
      }
      const goodList = this.$refs.goodList;
      const el = goodList[index];
      this.goodsScroll.scrollToElement(el, 300);
    },
    selectGood(good) {
      const that = this;
      console.log(good);
      const { sku_code, goods_name: pro_name } = good;
      // const [pro_id, ...codeArr] = sku_code.split("P");
      // const code = codeArr
      //   .filter(item => item !== "P")
      //   .map(item => parseInt(item));
      // console.log(pro_id, code);
      // that.$store.commit("SET_CURRENT_GOOD", {
      //   pro_id,
      //   pro_name,
      //   code
      // });
      if (good.goods_redirect_type === "vcard") {
        that.$router.push(`/vcard/${good.pro_id}?code=${sku_code}`);
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
      const menuList = this.$refs.menuList;
      const el = menuList[index];
      this.meunScroll.scrollToElement(el, 300, 0, -100);
    }
  },
  computed: {
    goodsList: function() {
      return [];
    },
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
.page-shop {

  .goods {
    display: flex;
    justify-content: space-between;
    // height: ;
    overflow: hidden;
    .menu-wrapper {
      flex: 0 0 2rem;
      width: 80px;
      background: #fff;
      .menu-item {
        padding: 0.1rem;
        line-height: 0.6rem;
        border-bottom: 1px solid #eee;
        .text {
          padding: 0.1rem;
        }
        &.current {
          position: relative;
          background: #f3f4f5;
          .text {
            border: none;
          }
        }
      }
    }

    .cat-wrapper {
      flex: 0 0 5.4rem;
      h3 {
        line-height: 2;
        padding-left: 0.1rem;
        font-size: 0.3rem;
        margin: 0.1rem 0;
      }
      .good-list-con {
        background: #fff;
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 0.14rem;
        .good-item {
          width: 1.5rem;
          text-align: center;
          padding: 0.14rem;
          // margin:  0.14rem 0;
          // border-right: 1px solid #E5E5E5;
          // border-bottom: 1px solid #e5e5e5;
          &-hd {
            width: 1.5rem;
            height: 1.5rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            img {
              width: 100%;
            }
          }
          &-bd {
            // text-align: left;
            font-size: 0.24rem;
            height: 1rem;
            overflow: hidden;
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
