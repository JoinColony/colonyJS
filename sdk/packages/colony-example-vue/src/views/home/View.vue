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
  name: 'Home.View',
  components: {
    CreateToken,
    CreateColony,
  },
}
</script>
