import { createStore } from 'vuex'

export default createStore({
  state: {
    nightMode:false,
      showPopup: false,

      // Used in ConnectWallet 
      currencyFrom: { icon: "eth-icon.png", title: "ETH" },
      currencyTo: { icon: "logo.png", title: "SPI" },
      currencies: [
          { icon: "eth-icon.png", title: "ETH" },
          { icon: "logo.png", title: "SPI" },
      ],
      sllipageVal: 1,
      balance: 0,
      popupType: ''

  },
  getters: {

  },
  mutations: {
    changeMode(state, val){
      state.nightMode = val
    },
    togglePopup(state, val){
      state.showPopup = val
    },

    // Used in ConnectWallet
    updateSllipageVal(state, val){
      state.sllipageVal = val
    },
    setCurrency(state, info){
      if(info.type === 'swapFrom'){
        state.currencyFrom = info.currency
      }else if (info.type === 'swapTo'){
        state.currencyTo = info.currency
      }
    },
    setPopupType(state, val){
      state.popupType = val
    }
  },
  actions: {
  },
  modules: {
  }
})
