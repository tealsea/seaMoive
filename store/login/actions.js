import {
	login,
	register,
	collect,
	gbook,
	createGbook
} from '@/request/login.js';
export default {
	// 登录账号
	async login_in(context, res) {
		const {
			admin,
			password
		} = res;
		const {
			data
		} = await login(admin, password);
		saveData(data)
	},
	// 注册账号
	async register_in(context, res) {
		const {
			admin,
			password,
			nick
		} = res;
		const {
			data
		} = await register(admin, password, nick);
		saveData(data)
	},
	// 获取收藏数据
	async getCollect(context, id) {
		const {
			data
		} = await collect(id);
		uni.setStorageSync('seaCollect', data.reverse());
		uni.hideLoading()
		uni.redirectTo({
			url: '/pages/collect/collect'
		})
	},
	// 获取求片留言
	async getGbook(context) {
		const {
			data
		} = await gbook();
		context.commit('alterGbook', data)
	},
	//发送留言
	async sendGbook(context, res) {
		const {
			name,
			content
		} = res;
		const data = await createGbook(name, content);
		uni.hideLoading();
		uni.redirectTo({
			url: '/pages/beg/beg'
		})
	}
}


// 封装保存登录函数
function saveData(data) {
	uni.hideLoading();
	uni.setStorageSync('logo_cookie', data)
	uni.showToast({
		title: '登录成功'
	})
	setTimeout(() => {
		uni.navigateBack(-1)
	}, 1000)
}
