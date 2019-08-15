import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/pages/index'),
      meta: {
        active: '/index'
      }
    },
    {
      path: '/index',
      component: () => import('@/pages/index'),
      meta: {
        active: '/index'
      }
    },
    {
      path: '/albums',
      component: () => import('@/pages/albums')
    },
    {
      path: '/surround',
      component: () => import('@/pages/surround')
    },
    {
      path: '/fashion',
      component: () => import('@/pages/fashion')
    },
    {
      path: '/makeup',
      component: () => import('@/pages/makeup')
    },
    {
      path: '/digit',
      component: () => import('@/pages/digit')
    },
    {
      path: '/faq',
      component: () => import('@/pages/faq/index')
    },
    {
      path: '/detail/:id',
      component: () => import('@/pages/detail/index')
    }
  ]
})
