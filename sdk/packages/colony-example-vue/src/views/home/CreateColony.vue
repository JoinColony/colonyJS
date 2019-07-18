<template>
  <div>
    <h1>Create Colony</h1>
    <CreateColonyForm @submit="create"/>
    <pre>{{ msg }}</pre>
  </div>
</template>

<script>
import { createColony } from '@/api/colony'
import CreateColonyForm from '@/components/colony/CreateColonyForm.vue'
import messageMixin from '@/mixins/message'

export default {
  name: 'Home.CreateColony',
  components: {
    CreateColonyForm,
  },
  mixins: [messageMixin],
  data() {
    return {
      loadingMsg: 'Creating Colony',
      dataMsg: 'Colony Address',
    }
  },
  methods: {
    async request(...args) {
      const { address } = await createColony(...args)
      return address
    },
  },
}
</script>
