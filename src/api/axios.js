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
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        'Access-Control-Max-Age': 86400,
/*        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*'*/
    }
})

/*axios.interceptors.request.use((config) => {
    console.log('interceptor request')
    //const token = getItem('token')
    //const authorizisationToken = token ? `Token ${token}` : ''
    /!*if(authorizisationToken){
        config.headers['Authorization'] = authorizisationToken
    }*!/
    config.headers['X-TenantID'] = 'ruslanjuno'
    /!*config.headers['Access-Control-Allow-Origin'] = '*'
    config.headers['Access-Control-Allow-Headers'] = '*'*!/
    // config.headers['Access-Control-Allow-Credentials'] = true
    /!*if(config.method === 'post' && getItem('csrftoken')){
        config.headers['X-CSRFToken'] = getItem('csrftoken')
    }*!/
    return config
})*/

instance.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        if (401 === error.response.status) {
            router.push({name: 'login'})
            clearStorage()
        } else {
            console.log('error')
            return Promise.reject(error)
        }
        return Promise.reject(error)
    }
)

export default instance
