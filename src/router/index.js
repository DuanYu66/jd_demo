/*
 * @Author: your name
 * @Date: 2020-09-26 18:37:43
 * @LastEditTime: 2021-01-09 16:31:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\router\index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index.vue';
import Login from '../views/login/index.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/404', component: () => import('@/views/404') },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      tabbar: true // 首页底部标签栏
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
      tabbar: true // 首页底部标签栏
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
