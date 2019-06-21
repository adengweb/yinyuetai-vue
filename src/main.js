import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import vuejsonp from 'vue-jsonp'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './common/style/swiper.css'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.qs = qs
Vue.use(vuejsonp)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload)

let vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use({
  vm
})
