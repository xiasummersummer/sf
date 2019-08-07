<template>
  <div class="loginbox">
    <header class="top">
      <div class="userl">
        <a href="https://m.sfbest.com/user/goUserInfo?userName=sf155965065999232">
        <img src="https://is.sfimg.cn/webapp/images/webapp2.0/model/uc/index/icon1.png">
          </a>
      </div>
      <div class="userr">
        <div class="ut">
          <span>ssaa</span>
        </div>
        <div class="ub">
          <span class="t02">普通会员</span>
          <span class="t03 pl20">会员试用</span>
        </div>
      </div>
    </header>
    <div class="userlist">
      <ul>
        <li v-for="(item, index) of 4" :key="index">
          <a href="">
            <span>1</span>
            <span>优惠券</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="myorder">
      <div class="myinfo">
        <p class="myselect">我的优选定的</p>
        <p class="allorder"><span>全部订单</span><i class="iconfont icon-jiantou"></i></p>
      </div>
      <div class="process">
        <ul>
          <li  v-for="(item, index) of 4" :key="index">
            <span class="iconfont icon-shopping-cart"></span>
            <span>代付款</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="mymsg">
      <div class="goodselect">我的优选信息</div>
      <ul>
        <li v-for="(item, index) of 8" :key="index">
          <span class="iconfont icon-yuanhuan iconl"></span>
          <span class="present">我的礼赠</span>
          <span class="pos"></span>
          <span class="iconfont icon-jiantou iconr"></span>
        </li>
      </ul>
    </div>
    <div class="signout" @click="returnlogin">
      退出登录
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    returnlogin () {
      this.$store.commit('changeLoginstate', '')
      this.$router.push('/user/nologin')
    }
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app{
  @include rect(100%, 100%);
}
#app {
  @include flexbox();
  @include flex-direction(column);
  .loginbox {
    @include flex();
    @include rect(100%, auto);
    @include overflow;
    .top {
      @include rect(100%, .62rem);
      margin: .35rem .16rem;
      .userl {
        @include rect(.62rem, .62rem);
        float: left;
        img {
          @include rect(100%, 100%);
        }
      }
      .userr {
        margin-left: .2rem;
        float: left;
        @include rect(2rem, .62rem);
        .ut {
          font-size: .18rem;
          margin-top: .1rem;
        }
        .ub {
          span {
            margin-right: .1rem;
          }
          .p120 {
            @include text-color(#b68c26);
          }
        }
      }
    }
    .userlist {
      ul {
        @include flexbox();
        li {
          @include rect(.92rem, .45rem);
          span {
            display: block;
            text-align: center;
            @include text-color(#000);
            border-right: 1px solid #ccc;
          }
        }
        // &:nth-child(3) span{
        //   border-right: none;
        // }
      }
    }
    .myorder {
      margin: .2rem .16rem;
      .myinfo {
        .myselect {}
        .allorder {}
      }
      .process {
        ul {
          @include flexbox();
          li {
            text-align: center;
            @include rect(.8575rem, .69rem);
            span {
              display: block;
            }
          }
        }
      }
    }
    .mymsg {
      padding: 0 .16rem;
      .goodselect {
        @include rect(100%, .35rem);
        @include background-color(#eee);
        line-height: .35rem;
        font-size: .18rem;
        text-indent: .1rem;
      }
      ul {
        li {
          border-bottom: 1px solid #ccc;
          @include rect(100%, .58rem);
          line-height: .58rem;
          .iconl {
            float: left;
          }
          .present {
            float: left;
            margin-left: .1rem;
          }
          .pos {
            float: left;
          }
          .iconr {
            float: right;
          }
        }
      }
    }
    .signout {
      @include rect(100%, .4rem);
      // border-top: 1px solid #ccc;
      border-bottom:1px solid #ccc;
      text-align: center;
      line-height: .4rem;
    }
  }
  .footer {
  }
}
</style>
