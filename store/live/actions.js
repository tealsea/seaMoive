import {
	live
} from '@/request/live.js';
export default {
	// 获取直播
	async getLive(context) {
		const {
			data
		} = await live();
		context.commit('alterLive', data)
	}
}
