<template>
  <div class="box">
    <h3>Move</h3>
    <Move @submit="handleSubmit" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { getPots, moveFunds } from '@/api/funding'
import Move from '@/components/colony/funding/Move.vue'

export default {
  name: 'Manage.Colony.Funding.Move',
  components: {
    Move,
  },
  methods: {
    ...mapActions({
      hydrate: 'pots/hydrate',
    }),
    handleSubmit: async function(params) {
      await moveFunds(params)
      await this.hydrate()
    },
  },
}
</script>
