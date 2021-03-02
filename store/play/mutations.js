export default {
	// 修改视频信息
	alterVideo(state, data) {
		state.video = data;
		setTimeout(() => {
			uni.hideLoading()
		}, 300)
	},
	// 修改相关推荐
	alterRelated(state, data) {
		state.related = data;
	}
}
