<template>
  <form class="move-funding-form" @submit.prevent="$emit('submit', { address })">
    <div class="field">
      <label>Task:</label>
      <select v-model="task">
        <option :value="null">Select task</option>
        <option v-for="(option,i) in tasks" v-bind:value="option.id" :key="i">
          {{ option.id }}
        </option>
      </select>
    </div>
    <div class="field">
      <label>Amount: </label>
      <input class="amount" type="text" v-model="amount" />
    </div>
    <button type="submit">Fund Task</button>
  </form>
</template>
<script>
// import comp from './comp.vue'

export default {
  components: {
  },
  data() {
    return {
      task: null,
      tasks: [],
      amount: 0,
    }
  },
  props: {
  },
}
</script>
