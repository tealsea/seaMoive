export default {
	// 修改直播
	alterLive(state, data) {
		state.lives = data;
		setTimeout(() => {
			uni.hideLoading();
		}, 300)
	}
}
