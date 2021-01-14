<!--
 * @Author: your name
 * @Date: 2020-12-09 17:02:04
 * @LastEditTime: 2021-01-11 20:33:52
 * @LastEditors: Please set LastEditors
 * @Description: 分类
 * @FilePath: \h5_1\src\views\classify\classify.vue
-->
<template>
  <div class="classify">
    <HeadComponent @clickLeft="clickLeft" @clickMiddle="clickMiddle">
      <template #left>
        <span></span>
      </template>
      <template #right>
        <span></span>
      </template>
    </HeadComponent>
    <main>
      <div class="left">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="(e, i) in 20"
            :key="i"
            :title="`标签名称${i + 1}`"
          />
        </van-sidebar>
      </div>
      <div class="right">
        <!-- 标签名称{{ activeKey + 1 }} -->
        <dl v-for="(item, index) in 5" :key="index">
          <dt>
            <h3>热门分类</h3>
            <p>
              <i></i>
              <span>清空</span>
              <em></em>
            </p>
          </dt>
          <dd>
            <div v-for="(e, i) in 9" :key="i">
              <img src="../../assets/img/jd/hdt2.jpg" alt="" srcset="" />
              <p>手机</p>
            </div>
          </dd>
        </dl>
      </div>
    </main>
  </div>
</template>
<script>
//  引入外部资源
import { Sidebar, SidebarItem } from 'vant';
import HeadComponent from '@/components/HeadComponent.vue';
export default {
  name: 'Classify',
  mixins: [],
  components: {
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    HeadComponent
  },
  props: {},
  data() {
    return {
      activeKey: 0
    };
  },
  computed: {},
  watch: {},
  methods: {
    clickLeft() {
      this.$router.go(-1);
    },
    clickMiddle() {
      console.log('Hello World!');
      this.$router.push('/search');
    }
  },
  filters: {},
  created() {},
  mounted() {},
  destoryed() {}
};
</script>
<style lang="scss" scoped>
.classify {
  // height: 100vh;
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
      span {
        background-image: url('../../assets/img/jd/list2.png');
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: center;
      }
    }
  }
  main {
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 94px);
    overflow: hidden;
    .left {
      width: 85px;
      overflow-y: auto;
      overflow-x: hidden;
      -webkit-overflow-scrolling: touch;
      &::-webkit-scrollbar {
        display: none;
      }
      ::v-deep .van-sidebar {
        width: 100%;
        .van-sidebar-item--select {
          // border-right: 1px solid #f7f7f7;
        }
        .van-sidebar-item--select::before {
          width: 0;
        }
        .van-sidebar-item {
          padding: 13px 0;
          text-align: center;
        }
      }
    }
    .right {
      flex: 1;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none;
      }
      dl {
        dt {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 10px;
          h3 {
            font-size: 14px;
          }
          p {
            color: #848689;
            font-size: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            em,
            i {
              display: inline-block;
              width: 16px;
              height: 16px;
              background-repeat: no-repeat;
              background-position: center;
            }
            i {
              background-image: url('../../assets/img/jd/shanchu.png');
              background-size: 80%;
              margin-right: 3px;
              &.paihang {
                background-image: url('../../assets/img/jd/paihang.png');
              }
            }
            em {
              background-image: url('../../assets/img/jd/right2.png');
              background-size: 75%;
              margin-left: 2px;
            }
          }
        }
        dd {
          display: flex;
          justify-content: start;
          flex-flow: wrap;
          padding: 0 15px;
          div {
            width: 33.33%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            img {
              width: 70px;
              margin: auto;
            }
            p {
              text-align: center;
              margin-top: 4px;
              height: 25px;
            }
          }
        }
      }
    }
  }
}
</style>
