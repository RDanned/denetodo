import {getItem} from '@/helpers/persistanceStorage'

export const isLoggedIn = () => Boolean(getItem('token'))