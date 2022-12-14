import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import todo from '@/store/modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        todo
    },
})
