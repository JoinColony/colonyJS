<template>
  <div class="box">
    <h3>Fund</h3>
    <FundDomain :domains="domains" @submit="handleSubmit" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { getDomain } from '@/api/domain'
import { moveFunds } from '@/api/funding'
import FundDomain from '@/components/colony/domains/Fund.vue'

export default {
  name: 'Manage.Colony.Domains.Fund',
  components: {
    FundDomain,
  },
  computed: {
    ...mapGetters({
      domains: 'domains/all',
    }),
  },
  methods: {
    ...mapActions({
      hydrate: 'pots/hydrate',
    }),
    handleSubmit: async function({ domainId, amount }) {
      const { potId } = await getDomain({ domainId })
      await moveFunds({
        fromPot: 1,
        toPot: potId,
        amount
      })
      await this.hydrate()
    },
  },
}
</script>
