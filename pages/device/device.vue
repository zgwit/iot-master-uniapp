<template>
	<view>
		<uni-search-bar @confirm="" @input="" placeholder="名称,ID" />

		<uni-list>
			<uni-list-item v-for="(data,index) in datum" :key="index" :title="data.name" :note="data.sn" link
				:to="'./detail?id='+data.id" :rightText="data.addr">123</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				datum: [{
					id: 1,
					name: "2",
					sn: '3',
					addr: ':8080'
				}]
			};
		}
	}
</script>

<style lang="scss">

</style>
