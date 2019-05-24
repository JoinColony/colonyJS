<template>
  <div>
    <span>Claimable funds:</span>
    <span>{{ claimableFunds }}</span>
    <form class="claim-funding-form" @submit.prevent="$emit('submit', {})">
      <button type="submit">Claim Funds</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      claimableFunds: 0,
    }
  },
}
</script>
