<template>
  <form class="fund-domain-form" @submit.prevent="$emit('submit', { domain })">
    <div class="field">
      <select v-model="domain">
        <option :value="null">Select domain</option>
        <option v-for="(option,i) in domains" v-bind:value="option" :key="i">{{ option.id }}</option>
      </select>
    </div>
    <button type="submit">Fund Domain</button>
  </form>
</template>
<script>

export default {
  data() {
    return {
      domain: null,
    }
  },
  props: {
    domains: { type: Array, required: true },
  },
}
</script>
