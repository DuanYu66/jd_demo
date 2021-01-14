<template>
  <transition name="fade-transform" mode="out-in">
    <div class="request-loading-component" v-if="requestLoading">
      <svg-icon icon-class="loading" />
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RequestLoading',
  computed: {
    ...mapGetters([
      'requestLoading'
    ])
  }
}
</script>

<style lang='scss' scoped>
.request-loading-component {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  // background-color: rgba(48, 65, 86, 0.6);
  // background-color: rgba(0, 0, 0, 0.3);
  // filter: "Alpha(opacity=30)";
  // 给背景颜色添加模糊度
  // backdrop-filter: blur(2px);
  background-color: transparent;
  font-size: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 999999;
}
</style>
