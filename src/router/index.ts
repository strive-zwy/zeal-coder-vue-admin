import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import AboutMe from '../views/AboutMe.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta:{index:0},//meta对象的index用来定义当前路由的层级,由小到大,由低到高
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutMe',
    meta:{index:1},
    name: 'AboutMe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutMe
  },
  {
    path: '/message',
    meta:{index:2},
    name: 'Message',
    component: () => import(/* webpackChunkName: "about" */ '../views/Message.vue')
  },
  {
    path: '/blog',
    meta:{index:3},
    name: 'Blog',
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
