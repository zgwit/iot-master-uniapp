<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="名称" name="name">
				<uni-easyinput  v-model="data.name" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="厂商" name="type">
				<uni-easyinput  v-model="data.manufacturer" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="版本" name="version">
				<uni-easyinput  v-model="data.version" placeholder="" />
			</uni-forms-item>
			
			TODO：编辑点位
		</uni-forms>
				
		<button type="primary" @click="save">保存</button>
	</view>
</template>

<script>
	import cryptoRandomString from 'crypto-random-string';
	import {
		HOST,
		requestAPI
	} from '../../const';
	export default {
		data() {
			return {
				id: '',
				data: {
					id: "",
					name: "",
					type: "",
					version: "",
					username: "",
					password: "",
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
					url: 'product/'+this.id,
					success: data=> {
						this.data = data
					}
				})
			},
			save(){
				console.log(this.id)
				uni.showLoading({})
				requestAPI({
					url: 'product/' + (this.id || 'create'),
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
