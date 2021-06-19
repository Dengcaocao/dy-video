<template>
  <view class="city-wide">
    <!-- 自定义导航栏 -->
    <keep-alive>
      <Nav />
    </keep-alive>
    {{typeIndex}}
  </view>
</template>
<script>
import Nav from './components/nav.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      
    }
  },
  computed: {
    ...mapState([
      'typeIndex'
    ])
  },
  components: {
    Nav
  }
}
</script>
<style scoped>
.city-wide {
  height: 100%;
  background-color: chocolate;
}
</style>