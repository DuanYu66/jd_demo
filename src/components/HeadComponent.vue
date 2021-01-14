<!--
 * @Author: your name
 * @Date: 2020-11-20 09:53:39
 * @LastEditTime: 2021-01-08 10:00:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\components\HeadComponent.vue
-->
<template>
  <div class="head-component">
    <div class="nav-bar">
      <div class="left" @click="clickLeft">
        <slot name="left"> <span v-if="leftArrow"></span> {{ leftText }} </slot>
      </div>
      <div class="middle" @click="clickMiddle">
        <slot>
          <span v-if="title" class="title">{{ title }}</span>
          <main v-else class="search">
            <p>
              <span v-if="jdIcon"></span>
              <i></i>
              <input v-model="value" placeholder="请输入查询内容" />
            </p>
          </main>
        </slot>
      </div>
      <div class="right" @click="clickRight">
        <slot name="right">
          <span v-if="!rightText"></span> {{ rightText }}
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
//  引入外部资源
export default {
  name: 'HeadComponent',
  mixins: [],
  components: {},
  props: {
    title: String,
    leftText: String,
    rightText: String,
    leftArrow: Boolean,
    jdIcon: Boolean
  },
  data() {
    return {
      value: ''
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickLeft() {
      this.$emit('clickLeft');
      console.log('点击了左边');
      if (this.leftArrow) {
        this.$router.go(-1);
      }
    },
    clickRight() {
      this.$emit('clickRight');
      console.log('点击了右边');
    },
    clickMiddle() {
      this.$emit('clickMiddle');
      console.log('点击了中间');
    }
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {}
};
</script>
<style lang="scss" scoped>
.head-component {
  background-color: #fff;
  box-shadow: 0 0 5px 0 #ccc;
  // width: 100%;
  height: 44px;
  .nav-bar {
    width: 100%;
    height: 44px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    z-index: 9999;
    .left {
      min-width: 40px;
      // background-color: rgb(184, 45, 45);
      display: flex;
      align-items: center;
      padding: 12px 0 12px 12px;
      font-size: 13px;
      color: #909399;
      span {
        display: inline-flex;
        width: 20px;
        height: 20px;
        background-image: url('../assets/img/jd/jd-sprites.png');
        background-position: -18rem 1rem;
        background-size: 180rem 180rem;
        // background-color: #fff;
      }
    }
    .middle {
      flex: 1;
      // background-color: rgb(147, 184, 45);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px;
      .title {
        font-weight: bold;
        font-size: 14px;
        color: #323233;
      }
      .search {
        width: 100%;
        height: 30px;
        background-color: #fff;
        border-radius: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 15px;
        }
        span,
        i {
          display: inline-flex;
          width: 20px;
          height: 20px;
          background-size: 180rem 180rem;
          margin-right: 5px;
        }
        span {
          background-image: url('../assets/img/jd/jd-sprites.png');
          background-position: 1px 3px;
          position: relative;
          &::before {
            content: '';
            border-right: 1px solid #ddd;
            position: absolute;
            right: -5px;
            top: 2px;
            height: 16px;
          }
        }
        i {
          background-image: url('../assets/img/jd/jd-sprites.png');
          background-position: -71px 4px;
        }
        input {
          background: none;
          outline: none;
          border: none;
          flex: 1;
        }
      }
    }
    .right {
      min-width: 40px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 12px 12px 12px 0;
      font-size: 13px;
      color: #ffffff;
      span {
        display: inline-flex;
        width: 20px;
        height: 20px;
        // background-image: url('../assets/img/jd/list2.png');
        // background-repeat: no-repeat;
        // background-size: 20px;
        // background-position: center;
      }
    }
  }
}
</style>
