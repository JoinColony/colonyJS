<template>
  <div>
    <div v-for="(pot,i) in pots" :key="i">
      <span>Pot ID:{{ pot.id }} </span>
      <span>Balance:{{ pot.balance }} </span>
      <span>Type:{{ pot.type }} </span>
    </div>
  </div>
</template>
<script>
// import comp from './comp.vue'

export default {
  components: {
  },
  props: {
    pots: { type: Array, required: true },
  },
}
</script>
