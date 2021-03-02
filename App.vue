<script>
	export default {
		onLaunch: function() {
			for (let i = 0; i < 5; i++) {
				this.$store.dispatch('getBanner', i);
				this.$store.dispatch('getRem', i);
				this.$store.dispatch('getCate', {
					id: i,
					limit: 6
				});
			}
			// 获取导航条高度
			uni.getSystemInfo({
				success: (res) => {
					this.$store.commit('alterHigh', res.statusBarHeight)
				}
			});
		},
		created() {
			var domModule = weex.requireModule('dom');
			domModule.addRule('fontFace', {
				'fontFamily': "iconfont",
				'src': "url('https://at.alicdn.com/t/font_2384097_jnvn2798nhm.ttf')"
			})
		},
		onShow: function() {

		},
		onHide: function() {

		}
	}
</script>
