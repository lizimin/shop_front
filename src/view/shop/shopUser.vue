<template>
  <div id="shop-user">
    <div class="header">
        <div class="cname"><h2>{{user.cname}}</h2></div>
        <div class="cavatar"><img :src="user.cavatar" alt=""></div>
    </div>
    <group>
        <x-input title="姓名" type="text" placeholder="请填写姓名" v-model="urealname" text-align="right"></x-input>
        <x-input title="身份证号" type="text" placeholder="请填写身份证号码" v-model="ucardno" text-align="right"></x-input>
        <x-input title="电话" type="number" placeholder="请填写电话号码" v-model="utel" text-align="right"></x-input>
        <selector placeholder="请选择店面" v-model="shop_id" title="店面" name="shop_name" :value-map="['shop_id', 'shop_name']" text-align="right" :options="shop_list"></selector>
    </group>
    <div style="padding:15px;">
      <x-button type="primary" @click.native="add">添加</x-button>
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
      user: {}
    };
  },
  created: function() {
    this.user = this.$store.state.app.userInfo;
    this.fetchShopList();
  },
  methods: {
    fetchShopList() {
      this.xarpost("Shopinfo/shopList").then(res => {
        let { data, error, message } = res;
        this.shop_list = data;
      });
    },
    add() {
      if (this.urealname && this.utel && this.shop_id) {
        this.xarpost("ShopUser/apiAddShopUser", {
          urealname: this.urealname,
          ucardno: this.ucardno,
          utel: this.utel,
          shop_id: this.shop_id
        }).then(res => {
          let { data, error, message } = res;
          if (error == 0) {
            this.showtoast("成功，请进入小程序个人中心邀请店员加入。");
          } else {
            this.showtoast(message);
          }
        });
      }else{
          this.showtoast('请填写完成后再添加')
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.header {
  padding: 0.8rem;
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
