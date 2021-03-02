export default {
	// 修改推荐数据
	alterRem(state, obj) {
		const {
			rank,
			data
		} = obj;
		state.rem[rank].data = data;
	},
	// 修改banner数据
	alterBanner(state, obj) {
		const {
			id,
			data
		} = obj;
		state.rem[id].banner = data;
	},
	// 修改推荐里的初始化数据
	alterRemInitData(state, obj) {
		const {
			id,
			data
		} = obj;
		state.rem[id].initData = data;
	},
	// 修改列表数据
	alterRemListData(state, obj) {
		state.rem[obj.id].listData.push(obj);
	}
}
