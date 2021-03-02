import actions from './actions.js';
import mutations from './mutations.js';
export default {
	state: {
		data: [],
		page: 1,
		currentData: {
			flag: 1,
			data: {}
		}
	},
	actions,
	mutations
}
