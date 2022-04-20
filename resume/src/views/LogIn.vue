<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card mx-auto mt-6" max-width=374 >
          <v-card-title class="d-flex align-center justify-center py-7"> 
         <h2 class="text-2xl font-weight-semibold">
           Welcome to <br> <a href="#">Resume Builder</a>
         </h2>
        </v-card-title>
        <v-card-text>
            <p class="mb-2">
            Please <strong>sign-in</strong> to your account and start the adventure
          </p>
        </v-card-text>
        <v-card-text>
          <v-form @submit.prevent="login">
            <v-text-field
              v-model="email"
              outlined
              label="Email"
              hide-details
              placeholder="john@example.com"
              class="mb-3"
            ></v-text-field>
            <v-text-field
              v-model="password"
              outlined
              label="Password"
              placeholder="············"
            ></v-text-field>
            <div class="d-flex align-center justify-space-between flex-wrap">
              <v-checkbox
                label="Remember Me"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox>
              <a
                href="javascript:void(0)"
                class="mt-1"
              >
                Forgot Password?
              </a>
            </div>
            <v-btn
              block
              rounded
              color="primary"
              class="mt-6"
              type="submit"
            >
              Login
            </v-btn>
          </v-form>
        </v-card-text>
        <v-card-text class="d-flex align-center justify-center flex-wrap mt-2">
          <span class="me-2">
            New on our platform?
          </span>
           <a href="#"
           v-on:click="login()"> Create an account</a>
        </v-card-text>

      </v-card>
    </div>
  </div>
</template>

<script>

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
export default {
  name: 'LogIn',
  data(){
    return{
      email:'',
      password:'',
    };
  },
  methods:{
    login(){
      firebase
           .auth()
           .signInWithEmailAndPassword(this.email, this.password)
           .then(() => {
               alert('Succesfully logged in');
               this.$router.push('/main');
           })
           .catch(error => {
                alert(error.message);
           });
    },
  },
}
  
</script>
