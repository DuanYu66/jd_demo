<template>
  <div class="synthesize">
    <main class="main">
      <van-tabs v-model="active" swipeable animated>
        <van-tab>
          <ul>
            <li v-for="item in list1" :key="item.id">
              <img :src="item.icon" alt="" srcset="" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </van-tab>
        <van-tab>
          <ul>
            <li v-for="item in list2" :key="item.id">
              <img :src="item.icon" alt="" srcset="" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </van-tab>
      </van-tabs>
    </main>
  </div>
</template>
<script>
//  引入外部资源
import { Tab, Tabs } from 'vant';
export default {
  name: 'Synthesize',
  mixins: [],
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs
  },
  props: {},
  data() {
    return {
      active: 1,
      list1: [
        {
          id: 1,
          name: '京东超市',
          icon: require('@/assets/img/jd/zh1.webp'),
          path: '/'
        },
        {
          id: 2,
          name: '数码电器',
          icon: require('@/assets/img/jd/zh2.webp'),
          path: '/'
        },
        {
          id: 3,
          name: '京东服饰',
          icon: require('@/assets/img/jd/zh3.webp'),
          path: '/'
        },
        {
          id: 4,
          name: '京东生鲜',
          icon: require('@/assets/img/jd/zh4.webp'),
          path: '/'
        },
        {
          id: 5,
          name: '京东到家',
          icon: require('@/assets/img/jd/zh5.webp'),
          path: '/'
        },
        {
          id: 6,
          name: '充值缴费',
          icon: require('@/assets/img/jd/zh6.webp'),
          path: '/'
        },
        {
          id: 7,
          name: '9.9元拼',
          icon: require('@/assets/img/jd/zh7.webp'),
          path: '/'
        },
        {
          id: 8,
          name: '领卷',
          icon: require('@/assets/img/jd/zh8.webp'),
          path: '/'
        },
        {
          id: 9,
          name: '领金贴',
          icon: require('@/assets/img/jd/zh9.webp'),
          path: '/'
        },
        {
          id: 10,
          name: 'PLUS会员',
          icon: require('@/assets/img/jd/zh10.webp'),
          path: '/'
        }
      ],
      list2: [
        {
          id: 11,
          name: '京东国际',
          icon: require('@/assets/img/jd/zh11.webp'),
          path: '/'
        },
        {
          id: 12,
          name: '京东拍卖',
          icon: require('@/assets/img/jd/zh12.webp'),
          path: '/'
        },
        {
          id: 13,
          name: '唯品会',
          icon: require('@/assets/img/jd/zh13.webp'),
          path: '/'
        },
        {
          id: 14,
          name: '玩3C',
          icon: require('@/assets/img/jd/zh14.webp'),
          path: '/'
        },
        {
          id: 15,
          name: '沃尔玛',
          icon: require('@/assets/img/jd/zh15.webp'),
          path: '/'
        },
        {
          id: 16,
          name: '美妆馆',
          icon: require('@/assets/img/jd/zh16.webp'),
          path: '/'
        },
        {
          id: 17,
          name: '京东旅行',
          icon: require('@/assets/img/jd/zh17.webp'),
          path: '/'
        },
        {
          id: 18,
          name: '拍拍二手',
          icon: require('@/assets/img/jd/zh18.webp'),
          path: '/'
        },
        {
          id: 19,
          name: '物流查询',
          icon: require('@/assets/img/jd/zh19.webp'),
          path: '/'
        },
        {
          id: 20,
          name: '全部',
          icon: require('@/assets/img/jd/zh20.webp'),
          path: '/'
        }
      ]
    };
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
.synthesize {
  // padding: 0 10px;
  .main {
    // background-color: #F6F6F6;
    // border-radius: 8px;
  }
  ::v-deep .van-tabs {
    height: 162px;
    position: relative;
    padding-top: 6px;
    .van-tabs__wrap {
      position: absolute;
      bottom: 0;
      left: 50%;
      right: 50%;
      min-width: 26px;
      height: 5px;
      transform: translateX(-50%);
      overflow: visible;
      .van-tabs__nav {
        background-color: transparent;
        &.van-tabs__nav--line {
          padding: 0;
          .van-tab {
            display: flex;
            justify-content: center;
            width: 13px;
            .van-tab__text {
              display: inline-flex;
              width: 5px;
              height: 5px;
              background-color: rgba(102, 102, 102, 0.425);
              margin: auto;
              border-radius: 50%;
            }
          }
          .van-tabs__line {
            position: absolute;
            bottom: 0;
            left: 0;
            z-index: 1;
            width: 5px;
            height: 5px;
            background-color: #ee0a24;
            border-radius: 50%;
          }
        }
      }
    }
    .van-tabs__content {
      height: 157px;
      .van-tabs__track .van-tab__pane {
        ul {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            width: 71px;
            height: 75px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
              width: 40px;
              height: 40px;
              margin-bottom: 8px;
            }
            span {
              color: #666;
            }
          }
        }
      }
    }
  }
}
</style>
