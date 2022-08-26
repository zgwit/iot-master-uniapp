<template>
	<view class="container">
		<uni-list>
			<uni-list-item title="主机管理" link to="/pages/server/server">
				<template v-slot:header>
					<uni-icons class="icon" customPrefix="iconfont" type="icon-server" color="#1296db"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="使用反馈" link to="./feedback">
				<template v-slot:header>
					<uni-icons class="icon" customPrefix="iconfont" type="icon-service" color="#1296db"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="关于产品" link to="./about">
				<template v-slot:header>
					<uni-icons class="icon" customPrefix="iconfont" type="icon-warning" color="#1296db"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="修改密码" link to="./password">
				<template v-slot:header>
					<uni-icons class="icon" customPrefix="iconfont" type="icon-password" color="#1296db"></uni-icons>
				</template>
			</uni-list-item>
			<uni-list-item title="退出">
				<template v-slot:header>
					<uni-icons class="icon" customPrefix="iconfont" type="icon-quit" color="#1296db"></uni-icons>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.icon{
			margin-right: 15rpx;
			display: flex;
			justify-content: center;
			align-items: center;
			//font-weight: bold;
		}
	}
</style>
