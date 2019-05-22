<template>
  <form class="move-funding-form" @submit.prevent="$emit('submit', { address })">
    <div class="field">
      <label>From Pot</label>
      <input class="from" type="text" v-model="from" />
    </div>
    <div class="field">
      <label>From To</label>
      <input class="to" type="text" v-model="to" />
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
      from: 0,
      to: 0,
      amount: 0,
    }
  },
}
</script>
