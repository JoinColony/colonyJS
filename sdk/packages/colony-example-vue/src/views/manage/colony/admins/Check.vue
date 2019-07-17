<template>
  <div class="box">
    <h3>Check Admin</h3>
    <CheckAdmin @submit="check" />
    <pre>{{ msg }}</pre>
  </div>
</template>

<script>
import { checkAdmin } from '@/api/admin'
import CheckAdmin from '@/components/colony/admins/Check.vue'
import messageMixin from '@/mixins/message'

export default {
  name: 'Manage.Colony.Admins.Check',
  components: {
    CheckAdmin,
  },
  mixins: [messageMixin],
  data() {
    return {
      loadingMsg: 'Checking Address',
      dataMsg: 'Admin Address',
    }
  },
  methods: {
    request: checkAdmin,
  },
}
</script>
