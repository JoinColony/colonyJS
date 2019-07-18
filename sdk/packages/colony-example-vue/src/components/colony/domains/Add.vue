<template>
  <form @submit.prevent="$emit('submit', {})">
    <button type="submit">Add Domain</button>
  </form>
</template>

<script>
export default {
  name: 'Colony.Domains.Add',
}
</script>
