import Vue from 'vue'
import App from './App'
import router from './router'
import http from './common/js/http'
import store from './store'
import vuejsonp from 'vue-jsonp'
import VueLazyload from 'vue-lazyload'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import '@/icons'
import Icon from 'vue2-svg-icon/Icon.vue'
Vue.component('icon', Icon)

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(vuejsonp)
Vue.use(VueLazyload)
Vue.use(ElementUI)

// 引入mock数据
require('@/mock/index.js')

// 设置导航卫士来判断是否登录
router.beforeEach((to, from, next) => {
  console.log(store.state.token)
  next()
})

let vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

Vue.use({
  vm
})
