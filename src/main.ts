import { createApp } from 'vue'
import { createStore } from 'vuex'
import router from './router'
import store from './store'
import App from './App.vue'

createApp(App).use(router).use(store).mount('#app')
