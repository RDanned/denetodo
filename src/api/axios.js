import axios from 'axios'
// eslint-disable-next-line
import {getItem, clearStorage} from '@/helpers/persistanceStorage'
import router from '@/router'
import host from '@/../config/host'

let instance = axios.create({
    baseURL: host,
    withCredentials: false,
    headers: {
        'X-TenantID': 'ruslanjuno',
        // 'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        // 'Access-Control-Max-Age': 86400,
/*        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'*/
    }
})

instance.interceptors.request.use((config) => {
    const token = getItem('token')
    const authorizisationToken = token ? token : ''
    if(authorizisationToken){
        config.headers['Authorization'] = authorizisationToken
    }
    config.headers['X-TenantID'] = 'ruslanjuno'
    return config
})

instance.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if (401 === error.response.status) {
            router.push({name: 'login'})
            clearStorage()
        } else {
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default instance
