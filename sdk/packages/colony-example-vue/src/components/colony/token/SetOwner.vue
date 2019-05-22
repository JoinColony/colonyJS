<template>
  <form class="set-token-owner-form" @submit.prevent="$emit('submit', { domain, amount })">
    <div class="field">
      <select v-model="owner">
        <option :value="null">Select owner</option>
        <option v-for="(option,i) in owners" v-bind:value="option.id" :key="i">
          {{ option.id }}
        </option>
      </select>
    </div>
    <button type="submit">Set Token Owner</button>
  </form>
</template>
<script>

export default {
  data() {
    return {
      owner: null,
      owners: [],
    }
  },
}
</script>
