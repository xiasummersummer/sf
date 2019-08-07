<template>
  <div class="container">
    <div class="smallmenu" v-if="show">
      <div class="smalltop">
        <span class="menutitle">全部商品分类</span>
        <span class="iconfont icon-cuo closecuo" @click="closesmall">x</span>
      </div>
      <div class="smcontent">
        <ul>
          <li v-for="item of navlist" :key="item.appModelId"  :title="item.appModelName">
            <a href="">
              <img :src="item.image" alt="">
              <p>{{ item.appModelName }}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <header class="header">
      <div class="top">
        <div class="address">北京</div>
        <div class="search">
           <div class="searchbox">
            <span class="iconfont icon-sousuo"></span><span class="searchcont">搜索优选商品</span>
          </div>
        </div>
      </div>
    </header>
    <div class="content" id="content">
        <van-tabs v-model="active" title-active-color="green">
          <div class="iconfont icon-menu-line menu" title-active-color="green" @click="alertfn"></div>
          <van-tab  v-for="item of navlist" :key="item.appModelId"  :title="item.appModelName">
            <Tab1 v-show="active === 0"/>
            <Tab2 v-show="active === 1"/>
            <Tab3 v-show="active === 2"/>
            <Tab4 v-show="active === 3"/>
            <!-- <component :is="Active"></component> -->
            <!-- <Tab5 v-show="active === 4"/> -->

            <!-- <Tab`${index+1}` /> -->
          </van-tab>
            <!-- <Tab2 /> -->
            <!-- <Tab3 /> -->
            <!-- <Tab4 /> -->
        </van-tabs>
        <!-- <div class="menu">
          <ul class="tabs">
            <li v-for="(item, index) of navlist" :key="index" :class="{active:index == num}">
              {{item.appModelName}}
            </li>
          </ul>
          <div class="tabcontent" v-for="(item, index) of tabcontents" :key="index" v-show="index == num">
          </div>
        </div> -->
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Tab1 from '@/components/nav/Tab1'
import Tab2 from '@/components/nav/Tab2'
import Tab3 from '@/components/nav/Tab3'
import Tab4 from '@/components/nav/Tab4'
// import axios from 'axios'
export default {
  data () {
    return {
      // vertical: true
      // navlist: [],
      active: 0,
      value: '',
      show: false,
      overlay: true
    }
  },
  components: {
    Tab1,
    Tab2,
    Tab3,
    Tab4
  },
  computed: {
    // Active () {
    //   switch (this.active) {
    //     case 1: return 'Tab1';break;
    //     case 2: return 'Tab2';break;
    //     case 3: return 'Tab3';break;
    //     case 4: return 'Tab4';break;
    //   }
    // },
    ...mapState({
      navlist: (state) => {
        // console.log(state)
        return state.home.navlist
      }
      // navlist: (state) => state.home.navlist,
    })
  },
  mounted () {
    // this.getHomeBannerList()
    this.getHomeNavList()
    // axios.post('/api/getAppFloorDetailById', {
    //   floorId: 11
    // }).then(res => {
    //   console.log(res.data)
    // })
  },
  methods: {
    closesmall () {
      this.show = false
    },
    ...mapActions({
      // getHomeBannerList: 'getHomeBannerList',
      getHomeNavList: 'getHomeNavList'
    }),
    alertfn () {
      this.show = true
    }
  }
  // popup () {
  //   Dialog.alert({
  //     title: '标题',message: '弹窗内容'
  //   })
  // }
}
</script>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app, .box {
  @include rect(100%, 100%);
}

#app, .box {
  .smallmenu {
    @include rect(100%, 100%);
    background-color: rgba(0,0,0,.5);
    position: absolute;
    top: 0;
    z-index: 111111;
    .smalltop {
      @include background-color(#fff);
      @include rect(100%, .5rem);
      line-height: .5rem;
      border-bottom: 1px solid #ccc;
      .menutitle {
        text-align: center;
        float: left;
        margin-left: 1.4rem;
      }
      .icon-cuo {
        float:right;
        margin-right: .3rem;
      }
    }
    .smcontent {
      @include background-color(#fff);
      @include rect(100%, 4.5rem);
      ul {
        @include rect(100%, 100%);
        padding-left: .1rem;
        li {
          float: left;
          @include rect(30%, 25%);
          text-align: center;
          // padding-top: .1rem;
          margin-top: .05rem;
          img {
            @include rect(.45rem, .45rem);
          }
          p {
            @include text-color(#000);
            margin-top:.1rem;
          }
        }
      }
    }
  }
  .container {
    .header {
      .top{
        .address {}
        .search {
        }
      }
    }
    .content {
      .menu {
        // .tabs {
        //   @include flexbox();

        //   li {
        //     @include flex();
        //     @include rect(.58rem, .35rem);
        // }
        // }

        }
        .van-tabs__line {
          background-color: green;
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
