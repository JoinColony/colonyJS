<template>
  <form class="mint-token-form" @submit.prevent="$emit('submit')">
    <div class="field">
      <label>Amount: </label>
      <input class="amount" type="text" v-model="amount" />
    </div>
    <button type="submit">Mint Token</button>
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
