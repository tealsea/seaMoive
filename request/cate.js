import request from './request.js';
// 获取分类数据
export function cate(data) {
	const config = {
		url: '/vod/cate',
		data
	};
	return request(config);
}
