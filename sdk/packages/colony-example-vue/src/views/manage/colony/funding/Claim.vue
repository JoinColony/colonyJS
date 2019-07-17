<template>
  <div class="box">
    <h3>Claim</h3>
    <Claim :claimableFunds="claimableFunds" @submit="handleSubmit" />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { claimFunds, getClaimableFunds } from '@/api/funding'
import Claim from '@/components/colony/funding/Claim.vue'

export default {
  name: 'Manage.Colony.Funding.Claim',
  components: {
    Claim,
  },
  data() {
    return {
      claimableFunds: 0,
    }
  },
  async created() {
    this.claimableFunds = await getClaimableFunds({})
  },
  methods: {
    ...mapActions({
      hydrate: 'pots/hydrate',
    }),
    handleSubmit: async function () {
      await claimFunds({})
      await this.hydrate()
      this.claimableFunds = await getClaimableFunds({})
    },
    getClaimableFunds,
  },
}
</script>
