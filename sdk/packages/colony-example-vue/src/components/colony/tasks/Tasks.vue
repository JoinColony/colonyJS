<template>
  <div>
    <div v-for="(task, i) in tasks" :key="i">
      Title: "{{ task.specification.title }}" Description: "{{ task.specification.description }}"
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
