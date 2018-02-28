<template>
  <div id="shop-info" class="page-shopinfo cpage-scroll">
    <div class="header">
      <!-- <img class="header-img" :src="shop_info.shop_img" alt=""> -->
      <img class="header-img" src="../../assets/shop1.jpg" alt="">
      <div class="header-right-top">
        <router-link to="/tmap" style="color: #fff;">更多门店</router-link>
      </div>
      <div class="header-avater" v-if=" shop_info && shop_info.staff_name && shop_info.staff_qrcode && shop_info.staff_avatar ">
        <div class="header-avater-img">
          <img :src="shop_info.staff_avatar">
        </div>
        <h4>{{shop_info.staff_name}}</h4>
        <div class="zixun">立即咨询</div>
      </div>
    </div>
    <div class="shopInfo">
      <h4><span class="name">{{shop_info.shop_name}}</span>  <span class="tag">直营店</span></h4>
      <p class="address">{{shop_info.shop_address}}</p>
      <div>
       
        <!-- <span class="tag">美容</span> -->
        <!-- <span class="tag">洗车</span> -->
      </div>
    </div>
    <div class="shop-info-des">
      <flexbox :gutter="0">
        <flexbox-item :span="1/2">
          <span class="fa fa-map-marker"></span> <span @click="daohang">导航到店</span> 
        </flexbox-item>
        <flexbox-item :span="1/2" class="shop-info-des-tel">
          <span class="fa fa-phone"></span> 电话咨询：{{shop_info.shop_tel}}
        </flexbox-item>
      </flexbox>
    </div>
    <top-news></top-news>
    <recommend-list></recommend-list>
    <div class="comment">
      <commentlist :shop_id="shop_id"></commentlist>
    </div>
    <common-bottom></common-bottom>

  </div>
</template>
<script>
import { TransferDom, Popup, Flexbox, FlexboxItem } from "vux";
import commentlist from "../../components/comment/commentlist";
import recommendList from "../../components/goods/recommend";
import topNews from "../../components/activity/topNews";
export default {
  directives: {
    TransferDom
  },
  components: {
    Popup,
    Flexbox,
    FlexboxItem,
    commentlist,
    recommendList,
    topNews
  },
  name: "shopinfo",
  data() {
    let self = this;
    return {
      shop_id: 0,
      shop_info: {
        staff_name: "",
        shop_name: "",
        shop_address: "",
        shop_tel: ""
      }
    };
  },
  created: function() {
    var query = this.$route.query;
    console.log(query);
    var shop_id = query && query.id ? parseInt(query.id) : 0;
    this.shop_id = shop_id;
    let self = this;
    console.log(this.shop_id, "aaaaaaaaaaa");
    console.log({
      shop_id: shop_id
    });
    this.xarpost("Shopinfo/getShopInfo", {
      shop_id: shop_id
    }).then(res => {
      let { data, error, message } = res;

      if (data) {
        self.setWechatTitle(data.shop_name + " - 小矮人汽车");
        self.setWxShare(
          data.shop_name,
          data.shop_address,
          self.site_url + "index.html#/shopinfo?id=" + self.shop_id,
          data.shop_img
        );
        self.shop_info = data;
      }
    });
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
<style lang="less">
.page-shopinfo {
  .header {
    height: 180px;
    position: relative;
  }
  .header-img {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .header-right-top {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 100px;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
  }
  .shopInfo {
    line-height: 2;
    padding: 0.1rem;
    background-color: #f9f9f9;
    h4 {
      .name {
        font-size: 0.32rem;
      }
      .tag {
        margin-left: 0.2rem;
      }
    }
  }
  .shopInfo .address {
    color: #999999;
    font-size: 13px;
  }
  .header-avater {
    position: absolute;
    top: 145px;
    right: 20px;
    text-align: center;
    width: 80px;
  }
  .header-avater-img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
    border: 2px solid #fff;
    margin: 0px auto;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .zixun {
    background-color: #ff0000;
    width: 80px;
    height: 24px;
    line-height: 24px;
    color: #fff;
    border-radius: 12px;
    font-size: 14px;
  }
  .tag {
    padding: 0rem 0.08rem;
    border-radius: 3px;
    border: 1px solid #ff0000;
    color: #ff0000;
    font-size: 0.22rem;
  }
  .shop-info-des {
    margin: 5px 0px;
    background-color: #fff;
    height: 35px;
    font-size: 13px;
    line-height: 35px;
    padding: 5px;
  }
  .shop-info-news {
    margin: 5px 0px;
    background-color: #fff;
    height: 35px;
    font-size: 13px;
    line-height: 35px;
    padding: 5px;
    line-height: 16px;
  }
  .shop-info-pro {
    margin: 5px 0px;
    background-color: #fff;
    height: 135px;
    font-size: 13px;
    line-height: 35px;
    padding: 5px;
  }
  .shop-info-des-tel {
    text-align: right;
  }
  .comment {
    margin-top: 0.1rem;
    margin-bottom: 0.1rem;
  }
}
</style>
