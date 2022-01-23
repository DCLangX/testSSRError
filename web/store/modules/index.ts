import { testApi3 } from '@/networkApi/user'

const indexStore = {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    setData (state, payload) {
      state.data = payload.data
    }
  },
  actions: {
    initialData ({ commit }, { payload }) {
      commit('setData', payload)
      testApi3()
    }
  }
}

export {
  indexStore
}
