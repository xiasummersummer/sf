<template>
  <!-- <div class="container">
    <header class="header">
      购物车
    </header>
    <div class="content">
      <div class="cartbox">
        <div class="server">
          <a href="">
            <img src="https://is.sfimg.cn/webapp/images/webapp2.0/model/ht/cart-none.png">
          </a>
        </div>
        <div class="tips">
          购物车暂无商品
        </div>
        <div class="shopselect">
          <div class="mylike">
            我的收藏
          </div>
          <div class="gowhere">
            去逛逛
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="box">
    <!-- 购物车 -->
    <!-- <Nogoods /> -->
    <Goods />
  </div>
</template>

<script>
import Nogoods from '@/components/car/Nogoods'
import Goods from '@/components/car/Goods'
export default {
  components: {
    Nogoods,
    Goods
  }
  // beforeRouteEnter (to, from, next) {
  //   if (localStorage.getItem('isLogin') === 'ok') {
  //     next()
  //   } else {
  //     next('/login')
  //   }
  //   next(vm => {
  //     console.log(vm)
  //     if (vm.$store.state.user.loginstate === 'ok') {
  //       next()
  //     } else {
  //       next('/user/nologin')
  //     }
  //   })
  // }
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
      text-align: center;
      line-height: .44rem;
      font-size: .2rem;
    }
    .content {
      .cartbox{
        @include rect(100%, 3rem);
        @include background-color(#efefef);
        .server {
          text-align: center;
          @include rect(100%, 1.75rem);
          line-height: 1.75rem;
          a {
            img {
              @include rect(.6rem, .56rem);
            }
          }
        }
        .tips {
          @include rect(100%, .3rem);
            text-align: center;
        }
        .shopselect {
          padding: .31rem .7rem;
          @include rect(100%, .9rem);
          .mylike {
            @include background-color(#69af00);
            padding:0 .2rem;
            float: left;
            line-height: .3rem;
            @include rect(auto, .3rem);
          }
          .gowhere {
            @include rect(auto, .3rem);
            float: left;
            border: 1px solid #69af00;
            line-height: .3rem;
            margin-left: .3rem;
            padding:0 .2rem;
            @include rect(auto, .3rem);
          }
        }
      }
    }
  }
  // .footer {
  //   ul {
  //     li{
  //       span {
  //       }
  //       p {
  //       }
  //       &.router-link-active {
  //       }
  //     }
  //   }
  // }
}
</style>
