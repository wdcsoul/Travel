import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)
/*
* Vue 路由的配置项，默认情况的访问的路由是Home 当网页的页面更改为/List，就可以访问到List的路由
* */
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home')
  }, {
    path: '/city',
    name: 'City',
    component: () => import('@/pages/city/City')
  }, {
    path: '/detail/:id', /* 动态路由 */
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  }],
  /* 解决滚动问题 */
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
