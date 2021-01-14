<!--
 * @Author: your name
 * @Date: 2020-11-19 09:50:10
 * @LastEditTime: 2021-01-11 20:36:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\views\home\index.vue
-->
<template>
  <div class="home">
    <HeadComponent
      right-text="登录"
      jd-icon
      @clickLeft="clickLeft"
      @clickMiddle="clickMiddle"
    >
      <template #left>
        <span></span>
      </template>
    </HeadComponent>
    <Swipe :list="imgList"></Swipe>
    <SecondsKillActivity></SecondsKillActivity>
    <Synthesize></Synthesize>
    <GoodStuff></GoodStuff>
    <JdSeckill></JdSeckill>
    <NewExclusive></NewExclusive>
    <!-- <Swipe1></Swipe1> -->
    <HisYard :arrObj="hisYardList"></HisYard>
    <GuessLike></GuessLike>
    <!-- <div style="width: 50%;">
      <Commodity1></Commodity1>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HeadComponent from '@/components/HeadComponent.vue';
import Swipe from '@/components/swipe.vue';
import Swipe1 from '@/components/swipe1.vue';
import SecondsKillActivity from './secondsKillActivity';
import Synthesize from './synthesize';
import GoodStuff from './goodStuff';
import JdSeckill from './jdSeckill';
import NewExclusive from './newExclusive';
import HisYard from './hisYard';
import GuessLike from './guessLike';
import Commodity1 from '@/components/commodity1';

export default {
  name: 'Home',
  components: {
    HeadComponent,
    Swipe,
    Swipe1,
    SecondsKillActivity,
    Synthesize,
    GoodStuff,
    JdSeckill,
    NewExclusive,
    HisYard,
    Commodity1,
    GuessLike
  },
  data() {
    return {
      imgList: [
        require('@/assets/img/jd/lb1.dpg'),
        require('@/assets/img/jd/lb2.dpg'),
        require('@/assets/img/jd/lb3.dpg'),
        require('@/assets/img/jd/lb4.dpg'),
        require('@/assets/img/jd/lb5.dpg'),
        require('@/assets/img/jd/lb2.jpg')
      ],
      hisYardList: [
        {
          title: '东家小院',
          titleBg: require('@/assets/img/jd/djxy.dpg'),
          list: [
            {
              title: '免息星球',
              describe: '白条免息购白条免息购',
              imgs: [
                require('@/assets/img/jd/hdt2.jpg'),
                require('@/assets/img/jd/hdt3.jpg')
              ]
            },
            {
              title: '免息星球',
              describe: '白条免息购白条免息购',
              imgs: [
                require('@/assets/img/jd/hdt2.jpg'),
                require('@/assets/img/jd/hdt3.jpg')
              ]
            },
            {
              title: '免息星球',
              describe: '白条免息购星',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            }
          ]
        },
        {
          title: '每日逛',
          titleBg: require('@/assets/img/jd/mrg.dpg'),
          list: [
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            },
            {
              title: '免息星球',
              describe: '白条免息购',
              imgs: [require('@/assets/img/jd/hdt2.jpg')]
            }
          ]
        }
      ]
    };
  },
  methods: {
    clickLeft() {
      this.$router.push("/classify");
    },
    clickMiddle() {
      this.$router.push("/search");
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  // background-image: linear-gradient(#e557ffa7, #F6F6F6);
  background-image: linear-gradient(#cc56ffbb, #f6f6f6);
  background-size: 100% 450px;
  background-repeat: no-repeat;
  background-color: #f6f6f6;
  padding-bottom: 15px;
  width: 100%;
  // position: absolute;
  ::v-deep .head-component {
    .nav-bar {
      background-color: #e43130;
      .left {
        span {
          background-image: url('../../assets/img/jd/list.png');
          background-repeat: no-repeat;
          background-size: 20px;
          background-position: center;
        }
      }
    }
  }
  .swipe {
    padding: 5px 12px 0 12px;
    .van-swipe {
      img {
        width: 100%;
        height: 113px;
      }
    }
  }
}
</style>
