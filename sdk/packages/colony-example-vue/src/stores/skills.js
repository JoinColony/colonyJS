import { getSkills } from '@/api/network'

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
      window.getSkills = getSkills
      commit('hydrate', await getSkills({}))
    },
  },
  getters: {
    all: ({ all }) => all,
  },
}
