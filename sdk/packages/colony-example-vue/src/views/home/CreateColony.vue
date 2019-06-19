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
import msgMixin from './msg-mixin'

export default {
  components: {
    CreateColonyForm,
  },
  mixins: [msgMixin],
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
