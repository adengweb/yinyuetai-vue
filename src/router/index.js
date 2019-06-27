import Vue from 'vue'
import Router from 'vue-router'

// 首页
import Index from '@/pages/index'

// 专辑
import Albums from '@/pages/albums/index'

// 明星周边
import Surround from '@/pages/surround'

// 明星同款
import Fashion from '@/pages/fashion'

// 个护美妆
import Makeup from '@/pages/makeup'

// 影漫周边
import Digit from '@/pages/digit'

// 常见问题
import Faq from '@/pages/faq/index'

// 详情
import Detail from '@/pages/detail/index'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      meta: {
        active: '/index'
      }
    },
    {
      path: '/index',
      component: Index,
      meta: {
        active: '/index'
      }
    },
    {
      path: '/albums',
      component: Albums
    },
    {
      path: '/surround',
      component: Surround
    },
    {
      path: '/fashion',
      component: Fashion
    },
    {
      path: '/makeup',
      component: Makeup
    },
    {
      path: '/digit',
      component: Digit
    },
    {
      path: '/faq',
      component: Faq
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
})
