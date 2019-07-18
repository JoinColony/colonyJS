<template>
  <form @submit.prevent="$emit('submit', { address })">
    <input
      placeholder="0x0"
      type="text"
      v-model="address"
    />
    <button type="submit">Add Admin</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.Admins.Add',
  data() {
    return {
      address: '',
    }
  },
}
</script>
