<template>
  <div class="box">
    <h3>Fund</h3>
    <FundTask :tasks="tasks" @submit="fundDomain"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import FundTask from '@/components/colony/tasks/Fund.vue'
import { fundDomain } from '@/api/domain'

export default {
  components: {
    FundTask,
  },
  computed: {
    ...mapGetters({
      tasks: 'tasks/all',
    }),
  },
  methods: {
    fundDomain,
  },
}
</script>
