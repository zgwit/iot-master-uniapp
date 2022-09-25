<template>
	<view>
		<uni-search-bar @confirm="" @input="" placeholder="ID 名称" />
		<uni-fab @fabClick="create"></uni-fab>

		<uni-list>
			<uni-list-item v-for="(data,index) in datum" :key="index" :title="data.username" link
				:to="'./detail?id='+data.id" :rightText="data.nickname"></uni-list-item>
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
					url: "user/list",
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
