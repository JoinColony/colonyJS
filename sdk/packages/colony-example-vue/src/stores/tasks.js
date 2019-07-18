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
      const tasks = await getTasks({})
      commit('hydrate', tasks)
    },
  },
  getters: {
    all: ({ all }) => all,
  },
}
