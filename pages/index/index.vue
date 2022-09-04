<template>
	<view class="container">

		<uni-grid class="apps" :showBorder="false" :column="cols">
			<uni-grid-item v-for="a in apps" @click="open(a)">
				<view class="app">
					<image :src="a.icon" mode="aspectFit"></image>				
					<text>{{a.name}}</text>	
				</view>			
			</uni-grid-item>
		</uni-grid>
		
	</view>
</template>

<script>
	//console.log(uni.getWindowInfo().windowWidth)
	const apps = [{
			icon: '/static/icons/link.svg',
			name: '通道',
			url: '/pages/tunnel/tunnel',
			internal: true
		},
		{
			icon: '/static/icons/server.svg',
			name: '服务器',
			url: '/pages/server/server',
			internal: true
		},
		{
			icon: '/static/icons/router.svg',
			name: '设备',
			url: '/pages/device/device',
			internal: true
		},
		{
			icon: '/static/icons/project.svg',
			name: '项目',
			url: '/pages/project/project',
			internal: true
		},
		{
			icon: '/static/icons/product.svg',
			name: '产品',
			url: '/pages/product/product',
			internal: true
		},
		{
			icon: '/static/icons/plugin.svg',
			name: '插件',
			url: '/pages/plugin/plugin',
			internal: true
		},
		{
			icon: '/static/icons/group.svg',
			name: '用户',
			url: '/pages/user/user',
			internal: true
		},
		{
			icon: '/static/icons/setting.svg',
			name: '设置',
			url: '/pages/setting/setting',
			internal: true
		},
	]
	export default {
		data() {
			return {
				apps: apps,
				cols: 4,
			}
		},
		mounted() {
			let w = uni.getWindowInfo().windowWidth
			this.cols = 1
			if (w > 200) this.cols = 2
			if (w > 300) this.cols = 4
			if (w > 500) this.cols = 6
			if (w > 700) this.cols = 8
			if (w > 500) this.cols = 6
			if (w > 700) this.cols = 8
			if (w > 1000) this.cols = 10
			if (w > 1300) this.cols = 12
		},
		methods: {
			open(app) {
				if (app.internal) {
					uni.navigateTo({
						url: app.url
					})
				} else {
					
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		
		.apps {
			margin: 30rpx 0;
		}
		
		.app {
			width: 90%;
			height: 80%;
			
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			//text-align: center;
			
			color: #1296db;
			
			image{
				width: 60%;
				display: block;
			}
		}
	}
</style>
