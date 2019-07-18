<template>
  <div>
    <h1>Manage Colony</h1>
    <ManageColonyForm ref="form" @submit="$emit('submit', $event)"/>
  </div>
</template>

<script>
import ManageColonyForm from '@/components/colony/ManageColonyForm.vue'

export default {
  name: 'Manage.SetColony',
  components: {
    ManageColonyForm,
  },
}
</script>
