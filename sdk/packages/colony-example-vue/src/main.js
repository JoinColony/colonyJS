import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import init from '@/config/init'

Vue.config.productionTip = false

async function up() {
  await init()
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#app')
}

up()
