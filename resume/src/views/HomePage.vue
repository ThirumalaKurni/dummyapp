<template>
<div>
    <v-card class="ma-auto" max-width=400>
        <vmain>
        <v-card-text>
           <h2>Welcome!!</h2> 
        </v-card-text>
        <v-card-text>
            <h4>To</h4>
        </v-card-text>
        <v-card-text>
          <h1>Resume Builder</h1>
        </v-card-text>
        </vmain>

        <v-btn
              block
              rounded
              color="primary"
              class="mt-6"
              v-on:click="Login()"
            >
              Click Here To Login
            </v-btn>
            <v-spacer></v-spacer>
    </v-card>
</div>
</template>
<script>
export default {
    methods:{
         Login(){
      this.$router.push('/login');
    },

    }
}
</script>