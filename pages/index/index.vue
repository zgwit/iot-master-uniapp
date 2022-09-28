<template>
	<view class="container">
		<swiper :indicator-dots="true" :autoplay="true" :interval="5000" :circular="true">
			<swiper-item>
				<image class="bannerImage" src="../../static/banner.jpg" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image class="bannerImage" src="../../static/a.jpeg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
		<uni-section title="我的项目" type="line">
			<uni-card title="1号养殖场" extra="正常">
				TODO：组态可视化
			</uni-card>
			<uni-card title="2号养殖场" extra="正常">
				TODO：组态可视化
			</uni-card>
		</uni-section>
		<uni-section title="常用功能" type="line">
			<uni-grid class="apps" :showBorder="false" :column="cols">
				<uni-grid-item v-for="a in apps" @click="open(a)">
					<view class="app">
						<image :src="a.icon" mode="aspectFit"></image>
						<text>{{ a.name }}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</uni-section>
	</view>
</template>

<script>
//console.log(uni.getWindowInfo().windowWidth)
const apps = [
	{
		icon: '/static/icons/gateway.png',
		name: '网关',
		url: '/pages/gateway/gateway',
		internal: true
	},
	{
		icon: '/static/icons/device.png',
		name: '设备',
		url: '/pages/device/device',
		internal: true
	},
	{
		icon: '/static/icons/project.png',
		name: '项目',
		url: '/pages/project/project',
		internal: true
	},
	{
		icon: '/static/icons/design.png',
		name: '组态',
		url: '/pages/interface/interface',
		internal: true
	},
	{
		icon: '/static/icons/plugin.png',
		name: '插件',
		url: '/pages/plugin/plugin',
		internal: true
	},
	{
		icon: '/static/icons/product.png',
		name: '产品',
		url: '/pages/product/product',
		internal: true
	},
	{
		icon: '/static/icons/group.png',
		name: '用户',
		url: '/pages/user/user',
		internal: true
	},
	{
		icon: '/static/icons/manual.png',
		name: '帮助',
		url: '/pages/manual/manual',
		internal: true
	},
	{
		icon: '/static/icons/setting.png',
		name: '设置',
		url: '/pages/setting/setting',
		internal: true
	}
];
export default {
	data() {
		return {
			apps: apps,
			cols: 4
		};
	},
	mounted() {
		this.adjust();
	},
	onResize() {
		this.adjust();
	},
	methods: {
		adjust() {
			let w = uni.getWindowInfo().windowWidth;
			this.cols = 1;
			if (w > 200) this.cols = 2;
			if (w > 300) this.cols = 4;
			if (w > 500) this.cols = 6;
			if (w > 700) this.cols = 8;
			if (w > 500) this.cols = 6;
			if (w > 700) this.cols = 8;
			if (w > 1000) this.cols = 10;
			if (w > 1300) this.cols = 12;
		},
		open(app) {
			if (app.internal) {
				uni.navigateTo({
					url: app.url
				});
			} else {
				window.open(app.url, '_blank');
				//TODO app 打开Web页面，传送Token
			}
		}
	}
};
</script>

<style lang="scss">
.container {
}

.bannerImage{
	width: 100%;
	height: 100%;
}

.apps {
	margin: 30rpx 0;
}

.app {
	width: 90%;
	height: 90%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	//text-align: center;

	color: #1296db;

	image {
		width: 100%;
		height: 100%;
		display: block;
	}

	&:hover {
		transform: scale(1.1);
		transition: all 0.3s;
	}
}
</style>
