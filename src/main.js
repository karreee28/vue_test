import 'babel-polyfill' //npm install babel-polyfill 후 추가(ie 11 구동 위해 필수)
import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/common.css'
import Router from './router.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  Router,
  render: h => h(App)
})
