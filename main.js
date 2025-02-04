import Vue from 'vue' // Vue 라이브러리 import
import App from './App'// Vue 컴포넌트 import
import router from './router'
import store from './store'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') // #app에 Vue 인스턴스를 마운트
