<template>
  <div class="box">
    <h3>Claim</h3>
    <Claim @submit="claimFunds"/>
  </div>
</template>
<script>
import { claimFunds } from '@/api/funding'
import Claim from '@/components/colony/funding/Claim.vue'

export default {
  components: {
    Claim,
  },
  methods: {
    claimFunds,
  },
}
</script>
