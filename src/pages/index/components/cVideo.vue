<template>
  <view class="video-paly">
    <video
      class="myVideo"
      :src="'http://172.20.10.2:1012/video/'+ needData.videoSrc"
      :show-center-play-btn="false"
      object-fit="cover"
      :controls="false">
    </video>
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
.video-paly,
.myVideo{
  width: 100%;
  height: 100%;
}
.myVideo{
  display: block;
}
</style>