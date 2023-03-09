// router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import About from '../components/AboutPage.vue'
import AboutDetails from '../components/AboutDetails.vue'

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
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]
/*
在 Vue Router 4 中，我们可以使用动态路由来实现根据不同参数值动态匹配不同的路由。
例如，在上面的示例代码中，我们为 /about/:id 这个路由规则定义了一个动态参数 id，它可以匹配任何以 /about/ 开头的路径，
并将其后面的参数值传递给路由组件。在 AboutPage 组件中，我们使用 v-for 遍历了一个包含多个用户信息的数组，
并使用 router-link 来动态生成路由链接。
*/
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
