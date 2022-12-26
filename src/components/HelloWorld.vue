<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-icon :size="200">{{icons.mdiShieldLinkVariant}}</v-icon>
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Witaj w shortened.
        </h1>

        <p class="subheading font-weight-regular">
          Bezpiecznym i co najważniejsze <b>BEZPIECZNYM</b> skraczacu linków.<br>Używanie naszego skraczaca jest dziecinnie proste<br>Wystarczy kliknąć w powyższy przycisk oraz wkleić link który chcesz skrócić.
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
        <h3>pamiętaj że każdy link który wrzucisz jest przeglądany przez bardzo dokładnego i trzymającego sie zasad administratora.(zwią go wiedźadmin)</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mdiShieldLinkVariant } from '@mdi/js'
export default {
  name: 'HelloWorld',

  data: () => ({
    icons: {
      mdiShieldLinkVariant
    }
  })
}
</script>
