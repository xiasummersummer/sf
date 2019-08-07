<template>
  <div class="goodsbox">
    <header class="header">
       <div class="servepos">
        <span @click="returndetail" class="returngo">返回</span>
        <div class="posiin">
          <i class="iconfont icon-sousuo"></i>
          <span>北京</span>
          <i class="iconfont icon-jiantou"></i>
        </div>
        <div class="optionsbox">
          <p class="options" v-if="click1" @click="op">编辑</p>
          <p class="over" v-if="click2" @click="doit">完成</p>
        </div>
      </div>
    </header>
    <div class="line"></div>
    <div class="title">
      <van-checkbox v-model="checked" class="select" @click="selectfn"></van-checkbox>
      <span class="goods1">优选普通商品</span>
    </div>
    <div class="line"></div>
    <div class="goodslist" v-for="item of cargoods" :key="item.productId">
      <van-checkbox v-model="checked" class="checkbox" @click="selectfn"></van-checkbox>
      <div class="listright">
       <div class="rt">
          <div class="imgbox">
          <img :src="item.imageUrl">
        </div>
        <div class="goodsmsg">
          <div class="msgname">{{item.productName}}</div>
          <div class="pricebox">
            <div class="pricel">
              <div class="price"> ￥ {{ item.activityPrice01 }}</div>
              <div class="kg">{{ item.specification}}</div>
            </div>
            <div class="delete"></div>
            <!-- <van-stepper v-model="value" class="addnum"/> -->
            <div class="addnum">
              <div class="reduce" @click="reducecarnum(item.productId)">-</div>
              <div class="goodsnum">{{ item.number }}</div>
              <div class="add" @click="addcarnum(item.productId)">+</div>
            </div>
          </div>
        </div>
       </div>
       <div class="gift">
         <span>在电风扇的</span><i class="iconfont"></i>
       </div>
      </div>
    </div>
    <div class="rules">
      <i class="iconfont"></i>
      <span>运费规则</span>
    </div>
 <div class="countbox">
      <!-- <van-submit-bar :price="3050" button-text="结算" @submit="onSubmit">
      <van-checkbox v-model="checked" @click="selectfn">全选</van-checkbox> -->
      <!-- <span slot="tip">
        你的收货地址不支持同城送, <span>修改地址</span>
      </span> -->
      <!-- </van-submit-bar> -->
      <!-- <div class="countbox"> -->
        <van-checkbox v-model="checked" @click="selectfn">全选</van-checkbox>
        <!-- <span class="checkall">全选</span> -->
        <div class="countsum">
          <p class="countcen"><span>总计：</span> <span class="costprice">¥{{ constall }}</span></p>
          <p class="countbot">商品金额（不含运费）¥{{ constall }}</p>
        </div>
        <button class="sub" @click="onSubmit">结算</button>
        <!-- </div> -->
      </div>
  <!-- <div class="contentbox">

  </div> -->
  </div>
</template>

