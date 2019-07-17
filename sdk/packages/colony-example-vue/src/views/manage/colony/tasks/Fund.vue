<template>
  <div class="box">
    <h3>Fund</h3>
    <FundTask :tasks="tasks" @submit="handleSubmit" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import FundTask from '@/components/colony/tasks/Fund.vue'
import { getTask } from '@/api/task'
import { moveFunds } from '@/api/funding'

export default {
  name: 'Manage.Colony.Tasks.Fund',
  components: {
    FundTask,
  },
  computed: {
    ...mapGetters({
      tasks: 'tasks/all',
    }),
  },
  methods: {
    ...mapActions({
      hydrate: 'pots/hydrate',
    }),
    handleSubmit: async function({ taskId, amount }) {
      const { potId } = await getTask({ taskId, withSpec: false })
      await moveFunds({
        fromPot: 1,
        toPot: potId,
        amount
      })
      await this.hydrate()
    },
  },
}
</script>
