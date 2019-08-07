<template>
  <div class="nologinbox">
    <header class="header">
      <span class="iconfont icon-xiazai6 returngo" @click="gohome"></span>
      <p class="password">找回密码</p>
      <span class="iconfont icon-jiantou righticon"></span>
    </header>
    <div class="contentbox">
      <div class="phonelogin">
        密码登录
      </div>
      <div class="loginfo">
        <van-cell-group>
        <van-field
          v-model="username"
          clearable
          placeholder="请输入手机号/邮箱/用户名" class="phone">
        <van-icon slot="button" color="green" size="24px" />
        </van-field>
        <van-field
          v-model="code"
          type="number"
          clearable
          placeholder="请输入密码" class="password">
          <van-icon slot="button" color="green" size="24px"  />
        </van-field>
          <!-- <div class="getcode" placeholder="请输入密码">
            <input type="number">
          </div> -->
          <span class="closeeye iconfont icon-biyan"></span>
        <van-field
          v-model="password"
          type="number"
          clearable
          placeholder="请输入验证码" class="code">
          <van-icon slot="button" color="green" size="24px"  />
        </van-field>
          <!-- <div class="getcode" placeholder="请输入密码">
            <input type="number">
          </div> -->
          <div class="getcode">获取验证码</div>
      </van-cell-group>
          <div class="checkbox">
            <!-- <van-icon slot="button" color="green" size="24px" :name="checkicon" class="ckeckname"/> -->
            <span class="circle"></span>
            <span>同意</span>
            <a href="">顺丰优选协议</a>
          </div>
          <van-button type="info" class="suresub" @click="login" size="large">登录</van-button>
      </div>
      <div class="forget">
        忘记密码？
      </div>
      <div class="othertype">
        <div class="other">
          <div class="left"></div>
          <div>其他方式登录</div>
          <div class="right"></div>
        </div>
        <div class="type">
          <img src="@/assets/images/sflogo.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      code: '',
      radio: '1'
    }
  },
  methods: {
    gohome () {
      this.$router.push('/')
    },
    login () {}
  },
  computed: {
    checkicon () {

    }
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
    @include rect(100%, 100%);
    // @include flexbox();
    .content {
      .nologinbox {
        @include flexbox();
        @include flex-direction(column);
        @include rect(100%, 100%);
        .header {
      line-height: .8rem;
      @include rect(100%, .8rem);
      .returngo {
        float: left;
        margin-left: .3rem;
      }
      .password {
        text-align: right;
        float: left;
        @include rect(80%, .8rem);
        font-size: .18rem;
      }
      .righticon {
        float: right;
        margin-right: .1rem;
      }
    }
    .contentbox {
      @include flex();
      @include rect(100%, auto);
      padding:0 .3rem;
        .phonelogin {
          @include rect(100%, .3rem);
          line-height: .3rem;
          font-size: .18rem;
          font-weight: 600;
          margin-left: .1rem;
        }
        .firstlogin {

        }
        .loginfo {
          margin-top: .2rem;
          .van-cell-group {
            margin: 0;
            padding: 0;
            font-size: .16rem;
            // position: relative;
            .van-field__body {
            line-height: .4rem;
              .van-icon {
                font-size: .22rem;
              }
            }
            .van-cell {
              border-top: none;
              padding-top: 0;
            }
            .phone {}
            .password {
              @include rect(2rem, .5rem);
              // padding-left:0;
            }
            .code {
              @include rect(2rem, .5rem);
            }
            .closeeye {
              position:absolute;
              right: .3rem;
              bottom:.6rem;
            }
            .getcode {
              position:absolute;
              right: .1rem;
              bottom: .1rem;
              @include text-color(#31c27c);
            }
          }
          .checkbox {
            margin-top: .2rem;
            padding-left: .07rem;
            .circle {
              width: .12rem;
              height: .12rem;
              border :1px solid #000;
              display: inline-block;
              margin-right: .1rem;
              border-radius: 50%;
            }
            a {
              @include color(#000);
            }
          }
          .suresub {
            margin-top:.1rem;
            border: none;
            background-color: rgb(49, 194, 124);
          }
        }
        .forget {
          text-align: center;
          line-height: .5rem;
          height: .5rem;
        }
        .othertype {
          margin-top: .5rem;
          text-align: center;
          .other {
          @include text-color(#ccc);
            height: .3rem;
            line-height:.3rem;
            margin-left: .4rem;
            margin-bottom: .2rem;
            div {
              float: left;
            }
          .left {
            @include rect(.8rem, .01rem);
            background-color: #ccc;
            margin-top: .15rem;
          }
          .right {
            @include rect(.8rem, .01rem);
            margin-top: .15rem;
            background-color: #ccc;
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
