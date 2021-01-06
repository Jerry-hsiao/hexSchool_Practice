// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import App from './App'
import router from './router'
import currencyFilter from './filters/currency'

Vue.prototype.$bus = new Vue()
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// 使用vue axios來儲存cookie
axios.defaults.withCredentials = true

// Loading 是元件 因此要全域的方式啟用他 就不需要每個元件內部個別取用
Vue.component('Loading', Loading)
// 將數字換成錢符號和三位逗號方法寫在外層資料夾帶進來
Vue.filter('currency', currencyFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const api = `${process.env.APIPATH}/api/user/check`
    axios.post(api).then((r) => {
      if (r.data.success) {
        next()
      } else {
        next({
          path: '/login'
        })
      }
    })
  } else {
    next()
  }
})
