<template>
  <div>
    <div v-for="(domain, i) in domains" :key="i">
      Skill ID: {{ domain.skillId }}, Pot ID: {{ domain.potId }}
    </div>
  </div>
</template>
<script>
// import comp from './comp.vue'

export default {
  props: {
    domains: { type: Array, required: true },
  },
}
</script>
