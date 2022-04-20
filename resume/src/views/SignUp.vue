<template>
  <div class="auth-wrapper auth-v1">
    <div class="auth-inner">
      <v-card class="auth-card mx-auto" max-width="374">
       <v-card-title class="d-flex align-center justify-center py-7"> 
         <h2 class="text-2xl font-weight-semibold">
           Welcome to <a href="#">Syncbits</a>
         </h2>
        </v-card-title>
        <v-card-text> 
          <p class="mb-2">
            Make your <strong>Resume</strong> management creative and strong!
          </p>
        </v-card-text>
        <v-card-text>
          <v-form @submit.prevent="register">
            <v-text-field
              v-model="username"
              outlined
              label="Username"
              placeholder="JohnDoe"
              hide-details
              class="mb-3"
            ></v-text-field>

            <v-text-field
              v-model="email"
              outlined
              label="Email"
              placeholder="john@example.com"
              hide-details
              class="mb-6"
            >
            </v-text-field>
            <v-text-field
              v-model="password"
              outlined
              label="Password"
              placeholder="············"
            ></v-text-field>

            <div class="d-flex align-center  flex-wrap">
              <v-checkbox
                label="I agree to the Terms & Conditions"
                hide-details
                class="me-3 mt-1"
              >
              </v-checkbox>
            </div>
            <v-btn
              rounded
              block
              color="primary"
              class="mt-6"
              type="submit"
            >
              Sign Up
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
export default{
  name:'SignUp',
  data(){
    return{
      email:'',
      password:'',
    };
  },
  methods:{
  register() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(() => {
        alert('Successfully registered! Please login.');
        this.$router.push('/main');
      })
      .catch(error => {
        alert(error.message);
      });
   },
  },

};
</script>


