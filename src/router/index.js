/*
 * @Author: your name
 * @Date: 2020-09-26 18:37:43
 * @LastEditTime: 2021-01-16 19:48:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\router\index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index.vue';
import Login from '../views/login/login.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/404', component: () => import('@/views/404') },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/enroll',
    name: 'enroll',
    component: () =>
      import(/* webpackChunkName: "login" */ '@/views/login/enroll.vue')
  },
  {
    path: '/countriesRegions',
    name: 'countriesRegions',
    component: () =>
      import(
        /* webpackChunkName: "login" */ '@/views/login/countriesRegions.vue'
      )
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      tabbar: true, // 首页底部标签栏
      tabbarIndex: 1 //
    }
  },
  {
    path: '/classify',
    name: 'classify',
    // route level code-splitting
    // this generates a separate chunk (classify.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "classify" */ '@/views/classify/classify.vue'
      ),
    meta: {
      tabbar: true, // 首页底部标签栏
      tabbarIndex: 2 //
    }
  },
  {
    path: '/search',
    name: 'search',
    component: () =>
      import(/* webpackChunkName: "search" */ '@/components/search.vue')
  },
  { path: '*', redirect: '/404' }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
