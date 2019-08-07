<template>
  <div class="commentsbox">
    <div class="comentcount">
      <div class="coml">
        0%
      </div>
      <div class="comr">
        星级
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app, .box {
  @include rect(100%, 100%);
}

#app, .box {
  .container {
    .content {
      @include flexbox();
      .commentsbox {
        @include rect(100%, auto);
        @include overflow();
        @include flex();
        @include flexbox();
        .comentcount {
          margin: 0 auto;
          .coml {
            @include rect(.5rem, .5rem);
            background-color: rgba(118, 172, 1, .5);
            text-align: center;
            float: left;
            line-height: .5rem;
            border-radius: 50%;
          }
          .comr {
            float: left;
            @include rect(.5rem, .5rem);
            text-align: center;
            line-height: .5rem;
          }
        }
      }
    }
    // .content {
    // }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    @include flexbox();
    .server {
      @include flex()
    }
    .cart {
      @include flex()
    }
    .home {
      @include flex()
    }
    .addcart {
      @include flex(2);
      font-size: .12rem;
    }
    .buynow {
      @include flex(2);
      @include background-color(#8ec319);
      font-size: .12rem;
      @include text-color(#fff);
    }
  }
}
</style>
