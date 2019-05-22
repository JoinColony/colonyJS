<template>
  <div class="box">
    <h3>Create</h3>
    <CreateTask />
  </div>
</template>
<script>
import CreateTask from '@/components/colony/tasks/Create.vue'

export default {
  components: {
    CreateTask,
  },
  data() {
    return {
    }
  },
  props: {
  },
}
</script>
