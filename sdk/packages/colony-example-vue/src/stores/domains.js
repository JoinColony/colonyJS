import { getDomains } from '@/api/domain'

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
      const domains = await getDomains({})
      commit('hydrate', domains)
    },
  },
  getters: {
    all: ({ all }) => all,
  },
}
