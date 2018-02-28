<template>
  <div id="comment" class="cpts-comment">
      <p v-if="isLoad " style="text-align:center; ">
        <inline-loading></inline-loading>
        <span style="vertical-align:middle;display:inline-block;font-size:14px; ">&nbsp;&nbsp;评论加载中</span>
      </p>
      <div class="comment-title " v-if="num ">
        <flexbox :gutter="0 ">
          <flexbox-item :span="1/2 ">
            <span class="comment-left ">买的人这样说</span>
            <span class="comment-left-num ">({{num}})</span>
          </flexbox-item>
          <flexbox-item :span="1/2 ">
            <span class="comment-right ">好评度:
              <span class="comment-right-num ">{{avg}}</span>
            </span>
          </flexbox-item>
        </flexbox>
      </div>
      <div v-for="comment in commentList " class="comment-item ">
        <comment-item :comment="comment"></comment-item>
      </div>
    <div class="show-commit-more " v-if="showAll&&commentList.length ">
      <router-link :to=" '/commentList'+ '?pro_id='+pro_id+ '&shop_id='+shop_id+ '&customer_id='+customer_id+ '&shop_user='+shop_user ">
        <span>{{num ? '查看全部评价' : '暂无评价' }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Rater, InlineLoading, Divider } from "vux";
import commentItem from './commentItem'
export default {
  name: "comment",
  components: {
    Flexbox,
    FlexboxItem,
    Rater,
    InlineLoading,
    Divider,
    commentItem
  },
  props: {
    comment: {
      type: Object,
      default: function() {
        return {};
      }
    },
    shop_id: {
      type: Number,
      default: 0
    },
    pro_id: {
      type: Number,
      default: 0
    },
    customer_id: {
      type: Number,
      default: 0
    },
    shop_user: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 5
    },
    showAll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      commentList: [],
      num: 0,
      avg: 0,
      isLoad: false,
      max_id: 0,
      min_id: 0,
      post_data: {},
      load_all: false
    };
  },
  watch: {
    shop_id: function(newvalue, oldvalue) {
      this.fetchData();
    },
    pro_id: function(newvalue, oldvalue) {
      this.fetchData();
    },
    customer_id: function(newvalue, oldvalue) {
      this.fetchData();
    },
    limit: function(newvalue, oldvalue) {
      this.post_data.limit = newvalue;
      this.fetchData();
    }
  },
  mounted: function() {
    this.post_data.limit = this.limit;
    this.post_data.pro_id = this.pro_id;
    this.post_data.shop_id = this.shop_id;
    this.post_data.customer_id = this.customer_id;
    this.post_data.shop_user = this.shop_user;
    this.fetchData();
  },
  methods: {
    fetchData: function(refresh = true) {
      let self = this;
      if (self.isLoad) return;
      self.isLoad = true;
      self
        .xarpost("Comment/getCommentList", {
          limit: self.limit,
          pro_id: self.pro_id,
          shop_id: self.shop_id,
          customer_id: self.customer_id,
          shop_user: self.shop_user
        })
        .then(d => {
          self.isLoad = false;
          let { data, error, message } = d;
          if (data.num) self.num = data.num;
          if (data.avg) self.avg = data.avg;
          if (refresh) {
            self.commentList = data.list;
          } else {
            data.list.map(function(item) {
              self.commentList.push(item);
            });
            if (data.list.length <= 0) {
              self.load_all = true;
              self.$refs.commentScroller.showLoading = false;
              self.$refs.commentScroller.loadingState = 2;
            }
          }
          self.max_id = self.commentList[0]["id"];
          self.min_id = self.commentList[self.commentList.length - 1]["id"];
        });
    },
    refresh: function() {
      this.load_all = false;
      this.post_data.min_id = 0;
      this.post_data.max_id = 0;
      this.fetchData();
    },
    infinite: function() {
      if (this.load_all) {
        this.$refs.commentScroller.finishInfinite();
        return;
      }
      this.post_data.min_id = this.min_id;
      this.fetchData(false);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.cpts-comment {
  #comment {
    background-color: #fff;
  }
  .comment-img {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    margin: 3px;
  }
  .comment-name {
    font-size: 0.26rem;
    font-weight: bold;
    line-height: 20px;
    height: 20px;
    font-size: 14px;
  }
  .comment-star {
    font-size: 0.26rem;
    font-weight: bold;
    line-height: 20px;
    height: 20px;
  }
  .comment-date {
    font-size: 0.22rem;
    float: right;
    vertical-align: top;
    color: #9f9f9f;
  }
  #index {
    background-color: #fafafa;
    padding: 5px 5px 0px 5px;
    border-bottom: 1px solid #eeeeee;
  }
  .comment_name_div {
    padding: 0px;
    width: 100px;
    height: 45px;
  }
  .content {
    font-size: 14px;
    padding: 4px 0px;
    color: #000000;
  }
  .des {
    font-size: 12px;
    color: #9f9f9f;
  }
  .comment-c-img {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    background-color: #eaeaea;
    overflow: hidden;
    padding-right: 5px;
  }
  .comment-title {
    background-color: #fff;
    padding: 0.18rem 0.22rem;
  }
  .comment-left {
    font-family: MicrosoftYaHei-Bold;
    font-size: 0.26rem;
    color: #272727;
    letter-spacing: 0;
  }
  .comment-right {
    font-family: MicrosoftYaHei-Bold;
    font-size: 15px;
    color: #272727;
    letter-spacing: 0;
    float: right;
  }
  .comment-left-num {
    font-family: MicrosoftYaHei;
    font-size: 0.26rem;
    color: #909090;
    letter-spacing: 0;
    line-height: 15px;
  }
  .comment-right-num {
    color: #fe4d3d;
  }
  .comment-item {
    /* padding-top: 0.32rem; */
    padding: 0.32rem 0.22rem 0px 0.22rem;
    border-top: 0.01rem solid #eeeeee;
  }
  .weui-uploader__bd {
    margin-bottom: -4px;
    margin-right: -9px;
    overflow: hidden;
  }
  .weui-uploader__files {
    list-style: none;
  }
  .weui-uploader__file {
    float: left;
    margin-right: 0.19rem;
    margin-bottom: 0.19rem;
    width: 1.6rem;
    height: 1.6rem;
    background: no-repeat 50%;
    background-size: cover;
  }
  .show-commit-more {
    padding: 10px;
    text-align: center;
    color: #ff0000;
    span {
      border: 1px solid #ff0000;
      padding: 5px;
      border-radius: 4px;
    }
  }
  .show-commit-nomore {
    background: #fafafa;
    padding: 10px;
    text-align: center;
    color: #eeeeee;
    span {
   
    }
  }
}
.cpts-comment {
  background: #fff;
  .hd {
    display: flex;
    justify-content: space-between;
    height: 0.7rem;
    padding: 0 0.2rem;
    align-items: center;
    border-bottom: 1px solid #eee;
    &-right {
      font-size: 0.22rem;
      .fa {
        font-size: 0.4rem;
      }
    }
  }
}
</style>
