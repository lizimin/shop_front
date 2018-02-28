<style>
	.img_content {
		width: 100%;
		margin: 0rem;
		padding: 0rem;
		position: relative;
	}
	
	.img_content img {
		margin: 0rem;
		padding: 0rem;
	}
	.img_content_bottom{
		margin-top: -0.08rem;
		margin-bottom: 0.55rem;
	}
	.qrcode{
		position: absolute;
		width: 37%;
		left: 31.5%;
		bottom: 4.5%;
	}
	.qrcode canvas{
		width: 100% !important;
		height: 100% !important;
	}
</style>
<template>
	<div>
		<div class="img_content">
			<img class="qrcode" :src="qrcode.x_str"/>
			<img style="width: 100%;" src="http://opic.gotomore.cn/upload/mall/2018/01/25/1516875788_HwdDYA.jpg" />
			<!--<img style="width: 100%;" src="../../static/image/conpon_top.jpg" />-->
		</div>
		<div class="img_content img_content_bottom">
			<img style="width: 100%;" src="http://opic.gotomore.cn/upload/mall/2018/01/25/1516869277_rxoN2H.jpg" />
			<!--<img style="width: 100%;" src="../../static/image/conpon_bottom.jpg" />-->
		</div>
	</div>
</template>

<script>
	import api from "api/api";
	import { Qrcode } from "vux";
	export default {
		name: "VcardDetail",
		components: {
			Qrcode
		},
		data() {
			return {
				qrWidth: 80,
				qrcode: {
					x_str: ""
				},
			};
		},
		beforeUpdate: function(){
			this.setWxShare("小矮人中石化易捷加油礼包","免费享300元优惠券",this.site_url + "index.html#/receive_conpon/temp","http://opic.gotomore.cn/upload/mall/2018/01/25/1516876233_QH2LXP.jpg");
		},
		activated: function() {
			this.fetchData();
		},
		computed: {},
		created() {
			this.fetchData();
		},
		methods: {
			fetchData: function() {
				var self = this;
				this.xarpost("WechatQr/getYouhuiQr").then(d => {
					let {
						data,
						error,
						message
					} = d;
					self.qrcode.x_str = d.data.qrurl;
					console.log(d.data.qrurl);
				});
			}
		}
	};
</script>