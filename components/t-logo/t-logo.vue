<template>
	<view class="logo">
		<image class="logo_img" src="@/static/img/logo/logo.png" mode="widthFix"></image>
		<input @tap="goSearch" class="logo_search" type="text" disabled placeholder="海量影片精彩不停!" />
	</view>
</template>

<script>
	export default {
		methods: {
			// 跳转到搜索页
			goSearch() {
				uni.navigateTo({
					url: '/pages/search/search'
				})
			}
		}
	}
</script>

<style>
	.logo {
		height: 100rpx;
		flex-direction: row;
		align-items: center;
	}

	.logo_img {
		flex: 1;
	}

	.logo_search {
		flex: 2;
		border-radius: 30rpx;
		border-width: 1px;
		height: 70rpx;
		border-style: solid;
		font-size: 24rpx;
		padding-left: 30rpx;
		border-color: #666;
	}
</style>
