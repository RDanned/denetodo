import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en.js'
import cz from '@/lang/cz.js'

Vue.use(VueI18n)

const lang = new VueI18n({
    locale: 'en',
    messages: {
        en,
        cz
    },
})

export default lang