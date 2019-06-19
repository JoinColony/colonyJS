import Vue from 'vue'
import Vuex from 'vuex'
import domains from '@/stores/domains'
import tasks from '@/stores/tasks'
import skills from '@/stores/skills'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    domains,
    tasks,
    skills,
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
})
