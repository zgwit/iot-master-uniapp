export var HOST = "http://localhost:8080/"

if (process.env.NODE_ENV === 'development') {
	console.log('开发环境');
} else {
	//console.log('生产环境');
	//TODO H5
	HOST = "/"
}

export function requestAPI(options) {
	uni.request({
		...options,
		url: HOST + 'api/' + options.url,
		success(res) {
			if (res.statusCode == 401) {
				uni.reLaunch({
					url:"/pages/login/login"
				})
				return
			}
			const ret = res.data;
			if (ret.error) {
				options.error && options.error(ret.error)
				uni.showToast({
					icon:"error",
					title: ret.error
				})
				return
			}
			options.success && options.success(ret.data)
		}
	})
}
