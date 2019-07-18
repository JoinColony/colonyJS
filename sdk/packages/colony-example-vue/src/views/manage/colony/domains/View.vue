<template>
  <div>
    <h1>Domains</h1>
    <DomainsList />
    <AddDomain />
    <FundDomain />
  </div>
</template>

<script>
import DomainsList from './Domains.vue'
import AddDomain from './Add.vue'
import FundDomain from './Fund.vue'

export default {
  name: 'Manage.Colony.Domains.View',
  components: {
    DomainsList,
    AddDomain,
    FundDomain,
  },
}
</script>
