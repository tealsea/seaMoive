import request from './request.js';
//获取资讯
export function msg(page) {
	const config = {
		url: '/msg/all',
		data: {
			page
		}
	}
	return request(config)
}
