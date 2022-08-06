<template>
  <div>
    <language-switcher />
    <v-divider></v-divider>
    {{$t('settings_page.lorem_ipsum')}}
  </div>
</template>
<script>
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default {
  components: {LanguageSwitcher},
  name: 'SettingsPage'
}
</script>