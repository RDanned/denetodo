import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/HomePage'
import LoginPage from '@/views/LoginPage'
import SettingsPage from '@/views/SettingsPage'
import {isLoggedIn} from '@/helpers/auth'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
        meta: {needAuth: true},
    },
    {
        path: '/login/',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/settings/',
        name: 'settings',
        component: SettingsPage,
        meta: {needAuth: true},
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {

    //check if user login
    if (to.matched.some((record) => record.meta.needAuth)) {
        if (!isLoggedIn()) {
            /*next({
                path: '/login/',
                query: {redirect: to.fullPath},
            })*/
            next()
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
