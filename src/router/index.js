import Vue from 'vue'
import VueRouter from 'vue-router'
import {getItem} from '@/helpers/persistanceStorage'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Settings from '@/views/Settings'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {needAuth: true},
    },
    {
        path: '/login/',
        name: 'login',
        component: Login,
    },
    {
        path: '/settings/',
        name: 'settings',
        component: Settings,
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
        if (!getItem('token')) {
            next({
                path: '/login/',
                query: {redirect: to.fullPath},
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
