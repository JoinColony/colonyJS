<template>
  <form class="move-funding-form" @submit.prevent="$emit('submit', { fromPot, toPot, amount })">
    <div class="field">
      <label>From Pot</label>
      <input class="from" type="text" v-model="fromPot" />
    </div>
    <div class="field">
      <label>From To</label>
      <input class="to" type="text" v-model="toPot" />
    </div>
    <div class="field">
      <label>From Amount</label>
      <input class="amount" type="text" v-model="amount" />
    </div>
    <button type="submit">Move Funds</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      fromPot: 0,
      toPot: 0,
      amount: 0,
    }
  },
}
</script>
