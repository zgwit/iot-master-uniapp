<template>
	<view>
		
		<view class="">
			显示网关状态，在线，连接数等
			ClientID，Username，Password
		</view>
		
		<uni-list>
			<uni-list-item title="通道" link to="/pages/tunnel/tunnel?gw="></uni-list-item>
			<uni-list-item title="服务器" link to="/pages/server/server?gw="></uni-list-item>
			<uni-list-item title="设备列表" link to="/pages/device/device?gw="></uni-list-item>
			<uni-list-item title="网关配置" link></uni-list-item>
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
