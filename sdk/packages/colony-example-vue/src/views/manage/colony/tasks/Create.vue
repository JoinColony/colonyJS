<template>
  <div class="box">
    <h3>Create</h3>
    <CreateTask class=""
                :domains="domains"
                :skills="skills"
                @submit="createTask" />
  </div>
</template>
<script>
import { createTask } from '@/api/task'
import { mapGetters } from 'vuex'
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
    createTask,
  },
}
</script>
