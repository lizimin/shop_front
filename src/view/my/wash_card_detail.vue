<style>
ul,
li {
  list-style: none;
}

#main_content {
  width: 100%;
}

.yellow {
  background: #ffd100;
}

.card-info-content {
  display: inline-block;
  background: #ffffff;
  width: 90%;
  padding: 0px 5%;
  padding-top: 20px;
  padding-bottom: 30px;
}

.card-info-content .card-img-content {
  display: inline-block;
  width: 100%;
  height: 160px;
  position: relative;
  border-radius: 6px;
}

.card-info-content .card-img-content .card-info {
  position: absolute;
  left: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  min-height: 40px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}

.card-info-content .card-img-content .card-info .info-cell {
  width: 50%;
  float: left;
  color: #ffffff;
  line-height: 40px;
}

.card-no {
  text-align: left;
}

.card-use-info {
  text-align: right;
}

.card-name-content {
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  line-height: 30px;
  padding-top: 5px;
}

.card-des-content {
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  padding-top: 0px;
}

.can-wash-car-type-content {
  background: #ffffff;
  padding-top: 8px;
  width: 100%;
  border-top: 1px solid #dedede;
}

.can-wash-car-type-content .scroller-content-ul {
  position: relative;
  /*width: 1000%;*/
  /*overflow: hidden;*/
}

.can-wash-car-type-content .scroller-content-li {
  display: inline-block;
  float: left;
  width: 100px;
  height: 50px;
  border-right: 1px solid #dedede;
  margin-bottom: 10px;
}

.can-wash-car-type-content .scroller-content-li:last-child {
  border-right: none;
}

.can-wash-car-type-content .scroller-content-li .car-type-img {
  width: 100px;
  height: 30px;
  overflow: hidden;
}

.can-wash-car-type-content .scroller-content-li .car-type-img img {
  width: 60px;
  height: 30px;
  margin: 0px 20px;
}

.can-wash-car-type-content .scroller-content-li .car-type-name {
  width: 100%;
  font-size: 10px;
  text-align: center;
}

.menu-cell-content {
  display: inline-block;
  width: 100%;
  margin-top: 5px;
  background: #ffffff;
}

.menu-cell-content .menu-cell {
  height: 30px;
  line-height: 30px;
  margin-top: 0px !important;
}

.qrcode {
  display: inline-block;
  width: 100%;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #fff;
  position: relative;
}

.qrcode .qrcode-loding-modal .weui-loading {
  width: 40px !important;
  height: 40px !important;
  margin-top: 40px;
}

.qrcode .qrcode-loding-modal {
  position: absolute;
  width: 160px;
  height: 160px;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  color: #ffffff;
  margin: 0px auto;
  top: 20px;
  left: 0;
  bottom: 0;
  right: 0;
}
.qrcode .qrcode-loding-modal span {
  display: inherit !important;
}

.recommend {
  display: inline-block;
  padding-bottom: 50px;
  background: #ffffff;
}
</style>
<template>
	<div id="main_content">
		<div class="card-info-content">
			<div class="card-img-content yellow">
				<img/>
				<div class="card-info">
					<div class="info-cell card-no">&nbsp;&nbsp;{{no}}</div>
					<div class="info-cell card-use-info">{{use_info}}&nbsp;&nbsp;</div>
				</div>
			</div>
			<div class="card-name-content">
				{{name}}
			</div>
			<div class="card-des-content">
				{{extend_info.detail_des}}
			</div>
		</div>
		<div class="can-wash-car-type-content">
			<scroller lock-y scrollbar-x :bounce=true>
				<div class="scroller-content-ul">
					<div class="scroller-content-li" v-for="allow_car in extend_info.allow_car_type">
						<div class="car-type-img">
							<img v-if="allow_car.allow==1" :src="allow_car.img_path" />
							<img v-if="allow_car.allow==0" :src="allow_car.img_path" />
						</div>
						<div class="car-type-name">{{allow_car.name}}</div>
					</div>
				</div>
			</scroller>
		</div>
		<div class="qrcode">
			<p class="qrcode-loding-modal" v-if="qrcodeLoding">
				<inline-loading></inline-loading>
				<span style="vertical-align:middle;display:inline-block;font-size:14px;">
					二维码正在生成
				</span>
			</p>
			<div>
				<qrcode v-if="show_qrcode" :value="x_str" type="canvas" @click.native="fetchQrData"></qrcode>
				<div v-if="!show_qrcode" style="height: 160px;width: 160px;"></div>
				<p>请将此二维码出示给店员验证即可</p>
				<p>二维码30秒内有效，30秒自动更新。</p>
			</div>
		</div>
		<div class="menu-cell-content">
			<group>
				<!-- <cell class="menu-cell" title="洗车卡详情" is-link></cell> -->
				<cell class="menu-cell" title="消费记录" is-link :link="'/userecord?list_no='+no"></cell>
				<cell class="menu-cell" title="赠送给好友" @click.native="showNoticePop"></cell>
				<!-- <cell class="menu-cell" title="公众号" is-link></cell> -->
			</group>
		</div>
		<recommend class="recommend" ref="recommend" :list="recommend_list"></recommend>
		<share ref="share"></share>
		<div v-transfer-dom>
			<popup v-model="showNotice" position="bottom">
				<div style="margin:10px 0px; background-color:#fff;">
					<div class="">
						赠送提示：
					</div>
					<p style="padding:10px;">1、确认赠送好友洗车卡、将扣除您一次的使用权限。<br>2、该使用权将转到领取人的微信中<br>3、您的好友到店出示核销二维码即可进行消费<br>4、24小时内好友未领取您的洗车卡、洗车卡将自动退回您的账户中。<br>5、小矮人拥有最终解释权</p>
				</div>
				<box gap="10px 10px">
					<x-button :gradients="['#FF2719', '#FF61AD']" @click.native="giveFriend">确认扣除一次并赠送</x-button>
				</box>
			</popup>
		</div>
	</div>
