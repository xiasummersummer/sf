<template>
  <div id="homescroll">
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(item, index) of bannerlist" :key="index">
          <img :src="item" alt>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item, index) of 4" :key="index">
          <a href>
            <img src="https://ps.sfimg.cn/mapp/resource/b4/b487ee565582db0ebc8b0e75f0a12590.png">
            <p>送礼神器</p>
          </a>
        </li>
      </ul>
    </div>
    <div class="news">
      <em>优选快报</em>
      <div class="smallban">
        <van-swipe :autoplay="3000" vertical>
          <van-swipe-item>23sdfsdf1</van-swipe-item>
          <van-swipe-item>2fdhgh</van-swipe-item>
          <van-swipe-item>3dghfgj</van-swipe-item>
          <van-swipe-item>4fgjfj</van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <div class="floor">
      <h3>好货推荐</h3>
      <div class="floor1">
        <ul>
          <router-link tag="li" :to="{name:'detail',params: {id: index}}" v-for="(item, index) of goodpro" :key="index" >
            <a href>
              <div class="imgbox">
                <img :src="item.imageUrl" alt="">
              </div>
              <div class="infomations">
                <div class="p-label">
                  <!-- <p class="jf">多倍积分</p> -->
                  <!-- {{item.actLabelsname}} -->
                  <!-- <div v-html="item.actLabelsname"> -->
                  <!-- <span class="span2">n元n件</span> -->
                </div>
                <div class="title">{{item.productName}}</div>
                <div class="price">￥77.90</div>
              </div>
            </a>
          </router-link>
        </ul>
      </div>
      <div class="banner3">
        <div class="fl">
          <a href="">
            <img src="https://ps.sfimg.cn/mapp/resource/ee/ee2c23f072479070065b59f7608a0a13.jpg">
          </a>
        </div>
        <div class="fr">
          <a href="/product/info/286515">
          <img src="https://ps.sfimg.cn/mapp/resource/0d/0deee5d4c0e09a75f0a00c303632dc07.jpg">
          </a>
          <a href="/product/info/330865">
          <img src="https://ps.sfimg.cn/mapp/resource/27/27d6199e0728514188f17f0624fa3fa9.jpg">
          </a>
        </div>
      </div>
      <div class="banner4">
        <mt-swipe :auto="4000" class="ban4swipe">
        <mt-swipe-item v-for="(item, index) of 2" :key="index">
          <img src="https://ps.sfimg.cn/mapp/resource/5a/5aa52bccfdb2367f00ac7b69a4e71559.jpg">
        </mt-swipe-item>
      </mt-swipe>
      </div>
      <div class="banner4b">
          <img src="https://ps.sfimg.cn/mapp/resource/a6/a6c31a83c860a277565987c72e27b594.jpg">
      </div>
      <div class="banner5">
        <div class="title">买手推荐</div>
          <div class="slide">
            <van-swipe @change="onChange">
            <van-swipe-item>
              <a href="">
                <div class="p-img">
                  <img class="" src="https://ps.sfimg.cn/mapp/resource/64/649c009c8d0907bd31343f0984c618bd.png" data-original="https://ps.sfimg.cn/mapp/resource/64/649c009c8d0907bd31343f0984c618bd.png" style="display: block;">
                </div>
                <div class="p-name omit1">啤酒热货集结</div>
                <div class="p-describe omit1">送给懂酒的你</div>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="">
                <div class="p-img">
                  <img class="" src="https://ps.sfimg.cn/mapp/resource/c8/c8bdc488ac8235bd7763d38f25181122.png" data-original="https://ps.sfimg.cn/mapp/resource/c8/c8bdc488ac8235bd7763d38f25181122.png" style="display: block;">
                </div>
                <div class="p-name omit1">啤酒热货集结</div>
                <div class="p-describe omit1">送给懂酒的你</div>
              </a>
            </van-swipe-item>
            <van-swipe-item>
              <a href="">查看更多</a>
            </van-swipe-item>
            <!-- <div class="custom-indicator" slot="indicator">
                {{ current + 1 }}/4
            </div> -->
          </van-swipe>
          </div>
      </div>
      <div class="banner6">
        <a href="https://www.sfbest.com/html/customSpecial/24351.html">
          <img src="https://ps.sfimg.cn/mapp/resource/94/947d604e92571a9325c7cb0c301ac246.png">
        </a>
      </div>
      <div class="floor7">
        <div class="title">
          营养师推荐
          <span></span>
        </div>
        <div class="slide2">
          <van-swipe @change="onChange">
            <van-swipe-item>
              <a href="">
                <div class="p-img">
                  <img class="" src="https://ps.sfimg.cn/mapp/resource/94/9449a9ea5054941e9b4cbfdfd0c85405.jpg" data-original="https://ps.sfimg.cn/mapp/resource/94/9449a9ea5054941e9b4cbfdfd0c85405.jpg" style="display: block;">
                </div>
                <div class="p-name omit1">啤酒热货集结</div>
                <div class="p-describe omit1">送给懂酒的你</div>
              </a>
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="floor8">
        <div class="title">优选厨房</div>
        <div class="card">
          <a href="/cookbook/getDetail?cookBookId=2477"><img src="https://ps.sfimg.cn/mapp/resource/15/155499a7b53bdd00684544520d4bf4b2.jpg"></a>
        </div>
      </div>
      <div class="floor9">
        <a href="https://www.sfbest.com/html/customSpecial/19675.html">
                    <img src="https://ps.sfimg.cn/mapp/resource/e4/e4c9bb61240037cdc31ee7aa99b067dc.png">
                </a>
      </div>
      <div class="floor10" v-for="(item, index) of 3" :key="index">
        <div class="title">品牌优选<span></span></div>
        <div class="brand">
          <div class="brand-img"><a href="https://www.sfbest.com/html/customSpecial/21397.html"><img class="" src="https://ps.sfimg.cn/mapp/resource/36/3640bd4eed826655904f347c1e158bd4.jpg" data-original="https://ps.sfimg.cn/mapp/resource/36/3640bd4eed826655904f347c1e158bd4.jpg" style="display: block;"></a></div>
          <div class="brandlogo">
            <a href="https://www.sfbest.com/html/customSpecial/21397.html"><img class="" src="https://ps.sfimg.cn/mapp/resource/1b/1b7d145adeec3fbe13f961d4730c499f.jpg" data-original="https://ps.sfimg.cn/mapp/resource/1b/1b7d145adeec3fbe13f961d4730c499f.jpg" style="display: block;"></a>
          </div>
          <div class="brandinfo">
              <p class="brandname">蓝雪</p>
              <p class="brand-describe">海洋鲜味，一次尝够</p>
          </div>
          <div class="brandproduct">
            <ul>
              <li v-for="(item,index) of 4" :key="index">
                <div class="brand-p-img">
                  <img class="" src="http://p02.sfimg.cn/2018/4500296997/middle_4500296997_5_0/348x348.jpg" data-original="http://p02.sfimg.cn/2018/4500296997/middle_4500296997_5_0/348x348.jpg" style="display: block;">
                </div>
                <div class="brand-p-info">
                  <div class="brand-p-name omit1">蓝雪海鲜配菜</div>
                  <div class="brand-p-describe omit1">鲜美丰富</div>
                  <div class="brand-p-price">￥26.00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="floor11">
        <div class="title">优选国际<span></span></div>
        <div class="f11banner">
          <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>
              <img src="https://ps.sfimg.cn/mapp/resource/0f/0f2cb41bac3b7a28893897248b3fbc01.png">
            </van-swipe-item>
            <van-swipe-item>
              <img src="https://ps.sfimg.cn/mapp/resource/29/290e90ffcf8f0cf590cefea8d5c84034.png">
            </van-swipe-item>
          </van-swipe>
        </div>
      </div>
      <div class="floor12">
         <div class="f12pro">
          <div class="title">
            <h3>优选全球</h3>
            <p>网络世界好货</p>
          </div>
          <div class="products">
              <ul>
                <li v-for="(item, index) of 6" :key="index">
                  <a href="">
                    <div class="brand-p-img">
                      <img class="" src="http://p02.sfimg.cn/2017/1200267521/middle_w_1200267521_1_5/348x348.jpg" data-original="http://p02.sfimg.cn/2017/1200267521/middle_w_1200267521_1_5/348x348.jpg" style="display: block;">
                    </div>
                    <div class="brand-p-info">
                      <div class="brand-name">是的范德萨</div>
                      <div class="price">￥199.00</div>
                    </div>
                  </a>
                </li>
              </ul>
            <a href="">查看更多</a>
          </div>
        </div>
      </div>
      <!-- <div class="floor13" v-for="(item, index) of 4" :key="index">
        <div class="f13t">
          <p>优选母婴那个品</p>
          <p>山东黄金凤凰三地将发挥</p>
        </div>
        <ul>
          <li>
            <img class="" src="http://p02.sfimg.cn/2019/6300329737/middle_w_6300329737_1_6/348x348.jpg" data-original="http://p02.sfimg.cn/2019/6300329737/middle_w_6300329737_1_6/348x348.jpg" style="display: block;">
          </li>
        </ul>
      </div> -->
      <div class="recommend">
        <div class="renav">
          <ul>
            <li v-for="item of recnav" :key="item.appModelId">
              {{ item.appModelName }}
            </li>
          </ul>
        </div>
        <ul class="regoodslist">
          <li v-for="item of reclist" :key="item.productId">
            <img :src="item.imageUrl" alt="">
            <p>{{ item.productName }}</p>
            <em>{{ item.activityPrice01 }}</em>
          </li>
        </ul>
      </div>
    </div>
    <div class="scrollicon">
        <div class="iconfont icon-home" @click="returntop" v-if="toshow"></div>
        <div class="recommendicon" v-if="toyou">为你推荐</div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data () {
    return {
      current: 0,
      goodpro: [],
      msg: 'ha',
      reclist: [],
      recnav: [],
      toshow: false,
      toyou: false
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
    // console.log(this.$route.params)
    // this.getHomeGoodList()
    axios.get('/api/sf/homefloor.json').then(res => {
      // console.log(res.data)
      // console.log(res.data.appfloor)
      this.goodpro = res.data.appfloor.productArray
      // console.log(this.goodpro)
      // let arr = []
      // this.goodpro.map(val => {
      //   arr.push(val)
      //   console.log(arr)
      // })
    }),
    axios.get('/api/sf/recommend.json').then(res => {
      // console.log(res.data)
      this.reclist = res.data
    }),
    axios.get('/api/sf/recomnav.json').then(res => {
      // console.log(res.data.appModels)
      this.recnav = res.data.appModels
    }),
    document.getElementById('content').addEventListener('scroll', this.handscroll)
// console.log(document.getElementById('homescroll'))
  },
    destroyed: function () {
    document.getElementById('content').removeEventListener('scroll', this.handscroll)
  },
  methods: {
    ...mapActions({
      getHomeBannerList: 'getHomeBannerList'
      // getHomeGoodList: 'getHomeGoodList'
    }),
    returntop () {
      document.getElementById('content').scrollTop = 0
    },
    handscroll () {//上面监听的方法
    // console.log(111)
      // console.log(document.getElementById('content').scrollTop)
      if(document.getElementById('content')<300){
        this.toyou =false
        this.toshow = false
      } else if (document.getElementById('content').scrollTop > 300 && document.getElementById('content').scrollTop <400) {
        this.toshow = true
        this.toyou =false
      } else {
        this.toshow = false
        this.toyou =true
      }
      // if (document.getElementById('content').scrollTop > 300 && document.getElementById('content').scrollTop <400) {
      // } else {
      //   this.toshow = false
      // }
      // if (document.getElementById('content').scrollTop > 400) {
      // }
    },
    onChange () {
      // this.current = index
    }
    // goDetail (id) {
    //   this.$router.push('/detail') // string
    //   console.log(id)
    //   // this.$router.push({name: 'detail', params: {id}}) // Object
    //   // this.$router.push({ path: `/detail/${id}` }) // Object
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
      .top {
        @include rect(100%, 100%);
        @include padding(.09rem .16rem);
        .address {
          float: left;
          @include rect(.31rem, 100%);
          @include line-height(.31rem);
          @include text-align(center);
          font-size: .12rem;
          // @include margin(0 0 0 .2rem)
        }
        .search {
          @include rect(80%, .5rem);
          line-height:.4rem;
          @include background-color(#eee);
          .searchbox {
            .icon-sousuo {
              float:left;
              margin-left: .6rem;
            }
            .searchcont {
              margin-left: .1rem;
              float: left;
            }
          }
        }
      }
    }
    .content {
      @include rect(100%, auto);
      @include overflow();
      .van-tabs__wrap {
        position: fixed;
        top:.49rem;
      }
      .van-tabs {
        position: relative;
        width: 100%;
        .menu {
          position: absolute;
          right :0;
          top: .1rem;
          width: .2rem;
          z-index: 99999;
          background: #fff;
        }
        .banner {
          @include rect(100%, 2.16rem);
          overflow: hidden;
          img {
            @include rect(100%, 2.16rem);
          }
      }
      .nav {
        @include rect(100%, .73rem);
        // @include padding(0.576rem 0 1.2374rem);
        margin: .3rem 0 .2rem;
        ul {
          @include rect(100%, .73rem);
          li {
            float: left;
            text-align: center;
            a {
              @include text-color(#000);
              img {
                @include rect(.45rem, .45rem)
              }
              p {
                margin: .1rem .1rem 0;
              }
            }
          }
        }
      }
      .news {
        @include rect(100%, .35rem);
        padding: 0 .1rem;
        .em {
          float:left;
        }
        .smallban {
          float:right;
          @include rect(2.5rem, .35rem);
          overflow: hidden;
          .van-swipe {
            @include rect(100%, .28rem);

            .van-swipe__track {
              // @include rect(100%, .4rem);
              // height: .28rem;
              .van-swipe-item {
                // @include rect(100%, .125rem)
              }
            }
            .van-swipe__indicator {
              display: none;
            }
          }
        }
      }
      .floor {
        h3 {
          @include rect(100%, .62rem);
          @include text-align(center);
        }
        .floor1 {
          @include rect(100%, 3.85rem);
          ul {
            @include margin(0 .1rem 0);
            @include rect(100%, 1.92rem);
            li {
            float: left;
            @include margin(0 .05rem 0);
            @include rect(1.08rem, 1.92rem);
            a {
              .imgbox {
                @include rect(1.08rem, 1.08rem);
                img {
                  @include rect(100%, 100%)
                }
              }
              .infomations {
                @include rect(1.08rem, .555rem);
                .p-label {
                  .jf {
                    @include margin(auto);
                    margin-top: .05rem;
                    @include rect(.6rem, .135rem);
                    // @include padding(0 .06rem);
                    @include background-color(#f5724b);
                    @include text-color(#fff);
                    @include line-height(.135rem)
                  }
                  .sp1 {
                    display: block;
                    background-color: #f5c41c;
                    padding: 0 .6rem;
                    @include text-color(#fff);
                  }
                }
                .title {
                  @include rect(100%, .16rem);
                  @include ellipsis($width: 100%, $line-clamp: 1);
                  // @include line-height(.16rem);
                  margin-top: .05rem;
                  @include text-color(#000);
                  p {
                    font-size: .12rem/.16rem "";
                  }
                }
                .price {
                  color: #f40;
                  margin-top: .05rem
                }
              }
            }
           }
          }
        }
        .banner3 {
          @include rect(100%, 2.7rem);
          .fl {
            float: left;
            a {
              img {
                @include rect(1.87rem, 2.69rem)
              }
            }
          }
          .fr {
            float: left;
            @include rect(1.87rem, 2.69rem);
            a {
              display: block;
              img {
                @include rect(1.87rem, 1.34rem)
              }
            }
          }
        }
        .banner4 {
          @include rect(100%, 1.4rem);
          .mint-swipe {
            @include rect(100%, 100%);
            img {
              @include rect(100%, 1.4rem)
            }
          }
        }
        .banner4b {
          margin-top: .3rem;
          img {
            @include rect(100%, 1.4rem);
          }
        }
        .banner5 {
          @include rect(100%, 3.02rem);
          .title {
            @include rect(100%, .62rem);
          }
          .slide {
            .van-swipe {
            @include rect(100%, 2.4rem);
              .p-img {
                @include rect(100%, 1.74rem);
                img{
                  @include rect(3.235rem, 100%);
                }
              }
              .p-name {
                @include rect(100%, .19rem);
              }
              .p-describe {
                @include rect(3.235rem, .305rem);
              }
            }
          }
        }
        .banner6 {
          @include rect(100%, 1.4rem);
          img {
            @include rect(100%, 1.4rem);
          }
        }
        .floor7 {
          @include rect(100%, 3.02rem);
          .title {
            @include rect(100%, .62rem);
          }
          .slide2 {
            .van-swipe {
            @include rect(100%, 2.26rem);
              .p-img {
                @include rect(100%, 2.26rem);
                img{
                  @include rect(1.26rem, 100%);
                }
              }
              .p-name {
                @include rect(100%, .19rem);
              }
              .p-describe {
                @include rect(3.235rem, .305rem);
              }
            }
          }
        }
        .floor8 {
          @include rect(100%, 2.48rem);
          .card {
            @include rect(3.235rem, 1.625rem);
            img {
             @include rect(100%, 100%)
            }
          }
        }
        .floor9 {
          @include rect(100%, 1.4rem);
          img {
            @include rect(100%, 100%);
          }
        }
        .floor10 {
          @include rect(100%, 4.5rem);
          .title {
            @include rect(100%, .62rem);
          }
          .brand {
            position: relative;
            .brand-img {
              img {
                @include rect(100%, 1.4rem);
              }
            }
            .brandlogo {
              position: absolute;
              top: 1rem;
              left: .2rem;
              @include rect(.58rem, .58rem);
              img {
                @include rect(100%, 100%)
              }
            }
            .brandinfo {
              @include rect(100%, .6rem);
              text-indent: 1rem;
            }
            .brandproduct {
              @include rect(100%, 1.88rem);
              ul {
                @include flexbox();
                li {
                  .brand-p-img {
                    img {
                    @include rect(1rem, 1rem);
                    }
                  }
                  .brand-p-info {
                    text-align: center;
                    padding: .16rem 0;
                    .brand-p-name {
                      font-size: .12rem;
                    }
                    .brand-p-describe {
                      @include text-color(#ccc);
                      font-size: .12rem;
                    }
                    .brand-p-price {
                      @include text-color(#f40);
                    }
                  }
                }
              }
            }
          }
        }
        .floor11 {
          @include rect(100%, 2.2rem);
          .title {
            @include rect(100%, .62rem);
          }
          .f11banner {
            @include rect(100%, 1.4rem);
            img {
             @include rect(100%, 100%)
            }
          }
        }
        .floor12 {
          @include rect(100%, 2.78rem);
          .f12pro {
            .title {
              @include rect(100%, .83rem);
            }
            .products {
              @include rect(100%, 1.86rem);
              @include flexbox();
              overflow: auto;
              ul {
                @include rect(100%, 100%);
                @include flexbox();
                li {
                  @include rect(1rem, 1.86rem);
                  img {
                    @include rect(1rem, 1rem);
                  }
                }
              }
            }
          }
        }
        .floor13 {
          @include rect(100%, 2.78rem);
          .f13t {
            @include rect(100%,.83rem)
          }
          ul {
            @include rect(100%, 1.86);
            li {
            @include rect(1rem, 1.86rem);
              img {
              @include rect(1rem, 1rem);
              }
            }
          }
        }
        .recommend {
          .renav {
            // @include rect(100%, .4rem);
            overflow: auto;
            ul {
              @include flexbox();
            @include rect(10rem, .4rem);
              line-height:.4rem;
              li {
                @include flex();
                @include rect(1.2rem, .4rem);
                line-height: .4rem;
                // padding: .1rem .2rem;
                // margin-left: .1rem;
                // wrap: nowrap;
              }
            }
          }
          .regoodslist {
            @include rect(100%, auto);
            margin-top: .2rem;
            li {
              float: left;
              @include rect(1.74rem, 2.83rem);
              // wrap: nowrap;
              margin-left:.15rem;
              img {
                @include rect(1.74rem, 1.74rem);
              }
              p {
                @include rect(100%, .4rem);
              }
              em {
                @include rect(100%, .3rem)
              }
            }
          }
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
  .scrollicon{
    position: fixed;
    bottom: 1.2rem;
    right: .2rem;
    @include rect(.8rem, .4rem);
    text-align: center;
    .iconfont {
      @include rect(.4rem, .4rem);
      @include background-color(#fff);
      line-height: .4rem;
      border-radius: 50%;
    }
    .recommendicon {
      @include rect(.4rem, .4rem);
      @include background-color(#191);
      line-height: .2rem;
      border-radius: 50%;
      font-size: .1rem;
    }
  }
}
</style>
