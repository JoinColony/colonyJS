<template>
  <div class="box">
    <h3>Fund</h3>
    <FundDomain :domains="domains" @submit="fundDomain" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { fundDomain } from '@/api/domain'
import FundDomain from '@/components/colony/domains/Fund.vue'

export default {
  components: {
    FundDomain,
  },
  computed: {
    ...mapGetters({
      domains: 'domains/all',
    }),
  },
  methods: {
    fundDomain,
  },
}
</script>
