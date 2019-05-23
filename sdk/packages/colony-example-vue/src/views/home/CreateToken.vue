<template>
  <div>
    <h1>Create Token</h1>
    <CreateTokenForm @submit="create"/>
  </div>
</template>
<script>
import { createToken } from '@/api/token'
import CreateTokenForm from '@/components/token/CreateTokenForm.vue'

export default {
  components: {
    CreateTokenForm,
  },
  methods: {
    create({ name, symbol }) {
      createToken({ name, symbol })
    },
  },
}
</script>
