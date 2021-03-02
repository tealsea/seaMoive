import request from './request.js';
// 获取搜索数据
export function searchData(data) {
	const config = {
		url: '/vod/search',
		data
	};
	return request(config)
}
