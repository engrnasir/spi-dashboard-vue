import { createStore } from 'vuex'

export default createStore({
  state: {
    nightMode:false
  },
  getters: {

  },
  mutations: {
    changeMode:(state, val)=>{
      state.nightMode = val
    }
  },
  actions: {
  },
  modules: {
  }
})
