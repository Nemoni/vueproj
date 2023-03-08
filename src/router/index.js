// router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutPage.vue')  // 动态导入模块的方式，只有在需要时才会加载指定的模块。
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
