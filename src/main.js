import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview'
//自定义工具类
import * as util from './util'
import 'iview/dist/styles/iview.css'

Vue.use(iView);

Vue.prototype.$util = util

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
