<template>
  <div class="box">
    <h3>Add</h3>
    <AddTask
      :domains="domains"
      :skills="skills"
      @submit="create"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { addTask } from '@/api/task'
import AddTask from '@/components/colony/tasks/Add.vue'

export default {
  name: 'Manage.Colony.Tasks.Add',
  components: {
    AddTask,
  },
  computed: {
    ...mapGetters({
      domains: 'domains/all',
      skills: 'skills/all',
    }),
  },
  methods: {
    async create(...args) {
      await addTask(...args)
      await this.hydrateTasks()
    },
    ...mapActions({
      hydrateTasks: 'tasks/hydrate',
    }),
  },
}
</script>
