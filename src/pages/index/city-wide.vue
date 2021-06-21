<template>
  <view class="city-wide">
    <view class="status_bar">
      <!-- 这里是状态栏 -->
    </view>
    <!-- 自定义导航栏 -->
    <Nav
      ref="nav"
      bg="#000033"
      @sendHeight="receptionHeight"
    />
    <!-- content区域 -->
    <scroll-view
      class="scroll-Y"
      :scroll-y="true"
      :style="{height: scrollH}"
    >
      <view class="video-list">
        <view
          class="video-item"
          v-for="(item, index) in videoList"
          :key="index"
        >
          <video
            class="myVideo"
            object-fit="fill"
            :src="'http://172.20.10.2:1012/video/'+ item.videoSrc"
            :show-center-play-btn="false"
            :loop="true"
            :controls="false"
          >
          </video>
          <view class="avatar">
            <image
              :src="'http://172.20.10.2:1012/avatar/'+ item.avatar"
              mode="widthFix"
            ></image>
          </view>
        </view>
      </view>
    </scroll-view>
  </view>
</template>
<script>
import { mapState } from 'vuex'
import Nav from './components/nav.vue'

export default {
  data () {
    return {
      scrollH: '',
      videoList: null
    }
  },
  computed: {
    ...mapState([
      'indexPage'
    ])
  },
  components: {
    Nav
  },
  watch: {
    indexPage (val) {
      if (val === '同城') {
        this.getHeight()
      }
    }
  },
  created () {
    this.getDataList()
  },
  methods: {
    getHeight () {
      const statusBarDom = uni.createSelectorQuery().in(this).select('.status_bar')
      const { windowHeight } = uni.getSystemInfoSync()
      statusBarDom.boundingClientRect().exec(statusRes => {
        this.scrollH = windowHeight - statusRes[0].height
      })
    },
    receptionHeight (height) {
      this.scrollH = this.scrollH - height + 'px'
    },
    getDataList () {
      uni.showLoading({
        title: '',
        mask: true
      })
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
    }
  }
}
</script>
<style scoped>
.city-wide {
  height: 100%;
}
.status_bar {
  width: 100%;
  height: var(--status-bar-height);
  background-color: #000033;
}
.scroll-Y {
  padding-top: 20rpx;
  box-sizing: border-box;
  background-color: #000033;
}
.video-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.video-list .video-item {
  position: relative;
  width: 372rpx;
  height: 554rpx;
  margin-bottom: 6rpx;
}
.video-item .myVideo {
  width: 100%;
  height: 100%;
  display: block;
}
.video-list .avatar {
  position: absolute;
  left: 20rpx;
  bottom: 20rpx;
  width: 60rpx;
  height: 60rpx;
  border-radius: 50%;
  overflow: hidden;
}
.avatar image {
  width: 100%;
}
</style>