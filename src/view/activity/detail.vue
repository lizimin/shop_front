<template>
	<div id="detail" class=" page-activity-detail cpage-scroll-pb50">
		<div class="search-bar">
      <search-bar></search-bar>
    </div>
		<div class="content">
			<div class="content-title">
				{{activity.art_title}}
			</div>
			<div class="content-info">
				<div class="time">{{activity.create_time}}</div>
				<div class="author">小矮人汽车</div>
			</div>
			<div class="content-txt" v-html="activity.cont_text">
			</div>
			<div class="content-txt">
				<p>
					<img src="http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/1.jpg" alt="" />
				</p>
				<p>
					<img src="http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/2.jpg" alt="" />
				</p>
				<p>
					<img src="http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/3.jpg" alt="" />
				</p>
				<p>
					<img src="http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/4.jpg" alt="" />
				</p>
				<p>
					<img src="http://ma.gotomore.cn/public/uploads/image/20180113/chanping/allshop/5.jpg" alt="" />
				</p>
			</div>
			<recommend-list style="width:100%;"></recommend-list>
			<common-bottom></common-bottom>
		</div>
	</div>
</template>

<script>
import { Search } from "vux";
import searchBar from "components/common/searchBar";
import recommendList from "components/goods/recommend";
	export default {
		components: {
		searchBar,
    Search,
			recommendList,
		},
		name: "activity-detail",
		data() {
			let self = this;
			return {
				icon: "success",
				art_id: 0,
				activity: {
					art_title: "",
					create_time: "",
					cont_text: ""
				},
				msg: "123"
			};
		},
		computed: {},
		watch: {
			$route(to, from) {
				var art_id = to.params.art_id;
				this.art_id = parseInt(art_id);
				var self = this;
				self.fetchData();
			}
		},
		created() {
			console.log(123);
			this.art_id = this.$route.params.art_id;
			this.fetchData();
		},
		methods: {
			fetchData: function() {
				var self = this;
				this.xarpost("Activity/getActivity", {
					art_id: self.art_id
				}).then(res => {
					// console.log(res);
					let {
						data,
						error,
						message
					} = res;
					if(error == 0 && data) {
						self.activity = data;
					} else {}
				});
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.page-activity-detail {
		background: #fff;
		padding: 0.4rem 0.3rem;
		.content-title {
			font-size: 0.5rem;
			margin-top: 0.2rem;
			color: #000;
		}
		.content-info {
			padding: 0.1rem 0;
			display: flex;
			// justify-content: space-between;
			// padding: 0 .2rem;
			line-height: .5rem;
			font-size: .3rem;
			.time {
				color: #888888;
			}
			.author {
				color: #576b95;
				margin-left: 0.1rem;
			}
		}
		.content-txt {
			color: #111111;
			font-size: .34rem;
			img {
				width: 6.9rem;
				margin: 0 auto;
				display: block;
			}
		}
	}
</style>