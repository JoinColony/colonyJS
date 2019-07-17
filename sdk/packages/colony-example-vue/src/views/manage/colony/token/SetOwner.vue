<template>
  <div class="box">
    <h3>Set Owner</h3>
    <SetOwner @submit="setTokenOwner" />
  </div>
</template>

<script>
import SetOwner from '@/components/colony/token/SetOwner.vue'
import { setTokenOwner } from '@/api/token'

export default {
  name: 'Manage.Colony.Token.SetOwner',
  components: {
    SetOwner,
  },
  methods: {
    setTokenOwner,
  },
}
</script>
