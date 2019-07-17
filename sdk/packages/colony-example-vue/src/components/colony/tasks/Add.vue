<template>
  <form
        @submit.prevent="$emit('submit', { task })">
    <div>
      <label>Domain:</label>
      <select v-model="domainId">
        <option :value="null">Select domain</option>
        <option
          v-for="(option,i) in domains"
          v-bind:value="option.id"
          v-text="option.id"
          :key="i"
        />
      </select>
    </div>
    <div>
      <label>Skill:</label>
      <select v-model="skillId">
        <option :value="null">Select skill</option>
        <option
          v-for="(option,i) in skills"
          v-bind:value="option.id"
          :key="i"
          v-text="option.id"
        />
      </select>
    </div>
    <div>
      <label>Title: </label>
      <input type="text" v-model="title" />
    </div>
    <div>
      <label>Description: </label>
      <input type="text" v-model="description" />
    </div>
    <div>
      <label>Due date:</label>
      <input type="date" v-model="dueDate" />
    </div>
    <button type="submit">Add Task</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.Tasks.Add',
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
