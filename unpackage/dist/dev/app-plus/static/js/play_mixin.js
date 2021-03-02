export default {
	methods: {
		// 点击获取视频信息
		handleVideo(item) {
			const {
				type_id,
				vod_year,
				vod_id,
				vod_lang
			} = item;
			this.$store.dispatch('getRelated', {
				id: type_id,
				year: vod_year,
				lang: vod_lang
			});
			let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
			let curRoute = routes[routes.length - 1].route
			if (curRoute === 'pages/play/play') {
				uni.redirectTo({
					url: '/pages/play/play?id=' + vod_id
				})
				return
			}
			uni.navigateTo({
				url: '/pages/play/play?id=' + vod_id
			})
		}
	}
}
