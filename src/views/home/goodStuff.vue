<!--
 * @Author: your name
 * @Date: 2020-12-10 10:54:38
 * @LastEditTime: 2020-12-10 14:00:38
 * @LastEditors: Please set LastEditors
 * @Description: 来电好货
 * @FilePath: \h5_1\src\views\home\goodStuff.vue
-->
<template>
  <div class="good-stuff">
    <ul>
      <li v-for="item in list" :key="item.id">
        <h2>{{ item.title }}</h2>
        <span>{{ item.name }}</span>
        <img :src="item.icon" alt="" srcset="" />
      </li>
    </ul>
  </div>
</template>
<script>
//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: 'GoodStuff',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      list: [
        {
          id: 1,
          title: '',
          name: '正品直邮',
          icon: require('@/assets/img/jd/hh1.dpg')
        },
        {
          id: 2,
          title: '来电好货',
          name: '3C大放价',
          icon: require('@/assets/img/jd/hh2.dpg')
        },
        {
          id: 3,
          title: '国潮风尚',
          name: '国货正当时',
          icon: require('@/assets/img/jd/hh3.dpg')
        },
        {
          id: 4,
          title: '',
          name: '都是你爱的',
          icon: require('@/assets/img/jd/hh4.dpg')
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
.good-stuff {
  padding: 5px 10px;
  ul {
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    height: 120px;
    border-radius: 2px;
    box-shadow: 0 0 5px 0 #ccc;
    li {
      flex: 1;
      border-right: 1px solid rgba(204, 204, 204, 0.274);
      padding: 6px 0 6px 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      &:last-child {
        border-right: none;
      }
      h2 {
        height: 24px;
        line-height: 24px;
      }
      span {
        color: #222222;
      }
      img {
        width: 60px;
        height: 60px;
        margin-left: 4px;
      }
    }
  }
}
</style>
