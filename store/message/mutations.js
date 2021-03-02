export default {
	// 修改资讯数据
	alterMessage(state, data) {
		if (data.length > 0) {
			state.data.push(...data)
			state.page++;
			setTimeout(() => {
				uni.hideLoading()
			}, 300)
		}
	},
	// 修改当前显示的资讯
	alterCurMsg(state, data) {
		state.currentData = data;
	}
}
