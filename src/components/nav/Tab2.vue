<template>
  <div class="tab2box">
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) of bannerlist" :key="index">
          <img :src="item" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
      <div class="tab2content">
        <ul v-for="item of tab2list" :key="item.id">
          <li>
            <a href="">
              <div class="imgbox">
              <img class="" :src="item.images.small">
            </div>
            <div class="tab2info">
              <div class="title"><span class="selfsale">自营</span><span class="sp2">水电费水电费上丢失</span></div>
              <div class="plable"></div>
              <div class="price">99</div>
              <div class="add">+</div>
            </div>
            </a>
          </li>
        </ul>
      </div>
        <div class="copyright">北京顺丰电子商务有限公司 | 客服电话：9533858<br>北京市公安局顺义分局备案11011302000890号<br><a href="http://www.miibeian.gov.cn" class="footer-link">京ICP备12011349号</a> | <a href="http://www.sfbest.com/www/174/461.html" class="footer-link">企业营业执照</a><br>Copyright© 顺丰优选 sfbest.com 版权所有</div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      tab2list: []
    }
  },
  computed: {
    ...mapState({
      bannerlist: ({ home }) => home.bannerlist
      // goodlist: (state) => {
      //   console.log(state)
      // }
    })
  },
  mounted () {
    this.getHomeBannerList()
    // this.getHomeGoodList()
    axios.get('http://www.daxunxun.com/douban?count=10').then(res => {
      // console.log(res.data)
      this.tab2list = res.data
      // console.log(this.tab2list)
    }).catch(err => {
      console.log(err)
    })
  },
  methods: {
    ...mapActions({
      getHomeBannerList: 'getHomeBannerList'
      // getHomeGoodList: 'getHomeGoodList'
    })
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
      .top {
        @include rect(100%, 100%);
        @include padding(.09rem .16rem);
        .address {
          float: left;
          @include rect(.31rem, 100%);
          @include line-height(.31rem);
          @include text-align(center);
          // @include margin(0 0 0 .2rem)
        }
        .search {
          float: left;
          @include margin(0 0 0 .2rem);
          .van-search {
            width: 2.34rem;
            height: .3rem;
            .van-cell {
            text-indent: .2rem
          }
          }
        }
      }
    }
    .content{
      .tab2box {
        @include flexbox();
        @include flex-direction(column);
        @include rect(100%, 100%);
        .tab2content {
          @include flex();
          @include rect(100%, 100%);
          ul {
            @include rect(100%, 1.37rem);
            margin-top: 10px;
            li {
              margin:0 .16rem;
              @include rect(100%, 100%);
              a {
                .imgbox {
                  float: left;
                  @include rect(1.08rem, 1.08rem);
                  img {
                    @include rect(1.08rem, 1.08rem);
                  }
                }
                .tab2info {
                  float: left;
                  @include rect(2.24rem, .865rem);
                  margin-left: .11rem;
                  position: relative;
                  .title {
                    @include rect(100%, .19rem);
                    @include text-color(#000);
                    .selfsale {
                      float:left;
                      display: block;
                      border: 1px solid #000;
                      border-radius: .02rem;
                    }
                    .sp2 {
                      float: left;
                      margin-left:.2rem;
                    }
                  }
                  .plable {
                    @include rect(100%, .36rem);
                  }
                  .price {
                    @include text-color(#ff8200);
                    @include rect(100%, .24rem);
                  }
                  .add {
                    position: absolute;
                    right: .2rem;
                    bottom: .2rem;
                  }
                }
              }
            }
          }
        }
        .copyright {
          @include rect(100%, 1rem);
          @include background-color(#F2F2F2);
          padding-top: .12rem;
          @include text-color(#000);
          font-size: .12rem;
          text-align: center;
          a {
            @include text-color(#000);
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
