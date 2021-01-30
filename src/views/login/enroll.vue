<!--
 * @Author: your name
 * @Date: 2021-01-15 19:12:06
 * @LastEditTime: 2021-01-16 09:06:01
 * @LastEditors: Please set LastEditors
 * @Description: 京东注册
 * @FilePath: \jd_demo\src\views\login\enroll.vue
-->
<template>
  <div class="enroll">
    <HeadComponent title="京东注册" @clickLeft="clickLeft">
      <template #left>
        <span></span>
      </template>
    </HeadComponent>
    <div class="enroll-form">
      <div class="form-item">
        <div class="item-input">
          <p @click="toCountriesRegions">
            <span> 999 </span>
            <van-icon name="arrow-down" />
          </p>
          <van-field v-model="value" clearable placeholder="请输入手机号" />
          <!-- <van-icon name="cross" /> -->
        </div>
      </div>
      <div class="form-submit">
        <van-button
          round
          type="info"
          disabled
          size="large"
          color="linear-gradient(to right, #ee0a24, #ff6034)"
          >下一步</van-button
        >
      </div>
    </div>
  </div>
</template>
<script>
//  引入外部资源
import HeadComponent from '@/components/HeadComponent.vue';
import { Icon, Button, Divider, Field } from 'vant';
export default {
  name: 'Enroll',
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
      value: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickLeft() {
      this.$router.go(-1);
    },
    toCountriesRegions() {
      this.$router.push('/countriesRegions');
    }
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {}
};
</script>
<style lang="scss" scoped>
.enroll {
  width: 100vw;
  ::v-deep .head-component {
    .nav-bar {
      background-color: #ffffff;
      border-bottom: 1px solid rgba(153, 153, 153, 0.308);
    }
    .middle .title {
      font-size: 16px;
    }
  }
  .enroll-form {
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
        margin-top: 60px;
      }
    }
  }
}
</style>
