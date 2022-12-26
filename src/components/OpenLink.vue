<template>
    <v-dialog
      v-model="islink"
      persistent
      max-width="1300"
      transition="dialog-bottom-transition"
      overlay-opacity="0.99"
      overlay-color="#000000"
    >
      <v-card>
        <v-toolbar
              color="primary"
              dark
            >Próbujesz otworzyć link</v-toolbar>
            <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
            v-show="(!loaded && !isError)"
          ></v-progress-linear>
        <v-alert
  prominent
  type="error"
  v-model="isError"
>Podczas przetwarzania twojego żądania wystąpił błąd{{showerror?`: ${error}`:''}}</v-alert>
        <v-list
              three-line
              subheader
              v-show="loaded"
            >
              <v-list-item >
                <v-list-item-content>
                  <v-list-item-title>Link który próbujesz otworzyć</v-list-item-title>
                  <v-list-item-subtitle>{{link}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>Pamiętaj aby nie otwierać podejrzanych linków</v-list-item-title>
                  <v-list-item-subtitle>Takie linki mogę próbować wyłudzić dane dostępowe albo zrobić inne niefajne rzeczy z twoją intenetową tożsamością lub twoim komputerem</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-divider></v-divider>
          <v-spacer></v-spacer>
          <v-card-actions class="d-flex justify-end ">
          <v-btn
            color="red darken-1"
            text
            @click="islink = false"
          >
            Odrzuć
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            id="openlink"
            @click="openlink(link)"
            :disabled="!loaded"
          >
            Przejdź do linku
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
export default {
  name: 'OpenLink',

  data: () => ({
    islink: false,
    loaded: false,
    link: 'about:blank',
    error: 'something went wrong',
    showerror: false,
    isError: false
  }),
  methods: {
    onload: (app) => {
      let localislink = false
      const parsed = document.location.pathname.split('/', 3)
      if (parsed[1] === 'link' && !parsed[2].includes('/')) {
        localislink = true
      }
      app.islink = localislink
    },
    openlink: (link) => {
      window.location = link
    }
  },
  mounted: function () {
    this.onload(this)
    if (this.islink) {
      fetch(document.location.origin + '/api/', {
        method: 'POST',
        body: new URLSearchParams({
          operation: 2,
          data: document.location.pathname.split('/', 3)[2]
        }),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(async (response) => {
        const json = await response.json()
        if (response.status === 200) {
          this.link = json.link
          this.loaded = true
        } else {
          this.isError = true
          const error = json.error
          const inform = json.inform
          this.error = error
          this.showerror = inform
        }
      })
    }
  }
}
</script>
