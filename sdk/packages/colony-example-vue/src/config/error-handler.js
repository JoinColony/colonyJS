/* eslint-disable no-alert */

import Vue from 'vue'

Vue.config.errorHandler = (err) => {
  window.alert(err)
  console.log(err)
}
