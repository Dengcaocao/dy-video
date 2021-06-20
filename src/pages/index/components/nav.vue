<template>
  <view class="nav" :style="{backgroundColor: bg,position: position}">
    <view class="nav-list">
      <view class="iconfont icon-sousuo"></view>
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
  props: {
    bg: {
      type: String,
      default: 'transparent'
    },
    position: {
      type: String,
      default: 'static'
    }
  },
  computed: {
    ...mapState([
      'typeIndex',
      'indexPage'
    ])
  },
  watch: {
    /**
     * 解决获取不到dom高度的问题
     */
    indexPage (val) {
      if (val === '同城') {
        this.getHeight()
      }
    }
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
    },
    getHeight () {
      const navDom = uni.createSelectorQuery().in(this).select('.nav')
      navDom.boundingClientRect().exec(navRes => {
        this.$emit('sendHeight', navRes[0].height)
      })
    }
  }
}
</script>
<style scoped>
.nav {
  /* position: fixed; */
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