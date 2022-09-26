<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="名称" name="name">
				<uni-easyinput  v-model="data.name" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="类型" name="type">
				<uni-easyinput  v-model="data.type" placeholder="tcp,udp" />
			</uni-forms-item>
			<uni-forms-item label="地址" name="addr">
				<uni-easyinput  v-model="data.addr" placeholder="" />
			</uni-forms-item>
			
			<uni-section title="协议" type="line">
				<uni-forms-item label="名称" name="name">
					<uni-easyinput  v-model="data.protocol.name" placeholder="TODO:改为下拉选择" />
				</uni-forms-item>
			</uni-section>
			
			<uni-section title="默认设备" type="line">
			</uni-section>
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
					type: "",
					addr: "",
					protocol: {
						name: ""
					},
					devices: []
				}
			};
		},
		onLoad(options) {
			this.id = options.id
			this.data.gateway_id = options.gateway
			if (this.id) this.load()
		},
		methods: {
			load(){
				requestAPI({
					url: 'server/'+this.id,
					success: data=> {
						this.data = data
					}
				})
			},
			save(){
				console.log(this.id)
				uni.showLoading({})
				requestAPI({
					url: 'server/' + (this.id || 'create'),
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
