<!--
 * @Author: your name
 * @Date: 2020-12-09 18:58:27
 * @LastEditTime: 2020-12-10 15:11:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\views\home\secondsKillActivity.vue
-->
<template>
  <div class="seconds-kill-activity">
    <ul>
      <li class="left">
        <img src="../../assets/img/jd/ms1.dpg" alt="" srcset="" />
      </li>
      <li class="middel">
        <img src="../../assets/img/jd/ms2.gif" alt="" srcset="" />
      </li>
      <li class="right">
        <img src="../../assets/img/jd/ms3.dpg" alt="" srcset="" />
      </li>
    </ul>
  </div>
</template>
<script>
//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: 'SecondsKillActivity',
  mixins: [],
  components: {},
  props: {},
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
.seconds-kill-activity {
  margin-top: 5px;
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100px;
    li {
      flex: 1;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
