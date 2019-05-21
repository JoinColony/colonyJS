<template>
  <div>
    <h1>Manage Colony</h1>
    <ManageColonyForm @submit="$emit('submit', $event)"/>
  </div>
</template>
<script>
import ManageColonyForm from '@/components/colony/ManageColonyForm.vue'

export default {
  components: {
    ManageColonyForm,
  },
}
</script>
