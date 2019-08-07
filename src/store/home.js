import axios from 'axios'
const baseUrl = 'http://www.daxunxun.com'
const navUrl = '/api/getModels?type=2'
// const goodUrl = ''
export default {
  state: {
    bannerlist: [],
    navlist: [],
    goodlist: [],
    homelist: []
  },
  actions: {
    getHomeBannerList (context) {
      axios.get(baseUrl + '/banner').then(res => {
        // console.log(res)
        let arr = []
        res.data.map(item => {
          arr.push(baseUrl + item)
        })
        context.commit('changeHomeBannerList', {
          data: arr
        })
      })
    },
    getHomeNavList (context) {
      axios.get('/api/sf/homenav.json').then(res => {
        // console.log(res.data.data)
        let arr = []
        res.data.data.appModels.forEach(element => {
          // console.log(element)
          arr.push(element)
        // console.log(that.navlist)
        })
        context.commit('changeHomeNavList', {
          data: arr
        })
      })
    }
    // getHomeGoodList (context) {
    //   axios.get('/api/user/testdata').then(res => {
    //     console.log(res.data)
    //   })
    // }
    // getHomeTab2BannerList (context) {
    //   axios.get('http://www.daxunxun.com').then(res => {
    //     console.log(res.data)
    //   })
    // }
  },
  mutations: {
    changeHomeBannerList (state, payload) {
      state.bannerlist = payload.data
    },
    changeHomeNavList (state, payload) {
      state.navlist = payload.data
    }
    // changegetHomeGoodList () {
    // }
    // changeHomeTab2BannerList (state, payload) {
    //   state.navlist = payload.data
    // }
  }
}
