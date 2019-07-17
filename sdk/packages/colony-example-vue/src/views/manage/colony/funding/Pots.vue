<template>
  <div class="box">
    <h3>Pots</h3>
    <Pots :pots="pots"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pots from '@/components/colony/funding/Pots.vue'

export default {
  name: 'Manage.Colony.Funding.Pots',
  components: {
    Pots,
  },
  computed: {
    ...mapGetters({
      pots: 'pots/all',
    }),
  },
}
</script>
