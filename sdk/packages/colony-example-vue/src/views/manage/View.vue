<template>
  <router-view @submit="set"></router-view>
</template>
<script>
import { getColonyClient } from '@/api/colony'
import { setColony } from '@/lib/colony-store'

export default {
  data() {
    return {
      address: null,
    }
  },
  computed: {
    colonySet: vm => Boolean(vm.address),
  },
  beforeRouteEnter({ name }, from, next) {
    if (name === 'manage') {
      return next({ name: 'setColony' })
    }
    return next()
  },
  methods: {
    async set({ address }) {
      const colony = await getColonyClient({ colonyAddress: address })
      setColony(colony)
      const name = 'manageColony'
      const params = { address }
      this.$router.push({ name, params })
      this.address = address
    },
  },
}
</script>
