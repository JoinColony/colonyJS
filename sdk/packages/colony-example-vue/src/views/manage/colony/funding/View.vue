<template>
  <div>
    <h1>Funding</h1>
    <Pots />
    <Claim />
    <Move />
  </div>
</template>

<script>
import Pots from './Pots.vue'
import Claim from './Claim.vue'
import Move from './Move.vue'

export default {
  name: 'Manage.Colony.Funding.View',
  components: {
    Pots,
    Claim,
    Move,
  },
}
</script>
