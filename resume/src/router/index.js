import VueRouter from 'vue-router'
import Vue from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import LogIn from '../views/LogIn.vue'



Vue.use(VueRouter)



const routes = [
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomePage.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import(/* webpackChunkName: "about" */ '../views/MainPage.vue'),
    meta: {
      authRequired: true,
    },
  }

]

const router = new VueRouter({
  mode:'history',
  base:process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  const authenticatedUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  
  if ( requiresAuth && ! authenticatedUser ) {
      next("login");
  }
  else {
    // firebase.analytics().logEvent('page_view', { type: 'internal' });

      next();
  }
})

export default router
