<template>
  <div class="box">
    <h3>Pots</h3>
    <Pots :pots="pots"/>
  </div>
</template>
<script>
import { getPots } from '@/api/funding'
import Pots from '@/components/colony/funding/Pots.vue'

export default {
  components: {
    Pots,
  },
  data() {
    return {
      pots: [],
    }
  },
  async created() {
    this.pots = await getPots({})
  },
}
</script>
