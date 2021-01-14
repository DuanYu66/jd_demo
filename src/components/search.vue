<!--
 * @Author: your name
 * @Date: 2021-01-08 19:56:10
 * @LastEditTime: 2021-01-11 20:16:00
 * @LastEditors: Please set LastEditors
 * @Description: 搜寻组件
 * @FilePath: \h5_1\src\components\search.vue
-->
<template>
  <div class="search">
    <HeadComponent @clickLeft="clickLeft">
      <template #left>
        <span></span>
      </template>
      <template #right>
        <p>搜索</p>
      </template>
    </HeadComponent>
    <div class="search-content">
      <dl>
        <dt>
          <h3>最近搜索</h3>
          <p>
            <i></i>
            <span>清除</span>
          </p>
        </dt>
        <dd>
          <p v-for="(e, i) in 10" :key="i">充电宝小米</p>
        </dd>
      </dl>
      <!-- <ul class="search-result">
        <li v-for="(e, i) in 10" :key="i">
          <span>商品名称</span>
          <div class="label-box">
            <p>标签名</p>
            <p>标签名</p>
            <p>标签名</p>
          </div>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
//  引入外部资源
import HeadComponent from '@/components/HeadComponent.vue';
export default {
  name: 'Search',
  mixins: [],
  components: {
    HeadComponent
  },
  props: {},
  data() {
    return {};
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
.search {
  background-color: #ffffff;
  // position: absolute;
  // width: 100%;
  ::v-deep .head-component {
    .nav-bar {
      background-color: #ffffff;
      border-bottom: 1px solid rgba(153, 153, 153, 0.308);
    }
    .middle .search {
      background-color: #f7f7f7;
    }
    .right {
      p {
        line-height: 25px;
        background-color: #e93b3d;
        color: #ffffff;
        padding: 0 5px;
        border-radius: 4px;
      }
    }
  }
  .search-content {
    padding: 15px 0 15px 15px;
    dl {
      dt {
        display: flex;
        justify-content: space-between;
        line-height: 16px;
        padding-right: 15px;
        h3 {
          font-size: 15px;
        }
        p {
          display: flex;
          justify-content: space-between;
          i {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('../assets/img/jd/shanchu.png');
            background-size: 100%;
            margin-right: 5px;
          }
          span {
            font-size: 14px;
            color: #999;
          }
        }
      }
      dd {
        display: flex;
        justify-content: start;
        flex-flow: wrap;
        padding: 10px 0;
        p {
          max-width: 160px;
          line-height: 24px;
          padding: 0 10px;
          border-radius: 3px;
          color: #686868;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          background-color: #f0f2f5;
          margin-right: 15px;
          margin-bottom: 12px;
        }
      }
    }
  }
  .search-result {
    li {
      display: flex;
      justify-content: space-between;
      padding-right: 15px;
      height: 42px;
      line-height: 42px;
      position: relative;
      overflow: hidden;
      &::after {
        content: '';
        height: 1px;
        width: 200%;
        position: absolute;
        left: 0;
        top: auto;
        right: auto;
        bottom: 0;
        background-color: #f0f2f5;
        border: 0 solid transparent;
      }
      span {
        font-size: 14px;
        margin-right: 50px;
      }
      .label-box {
        display: flex;
        justify-content: start;
        align-items: center;
        p {
          margin-left: 10px;
          font-size: 12px;
          max-width: 160px;
          height: 24px;
          line-height: 24px;
          padding: 0 10px;
          border-radius: 3px;
          color: #686868;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          background-color: #f0f2f5;
        }
      }
    }
  }
}
</style>
