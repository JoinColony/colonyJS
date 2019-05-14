import { connect } from '@/api/network'

export default {
  namespaced: true,
  state: {
    client: {},
  },
  mutations: {
    client(state, client) { state.client = client },
  },
  actions: {
    async connect({ commit }) {
      const client = await connect()
      commit('client', client)
    },
  },
}
