<style>body {
	background: #f0f0f0;
}

#main_content {
	width: 100%;
	height: 100%;
	position: relative;
	background: #f0f0f0;
	margin-bottom: 70px;
}

.bottom-bar {
	position: fixed;
	z-index: 900;
	bottom: 52px;
	left: 0px;
	width: 100%;
	height: 50px;
	background: #ffffff;
}

.bottom-bar .pay_price_info {
	float: left;
	width: 65%;
	line-height: 0.9rem;
	text-align: left;
	padding-left: 5%;
	font-size: 0.25rem;
}

.bottom-bar .pay_price_info .text {
	color: #9D9D9D;
}

.bottom-bar .pay_price_info .price {
	color: #ff0000;
	font-weight: bold;
}

.bottom-bar .btn-bar {
	float: left;
	width: 30%;
}

.bottom-bar .btn-bar button {
	width: 100%;
	height: 50px;
	line-height: 50px;
	font-size: 0.3rem;
	border: none;
	background: #27AF97;
	color: #ffffff;
}

.main-content {}

.base-info-block {
	display: inline-block;
	width: 94%;
	padding: 0px 3%;
	background: #ffffff;
}

.order-row {
	display: inline-block;
	width: 100%;
	height: 0.72rem;
	line-height: 0.72rem;
	border-bottom: 1px solid #F0F0F0;
	font-size: 0.26rem;
}

.order-row .order-sn {
	float: left;
	width: 90%;
	font-size: 0.26rem;
}

.order-row .order-sn span {
	color: #9D9D9D;
}

.order-row .detail-btn {
	float: left;
	width: 10%;
	height: 100%;
	text-align: right;
}

.order-row .detail-btn img {
	width: 50%;
	height: 50%;
	margin: 25% 25%;
}

.car-info {
	display: inline-block;
	width: 100%;
	height: auto;
	font-family: MicrosoftYaHei-Bold;
	font-size: 0.4rem;
	font-weight: bold;
	color: #272727;
	letter-spacing: 0;
}

