<template>
  <div>
    <div>
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
import { setColonyClient } from '@/stores/colonyClient'
import store from '@/store'

export default {
  name: 'Manage.Colony.View',
  async beforeRouteEnter(to, from, next) {
    const { params: { address } } = to
    const colonyClient = await getColonyClient({ colonyAddress: address })
    setColonyClient(colonyClient)
    await Promise.all([
      store.dispatch('domains/hydrate'),
      store.dispatch('pots/hydrate'),
      store.dispatch('tasks/hydrate'),
      store.dispatch('skills/hydrate'),
    ])
    next()
  },
}
</script>
