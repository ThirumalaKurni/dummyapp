import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDaeQXG1g5NP3RsKUbNtrTTM7yRFqftqA",
  authDomain: "resume-builder-4ef09.firebaseapp.com",
  projectId: "resume-builder-4ef09",
  storageBucket: "resume-builder-4ef09.appspot.com",
  messagingSenderId: "751728866251",
  appId: "1:751728866251:web:71d9bfb9561aaaa63e3c4e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
