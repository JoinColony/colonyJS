<template>
  <div class="home">
    <Addresses :colony-client="colonyClient" :loading="loading" v-if="!error"/>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { getNetworkClient } from '@colony/colony-js-client';
import { open } from '@colony/purser-metamask';
// @ is an alias to /src
import Addresses from '@/components/Addresses.vue';

export default {
  name: 'home',
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
    } catch (err) {
      this.loading = false;
      this.error = err;
    }
  },
};
</script>
