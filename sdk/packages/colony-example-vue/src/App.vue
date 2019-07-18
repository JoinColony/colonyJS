<template>
  <div class="app">
    <div class="nav">
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/manage">Manage</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { connect } from '@/api/network'
import { setNetworkClient } from '@/stores/networkClient'

export default {
  name: 'App',
  async created() {
    const networkClient = await connect()
    setNetworkClient(networkClient)
  },
}
</script>

<style>
.app {
  color: #2C3E50;
  font-family: 'Avenir', sans-serif;
  text-align: center;
}

.nav {
  padding: 30px;
}

a {
  color: #2C3E50;
  font-weight: bold;
}

a.router-link-exact-active {
  color: #42b983;
}

.container {
  display: flex;
  justify-content: center;
}

.box {
  background-color: #FBFBFB;
  border: 1px solid #2C3E50;
  border-radius: 2px;
  margin-bottom: 5px;
  padding: 20px;
}

h3 {
  margin-bottom: 10px;
  margin-top: 0;
}

button {
  margin: 10px 0;
}

label {
  padding: 10px;
}

input, select {
  margin: 10px auto;
}

</style>
