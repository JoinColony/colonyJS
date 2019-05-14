<template>
  <div>
    <CreateToken />
    <CreateColony />
  </div>
</template>
<script>
import CreateToken from './CreateToken.vue'
import CreateColony from './CreateColony.vue'

export default {
  components: {
    CreateToken,
    CreateColony,
  },
}
</script>
