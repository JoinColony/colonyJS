<template>
  <form class="create-token-form" @submit.prevent="$emit('submit', { name, symbol })">
    <input class="name" placeholder="Token name" type="text" v-model="name" />
    <input class="symbol" placeholder="Token symbol" type="text" v-model="symbol" />
    <button type="submit">Create Token</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      symbol: '',
    }
  },
}
</script>
