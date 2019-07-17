<template>
  <div class="box">
    <h3>Add Admin</h3>
    <AddAdmin @submit="addAdmin" />
  </div>
</template>

<script>
import { addAdmin } from '@/api/admin'
import AddAdmin from '@/components/colony/admins/Add.vue'

export default {
  name: 'Manage.Colony.Admins.Add',
  components: {
    AddAdmin,
  },
  methods: {
    addAdmin,
  },
}
</script>
