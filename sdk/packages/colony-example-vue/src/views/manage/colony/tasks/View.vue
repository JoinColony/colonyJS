<template>
  <div>
    <h1>Tasks</h1>
    <TasksList />
    <AddTask />
    <FundTask />
  </div>
</template>

<script>
import AddTask from './Add.vue'
import FundTask from './Fund.vue'
import TasksList from './Tasks.vue'

export default {
  name: 'Manage.Colony.Tasks.View',
  components: {
    AddTask,
    FundTask,
    TasksList,
  },
}
</script>
