<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="用户名" name="username">
				<uni-easyinput  v-model="data.username" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="昵称" name="nickname">
				<uni-easyinput  v-model="data.nickname" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="邮箱" name="email">
				<uni-easyinput  v-model="data.email" placeholder="" />
			</uni-forms-item>
		</uni-forms>
				
		<button type="primary" @click="save">保存</button>
	</view>
</template>

<script>
	import {
		
		requestAPI
	} from '../../lib/request';
	export default {
		data() {
			return {
				id: 0,
				data:{
					username:"",
					nickname:"",
					email:"",
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
					url: 'user/'+this.id,
					success: data=> {
						this.data = data
					}
				})
			},
			save(){
				uni.showLoading({})
				requestAPI({
					url: 'user/' + (this.id || 'create'),
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
