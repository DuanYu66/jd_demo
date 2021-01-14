<!--
 * @Author: your name
 * @Date: 2020-11-19 10:56:23
 * @LastEditTime: 2020-12-14 13:46:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \official_website_H5\src\components\swipe.vue
-->
<template>
  <div class="swipe1">
    <div class="swipe-box">
      <ul>
        <!-- <li class="floor-item">
          <img class="floor-item-bg" src="" alt="" srcset="" />
          <div class="floor-item-sku-wrap">
            <div class="floor-item-sku-wrap-inner bg_stamp">
              <img class="floor-item-sku" src="" alt="" srcset="" />
            </div>
          </div>
          <div class="floor-item-subtitle">
            <div class="text"></div>
          </div>
          <div class="floor-item-title"></div>
        </li> -->
      </ul>
    </div>
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
  props: {},
  data() {
    return {
      list: [
        {
          id: 1,
          title: '国际奢品',
          hiht: '低至3折',
          imgUrl: require('@/assets/img/jd/bk1.webp')
        },
        {
          id: 2,
          title: '国际奢品',
          hiht: '低至3折',
          imgUrl: require('@/assets/img/jd/bk2.webp')
        },
        {
          id: 3,
          title: '国际奢品',
          hiht: '低至3折',
          imgUrl: require('@/assets/img/jd/bk3.webp')
        },
        {
          id: 4,
          title: '国际奢品',
          hiht: '低至3折',
          imgUrl: require('@/assets/img/jd/bk4.webp')
        },
        {
          id: 5,
          title: '国际奢品',
          hiht: '低至3折',
          imgUrl: require('@/assets/img/jd/bk5.webp')
        },
        {
          id: 6,
          title: '国际奢品',
          hiht: '低至3折',
          imgUrl: require('@/assets/img/jd/bk6.dpg')
        },
        // {
        //   id: 7,
        //   title: '国际奢品',
        //   hiht: '低至3折',
        //   imgUrl: require('@/assets/img/jd/bk7.webp')
        // }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.swipe1 {
  height: 100px;
  background-color: darkorange;
}
</style>
