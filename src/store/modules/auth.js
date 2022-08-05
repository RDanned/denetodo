import authApi from '@/api/auth'
import {clearStorage, getItem, setItem} from '@/helpers/persistanceStorage'

const state = {
    currentUser: null,
    isLoggedIn: false,
    isFailed: false,
}

export const mutationTypes = {
    loginSuccess: '[auth] Login success',
    loginFailed: '[auth] Login failed',
    setIsFailed: '[auth] setIsFailed',
    setIsLoggedIn: '[auth] setIsLoggedIn',
    logout: '[auth] Logout',
    setCurrentUser: '[auth] Set current user'
}

const mutations = {
    [mutationTypes.loginSuccess](state) {
        state.isLoggedIn = true
        state.isFailed = false
    },
    [mutationTypes.loginFailed](state) {
        state.isFailed = true
    },
    [mutationTypes.setIsFailed](state, payload) {
        state.isFailed = payload.isFailed
    },
    [mutationTypes.setIsLoggedIn](state, payload){
        state.isLoggedIn = payload
    },
    [mutationTypes.logout](state) {
        state.currentUser = null
        state.isLoggedIn = false
    },
    [mutationTypes.setCurrentUser](state, payload){
        state.currentUser = payload.user
    }
}

export const actionTypes = {
    login: '[auth] login',
    logout: '[auth] logout',
    loadCurrentUser: '[auth] Load current user'
}

const actions = {
    [actionTypes.login](context, {email, password}) {
        return new Promise((resolve) => {
            context.commit(mutationTypes.setIsFailed, {isFailed: false})
            authApi
                .login(email, password)
                .then((response) => {
                    setItem('email', email)
                    setItem('token', response.headers.authorization)
                    context.commit(mutationTypes.loginSuccess, response.user)
                    context.dispatch(actionTypes.loadCurrentUser)
                    resolve(response)
                })
                .catch(() => {
                    context.commit(mutationTypes.loginFailed)
                })
        })
    },
    [actionTypes.logout](context) {
        clearStorage()
        context.commit(mutationTypes.logout)
    },
    [actionTypes.loadCurrentUser](context){
        return new Promise((resolve) => {
            authApi.findUser(getItem('email'))
                .then(response => {
                    context.commit(mutationTypes.setCurrentUser, {user: response.data.data[0]})
                })
        })
    }
}

export default {
    state,
    mutations,
    actions,
}
