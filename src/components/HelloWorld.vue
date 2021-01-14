<!--
 * @Author: your name
 * @Date: 2020-09-26 18:37:43
 * @LastEditTime: 2020-11-11 20:02:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\components\HelloWorld.vue
-->
<template>
  <div class="HelloWorld">
    <svg-icon icon-class="home" />
    <svg-icon icon-class="home1" />
    
    <ul>
      <!-- <li v-for="(item, index) in list" :key="index">
        <img v-lazy="item" alt="" srcset="" />
      </li> -->
      <li>
        <!-- <img :src="imgSrc" alt="" srcset=""> -->
      </li>
    </ul>
  </div>
</template>
<script>
//  常量声明
const value = { msg: "Hello World!" };
const vuexModuleName = "HelloWorld";
//  引入外部资源
// import someThing from 'SomeThing';
import HelloWorldVuex from "@/store/modules/HelloWorld.js";
export default {
  name: "HelloWorld",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      vuexModuleName,
      list: [],
      
    };
  },
  computed: {},
  watch: {},
  methods: {
    test() {
      console.log("Hello World!");
    },
  },
  filters: {},
  created() {
    // ========= 动态注册vuex状态模块 start =========
    let store = this.$store;
    if (!(store && store.state && store.state[this.vuexModuleName])) {
      store.registerModule(this.vuexModuleName, HelloWorldVuex);
    }
    // ========= 动态注册vuex状态模块 end =========

    for (let i = 1; i < 57; i++) {
      let str = require(`../assets/${i}.jpg`);
      this.list.push(str);
    }

    console.log(this.$store);
    // loginByPwd({ username: "duanyu88", passwd: this.$md5("a888888"),first_name: '1234', last_name: '1' }).then(
    //   (res) => {
    //     console.log("res=== ", res);
    //   }
    // );
  },
  mounted() {},
  destoryed() {},
};
</script>
<style lang="scss" scoped>
.HelloWorld {
  .svg-icon {
    color: #d6195f;
    font-size: 100px;
  }

  ul {
    li img {
      width: 100%;
      height: auto;
      display: block;
    }
  }
}
</style>
