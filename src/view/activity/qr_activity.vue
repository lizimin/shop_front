<template>
  <div id="shop-user">
    <div class="header">
        <div class="cname"><h2>{{user.cname}}</h2></div>
        <div class="cavatar"><img :src="user.cavatar" alt=""></div>
        <img class="qr" style="width:5rem;" :src="qrData.qrurl">
    </div>
  </div>
</template>
<script>
import {
  TransferDom,
  Popup,
  Flexbox,
  FlexboxItem,
  XInput,
  XButton,
  Group,
  Selector
} from "vux";
export default {
  directives: {
    TransferDom
  },
  components: {
    XInput,
    Group,
    Selector,
    XButton
  },
  name: "shopUser",
  data() {
    let self = this;
    return {
      shop_id: 0,
      urealname: "",
      ucardno: "",
      utel: "",
      shop_list: [],
      user: {},
      qrData: {
        qrurl: ''
      }
    };
  },
  created: function() {
    this.user = this.$store.state.app.userInfo;
    this.fetchQr();
  },
  methods: {
    fetchQr() {
      this.xarpost("WechatQr/productQr", {pro_id: 51, referer: this.user.customer_id}).then(res => {
        let { data, error, message } = res;
        this.qrData = data;
      });
    },
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.header {
  padding: 0.8rem;
  text-align: center;
  div {
    display: inline-block;
    width: 40%;
    img {
      border-radius: 50%;
      width: 1.5rem;
    }

  }
}
</style>
