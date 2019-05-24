<template>
  <div class="box">
    <h3>Add</h3>
    <AddDomain @submit="addDomain"/>
  </div>
</template>
<script>
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
    addDomain,
  },
}
</script>
