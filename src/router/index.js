// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import About from '../components/AboutPage.vue'
import Search from '../components/SearchPage.vue'
import Result from '../components/ResultPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
    props: (route) => {return{
      keyword: route.query.keyword,
      category: route.query.category
    }}// 把keyword、category注入到组件属性中
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const { params, query, fullPath, hash } = to

  console.log('--- Navigation Parsing ---')
  console.log(`From: ${from.fullPath}`)
  console.log(`To: ${fullPath}`)
  console.log(`Route Name: ${to.name}`)
  console.log(`Route Params:`, params)
  console.log(`Query Params:`, query)
  console.log(`Hash: ${hash}`)

  next()
})

export default router
