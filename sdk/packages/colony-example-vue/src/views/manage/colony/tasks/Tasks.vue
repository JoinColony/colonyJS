<template>
  <div class="box">
    <h3>Tasks</h3>
    <Tasks :tasks="tasks" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Tasks from '@/components/colony/tasks/Tasks.vue'

export default {
  components: {
    Tasks,
  },
  computed: {
    ...mapGetters({
      tasks: 'tasks/all',
    }),
  },
}
</script>
