<template>
	<view class="p20">
		<uni-segmented-control :current="current" :values="tabs" @clickItem=""></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				选项卡1的内容
			</view>
			<view v-show="current === 1">
				选项卡2的内容
			</view>
			<view v-show="current === 2">
				选项卡3的内容
			</view>
		</view>
		在线资源库：产品，插件，模板，
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 0,
				tabs: ["产品库","组件库","插件库"]
			};
		}
	}
</script>

<style lang="scss">

</style>
