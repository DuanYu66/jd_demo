/**
 * Title: CommonMutate
 * Author: 作者
 * Date: 2020-09-19 19:56:37
 * Description: 抽出公用改变state 的mutation
 * LastModifiedDate:2020-09-19 19:56:37
 * LastModifiedDescription: 修改描述
 * 使用步骤：
 * 1、在需要vuex中引入该方法
 *      import { commonMutate } from "./CommonMutate.js"
 * 2、将该方法挂载在使用的vuex中的mutations
 *      const mutations = { COMMON_MUTATE: commonMutate };
 * 3、使用
 *    3.1、改变state中的值  例如：const state = {userInfo: {name:"xxx",age:18,sex:'男'}};
 *        3.1.1、在页面中使用  this.$store.commit([模块名  如果vuex开启了命名空间则需要加上模块名，没有则可省略] + "COMMON_MUTATE", {property: '属性名', with: value})
 *             // 不写type会改变property属性所有的值
 *             this.$store.commit([模块名] + "COMMON_MUTATE", {
 *                 property: "userInfo", // 想要改变的state中的属性名
 *                 with: {name:"aaa",age:19,sex:'女'} // 要改变的值
 *             })
 *             -----------------------------------------------------
 *            // type："update", 会更新property属性指定的值。
 *             this.$store.commit([模块名] + "COMMON_MUTATE", {
 *                 property: "userInfo.name", // 想要改变的state中的属性名
 *                 type: "update"
 *                 with: "渣渣辉" // 要改变的值
 *             })
 *             -----------------------------------------------------
 *            // type："merge", 会合并已存在的值，如果有新属性则不生效。
 *             this.$store.commit([模块名] + "COMMON_MUTATE", {
 *                 property: "userInfo", // 想要改变的state中的属性名
 *                 type: "merge"
 *                 with: {age: 21, sex: "女"} // 要改变的值
 *             })
 *        3.1.2、在mutations中使用
 *             commonMutate(state, {
 *                 property: "userInfo.age", // 想要改变的state中的属性名
 *                 // 不写type会改变property属性所有的值。  update：更新property属性指定的值。  merge：合并已存在的值，如果有新属性会不生效
 *                 type: "update", // update|merge|null或者不写type属性
 *                 with: value // 要改变的值
 *             })
 *        3.1.3、在actions中使用
 *             commit("COMMON_MUTATE", {
 *                 property: "userInfo", // 想要改变的state中的属性名
 *                 // 不写type会改变property属性所有的值。  update：更新property属性指定的值。  merge：合并已存在的值，如果有新属性会不生效
 *                 type: "merge", // update|merge|null或者不写type属性
 *                 with: {age: 21, sex: "女"} // 要改变的值
 *             })
 */

import _ from "lodash";
// 抽出公用改变state 的mutation
const commonMutate = (state, payload) => {
  if (payload.type && payload.type === "merge") {
    // 注意，只能合并已存在的值，如果有新属性会不生效
    _.mergeWith(state[payload.property], payload.with, (objValue, srcValue) => {
      return srcValue;
    });
  } else if (payload.type && payload.type === "update") {
    // 更新值
    _.update(state, payload.property, () => {
      return payload.with;
    });
  } else {
    // 方法会改变property的所有的值，变成with
    _.set(state, payload.property, payload.with);
  }
};

export { commonMutate };
