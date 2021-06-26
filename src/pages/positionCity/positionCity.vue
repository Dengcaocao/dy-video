<template>
  <view class="positionCity">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <!-- head -->
    <view class="head">
      <view class="iconfont icon-jia" @click="back"></view>
      <view class="title">切换城市</view>
    </view>
    <!-- search -->
    <view class="search-warp" :class="{'add-flex': resetInput}">
      <view class="search-input">
        <input type="text" placeholder="请输入文本" @focus="resetInput = true" @blur="resetInput = false" />
        <view class="iconfont icon-sousuo"></view>
      </view>
      <text class="cancel" v-show="resetInput">取消</text>
    </view>
    <!-- position -->
    <view class="position clearfix">
      <view class="title">自动定位</view>
      <view class="current-position">徐汇</view>
    </view>
    <!-- hot city -->
    <view class="hot-city clearfix">
      <view class="title">热门城市</view>
      <view class="city-warp">
        <view class="city-item" v-for="item in hotCity" :key="item">{{item}}</view>
      </view>
    </view>
    <!-- 地区 -->
    <view class="city-categroy">
      <view class="categroy-item">
        <view class="letter">A</view>
        <view class="dq">
          <view class="dq-item">阿坝藏族羌族自治州</view>
          <view class="dq-item">阿坝藏族羌族自治州</view>
        </view>
      </view>
    </view>
    <!-- right letter -->
    <view class="letter-warp">
      <view class="letter" v-for="item in 26" :key="item">A</view>
    </view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      resetInput: false,
      hotCity: ['深圳', '北京', '上海', '成都', '广州', '重庆', '西安', '苏州', '武汉', '杭州', '郑州', '南京', '合肥', '长沙', '福州']
    }
  },
  methods: {
    back () {
      uni.navigateBack({
        delta: 1 // 回退前 delta(默认为1) 页面
      })
    }
  },
}
</script>
<style scoped>
.status_bar {
  width: 100%;
  height: var(--status-bar-height);
  background-color: #FFF;
}
.head{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80rpx;
}
.head .iconfont{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) rotate(45deg);
  color: #000;
  font-size: 34rpx;
  padding: 0 30rpx;
}
.search-warp{
  transition: .2s;
  padding: 20rpx 30rpx;
}
.search-warp.add-flex{
  display: flex;
  align-items: center;
}
.search-warp .search-input{
  flex: 1;
  position: relative;
  height: 60rpx;
  border-radius: 6rpx;
  background-color: rgb(241, 241, 241);
}
.search-warp text{
  padding: 10rpx 0 10rpx 30rpx;
  color: red;
  opacity: .8;
}
.search-input input{
  height: 100%;
  line-height: 60rpx;
  /* text-indent: 60rpx; */
  padding-left: 60rpx;
  caret-color: red
}
.search-input .iconfont{
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #666;
  font-size: 40rpx;
  padding: 0 10rpx;
}
.position,
.hot-city,
.city-categroy{
  padding: 0 30rpx;
  font-size: 28rpx;
}
.clearfix::after{
  content: "";
  display: block;
  height: 1px;
  background-color: #ccc;
}
.position .current-position{
  line-height: 40rpx;
  padding: 20rpx 0;
}
.hot-city .title,
.categroy-item .letter{
  line-height: 40rpx;
  padding: 20rpx 0;
}
.hot-city .city-warp{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 6rpx;
  column-gap: 6rpx;
  margin-bottom: 30rpx;
}
.city-warp .city-item{
  height: 60rpx;
  text-align: center;
  line-height: 60rpx;
  font-size: 28rpx;
  border-radius: 4rpx;
  background-color: rgb(248, 248, 248);
}
.categroy-item .dq .dq-item{
  line-height: 60rpx;
}
.letter-warp{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 10rpx;
  top: 50%;
  transform: translateY(-50%);
  width: 26rpx;
  background-color: aqua;
}
.letter-warp .letter {
  font-size: 24rpx;
  color: #999;
}
</style>