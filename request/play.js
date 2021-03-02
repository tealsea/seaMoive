import request from './request.js';
//获取视频信息
export function video(id) {
	const config = {
		url: '/vod/video',
		data: {
			id
		}
	};
	return request(config);
};
//获取星官推荐
export function related(data) {
	const config = {
		url: '/vod/related',
		data
	};
	return request(config);
}
// 收藏或取消
export function collectOrcancel(id, vod_id, operate) {
	const config = {
		url: '/user/heart',
		method: 'post',
		data: {
			id,
			vod_id,
			operate
		}
	}
	return request(config)
}
