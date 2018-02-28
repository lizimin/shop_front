<style>
	#app,
	#main_content {
		height: 100%;
	}

	.box {
		padding: 15px;
	}

	.active-6-1 {
		color: rgb(252, 55, 140) !important;
		border-color: rgb(252, 55, 140) !important;
	}

	.active-6-2 {
		color: #04be02 !important;
		border-color: #04be02 !important;
	}

	.active-6-3 {
		color: rgb(55, 174, 252) !important;
		border-color: rgb(55, 174, 252) !important;
	}

	.tab-swiper {
		background-color: #fff;
		height: 100px;
	}

	.xs-container,
	.scroller_content,
	.scroller_content ul {
		height: 100%;
	}

	ul {
		list-style: none;
	}

	.yellow {
		background: #FFD100;
	}

	.green {
		background: #46C01B;
	}

	.bule{
		background: #0FAEFF ;
	}

	.red{
		background: #F86161;
	}

	.scroller_content {
		width: 100%;
		margin: 0px auto;
	}

	.card-list-content, .recommend-content  {
		display: inline-block;
		width: 90%;
		font-family: MicrosoftYaHei;
		letter-spacing: 0;
		background: #FFFFFF;
		margin-top: 10px;
		padding: 10px 5%;
	}

	.card-list-title {
		width: 100%;
		height: 50px;
	}

	.title-cell {
		width: 50%;
		float: left;
	}

	.card-all-info {
		font-family: "MicrosoftYaHei-Bold";
		font-size: 18px;
		color: #272727;
		letter-spacing: 0;
		text-align: left;
	}

	.card-all-link {
		font-size: 15px;
		color: #9C9C9C;
		letter-spacing: 0;
		line-height: 26px;
		text-align: right;
	}

	.ul-card li {
		margin-bottom: 5px;
	}

	.card-item {
		width: 100%;
		height: 60px;
		border-radius: 8px;
		position: relative;
	}

	.card-item .card-icon {
		border-radius: 50%;
		background: #ffffff;
		width: 50px;
		height: 50px;
		line-height: 100%;
		text-align: center;
		position: absolute;
		top: 5px;
		left: 10px;
	}

	.card-item .card-icon img {
		width: 80%;
		margin: 10% 15%;
	}

	p.card-name {
		position: absolute;
		left: 90px;
		top: 20px;
		color: #FFFFFF;
		font-size: 20px;
	}

	.card-status {
		position: absolute;
		top: 23px;
		right: 15px;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 20px;
		font-size: 15px;
		color: #ffffff;
		padding: 2px 10px;
	}
	.recommend{
		padding-bottom: 50px;
	}
</style>
<template>
	<div id="main_content">
		<!--<scroller lock-x scrollbar-y use-pulldown use-pullup height="100%" @on-pulldown-loading="pulldown" @on-pullup-loading="pullup" ref="demo1">-->
			<div class="scroller_content">
				<div class="card-list-content">
					<div class="card-list-title">
						<div class="title-cell card-all-info">{{instruc.title}}</div>
						<div class="title-cell card-all-link">
							<a v-on:click="showOrderDetail">查看失效卡>></a>
						</div>
					</div>
					<ul class="ul-card">
						<li v-for="card in list[current_tab_index+'_div']" v-on:click="showDetail(card.list_no)">
							<div class="card-item yellow">
								<p class="card-icon"><img src="../../../static/image/dwarfs.svg"></p>
								<p class="card-name">{{ card.name }}</p>
								<p class="card-status">{{card.msg}}</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="card-list-content">
					<div class="card-list-title">
						<div class="title-cell card-all-info">获赠的卡</div>
					</div>
					<ul class="ul-card">
						<li v-for="card in givedList">
							<div class="card-item yellow">
								<p class="card-icon"><img src="../../../static/image/dwarfs.svg"></p>
								<p class="card-name">{{ card.card_info.name }}</p>
								<p class="card-status">截止{{card.expire_time_str}}</p>
							</div>
						</li>
					</ul>
				</div>
				<recommend class="recommend" ref="recommend" :list="recommend_list"></recommend>
			</div>
		<!--</scroller>-->
	</div>
</template>

