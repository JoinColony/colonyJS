<template>
  <div>
    <h1>Create Token</h1>
    <CreateTokenForm @submit="create"/>
    <pre>{{ msg }}</pre>
  </div>
</template>
<script>
import { createToken } from '@/api/token'
import CreateTokenForm from '@/components/token/CreateTokenForm.vue'
import msgMixin from './msg-mixin'

export default {
  components: {
    CreateTokenForm,
  },
  mixins: [msgMixin],
  data() {
    return {
      loadingMsg: 'Creating Token',
      dataMsg: 'Token Address',
    }
  },
  methods: {
    request: createToken,
  },
}
</script>
