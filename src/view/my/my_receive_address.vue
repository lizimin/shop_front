<style>
	li {
		width: 100%;
		height: 150px;
	}
	
	.row {
		width: 100%;
		float: left;
	}
	
	.top-hf {
		width: 48%;
		float: left;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.name {
		text-align: left;
		padding-left: 1%
	}
	
	.phone {
		text-align: right;
		padding-right: 1%;
	}
	
	.address-detail {
		width: 98%;
		padding: 0px 1%;
	}
	
	.opr-row {
		height: 40px;
		background: #979797;
	}
	
	.opr-row .top-hf label {
		line-height: 20px;
	}
	
	.set-default {
		width: 20px;
		height: 20px;
	}
	
	.btn-row div {
		float: left;
	}
	
	.add-btn {
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		color: #ffffff;
		position: fixed;
		left: 0px;
		top: 100%;
	}
	.btn{
		margin: 10px;
	}
</style>
<template>
	<div id="my_receive_address">
		<group>
			<cell :key="index" v-for="(address,index) in addressList" :title="address.cust_name + '  ' +address.cust_mobile" :value="address.is_default ? '默认' : ''" :inline-desc="address.address_str + address.cust_detail_add" @click.native="checkAction(address)">
			</cell>
		</group>
		<flexbox style="background-color:#fff;">
	      	<flexbox-item >
	      		<div class="btn">
	      			<x-button type="default" link="/my_receive_address_edit" class="add-btn">手动添加</x-button>
	      		</div>
	      	</flexbox-item>
	      	<flexbox-item>
	      		<div class="btn">
	      			<x-button type="primary" @click.native="selectAddress" class="add-btn">使用微信地址</x-button>
	      		</div>
	      	</flexbox-item>
	    </flexbox>
		<actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="clickMenu"></actionsheet>
	</div>

</template>

<script>
	import {  XButton, Confirm, Actionsheet, TransferDomDirective as TransferDom, Flexbox, FlexboxItem, Cell, Group, Badge } from 'vux'

	export default {
		name: 'my_receive_address',
		components: {
			XButton,
			Confirm,
			Flexbox,
			FlexboxItem,
			Cell,
			Group,
			Badge,
			Actionsheet
		},
		directives: {
			TransferDom
		},
		data() {
			return {
				addressList: [],
				menus5: [{
					  label: '设置为默认',
					  type: 'primary',
					  value: 'default'
					}, {
					  label: '编辑',
					  value: 'edit'
					}, {
					  label: '删除',
					  type: 'warn',
					  value: 'delete'
					}
				],
				show5: false,
				actionAddress: {}
			}
		},
		computed: {

		},
		created: function() {
			var self = this;
			self.fetchData();
		},
		methods: {
			selectAddress: function(e) {
				var self = this
				this.$wechat.ready(() => {
					this.$wechat.openAddress({
						success: function (res) {
							var userName = res.userName; // 收货人姓名
							var postalCode = res.postalCode; // 邮编
							var provinceName = res.provinceName; // 国标收货地址第一级地址（省）
							var cityName = res.cityName; // 国标收货地址第二级地址（市）
							var countryName = res.countryName; // 国标收货地址第三级地址（国家）
							var detailInfo = res.detailInfo; // 详细收货地址信息
							var nationalCode = res.nationalCode; // 收货地址国家码
							var telNumber = res.telNumber; // 收货人手机号码
						},
						fail: function (res) {
							self.showtoast('获取地址失败')
						},
						cancel: function (res) {
							self.showtoast('取消获取地址')
						},
					});
				})
			},
			clickMenu: function (e) {
				if(e == 'default') this.set_default(this.actionAddress.add_id,this.actionAddress)
				if(e == 'edit') this.editAddress(this.actionAddress.add_id)
				if(e == 'delete') this.delAddress(this.actionAddress.add_id)
			},
			checkAction: function(item){
				this.actionAddress = item
				this.show5 = true
				console.log(this.actionAddress)
			},
			set_default: function(id, item) {
				if(item.is_default) {
					return;
				}
				var self = this;
				self.xarpost('Mallcustomeraddress/setDefault', {
					id: id
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
					self.fetchData()
				}, function(e) {
					self.$vux.toast.show({
						text: e,
						type: 'cancel',
						time: 3000
					});
					self.$vux.loading.hide();
				});
			},
			editAddress: function(id) {
				this.$router.push({
					path: '/my_receive_address_edit/'+id,
				});
				return;
			},
			delAddress: function(id) {
				var self = this;
				console.log('aaaaaaa')
				self.$vux.confirm.show({
					content: '确定要删除这条地址吗？',
					onConfirm() {
						self.xarpost('Mallcustomeraddress/delAddress', {
							id: id
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
							self.fetchData()
						}, function(e) {
							self.$vux.toast.show({
								text: e,
								type: 'cancel',
								time: 3000
							});
							self.$vux.loading.hide();
						});
					}
				});
			},
			fetchData: function() {
				//tab_index用作分类，卡的类型
				var self = this;
				self.xarpost('Mallcustomeraddress/getAddressList', {}).then(function(d) {
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
					var newList = (d.data == undefined) ? [] : d.data;
					self.setListVal(newList);
				}, function(e) {
					self.$vux.toast.show({
						text: e,
						type: 'cancel',
						time: 3000
					});
				});
			},
			setListVal: function(newList) {
				var self = this;
				self.addressList = [];
				if(newList.length > 0) {
					for(var i = 0; i < newList.length; i++) {
						self.addressList.push(newList[i]);
					}
				}
			}
		}
	}
</script>