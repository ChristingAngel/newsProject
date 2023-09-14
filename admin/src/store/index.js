import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    isGetterRouter:false,
    isCollapsed:false,
    userInfo:{}
  },
  getters: {
  },
  mutations: {
    changeGetterRouter(state,value){
      state.isGetterRouter = value
    },
    //控制侧边栏展开
    changeCollapsed(state){
      state.isCollapsed = !state.isCollapsed
    },
    //用户信息
    changeUserInfo(state,value){
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    },
    //清除用户信息
    clearUserInfo(state,value){
      state.userInfo = {}
    }
  },
  actions: {
  },
  modules: {
  },
  //持久化插件 记住用户的偏好 比如侧边栏是不折叠的 刷新浏览器以后还是不折叠的
  plugins: [createPersistedState({
    //持久化信息
    paths:['isCollapsed','userInfo']//控制是否持久化 
  })],
})
