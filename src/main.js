import Vue from 'vue'
import App from './App'
import Store from './vuex/index'
import http from './utils/http'
import api from './api/index'

import cuCustom from 'colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom);

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$api = api;

Vue.compute
App.mpType = 'app'

const app = new Vue({
  ...App,
  Store
})
app.$mount()
