<template>
  <div class="box">
    <h3>Add</h3>
    <AddDomain @submit="handleSubmit"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { addDomain } from '@/api/domain'
import AddDomain from '@/components/colony/domains/Add.vue'

export default {
  name: 'Manage.Colony.Domains.Add',
  components: {
    AddDomain,
  },
  methods: {
    ...mapActions({
      hydrate: 'domains/hydrate',
    }),
    async handleSubmit(domain) {
      await addDomain(domain)
      await this.hydrate()
    },
  },
}
</script>
