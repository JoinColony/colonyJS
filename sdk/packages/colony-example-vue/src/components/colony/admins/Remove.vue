<template>
  <form @submit.prevent="$emit('submit', { address })">
    <input
      placeholder="0x0"
      type="text"
      v-model="address"
    />
    <button type="submit">Remove Admin</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.Admins.Remove',
  data() {
    return {
      address: '',
    }
  },
}
</script>
