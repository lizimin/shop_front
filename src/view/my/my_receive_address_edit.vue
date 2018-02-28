<template>
	<div id="my_receive_address_edit">
		<div>
			<group title="">
				<x-input title="收货人" name="username" @on-change="chName" :value="cust_name" :required="true"></x-input>
				<x-input title="联系电话" name="mobile" keyboard="number" :value="cust_mobile" is-type="china-mobile" @on-change="chMobile" :required="true"></x-input>
				<x-address title="所在地区" v-model="curAddress" :list="addressData"></x-address>
				<x-textarea title="" :max="200" placeholder="详细地址" :value="cust_detail_add" @on-change="chDetailAddr"></x-textarea>
			</group>
			<group>
				<x-switch title="设为默认地址" :value="is_default_bol" @on-change="chDefault"></x-switch>
			</group>
		</div>
		<div class="btn">
	      	<x-button type="primary" link="/my_receive_address_edit" class="add-btn" @click.native="saveAddress">保存</x-button>
		</div>
	</div>
</template>

<script>
	import { XHeader, XInput, Group, XButton, XTextarea, XSwitch, XAddress, ChinaAddressV4Data, Value2nameFilter as value2name } from 'vux'

	export default {
		name: 'my_receive_address_edit',
		components: {
			XHeader,
			XInput,
			Group,
			XButton,
			XTextarea,
			XAddress,
			XSwitch
		},
		props: {
			has_add_id: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				title: '添加新地址',
				add_id: 0,
				cust_name: '',
				cust_mobile: '',
				cust_post: '',
				cust_detail_add: '',
				is_default: 0,
				is_default_bol: false,
				cust_country: 1,
				cust_province: '',
				cust_city: '',
				cust_district: '',
				curAddress: [],
				addressData: ChinaAddressV4Data,
				showAddress: false
			}
		},
		computed: {

		},
		created: function() {
			var self = this;
			this.add_id = this.$route.params.add_id
			if(this.add_id) this.fetchData()
		},
		methods: {
			chName: function(val) {
				this.cust_name = val;
			},
			chMobile: function(val) {
				this.cust_mobile = val;
			},
			chDetailAddr: function(val) {

				this.cust_detail_add = val;
			},
			chDefault: function(val) {
				this.is_default = val;
			},
			fetchData: function() {
				//tab_index用作分类，卡的类型
				var self = this;
				self.xarpost('Mallcustomeraddress/getAddress', {id:self.add_id}).then(function(d) {
					self.$vux.loading.hide();
					let {data, error, message } = d;
					if(d.error != 0) {
						self.$vux.toast.show({
							text: d.message,
							type: 'cancel',
							time: 3000
						});
					}
					console.log(data)
					if(data) self.setInfo(data);
				}, function(e) {
					self.$vux.toast.show({
						text: e,
						type: 'cancel',
						time: 3000
					});
					self.$vux.loading.hide();
				});
			},
			saveAddress: function() {
				var self = this;
				console.log(self.curAddress)
				var post_data = {
					add_id: self.add_id,
					cust_name: self.cust_name,
					cust_mobile: self.cust_mobile,
					cust_post: self.cust_post,
					cust_detail_add: self.cust_detail_add,
					is_default: self.is_default,
					cust_country: self.cust_country,
					cust_province: self.curAddress[0],
					cust_city: self.curAddress[1],
					cust_district: self.curAddress[2],
				};
				console.log(post_data);
				if(post_data.cust_name == '') {
					self.$vux.toast.show({
						text: '收货人不能为空',
						type: 'cancel',
						time: 1500
					});
					return;
				}
				if(post_data.cust_mobile == '') {
					self.$vux.toast.show({
						text: '联系电话不能为空',
						type: 'cancel',
						time: 1500
					});
					return;
				}
				if(post_data.cust_post == '') {

				}
				if(post_data.cust_detail_add == '') {
					self.$vux.toast.show({
						text: '详细地址不能为空',
						type: 'cancel',
						time: 1500
					});
					return;
				}
				if(post_data.is_default == '') {
					post_data.is_default = false;
				}
				if(self.curAddress.length < 3) {
					self.$vux.toast.show({
						text: '请选择正确的所在地区',
						type: 'cancel',
						time: 1500
					});
					return;
				}
				if(post_data.cust_province == '') {
					self.$vux.toast.show({
						text: '请选择省',
						type: 'cancel',
						time: 1500
					});
					return;
				}
				if(post_data.cust_city == '') {
					self.$vux.toast.show({
						text: '请选择市或州',
						type: 'cancel',
						time: 1500
					});
					return;
				}
				if(post_data.cust_district == '') {
					self.$vux.toast.show({
						text: '请选择地区',
						type: 'cancel',
						time: 1500
					});
					return;
				}
				self.$vux.loading.show({
					text: '正在加载...'
				})
				self.xarpost('Mallcustomeraddress/editAddress', post_data).then(function(d) {
					self.$vux.loading.hide();
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

				}, function(e) {
					self.$vux.toast.show({
						text: e,
						type: 'cancel',
						time: 3000
					});
					self.$vux.loading.hide();
				});
			},
			setInfo: function(info) {
				var self = this;
				console.log(info, 'aaaaaa')
				self.cust_name = info.cust_name;
				self.cust_mobile = info.cust_mobile;
				self.cust_post = info.cust_post;
				self.cust_detail_add = info.cust_detail_add;
				self.is_default = (info.is_default == 1) ? true : false;
				self.curAddress = [info.province, info.city, info.post];
				console.log(self.curAddress)
			}
		}
	}
</script>

<style>
.btn{
	margin: 10px;
}
</style>