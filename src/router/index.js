import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home'
import good from '../components/good/good'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/good',
      name: 'good',
      component: good
    }
  ]
})
