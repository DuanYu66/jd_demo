/*
 * @Author: your name
 * @Date: 2020-09-26 18:37:43
 * @LastEditTime: 2021-01-11 11:23:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\utils\permission.js
 */
/**
 * Title: permission
 * Author: 作者
 * Date: 2020-09-21 19:15:17
 * Description: 路由权限控制
 * LastModifiedDate:2020-09-21 19:15:17
 * LastModifiedDescription: 修改描述
 */
import router from '@/router';
import store from '@/store';
import { getToken } from './auth';
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'; // 进度条样式
// import {
//   Message
// } from 'element-ui'

const whiteList = ['/login']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.tabbar) {
    store.state.isTabbar = to.meta.tabbar;
  }
  next();
  // NProgress.start();
  // if (getToken()) {
  //   if (to.path === "/login") {
  //     next({
  //       path: "/",
  //     });
  //     NProgress.done();
  //   } else {
  //     // 实时拉取用户的信息
  //     store
  //       .dispatch("GetUserInfo")
  //       .then((res) => {
  //         next();
  //       })
  //       .catch((err) => {
  //         store.dispatch("FedLogOut").then(() => {
  //           // Message.error('拉取用户信息失败，请重新登录！' + err)
  //           console.log("拉取用户信息失败，请重新登录！" + err);
  //           next({
  //             path: "/",
  //           });
  //         });
  //       });
  //   }
  // } else {
  //   if (whiteList.includes(to.path)) {
  //     next();
  //   } else {
  //     next("/login");
  //     NProgress.done();
  //   }
  // }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
