import request from './request.js';
// 获取排行数据
export function rank(id) {

}
// 获取联想词
export function think(wd) {
	const config = {
		url: '/vod/think',
		data: {
			wd
		}
	}
	return request(config)
}
