<template>
  <v-list
      dense
      nav
  >
    <v-list-item-group
        v-model="activeItem"
        color="primary"
    >
      <v-list-item
        v-for="item in menuItems"
        :key="item.route.name"
        :to="{name: item.route.name}"
        exact
        link
        >
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{item.title}}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{item.subtitle}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        @click="logout"
        >
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ $t('sidebar.logout_btn') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>
<script>
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'AppMenu',
  data: () =>({
    activeItem: 0
  }),
  mounted() {
    /*this.menuItems.map((item, i) => {
      if(item.route.name === this.$route.name)
        this.activeItem = i
    })*/
  },
  computed: {
    menuItems(){
      let items = [
        {
          title: this.$t('sidebar.menu.home_item.title'),
          subtitle: this.$t('sidebar.menu.home_item.subtitle'),
          route: {
            name: 'home',
          },
        },
        {
          title: 'Settings',
          subtitle: 'Settings page',
          route: {
            name: 'settings',
          },
        },
      ]

      return items
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch(actionTypes.logout)
      this.$router.push({name: 'login'})
    },
  },
}
</script>
