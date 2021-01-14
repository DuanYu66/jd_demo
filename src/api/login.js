/**
 * Title: login
 * Author: 作者
 * Date: 2020-09-22 10:42:14
 * Description: API文档  登录
 * LastModifiedDate:2020-09-22 10:42:14
 * LastModifiedDescription: 修改描述
 */
import request from "@/utils/request";
import qs from "qs";

// const prefix = "v1"; // 可以在此处写"v1/"，自动拼接路径
// const api = {
//   list: `${prefix}/login/list`,
//   update: `${prefix}/login/update`,
//   delete: `${prefix}/login/delete`,
//   add:  `${prefix}/login/add`,
//   detail: `${prefix}/login/detail`
// };

// /**
//  * 获取列表
//  * @param {object} argsParams
//  * @param {number} argsParams.isDelete 是否删除状态 0-正常[default]|1-删除
//  * @note 备注
//  * @usage 使用示例
//  */
// function getLoginList(argsParams = {}) {
//   return http
//     .get(api.list, {
//       params: argsParams
//     })
//     .then(res => {
//       return Promise.resolve(res);
//     })
//     .catch(err => {
//       return Promise.reject(err);
//     });
// }

/**
 * 更新
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function updateLogin(argsParams = {}) {
  return http
    .put(api.update, argsParams)
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * 新增
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function addLogin(argsParams = {}) {
  return http
    .post(api.add, argsParams)
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * 删除
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function deleteLogin(argsParams = {}) {
  return http
    .delete(api.delete, { data: { ...argsParams } })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

/**
 * 获取详情
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
function getLoginDetail(argsParams = {}) {
  return http
    .get(api.detail, {
      params: argsParams,
    })
    .then((res) => {
      return Promise.resolve(res);
    })
    .catch((err) => {
      return Promise.reject(err);
    });
}

export default {
  getLoginList,
  updateLogin,
  addLogin,
  deleteLogin,
  getLoginDetail,
};
