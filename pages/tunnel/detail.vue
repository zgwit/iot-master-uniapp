<template>
	<view>
		<view class="">
			显示通道状态，在线，设备数等
			ClientID，Username，Password
		</view>
		
		<uni-list>
			<uni-list-item title="ID" note=""></uni-list-item>
			<uni-list-item title="名称" note=""></uni-list-item>
			<uni-list-item title="SN" note=""></uni-list-item>
			<uni-list-item title="地址" note=""></uni-list-item>
			<uni-list-item title="远程" note=""></uni-list-item>
		</uni-list>
		
		<uni-section title="串口参数" type="line">
			<uni-list>
				<uni-list-item title="端口" note=""></uni-list-item>
				<uni-list-item title="波特率" note=""></uni-list-item>
				<uni-list-item title="数据长度" note=""></uni-list-item>
				<uni-list-item title="停止位" note=""></uni-list-item>
				<uni-list-item title="校验" note=""></uni-list-item>
			</uni-list>
		</uni-section>
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
