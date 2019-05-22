<template>
  <div>
    <div v-for="(task, i) in tasks" :key="i">
      Title: "{{ task.title }}" Description: "{{ task.description }}"
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tasks: [{
        title: 'New Task Title',                  // title
        description: 'New Task Description',      // description
      }],
    }
  },
  props: {
  },
}
</script>
