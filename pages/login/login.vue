<template>
	<view class="login">

		<view class="logo">
			<image src="/static/iot.svg" mode="aspectFit"></image>
		</view>
		<!-- <uni-title type="h1" title="物联大师" align="center"></uni-title> -->

		<uni-forms>
			<uni-forms-item label="用户名" name="username">
				<uni-easyinput type="text" v-model="formData.username" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="密码" name="password">
				<uni-easyinput type="password" v-model="formData.password" placeholder="请输入密码" />
			</uni-forms-item>

			<button type="primary" @click="login">登录</button>
		</uni-forms>
	</view>
</template>

<script>
	import {
		
		requestAPI
	} from '../../lib/request';
	import {Md5} from 'ts-md5'
	export default {
		data() {
			return {
				formData: {
					username: "",
					password: ""
				}
			};
		},
		methods: {
			login() {
				requestAPI({
					url: "login",
					method: "POST",
					data: {
						username: this.formData.username,
						password: Md5.hashStr(this.formData.password)
					},
					success: data => {
						uni.switchTab({
							url: "/pages/index/index"
						})
						// uni.reLaunch({
						// 	url: "/pages/index/index"
						// })
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login {
		padding: 60rpx;
	}

	.logo {
		display: flex;
		justify-content: center;
		align-items: center;
		//padding: 10rpx;A

		image {
			width: 60%;
		}
	}
</style>
