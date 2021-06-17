<template>
  <view class="interactive">
    <view class="avatar interactive-item">
      <image :src="'http://172.20.10.2:1012/avatar/'+ needData.avatar" mode="widthFix"></image>
      <view class="iconfont icon-jia"></view>
    </view>
    <view class="like interactive-item">
      <view class="iconfont icon-heart-fill" :class="{'liked': isLike}" @click="isLike = !isLike"></view>
      <text>{{needData.likeNum}}</text>
    </view>
    <view class="comment interactive-item">
      <view class="iconfont icon-pinglun4"></view>
      <text>{{needData.interactiveNum}}</text>
    </view>
    <view class="transpond interactive-item">
      <view class="iconfont icon-zhuanfa"></view>
      <text>{{needData.transpondNum}}</text>
    </view>
    <view class="music interactive-item">
      <image :src="'http://172.20.10.2:1012/avatar/'+ needData.avatar" mode="widthFix"></image>
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
  },
  data() {
    return {
      isLike: false
    }
  },
  methods: {
    
  }
}
</script>
<style scoped>
  .interactive{
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 99;
  }
  .interactive .interactive-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    text-align: center;
    margin: 14rpx 20rpx;
  }
  .interactive .like{
    margin-top: 28rpx;
  }
  .interactive-item .iconfont{
    font-size: 48rpx;
  }
  .interactive-item .icon-heart-fill{
    font-size: 52rpx;
  }
  .interactive-item .icon-heart-fill.liked{
    color: red;
  }
  .interactive text{
    font-size: 26rpx;
  }
  .avatar{
    position: relative;
    width: 80rpx;
    height: 80rpx;
    margin-bottom: 10rpx;
  }
  .avatar image{
    width: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    border: 4rpx solid #fff;
  }
  .avatar .icon-jia{
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 100%;
    left: 50%;
    font-size: 20rpx;
    transform: translate(-50%, -50%);
    width: 30rpx;
    height: 30rpx;
    border-radius: 50%;
    background-color: red;
  }
  .music{
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    background-color: dimgray;
    box-sizing: border-box;
    padding: 15rpx;
    animation: move 3s linear infinite;
  }
  .music image{
    width: 100%;
    border-radius: 50%;
  }
  @keyframes move{
    0%{
      transform: rotate(0);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>