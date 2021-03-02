export default {
	// 修改搜索数据
	alterSearchData(state, data) {
		uni.hideLoading()
		if (data.length > 0) {
			state.searchData.push(...data)
			return
		}
		state.searchData = data;
	}
}
