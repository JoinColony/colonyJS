<template>
  <div>
    <h1>Token</h1>
    <Token />
    <SetOwner />
    <Mint />
  </div>
</template>

<script>
import Token from './Token.vue'
import SetOwner from './SetOwner.vue'
import Mint from './Mint.vue'

export default {
  name: 'Manage.Colony.Token.View',
  components: {
    Token,
    SetOwner,
    Mint,
  },
}
</script>
