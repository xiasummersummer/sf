<template>
  <div class="findbox">
    <ul v-for="(item, index) of 6" :key="index">
      <li>
        <div class="autho">
            <img src="https://ps.sfimg.cn/mapp/resource/91/918ca06bba9969805c39101cf20237dc.jpg" class="fl">
            <span>营养师</span>
        </div>
        <div class="titlebox">
          <div class="left">
            <h3>圣诞节还记得十多个风格的发是否</h3>
            <p>圣诞节和副驾驶的胜多负少的公告胜多负少划分空间</p>
            <span>2019-11-00 12:00:26</span>
          </div>
          <div class="right">
            <img src="https://ps.sfimg.cn/mapp/resource/6f/6f8b66c5768f2369766038c57e67ab4f.png" class="fr">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app, .box {
  @include rect(100%, 100%);
}

#app, .box {
  .container {
    .header {
    }
    .content {
      @include background-color(#eee);
     .findcontent {
       .findbox {
         ul {
            @include background-color(#fff);
            margin-top: .11rem;
            li {
              padding: .18rem .24rem;
              .autho {
                padding-bottom: .22rem;
                // @include rect(100%, .215rem);
                @include text-color(#666);
                img {
                  @include rect(.215rem, .215rem);
                }
                span {
                  text-indent: .5rem;
                  line-height: .215rem;
                }
              }
              .titlebox {
                @include rect(100%, 1.09rem);
                .left {
                  float: left;
                  @include rect(1.9rem, 1.09rem);
                  h3 {
                    @include rect(100%, .48rem);
                    font-size: .14rem;
                  }
                  p {
                    @include rect(100%, .48rem);
                  }
                }
                .right {
                  float: left;
                  @include rect(1.09rem, 1.09rem);
                  img {
                    @include rect(100%, 100%)
                  }
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
