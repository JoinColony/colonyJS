<template>
  <div>
    <p v-if="loading">loading...</p>
    <div v-if="!loading && colonyClient">
      <p>Wallet Address: {{colonyClient.adapter.wallet.address}}</p>
      <p>Network Address: {{colonyClient.networkClient.contract.address}}</p>
      <p>Colony Address: {{colonyClient.contract.address}}</p>
    </div>
    <p v-if="!loading && error">{{ error }}</p>
  </div>
</template>

<script>
import { getColonyClient } from '@colony/colony-js-client';
import { open } from '@colony/purser-metamask';

export default {
  name: 'Home',
  data() {
    return {
      colonyClient: null,
      loading: true,
      error: null,
    };
  },
  async created() {
    try {
      const wallet = await open();
      const colonyClient = await getColonyClient(
        // The address of the first colony created with `yarn colony-setup`
        '0x0a0e9A5781B26D9450D5e1D53aBB3dA887a67d7F',
        'local',
        wallet,
      );
      this.colonyClient = colonyClient;
      this.loading = false;
    } catch (error) {
      this.error = error;
      this.loading = false;
    }
  },
};
</script>
