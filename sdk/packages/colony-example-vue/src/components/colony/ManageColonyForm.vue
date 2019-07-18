<template>
  <form @submit.prevent="$emit('submit', { address })">
    <input
      placeholder="0x0 (colony address)"
      type="text"
      v-model="address"
    />
    <button type="submit">Manage Colony</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.ManageColonyForm',
  data() {
    return {
      address: '',
    }
  },
}
</script>
