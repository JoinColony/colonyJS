<template>
  <div>
    <p v-if="loading">loading...</p>
    <div v-if="!loading">
      <p>Wallet Address: {{colonyClient.adapter.wallet.address}}</p>
      <p>Network Address: {{colonyClient.networkClient.contract.address}}</p>
      <p>Colony Address: {{colonyClient.contract.address}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Me',
  props: {
    colonyClient: { type: Object, required: true },
    loading: { type: Boolean },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
