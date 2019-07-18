<template>
  <form @submit.prevent="$emit('submit', { amount })">
    <div>
      <label>Amount: </label>
      <input type="text" v-model="amount" />
    </div>
    <button type="submit">Mint Token</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.Token.Mint',
  data() {
    return {
      amount: 0,
    }
  },
}
</script>
