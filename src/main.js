// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Menu from './components/Menu.vue'
import DashContent from './components/DashContent.vue'
import Contacts from './components/Contacts.vue'

Vue.component('app-menu', Menu)
Vue.component('dash-cont', DashContent)
Vue.component('contacts', Contacts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
