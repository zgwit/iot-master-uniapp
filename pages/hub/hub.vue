<template>
	<view class="p20">
		<uni-search-bar @confirm="" @input="" placeholder="关键字" />
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
