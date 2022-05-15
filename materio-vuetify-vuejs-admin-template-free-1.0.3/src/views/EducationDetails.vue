<template>
    <div>
        <h3>Recent Graduation</h3>
        <v-form @submit.prevent="createEducation">
    <v-text-field
      v-model="collegename"
      label="College-Name"
      outlined
      dense
      placeholder="collegename"
    ></v-text-field>

    <v-text-field
      v-model="yearofpassing"
      label="yearofpassing"
      type="date"
      outlined
      dense
      placeholder="YearofPasing"
    ></v-text-field>

    <v-text-field
      v-model="Grade"
      label="Grade"
      outlined
      dense
      type="text"
      placeholder="Grade"
    ></v-text-field>


    <v-btn color="primary" type="submit">
      Save
    </v-btn>
  </v-form>


    <h3 class="mt-5">12th Standard</h3>
        <v-form @submit.prevent="createEducation">
    <v-text-field
      v-model="collegename12"
      label="College-Name"
      outlined
      dense
      placeholder="collegename"
    ></v-text-field>

    <v-text-field
      v-model="yearofpassing12"
      label="yearofpassing"
      type="date"
      outlined
      dense
      placeholder="YearofPasing"
    ></v-text-field>

    <v-text-field
      v-model="grade12"
      label="Grade"
      outlined
      dense
      type="text"
      placeholder="Grade"
    ></v-text-field>


    <v-btn color="primary" type="submit">
      Save
    </v-btn>
  </v-form>
    <h3 class="mt-5">10th Standard</h3>
        <v-form @submit.prevent="createEducation">
    <v-text-field
      v-model="schoolname"
      label="School-Name"
      outlined
      dense
      placeholder="schoolname"
    ></v-text-field>

    <v-text-field
      v-model="yearofpassing10"
      label="yearofpassing"
      type="date"
      outlined
      dense
      placeholder="YearofPasing"
    ></v-text-field>

    <v-text-field
      v-model="grade10"
      label="Grade"
      outlined
      dense
      type="text"
      placeholder="Grade"
    ></v-text-field>


    <v-btn color="primary" type="submit">
      Save
    </v-btn>
  </v-form>

  <ul class="ma-5" v-for="education in educations" :key="education.id">
      <li> {{education.collegename}} </li>
      <li> {{education.yearofpassing}}</li>
      <li> {{education.grade}}</li>
      <li> {{education.collegename12}} </li>
      <li> {{education.yearofpassing12}}</li>
      <li> {{education.grade12}}</li>
      <li> {{education.schoolname}} </li>
      <li> {{education.yearofpassing10}}</li>
      <li> {{education.grade10}}</li>
  </ul>
    </div>
</template>


<script>
import educationCollRef from "../firebase";
import {addDoc} from "firebase/firestore";
import {getDocs} from "firebase/firestore";
export default {
  data(){
    return{
      collegename: null,
      yearofpassing: null,
      grade: null,
      collegename12:null,
      yearofpassing12:null,
      grade12:null,
      schoolname:null,
      yearofpassing10:null,
      grade10:null,
      educations:[],
    };
  },
  methods:{
    async createEducation(){
      const addedDoc = await addDoc(educationCollRef,this.$data);
      alert('Document Created Successfully')
      console.log(addedDoc);
    },
    async fetchEducations(){
       let educationsSnapShot = await getDocs(profileCollRef);
       let educations = [];
       educationsSnapShot.forEach(education=>{
         educations.push(education.data());

       });
       this.educations=educations;
    }
  },
  created(){
    this.fetchEducations();
  },
};
</script>