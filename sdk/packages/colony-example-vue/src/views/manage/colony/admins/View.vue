<template>
  <div class="box">
    <h1>Admins</h1>
    <AddressForm submit-label="Check Admin"/>
    <AddressForm submit-label="Add Admin" />
    <AddressForm submit-label="Remove Admin" />
  </div>
</template>
<script>
import addressMixin from '../address-mixin'

export default {
  mixins: [addressMixin],
}
</script>
