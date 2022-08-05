<template>
  <div>
    <v-menu v-model="languageMenu" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="text-capitalize" v-bind="attrs" v-on="on" text>
          <v-icon left>mdi-translate</v-icon>
          {{ activeLang }}
          <v-icon small right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list dense>
        <v-list-item v-for="(lang, index) in langs" :key="index" @click="switchLang(lang)">
          <v-list-item-title>{{ lang.title }}</v-list-item-title>
        </v-list-item>
        <v-divider></v-divider>
      </v-list>
    </v-menu>
    <v-divider></v-divider>
    {{$t('settings_page.lorem_ipsum')}}
  </div>
</template>
<script>
export default {
  name: 'SettingsPage',
  data: () => ({
    langs: [
      { code: 'en', title: 'English' },
      { code: 'cs', title: 'Czech' },
    ],
    activeLang: 'English',
    dialog: false,
    languageMenu: false
  }),
  mounted() {
    this.activeLang = this.langs.find(lang => lang.code === this.$i18n.locale).title
  },
  methods: {
    switchLang (lang) {
      this.activeLang = lang.title;
      this.$root.$i18n.locale = lang.code
      this.$vuetify.lang.current = lang.code
    }
  }
}
</script>