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
				<uni-easyinput  v-model="data.tunnel_id" placeholder="选择" />
			</uni-forms-item>
			<uni-forms-item label="产品" name="product_id">
				<uni-easyinput  v-model="data.product_id" placeholder="选择" />
			</uni-forms-item>
			<uni-forms-item label="组态" name="interface_id">
				<uni-easyinput  v-model="data.interface_id" placeholder="选择" />
			</uni-forms-item>
		</uni-forms>
				
		<button type="primary" @click="save">保存</button>
	</view>
</template>

<script>
import { HOST, requestAPI } from '../../const';
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
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
