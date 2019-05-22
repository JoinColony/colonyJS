<template>
  <div>
    <h1>Token</h1>
    <Token />
    <SetOwner />
    <Mint />
  </div>
</template>
<script>
import addressMixin from '../address-mixin'
import Token from './Token.vue'
import SetOwner from './SetOwner.vue'
import Mint from './Mint.vue'

export default {
  mixins: [addressMixin],
  components: {
    Token,
    SetOwner,
    Mint,
  },
}
</script>
