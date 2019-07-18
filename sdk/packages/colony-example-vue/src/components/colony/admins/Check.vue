<template>
  <form @submit.prevent="$emit('submit', { address })">
    <input
      placeholder="0x0"
      type="text"
      v-model="address"
    />
    <button type="submit">Check Admin</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.Admins.Check',
  data() {
    return {
      address: '',
    }
  },
}
</script>
