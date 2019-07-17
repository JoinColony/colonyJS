<template>
  <form @submit.prevent="$emit('submit', { tokenAddress })">
    <input
      placeholder="0x0 (token address)"
      type="text"
      v-model="tokenAddress"
    />
    <button type="submit">Create Colony</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.CreateColonyForm',
  data() {
    return {
      tokenAddress: '',
    }
  },
}
</script>
