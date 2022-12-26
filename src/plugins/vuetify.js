import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#2e2e2e',
        secondary: '#000000',
        textBoxFocus: '#6a6a6b'
      },
      light: {
        textBoxFocus: '#1976D2'
      }
    }
  }
})
