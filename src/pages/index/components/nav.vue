<template>
  <view class="nav">
    <view class="iconfont icon-sousuo"></view>
    <view class="nav-list">
      <view
        class="nav-item"
        :class="{'active': typeIndex === index}"
        v-for="(item, index) in navTitle"
        :key="item"
        @click="cutType(index)"
      >{{item}}</view>
    </view>
  </view>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      navTitle: ['同城', '推荐']
    }
  },
  computed: {
    ...mapState([
      'typeIndex',
      'indexPage'
    ])
  },
  methods: {
    ...mapMutations([
      'setTypeIndex',
      'setIndexPage'
    ]),
    cutType (index) {
      this.setTypeIndex(index)
      this.setIndexPage(this.navTitle[this.typeIndex])
    },
    initIndexPage () {
      this.setTypeIndex(this.navTitle.length - 1)
      this.setIndexPage(this.navTitle[this.typeIndex])
    }
  }
}
</script>
<style scoped>
.nav {
  position: fixed;
  top: var(--status-bar-height);
  z-index: 99;
  color: #999;
  font-size: 30rpx;
  width: 100%;
}
.nav .nav-list {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80rpx;
  font-weight: 500;
}
.nav-list .nav-item {
  position: relative;
  padding: 10rpx 30rpx;
  color: #999;
}
.nav-list .nav-item.active {
  color: #fff;
  font-weight: 600;
}
.nav-list .nav-item.active::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 100%);
  width: 60rpx;
  height: 6rpx;
  border-radius: 6rpx;
  background-color: #fff;
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
</style>