<template>
  <form @submit.prevent="$emit('submit', { taskId, amount })">
    <div>
      <label>Task: </label>
      <select v-model="taskId">
        <option :value="null">Select task</option>
        <option
          v-for="(option, i) in tasks"
          v-bind:value="option.id"
          v-text="option.id"
          :key="i"
        />
      </select>
    </div>
    <div>
      <label>Amount: </label>
      <input type="text" v-model="amount" />
    </div>
    <button type="submit">Fund Task</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.Tasks.Fund',
  components: {
  },
  data() {
    return {
      taskId: null,
      amount: 0,
    }
  },
  props: {
    tasks: { type: Array, required: true },
  },
}
</script>
