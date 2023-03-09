// router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import About from '../components/AboutPage.vue'
import AboutDetails from '../components/AboutDetails.vue'
import Admin from '../components/AdminPage.vue'
import Unauthorized from '../components/Unauthorized.vue'
import Login from '../components/LoginPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [
      {
        path: ':id',
        name: 'AboutDetails',
        component: AboutDetails
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    meta: { requiresAuth: true, requiresAdmin: true }
  },
  {
    path: '/unauthorized',
    name: 'Unauthorized',
    component: Unauthorized
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token') !== null
  const isAdmin = localStorage.getItem('role') === 'admin'

  /*
  to.matched 是一个数组，它包含了当前路由匹配的所有路由记录。
  每个路由记录都是一个包含路由配置信息的对象，其中包括了 path、name、component 等属性，还包括了我们在路由配置中定义的元信息 meta。
  在这个代码片段中，我们使用了 to.matched.some 方法对当前路由匹配的所有路由记录进行遍历，
  并查找是否存在一个元信息 requiresAuth 为 true 的路由记录。如果存在，则说明当前路由需要用户登录才能访问，此时我们返回 true，否则返回 false。
  */
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next('/login')
    } else if (to.matched.some(record => record.meta.requiresAdmin)) {
      if (!isAdmin) {
        next('/unauthorized')
      } else {
        next()
      }
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
