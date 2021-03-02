import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import home from './home/home.js';
import message from './message/message.js';
import search from './search/search.js';
import list from './list/list.js';
import play from './play/play.js';
import cate from './cate/cate.js';
import live from './live/live.js';
import login from './login/login.js';
const store = new Vuex.Store({
	state: {
		high: 0
	},
	getters: {},
	mutations: {
		//修改沉浸式导航高度
		alterHigh(state, num) {
			state.high = num
		}
	},
	actions: {},
	modules: {
		home,
		message,
		search,
		list,
		play,
		cate,
		live,
		login
	}
})
export default store
