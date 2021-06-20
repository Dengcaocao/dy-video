<template>
  <view class="index">
    <!-- 推荐 -->
    <view class="nav" v-show="indexPage === '推荐'">
      <!-- 自定义导航栏 -->
      <Nav ref="nav" position="fixed" />
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
            <Interactive
              :needData="item"
              ref="interactive"
            />
            <Topic :needData="item" />
          </swiper-item>
        </swiper>
      </view>
    </view>
    <!-- 同城 -->
    <CityWide v-show="indexPage === '同城'" />
  </view>
</template>

<script>
import { mapState } from 'vuex'
import Nav from './components/nav.vue'
import CVideo from './components/cVideo.vue'
import Interactive from './components/interactive.vue'
import Topic from './components/topic.vue'
import CityWide from './city-wide.vue'
export default {
  data () {
    return {
      videoList: null,
      lastCurrent: 0,
      currentPage: ''
    }
  },
  computed: {
    ...mapState([
      'indexPage'
    ])
  },
  components: {
    Nav,
    CVideo,
    Interactive,
    Topic,
    CityWide
  },
  onLoad () {
    this.getDataList()
  },
  onReady () {
    this.$refs.nav.initIndexPage()
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
      this.$refs.video[this.lastCurrent].clickNum = 0
      this.$refs.video[this.lastCurrent].isPlay = true
      this.lastCurrent = current
    },
    setIsLike (val) {
      this.$refs.interactive[this.lastCurrent].isLike = val
    }
  }
}
</script>

<style scoped>
.index,
.nav {
  height: 100%;
}
.video-content {
  width: 100%;
  height: 100%;
}
.video-content .swiper {
  height: 100%;
}
</style>
