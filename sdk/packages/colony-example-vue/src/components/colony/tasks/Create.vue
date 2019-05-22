<template>
  <form class="move-funding-form" @submit.prevent="$emit('submit', { address })">
    <div class="field">
      <label>Domain:</label>
      <select v-model="domain">
        <option :value="null">Select domain</option>
        <option v-for="(option,i) in domains" v-bind:value="option.id" :key="i">
          {{ option.id }}
        </option>
      </select>
    </div>
    <div class="field">
      <label>Skill:</label>
      <select v-model="domain">
        <option :value="null">Select domain</option>
        <option v-for="(option,i) in domains" v-bind:value="option.id" :key="i">
          {{ option.id }}
        </option>
      </select>
    </div>
    <div class="field">
      <label>Title: </label>
      <input class="title" type="text" v-model="title" />
    </div>
    <div class="field">
      <label>Description: </label>
      <input class="description" type="text" v-model="description" />
    </div>
    <div class="field">
      <label>Due date:</label>
      <input class="date" type="date" v-model="date" />
    </div>
    <button type="submit">Create Task</button>
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
      skill: null,
      skills: [],
      title: '',
      description: '',
      date: null,
    }
  },
}
</script>
