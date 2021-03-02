<template>
	<list class="t_history" :show-scrollbar="false">
		<cell class="item" v-if="item.vod_id" v-for="(item,i) in list" :key="item.vod_id" @tap="handleTap(item.vod_id)">
			<view class="box">
				<image class="t_img" :src="item.vod_pic" mode="aspectFill" />
				<view class="info">
					<text class="name">{{item.vod_name}}</text>
					<text class="btn">播放</text>
				</view>
			</view>
		</cell>
	</list>
</template>

<script>
	export default {
		props: {
			list: Array
		},
		methods: {
			// 点击进入视频
			handleTap(id) {
				uni.navigateTo({
					url: '/pages/play/play?id=' + id
				})
			}
		},
	}
</script>

<style scoped>
	.t_history {
		flex: 1;
	}

	.box {
		margin-top: 20rpx;
		flex-direction: row;
		padding: 20rpx;
		background: #fff;
		border-radius: 20rpx;
	}

	.t_img {
		flex: 1;
		height: 120rpx;
		border-radius: 20rpx;
	}

	.info {
		flex: 2;
		justify-content: space-around;
		align-items: center;
	}

	.name,
	.sequel,
	.btn {
		font-size: 30rpx;
	}

	.btn {
		width: 150rpx;
		border-radius: 20rpx;
		background-color: #ffcd42;
		padding: 10rpx 30rpx;
		text-align: center;
		color: #333;
	}
</style>
