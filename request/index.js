import request from './request';
// 获取横幅信息
export function banner(type = null) {
	const config = {
		url: '/vod/banner',
		data: {
			type
		}
	};
	return request(config)
};
//获取热门推荐数据
export function rem(type) {
	const config = {
		url: '/vod/rem',
		data: {
			type
		}
	}
	return request(config)
}
// 获取分类
export function type() {
	const config = {
		url: '/vod/class'
	};
	return request(config)
};
// 获取首屏数据信息
export function main(id, cate) {
	const config = {
		url: '/vod/main',
		data: {
			id,
			cate
		}
	}
	return request(config)
}
// 获取具体分类数据
export function cate(data) {
	const config = {
		url: '/vod/cate',
		data
	};
	return request(config)
}
