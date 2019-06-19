<template>
  <div class="box">
    <h1>Admins</h1>
    <AddressForm class="check-admin-form" submit-label="Check Admin" @submit="checkAdmin" />
    <AddressForm class="add-admin-form" submit-label="Add Admin" @submit="addAdmin" />
    <AddressForm class="remove-admin-form" submit-label="Remove Admin" @submit="removeAdmin" />
  </div>
</template>
<script>
import { checkAdmin, addAdmin, removeAdmin } from '@/api/admin'
import addressMixin from '../address-mixin'

export default {
  mixins: [addressMixin],
  methods: {
    checkAdmin,
    addAdmin,
    removeAdmin,
  },
}
</script>
