// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Menu from './components/Menu.vue'

Vue.component('app-menu', Menu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
