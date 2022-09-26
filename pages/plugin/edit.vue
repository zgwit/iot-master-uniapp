<template>
	<view class="p20">
		<uni-forms>
			<uni-forms-item label="MQTT ClientID" name="id">
				<uni-easyinput v-model="data.id" placeholder="默认为UUID,建议使用IMEI号" suffixIcon="refreshempty"
					@iconClick="randomClientID" />
			</uni-forms-item>
			<uni-forms-item label="MQTT 账号" name="username">
				<uni-easyinput v-model="data.username" placeholder="默认为空" suffixIcon="refreshempty"
					@iconClick="randomUsername" />
			</uni-forms-item>
			<uni-forms-item label="MQTT 密码" name="password">
				<uni-easyinput v-model="data.password" placeholder="默认为空" suffixIcon="refreshempty"
					@iconClick="randomPassword" />
			</uni-forms-item>
			<uni-forms-item label="名称" name="name">
				<uni-easyinput  v-model="data.name" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="类型" name="type">
				<uni-easyinput  v-model="data.type" placeholder="" />
			</uni-forms-item>
			<uni-forms-item label="版本" name="version">
				<uni-easyinput  v-model="data.version" placeholder="" />
			</uni-forms-item>
		</uni-forms>
				
		<button type="primary" @click="save">保存</button>
	</view>
</template>

<script>
	import cryptoRandomString from 'crypto-random-string';
	import {
		
		requestAPI
	} from '../../lib/request';
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
			else {
				//this.randomClientID()
				//this.randomUsername()
				//this.randomPassword()
			}
		},
		methods: {
			randomClientID() {
				this.data.id = cryptoRandomString({
					length: 24,
					type: 'hex',//'alphanumeric'
				})
			},
			randomUsername() {
				this.data.username = cryptoRandomString({
					length: 12,
					type: 'hex',//'distinguishable'
				})
			},
			randomPassword() {
				this.data.password = cryptoRandomString({
					length: 8,
					type: 'alphanumeric'
				})
			},
			load() {
				requestAPI({
					url: 'plugin/'+this.id,
					success: data=> {
						this.data = data
					}
				})
			},
			save(){
				uni.showLoading({})
				requestAPI({
					url: 'plugin/' + (this.id || 'create'),
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
