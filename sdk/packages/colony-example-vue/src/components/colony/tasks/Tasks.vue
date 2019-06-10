<template>
  <div>
    <div v-for="(task, i) in tasks" :key="i">
      Title: "{{ task.title }}" Description: "{{ task.description }}"
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tasks: { type: Array, required: true },
  },
}
</script>
