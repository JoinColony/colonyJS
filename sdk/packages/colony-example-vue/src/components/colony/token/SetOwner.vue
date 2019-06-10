<template>
  <form class="set-token-owner-form" @submit.prevent="$emit('submit', setTokenOwner)">
    <button type="submit">Set Token Owner</button>
  </form>
</template>
<script>
import { setTokenOwner } from '@/api/token'

export default {
  methods: {
    setTokenOwner,
  },
}
</script>
