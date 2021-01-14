<!--
 * @Author: your name
 * @Date: 2020-12-14 14:16:17
 * @LastEditTime: 2021-01-07 19:13:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\views\home\hisYard.vue
-->
<template>
  <div class="his-yard">
    <main v-for="(item, index) in arrObj" :key="index">
      <div class="title">
        <img :src="item.titleBg" alt="" srcset="" />
        <div class="right" v-show="rightText">{{ rightText }}<i></i></div>
      </div>
      <div class="container">
        <ul>
          <li v-for="(e, i) in item.list" :key="i">
            <Commodity :merchandise="e" imgNum="2"></Commodity>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
//  引入外部资源
import Commodity from '@/components/commodity';
import Commodity1 from '@/components/commodity1';
export default {
  name: 'HisYard',
  mixins: [],
  components: { Commodity, Commodity1 },
  props: {
    arrObj: Array,
    rightText: String
  },
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
.his-yard {
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
      .right {
        position: absolute;
        top: 0;
        right: 0;
        width: 70px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #666;
        font-size: 12px;
        i {
          display: flex;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          margin-left: 5px;
          background-image: url('../../assets/img/jd/right1.png');
          background-repeat: no-repeat;
          background-size: 100%;
        }
      }
    }
    .container {
      padding: 0 10px;
      ul {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        li {
          flex: 1;
          // min-width: 88px;
          // height: 120px;
          padding: 5px 0;
          position: relative;
          &::before {
            content: '';
            height: 100%;
            border-right: 1px solid rgba(204, 204, 204, 0.274);
            position: absolute;
            top: 0;
            right: 0;
          }
          &::after {
            content: '';
            width: 100%;
            border-bottom: 1px solid rgba(204, 204, 204, 0.274);
            position: absolute;
            bottom: 0;
            left: 0;
          }
        }
      }
    }
  }
}
</style>
