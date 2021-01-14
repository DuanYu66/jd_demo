<!--
 * @Author: your name
 * @Date: 2020-11-13 15:05:04
 * @LastEditTime: 2020-12-08 14:10:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\views\login\index.vue
-->
<template>
  <div class="login-index">
    <div class="bg-img"></div>
    <div class="login-form">
      <van-tabs v-model="activeName" animated>
        <van-tab
          v-for="(item, index) in ['登录', '注册']"
          :key="index"
          :title="item"
        >
          <van-form @submit="onSubmit">
            <van-field
              v-model="userName"
              name="userName"
              icon="location-o"
              label="用户名"
              placeholder="请输入用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="请输入密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <van-field
              v-if="activeName == 1"
              v-model="password"
              type="password"
              name="password"
              label="确认密码"
              placeholder="请输入密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 25px 15px 15px">
              <van-button
                round
                block
                type="info"
                size="normal"
                :loading-text="activeName == 1 ? '注册中...' : '登录中...'"
                :loading="loginBtn"
                native-type="submit"
              >
                {{ activeName == 1 ? '注册' : '登录' }}
              </van-button>
            </div>
          </van-form>
        </van-tab>
      </van-tabs>
    </div>
    <!-- <div class="login-btn">
      <van-button
        round
        block
        type="info"
        size="normal"
        loading-text="加载中..."
        :loading="false"
        native-type="submit"
        @click="login"
      >
        {{ activeName == 1 ? "注册" : "登录" }}
      </van-button>
    </div> -->
    <div class="login-quick">
      <p>快速登录</p>
      <ul>
        <li v-for="index in 3" :key="index"><span></span></li>
      </ul>
    </div>
  </div>
</template>
<script>
//  引入外部资源
// import someThing from 'SomeThing';
import { Tab, Tabs, Form, Button, Field } from 'vant';
import { personalInfo, loginByPwd } from '@/api/base';
import { setToken } from '@/utils/auth';
export default {
  name: 'LoginIndex',
  mixins: [],
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Form.name]: Form,
    [Field.name]: Field,
    [Button.name]: Button
  },
  props: {},
  data() {
    return {
      activeName: '1',
      userName: '',
      password: '',
      loginBtn: false
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit(values) {
      console.log('submit', values);
      this.loginBtn = true;
      let data = {
        username: values.userName,
        password: values.password
      };
      loginByPwd(data)
        .then((res) => {
          if (res.success == 1) {
            console.log(res);
            setToken(res.content.token);
            this.$router.push('/');
          }
          this.loginBtn = false;
        })
        .catch((err) => {
          this.loginBtn = false;
        });
    }
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {}
};
</script>
<style lang="scss" scoped>
.login-index {
  width: 100vw;
  height: 100vh;
  position: relative;
  .bg-img {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    filter: brightness(0.5);
    background-image: url('../../assets/9.jpg');
    background-size: 100% 100%;
  }
  .login-form {
    padding: 150px 15px 20px 15px;
    /deep/ .van-tabs.van-tabs--line {
      // padding-bottom: 40px;
      background-color: #fff;
      border-radius: 10px 10px 10px 10px;
      .van-tabs__wrap {
        border-radius: 10px 10px 0 0;
        margin-bottom: 10px;
        .van-tab {
          flex: auto;
          width: 60px;
        }
      }
    }
  }
  .login-btn {
    padding: 0 40px;
  }
  .login-quick {
    padding: 30px 15px;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 130px;
    display: flex;
    flex-direction: column;
    p {
      color: #fff;
      line-height: 20px;
      font-size: 14px;
    }
    ul {
      flex: 1;
      display: flex;
      justify-content: center;
      padding: 0 50px;
      margin-top: 15px;
      li {
        flex: 1;
        display: flex;
        justify-items: center;
        align-items: center;
        span {
          display: inline-flex;
          width: 30px;
          height: 30px;
          margin: auto;
          border-radius: 50%;
          background-color: #fff;
        }
      }
    }
  }
}
</style>
