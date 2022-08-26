<template>
	<view class="container">

		<uni-grid :showBorder="false">
			<uni-grid-item class="app" v-for="a in apps" @click="open(a)">				
				<image :src="a.icon" mode="aspectFit"></image>				
				<text>{{a.name}}</text>				
			</uni-grid-item>
		</uni-grid>
	</view>
</template>

<script>
	const apps = [{
			icon: '/static/icons/link.svg',
			name: '连接',
			url: '/pages/tunnel/tunnel',
			internal: true
		},
		{
			icon: '/static/icons/server.svg',
			name: '连接',
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
			icon: '/static/icons/product.svg',
			name: '产品',
			url: '/pages/product/product',
			internal: true
		},
		{
			icon: '/static/icons/project.svg',
			name: '项目',
			url: '/pages/project/project',
			internal: true
		},
		{
			icon: '/static/icons/group.svg',
			name: '用户',
			url: '/pages/user/user',
			internal: true
		},
		{
			icon: '/static/icons/plugin.svg',
			name: '插件',
			url: '/pages/plugin/plugin',
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
				apps: apps
			}
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
		.app {
			display: flex;
			flex-direction: column;
			//justify-content: center;
			//align-items: center;
			text-align: center;
			
			image{
				width: 60%;
			}
		}
	}
</style>
