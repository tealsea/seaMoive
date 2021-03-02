export default {
	methods: {
		// 节点信息获取
		getEl(el) {
			if (typeof el === 'string' || typeof el === 'number') return el;
			if (WXEnvironment) {
				return el.ref;
			} else {
				return el instanceof HTMLElement ? el : el.$el;
			}
		},
		// 登录检查
		checkLogin(callback, options = {}) {
			callback();
		},
		// 时间获取
		getDate(type) {
			const date = new Date();
			let year = date.getFullYear();
			let month = date.getMonth() + 1;
			let day = date.getDate();

			if (type === 'start') {
				year = year - 60;
			} else if (type === 'end') {
				year = year + 0;
			}
			month = month > 9 ? month : '0' + month;;
			day = day > 9 ? day : '0' + day;
			return `${year}-${month}-${day}`;
		},
		// 进度条信息
		getFormatTime(time) {
			// 判断当前传入的是否为数字
			if(isNaN(time))time = 0;
			let h = parseInt(parseFloat(time) / 3600)
			let i = parseInt((parseFloat(time) % 3600) / 60)
			let s = parseInt((parseFloat(time) % 3600) % 60)
			if (h > 0) {
				return (h > 9 ? h : '0' + h) + ':' + (i > 9 ? i : '0' + i) + ':' + (s > 9 ? s : '0' + s)
			} else {
				return (i > 9 ? i : '0' + i) + ':' + (s > 9 ? s : '0' + s)
			}
		}
	}
}
