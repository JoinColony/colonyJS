<template>
  <div>
    <h1>Create Token</h1>
    <CreateTokenForm @submit="createToken"/>
  </div>
</template>
<script>
import CreateTokenForm from '@/components/token/CreateTokenForm.vue'

export default {
  components: {
    CreateTokenForm,
  },
  methods: {
    createToken() {
      alert('tried to create token')
    },
  },
}
</script>
