const baseUrl = 'http://localhost:4000';
export default function request(config) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + config.url,
			data: config.data || null,
			timeout: 10000,
			method: config.method || 'get',
			sslVerify: false,
			success: res => {
				if (res.data.status !== 200) {
					toast(res.data.msg);
					return reject(res.data);
				}
				resolve(res.data)
			},
			fail: err => {
				reject(err)
			}
		});
	});
};

function toast(title) {
	uni.hideLoading();
	uni.showToast({
		title: title,
		icon: "none"
	})
}
