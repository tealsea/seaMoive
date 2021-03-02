import {
	think
} from '@/request/search.js';
export default {
	// 获取联想词
	async getThink(context, wd) {
		const {
			data
		} = await think(wd);
		context.commit('alterThink', data)
	}
}
