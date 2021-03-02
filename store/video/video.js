export default {
	namespaced:true,
	state:{
		// 当前的投屏链接
		url:false,
		// 当前的投屏状态
		status:false
	},
	getters:{
		
	},
	mutations:{
		setUrl(state,url){
			state.url = url
		},
		setStatus(state,status){
			state.status = status
		}
	},
	actions:{
		doSetUrl({commit},url){
			commit('setUrl',url);
		},
		doSetStatus({commit},status){
			commit('setStatus',status)
		}
	}
}