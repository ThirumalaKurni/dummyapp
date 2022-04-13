import { createRouter, createWebHashHistory } from 'vue-router'
import SignIn from '../views/SignIn.vue'
import LoginIn from '../views/LoginIn.vue'

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/login',
    name: 'LoginIn',
   
    component:LoginIn
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
