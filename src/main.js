import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store'
import './mock/mockServer'
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router,
  store
})
