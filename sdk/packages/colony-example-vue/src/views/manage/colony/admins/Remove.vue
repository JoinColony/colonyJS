<template>
  <div class="box">
    <h3>Remove Admin</h3>
    <RemoveAdmin @submit="removeAdmin" />
  </div>
</template>

<script>
import { removeAdmin } from '@/api/admin'
import RemoveAdmin from '@/components/colony/admins/Remove.vue'

export default {
  name: 'Manage.Colony.Admins.Remove',
  components: {
    RemoveAdmin,
  },
  methods: {
    removeAdmin,
  },
}
</script>
