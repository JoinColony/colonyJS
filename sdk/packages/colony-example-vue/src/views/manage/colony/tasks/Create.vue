<template>
  <div class="box">
    <h3>Create</h3>
    <CreateTask class=""
                :domains="domains"
                :skills="skills"
                @submit="create" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { createTask } from '@/api/task'
import CreateTask from '@/components/colony/tasks/Create.vue'

export default {
  components: {
    CreateTask,
  },
  computed: {
    ...mapGetters({
      domains: 'domains/all',
      skills: 'skills/all',
    }),
  },
  methods: {
    async create(...args) {
      await createTask(...args)
      await this.hydrateTasks()
    },
    ...mapActions({
      'hydrateTasks': 'tasks/hydrate',
    }),
  },
}
</script>
