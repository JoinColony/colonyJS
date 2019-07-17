<template>
  <form @submit.prevent="$emit('submit', { fromPot, toPot, amount })">
    <div>
      <label>From Pot</label>
      <input type="text" v-model="fromPot" />
    </div>
    <div>
      <label>From To</label>
      <input type="text" v-model="toPot" />
    </div>
    <div>
      <label>From Amount</label>
      <input type="text" v-model="amount" />
    </div>
    <button type="submit">Move Funds</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.Funding.Move',
  data() {
    return {
      fromPot: 0,
      toPot: 0,
      amount: 0,
    }
  },
}
</script>
