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
import addressMixin from './address-mixin'

export default {
  mixins: [addressMixin],
}
</script>
