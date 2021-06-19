import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    typeIndex: 0,
    indexPage: ''
  },
  mutations: {
    setTypeIndex (state, index) {
      state.typeIndex = index
    },
    setIndexPage (state, pageStr) {
      state.indexPage = pageStr
    }
  }
})

export default store
