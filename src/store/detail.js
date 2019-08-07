import axios from 'axios'
const detaillisturl = 'http://localhost:3000/sf/goods.json'

export default {
  state: {
    detailslist: []
  },
  actions: {
    // getDetaillist (context) {
    //   console.log(this.$store)
    //   axios.get(detaillisturl).then(res => {
    //     console.log(res.data)
    //   })
    // }
  },
  mutations: {
    changeDetaillist (state,payload) {
      state.detailslist = payload
    }
  }
}