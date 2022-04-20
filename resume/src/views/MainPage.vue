<template>
  <v-card
    height="500"
    width="500">

    <v-app-bar
      color="deep-purple accent-4"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Skills</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Internships</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Experience</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
 </v-card>
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script>