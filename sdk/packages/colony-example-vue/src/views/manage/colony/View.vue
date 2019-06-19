<template>
  <div>
    <div id="nav">
      <router-link :to="{ name: 'colonyAdmins' }">Admins</router-link> |
      <router-link :to="{ name: 'colonyDomains' }">Domains</router-link> |
      <router-link :to="{ name: 'colonyFunding' }">Funding</router-link> |
      <router-link :to="{ name: 'colonyTasks' }">Tasks</router-link> |
      <router-link :to="{ name: 'colonyToken' }">Token</router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { getColonyClient } from '@/api/colony'
import { setColony } from '@/helpers/colony-store'
import addressMixin from './address-mixin'
import store from '@/store'

export default {
  mixins: [addressMixin],
  async beforeRouteEnter(to, from, next) {
    const { params: { address } } = to
    const colony = await getColonyClient({ colonyAddress: address })
    setColony(colony)
    await Promise.all([
      store.dispatch('domains/hydrate'),
      store.dispatch('tasks/hydrate'),
      store.dispatch('skills/hydrate'),
    ])
    next()
  },
}
</script>
