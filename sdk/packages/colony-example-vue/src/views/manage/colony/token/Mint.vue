<template>
  <div class="box">
    <h3>Mint</h3>
    <Mint @submit="mintTokens"/>
  </div>
</template>

<script>
import Mint from '@/components/colony/token/Mint.vue'
import { mintTokens } from '@/api/token'

export default {
  name: 'Manage.Colony.Token.Mint',
  components: {
    Mint,
  },
  methods: {
    mintTokens,
  },
}
</script>
