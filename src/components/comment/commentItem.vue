<template>
  <div id="comment-item" class="cpts-comment">
    <flexbox :gutter="0 ">
        <div class="comment_img_div ">
        <img class="comment-img " :src="comment.customer.cavatar ">
        </div>
        <flexbox-item>
        <div class="comment_name_div ">
            <div class="comment-name ">{{comment.customer.cname}}</div>
            <div class="comment-star ">
            <rater :font-size="12 " :value="comment.range " :disabled="true "></rater>
            </div>
        </div>
        </flexbox-item>
        <flexbox-item :span="3/8 ">
        <div class="comment-date ">{{comment.add_time}}</div>
        </flexbox-item>
    </flexbox>
    <div class="content ">
        {{comment.comment}}
    </div>
    <div class="weui-uploader__bd ">
        <ul class="weui-uploader__files " id="uploaderFiles ">
        <li v-for="item, key in comment.img_list " :item="item " :key="key " v-if="key<4 " class="weui-uploader__file " :style=" 'background-image:url('+ item.domain + item.url + ')' " @click="previewImage(item) ">
        </li>
        </ul>
    </div>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, Rater, InlineLoading, Divider } from "vux";

export default {
  name: "comment-item",
  components: {
    Flexbox,
    FlexboxItem,
    Rater,
    InlineLoading,
    Divider
  },
  props: {
      comment: {
          type: Object,
          default: function (){
              return {
              }
          }
      }
  },
  data() {
    return {
    };
  },
  watch: {

  },
  mounted: function() {

  },
  methods: {

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
