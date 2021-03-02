export default {
	data() {
		return {
			login: {}
		}
	},
	onShow() {
		this.login = uni.getStorageSync('logo_cookie') || {};
		if (!this.login.name) {
			uni.showModal({
				title: '未登录',
				content: '是否进行登录',
				success: function(res) {
					if (res.confirm) {
						uni.navigateTo({
							url: '/pages/login/login'
						})
					} else if (res.cancel) {
						uni.navigateBack(-1)
					}
				}
			})
		}
	}
}
