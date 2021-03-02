import {
	video,
	related
} from '@/request/play.js';
export default {
	// 获取视频信息
	async getVideo(context, id) {
		try {
			const {
				data
			} = await video(id);
			context.commit('alterVideo', data[0])
		} catch (e) {
			setTimeout(() => {
				uni.navigateBack(-1)
			}, 1000)
		}
	},
	// 获取相关推荐
	async getRelated(context, res) {
		try {
			const {
				data
			} = await related(res)
			context.commit('alterRelated', data)
		} catch (e) {
			context.commit('alterRelated', [])
		}
	}
}
