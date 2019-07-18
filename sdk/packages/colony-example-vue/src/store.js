import Vue from 'vue'
import Vuex from 'vuex'
import domains from '@/stores/domains'
import pots from '@/stores/pots'
import skills from '@/stores/skills'
import tasks from '@/stores/tasks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    domains,
    pots,
    skills,
    tasks,
  },
})
