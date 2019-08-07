import Vue from 'vue'
import Vuex from 'vuex'
import home from './store/home'
import detail from './store/detail'
// import kind from './store/kind'
import user from './store/user'
import carlist from './store/carlist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    // detail
    // kind
    user,
    detail,
    carlist
  }
})
