<template>
  <div>
    <div v-for="(domain, i) in domains" :key="i">
      Skill ID: {{ domain.skillId }}, Pot ID: {{ domain.potId }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Colony.Domains.Domains',
  props: {
    domains: { type: Array, required: true },
  },
}
</script>
