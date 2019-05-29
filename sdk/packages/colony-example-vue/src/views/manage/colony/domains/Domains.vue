<template>
  <div class="box">
    <h3>Domains</h3>
    <DomainsList :domains="domains"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import DomainsList from '@/components/colony/domains/Domains.vue'

export default {
  components: {
    DomainsList,
  },
  computed: {
    ...mapGetters({
      domains: 'domains/all',
    }),
  },
}
</script>
