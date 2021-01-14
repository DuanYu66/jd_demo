<!--
 * @Author: your name
 * @Date: 2021-01-07 18:57:05
 * @LastEditTime: 2021-01-07 19:22:04
 * @LastEditors: Please set LastEditors
 * @Description: 猜你喜欢
 * @FilePath: \h5_1\src\views\home\guessLike.vue
-->
<template>
  <div class="guess-like">
    <main>
      <div class="title">
        <img src="../../assets/img/jd/cnxh.png" alt="" srcset="" />
      </div>
      <div class="container">
        <ul>
          <li v-for="(e, i) in 16" :key="i">
            <Commodity1></Commodity1>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
//  引入外部资源
import Commodity1 from '@/components/commodity1';
export default {
  name: 'GuessLike',
  mixins: [],
  components: { Commodity1 },
  props: {},
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
.guess-like {
  main {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      height: 35px;
      position: relative;
      img {
        width: 100%;
      }
    }
    .container {
      padding: 0 10px;
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          background-color: #fff;
          flex: 1;
          margin-right: 10px;
          margin-bottom: 10px;
          padding: 5px 0;
          position: relative;
          border-radius: 8px;
          &:nth-child(2n) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
