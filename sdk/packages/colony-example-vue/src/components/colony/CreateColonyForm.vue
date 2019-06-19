<template>
  <form class="create-colony-form" @submit.prevent="$emit('submit', { tokenAddress })">
    <input class="address" placeholder="0x0 (token address)" type="text" v-model="tokenAddress" />
    <button type="submit">Create Colony</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      tokenAddress: '',
    }
  },
}
</script>
