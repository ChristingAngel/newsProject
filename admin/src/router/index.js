import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import MainBox from '../views/MainBox.vue'
import Routesconfig from './config.js'
import store from '../store/index'

const routes = [
  {
    path:"/login",
    name:"login",
    component:Login
  },
  {
    path:"/mainbox",
    name:"mainbox",
    component:MainBox
  }
  //mainbox嵌套路由根据权限动态添加
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
//每次路由跳转之前
router.beforeEach((to,from,next)=>{
  if (to.name==='login') {
    next()
  } else {
    //如果登录过 next()
    //未登录 重定向login
    if (!localStorage.getItem('token')) {
      next({
        path:'/login'
      })
    }else{
      if (!store.state.isGetterRouter) {
        //第一次
        ConfigRuoter()
        next({
          path:to.fullPath
        })
      } else {
        next()
      }
    }
  }
})

const ConfigRuoter = ()=>{
  Routesconfig.forEach(item=>{
    router.addRoute('mainbox',item)
  })
  //vuex中设置为true
  store.commit('changeGetterRouter',true)
}

export default router
