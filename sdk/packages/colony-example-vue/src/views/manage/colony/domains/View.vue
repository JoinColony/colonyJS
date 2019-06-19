<template>
  <div>
    <h3>Domains</h3>
    <DomainsList />
    <AddDomain />
    <FundDomain />
  </div>
</template>
<script>
import DomainsList from './Domains.vue'
import AddDomain from './Add.vue'
import FundDomain from './Fund.vue'
import addressMixin from '../address-mixin'

export default {
  components: {
    DomainsList,
    AddDomain,
    FundDomain,
  },
  mixins: [addressMixin],
}
</script>
