<template>
  <form @submit.prevent="$emit('submit', { domainId, amount })">
    <div>
      <label>Domain: </label>
      <select v-model="domainId">
        <option :value="null">Select domain</option>
        <option
          v-for="(option, i) in domains"
          v-bind:value="option.id"
          v-text="option.id"
          :key="i"
        />
      </select>
    </div>
    <div>
      <label>Amount: </label>
      <input type="text" v-model="amount" />
    </div>
    <button type="submit">Fund Domain</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.Domains.Fund',
  data() {
    return {
      domainId: null,
      amount: 0,
    }
  },
  props: {
    domains: { type: Array, required: true },
  },
}
</script>
