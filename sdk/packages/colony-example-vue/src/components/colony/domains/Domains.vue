<template>
  <div>
    <div v-for="(domain, i) in domains" :key="i">
      Skill ID: {{ domain.localSkillId }}, Pot ID: {{ domain.potId }}
    </div>
  </div>
</template>
<script>
// import comp from './comp.vue'

export default {
  components: {
  },
  data() {
    return {
      domains: [{
        localSkillId: 7, potId: 1, id: 1,
      }, {
        localSkillId: 8, potId: 4, id: 2,
      }],
    }
  },
  props: {
  },
}
</script>
