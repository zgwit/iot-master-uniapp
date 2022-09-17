<template>
	<view>
		
		<view class="">
			显示网关状态，在线，连接数等
			ClientID，Username，Password
		</view>
		
		<uni-list>
			<uni-list-item title="通道" to="/pages/tunnel/tunnel?gw="></uni-list-item>
			<uni-list-item title="设备"></uni-list-item>
			<uni-list-item title="产品"></uni-list-item>
			<uni-list-item title="配置"></uni-list-item>
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

<style lang="scss">

</style>
