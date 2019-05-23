<template>
  <div>
    <h1>Create Colony</h1>
    <CreateColonyForm @submit="createColony"/>
  </div>
</template>
<script>
import { createColony } from '@/api/colony'
import CreateColonyForm from '@/components/colony/CreateColonyForm.vue'

export default {
  components: {
    CreateColonyForm,
  },
  methods: {
    createColony,
  },
}
</script>
