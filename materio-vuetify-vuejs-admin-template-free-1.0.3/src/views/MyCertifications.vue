<template>
    <div>
        <h2 class="ma-5">
            Add Certifications
        </h2>
        <v-form @submit.prevent="createCertification">
    <v-text-field
      v-model="certificatename"
      label="Certificate-Name"
      outlined
      dense
      placeholder="certificatename"
    ></v-text-field>

    <v-text-field
      v-model="companyname"
      label="Issued-by"
      type="text"
      outlined
      dense
      placeholder="CompanyName"
    ></v-text-field>

    <v-text-field
      v-model="field"
      label="Field"
      outlined
      dense
      type="text"
      placeholder="Field"
    ></v-text-field>


    <v-btn color="primary" type="submit">
      Save
    </v-btn>
  </v-form>
  <ul class="ma-5" v-for="certification in certifications" :key="certification.id">
    <li>{{certification.certificatename}}</li>
    <li>{{certification.companyname}}</li>
    <li>{{certification.field}}</li>
    </ul>
    </div>
</template>

<script>
import { profileCollRef , educationCollRef ,skillCollRef ,experienceCollRef,projectCollRef,certificationCollRef} from "../firebase";
import {addDoc} from "firebase/firestore";
import {getDocs} from "firebase/firestore";
export default {
  data(){
    return{
      certificatename: null,
      companyname: null,
      field: null,
      certifications:[],
    };
  },
  methods:{
    async createCertification(){
      const addedDoc = await addDoc(certificationCollRef,this.$data);
      alert('Document Created Successfully')
      console.log(addedDoc);
    },
    async fetchCertifications(){
       let certificationsSnapShot = await getDocs(certificationCollRef);
       let certifications = [];
       certificationsSnapShot.forEach(certification=>{
         certifications.push(certification.data());

       });
       this.certifications=certifications;
    }
},
created(){
    this.fetchCertifications();
  },
};
</script>