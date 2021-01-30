<!--
 * @Author: your name
 * @Date: 2020-12-09 13:56:27
 * @LastEditTime: 2021-01-30 14:02:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\components\tabbar.vue
-->
<template>
  <div class="tabbar">
    <ul>
      <li
        v-for="item in tabberList"
        :key="item.id"
        :class="{ 'tabbar-item-active': active == item.id }"
        @click="changeTab(item)"
      >
        <a><img :src="active == item.id ? item.activeIcon : item.icon" /></a>
      </li>
    </ul>
  </div>
</template>
<script>
//  引入外部资源
export default {
  name: 'Tabbar',
  mixins: [],
  components: {},
  props: {},
  data() {
    return {
      active: 1,
      tabberList: [
        {
          id: 1,
          name: '首页',
          path: '/',
          icon: require('@/assets/img/jd/nav-bar0.png'),
          activeIcon: require('@/assets/img/jd/nav-bar-active0.png')
        },
        {
          id: 2,
          name: '分类',
          path: '/classify',
          icon: require('@/assets/img/jd/nav-bar1.png'),
          activeIcon: require('@/assets/img/jd/nav-bar-active1.png')
        },
        {
          id: 3,
          name: '惊喜',
          path: '/',
          icon: require('@/assets/img/jd/nav-bar2.png'),
          activeIcon: require('@/assets/img/jd/nav-bar2.png')
        },
        {
          id: 4,
          name: '购物车',
          path: '/',
          icon: require('@/assets/img/jd/nav-bar3.png'),
          activeIcon: require('@/assets/img/jd/nav-bar-active3.png')
        },
        {
          id: 5,
          name: '我的JD',
          path: '/login',
          icon: require('@/assets/img/jd/nav-bar4.png'),
          activeIcon: require('@/assets/img/jd/nav-bar4.png')
        }
      ]
    };
  },
  computed: {},
  watch: {
    $route: {
      handler(to, from) {
        console.log(to, from);
        this.active = to.meta.tabbarIndex;
      },
      immediate: true
    }
  },
  methods: {
    changeTab(e) {
      if (this.active == e.id) return;
      this.active = e.id;
      this.$router.push(e.path);
    }
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {}
};
</script>
<style lang="scss" scoped>
.tabbar {
  width: 100%;
  height: 50px;
  // background-color: #f6f6f6;
  background-color: transparent;
  ul {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 10px 0 hsla(0, 6%, 58%, 0.6);
    li,
    a {
      height: 100%;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: inline-flex;
        height: 100%;
        width: 60px;
      }
    }
  }
}
</style>
