<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="名称" name="name">
				<uni-easyinput  v-model="data.name" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="站号" name="station">
				<uni-easyinput type="number" v-model="data.station" placeholder="从机号" />
			</uni-forms-item>
			<uni-forms-item label="通道" name="tunnel_id">
				<uni-easyinput  v-model="data.tunnel_id" placeholder="点击右边小图标选择" suffixIcon="plus" @iconClick="selectTunnel"/>
			</uni-forms-item>
			<uni-forms-item label="产品" name="product_id">
				<uni-easyinput  v-model="data.product_id" placeholder="点击右边小图标选择" suffixIcon="plus" @iconClick="selectProduct"/>
			</uni-forms-item>
			<uni-forms-item label="组态" name="interface_id">
				<uni-easyinput  v-model="data.interface_id" placeholder="点击右边小图标选择" suffixIcon="plus" @iconClick="selectInterface"/>
			</uni-forms-item>
		</uni-forms>
				
		<button type="primary" @click="save">保存</button>
	</view>
</template>

<script>
import {  requestAPI } from '../../lib/request';
	export default {
		data() {
			return {
				id: '',
				data:{
					name:"",
					station:1,
					tunnel_id:"",
					product_id:"",
					interface_id:"",
				}
			};
		},
		onLoad(options) {
			this.id = options.id
			this.data.tunnel_id = options.tunnel
			if (this.id) this.load()
		},
		methods: {
			load(){
				requestAPI({
					url: 'device/'+this.id,
					success: data=> {
						this.data = data
					}
				})
			},
			save(){
				uni.showLoading({})
				requestAPI({
					url: 'device/' + (this.id || 'create'),
					method: 'POST',
					data: this.data,
					success() {
						uni.navigateBack()
					},
					complete() {
						uni.hideLoading()
					}
				})
			},
			selectTunnel() {
				uni.navigateTo({
					url: "/pages/tunnel/tunnel?select=true",
					events:{
						select: id=>{
							this.data.tunnel_id = id
						}
					}
				})
			},
			selectProduct() {
				uni.navigateTo({
					url: "/pages/product/product?select=true",
					events:{
						select: id=>{
							this.data.product_id = id
						}
					}
				})
			},
			selectInterface() {
				uni.navigateTo({
					url: "/pages/interface/interface?select=true",
					events:{
						select: id=>{
							this.data.interface_id = id
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
