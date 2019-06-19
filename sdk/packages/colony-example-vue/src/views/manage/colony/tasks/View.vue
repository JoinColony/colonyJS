<template>
  <div>
    <h1>Tasks</h1>
    <TasksList />
    <CreateTask />
    <FundTask />
  </div>
</template>
<script>
import TasksList from './Tasks.vue'
import CreateTask from './Create.vue'
import FundTask from './Fund.vue'

export default {
  components: {
    TasksList,
    CreateTask,
    FundTask,
  },
}
</script>
