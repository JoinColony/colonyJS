<template>
  <form class="create-colony-form" @submit.prevent="$emit('submit', { address })">
    <input class="address" placeholder="0x0 (token address)" type="text" v-model="address" />
    <button type="submit">Create Colony</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      address: '',
    }
  },
}
</script>
