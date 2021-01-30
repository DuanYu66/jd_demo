<!--
 * @Author: your name
 * @Date: 2021-01-15 16:06:38
 * @LastEditTime: 2021-01-15 17:29:47
 * @LastEditors: Please set LastEditors
 * @Description: 国家与地区
 * @FilePath: \jd_demo\src\views\login\countriesRegions.vue
-->
<template>
  <div class="countries-regions">
    <HeadComponent title="选择国家或者地区" @clickLeft="clickLeft">
      <template #left>
        <span></span>
      </template>
    </HeadComponent>
    <van-index-bar :index-list="indexList" :sticky-offset-top="43">
      <van-index-anchor index="*" />
      <van-cell v-for="(e, i) in 3" :key="i" title="文本*" />
      <van-index-anchor index="A" />
      <van-cell v-for="(e, i) in 3" :key="i" title="文本a" />
      <van-index-anchor index="B" />
      <van-cell v-for="(e, i) in 3" :key="i" title="文本b" />
      <van-index-anchor index="C" />
      <van-cell v-for="(e, i) in 3" :key="i" title="文本c" />
      <van-index-anchor index="D" />
      <van-cell v-for="(e, i) in 3" :key="i" title="文本d" />
      <van-index-anchor index="E" />
      <van-cell v-for="(e, i) in 3" :key="i" title="文本e" />
      <van-index-anchor index="F" />
      <van-cell v-for="(e, i) in 3" :key="i" title="文本f" />
    </van-index-bar>
  </div>
</template>
<script>
//  引入外部资源
import { IndexBar, IndexAnchor, Cell } from 'vant';
import HeadComponent from '@/components/HeadComponent.vue';
export default {
  name: 'CountriesRegions',
  mixins: [],
  components: {
    HeadComponent,
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell
  },
  props: {},
  data() {
    return {
      indexList: [
        '*',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickLeft() {
      this.$router.go(-1);
    }
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {}
};
</script>
<style lang="scss" scoped>
.countries-regions {
  width: 100vw;
  ::v-deep .head-component {
    .nav-bar {
      background-color: #ffffff;
      border-bottom: 1px solid rgba(153, 153, 153, 0.308);
    }
    .middle .title {
      font-size: 16px;
    }
  }
}
</style>
