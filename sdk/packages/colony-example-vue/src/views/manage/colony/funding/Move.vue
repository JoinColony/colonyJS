<template>
  <div class="box">
    <h3>Move</h3>
    <Move @submit="moveFunds"/>
  </div>
</template>
<script>
import { moveFunds } from '@/api/funding'
import Move from '@/components/colony/funding/Move.vue'

export default {
  components: {
    Move,
  },
  data() {
    return {
    }
  },
  methods: {
    moveFunds,
  },
}
</script>
