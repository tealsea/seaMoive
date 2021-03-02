import mutations from './mutations.js';
import actions from './actions.js';
export default {
	state: {
		//分类
		type: [{
				type_id: 0,
				type_name: '推荐'
			},
			{
				type_id: 1,
				type_name: '电影'
			},
			{
				type_id: 2,
				type_name: '连续剧'
			},
			{
				type_id: 3,
				type_name: '综艺'
			},
			{
				type_id: 4,
				type_name: '动漫'
			},
		],
		// 国家列表
		area: ['大陆', '美国', '韩国', '香港', '日本'],
		// 推荐数据
		rem: [{
				id: 0,
				banner: [],
				title: '热门推荐',
				data: [],
			},
			{
				id: 1,
				banner: [],
				title: '电影推荐',
				data: [],
				initData: [],
				isMore: true,
				listData: []
			},
			{
				id: 2,
				banner: [],
				title: '连续剧推荐',
				data: [],
				initData: [],
				isMore: true,
				listData: []
			},
			{
				id: 3,
				banner: [],
				title: '综艺推荐',
				data: [],
				initData: [],
				isMore: true,
				listData: []
			},
			{
				id: 4,
				banner: [],
				title: '动漫推荐',
				data: [],
				initData: [],
				isMore: true,
				listData: []
			}
		],
	},
	mutations,
	actions
}
