<template>
  <div>
    <h1>Admins</h1>
    <AddAdmin />
    <CheckAdmin />
    <RemoveAdmin />
  </div>
</template>

<script>
import AddAdmin from './Add.vue'
import CheckAdmin from './Check.vue'
import RemoveAdmin from './Remove.vue'

export default {
  name: 'Manage.Colony.Admins.View',
  components: {
    AddAdmin,
    CheckAdmin,
    RemoveAdmin,
  },
}
</script>