<script>
// import { mapState } from 'vuex';
import Vue from 'vue'
import { Dialog } from 'vant'
Vue.use(Dialog)
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      value: 0,
      click1: true,
      click2: false,
      checked: true,
      cargoods: []
    }
  },
  computed: {
      checkbox1 () {
      if (!this.checked) {
        return ''
      } else {
        return 'checked'
      }
    },
    ...mapState({
      cargoodslist: state => state.carlist.cargoodslist
    }),
    constall () {
      let costpay = 0
      this.cargoods.forEach(value => {
        // console.log(value.activityPrice01)
        // count += value.number
      costpay += value.activityPrice01*value.number
    })
      return costpay
    }
  },
  mounted () {
    // console.log(localStorage.getItem('detailists'))
    console.log(this.$store)
    // this.cargoods = this.$store.state.carlist.carlists
    // console.log(this.$store)
    // console.log(this.cargoods[0])
    let obj={}
    this.$store.state.carlist.carlists.forEach((value,index) => {
         if(obj[value.productId]){
          obj[value.productId].number += value.number
        } else {
          obj[value.productId] = value
        }
    });
  console.log(obj)
  let arr = []
  for(var i in obj){
    arr.push(obj[i])
  }
  this.cargoods = arr
  console.log(this.cargoods)
  },
  methods: {
    returndetail () {
      this.$router.go(-1)
    },
    onSubmit () {
      if (!this.checked) {
        // console.log(1)
        Dialog.alert({message: '请先选择商品'})
      } else {
        // console.log('hahah')
        this.$router.push('/count')
      }
    },
    doit () {
      this.click1 = true
      this.click2 = false
    },
    op () {
      this.click1 = false
      this.click2 = true
    },
    selectfn () {
      if (!this.checked) {
        // console.log('heheh')
        this.checked = true
        console.log(this.checked)
      } else {
        // console.log('222')
        this.checked =false
        console.log(this.checked)
      }
      // console.log(111)
    },
    reducecarnum (id) {
      console.log(this.cargoods)
      console.log(id)
      this.cargoods.forEach(value => {
        if(value.number>0){
           if(id===value.productId) {
            value.number--
          }
        }      
      })
    },
       addcarnum (id) {
      // this.countnum++
       this.cargoods.forEach(value => {
        // console.log(value.productId)
        if(id===value.productId) {
          value.number++
        }
      })
    },
    onChange () {}
  }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app{
  @include rect(100%, 100%);
}
.goodsbox {
  @include rect(100%, auto);
  @include overflow();
  @include background-color(#eee);
  .header {
    @include rect(100%, .4rem);
    @include background-color(#fff);
    position: fixed;
    top:0;
    border-bottom: 1px solid #eee;
    z-index: 1;
    .servepos {
      @include rect(100%, 100%);
      .returngo {
        float: left;
        margin-left: .2rem;
        line-height: .4rem;
        @include rect(.3rem, .4rem);
      };
      .posiin {
          float: left;
          @include rect(3rem, 100%);
          text-align: center;
        }
      .optionsbox {
        float: left;
        line-height: .4rem;
        .options {
          float: left;
          @include text-color(#87d50d)
        }
        .over {
          float: left;
          @include text-color(#87d50d)
        }
      }
    }
  }
  .line {
    @include rect(100%, .2rem);
    @include background-color(#eee)
  }
  .title {
    @include background-color(#fff);
    @include rect(100%, .4rem);
    margin-top: .2rem;
    line-height: .4rem;
    .select {
      float: left;
      @include rect(.2rem, .2rem);
      border-radius: 50%;
      border:1px solid #ccc;
      margin: 0 .1rem;
    }
    .goods1 {
      float: left;
      // font-size: .2rem;
      line-height: .4rem;
    }
  }
  .goodslist {
    margin-top: .1rem;
    @include background-color(#fff);
    @include rect(100%, 1.6rem);
    .checkbox {
      float: left;
      @include rect(.2rem, .2rem);
      border-radius: 50%;
      border: 1px solid #ccc;
      // line-height: 1.6rem;
      margin-top:.5rem;
      margin-left: .1rem;
    }
    .listright {
      float: left;
      @include rect(3.2rem, auto);
      .rt {
        @include rect(100%, .90rem);
        .imgbox {
          @include rect(.9rem, .9rem);
          float: left;
          margin-left:.1rem;
          img {
            @include rect(.9rem, .9rem);
          }
      }
      .goodsmsg {
        float:left;
        @include rect(2.2rem, .9rem);
        .msgname {

        }
        .pricebox {
          @include rect(2.2rem, .5rem);
          // @include flexbox();
          .pricel {
            @include rect(.5rem, .4rem);
            float:left;
            .price {
              // float: left;
              @include text-color(#f40)
            }
          }
          .delete {
            float: left;
            @include rect(.3rem, .3rem);
          }
          .addnum {
            float: right;
            @include rect(1.2rem, .3rem);
            // @include flexbox();
            @include text-align(center);
            line-height: .3rem;
            font-size: .16rem;
            .reduce {
              @include rect(.3rem, .3rem);
              float: left;
              border-radius:50%;
              border:1px solid #ccc
            }
            .goodsnum {
              @include rect(.3rem, .3rem);
              float: left;
              margin: 0 .1rem;
            }
            .add {
              @include rect(.3rem, .3rem);
              float: left;
              border-radius:50%;
              border:1px solid #ccc
            }
          }
        }
        }
      }
      .gift {
        @include rect(100%, .3rem);
      }
    }
  }
  .rules {
    @include rect(100%, 3rem);
    @include background-color(#eee)
  }
  .countbox {
    @include rect(100%, .5rem);
    position: absolute;
    @include background-color(#fff);
    bottom:.5rem;
    // .van-submit-bar {
    //   border-top: 1px solid #ccc;
    //   @include rect(100%, .5rem);
    //   bottom: .5rem;
    //   .van-submit-bar__tip {
    //     display: none;
    //   }
    //   .van-button--danger {
    //     background-color: #87d50d;
    //     border: none;
    //   }
    // }
    border-top: 1px solid #ccc;
    .van-checkbox {
      float: left;
      @include rect(.3rem, .3rem);
      .van-icon-success {
        margin: .05rem 0 0 .1rem;
      }
    }
    .countsum {
      float: left;
      margin-left: .1rem;
      .costprice {
        @include text-color(#f40);
      }
    }
    .sub {
      float: right;
      @include rect(1rem, .5rem);
      border: none;
      background-color: #87d50d;
      @include text-color(#fff);
      font-size: .16rem;
    }
  }
}
</style>
