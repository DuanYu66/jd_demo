<!--
 * @Author: your name
 * @Date: 2020-12-14 13:59:21
 * @LastEditTime: 2021-01-06 16:39:20
 * @LastEditors: Please set LastEditors
 * @Description: 商品展示
 * @FilePath: \h5_1\src\components\commodity.vue
-->
<template>
  <div class="commodity">
    <main>
      <div class="commodity-title">
        <h2>{{ merchandise.title }}</h2>
        <p>{{ merchandise.describe }}</p>
      </div>
      <div class="commodity-img" :class="[`imgNum${imgNum}`]">
        <img
          v-for="(item, index) in merchandise.imgs"
          :key="index"
          :src="item"
          alt=""
          srcset=""
        />
      </div>
    </main>
  </div>
</template>
<script>
//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: 'Commodity',
  mixins: [],
  components: {},
  props: {
    merchandise: Object,
    imgNum: {
      type: [String, Number],
      default: 1
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    test() {
      console.log('Hello World!');
    }
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {}
};
</script>
<style lang="scss" scoped>
.commodity {
  height: 100%;
  main {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .commodity-title {
      height: 41px;
      padding-left: 10px;
      h2 {
        font-size: 16px;
        line-height: 23px;
      }
      p {
        color: #666771;
        line-height: 18px;
        font-size: 12px;
      }
    }
    .commodity-img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      padding: 0 14px;
      // background-color: darkorange;
      img {
        width: 60px;
        height: 60px;
        margin-left: 12px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
}
</style>
