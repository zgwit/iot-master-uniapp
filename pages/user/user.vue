<template>
	<view>
		<uni-search-bar @confirm="onSearch" @input="" placeholder="用户名 昵称 邮箱" v-model="keyword"/>
		<uni-fab @fabClick="create"></uni-fab>

		<uni-list>
			<uni-list-item v-for="(data,index) in datum" :key="index" :title="data.name" :note="data.nickname" link
				:to="'./detail?id='+data.id">
				<template #header>
					<image class="icon" src="/static/icons/user.svg" mode="aspectFit"></image>
				</template>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import {
		HOST,
		requestAPI
	} from '../../const';
	export default {
		data() {
			return {
				keyword: "",
				limit: 20,
				datum: []
			};
		},
		onPullDownRefresh() {
			this.datum = [];
			this.skip = 0;
		},
		onReachBottom() {
			this.load()
		},
		onLoad() {
			this.load()
		},
		methods:{
			load() {
				uni.showLoading({})
				requestAPI({
					url: "user/search",
					method: "POST",
					data: {
						skip: this.datum.length,
						limit: this.limit,
						keyword: this.keyword ? {
							nickname: this.keyword,
							name: this.keyword,
							email: this.keyword,
						} : {},
					},
					success: data => {
						this.datum = this.datum.concat(data)
					},
					complete() {
						uni.hideLoading()
						uni.stopPullDownRefresh()
					}
				})
			},
			onSearch() {
				this.datum = []
				this.load()
			},
			create() {
				uni.navigateTo({
					url: "./edit"
				})
			}
		}
	}
</script>

<style lang="scss">
	.icon {
		width: 60rpx;
		height: 60rpx;
		padding-right: 20rpx;
	}
</style>
