<!--
 * @Author: your name
 * @Date: 2020-12-10 15:13:36
 * @LastEditTime: 2020-12-10 17:16:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\views\home\jdSeckill.vue
-->
<template>
  <div class="jd-seckill">
    <main>
      <div class="top">
        <div class="left">
          <h4>京东秒杀</h4>
          <p>
            <span>14点场</span>
            <van-count-down :time="time" />
          </p>
        </div>
        <div class="right">
          <a>更多秒杀</a>
          <span></span>
        </div>
      </div>
      <div class="bottom">
        <ul>
          <li v-for="item in list" :key="item.id">
            <div class="seckill-item-img">
              <img :src="item.icon" alt="" srcset="" />
            </div>
            <div class="seckill-item-price">
              <span>¥ {{ item.price }}</span>
              <br />
              <em>¥ {{ item.price }}</em>
            </div>
          </li>
          <div class="look-all">
            <i></i>
            查看全部
          </div>
        </ul>
      </div>
    </main>
  </div>
</template>
<script>
//  引入外部资源
// import someThing from 'SomeThing';
import { CountDown } from 'vant';
export default {
  name: 'JdSeckill',
  mixins: [],
  components: {
    [CountDown.name]: CountDown
  },
  props: {},
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      list: [
        {
          id: 1,
          icon: require('@/assets/img/jd/ms4.dpg'),
          price: '998'
        },
        {
          id: 2,
          icon: require('@/assets/img/jd/ms5.dpg'),
          price: '998'
        },
        {
          id: 3,
          icon: require('@/assets/img/jd/ms6.dpg'),
          price: '998'
        },
        {
          id: 4,
          icon: require('@/assets/img/jd/ms7.dpg'),
          price: '998'
        },
        {
          id: 5,
          icon: require('@/assets/img/jd/ms4.dpg'),
          price: '998'
        },
        {
          id: 6,
          icon: require('@/assets/img/jd/ms5.dpg'),
          price: '998'
        },
        {
          id: 7,
          icon: require('@/assets/img/jd/ms6.dpg'),
          price: '998'
        },
        {
          id: 8,
          icon: require('@/assets/img/jd/ms7.dpg'),
          price: '998'
        },
        {
          id: 9,
          icon: require('@/assets/img/jd/ms4.dpg'),
          price: '998'
        },
        {
          id: 10,
          icon: require('@/assets/img/jd/ms5.dpg'),
          price: '998'
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
.jd-seckill {
  height: 152px;
  margin: 10px;
  main {
    background-color: #ffffff;
    height: 100%;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 0 5px 0 #ccc;
    .top {
      height: 34px;
      background-image: url('../../assets/img/jd/jdms-bg.png');
      background-repeat: no-repeat;
      background-size: 100%;
      display: flex;
      justify-content: space-between;
      padding: 0 10px;
      .left {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        h4 {
          font-size: 14px;
          margin-right: 8px;
        }
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 18px;
          border: 1px solid #f23030;
          border-radius: 18px;
          span {
            height: 100%;
            display: inline-flex;
            align-items: center;
            color: #fff;
            border-radius: 18px;
            padding: 0 5px;
            background-image: linear-gradient(90deg, #f10001, #fe4e18);
          }
          .van-count-down {
            padding: 0 6px;
            font-size: 12px;
            font-weight: bold;
            color: #f23030;
          }
        }
      }
      .right {
        width: 80px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #f23030;
        span {
          display: inline-flex;
          width: 12px;
          height: 12px;
          background-image: url('../../assets/img/jd/right.png');
          background-repeat: no-repeat;
          background-size: 100%;
          margin-left: 5px;
        }
      }
    }
    .bottom {
      flex: 1;
      // background-color: rgb(170, 63, 231);
      overflow: hidden;
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        overflow-x: auto;
        height: 100%;
        &::-webkit-scrollbar {
          display: none;
        }
        li {
          padding: 0 5px;
          .seckill-item-img {
            margin-bottom: 10px;
            img {
              display: block;
              width: 66px;
              height: 66px;
            }
          }
          .seckill-item-price {
            text-align: center;
            line-height: 16px;
            font-size: 13px;
            span {
              color: #f23030;
            }
            em {
              font-style: normal;
              color: #999;
              text-decoration: line-through;
            }
          }
        }
        .look-all {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 20px;
          color: #999;
          font-size: 13px;
          i {
            display: inline-block;
            width: 16px;
            height: 16px;
            background-image: url('../../assets/img/jd/jd-sprites.png');
            background-position: -705px -107px;
            background-size: 200px 200px;
          }
        }
      }
    }
  }
}
</style>
