/*
 * @Author: your name
 * @Date: 2020-09-26 18:37:43
 * @LastEditTime: 2020-12-09 11:02:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\.eslintrc.js
 */
// module.exports = {
//   root: true,
//   env: {
//     node: true
//   },
//   extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
//   parserOptions: {
//     parser: "babel-eslint"
//   },
//   rules: {
//     "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
//     "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
//   },
//   overrides: [
//     {
//       files: [
//         "**/__tests__/*.{j,t}s?(x)",
//         "**/tests/unit/**/*.spec.{j,t}s?(x)"
//       ],
//       env: {
//         jest: true
//       }
//     }
//   ]
// };

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended'
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/order-in-components': 'off',
    'vue/require-default-prop': 'off',
    // "quotes": ["error", "single"],
    'prettier/prettier': ['error', { singleQuote: true }],
    'vue/attributes-order': 'off',
    'vue/v-on-style': 'off',
    'no-irregular-whitespace': 'off',
    'vue/no-v-html': 'off',
    'no-useless-escape': 'off'
  }
};
