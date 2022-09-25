export const HOST = "http://localhost:8080/"

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
