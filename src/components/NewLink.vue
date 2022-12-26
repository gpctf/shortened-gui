<template>
    <v-dialog
      v-model="dialog"
      persistent
      max-width="1300"
      overlay-opacity="0.90"
      overlay-color="#000000">
      <v-card v-show="!hidecomp">
        <v-card-title class="text-h5">
          Skróć Link
        </v-card-title>
        <v-card-text>Poniżej wpisz link który chcesz skrócić</v-card-text>
        <v-text-field
          v-model="linktocreate"
          label="Link"
          :rules="rules"
          color="textBoxFocus"
        >
        <v-icon slot="prepend">mdi-link</v-icon>
        </v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="red darken-1"
            text
            @click="dialog = false"
          >
            Odrzuć
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="(thinking=!thinking);generateLink(linktocreate)"
          >
          <v-progress-circular
            indeterminate
            v-show="thinking"
            :width="3"
            :size="25"
            ></v-progress-circular>
            Stwórz link
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-show="showlink">
        <v-alert
        outlined
        prominent
        type="success">
          Oto twój link<br>{{link}}
        </v-alert>
    </v-card>
    <v-card v-show="error">
        <v-alert
  prominent
  type="error"
>Podczas przetwarzania twojego żądania wystąpił błąd{{showerror?`: ${error}`:''}}</v-alert>
    </v-card>
      <template v-slot:activator="{ on }">
        <v-btn color="secondary" elevation="2" v-on="on">Generate link</v-btn>
      </template>
    </v-dialog>
</template>
<script>
import { mdiLink } from '@mdi/js'
export default {
  name: 'NewLink',

  data: () => {
    return {
      dialog: false,
      thinking: false,
      error: undefined,
      showerror: false,
      link: undefined,
      hidecomp: false,
      showlink: false,
      linktocreate: '',
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 10) || 'Min 10 characters'
      ],
      icons: {
        mdiLink
      }
    }
  },
  methods: {
    generateLink: function (linktocreate) {
      const vm = this
      fetch(document.location.origin + '/api/', {
        method: 'POST',
        body: new URLSearchParams({
          operation: 1,
          data: linktocreate
        })
      })
        .then(async response => {
          vm.thinking = false
          const json = await response.json()
          if (json.error) {
            vm.hidecomp = true
            vm.error = json.error
            vm.showerror = json.inform
          } else {
            vm.link = window.location.origin + '/link/' + json.code
            vm.hidecomp = true
            this.showlink = true
          }
        })
    }
  }
}
</script>
<style scoped>
.v-text-field{
    padding:16px 24px 10px;
}
</style>
