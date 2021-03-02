import request from './request.js';
// 登录
export function login(admin, password) {
	const config = {
		url: '/user/login',
		method: 'post',
		data: {
			admin,
			password
		}
	}
	return request(config)
}
//注册
export function register(admin, password, nick) {
	const config = {
		url: '/user/register',
		method: 'post',
		data: {
			admin,
			password,
			nick
		}
	}
	return request(config)
}
// 获取收藏
export function collect(id) {
	const config = {
		url: '/user/collect',
		data: {
			id
		}
	};
	return request(config)
}

//获取求片留言
export function gbook() {
	const config = {
		url: '/user/gbook'
	};
	return request(config);
}

//进行留言
export function createGbook(name, content) {
	const config = {
		url: '/user/crgb',
		method: 'post',
		data: {
			name,
			content
		}
	};
	return request(config)
}
