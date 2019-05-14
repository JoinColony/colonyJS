<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/manage">Manage</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  async created() {
    await this.connectNetwork()
  },
  methods: {
    ...mapActions({
      connectNetwork: 'network/connect',
    }),
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
