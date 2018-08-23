import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import login from '@/pages/login'

Vue.use(Router)

export default new Router({

  routes: [
      {
        path: '/login',
        name: 'login',
        component: login,
      }, {
        path: '/',
        name: 'index',
        component: index,
        children : require('./auto')
      },{
        path: '*',
        name: '未路由的页面统统返回首页',
        redirect: '/index/basic'
      }
  ]
})
