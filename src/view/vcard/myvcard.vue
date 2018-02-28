<template>
  <div id="myvcard">
    <div class="qrcode">
      <div v-if="show_qrcode">
        <qrcode :value="x_str" type="canvas"></qrcode>
        <p>请将此二维码出示给店员验证即可</p>
        <p>二维码30秒内有效，30秒自动更新。</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Qrcode } from "vux";
export default {
  directives: {},
  components: {
    Qrcode
  },
  name: "myvcard",
  data() {
    return {
      x_now: 0,
      x_str: "",
      timer: null,
      show_qrcode: false
    };
  },
  computed: {
    ...mapState({
      openid: state => state.vux.openid
    })
  },
  created: function() {
    console.log("hahahah");
    var self = this;
    self.fetchData();
    self.timer = setInterval(function() {
      var timestamp = Date.parse(new Date()) / 1000;
      if (self.x_now + 30 < timestamp) {
        self.x_now = timestamp;
        self.fetchData();
      }
    }, 1000);
  },
  activated: function() {},
  deactivated: function() {
    clearInterval(this.timer);
  },
  methods: {
    fetchData: function() {
      let self = this;
      self.xarpost("AllQrcode/getMyVcard").then(d => {
        let { data, error, message } = d;
        if (error == 0) {
          if (data) {
            self.x_str = data.x_str;
            self.x_now = data.x_now;
            self.show_qrcode = true;
          } else {
            self.$vux.alert.show({
              title: "小矮人",
              content: "您还没有可以使用的洗车卡，现在带您去购买。",
              onHide() {
                self.$router.push("/vcard/2");
              }
            });
            clearInterval(self.timer);
          }
        } else if (error == 10001) {
          clearInterval(self.timer);
          self.showtoast(message);
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.qrcode {
  text-align: center;
  padding: 30px;
  background-color: #fff;
}
</style>
