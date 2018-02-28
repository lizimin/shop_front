<template>
  <div id="comment" class="cpts-comment">
    <group>
      <cell title="服务评分">
        <rater v-model="rangeServer" :disabled="disabled"></rater>
      </cell>
      <x-textarea title="评价内容" v-model="comment" placeholder="请为我们的服务做出评价." :max="200"></x-textarea>
    </group>
    <div>
      <upload ref="upload" name="服务图片" :imgList="imgList" :propsShowAdd="showAdd"></upload>
    </div>
    <div class="tijiao">
      <XButton :type="[is_comment ? 'default' : 'primary']" @click.native="tijiao">{{ is_comment ? '您已评价' : '提交评价' }}</XButton>
    </div>
  </div>
</template>
<script>
import upload from "../../components/upload.vue";
import { Range, Rater, Group, Cell, XButton, XTextarea } from "vux";
export default {
  name: "comment",
  components: {
    upload,
    Range,
    Rater,
    Group,
    Cell,
    XButton,
    XTextarea
  },
  data() {
    return {
      rangeServer: 5,
      comment: "",
      imgList: [],
      pro_id: 0,
      shop_id: 0,
      order_id: 0,
      extra_id: "",
      is_comment: false,
      disabled: false,
      ctoken: "",
      showAdd: true
    };
  },
  methods: {
    tijiao: function() {
      let self = this;
      if (this.is_comment) return;
      if (this.comment) {
        self.imgList = self.$refs.upload.imgList;
        var imgid_list = [];
        self.imgList.map(function(item) {
          imgid_list.push(item.aid);
        });
        var img_list_str = imgid_list.join(",");
        self
          .xarpost("Comment/addCommentNew", {
            img_list: img_list_str,
            comment: self.comment,
            range: self.rangeServer,
            out_trade_no: self.out_trade_no,
            extra_id: self.extra_id,
            extra_type: self.extra_type
          })
          .then(res => {
            let { data, error, message } = res;
            if (error == 0) {
              message = "评价成功";
              self.is_comment = true;
              self.$router.push({
                path: "/goods/51"
              });
            }
            self.showtoast(message);
          });
      } else {
        this.showtoast("请先填写评价内容");
      }
    },
    checkComment: function() {
      var data = {};
      var self = this;
      data.out_trade_no = this.out_trade_no;
      data.extra_id = this.extra_id;
      data.extra_type = this.extra_type;
      this.xarpost("Comment/getComment", data).then(res => {
        console.log(res);
        let { data, error, message } = res;
        if (data && error == 0) {
          self.rangeServer = data.range;
          self.comment = data.comment;
          self.is_comment = true;
          self.disabled = true;
          data.img_list.map(function(item) {
            self.imgList.push({
              imgPath: item.domain + item.url
            });
          });
          self.showAdd = false;
        }
      });
    }
  },
  created: function() {
    this.out_trade_no = this.$route.params.out_trade_no;
    this.extra_id = this.$route.params.extra_id;
    this.extra_type = this.$route.params.extra_type;
    // this.checkComment();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.cpts-comment {
  // background: #000;

}
.tijiao {
  margin: 10px;
}
</style>
