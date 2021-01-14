/*
 * @Author: your name
 * @Date: 2020-09-26 18:37:43
 * @LastEditTime: 2021-01-11 10:48:00
 * @LastEditors: Please set LastEditors
 * @Description: 存储公共状态
 * @FilePath: \h5_1\src\store\modules\common.js
 */
import { commonMutate } from './CommonMutate.js';
const state = {
  requestLoading: 0, // 全局loading显隐
  isTabbar: false // 首页底部tabbar是否显示
};

const getters = {};

const mutations = {
  COMMON_MUTATE: commonMutate,
  SET_LOADING: (state, status) => {
    // error 的时候直接重置
    if (status === 0) {
      state.requestLoading = 0;
      return;
    }
    state.requestLoading = status
      ? ++state.requestLoading
      : --state.requestLoading;
  },
  set_isTabbar: (state, status) => {
    state.isTabbar = status;
  }
};

const actions = {
  SetLoading({ commit }, status) {
    commit('SET_LOADING', status);
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