.order-info-text {
	display: inline-block;
	width: 100%;
	font-size: 0.25rem;
	color: #A7A7A7;
	letter-spacing: 0;
	line-height: 0.6rem;
	border-bottom: 1px solid #F0F0F0;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}

.pay-row {
	display: inline-block;
	width: 100%;
	height: auto;
	background: #ffffff;
}

.pay-row .pay_price_info {
	float: left;
	width: 40%;
	line-height: 50px;
	text-align: left;
	font-size: 0.27rem;
	border-right: 1px solid #F0F0F0;
}

.pay-row .pay_price_info .text {
	color: #9D9D9D;
}

.pay-row .pay_price_info .price {
	color: #ff0000;
	font-weight: bold;
}

.pay-row .btn-bar {
	float: left;
	width: 55%;
}

.pay-row .btn-bar div {
	float: left;
	display: flex;
	width: 45%;
	height: 50px;
	line-height: 50px;
	font-size: 0.25rem;
	text-align: center;
	padding-left: 5%;
}

.pay-row .btn-bar span span {}

.pay-row .btn-bar span img {
	width: 16px;
	height: 16px;
}

.pay-row .btn-bar button {
	float: left;
	display: inline;
	width: 50%;
	height: 0.7rem;
	line-height: 0.7rem;
	font-size: 0.25rem;
	font-weight: bold;
	border: none;
	background: #27AF97;
	color: #ffffff;
	border-radius: 0.05rem;
	padding: 0px 0.1rem !important;
	margin-top: 0.05rem;
}

.process-block,
.recp-block,
.comment-block {
	display: inline-block;
	margin-top: 5px;
	width: 94%;
	padding: 0px 3%;
	background: #ffffff;
}

.process-block .title-row {
	width: 100%;
	height: 0.7rem;
	line-height: 0.7rem;
	border-bottom: 1px solid #F0F0F0;
	font-size: 0.25rem;
}

.process-block .title-row .text {
	float: left;
	width: 50%;
}

.process-block .title-row .phone {
	float: left;
	width: 50%;
	text-align: right;
}

.process-block .process-row {
	padding: 0px 5%;
	width: 90%;
}

.process-flow {
	position: relative;
	list-style: none;
}

.process-flow li {
	width: 100%;
	min-height: 100px;
	position: relative;
}

.timeline-item-head {
	position: absolute;
	width: 30px;
	height: 30px;
	left: -4px;
	top: 5px;
	border-radius: 50%;
	line-height: 30px;
	content: '';
	z-index: 99;
	background: #DEDEDE;
}

.timeline-item-head-active {
	background: #27AF97;
}

.timeline-item-color {}

.timeline-item-head img {
	position: absolute;
	left: 0;
	top: 0;
	width: 15px;
	height: 15px;
	padding: 8px 8px;
	display: inline-block;
}

.timeline-item-tail {
	position: absolute;
	content: '';
	height: 100%;
	width: 4px;
	left: 9px;
	top: 5px;
	background: #DEDEDE;
}

.timeline-item-tail-active {
	background-color: #27AF97;
}

.timeline-item-content {
	padding-left: 35px;
	padding-top: 4px;
	padding-bottom: 30px;
}

.timeline-item-content .detail {
	display: inline-block;
	width: 100%;
	margin-top: 10px;
}

.timeline-item-content .detail img {
	float: left;
	width: 80px;
	margin-right: 5px;
	margin-top: 3px;
	border-radius: 3px;
}

.timeline-item-content .opr-time {
	float: left;
	width: 100%;
	color: #999999;
	font-size: 0.25rem;
	line-height: 36px;
}

.recp-block {
	height: 140px;
	padding-bottom: 10px;
}

.recp-block .info-row {
	display: inline-block;
	width: 100%;
	border-bottom: 1px solid #F0F0F0;
}

.recp-block .btn-row {
	margin-bottom: 0.4rem;
	text-align: center;
}

.recp-block .cover {
	float: left;
	width: 15%;
	height: 100%;
	border-radius: 50%;
}

.recp-block .cover img {
	height: 0.75rem;
	width: 0.75rem;
	border-radius: 50%;
	padding: 15px 5px;
}

.recp-block .detail {
	float: left;
	width: 75%;
	height: 100%;
	padding-top: 0.25rem;
	font-size: 0.27rem;
}

.recp-block .btn-row button {
	margin-top: 0.15rem;
	margin-right: 0.05rem;
	border-radius: 0.3rem;
	background: #ffffff;
	color: #999999;
	border: 1px solid #999999;
	padding: 0.1rem 0.4rem;
}

.recp-block .btn-row button img {
	float: left;
}

.comment-block {
	padding-bottom: 0.2rem;
	margin-bottom: 2rem;
}

.comment-block .title-row {
	width: 100%;
	height: 0.7rem;
	line-height: 0.7rem;
	border-bottom: 1px solid #F0F0F0;
	font-size: 0.25rem;
}

.comment-block .title-row .text {
	float: left;
	width: 100%;
}

.comment-block .comment-row {
	width: 100%;
}

.comment-block .comment-row .rater {
	text-align: center;
	margin: 0px auto;
	display: block;
	margin-top: 0.3rem;
}

.comment-block .comment-row .rater a {
	font-size: 0.8rem;
	width: 0.8rem !important;
	height: 0.8rem !important;
}

.comment-block .comment-row .rater span {
	font-size: 0.8rem;
}

.comment-block .comment-row .comment-textarea {
	font-size: 0.25rem;
	background: #f0f0f0;
}

.comment-block .comment-row .comment-textarea textarea {
	background: #f0f0f0;
}

.comment-block .comment-row .submit-comment {
	margin-top: 5px;
	margin-bottom: 0.2rem;
	width: 100%;
	text-align: center;
	color: #ffffff;
	background: #272727;
	border: none;
	border-radius: 3px;
	padding: 0.2rem 0px;
}

.weui-dialog {
	overflow: visible !important;
}

.dialog .title-row {
	height: 0.7rem;
	line-height: 0.7rem;
	font-size: 0.17rem;
	font-weight: bold;
	text-align: center;
	color: #000000;
	background: #E1DAB3;
}

.dialog .list-content {
	width: 100%;
}

.dialog .list-content .car-plateno {
	width: 90%;
	padding: 0px 5%;
	height: 0.6rem;
	line-height: 0.6rem;
	font-size: 0.3rem;
	text-align: left;
	font-weight: bold;
}

.dialog .list-content .service-content {
	width: 90%;
	padding: 0px 5%;
}

.dialog .list-content .service-content ul {
	list-style: none;
}

.dialog .list-content .service-content ul li {
	width: 100%;
	padding: 5px 0px;
	text-align: left;
	display: flex;
	border-top: 1px solid #f0f0f0;
	font-size: 0.25rem;
	line-height: 0.5rem;
}

.dialog .list-content .service-content ul li .name {
	/*display: inline;*/
	width: 70%;
	text-align: left;
}

.dialog .list-content .service-content ul li .price {
	/*display: inline;*/
	width: 30%;
	text-align: right;
}

.dialog .list-content .price-content {
	display: flex;
	width: 90%;
	padding: 0px 5%;
	background: #f0f0f0;
	font-size: 0.25rem;
}

.dialog .list-content .price-content ul {
	list-style: none;
	width: 100%;
}

.dialog .list-content .price-content ul li {
	width: 100%;
	text-align: left;
	display: flex;
	line-height: 0.5rem;
}

.dialog .list-content .price-content ul li .name {
	/*display: inline;*/
	width: 50%;
	text-align: left;
}

.dialog .list-content .price-content ul li .price {
	/*display: inline;*/
	width: 50%;
	text-align: right;
}

.red-font {
	color: #ff0000;
	font-weight: bold;
}

.dialog .btn-row {
	text-align: center;
	margin-bottom: 20px;
	margin-top: 0.3rem;
}

.dialog .btn-row button {
	/*width: 100px;*/
	padding: 0.1rem 0.4rem;
	background: #FFD100;
	border-radius: 3px;
	color: #000000;
	font-size: 17px;
	font-weight: bold;
	border: none;
}

.dialog .close-btn {
	position: absolute;
	width: 0.45rem;
	height: 0.45rem;
	top: -0.2rem;
	right: -0.2rem;
	z-index: 9999999;
}

.dialog .close-btn img {
	width: 100%;
	height: 100%;
	z-index: 9999999;
}

.scroller-list {
	height: auto !important;
	min-height: 3rem;
	max-height: 5rem;
}</style>

<template>
	<div id="main_content">
		<div v-transfer-dom>
			<x-dialog mask-transition="false" dialog-transition="fasle" v-model="show" class="dialog">
				<div class="close-btn" @click="closeDialog"><img src="../../../static/image/close-circled.png" /></div>
				<div class="title-row">订单详情</div>
				<div class="list-content">
					<div class="car-plateno">
						{{recpData.car_info.car_plateno}}&nbsp;{{recpData.car_info.car_brand_str}}&nbsp;{{recpData.car_info.car_model_str}}
					</div>
					<scroller lock-x scrollbar-y class="scroller-list">
						<div class="service-content">
							<ul>
								<li v-for="job in recpData.jobs">

									<div class="name" v-if="job.job_type==0">{{job.service_name}}</div>
									<div class="name" v-if="job.job_type==1">{{job.service_name}}&nbsp;{{job.service_price}}&nbsp;*&nbsp;{{job.server_count}}</div>
									<div class="price">￥{{job.server_totalprice}}</div>
								</li>
							</ul>
						</div>
					</scroller>

					<div class="price-content">
						<ul>
							<li>
								<div class="name">工时费：</div>
								<div class="price">￥{{workPrice}}</div>
							</li>
							<li>
								<div class="name">材料费：</div>
								<div class="price">￥{{materialPrice}}</div>
							</li>
							<li>
								<div class="name">项目总额：</div>
								<div class="price">￥{{workPrice+materialPrice}}</div>
							</li>
							<li>
								<div class="name red-font">实付款：</div>
								<div class="price red-font">￥{{workPrice+materialPrice}}</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="btn-row">
					<button type="button" @click="confirmTips" v-if="recpData.order_status>=10&&recpData.order_status<20">确认</button>
				</div>
			</x-dialog>
		</div>
		<div class="bottom-bar">
			<div class="pay_price_info">
				<span class="text">待支付：</span>
				<span class="price">￥{{recpData.pay_price}}</span>
			</div>
			<div class="btn-bar">
				<button type="button" v-if="recpData.pay_status=='0'" v-on:click="pay">立即支付</button>
				<button type="button" v-if="recpData.pay_status!='0'">已支付</button>
			</div>
		</div>
		<div class="main-content">
			<!--第一行-->
			<div class="base-info-block">
				<div class="order-row">
					<div class="order-sn">
						<span>接车单单号：</span>{{recpData.order_sn}}
					</div>
					<div class="detail-btn">
						<img src="../../../static/image/detail.svg" v-on:click="showJobs" />
					</div>
				</div>
				<div class="car-info">
					{{recpData.car_info.car_plateno}}&nbsp;{{recpData.car_info.car_brand_str}}&nbsp;{{recpData.car_info.car_model_str}}
				</div>
				<div class="order-info-text">
					{{recpData.jobs_str}}
				</div>
				<div class="pay-row">
					<div class="pay_price_info">
						<span class="text">待支付：</span>
						<span class="price">￥{{recpData.pay_price}}</span>
					</div>
					<div class="btn-bar">
						<div>
							<img src="../../../static/image/youhuiquan.svg" />
							<span>&nbsp;领取优惠券</span>
						</div>
						<button type="button" v-if="recpData.pay_status=='0'" v-on:click="pay">立即支付</button>
						<button type="button" v-if="recpData.pay_status!='0'">已支付</button>
					</div>
				</div>
			</div>
			<!--第一行-->
			<div class="process-block">
				<div class="title-row">
					<div class="text">
						<i></i> 项目进度
					</div>
					<div class="phone">
						接待电话：{{recpData.recpter.utel}}
					</div>
				</div>
				<div class="process-row">
					<ul class="process-flow">
						<li>
							<div v-bind:class="[recpData.order_status<1 ? '' : 'timeline-item-head-active', 'timeline-item-color timeline-item-head']">
								<img src="../../../static/image/arrow-down.svg" />
							</div>
							<div v-bind:class="[recpData.order_status<1 ? '' : 'timeline-item-tail-active', 'timeline-item-tail']"></div>
							<div class="timeline-item-content">
								<div class="recent">已接车</div>
								<div class="detail">
									<img class="previewer-img" :src="img.src" v-for="(img, index) in recpte_img" @click="showRecpImg(index)" />
								</div>
								<div class="opr-time">接车时间：{{recpData.create_time_str}}</div>
							</div>
						</li>
						<li>
							<div v-bind:class="[recpData.order_status<30 ? '' : 'timeline-item-head-active', 'timeline-item-color timeline-item-head']">
								<img src="../../../static/image/banshou.svg" />
							</div>
							<div v-bind:class="[recpData.order_status<30 ? '' : 'timeline-item-tail-active', 'timeline-item-tail']"></div>
							<div class="timeline-item-content">
								<div class="recent">进行中</div>
							</div>
						</li>
						<li>
							<div v-bind:class="[recpData.order_status<40 ? '' : 'timeline-item-head-active', 'timeline-item-color timeline-item-head']">
								<img src="../../../static/image/correct.svg" />
							</div>
							<div class="timeline-item-content">
								<div class="recent">已完成</div>
								<div class="opr-time">提车时间：{{recpData.order_deadline_str}}</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!--第二行-->
			<!--第三行-->
			<div class="recp-block">
				<div class="info-row">
					<div class="cover">
						<img :src="recpData.recpter.headimgurl" />
					</div>
					<div class="detail">
						<p>{{recpData.recpter.urealname}}</p>
						<p>接车时间：{{recpData.create_time_str}}</p>
					</div>
				</div>
				<div class="btn-row">
					<button type="button"><img src="../../../static/image/laugh.svg" />&nbsp;满意</button>
					<button type="button"><img src="../../../static/image/chaping.svg" />&nbsp;不满意</button>
				</div>
			</div>
			<!--第三行-->
			<!--第四行-->
			<div class="comment-block">
				<div class="title-row">
					<div class="text">
						<i></i> 服务评价
					</div>
				</div>
				<div class="comment-row">
					<div>
						<rater v-model="rater" class="rater"></rater>
					</div>
					<div>
						<group>
							<x-textarea class="comment-textarea" :height="100" v-model="comment" placeholder="亲，服务如何，对质量和服务等还满意吗？"></x-textarea>
						</group>
					</div>
					<div>
						<button type="button" class="submit-comment">提交</button>
					</div>
				</div>
			</div>
			<!--第四行-->
			<!--图片预览-->
			<div v-transfer-dom>
				<previewer :list="recpte_img" ref="recpPreviewer"></previewer>
			</div>
			<!--图片预览-->
		</div>
	</div>
</template>

<script>import { Toast, Scroller, Rater, XTextarea, XDialog, Previewer,Group, TransferDomDirective as TransferDom } from 'vux'
export default {
	name: 'order_detail',
	directives: {
		TransferDom
	},
	components: {
		Toast,
		Scroller,
		Rater,
		XTextarea,
		XDialog,
		Previewer,
		Group
	},
	data() {
		return {
			no: '',
			recpData: {car_info:{car_plateno:''},recpter:{utel:''}},
			workPrice: 0,
			materialPrice: 0,
			previewerImg: [],
			recpte_img: [],
			rater: 0,
			comment: '',
			show: false,
			currentPre: ''
		}
	},
	created: function() {
		var self = this;
		self.no = self.$route.params.id;
		self.fetchData(self.no);
	},
	deactivated: function() {
		var self = this;
		self.show = false;
	},
	methods: {
		fetchData: function(id) {
			//tab_index用作分类，卡的类型
			var self = this;
			self.xarpost('ShopOrderRecp/getorderRecpInfoFront', {
				'order_sn': id,
			}).then(function(d) {
				let {
					data,
					error,
					message
				} = d;
				if(d.error != 0) {
					self.$vux.toast.show({
						text: d.message,
						type: 'cancel',
						time: 3000
					});
					return;
				}
				//如果都正常，正常加载页面
				var newData = (d.data == undefined) ? [] : d.data;
				self.setData(newData);
			}, function(e) {
				self.$vux.toast.show({
					text: e,
					type: 'cancel',
					time: 3000
				});
			});
		},
		setData(data) {
			var self = this;
			self.recpData = data;
			self.recpte_img = [];
			for(var index in data.recpte_img) {
				self.recpte_img.push({
					src: data.recpte_img[index]
				});
			}
			var jobs = data.jobs;

			var workPrice = 0,
				materialPrice = 0;
			for(var job in jobs) {
				if(jobs[job].job_type == 0) {
					workPrice += parseFloat(jobs[job].server_totalprice);
				}
				if(jobs[job].job_type == 1) {
					materialPrice += parseFloat(jobs[job].server_totalprice);
				}
			}
			self.workPrice = workPrice;
			self.materialPrice = materialPrice;
			if(data.order_status >= 10 && data.order_status < 20) {
				self.show = true;
			}
		},
		showJobs: function() {
			this.show = true;
		},
		closeDialog: function() {
			this.show = false;
		},
		confirmTips: function() {
			var self = this;
			self.show = false;
			self.xarpost('ShopOrderRecp/customerConfirm', {
				'order_sn': self.no,
			}).then(function(d) {
				let {
					data,
					error,
					message
				} = d;
				self.$vux.toast.show({
					text: d.message,
					time: 3000
				});
				if(d.error != 0) {
					return;
				}
				//如果都正常，正常加载页面
				var newData = (d.data == undefined) ? [] : d.data;
				self.setConfirm(newData);
			}, function(e) {
				self.$vux.toast.show({
					text: e,
					type: 'cancel',
					time: 3000
				});
			});
		},
		setConfirm: function(data) {
			self.$vux.toast.show({
				text: '确认成功！',
				type: 'success',
				time: 3000
			});
			this.recpData.order_status = 20;
		},
		showRecpImg: function(index) {
			var self = this;
			this.$refs.recpPreviewer.show(index);
		},
		pay: function() {
			var self = this;
			self.show = false;
			self.xarpost('ShopOrderRecp/pay', {
				'order_sn': self.no,
			}).then(function(d) {
				let {
					data,
					error,
					message
				} = d;
				
				if(d.error != 0) {
					self.$vux.toast.show({
					text: d.message,
					type: 'cancel',
					time: 3000
				});
					return;
				}
				//如果都正常，正常加载页面
				var pay = data.data;
				self.$wechat.chooseWXPay({
					timestamp: pay.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
					nonceStr: pay.nonceStr, // 支付签名随机串，不长于 32 位
					package: pay.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=***）
					signType: pay.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
					paySign: pay.paySign, // 支付签名
					success: function(res) {
						resfun(res)
					},
					cancel: function(res) {
						showtoast('取消支付')
						rejfun(res)
					},
					fail: function(res) {
						showtoast('支付失败,请联系管理员')
						rejfun(res)
					}
				});
			}, function(e) {
				self.$vux.toast.show({
					text: e,
					type: 'cancel',
					time: 3000
				});
			});
		}
	}
}</script>