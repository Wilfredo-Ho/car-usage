import Vue from 'vue'
import Router from 'vue-router'

import * as Routes from '../routes'
import { flatMenu as Menu } from '../config/menu'

Vue.use(Router)

const router = new Router({
  routes: Menu.map(item => {
    return {
      path: item.path,
      name: item.name,
      component: Routes.default[item.name]
    }
  })
})

//鉴权
// router.beforeEach((to, from, next) => {
  
// })

export default router
