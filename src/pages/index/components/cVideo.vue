<template>
  <view
    class="video-paly"
    @click="videoClick"
  >
    <video
      class="myVideo"
      id="myVideo"
      ref="video"
      :src="'http://172.20.10.2:1012/video/'+ needData.videoSrc"
      :show-center-play-btn="false"
      :autoplay="index === 0"
      :loop="true"
      object-fit="cover"
      :controls="false"
    >
    </video>
  </view>
</template>
<script>
export default {
  props: {
    needData: {
      type: Object,
      default: {}
    },
    index: {
      type: Number,
      dafault: 0
    }
  },
  data () {
    return {
      context: null,
      isPlay: true,
      clickNum: 0,
      startAt: 0,
      endAt: 0,
      dbTimer: null
    }
  },
  onReady () {
    this.context = uni.createVideoContext('myVideo', this)
  },
  methods: {
    videoClick () {
      this.clickNum++
      if (this.clickNum === 1) {
        this.startAt = new Date().getTime()
        this.dbTimer = setTimeout(() => {
          this.playOrPause()
          this.clickNum = 0
        }, 300)
      } else if (this.clickNum === 2) {
        this.endAt = new Date().getTime()
        if (this.endAt - this.startAt < 300) {
          clearTimeout(this.dbTimer)
          this.$emit('setIsLike', true)
        } else {
          this.playOrPause()
        }
        this.clickNum = 0
      }
    },
    playOrPause () {
      if (this.isPlay) {
        this.pause()
      } else {
        this.play()
      }
      this.isPlay = !this.isPlay
    },
    play () {
      this.context.play()
    },
    pause () {
      this.context.pause()
    },
    // 平台差异
    stop () {
      this.context.stop()
    },
    seek () {
      this.context.seek(0)
    }
  },
}
</script>
<style scoped>
.video-paly,
.myVideo {
  width: 100%;
  height: 100%;
}
.myVideo {
  display: block;
}
</style>