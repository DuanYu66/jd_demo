<!--
 * @Author: your name
 * @Date: 2020-12-10 18:41:56
 * @LastEditTime: 2020-12-10 19:17:41
 * @LastEditors: Please set LastEditors
 * @Description: 新人专享
 * @FilePath: \h5_1\src\views\home\newExclusive.vue
-->
<template>
  <div class="new-exclusive">
    <ul>
      <li v-for="item in list" :key="item.id">
        <img :src="item.icon" alt="" srcset="" />
      </li>
    </ul>
    <div class="card">
      <img src="../../assets/img/jd/xr3.dpg" alt="" srcset="" />
    </div>
  </div>
</template>
<script>
//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: 'NewExclusive',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          id: 1,
          icon: require('@/assets/img/jd/xr1.dpg'),
          path: ''
        },
        {
          id: 2,
          icon: require('@/assets/img/jd/xr2.dpg'),
          path: ''
        }
      ]
    };
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
.new-exclusive {
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ul {
    height: 120px;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    li {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .card {
    height: 50px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
