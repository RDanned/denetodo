<template>
  <v-app>
<!--    <v-navigation-drawer app v-if="isLoggedIn">-->
    <v-navigation-drawer app>
      <app-menu />
<!--      <v-list
          dense
          nav
      >
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Home
            </v-list-item-title>
            <v-list-item-subtitle>
              Home page
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Settings
            </v-list-item-title>
            <v-list-item-subtitle>
              Settings page
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>-->
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid fill-height>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import AppMenu from '@/components/AppMenu'
import {isLoggedIn} from '@/helpers/auth'

export default {
  name: 'App',
  components: {
    AppMenu
  },
  computed: {
    isLoggedIn: () => isLoggedIn()
  },
  data: () => ({

  }),
};
</script>
