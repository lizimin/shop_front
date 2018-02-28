 <template>
  <div id="nearshop" class="cpts-nearshop">
    <!-- <flexbox v-if="showMore" :gutter="0" style="padding:5px;">
      <flexbox-item :span="1/2">
        <router-link to="/tmap">

        </router-link>
      </flexbox-item>
      <flexbox-item :span="1/2">
        <router-link to="/tmap">
          <div class="nearShop-right">还有18家门店在你附近</div>
        </router-link>
      </flexbox-item>
    </flexbox> -->
    <div class="hd" v-if="showMore">
      <div class="hd-left">
        <span>附近的店</span>
      </div>
      <div class="hd-right">
        <span class="fa fa-map-marker"></span>
        <span>还有{{shopInfo.shop_num}}家门店在你附近</span>
      </div>
    </div>
    <div class="bd">
      <div class="pic">
        <router-link :to="'/shopinfo?id='+shopInfo.shop_id">
          <img :src="shopInfo.shop_img" class="shop-img" alt="">
        </router-link>
      </div>
      <div class="info">
        <router-link :to="'/shopinfo?id='+shopInfo.shop_id">
          <h4 style="color:#000">
            {{shopInfo.shop_name}}
          </h4>
          <p class="address">{{shopInfo.shop_address}}</p>
        </router-link>
        <p class="tel">
          <a v-bind:href="tel">{{shopInfo.shop_tel}}</a>
        </p>
      </div>
      <div class="menu" @click="daohang">
        <div class="icon-tel">
          <a v-bind:href="tel">
            <span class="fa fa-phone"></span>
          </a>
        </div>
        <div class="right-daohang" @click="daohang">导航去<br>
          <span style="color:#FF0000;">{{juli}}KM</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Flexbox, FlexboxItem } from "vux";
export default {
  name: "nearshop",
  components: {
    Flexbox,
    FlexboxItem
  },
  props: {
    lat: {
      type: Number,
      default: 0
    },
    lng: {
      type: Number,
      default: 0
    },
    shop: {
      type: Object,
      default: function() {
        return {
          shop_id: "1",
          shop_name: "小矮人快修（总部）",
          shop_lng: 102.666757,
          shop_lat: 25.097278,
          shop_address: "昆明市五华区沙河北路北50米",
          shop_img:
            "http://ma.gotomore.cn/public/uploads/image/20180115/62d7104925b99089e7853980903eb02c.jpg",
          shop_num: 18
        };
      }
    },
    showMore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      msg: "",
      shopInfo: {}
    };
  },
  computed: {
    tel: function() {
      return this.shopInfo.shop_tel ? "tel:" + this.shopInfo.shop_tel : "";
    },
    juli: function() {
      var juli = this.shopInfo.juli ? this.shopInfo.juli / 1000 : 0;
      return juli.toFixed(2);
    }
  },
  watch: {
    lat: function(newvalue, oldvalue) {
      var self = this;
      self.shopInfo = this.shop;
      // return
      if (this.lat && this.lng) {
        self
          .xarpost("Shopinfo/getNearShop", {
            type: 1,
            lat: self.lat,
            lng: self.lng
          })
          .then(res => {
            let { data, error, message } = res;
            self.shopInfo = data;
          });
      }
    },
    shop: function(newvalue, oldvalue) {
      if (newvalue.shop_name) this.shopInfo = newvalue;
    }
  },
  created: function() {
    this.shopInfo = this.shop;
  },
  methods: {
    daohang: function() {
      var self = this;
      this.$wechat.openLocation({
        latitude: parseFloat(self.shopInfo.shop_lat), // 纬度，浮点数，范围为90 ~ -90
        longitude: parseFloat(self.shopInfo.shop_lng), // 经度，浮点数，范围为180 ~ -180。
        name: self.shopInfo.shop_name, // 位置名
        address: self.shopInfo.shop_address, // 地址详情说明
        scale: 14, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: "" // 在查看位置界面底部显示的超链接,可点击跳转
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "~styles/index.less"; // 全局自定义样式

.cpts-nearshop {
  background-color: #fff;
  .shop-info {
    padding: 10px;
    height: 70px;
  }
  .right-daohang {
    font-size: 12px;
    text-align: center;
  }
  h4 {
    white-space: nowrap;
    overflow: hidden;
    font-size: 0.28rem;
  }
  .shop-img {
    width: 100%;
  }

  .address {
    font-size: 13px;
    color: #868585;
    white-space: nowrap;
    overflow: hidden;
    height: 22px;
    line-height: 22px;
  }
  .tel {
    font-size: 13px;
    color: #868585;
    height: 22px;
    line-height: 22px;
  }
  .tel a {
    color: #868585;
  }
  .left {
    width: 25%;

    height: 70px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
  }
  .center {
    width: 55%;
    height: 70px;
    display: inline-block;
    vertical-align: top;
    padding-left: 5px;
  }
  .right {
    width: 15%;
    display: inline-block;
    vertical-align: top;
    border-left: 1px solid #e4e2e2;
  }
  #nearshop {
    background-color: #fff;
    overflow: hidden;
    vertical-align: top;
  }
  .icon-tel {
    text-align: center;
    border-bottom: 1px solid #e4e2e2;
  }
  .nearShop-one {
    font-family: MicrosoftYaHei-Bold;
    font-size: 12px;
    color: #393939;
    letter-spacing: 0;
  }
  .nearShop-right {
    font-family: MicrosoftYaHei-Bold;
    font-size: 12px;
    color: #393939;
    letter-spacing: 0;
    padding-right: 10px;
    float: right;
  }
}
.cpts-nearshop {
  .hd {
    display: flex;
    justify-content: space-between;
    height: 0.7rem;
    padding: 0 0.2rem;
    align-items: center;
    border-bottom: 1px solid @gray;
    &-left{

    font-weight: bolder;
    }
    &-right {
      font-size: 0.22rem;
      .fa {
        font-size: 0.28rem;
      }
    }
  }
  .bd {
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;
    .pic {
      flex: 0 0 1.78rem;
      a {
        align-items: center;
        justify-content: center;
        display: flex;
        width: 100%;
        height: 100%;
      }
    }
    .info {
      flex: 0 0 4.2rem;
      overflow: hidden;
      padding: 0.1rem 0.1rem;
      border-right: 1px solid #eee;
      p {
        width: 95%;
        text-overflow: ellipsis;
      }
    }
    .menu {
      padding-left: 0.15rem;
      .icon-tel {
        height: 0.6rem;
        font-size: 0.4rem;
      }
      .right-daohang {
        padding-top: 0.15rem;
        font-size: 0.2rem;
      }
    }
  }
}
</style>
