import axios from 'axios'
import {getItem, clearStorage} from '@/helpers/persistanceStorage'
import router from '@/router'
import {host, tenantId} from '@/../config/host'

let instance = axios.create({
    baseURL: host,
    withCredentials: false,
    headers: {
        'X-TenantID': tenantId,
    }
})

instance.interceptors.request.use((config) => {
    const token = getItem('token')
    const authorizisationToken = token ? token : ''
    if(authorizisationToken){
        config.headers['Authorization'] = authorizisationToken
    }
    config.headers['X-TenantID'] = tenantId
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
