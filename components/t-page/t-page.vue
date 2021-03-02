<template>
	<view class="t_page">
		<text class="last common_btn" :class="{a_btn:page===1}" @tap="handlePage(-1)">&#xe602;上一页</text>
		<text class="current">当前页码：{{page}}</text>
		<text class="next common_btn" :class="{a_btn:count%30!==0}" @tap="handlePage(1)">下一页&#xe60e;</text>
	</view>
</template>

<script>
	export default {
		props: {
			page: Number,
			count: Number
		},
		methods: {
			handlePage(s) {
				const page = this.page;
				if (s === -1 && page <= 1 || this.count % 30 !== 0) return;
				this.$emit('hanglePage', s)
			}
		}
	}
</script>

<style>
	.t_page {
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		margin-bottom: 50rpx;
	}

	.common_btn {
		padding: 20rpx;
		font-size: 30rpx;
		border-radius: 10rpx;
		color: #fff;
		font-family: iconfont;
		background-color: #E3AE70;
	}

	.current {
		color: #999;
		font-size: 30rpx;
	}

	.a_btn {
		background-color: #eee;
		color: #666;
	}
</style>
