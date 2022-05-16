import { createStore } from 'vuex'

export default createStore({
  state: {
    screenMode : ""
  },
  getters: {
  },
  mutations: {
    setScreenMode: (state, payload) => {
      state.screenMode = payload
    }
  },
  actions: {
    setScreenModeAction(context, payload) {
      context.commit('setScreenMode', payload)
    }
  },
  modules: {
  }
})
