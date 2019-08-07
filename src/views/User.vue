<template>
  <div class="container">
    <!-- <header class="header">
      <span class="iconfont icon-xiazai6"></span>
      <p>密码登录</p>
    </header> -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    beforeRouteEnter (to, from, next) {
    // if (localStorage.getItem('isLogin') === 'ok') {
    //   next()
    // } else {
    //   next('/login')
    // }
    next(vm => {
      console.log(vm)
      if (vm.$store.state.user.loginstate === 'ok') {
        console.log(1)
        next('/login')
      } else {
        next('/user/nologin')
      }
    })
  },
    watch: {
    $route (newVal, oldVal) {
      console.log(newVal)
      if (newVal.path === '/user/nologin') {
        if (this.$store.state.user.loginstate === 'ok') {
          this.$router.push('/home')
          console.log(1)
        } else {
          this.$router.push('/user/nologin')
        }
      }
    }
  }
}
</script>
