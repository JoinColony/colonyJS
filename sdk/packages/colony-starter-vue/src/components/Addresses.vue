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
  name: 'Addresses',
  props: {
    colonyClient: { type: Object, required: true },
    loading: { type: Boolean },
  },
};
</script>
