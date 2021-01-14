
/**
 * Title: base
 * Author: 作者
 * Date: 2020-09-22 11:17:35
 * Description: API文档
 * LastModifiedDate:2020-09-22 11:17:35
 * LastModifiedDescription: 修改描述
 */
import request from '@/utils/request';
import qs from 'qs';

/**
 * 密码登入
 * @param {object} argsParams
 * @note 备注
 * @usage 使用示例
 */
export function loginByPwd(param) {
  return request({
    baseURL: "/api",
    url: '/system/user/login',
    method: 'post',
    data: qs.stringify(param)
  });
}

export function register(param) {
  return request({
    baseURL: "/api",
    url: '/system/user/register',
    method: 'post',
    data: qs.stringify(param)
  });
}

export function personalInfo(param) {
  return request({
    baseURL: "/api",
    url: '/system/user/personalDetails',
    method: 'post',
    data: qs.stringify(param)
  });
}
