<template>
  <div>
    <span>Claimable Funds:</span>
    <span>{{ claimableFunds }}</span>
    <form @submit.prevent="$emit('submit', {})">
      <button type="submit">Claim Funds</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Colony.Funding.Claim',
  props: {
    claimableFunds: { type: Number, required: true },
  },
}
</script>
