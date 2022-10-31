import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CommonComponentsTestView from "@/views/board/CommonComponentsTestView";
import SignUpView from "@/views/account/SignUpView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/common-components',
    name: 'CommonComponentsTestView',
    component: CommonComponentsTestView
  },
  {
    path: '/sign-up',
    name: 'SignUpView',
    component: SignUpView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
