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
		float: left;
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
		height: 100px;
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
		top: 25px;
		left: 20px;
	}
	
	.card-item .card-icon img {
		width: 80%;
		margin: 10% 15%;
	}
	
	.card-name {
		position: absolute;
		left: 90px;
		top: 30px;
		color: #FFFFFF;
		font-size: 20px;
	}
	
	.card-status {
		position: absolute;
		top: 33px;
		right: 15px;
		background: rgba(0, 0, 0, 0.5);
		border-radius: 20px;
		font-size: 15px;
		color: #ffffff;
		padding: 2px 10px;
	}
	
	.recommend-content {
		font-family: MicrosoftYaHei;
		letter-spacing: 0;
	}
	
	.divider {
		font-family: MicrosoftYaHei-Bold;
		font-weight: bold;
		font-size: 17px;
		color: #000000 !important;
	}
	.ul-recommend{
		width: 105%;
		height: auto;
		margin-right: -5%;
		margin-top: 10px;
	}
	.ul-recommend li{
		float: left;
		width: 45%;
		margin-right: 5%;
	}
	.ul-recommend li .re-card-img{
		width: 100%;
		height: 100px;
	}
	.recommend-card-item .re-card-img{
		width: 100%;
		border-radius: 6px;
	}
	.recommend-card-item .re-card-name{
		width: 96%;
		color: #272727;
		font-size: 17px;
		line-height: 36px;
		padding: 0px 2%;
	}
	.recommend-card-item .re-card-price{
		width: 96%;
		color: #FE4D3D;
		font-size: 14px;
		font-weight: bold;
		padding: 0px 2%;
	}
</style>
<template>
	<div id="main_content">
		<scroller lock-x scrollbar-y use-pulldown use-pullup height="100%" @on-pulldown-loading="pulldown" @on-pullup-loading="pullup" ref="demo1">
			<div class="scroller_content">
				<div class="card-list-content">
					<div class="card-list-title">
						<div class="title-cell card-all-info">可用的卡共（2张）</div>
						<div class="title-cell card-all-link">
							<a>查看失效卡>></a>
						</div>
					</div>
					<ul class="ul-card">
						<li v-on:click="showDetail">
							<div class="card-item yellow">
								<p class="card-icon"><img src="../../../static/image/dwarfs.svg"></p>
								<p class="card-name">洗车卡伙伴卡</p>
								<p class="card-status">未使用</p>
							</div>
						</li>
						<li v-on:click="showDetail">
							<div class="card-item green">
								<p class="card-icon"><img src="../../../static/image/dwarfs.svg"></p>
								<p class="card-name">洗车卡闲时卡</p>
								<p class="card-status">剩余7/10次</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="recommend-content">
					<divider class="divider">洗车卡推荐</divider>
					<ul class="ul-recommend">
						<li>
							<div class="recommend-card-item">
								<div class="re-card-img bule">
									
								</div>
								<div class="re-card-name">
									闲时卡
								</div>
								<div class="re-card-price">
									￥10.00
								</div>
							</div>
						</li>
						<li>
							<div class="recommend-card-item">
								<div class="re-card-img red">
									
								</div>
								<div class="re-card-name">
									早鸟卡*10次
								</div>
								<div class="re-card-price">
									￥105.00
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</scroller>
	</div>
</template>

<script>
	import { Tab, TabItem, Toast, Scroller, Divider } from 'vux'
	export default {
		name: 'my_wash_card_list',
		components: {
			Tab,
			TabItem,
			Toast,
			Scroller,
			Divider
		},
		data() {
			return {
				current_tab_index: 0,
				list: {
					'0_div': []
				}
			}
		},
		methods:{
			showDetail: function(){
				this.$router.push({
					path: '/wash_card_detail',
					params: {
						id: 0
					}
				});
				return;
			}
		}
	}
</script>