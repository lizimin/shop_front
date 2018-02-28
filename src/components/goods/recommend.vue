<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

.cpts-recommend {
  margin-top: 0.1rem;
  background: #fafafa;
  width: 7.5rem;
  .hd {
    display: flex;
    background: #fff;
    justify-content: space-between;
    height: 0.7rem;
    &-left {
      font-weight: bolder;
    }
    padding: 0 0.2rem;
    align-items: center;
    border-bottom: 1px solid @gray;
    &-right {
      font-size: 0.22rem;
      color: @graycolor;
      line-height: 0.7rem;
      a {
        display: block;

        // padding: 0 .2rem;
      }
      .fa {
        font-size: 0.4rem;
        vertical-align: -2px;
      }
    }
  }
  .bd {
    // padding: 0.1rem;
    background: #fafafa;
    height: 4rem;
    .goods {
      width: 100%;
      display: flex;
      padding: 0.15rem;
      // justify-content: space-between;
      .item {
        width: 2.1rem;
        margin: 0 0.15rem;
      }
      .pic {
        width: 100%;
        height: 1.37rem;
        margin: 0 auto;
        overflow: hidden;
        display: flex;
        align-items: center;
        img {
          width: 100%;
        }
      }
      .title {
        font-size: 0.28rem;
        color: #909090;
        // padding: 0.15rem 0.1rem;
        line-height: 1.2;
        overflow: hidden;
      }
      .price {
        color: @red;
        // padding-top: .05rem;
        // padding: 0rem 0.1rem;
        line-height: 1.5;
      }
    }
  }
}
</style>

<template>
  <!-- recommend start-->
  <div class="cpts-recommend">
    <div class="hd">
      <div class="hd-left">
        <span class="txt">
          推荐商品
        </span>
      </div>
      <div class="hd-right">
        <router-link to="/cat_select">
          更多
          <span class="fa fa-angle-right"></span>
        </router-link>
      </div>
    </div>
    <div class="bd">
      <swiper :dots-position="'center'">
        <swiper-item class="black" v-for="(group,gIdx) in groupShopList" :key="gIdx">
          <div class="goods">
            <div class="item" v-for="(item,iIdx) in group" @click="goodClick(item)">
              <div class="pic">
                <img :src="item.photo" alt="">
              </div>
              <div class="title">
                {{item.goods_name | ellipsisText(14)}}
              </div>
              <div class="price">
                ¥{{item.goods_price}}
              </div>
            </div>

          </div>
        </swiper-item>

      </swiper>
    </div>

  </div>
  <!-- recommend end-->
</template>

<script>
import { Divider, Swiper, SwiperItem } from "vux";
import { ellipsisText } from "utils/index";
import api from "api/api";

export default {
  name: "recommend_component",
  components: {
    Divider,
    Swiper,
    SwiperItem
  },
  filters: { ellipsisText: ellipsisText },
  props: {
    list: {
      type: Array,
      default: function() {
        //内置信息为{id,name,price,img}
        return [];
      }
    }
  },
  data() {
    return {
      shoplist: []
    };
  },
  created() {
    this.init();
  },
  computed: {
    groupShopList() {
      const data = this.shoplist;
      let list = [];
      const SPLITNUMBER = 3;
      for (var i = 0, len = data.length; i < len; i += SPLITNUMBER) {
        list.push(data.slice(i, i + SPLITNUMBER));
      }

      return list;
    }
  },
  activated: function() {},
  methods: {
    async init() {
      const result = await api.getRecommendGoodsList();
      // console.log(result);
      const { list } = result.data;
      this.shoplist = list || [];
    },
    onItemClick(index) {
      var self = this;
      self.$router.push({
        path: "/order_detail/Snorder120171223151804A12345"
      });
    },
    goodClick(good) {
      this.$router.push(
        `/goods/${good.pro_id}?code=${good.sku_code}&timestamp=${Date.parse(
          new Date()
        )}`
      );
    }
  }
};
</script>
