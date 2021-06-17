<template>
  <view class="topic">
    <view class="name">{{needData.name}}</view>
    <view class="desc">{{needData.desc}}</view>
    <view class="music-name">
      <view class="iconfont icon-douyin"></view>
      <view class="container">
        <view class="content-warp">
          <view class="content">
            <text class="music-desc">{{needData.musicName}}</text>
          </view>
          <view class="content">
            <text class="music-desc">{{needData.musicName}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    needData: {
      type: Object,
      default: {}
    }
  }
}
</script>
<style scoped>
.topic {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 99;
  color: #fff;
  font-size: 26rpx;
  width: 66%;
  margin: 10rpx;
}
.topic view {
  line-height: 46rpx;
}
.name {
  font-size: 28rpx;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.desc {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.music-name {
  display: flex;
  align-items: center;
  width: 320rpx;
}
.music-name .iconfont {
  font-size: 26rpx;
}
.music-name .container {
  flex: 1;
  margin-left: 8rpx;
  overflow: hidden;
}
.container .content-warp{
  white-space: nowrap;
}
.container .content {
  display: inline-block;
  animation: move 3s linear infinite;
}
.content .music-desc {
  margin: 0 10rpx;
}
@keyframes move {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>