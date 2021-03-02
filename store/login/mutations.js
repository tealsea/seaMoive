export default {
	//修改求片留言
	alterGbook(state, data) {
		state.gbook = data;
		setTimeout(() => {
			uni.hideLoading();
		}, 300)
	}
}
