<template>
  <div class="detail">
    <div class="de1box">
    <div class="imgbox">
      <a href="">
        <van-swipe @change="onChange">
          <van-swipe-item><img :src="homelist.imageUrl"></van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
         <div class="custom-indicator" slot="indicator">
          {{ current + 1 }}/4
        </div>
</van-swipe>
      </a>
    </div>
    <div class="pinfo">
      <div class="infotop">
        <span class="sp1">{{ homelist.sfbestPrice01 }}</span>
        <span class="sp2">/{{ homelist.specification }}</span>
      </div>
      <div class="infobottom">
        <div class="p-label">自营</div>
        <div class="p-title">{{ homelist.productName }}</div>
      </div>
    </div>
    <div class="active">
      <span>促销</span>
      <span v-html="homelist.actLabelsname"></span>
      <span></span>
      <span>...</span>
    </div>
    <div class="proselect">
      <div class="proaddress">
          <div class="posl">
           <span class="sp1">产地</span>
            <img src="http://i.sfimg.cn/html/images/country/CN.jpg" class="flag">
            <span class="sp2">中国</span>
          </div>
          <div class="posr">
            <span>品牌</span>
            <span>百利佳</span>
          </div>
      </div>
      <div class="numadd">
        <span class="num">数量</span>
        <div class="countnum">
          <div class="reduce" @click="reducecarnum">-</div>
          <div class="goodsnum">{{ detailnum }}</div>
          <div class="add" @click="addcarnum">+</div>
        </div>
      </div>
      <div class="delivery">
        <span class="delivername">配送</span>
        <div class="addressbox">
          <span class="to">至</span>
          <span class="address">北京三角函数</span>
          <div class="goods">缺货</div>
        </div>
      </div>
      <div class="comments">
        <span class="sp1">用户评价</span>
        <span class="sp2">还没有赛事登记</span>
      </div>
      <div class="recomend">
        <span>同类推荐</span>
      </div>
      <div class="pictitle">
        <span>图文详情</span>
      </div>
      <div class="discribute">
        抱歉，该区缺货
      </div>
    </div>
  </div>
    <div class="detailfooter">
      <div class="server iconfont icon-erji"></div>
      <div class="cart iconfont icon-gouwuche" @click="gocar"><span class="cartnum" v-if="num>0">{{ num }}</span></div>
       
      <div class="home iconfont icon-wode-copy"></div>
      <div class="addcart" @click="addfn">
        加入购物车
      </div>
      <div class="buynow">
        一键购买
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      current: 0,
      value: 1,
      img: '',
      homelist: '',
      detailnum: 1
    }
  },
  beforeRouteEnter (to, from, next) {
    // if (localStorage.getItem('isLogin') === 'ok') {
    //   next()
    // } else {
    //   next('/login')
    // }
    next(vm => {
      // console.log(vm)
      // if (vm.$store.state.loginState === 'ok') {
      //   next()
      // } else {
      //   next('/login')
      // }
    })
  },
  computed: {
    ...mapState({
      carlists: state => state.carlist.carlists,
      num: state => state.carlist.num
    })
  },
  methods: {
    onChange (index) {
      this.current = index
    },
    reducecarnum(){
      if(this.detailnum>1){
        this.detailnum--
      }
    },
    addcarnum () {
      this.detailnum++
    },
    addfn () {
      console.log(1)
      console.log(this.$store)
      this.homelist.number = this.detailnum
      console.log(this.homelist)
      console.log(this.carlists)
      const { id } = this.$route.params
      axios.get('/api/sf/homefloor.json').then(res => {
        // this.$store.commit('changecarlist',this.homelist)
        // this.$store.state.carlist.carlists.number = this.detailnum
        // console.log(this.detailnum)
        // console.log(res.data.appfloor.productArray[id])
        // console.log(this.$store)
        this.$store.state.carlist.carlists.push(this.homelist)
      })
      this.$store.commit('changecartnum',{number: 1})
    },
    gocar () {
      this.$router.push('/cart')
    }
  },
  mounted () {
    // console.log(this.$route.params)
    // // console.log(localStorage.getItem('detailimg'))
    // // this.detailimg = localStorage.getItem('detailimg')
    // // console.log(this.$store)
    // // console.log(this.$store.state)
    // console.log(this.$store.state.detail.detailimg)

    // this.img = this.$store.state.detail.detailimg.imageUrl
    // this.protitle = this.$store.state.detail.detailimg.activityPrice01
    // this.carstore = this.$store.state.detail.detailimg
    const { id } = this.$route.params
    axios.get('/api/sf/homefloor.json').then(res => {
      console.log(res.data.appfloor.productArray[id])
      this.homelist = res.data.appfloor.productArray[id]
    })
    console.log(this.homelist)
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
      @include rect(100%, auto);
      .detail {
      @include rect(100%, auto);
      }
    }
              .de1box {
                margin-bottom: .88rem;
                @include rect(100%, auto);
                .imgbox {
                  @include rect(100%, 3.75rem);
                  position: relative;
                  img {
                    @include rect(3.75rem, 3.75rem);
                  }
                  .custom-indicator {
                    position: absolute;
                    right: .1rem;
                    bottom: .1rem;
                    // padding: .01rem .05rem;
                    border: 1px solid #000;
                    @include rect(.4rem, .2rem);
                    text-align: center;
                    line-height: .2rem
                  }
                }
                .pinfo {
                  @include rect(100%, .92rem);
                  .infotop {
                    @include rect(100%, .31rem);
                    margin-left: .1rem;
                    line-height: .31rem;
                    .sp1 {
                      font-size: .31rem;
                      @include text-color(#dd0000);
                    }
                    .sp2 {}
                  }
                  .infobottom {
                    margin: .1rem 0 0 .1rem;
                    // text-align: center;
                    line-height: .16rem;
                    .p-label {
                      float: left;
                      @include rect(.3rem, .16rem);
                      border: 1px solid #000;
                    }
                    .p-title {
                      margin-left: .1rem;
                      float: left;
                      @include rect(2.6rem, .16rem)
                    }
                  }
                }
                .proselect {
                  // @include rect(100%, .35rem);
                  border-top: 1px solid #ccc;
                  .proaddress {
                    padding-left: .16rem;
                    @include rect(100%, .5rem);
                    line-height: .5rem;
                    //  box-shadow: 0px -.1rem 0px 0px #ccc;
                    .posl {
                      @include rect(1.23rem, .5rem);
                      float: left;
                      .sp1 {
                        margin-right: .05rem;
                      }
                      img {
                        @include rect(.15rem, .15rem);
                      }
                      .sp2 {
                        margin-left: .05rem;
                      }
                    }
                    .posr {
                      @include rect(1.0975rem, .5rem);
                      float: left;
                    }
                  }
                  .numadd {
                    border-top: 1px solid #ccc;
                    // padding-left: .16rem;
                    @include rect(100%, .5rem);
                    padding: .13rem 0 0 .16rem;
                    .num {
                      float: left;
                    }
                    .countnum {
                     float: left;
                      margin-left: .1rem;
                      @include rect(1rem, .3rem);
                      @include text-align(center);
                      line-height: .2rem;
                      font-size: .16rem;
                      .reduce {
                        @include rect(.2rem, .2rem);
                        float: left;
                        border-radius:50%;
                        border:1px solid #ccc;
                        // margin-top: .15rem;
                      }
                      .goodsnum {
                        @include rect(.3rem, .3rem);
                        float: left;
                        margin: 0 .1rem;
                      }
                      .add {
                        @include rect(.2rem, .2rem);
                        float: left;
                        border-radius:50%;
                        border:1px solid #ccc
                      }
                    }
                  }
                  .delivery {
                    border-top: 1px solid #ccc;
                    padding-left: .16rem;
                    @include rect(100%, .63rem);
                    // position: relative;
                    .delivername {
                      float: left;
                    }
                    .addressbox {
                      float: left;
                      margin-left: .1rem;
                      .to {
                        margin-right: .1rem;
                      }
                      .address {}
                    }
                    .goods {
                      // position: absolute;
                      @include rect(100%, .18rem);
                      line-height: .18rem;
                      @include text-color(#dd0000)
                    }

                  }
                  .comments {
                    border-top: 1px solid #ccc;
                    padding-left: .16rem;
                    .sp1 {
                      margin-right: .1rem;
                    }
                    .sp2 {

                    }
                  }
                  .recomend {
                    padding-left: .16rem;
                  }
                  .pictitle {
                    padding-left: .16rem;
                  }
                  .discribute {
                    position: fixed;
                    bottom: .44rem;
                    text-align: center;
                    @include rect(100%, .4rem);
                    @include text-color(#f04d53);
                    line-height: .4rem;
                    left: 0;
                    right: 0;
                    @include background-color(#fff1f2)
                  }
                }
              }
  }
  .detailfooter {
    background-color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    line-height: .44rem;
    @include flexbox();
    .server {
      @include flex()
    }
    .cart {
      @include flex();
      position: relative;
      .cartnum {
        position: absolute;
        right:0;
        top:0;
        display: block;
        @include rect(.15rem,.15rem);
        line-height: .15rem;
        border-radius:50%;
        background-color:#dd0000;
        @include text-color(#fff);
        font-size:.12rem;
      }
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
