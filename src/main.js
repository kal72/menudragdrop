import Vue from 'vue'
import App from './App.vue'

import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import { VueNestable, VueNestableHandle } from 'vue-nestable'

Vue.component('VueNestable', VueNestable)
Vue.component('VueNestableHandle', VueNestableHandle)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
