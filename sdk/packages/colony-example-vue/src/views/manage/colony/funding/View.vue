<template>
  <div>
    <h1>Funding</h1>
    <Pots />
    <Claim />
    <Move />
  </div>
</template>
<script>
import Pots from './Pots'
import Claim from './Claim'
import Move from './Move'

export default {
  components: {
    Pots, Claim, Move
  },
}
</script>
