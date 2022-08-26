<template>
	<view>
		<uni-search-bar @confirm="" @input="" placeholder="名称,SN" />
		<uni-list>
			<uni-list-item v-for="(index, data) in datum" :key="index" :title="data.name" :note="data.sn" :rightText="data.addr"></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datum: []
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
