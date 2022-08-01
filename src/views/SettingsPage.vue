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
    {{loremIpsum[$i18n.locale]}}
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
    languageMenu: false,
    loremIpsum: {
      en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend posuere mattis. Etiam aliquam id orci aliquet mollis. Sed vitae arcu auctor, laoreet est non, placerat ligula. Fusce gravida sodales risus. Duis faucibus erat in vestibulum vestibulum. Pellentesque ac tellus in sem ullamcorper placerat id vel elit. Donec rutrum mollis turpis, lacinia pretium est interdum ac. Nulla felis diam, molestie vitae tellus nec, congue consequat odio. Nam nunc magna, dictum vitae nibh rhoncus, ullamcorper vulputate leo. Donec tincidunt risus nec felis facilisis, sed finibus mauris blandit. Pellentesque lorem erat, tincidunt nec neque quis, iaculis tincidunt leo. Vivamus convallis risus a dictum placerat. Nulla ac sem eu massa varius efficitur. ',
      cs: 'Mravrat odiby mazuj badřav ni fyni vust. Děžlyď šízo slilysiď mus vůty k mřo. Tluče tib v dlopla clávě dipivas. Mloclou s úbat zlyhlou pés z vadrž vlu. Houčláb ti flu tkůlkouj kreve dluch lkýn chlobí pamě k roťpodhli, a tiď pruhyněc plům chráně a prmlidi, a chlusk kropěň úpoč voťktyblůně rýn šrečlýřá závu sy. žlébra a frer, uvu clo pedre, clýni o velyr klyzlýplejá člatku údi ktaj s křadi timlopoz vledit, mahli lkakteťou tišbid účlýsttáz frflepimě mědi truš tiděclil viři. S přeclopěni v drudiň nilku blouč a plezlý banin o těk. Hrůhlých luhřousi dré i cruťtě vřezkyp a plsk nipym tkup zkuni. Vomehr nisléfoň. člipe žráň i stozlyzivla v clysvo tině pach? Uvy vlyňa a vakčovet a zlave. Dldih zougluré chlouklů ovy a nougryšlouď veněh. Umu grář brupi, chakřab žrak i bidist unidi váňa a šludrý digre o clobugul. '
    }
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