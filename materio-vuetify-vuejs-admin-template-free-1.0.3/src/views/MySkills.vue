<template>
    <div>
        <v-from @submit.prevent="createSkill">
        <h2 class="ma-5">Add Skills</h2>
        <v-text-field
            v-model="myskills"
            label="Skills"
            outlined
            dense
         placeholder="Skills"
          
        ></v-text-field>
        <v-btn type="submit" color="primary">Save</v-btn>
        </v-from>

        <ul class="ma-5" v-for="skill in skills" :key="skill.id">
            <li> {{skill.myskills}} </li>

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
      myskills: null,
      skills:[],
    };
  },
  methods:{
    async createSkill(){
      const addedDoc = await addDoc(skillCollRef,this.$data);
      alert('Document Created Successfully')
      console.log(addedDoc);
    },
    async fetchSkills(){
       let skillsSnapShot = await getDocs(skillCollRef);
       let skills = [];
       skillsSnapShot.forEach(skill=>{
         skills.push(skill.data());

       });
       this.skills=skills;
    }
  },
  created(){
    this.fetchSkills();
  },
};
</script>