<!--
 * @Author: your name
 * @Date: 2021-01-06 16:44:07
 * @LastEditTime: 2021-01-07 18:38:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \h5_1\src\components\commodity1.vue
-->
<template>
  <div class="commodity1">
    <div class="commodity-box">
      <div class="commodity-img">
        <img src="../assets/img/jd/hdt3.jpg" alt="" srcset="" />
      </div>
      <div class="commodity-info-box">
        <p class="title" :class="[`title-row${titleRow}`]">
          {{ commodityObjct.title }}
        </p>
        <div class="price-box">
          <ul v-if="classifyLabels.length > 0" class="label-box">
            <li v-for="(e, i) in classifyLabels" :key="i">{{ e }}</li>
          </ul>
          <div class="info-box">
            <span class="price">
              ¥
              <strong>52</strong>.00
            </span>
            <span class="merchant-labels">
              <img
                v-for="(e, i) in merchantLabels"
                :key="i"
                :src="e.url"
                alt=""
                srcset=""
              />
            </span>
            <span class="text-label">满减</span>
            <span v-if="resemblance" class="similarity">看相似</span>
          </div>
          <div class="comment">
            <span>
              <img src="../assets/img/jd/label2.png" alt="" srcset="" />
            </span>
            52条评论
          </div>
          <div class="shop">
            <i v-show="goodShopIcon" class="icon_good_shop"></i>
            <span class="shop_name">先为化妆品专营店</span>
            <span class="gouwuche-box">
              <img
                v-show="cartIcon"
                src="../assets/img/jd/gouwuche.png"
                alt=""
                srcset=""
              />
              <!-- <i class="advertising">广告</i> -->
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
//  引入外部资源
// import someThing from 'SomeThing';
export default {
  name: 'Commodity1',
  mixins: [],
  components: {},
  props: {
    commodityObjct: {
      type: Object,
      default: function () {
        return {
          title: '商品标题'
        };
      }
    },
    titleRow: {
      // 商品标题显示几行 默认1行显示 最多3行
      type: [String, Number],
      default: 1
    },
    classifyLabels: {
      // 分类标签集合
      type: Array,
      default: function () {
        return [];
      }
    },
    merchantLabels: {
      // 商家标签集合
      type: Array,
      default: function () {
        return [];
      }
    },
    resemblance: {
      // 看相似标签
      type: Boolean,
      default: false
    },
    // 是否显示购物车图标
    cartIcon: Boolean,
    // 是否显示好店图标
    goodShopIcon: Boolean
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
.commodity1 {
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 8px;
  .commodity-box {
    .commodity-img {
      width: 100%;
      img {
        width: 100%;
        border-radius: 8px 8px 0 0;
      }
    }
  }
  .commodity-info-box {
    padding: 0 4px;
    .title {
      font-size: 13px;
      line-height: 18px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      margin: 5px 0 3px 0;
      &.title-row1 {
        -webkit-line-clamp: 1;
      }
      &.title-row2 {
        -webkit-line-clamp: 2;
      }
      &.title-row3 {
        -webkit-line-clamp: 3;
      }
    }
    .price-box {
      line-height: 26px;
      position: relative;
      .label-box {
        display: flex;
        justify-content: start;
        overflow: hidden;
        padding-top: 5px;
        flex-flow: wrap;
        li {
          padding: 0 5px;
          border-radius: 2px;
          font-size: 12px;
          height: 16px;
          line-height: 16px;
          color: #999;
          background-color: #f2f2f7;
          margin-left: 5px;
          margin-bottom: 5px;
          white-space: nowrap;
        }
      }
      .info-box {
        display: flex;
        align-items: center;
        .price {
          color: #fa2c19;
          display: inline-block;
          padding: 0 5px 0 4px;
          font-size: 12px;
          height: 22px;
          line-height: 22px;
          strong {
            font-size: 18px;
            font-weight: 300;
          }
        }
        .merchant-labels {
          img {
            height: 14px;
            vertical-align: middle;
            margin-right: 5px;
          }
        }
        .text-label {
          border: 1px solid #fa2c19;
          color: #fa2c19;
          font-size: 12px;
          padding: 0 3px;
          margin-right: 5px;
          height: 16px;
          line-height: 16px;
          border-radius: 2px;
        }
        .similarity {
          height: 22px;
          line-height: 22px;
          display: inline-flex;
          text-align: center;
          color: grey;
          font-size: 12px;
          padding: 0 8px;
          background-color: #f0f2f5;
          border-radius: 11px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          position: absolute;
          right: -4px;
        }
      }
      .comment {
        line-height: 20px;
        font-size: 12px;
        color: #999;
        img {
          height: 14px;
          vertical-align: middle;
          margin-right: 5px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .shop {
        height: 26px;
        position: relative;
        display: flex;
        // justify-content: space-between;
        align-items: center;
        padding-right: 26px;
        .icon_good_shop {
          display: inline-flex;
          width: 38px;
          height: 14px;
          background-image: url('../assets/img/jd/haodian.png');
          background-repeat: no-repeat;
          background-size: 100%;
          margin-right: 5px;
        }
        .shop_name {
          color: #999;
          font-size: 12px;
          position: relative;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-right: 13px;
          &::after {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border-top: 1px solid #999;
            border-left: 1px solid #999;
            -webkit-transform-origin: 50%;
            transform-origin: 50%;
            -webkit-transform: rotate(135deg);
            transform: rotate(135deg);
            position: absolute;
            width: 6px;
            height: 6px;
            right: 3px;
            top: 50%;
            margin-top: -4px;
          }
        }
        .gouwuche-box {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          width: 26px;
          height: 26px;
          position: absolute;
          right: 0;
          img {
            width: 16px;
          }
          .advertising {
            font-style: normal;
            padding: 0 2px;
            height: 13px;
            line-height: 13px;
            font-size: 10px;
            text-align: center;
            color: #fff;
            border-radius: 1px;
            background-color: #ccc;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
