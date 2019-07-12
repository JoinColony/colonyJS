<template>
  <div>
    <Addresses :colony-client="colonyClient" :loading="loading" v-if="!error"/>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { getNetworkClient } from '@colony/colony-js-client';
import { open } from '@colony/purser-metamask';

import Addresses from '../components/Addresses.vue';

export default {
  name: 'Home',
  data() {
    return {
      colonyClient: {},
      loading: true,
      error: null,
    };
  },
  components: {
    Addresses,
  },
  async created() {
    try {
      const wallet = await open();
      const networkClient = await getNetworkClient('local', wallet);
      const colonyClient = await networkClient.getColonyClient(1);
      this.loading = false;
      this.colonyClient = colonyClient;
    } catch (error) {
      this.loading = false;
      this.error = error;
    }
  },
};
</script>
