// router/index.js

import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import About from '../components/AboutPage.vue'
import AboutIndex from '../components/AboutIndex.vue'
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
        path: '',
        name: 'AboutIndex',
        component: AboutIndex
      },
      {
        path: ':id',
        name: 'AboutDetails',
        component: AboutDetails
      }
    ]
  }
]

/*
在 Vue Router 4 中，我们可以使用嵌套路由来实现页面的嵌套和组合。嵌套路由指的是在一个路由下，还可以包含其他子路由。
在上面的示例代码中，我们定义了一个名为 About 的路由，它包含两个子路由：AboutIndex 和 AboutDetails。
当用户访问 /about 路径时，会默认渲染 AboutIndex 组件；当用户访问 /about/:id 路径时，会渲染 AboutDetails 组件，
并将路由参数 id 传递给组件。
在路由配置中，嵌套路由使用 children 属性来指定，它是一个数组，其中每个元素都是一个路由对象，可以嵌套多层。
除了嵌套路由，Vue Router 4 还提供了命名路由的功能，它可以让我们为某个路由指定一个名称，并在程序中通过这个名称来进行导航。
在程序中，我们可以使用 $router.push({ name: 'AboutIndex' }) 来导航到 AboutIndex 路由，而不必使用路径字符串来指定路由。
*/

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
