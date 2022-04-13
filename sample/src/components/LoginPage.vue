<template>
    <v-card class="ma-auto" elevation="20" shaped max-width="350">
      <v-card-title class="justify-center">SignUp</v-card-title>
      <v-card-text>
        <v-text-field required type="email" placeholder="Email">
          <v-icon right>mdi-email</v-icon>
        </v-text-field>
        <v-text-field  required type="password" placeholder="Password">
          <v-icon right>mdi-lock</v-icon>
        </v-text-field>
      </v-card-text>
      <v-btn color="primary">Login</v-btn>
      <v-href>forgot password</v-href>

    </v-card>
</template>

<script>
export default {
  data() {
    
  },
}
</script>