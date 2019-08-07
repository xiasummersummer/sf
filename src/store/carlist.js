import axios from 'axios'

export default {
  state: {
    idlist: [], // 数组去重 并且计数 0 - 4    1 -- 5
    carlists: [],
    num: 0,
    cargooslist: []
  },
  actions: {
  },
  mutations: {
    changecarlist (state,data) {
      state.carlists = data
    },
    changecartnum (state,data) {
      state.num += data.number
    },
    changecargoodlist (state,data) {
      state.cargoodslist = data
    }
  }
}