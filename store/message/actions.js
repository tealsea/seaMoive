import {
	msg
} from '@/request/message.js';
export default {
	// 获取资讯
	async getMsg(context, page) {
		try {
			const {
				data
			} = await msg(page);
			context.commit('alterMessage', data)
		} catch {
			uni.hideLoading()
			uni.showToast({
				icon: 'none',
				title: '加载失败'
			})
		}
	}
}
