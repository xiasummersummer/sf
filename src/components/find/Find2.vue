<template>
    <div>
      <div class="find2box" v-for="(item, index) of 6" :key="index">
      <div class="line"></div>
      <div class="floor">
        <div class="title">
          <h3>周一  规宣传宣传划设计</h3>
          <p>时间段和科技收宣传册ssfdg自动更新过付付付付付付付付付付错错错错错xxxxxxc到货</p>
        </div>
        <img src="https://ps.sfimg.cn/mapp/resource/7b/7b697f03086066991f34a56522d359e5.jpg">
      </div>
      <div class="floorbanner">
        <ul>
          <li v-for="(item, index) of 6" :key="index">
            <img src="https://ps02.sfimg.cn/2018/4600281117/middle_w_4600281117_1_8.jpg">
            <div class="name">水电费水电费</div>
            <div class="price">￥116.00</div>
          </li>
        </ul>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      findnav: ['营养师专栏', '优选厨房', '美食文化']
    }
  },
  methods: {
    // findnavindex (id) {
    //   console.log(id)
    // }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app, .box {
  @include rect(100%, 100%);
}

#app, .box {
  .container {
    .header {
      line-height: .44rem;
      text-align: center;
    }
    .content {
      background-color: #eee;
      .nav {
        background-color: #fff;
        ul {
          @include flexbox();
          @include rect(100%, .46rem);
          // space-between: around;
          li {
            @include flex();
            text-align: center;
          }
        }
      }
      .findcontent {
        .find2box {
          @include background-color(#fff);
          margin-top: .1rem;
          .line {
            @include rect(100%, .1rem);
          }
          .floor {
            @include rect(100%, 2.85rem);
            padding: 0 .16rem;
            .title {
              @include rect(100%, 1.075rem);
              h3 {
                @include rect(100%, .43rem);
                padding-top: .18rem;
                font-size: .16rem;
              }
              p {
                @include rect(100%, .34rem);
                margin-top: .06rem;
                @include text-color(#666)
              }
            }
            img {
              @include rect(100%, 1.69rem);
            }
          }
          .floorbanner {
            ul {
              @include flexbox();
              li {
                @include flex();
                margin: .05rem .05rem;
                @include rect(1.04rem, 1.87rem);
                img {
                  @include rect(1.04rem, 1.04rem);
                }
                .name {}
                .price {
                  @include text-color(#f40)
                }
              }
            }
          }
        }
      }
    }
  }
  .footer {
    ul {
      li{
        span {
        }
        p {
        }
        &.router-link-active {
        }
      }
    }
  }
}
</style>