</template>

<script>
import {
  Group,
  Toast,
  Scroller,
  Cell,
  Qrcode,
  Popup,
  TransferDom,
  XButton,
  Box,
  InlineLoading
} from "vux";

import { mapGetters } from "vuex";
import recommend from "../../components/goods/recommend";
import share from "../../components/share/index";
export default {
  directives: {
    TransferDom
  },
  name: "wash_card_detail",
  components: {
    Group,
    Toast,
    Scroller,
    Cell,
    Qrcode,
    share,
    Popup,
    XButton,
    Box,
    recommend,
    InlineLoading
  },
  data() {
    return {
      no: "",
      name: "",
      use_info: "",
      extend_info: {},
      x_now: 0,
      x_str: "",
      timer: null,
      show_qrcode: false,
      count: 0,
      showNotice: false,
      qrcodeLoding: true,
      recommend_list: [
        {
          id: "",
          name: "闲时卡",
          price: "10.00"
        },
        {
          id: "",
          name: "早鸟卡",
          price: "10.00"
        }
      ]
    };
  },
  activated: function() {
    var self = this;
    self.no = self.$route.params.id;

    self.timer = setInterval(function() {
      var timestamp = Date.parse(new Date()) / 1000;
      if (self.x_now + 30 < timestamp) {
        self.x_now = timestamp;
        self.fetchQrData();
      }
    }, 1000);
    self.fetchData(self.no);
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  deactivated: function() {
    clearInterval(this.timer);
  },
  methods: {
    fetchData: function(id) {
      //tab_index用作分类，卡的类型
      var self = this;
      self
        .xarpost("Mallvcard/getCardInfo", {
          id: id
        })
        .then(
          function(d) {
            let { data, error, message } = d;
            if (d.error != 0) {
              self.$vux.toast.show({
                text: d.message,
                type: "cancel",
                time: 3000
              });
            }
            //如果都正常，正常加载页面
            var newData = d.data == undefined ? [] : d.data;
            self.setData(newData);
          },
          function(e) {
            self.$vux.toast.show({
              text: e,
              type: "cancel",
              time: 3000
            });
          }
        );
    },
    setData(data) {
      var self = this;
      self.no = data.list_no;
      self.name = data.name;
      self.use_info = data.card_use_info.msg;
      self.extend_info = data.extend_info;
    },
    fetchQrData: function() {
      let self = this;
      self.qrcodeLoding = true;
      self
        .xarpost("AllQrcode/getMyVcard", {
          list_no: self.no
        })
        .then(
          d => {
            self.qrcodeLoding = false;
            let { data, error, message } = d;
            if (error == 0) {
              if (data) {
                self.x_str = data.x_str;
                self.x_now = data.x_now;
                self.count = data.count;
                self.show_qrcode = true;
              } else {
                self.noticeBuy();
                clearInterval(self.timer);
              }
            } else if (error == 10001) {
              clearInterval(self.timer);
              self.showtoast(message);
            } else if (error == 12001) {
              self.noticeBuy();
              clearInterval(self.timer);
            }
          },
          function(e) {
            self.qrcodeLoding = false;
            self.$vux.toast.show({
              text: e,
              type: "cancel",
              time: 3000
            });
          }
        );
    },
    showNoticePop: function() {
      this.showNotice = true;
    },
    giveFriend: function() {
      let self = this;
      this.showNotice = false;

      if (this.count) {
        self
          .xarpost("AllQrcode/giveVcard", {
            list_no: self.no
          })
          .then(d => {
            let { data, error, message } = d;
            if (error == 0) {
							
              const name = this.userInfo.cname||'我'
							self.setWxShare(
                `${name}赠送了你一张洗车卡。快去领取吧`,
                "离你最近的汽车服务专家",
                self.site_url + "index.html#/giveVcard/" + data.card_code
              );
              // self.showtoast('右上角、分享本页给好友即可')
              self.$refs.share.showBox = true;
            } else {
              self.showtoast(message);
            }
          });
      } else {
        this.noticeBuy("您没有卡可以赠送哦。现在带您去购买。");
      }
    },
    noticeBuy: function(
      content = "您还没有可以使用的洗车卡，现在带您去购买。"
    ) {
      let self = this;
      self.$vux.alert.show({
        title: "小矮人",
        content: content,
        onHide() {
          self.$router.push("/vcard/2");
        }
      });
    }
  }
};
</script>
