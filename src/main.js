import Vue from 'vue'
import App from './App'

// import axios from './api/axios.js'
import store from './store'
Vue.prototype.$store = store
// Vue.prototype.$axios = axios
Vue.config.productionTip = false

App.mpType = 'app'


const app = new Vue({
  ...App
})
app.$mount()
