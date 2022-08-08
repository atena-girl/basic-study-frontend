import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import selectComponent from "@/views/selectComponent";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/selectComponent',
    name: 'selectComponent',
    component: selectComponent
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const index = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default index
