<template>
  <div id="message">
    <msg :icon="icon" :title="title" :buttons="buttons" :description="description"></msg>
    <share ref="share"></share>

  </div>
</template>

<script>
import { mapState } from "vuex";
import { Msg, TransferDom } from "vux";
import share from "../../components/share/index";
export default {
  directives: {
    TransferDom
  },
  components: {
    Msg,
    share
  },
  name: "map",
  data() {
    let self = this;
    return {
      icon: "success",
      description: "购买成功",
      title: "操作成功",
      buttons: [
        {
          text: "分享给好友",
          type: "primary",
          onClick: function() {
            self.$refs.share.showBox = true;
          }
        },
        {
          text: "返回首页",
          type: "default",
          link: "/"
        }
      ],
      sharePath: ""
    };
  },
  computed: {
    ...mapState({
      openid: state => state.vux.openid
    })
  },
  activated: function() {
    var sharePath = this.$route.query.sharePath;
    if (this.$route.query.title) this.title = this.$route.query.title;
    if (this.$route.query.description)
      this.description = this.$route.query.description;
    if (this.sharePath) this.sharePath = sharePath;
    this.setWxShare(
      "推荐一个比较不错的新玩意给你，快来试试",
      "分享赢现金红包！",
      self.site_url + "index.html#/" + sharePath
    );
  },
  created: function() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#message {
  background-color: #fff;
}
</style>
