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
      type="text"
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

    <v-btn color="primary"
    type="submit">
      Save
    </v-btn>
  </v-form>
  <h2 class="ma-6">
      Your Details
  </h2>
  <ul class="ma-5" v-for="profile in profiles" :key="profile.id">
      <li> {{profile.firstname}} </li>
      <li> {{profile.email}}</li>
      <li> {{profile.mobile}}</li>
     <li> {{profile.dob}} </li>
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
import { profileCollRef , educationCollRef ,skillCollRef ,experienceCollRef,projectCollRef,certificationCollRef} from "../firebase";
import {addDoc} from "firebase/firestore";
import {getDoc} from "firebase/firestore";
export default {
  data(){
    return{
      firstname: null,
      email: null,
      mobile: null,
      dob:null,
      profiles:[],
    };
  },
  methods:{
    async createProfile(){
      const addedDoc = await addDoc(profileCollRef,this.$data);
      alert('Document Created Successfully')
      console.log(addedDoc);
    },
    async fetchProfiles(){
       let profilesSnapShot = await getDoc(profileCollRef);
       let profiles = [];
       profilesSnapShot.forEach(profile=>{
         profiles.push(profile.data());

       });
       this.profiles=profiles;
    }
  },
  created(){
    this.fetchProfiles();
  },
};
</script>