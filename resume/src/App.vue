<template>
  <v-app>
    <v-toolbar flat>
      <h1 class="text-6xl font-weight-semibold "
      v-on:click="Home()"
      >
        <strong>
          Resume Builder
          </strong></h1>
      <v-spacer></v-spacer>
      <v-btn class="primary" rounded dark
       v-on:click="Home()">
        <strong>
          Home
        </strong>
      </v-btn>
      <v-btn class="primary" rounded dark
       v-on:click="Login()">
        <strong>
          Login
        </strong>
      </v-btn>
      <v-btn class="primary" rounded dark v-on:click="Signup()">
        <strong>
          SignUp
        </strong>
      </v-btn>
    </v-toolbar>
    <router-view/>

  </v-app>
</template>

<script>
export default {
  methods: {
    Home(){
      this.$router.push('/');
    },
    Login(){
      this.$router.push('/login');
    },
    Signup(){
      this.$router.push('/signup');
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
