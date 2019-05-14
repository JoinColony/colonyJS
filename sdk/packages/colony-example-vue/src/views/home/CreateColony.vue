<template>
  <div>
    <h1>Create Colony</h1>
    <CreateColonyForm @submit="createColony"/>
  </div>
</template>
<script>
import CreateColonyForm from '@/components/colony/CreateColonyForm.vue'

export default {
  components: {
    CreateColonyForm,
  },
  methods: {
    createColony() {
      alert('tried to create colony')
    },
  },
}
</script>
