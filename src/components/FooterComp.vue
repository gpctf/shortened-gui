<template>
<v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <strong class="subheading">Mamy nadzieje że spodobał ci sie nasz skracacz linków</strong>

        <v-spacer></v-spacer>
        <v-btn elevation="4" icon title="go to github"> <a :href="links.github"><v-icon color="#000000">{{$data.icons.mdiGithub}}</v-icon></a></v-btn><v-switch @change="changeTheme" v-model="$vuetify.theme.dark" :label="$vuetify.theme.dark?'Dark Theme':'Ligth theme'"></v-switch>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Shortened(aka pythontest)</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
import { mdiGithub, mdiSwapHorizontal } from '@mdi/js'
export default {
  name: 'FooterComp',

  data: () => ({
    links: {
      github: 'https://github.com/gpctf/shortened'
    },
    icons: {
      github: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      mdiGithub,
      mdiSwapHorizontal
    }
  }),
  methods: {
    changeTheme () {
      localStorage.theme = this.$vuetify.theme.dark
    }
  }
}
</script>
