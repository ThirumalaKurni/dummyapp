import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import firebase from 'firebase/compat'
import 'firebase/compat/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBMAq84IhFPCtvGB9yZ474t6NcDvWVZJds",
  authDomain: "resumebuilder-d1f9e.firebaseapp.com",
  projectId: "resumebuilder-d1f9e",
  storageBucket: "resumebuilder-d1f9e.appspot.com",
  messagingSenderId: "82917111936",
  appId: "1:82917111936:web:7327724481d181439c4e65"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
