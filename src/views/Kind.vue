<template>
  <div class="container">
    <header class="header">
      <div class="search">
          <van-search placeholder="搜索优选商品" v-model="value" />
      </div>
    </header>
    <div class="content">
      <div class="kindcontent">
        <van-sidebar :active-key="activeKey" @change="onChange" class="siderleft">
          <van-sidebar-item :title="item.appModelName" v-for="(item, index) of kindnav" :key="index" />
          <!-- <van-sidebar-item title="标签名称" info="8" />
          <van-sidebar-item title="标签名称" info="99" />
          <van-sidebar-item title="标签名称" info="99+" /> -->
        </van-sidebar>
          <Kind1 v-show="activeKey === 0"/>
          <Kind2 v-show="activeKey === 1"/>
          <Kind3 v-show="activeKey === 2"/>
          <Kind4 v-show="activeKey === 3"/>
          <Kind5 v-show="activeKey === 4"/>
          <Kind6 v-show="activeKey === 5"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Kind1 from '@/components/kind/Kind1'
import Kind2 from '@/components/kind/Kind2'
import Kind3 from '@/components/kind/Kind3'
import Kind4 from '@/components/kind/Kind4'
import Kind5 from '@/components/kind/Kind5'
import Kind6 from '@/components/kind/Kind6'

export default {
  data () {
    return {
      activeKey: 0,
      active: 0,
      index: 0,
      kindnav: [],
      value: ''
    }
  },
  components: {
    Kind1,
    Kind2,
    Kind3,
    Kind4,
    Kind5,
    Kind6
  },
  methods: {
    onChange (key) {
      this.activeKey = key
    }
  },
  mounted () {
    axios.get('api/sf/homenav.json').then(res => {
      console.log(res.data.data.appModels)
      this.kindnav = res.data.data.appModels
    })
  }
}
</script>

<style>

</style>

<style lang="scss">
@import '@/lib/reset.scss';

html, body, #app, .box {
  @include rect(100%, 100%);
}

#app, .box {
  .container {
    .header {
      .search {
        text-indent: .5rem;
      }
    }
    .content {
      @include flex();
      @include flexbox();
      @include rect(100%, auto);
      @include overflow();
      // .menu {
      //   .tabs {
      //     @include flexbox();
      //     li {
      //       @include flex();
      //       @include rect(.58rem, .35rem);
      //     }
      //   }
      // }
      .kindcontent {
        @include flex();
        @include rect(100%, auto);
        .siderleft {
          @include rect(.7rem, 100%);
          float: left;
          .van-sidebar-item {
            // border-color: green;
            line-height: .2rem;
            .van-sidebar-item__text {
              @include rect(.35rem, .35rem);
            }
          }
          .van-sidebar-item--select{
            border-color: green;

          }
        }
        .kindbox {
          float: left;
          @include rect(3.05rem, auto);
          @include overflow();
          img {
            @include rect(2.7rem, 1rem);
          }
          p {
            @include rect(100%, .2rem);
            margin-top: .2rem;
            text-align: center;
          }
          ul {
            li {
              float: left;
              text-align: center;
              @include rect(1.01rem, .75rem);
              margin-top: .15rem;
              img {
                @include rect(.55rem, .55rem);
              }
              p {
                @include rect(.99rem, .15rem);
                @include text-color(#000)
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
