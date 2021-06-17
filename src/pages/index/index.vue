<template>
  <view class="index">
    <!-- <view class="status_bar">
      这里是状态栏
    </view> -->
    <!-- 自定义导航栏 -->
    <view class="nav">
      <view class="iconfont icon-sousuo"></view>
      <view class="nav-list">
        <view
          class="nav-item"
          v-for="item in navTitle"
          :key="item"
        >{{item}}</view>
      </view>
    </view>
    <!-- 视频区 -->
    <view class="video-content">
      <swiper
        class="swiper"
        vertical
        :current="lastCurrent"
        @change="change"
      >
        <swiper-item
          v-for="(item, index) in videoList"
          :key="index"
        >
          <CVideo
            :needData="item"
            :index="index"
            @setIsLike="setIsLike"
            ref="video"
          />
          <Interactive :needData="item" ref="interactive" />
          <Topic :needData="item" />
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>

<script>
import CVideo from './components/cVideo.vue'
import Interactive from './components/interactive.vue'
import Topic from './components/topic.vue'
export default {
  data () {
    return {
      navTitle: ['推荐', '同城'],
      swiperH: '',
      videoList: null,
      lastCurrent: 0
    }
  },
  components: {
    CVideo,
    Interactive,
    Topic
  },
  onLoad () {
    this.getDataList()
  },
  mounted () {
    // const navDom = uni.createSelectorQuery().select('.nav')
    // const statusBarDom = uni.createSelectorQuery().select('.status_bar')
    // const { windowHeight } = uni.getSystemInfoSync()
    // new Promise(resolve => {
    //   navDom.boundingClientRect().exec(navRes => {
    //     statusBarDom.boundingClientRect().exec(statusRes => {
    //       resolve(navRes[0].height + statusRes[0].height)
    //     })
    //   })
    // }).then((res) => {
    //   this.swiperH = windowHeight - res + 'px'
    // })
  },
  methods: {
    getDataList () {
      uni.showLoading({
        title: '',
        mask: true
      })
      // this.$axios({
      //   methods: 'get',
      //   url: '/user/user.json'
      // }).then(res => {
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })
      uni.request({
        url: 'http://172.20.10.2:1012/user/user.json',
        method: 'get',
        timeout: 10000,
        success: res => {
          uni.hideLoading()
          const { data } = res
          this.videoList = data
        }
      })
    },
    change (e) {
      const { current } = e.detail
      /**
       * 当前视频播放
       * 上一个视频暂停
       * 调用子组件方法
       */
      this.$refs.video[current].play()
      this.$refs.video[this.lastCurrent].stop()
      this.$refs.video[this.lastCurrent].seek()
      this.lastCurrent = current
    },
    setIsLike (val) {
      this.$refs.interactive[this.lastCurrent].isLike = val
    }
  }
}
</script>

<style scoped>
.index {
  height: 100%;
}
/* .status_bar {
  width: 100%;
  height: var(--status-bar-height);
} */
.nav {
  position: fixed;
  top: var(--status-bar-height);
  z-index: 99;
  color: #999;
  font-size: 30rpx;
  width: 100%;
}
.nav .nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80rpx;
  font-weight: 500;
}
.nav-list .nav-item {
  padding: 10rpx 30rpx;
}
.nav .icon-sousuo {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: #fff;
  font-size: 40rpx;
  padding: 0 30rpx;
}
.video-content {
  width: 100%;
  height: 100%;
}
.video-content .swiper {
  height: 100%;
}
</style>
