<!--
 * @Author: your name
 * @Date: 2021-01-15 10:01:38
 * @LastEditTime: 2021-01-18 10:04:04
 * @LastEditors: Please set LastEditors
 * @Description: 登录
 * @FilePath: \jd_demo\src\views\login\login.vue
-->
<template>
  <div class="login">
    <HeadComponent title="京东登录注册" @clickLeft="clickLeft">
      <template #left>
        <span></span>
      </template>
    </HeadComponent>
    <div class="login-form">
      <div class="form-item">
        <div class="item-input">
          <p v-show="!loginType" @click="toCountriesRegions">
            <span> 999 </span>
            <van-icon name="arrow-down" />
          </p>
          <van-field
            v-model="value"
            clearable
            :placeholder="loginType ? '用户名/邮箱/手机号' : '请输入手机号'"
          />
          <!-- <van-icon name="cross" /> -->
        </div>
      </div>
      <div class="form-item">
        <div class="item-input">
          <van-field
            v-model="value"
            clearable
            :type="isPassword && loginType ? 'password' : 'text'"
            :placeholder="loginType ? '请输入密码' : '请输入收到的验证码'"
          />
          <!-- <van-icon name="cross" /> -->
          <span
            class="eye-box"
            v-show="loginType"
            @click="isPassword = !isPassword"
          >
            <van-icon :name="isPassword ? 'closed-eye' : 'eye-o'" />
          </span>
        </div>
        <div class="item-forget">
          {{ loginType ? '忘记密码' : '获取验证码' }}
        </div>
      </div>
      <div class="form-submit">
        <van-button
          round
          type="info"
          disabled
          size="large"
          color="linear-gradient(to right, #ee0a24, #ff6034)"
          >登录</van-button
        >
        <van-button round plain hairline disabled size="large" type="info"
          >一键登录</van-button
        >
      </div>
      <div class="form-cut">
        <p @click="typeCut">
          {{ loginType ? '短信验证码登录' : '账号密码登录' }}
        </p>
        <p @click="toEnroll">手机快速注册</p>
      </div>
      <div class="form-footer">
        <van-divider>其他登录方式</van-divider>
        <ul>
          <li>
            <span></span>
            <p>QQ</p>
          </li>
          <li>
            <span></span>
            <p>微信</p>
          </li>
          <li>
            <span></span>
            <p>苹果</p>
          </li>
        </ul>
        <p>
          <span>未注册的手机号验证后将自动创建京东账号, </span>
          登录即代表您已同意
          <a href="">京东隐私政策</a>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon, Button, Divider, Field } from 'vant';

//  引入外部资源
import HeadComponent from '@/components/HeadComponent.vue';
export default {
  name: 'Login',
  mixins: [],
  components: {
    HeadComponent,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [Divider.name]: Divider,
    [Field.name]: Field
  },
  props: {},
  data() {
    return {
      value: '',
      isPassword: false,
      loginType: true // true 为账号密码登录，反之为手机号登录
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickLeft() {
      this.$router.go(-1);
    },
    typeCut() {
      this.loginType = !this.loginType;
    },
    toCountriesRegions() {
      this.$router.push('/countriesRegions');
    },
    toEnroll() {
      this.$router.push('/enroll');
    }
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {}
};
</script>
<style lang="scss" scoped>
.login {
  ::v-deep .head-component {
    .nav-bar {
      background-color: #ffffff;
      border-bottom: 1px solid rgba(153, 153, 153, 0.308);
    }
    .middle .title {
      font-size: 16px;
    }
  }
  .login-form {
    padding: 0 20px;
    .form-item {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ebedf0;
      height: 40px;
      .item-input {
        display: flex;
        justify-content: space-between;
        flex: 1;
        // padding-right: 15px;
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-right: 10px;
          span {
            padding: 0 8px;
          }
        }
        ::v-deep .van-cell {
          flex: 1;
          padding: 0;
          &::after {
            border: none;
          }
        }
        .van-icon.van-icon-cross,
        .eye-box {
          width: 24px;
          display: flex;
          justify-content: center;
          align-items: center;
          &::before {
            font-size: 16px;
            color: #ccc;
          }
        }
        .eye-box {
          margin-left: 5px;
          .van-icon {
            &::before {
              font-size: 16px;
              color: #ccc;
            }
          }
        }
      }
      .item-forget {
        padding: 0 20px;
        font-size: 14px;
        line-height: 24px;
        border-left: 1px solid #ccc;
        margin-left: 15px;
      }
    }
    .form-submit {
      display: flex;
      flex-direction: column;
      margin-top: 5px;
      ::v-deep .van-button {
        margin-top: 10px;
      }
    }
    .form-cut {
      display: flex;
      justify-content: space-between;
      line-height: 50px;
      margin-bottom: 60px;
      font-size: 14px;
      color: rgba(0, 0, 0, 0.3);
    }
    .form-footer {
      ul {
        display: flex;
        justify-content: center;
        margin: 20px 0;
        li {
          margin-right: 20px;
          width: 48px;
          &:last-child {
            margin-right: 0;
          }
          span {
            display: inline-flex;
            width: 48px;
            height: 48px;
            // border: 1px solid #cccccc;
            border-radius: 50%;
            margin-bottom: 5px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100%;
          }

          &:nth-child(1) {
            span {
              background-image: url('../../assets/img/jd/QQ.png');
            }
          }
          &:nth-child(2) {
            span {
              background-image: url('../../assets/img/jd/weixin.png');
            }
          }
          &:nth-child(3) {
            span {
              background-image: url('../../assets/img/jd/pingguo.png');
            }
          }
        }
      }
      p {
        text-align: center;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.3);
        line-height: 20px;
      }
    }
  }
}
</style>
