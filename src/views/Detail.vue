<template>
  <div class="box">
  <div class="container">
    <header class="header">
      <span class="iconfont icon-jiantouarrowhead7 returnback" @click="returngo"></span>
      <div class="to">
        <div class="degoods" @click="cur=0" :class="{active:cur==0}">商品</div>
        <div class="dedistribute" @click="cur=1" :class="{active:cur==1}">详情</div>
        <div class="decoments" @click="cur=2" :class="{active:cur==2}">评价</div>
      </div>
    </header>
      <div class="content">
        <!-- <De2 /> -->
        <De1 v-show="cur==0"/>
        <De2 v-show="cur==1"/>
        <De3 v-show="cur==2"/>
      </div>
  </div>
    <!-- <footer class="footer">
      <div class="server iconfont icon-erji"></div>
      <div class="cart iconfont icon-gouwuche"></div>
      <div class="home iconfont icon-wode-copy"></div>
      <div class="addcart">
        加入购物车
      </div>
      <div class="buynow">
        一键购买
      </div>
    </footer> -->
  </div>
</template>

<script>
import axios from 'axios'
import De1 from '@/components/details/De1'
import De2 from '@/components/details/De2'
import De3 from '@/components/details/De3'
import { mapState, mapActions} from 'vuex'
export default {
  data () {
    return {
      cur: 0,
      // detailimg: '',
      // idnum: 0
    }
  },
  computed: {
    ...mapState({
      detailslist: (state) => {
        return state.detail.detailslist
      }
    })
  },
  mounted () {
    // console.log(this.$route)
    const { id } = this.$route.params
    axios.get('/api/sf/homefloor.json').then(res => {
      console.log(res.data)
      console.log(res.data.appfloor.productArray[id])
      
      this.$store.commit('changeDetaillist',res.data.appfloor.productArray[id])
    })
    console.log(this.$store)
  },
  components: {
    De1,
    De2,
    De3
  },
  methods: {
    returngo () {
      this.$router.push('/')
    },
    ...mapActions({
      getDetaillist: 'getDetaillist'
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
    @include flex();
    @include rect(100%, auto);
    @include flexbox();
    @include flex-direction(column);
    .header {
      @include line-height(.44rem);
      // @include flexbox();
      @include background-color(#eee);
      .returnback {
        float: left;
        // @include flex();
        @include rect(.3rem, .44rem);
      }
      .to {
        float: left;
        @include rect(3rem, .44rem);
        margin: auto 0;
        text-align: center;
        @include flexbox();
        .active{
          border-bottom: 2px solid green;
        }
        .degoods {
          @include flex();
        }
        .dedistribute {
          @include flex();
        }
        .decoments {
          @include flex();
        }
      }
    }
    .content {
      @include rect(100%, auto);
      @include overflow();
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
