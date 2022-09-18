<template>
	<view class="p10">
		<uni-forms>
			<uni-forms-item label="名称" name="name">
				<uni-easyinput  v-model="data.name" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="类型" name="type">
				<uni-easyinput  v-model="data.type" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="版本" name="version">
				<uni-easyinput  v-model="data.version" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="MQTT账号" name="username">
				<uni-easyinput  v-model="data.username" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="MQTT密码" name="password">
				<uni-easyinput  v-model="data.password" placeholder="" />
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
					type:"",
					version:"",
					username:"",
					password:"",
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
					url: 'gateway/'+this.id,
					success: data=> {
						this.data = data
					}
				})
			},
			save(){
				uni.showLoading({})
				requestAPI({
					url: 'gateway/' + (this.id || 'create'),
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
