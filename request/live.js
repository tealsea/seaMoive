import request from './request.js';
// 获取直播地址
export function live() {
	const config = {
		url: '/vod/live'
	};
	return request(config)
}
