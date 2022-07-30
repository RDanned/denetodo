import axios from '@/api/axios'

const login = (email, password) => {
    console.log('auth')
    return axios.post('login', {
        email: email,
        password: password
    }).then((response) => {
        console.log(response.headers)
        return response
    })
}

export default {
    login,
}
