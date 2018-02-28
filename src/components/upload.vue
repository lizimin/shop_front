<template>
  <div id="comment">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <div class="weui-uploader">
            <div class="weui-uploader__hd">
              <p class="weui-uploader__title">{{name}}</p>
              <div class="weui-uploader__info">{{imgList.length}}/{{maxNum}}</div>
            </div>
            <div class="weui-uploader__bd">
              <ul class="weui-uploader__files" id="uploaderFiles">
                <li v-for="item in imgList" :item="item" class="weui-uploader__file" :style="'background-image:url('+ item.imgPath +')'" @click="previewImage(item)">
                  <!-- <div class="weui-uploader__file-content">
                    <i class="weui-icon-warn"></i>
                  </div> -->
                </li>
              </ul>
              <div class="weui-uploader__input-box" v-if="showAdd">
                <div id="uploaderInput" class="weui-uploader__input" @click="choiceImg">
                </div>
                <!-- <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" multiple=""> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Upload",
  props: {
    name: {
      type: String,
      default: "图片上传"
    },
    imgList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    propsShowAdd: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      maxNum: 9,
      test: "",
      showAdd: true
    };
  },
  watch: {
    propsShowAdd: function(newvalue, oldvalue) {
      this.showAdd = newvalue;
    }
  },
  methods: {
    choiceImg: function() {
      let wx = this.$wechat;
      let self = this;
      wx.ready(() => {
        wx.chooseImage({
          count: 1, // 默认9
          sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
          success: function(res) {
            var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
            localIds.map(function(item) {
              wx.uploadImage({
                localId: item, // 需要上传的图片的本地ID，由chooseImage接口获得
                isShowProgressTips: 1, // 默认为1，显示进度提示
                success: function(res) {
                  var serverId = res.serverId; // 返回图片的服务器端ID
                  // serverId = 'zYqSTx0j_egs2wzMTXsxRyHwDmijn3NXtS3KjU7GTGoDta6t-B1hygPzLhhnuRFs'
                  self
                    .xarpost("Wechat/saveMedia", { mediaId: serverId })
                    .then(res => {
                      let { data, error, message } = res;
                      console.log(res);
                      self.imgList.push({
                        imgPath: item,
                        serverId: serverId,
                        aid: data.aid
                      });
                    });
                }
              });
            });
          }
        });
      });
    },

    previewImage: function(i) {
      let wx = this.$wechat;
      var urls = [];
      this.imgList.map(function(item) {
        urls.push(item.localId);
      });
      console.log(urls);
      wx.ready(() => {
        wx.previewImage({
          current: i.localId, // 当前显示图片的http链接
          urls: urls // 需要预览的图片http链接列表
        });
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.weui-cells {
  margin-top: 1.17647059em;
  background-color: #fff;
  line-height: 1.47058824;
  font-size: 17px;
  overflow: hidden;
  position: relative;
}
* {
  margin: 0;
  padding: 0;
}
.weui-cells:after,
.weui-cells:before {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  color: #e5e5e5;
  z-index: 2;
}
.weui-cells:before {
  top: 0;
  border-top: 1px solid #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.weui-cells:after {
  bottom: 0;
  border-bottom: 1px solid #e5e5e5;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.weui-cells:after,
.weui-cells:before {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  color: #e5e5e5;
  z-index: 2;
}
.weui-cell {
  padding: 10px 15px;
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.weui-cell:first-child:before {
  display: none;
}
.weui-cell:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  color: #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  left: 15px;
  z-index: 2;
}
.weui-cell__bd {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.weui-uploader__hd {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  padding-bottom: 10px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.weui-uploader__title {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.weui-uploader__info {
  color: #b2b2b2;
}
.weui-uploader__bd {
  margin-bottom: -4px;
  margin-right: -9px;
  overflow: hidden;
}
.weui-uploader__files {
  list-style: none;
}
ul {
  display: block;
  list-style-type: disc;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  /*-webkit-padding-start: 40px;*/
}
body,
html {
  height: 100%;
  -webkit-tap-highlight-color: transparent;
}
.weui-uploader__file {
  float: left;
  margin-right: 9px;
  margin-bottom: 9px;
  width: 79px;
  height: 79px;
  background: no-repeat 50%;
  background-size: cover;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.weui-uploader__input-box {
  float: left;
  position: relative;
  margin-right: 9px;
  margin-bottom: 9px;
  width: 77px;
  height: 77px;
  border: 1px solid #d9d9d9;
}
.weui-uploader__input-box:before {
  width: 2px;
  height: 39.5px;
}
.weui-uploader__input-box:after,
.weui-uploader__input-box:before {
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #d9d9d9;
}
.weui-uploader__input-box:after {
  width: 39.5px;
  height: 2px;
}
.weui-uploader__input-box:after,
.weui-uploader__input-box:before {
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #d9d9d9;
}
.weui-cells_form input,
.weui-cells_form label[for],
.weui-cells_form textarea {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.weui-uploader__input {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
input[type="file" i] {
  align-items: baseline;
  color: inherit;
  text-align: start;
}
input[type="hidden" i],
input[type="image" i],
input[type="file" i] {
  -webkit-appearance: initial;
  background-color: initial;
  cursor: default;
  padding: initial;
  border: initial;
}
.weui-uploader__file_status {
  position: relative;
}
.weui-uploader__file_status .weui-uploader__file-content {
  display: block;
}
.weui-uploader__file-content {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
}
.weui-uploader__file_status:before {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.weui-cells:after,
.weui-cells:before {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  height: 1px;
  color: #e5e5e5;
  z-index: 2;
}
.weui-cells:after {
  bottom: 0;
  border-bottom: 1px solid #e5e5e5;
  -webkit-transform-origin: 0 100%;
  transform-origin: 0 100%;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.weui-cells:before {
  top: 0;
  border-top: 1px solid #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.weui-cell:before {
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #e5e5e5;
  color: #e5e5e5;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
  left: 15px;
  z-index: 2;
}
</style>
