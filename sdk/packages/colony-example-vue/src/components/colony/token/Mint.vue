<template>
  <form class="mint-tokens-form" @submit.prevent="$emit('submit', { amount })">
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
      amount: 0,
    }
  },
}
</script>
