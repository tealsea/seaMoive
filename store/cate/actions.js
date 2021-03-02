import {
	cate
} from '@/request/cate.js';
export default {
	// 获取分类
	async getCateData(context, res) {
		const {
			id,
			year,
			lang,
			area,
			page
		} = res;
		const {data} = await cate({id,year,lang,area,page});
		context.commit('alterCurrentCateData', data)
	}
}
