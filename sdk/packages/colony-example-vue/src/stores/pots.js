import { getPots } from '@/api/funding'

export default {
  namespaced: true,
  state: {
    all: [],
  },
  mutations: {
    hydrate(state, all) { state.all = all },
  },
  actions: {
    async hydrate({ commit }) {
      const pots = await getPots({})
      commit('hydrate', pots)
    },
  },
  getters: {
    all: ({ all }) => all,
  },
}
