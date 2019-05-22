<template>
  <div class="box">
    <h3>Domains</h3>
    <DomainsList />
  </div>
</template>
<script>
import DomainsList from '@/components/colony/domains/Domains.vue'

export default {
  components: {
    DomainsList,
  },
  data() {
    return {
    }
  },
  props: {
  },
}
</script>
