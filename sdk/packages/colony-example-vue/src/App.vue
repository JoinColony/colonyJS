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
import { connect } from '@/api/network'
import { setNetwork } from '@/lib/network-store'

export default {
  async created() {
    const network = await connect()
    setNetwork(network)
  },
  methods: {
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
.container {
  display: flex;
  justify-content: center;
}

.box {
  background-color: #80808008;
  border: 1px solid #00000038;
  padding: 10px;
  border-radius: 2px;
  text-align: center;
  margin-bottom: 5px;
}

.field {
  margin-bottom: 5px;
}
</style>
