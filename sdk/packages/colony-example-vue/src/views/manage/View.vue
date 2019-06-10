<template>
  <router-view @submit="set"></router-view>
</template>
<script>
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
      const name = 'manageColony'
      const params = { address }
      this.$router.push({ name, params })
      this.address = address
    },
  },
}
</script>
