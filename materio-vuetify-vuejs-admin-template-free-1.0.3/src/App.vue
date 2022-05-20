<template>
  <component :is="resolveLayout">
    <router-view></router-view>
    <upgrade-to-pro></upgrade-to-pro>
  </component>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useRouter } from '@/utils'
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'
import firebase from 'firebase/compat'

export default {
  components: {
    LayoutBlank,
    LayoutContent,
  },
  methods: {
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Successfully logged out');
        this.$router.push('/pages/login');
      })
      .catch(error => {
        alert(error.message);
        this.$router.push('/');
      });
  },
},
  setup() {
    const { route } = useRouter()

    const resolveLayout = computed(() => {
      // Handles initial route
      if (route.value.name === null) return null

      if (route.value.meta.layout === 'blank') return 'layout-blank'

      return 'layout-content'
    })

    return {
      resolveLayout,
    }
  },
}
</script>
