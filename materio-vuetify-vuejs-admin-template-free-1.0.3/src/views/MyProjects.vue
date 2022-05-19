<template>
    <div>
        <v-form @submit.prevent="createProject">
        <h2 class="ma-5">Add Projects</h2>
        <v-text-field
            v-model="myprojects"
            label="Projects"
            outlined
            dense
         placeholder="Projects"
        ></v-text-field>
        <v-btn type="submit" color="primary">Save</v-btn>
        </v-form>

        <ul class="ma-5" v-for="project in projects" :key="project.id">
            <li> {{project.myprojects}} </li>
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
      myprojects: null,
      projects:[],
    };
  },
  methods:{
    async createProject(){
      const addedDoc = await addDoc(projectCollRef,this.$data);
      alert('Document Created Successfully')
      console.log(addedDoc);
    },
    async fetchProjects(){
       let projectsSnapShot = await getDocs(projectCollRef);
       let projects = [];
       projectsSnapShot.forEach(project=>{
         projects.push(project.data());

       });
       this.projects=projects;
    }
  },
  created(){
    this.fetchProjects();
  },
};
</script>