<template>
  <form @submit.prevent="$emit('submit', { address })">
    <div class="field">
      <input id="address" placeholder="0x0 (token address)" type="text" v-model="address" />
      <button type="submit">{{ submitLabel }}</button>
    </div>
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
