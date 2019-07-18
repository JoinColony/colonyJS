import { getSkills } from '@/api/skills'

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
      const skills = await getSkills({})
      commit('hydrate', skills)
    },
  },
  getters: {
    all: ({ all }) => all,
  },
}
