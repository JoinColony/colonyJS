<template>
  <form class="create-task-form"
        @submit.prevent="$emit('submit', { task })">
    <div class="field">
      <label>Domain:</label>
      <select class="domain" v-model="domainId">
        <option :value="null">Select domain</option>
        <option v-for="(option,i) in domains"
                v-bind:value="option.id"
                v-text="option.id"
                :key="i">
        </option>
      </select>
    </div>
    <div class="field">
      <label>Skill:</label>
      <select class="skill" v-model="skillId">
        <option :value="null">Select skill</option>
        <option v-for="(option,i) in skills"
                v-bind:value="option.id"
                :key="i"
                v-text="option.id">
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
      <input class="date" type="date" v-model="dueDate" />
    </div>
    <button type="submit">Create Task</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      domainId: null,
      skillId: null,
      title: '',
      description: '',
      dueDate: null,
    }
  },
  computed: {
    task: ({
      domainId, skillId, title, description, dueDate,
    }) => {
      const specification = { title, description }
      return {
        domainId, skillId, specification, dueDate,
      }
    },
  },
  props: {
    domains: { type: Array, required: true },
    skills: { type: Array, required: true },
  },
}
</script>
