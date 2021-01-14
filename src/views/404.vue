<template>
  <div class="nonentity">
    <div>
      <h2>OOPS!</h2>
      <h3>您所请求的页面不存在</h3>
      <p>请点击以下按钮返回首页</p>
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
</template>
<script>
//  常量声明
const value = { msg: "Hello World!" };

//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: "404",
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      //  常量
      value,
      //  状态
      flag: true,
      //  变量
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
  created() {},
  mounted() {},
  destoryed() {},
};
</script>
<style lang="scss" scoped>
.nonentity {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  div {
    margin: auto;
    text-align: center;
    line-height: 35px;
    h2 {
      font-size: 32px;
      color: #1482f0;
    }
    h3 {
      font-size: 20px;
      color: #222;
    }
    p {
      color: grey;
    }
    a {
      line-height: 20px;
      border: 1px solid #409EFF;
      border-radius: 4px;
      padding: 3px 5px;
      color: #FFF;
      text-decoration:none;
      background-color: #409EFF;
    }
  }
}
</style>
