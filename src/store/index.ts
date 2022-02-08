import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      a: 'Hello'
    }
  },
  mutations: {
  }
})

export default store
