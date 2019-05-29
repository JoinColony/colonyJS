<template>
  <div class="box">
    <h3>Add</h3>
    <AddDomain @submit="add"/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { addDomain } from '@/api/domain'
import AddDomain from '@/components/colony/domains/Add.vue'

export default {
  components: {
    AddDomain,
  },
  data() {
    return {
    }
  },
  methods: {
    async add(domain) {
      await addDomain(domain)
      await this.hydrate()
    },
    ...mapActions({
      hydrate: 'domains/hydrate',
    }),
  },
}
</script>
