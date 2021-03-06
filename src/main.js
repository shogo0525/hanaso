import '@babel/polyfill'
import Vue from 'vue'
import '@/assets/css/tailwind.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
