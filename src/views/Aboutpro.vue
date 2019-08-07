<template>
  <div class="container">
    <div class="content">
      <span class="iconfont icon-jiantouarrowhead7 returnback"></span>
      <div class="ht">
        <!-- <span class="iconfont icon-jiantouarrowhead7 returnback"></span> -->
        <van-tabs @click="onClick">
          <van-tab title="商品"><De1 /></van-tab>
          <van-tab title="详情">内容 2</van-tab>
          <van-tab title="评价">内容 2</van-tab>
        </van-tabs>
      </div>
    </div>
    <!-- <div class="content"></div> -->
    <!-- <footer class="footer">
      底部
    </footer> -->
  </div>
</template>

<script>
import axios from 'axios'
import De1 from '@/components/details/De1'
export default {
  mounted () {
    console.log(this.$route)
    const { id } = this.$route.params
    axios.get(`http://10.11.55.200:4000/data2`).then(res => {
      console.log(res.data.appfloor.productArray[id])
    })
  },
  components: {
    De1
  },
  methods: {
    onClick () {}
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
    .content {
      @include line-height(.44rem);
      // @include flexbox();
      @include rect(100%, .44rem);
      position: relative;
      .returnback {
          // float: left;
          position: absolute;
          // top: .1rem;
          left: .1rem;
        }
      .ht {
        @include rect(100%, 100%);
        .van-tabs {
          // float:left;
          .van-tabs__wrap {
            @include flexbox();
            justify-content: center;
                line-height: .44rem;
            .van-tabs__nav {
              @include rect(70%, .44rem);
              margin: auto;
              .van-tabs__line {
                margin-top: .1rem;
                left: .3rem;
                @include background-color(green);
              }
              .van-tab {
                margin: 0 .2rem;
                // line-height: .44rem;
                .van-ellipsis {
                  margin: 0 .2rem;
                  padding: 0 .1rem;
                  // @include background-color(green);
                }
              }
            }
          }
        }
      }
    }
    .content {
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
