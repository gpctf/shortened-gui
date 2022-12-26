<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      sticky
    >
    <h1>{{$data.string.helloString}}</h1>
    <v-spacer></v-spacer>
    <NewLink/>
    </v-app-bar>
    <OpenLink/>
    <v-main>
      <router-view/>
    </v-main>
    <FooterComp/>
  </v-app>
</template>

<script>
import FooterComp from '@/components/FooterComp.vue'
import NewLink from '@/components/NewLink.vue'
import OpenLink from '@/components/OpenLink.vue'
export default {
  name: 'App',
  components: {
    FooterComp,
    NewLink,
    OpenLink
  },
  data: () => ({
    string: {
      helloString: 'Shortened'
    }
    //
  }),
  mounted: function () {
    if (localStorage.theme !== undefined) {
      this.$vuetify.theme.dark = localStorage.theme === 'true'
    }
  }
}
</script>
