import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '@/lang/en.js'
import cs from '@/lang/cs.js'

Vue.use(VueI18n)

const lang = new VueI18n({
    locale: 'en',
    messages: {
        en,
        cs
    },
})

export default lang