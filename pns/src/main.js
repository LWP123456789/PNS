import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import api from './api'

Vue.prototype.$api = api

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
