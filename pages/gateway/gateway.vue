<template>
	<view>
		
		<view class="">
			显示网关状态，在线，连接数等
			ClientID，Username，Password
		</view>
		
		<uni-list>
			<uni-list-item title="通道列表" link to="/pages/tunnel/tunnel?gw="></uni-list-item>
			<uni-list-item title="设备列表" link></uni-list-item>
			<uni-list-item title="产品列表" link></uni-list-item>
			<uni-list-item title="配置文件" link></uni-list-item>
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
