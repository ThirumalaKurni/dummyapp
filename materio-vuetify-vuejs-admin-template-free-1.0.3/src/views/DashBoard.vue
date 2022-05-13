<template>
<div>
    <v-card max-width=500 outlined class="mx-auto mb-6">
      <div class="ma-5">
        <v-toolbar class="mx-auto px-5"
         width="200px">MY PROFILE
         </v-toolbar>
         <v-spacer></v-spacer>
         <v-btn
              block
              rounded
              color="primary"
              class="mt-6"
              v-on:click="profile()">
             Click here to Update Your Profile
         </v-btn>
      </div>
    </v-card>
    <v-card max-width=500 outlined class="mx-auto mb-6">
      <div class="ma-5">
        <v-toolbar class="mx-auto px-6"
         width="250px">MY EDUCATION
         </v-toolbar>
         <v-spacer></v-spacer>
         <v-btn
              block
              rounded
              color="primary"
              class="mt-6"
              v-on:click="education()">
             Click here to Add Your Education Details
         </v-btn>
      </div>
    </v-card>
    <v-spacer></v-spacer>
    <v-card max-width=500 outlined class="mx-auto mb-6">
      <div class="ma-5">
        <v-toolbar class="mx-auto px-6"
         width="200px">MY SKILLS
         </v-toolbar>
         <v-spacer></v-spacer>
         <v-btn
              block
              rounded
              color="primary"
              class="mt-6"
              v-on:click="skills()">
             Click here to Add Your Skills
         </v-btn>
      </div>
    </v-card>
    <v-card max-width=500 outlined class="mx-auto mb-6">
      <div class="ma-5">
        <v-toolbar class="mx-auto px-6"
         width="250px">MY EXPERIENCE
         </v-toolbar>
         <v-spacer></v-spacer>
         <v-btn
              block
              rounded
              color="primary"
              class="mt-6"
              v-on:click="experience()">
             Click here to Add Your Experience
         </v-btn>
      </div>
    </v-card>
    <v-card max-width=500 outlined class="mx-auto mb-6">
      <div class="ma-5">
        <v-toolbar class="mx-auto px-6"
         width="250px">MY PROJECTS
         </v-toolbar>
         <v-spacer></v-spacer>
         <v-btn
              block
              rounded
              color="primary"
              class="mt-6"
              v-on:click="projects()">
             Click here to Add Your Projects
         </v-btn>
      </div>
    </v-card>
    <v-card max-width=500 outlined class="mx-auto mb-6">
      <div class="ma-5">
        <v-toolbar class="mx-auto px-6"
         width="250px">MY CERTIFICATIONS
         </v-toolbar>
         <v-spacer></v-spacer>
         <v-btn
              block
              rounded
              color="primary"
              class="mt-6"
              v-on:click="certifications()">
             Click here to Add Your Certifications
         </v-btn>
      </div>
    </v-card>
</div>
</template>
<script>
export default {
    methods: {
        profile(){
            this.$router.push('/profile');
        },
        projects(){
            this.$router.push('/projects');
        },
        skills(){
            this.$router.push('/skills');
        },
        education(){
            this.$router.push('/education');
        },
        certifications(){
            this.$router.push('/certifications');
        },
        experience(){
            this.$router.push('/experience');
        }
    },

}
</script>
