<!--
 * @Author: your name
 * @Date: 2020-09-26 18:37:43
 * @LastEditTime: 2021-01-13 16:57:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\App.vue
-->
<template>
  <div id="app">
    <requestLoading />
    <transition :name="transitionName">
      <router-view />
    </transition>
    <tabbar />
  </div>
</template>

<script>
import requestLoading from '@/components/RequestLoading';
import Tabbar from '@/components/tabbar.vue';
import { mapState } from 'vuex';
import router from "./router";
export default {
  name: 'App',
  components: {
    requestLoading,
    Tabbar
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      // 通过 `vm` 访问组件实例
      console.log('vm == ', vm);
    });
  },
  beforeRouteUpdate(to, from, next) {
    // just use `this`
    console.log('beforeRouteUpdate to == ', to);
    next();
  },
  computed: {
    ...mapState({
      isTabbar: (state) => {
        console.log('isTabbar == ', state.isTabbar);
        return state['common'].isTabbar;
      }
    })
  },
  data() {
    return { transitionName: 'slide-left' };
  },
  // watch $route 决定使用哪种过渡
  watch: {
    $route(to, from) {
      //to、from是最基本的路由对象，分别表示从(from)某个页面跳转到(to)另一个页面,to.path（表示要跳转到的路由地址），from.path同理。
      const routerDeep = ['/', '/login', '/classify', '/search'];
      //找到to.path和from.path在routerDeep数组中的下标
      const toDepth = routerDeep.indexOf(to.path);
      const fromDepth = routerDeep.indexOf(from.path);
      this.transitionName = toDepth > fromDepth ? 'slide-left' : 'slide-right';
      // // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      // if (to.meta.index > from.meta.index) {
      //   //设置动画名称
      //   this.transitionName = 'slide-left';
      // } else {
      //   this.transitionName = 'slide-right';
      // }
    }
  },
  mounted() {
    console.log("router === ", router)
  }
};
</script>
<style lang="scss">
#app {
  // max-width: 768px;
  // width: 100vw;
  // height: auto;
  // background-image: url('./assets/img/bg_h5.png');
  // background-size: 100% 100%;
  .slide-right-enter-active,
  .slide-right-leave-active,
  .slide-left-enter-active,
  .slide-left-leave-active {
    will-change: transform;
    transition: all 500ms;
    position: absolute;
  }
  .slide-right-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    // transform: translate3d(-100vw, 0, 0);
  }
  .slide-right-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    // transform: translate3d(100vw, 0, 0);
  }
  .slide-left-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
    // transform: translate3d(100vw, 0, 0);
  }
  .slide-left-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
    // transform: translate3d(-100vw, 0, 0);
  }
}
</style>
