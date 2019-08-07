<template>
  <div class="
  detailbox">
    <div class="distributebox">
    <div class="detable">
      <h3>百利佳 汪汪队糖果玩具礼盒 118g</h3>
      <ul>
        <li v-for="(item, index) of 6" :key="index">
          <span class="sp1">商品产地</span><span class="sp2">中国内地</span>
          </li>
      </ul>
    </div>
    <div class="detaildistribute">
      <img src="http://p01.sfimg.cn/4100329979/1558581181_1.jpg" class="lazy" style="margin:0;" alt="">
    </div>

  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      current: 0,
      value: 1
    }
  },
  methods: {
    onChange (index) {
      this.current = index
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
    .content {
      @include flexbox();
      .detailbox {
        @include rect(100%, auto);
        @include overflow();
        @include flex();
        @include flexbox();
        .distributebox {
          @include flex();
          @include rect(100%, auto);
          @include overflow();
          .detable {
            margin-top: .1rem;
            padding: 0 .16rem;
            border-top: 1px solid #ccc;
            h3 {
              margin: .1rem 0;
              @include rect(100%, .21rem);
            }
            ul {
              border-left: 1px solid #ccc;
              border-right: 1px solid #ccc;
              li {
                @include rect(100%, .35rem);
                border-top: 1px solid #ccc;
                // text-align: center;
                text-indent: .1rem;
                line-height: .35rem;
                .sp1 {
                  margin-right: .3rem;
                  @include text-color(#ccc);
                }
                .sp2 {}
              }
            }
          }
          .detaildistribute {
            margin-top: .2rem;
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
