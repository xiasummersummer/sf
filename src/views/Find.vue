<template>
  <div class="container">
    <header class="header">
      <h3>发现优选</h3>
    </header>
    <div class="content">
      <div class="nav">
        <ul>
          <li v-for="(item, index) of findnav" :key="index" @click="findnavindex(index)">{{ item }}</li>
        </ul>
        <!-- <van-tabs>
          <van-tab :title="item" v-for="(item, index) of findnav" :key="index"  @click="findnavindex(index)">
          </van-tab>
        </van-tabs>
                    <router-view></router-view> -->
        <!-- <van-tabs v-model="active">
          <van-tab  v-for="(item, index) of findnav" :key="index" title="{{ item }}"><router-view></router-view></van-tab>
        </van-tabs> -->
      </div>
      <div class="findcontent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      active: 0,
      findnav: ['营养师专栏', '优选厨房', '美食文化']
    }
  },
  methods: {
    findnavindex (index, id) {
      console.log(id)
      this.$router.push(`/find/find${id + 1}`)
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
    .header {
      @include background-color(#fff)
    }
    .content {
      .nav {
        ul {
          @include flexbox();
          @include rect(100%, .46rem);
          // space-between: around;
          li {
            @include flex();
            text-align: center;
            @include line-height(.46rem);
          }
        }
      }
      .findcontent {
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
