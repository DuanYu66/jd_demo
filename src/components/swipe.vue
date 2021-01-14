<!--
 * @Author: your name
 * @Date: 2020-11-19 10:56:23
 * @LastEditTime: 2020-12-09 10:54:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official_website_H5\src\components\swipe.vue
-->
<template>
  <div class="swipe">
    <van-swipe :autoplay="3000" indicator-color="white" class="sw-center">
      <van-swipe-item v-for="(item, index) in list" :key="index">
        <img class="swipe-img" :src="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  name: 'swipe',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  props: {
    list: Array
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.swipe {
  height: 140px;
  .van-swipe {
    height: 100%;
    border-radius: 6px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