<script>
	import { Tab, TabItem, Toast, Scroller, Divider } from 'vux'
	import recommend from '../../components/goods/recommend'
	export default {
		name: 'my_wash_card_list',
		components: {
			Tab,
			TabItem,
			Toast,
			Scroller,
			Divider,
			recommend
		},
		data() {
			return {
				current_tab_index: 0,
				instruc: {
					title:''
				},
				list: {
					'0_div': []
				},
				givedList: [],
				pulldown_config: {
					content: '下拉刷新',
					height: 60,
					autoRefresh: false,
					downContent: '下拉刷新',
					upContent: '放开开始刷新',
					loadingContent: '加载中...',
					clsPrefix: 'xs-plugin-pulldown-'
				},
				pullup_config: {
					content: '上拉加载更多',
					pullUpHeight: 80,
					height: 40,
					autoRefresh: false,
					downContent: '释放开始加载',
					upContent: '上拉加载更多',
					loadingContent: '加载中...',
					clsPrefix: 'xs-plugin-pullup-'
				},
				recommend_list:[{id:'',name:'闲时卡',price:'10.00'},{id:'',name:'早鸟卡',price:'10.00'}]

			}
		},
		computed: {

		},
		activated: function() {
			var self = this;
			self.resetData();
			self.instrucFunc();
			self.fetchData(0, '', self.current_tab_index);
			self.fetchGivenData(0, '', self.current_tab_index);
		},
		methods: {
			onItemClick(index) {
				var self = this;
				self.current_tab_index = index;
			},
			pulldown: function() {
				var self = this;
				var list_no = (self.list[self.current_tab_index + '_div'][0] == undefined) ? '' : self.list[self.current_tab_index + '_div'][0]['list_no'];
				self.fetchData(1, list_no, self.current_tab_index);
			},
			pullup: function() {
				var self = this;
				var list_no = (self.list[self.current_tab_index + '_div'][(self.list[self.current_tab_index + '_div'].length - 1)] == undefined) ? '' : self.list[self.current_tab_index + '_div'][(self.list[self.current_tab_index + '_div'].length - 1)]['list_no'];
				self.fetchData(2, list_no, self.current_tab_index);
			},
			instrucFunc: function(){
				var self = this;
				self.xarpost('Mallvcard/getCustomerCardInfo', {}).then(function(d) {
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
					}
					//如果都正常，正常加载页面
					self.instruc.title = data.msg;
				}, function(e) {
					self.$vux.toast.show({
						text: e,
						type: 'cancel',
						time: 3000
					});
				});
			},
			fetchData: function(request_type, list_no, tab_index) {
				//tab_index用作分类，卡的类型
				var self = this;
				self.xarpost('Mallvcard/get_vcard_list', {
					'type': request_type,
					'id': list_no,
					'card_type': tab_index
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
					}
					//如果都正常，正常加载页面
					if((request_type == 0 || request_type == 1)) {
//						self.$refs.demo1.donePulldown();
					} else {
//						self.$refs.demo1.donePullup();
					}
					var newList = (d.data == undefined) ? [] : d.data;
					self.setListVal(newList, request_type, tab_index);
				}, function(e) {
					self.$vux.toast.show({
						text: e,
						type: 'cancel',
						time: 3000
					});
				});
			},
			fetchGivenData: function(request_type, id, tab_index) {
				//tab_index用作分类，卡的类型
				var self = this;
				self.xarpost('Mallvcard/getGivenList', {
					'type': request_type,
					'id': id,
					'card_type': tab_index
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
					}
					//如果都正常，正常加载页面
					if((request_type == 0 || request_type == 1)) {
//						self.$refs.demo1.donePulldown();
					} else {
//						self.$refs.demo1.donePullup();
					}
					var newList = (d.data == undefined) ? [] : d.data;
					self.setGivenListVal(newList, request_type, tab_index);
				}, function(e) {
					self.$vux.toast.show({
						text: e,
						type: 'cancel',
						time: 3000
					});
				});
			},
			showDetail: function(id){
				console.log(id)
				this.$router.push({
					path: '/wash_card_detail/'+id,
					params: {
						id: 0
					}
				});
				return;
			},
			setListVal: function(newList, request_type, tab_index) {
				var self = this;
				if((request_type == 0 || request_type == 1)) {
					//下拉，数组转置后反向插入
					if(newList.length <= 0) {

					} else {
						for(var i = newList.length - 1; i >= 0; i--) {
							self.list[tab_index + '_div'].unshift(newList[i]);
						}
					}
				}
				if(request_type == 2) {
					//上拉
					if(newList.length <= 0) {

					} else {
						for(var i = 0; i < newList.length; i++) {
							self.list[tab_index + '_div'].push(newList[i]);
						}
					}
				}
			},
			setGivenListVal(newList, request_type, tab_index){
				var self = this;
				if((request_type == 0 || request_type == 1)) {
					//下拉，数组转置后反向插入
					if(newList.length <= 0) {

					} else {
						for(var i = newList.length - 1; i >= 0; i--) {
							self.givedList.unshift(newList[i]);
						}
					}
				}
				if(request_type == 2) {
					//上拉
					if(newList.length <= 0) {

					} else {
						for(var i = 0; i < newList.length; i++) {
							self.givedList.push(newList[i]);
						}
					}
				}
			},
			resetData: function() {
				var self = this;
				self.current_tab_index = 0;
				self.list = {
					'0_div': []
				};
			},
			showOrderDetail: function(){
				this.$router.push({
					path: "/order_detail/Snorder120171223151804A12345",
				});
				return;
			}
		}
	}
</script>