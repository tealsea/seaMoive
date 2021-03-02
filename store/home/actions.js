import {
	banner,
	type,
	rem,
	cate
} from '@/request/index.js';
export default {
	// 获取推荐信息
	async getRem(context, id) {
		const {
			data
		} = await rem(id === 0 ? null : id);
		const obj = {
			rank: id,
			data
		}
		context.commit('alterRem', obj)
	},
	// 获取banne图
	async getBanner(context, id) {
		const {
			data
		} = await banner(id === 0 ? null : id);
		const obj = {
			id,
			data
		}
		context.commit('alterBanner', obj)
	},
	// 获取具体分类数据
	async getCate(context, config) {
		if (config.id === 0) return
		const {
			data
		} = await cate(config);
		const obj = {
			id: config.id,
			data
		}
		context.commit('alterRemInitData', obj);
	},
	// 获取列表数据
	async getListData(context, config) {
		if (config.id === 0) return
		const {
			data
		} = await cate(config);
		const obj = {
			id: config.id,
			area: config.area,
			data
		}
		context.commit('alterRemListData', obj)
		setTimeout(() => {
			uni.hideLoading()
		}, 500)
	}
}
