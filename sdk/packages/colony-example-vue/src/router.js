import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/View.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/manage',
      name: 'manage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "manage" */ './views/manage/View.vue'),
      children: [{
        path: 'set',
        name: 'setColony',
        component: () => import(/* webpackChunkName: "setColony" */ './views/manage/SetColony.vue'),
        props: route => Object.assign({}, route.params, route.query),
      }, {
        path: ':address',
        name: 'manageColony',
        component: () => import(/* webpackChunkName: "colony" */ './views/manage/colony/View.vue'),
        props: route => Object.assign({}, route.params, route.query),
        children: [{
          path: 'admins',
          name: 'colonyAdmins',
          component: () => import(/* webpackChunkName: "colonyAdmins" */ './views/manage/colony/admins/View.vue'),
          props: route => Object.assign({}, route.params, route.query),
        }, {
          path: 'domains',
          name: 'colonyDomains',
          component: () => import(/* webpackChunkName: "colonyDomains" */ './views/manage/colony/domains/View.vue'),
          props: route => Object.assign({}, route.params, route.query),
        }, {
          path: 'funding',
          name: 'colonyFunding',
          component: () => import(/* webpackChunkName: "colonyFunding" */ './views/manage/colony/funding/View.vue'),
          props: route => Object.assign({}, route.params, route.query),
        }, {
          path: 'tasks',
          name: 'colonyTasks',
          component: () => import(/* webpackChunkName: "colonyTasks" */ './views/manage/colony/tasks/View.vue'),
          props: route => Object.assign({}, route.params, route.query),
        }, {
          path: 'token',
          name: 'colonyToken',
          component: () => import(/* webpackChunkName: "colonyToken" */ './views/manage/colony/token/View.vue'),
          props: route => Object.assign({}, route.params, route.query),
        }],
      }],
    },
  ],
})
