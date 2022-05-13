import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/DashBoard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/MyProfile'),
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('@/views/EducationDetails'),
  },
  {
    path: '/experience',
    name: 'experience',
    component: () => import('@/views/MyExperience'),
  },
  {
    path: '/project',
    name: 'projects',
    component: () => import('@/views/MyProjects'),
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import('@/views/MySkills'),
  },
  {
    path: '/certifications',
    name:'certifications',
    component: () => import('@/views/MyCertifications'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})



export default router
