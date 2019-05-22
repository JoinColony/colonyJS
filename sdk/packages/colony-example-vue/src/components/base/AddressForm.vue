<template>
  <form @submit.prevent="$emit('submit', { address })">
    <input id="address" placeholder="0x0 (token address)" type="text" v-model="address" />
    <button type="submit">{{ submitLabel }}</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      address: '',
    }
  },
  props: {
    submitLabel: { type: String, required: true },
  },
}
</script>
