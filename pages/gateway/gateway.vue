<template>
	<view>
		<uni-search-bar @confirm="" @input="" placeholder="名称,ID" />
		<uni-fab @fabClick="create"></uni-fab>

		<uni-list>
			<uni-list-item v-for="(data,index) in datum" :key="index" :title="data.name" :note="data.id" link
				:to="'./detail?id='+data.id" :rightText="data.addr">123</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
import { HOST, requestAPI } from '../../const';
	export default {
		data() {
			return {
				skip:0,
				datum: []
			};
		},
		onPullDownRefresh() {
			this.skip = 0;
		},
		onReachBottom() {
			this.load()
		},
		onReady() {
			this.load()
		},
		methods:{
			load() {
				uni.showLoading({})
				requestAPI({
					url: "gateway/list",
					data: {
						skip: this.skip,
					},
					success: data=> {
						this.datum = data;
					},
					complete() {
						uni.hideLoading()
						uni.stopPullDownRefresh()
					}
				})
			},
			create() {
				uni.navigateTo({
					url:"./edit"
				})
			}
		}
	}
</script>

<style lang="scss">

</style>
