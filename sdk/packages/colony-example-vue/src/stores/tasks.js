import { getTasks } from '@/api/task'

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
      commit('hydrate', await getTasks({}))
    },
  },
  getters: {
    all: ({ all }) => all,
  },
}
