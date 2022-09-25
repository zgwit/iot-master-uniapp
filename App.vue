<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	@import '@/static/iconfont.css';
	
	/* #ifndef APP-NVUE */
	// 设置整个项目的背景色
	page {
		//background-color: #f5f5f5;
	}

	/* #endif */
	
	
	.list-icon {
		margin-right: 15rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		//font-weight: bold;
	}
	
	.p10{
		padding: 10rpx;
	}
	
	.p20{
		padding: 20rpx;
	}
	
	.p30{
		padding: 30rpx;
	}
</style>
