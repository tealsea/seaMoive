<template>
	<view class="t_title">
		<high></high>
		<view class="t_title_box">
			<view class="left">
				<text class="back common_font" v-if="info.back" @tap="goBack">&#xe602;</text>
				<text class="title">{{info.title}}</text>
			</view>
			<text class="right common_font" v-if="info.search" @tap="handleSearch">&#xe601;</text>
		</view>
	</view>
</template>
<script>
	import high from '@/components/common/high.nvue';
	export default {
		props: {
			info: {
				type: Object,
				default: {
					title: '返回',
					back: true,
					search: true
				}
			}
		},
		components: {
			high
		},
		methods: {
			// 跳转到搜索页面
			handleSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			},
			// 返回上一页
			goBack() {
				uni.navigateBack(-1)
			}
		}
	}
</script>

<style>
	.t_title_box {
		height: 100rpx;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.common_font {
		font-family: iconfont;
		color: #999;
		font-size: 45rpx;

	}

	.left {
		flex-direction: row;
	}

	.title {
		color: #555;
		padding-left: 20rpx;
		font-size: 35rpx;
		font-weight: bold;
	}
</style>
