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
    </scroll-view>
  </view>
</template>
<script>
import { mapState } from 'vuex'
import Nav from './components/nav.vue'

export default {
  data () {
    return {
      scrollH: ''
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
  background-color: cornflowerblue;
}
</style>