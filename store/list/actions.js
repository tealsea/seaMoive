import {
	searchData
} from '@/request/list.js';
export default {
	// 获取搜索数据
	async getSearchData(context, res) {
		try {
			const {data} = await searchData(res)
			context.commit('alterSearchData', data)
		} catch (e) {
			console.log(e)
			uni.hideLoading()
		}
	}
}
