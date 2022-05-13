<template>
 <div>
     <v-form @submit.prevent="createProfile">
    <v-text-field
      v-model="firstname"
      label="First Name"
      outlined
      dense
      placeholder="First Name"
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      outlined
      dense
      placeholder="Email"
    ></v-text-field>

    <v-text-field
      v-model="mobile"
      label="Mobile"
      outlined
      dense
      type="number"
      placeholder="Number"
    ></v-text-field>

    <v-text-field
      v-model="dob"
      label="DOB"
      outlined
      dense
      type="date"
      placeholder="Dob"
    ></v-text-field>

    <v-btn color="primary">
      Save
    </v-btn>
  </v-form>
  <h2 class="ma-6">
      Your Details
  </h2>
  <ul class="ma-5">
      <li><span>Name:Kurni Thirumala</span></li>
      <li><span>Email:kurnithirumala2001@gmail.com</span></li>
      <li><span>Number:9652441001</span></li>
      <li><span>Date of Birth:01/04/2001</span></li>
  </ul>
  <v-btn
      type="reset"
      outlined
      class="mx-2"
    >
      Reset
    </v-btn>
 </div>
</template>


<script>
import profileCollRef from '../firebase';
import {addDoc} from '/firebase/firestore';
export default {
  data(){
    return{
      firstname: null,
      email: null,
      mobile: null,
      dob:null,
    }
  },
  methods:{
    async createProfile(){
      console.log('Creating Document');
      const addedDoc = await addDoc(profileCollRef,this.$data);
      console.log(addedDoc);;
    }
  }
}
</script>