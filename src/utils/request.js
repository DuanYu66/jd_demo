/*
 * @Author: your name
 * @Date: 2020-10-03 16:48:37
 * @LastEditTime: 2020-11-14 19:36:00
 * @LastEditors: Please set LastEditors
 * @Description: axios封装api
 * @FilePath: \h5_1\src\utils\request.js
 */

import axios from "axios";
import store from "@/store";
import {getToken} from "@/utils/auth";

// 创建axios 实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 10000, // 请求超时时间
});

// request 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 这里可以自定义一些config 配置
    console.log("请求拦截器----", config);
    // loading + 1
    // store.dispatch("common/SetLoading", true);
    config.headers.common["token"] = getToken();
    return config;
  },
  (error) => {
    //  这里处理一些请求出错的情况

    console.log("请求拦截器错误----", error);
    // loading 清 0
    // setTimeout(function() {
    //   store.dispatch("common/SetLoading", 0);
    // }, 300);
    console.log(error);
    Promise.reject(error);
  }
);

// response 响应拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // 这里处理一些response 正常放回时的逻辑
    console.log("响应拦截器----", response);
    // loading - 1
    // store.dispatch("common/SetLoading", false);
    return res;
  },
  (error) => {
    // 这里处理一些response 出错时的逻辑

    console.log("响应拦截器错误----", error);
    // loading - 1
    // store.dispatch("common/SetLoading", false);
    return Promise.reject(error);
  }
);

export default service;
