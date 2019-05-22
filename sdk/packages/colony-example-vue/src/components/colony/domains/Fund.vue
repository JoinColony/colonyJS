<template>
  <form class="fund-domain-form" @submit.prevent="$emit('submit', { domain, amount })">
    <div class="field">
      <select v-model="domain">
        <option :value="null">Select domain</option>
        <option v-for="(option,i) in domains" v-bind:value="option.id" :key="i">
          {{ option.id }}
        </option>
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
      domains: [{
        localSkillId: 7, potId: 1, id: 1,
      }, {
        localSkillId: 8, potId: 4, id: 2,
      }],
      amount: 0,
    }
  },
}
</script>
