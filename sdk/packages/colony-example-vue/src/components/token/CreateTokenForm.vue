<template>
  <form @submit.prevent="$emit('submit', { name, symbol })">
    <input placeholder="Token name" type="text" v-model="name" />
    <input placeholder="Token symbol" type="text" v-model="symbol" />
    <button type="submit">Create Token</button>
  </form>
</template>

<script>
export default {
  name: 'Token.CreateTokenForm',
  data() {
    return {
      name: '',
      symbol: '',
    }
  },
}
</script>
