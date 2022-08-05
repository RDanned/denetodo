import axios from '@/api/axios'

const login = (email, password) => {
    return axios.post('login', {
        email: email,
        password: password
    }).then((response) => {
        return response
    })
}

// const findUser = (email) => {
//     return axios.get('users/junofilter', {
//         data: {
//             substring: email
//         }
//     })
// }
const findUser = () => {
    return new Promise((resolve) => {
        let response =  {
            data: {
                "data": [
                    {
                        "id": 29,
                        "firstname": "Developer",
                        "lastname": "User",
                        "phone_number": "None",
                        "description": "None",
                        "email": "test@juno.one",
                        "superadmin": true,
                        "language": "en",
                        "lastlogin": "2022-03-02T12:38:05.000+00:00",
                        "locked": false,
                        "lock_at": "None",
                        "lock_to": "None",
                        "deleted": false,
                        "deleted_at": "None",
                        "created_at": "2021-08-04T08:48:18.000+00:00",
                        "updated_at": "2022-03-02T12:38:05.000+00:00",
                        "avatar": "3",
                        "teams": [
                            {
                                "id": 4,
                                "name": "Admin",
                                "created_at": "2021-08-04T08:49:57.000+00:00",
                                "updated_at": "2021-08-04T10:20:11.000+00:00",
                                "deleted": false,
                                "deleted_at": "None",
                                "roles": [
                                    {
                                        "id": 2,
                                        "name": "admin",
                                        "deleted": true,
                                        "deleted_at": "2022-06-13T08:42:10.000+00:00",
                                        "created_at": "2021-06-27T15:22:35.000+00:00",
                                        "updated_at": "2022-06-13T08:42:10.000+00:00"
                                    }
                                ]
                            }
                        ]
                    }
                ],
                "first": true,
                "last": false,
                "totalPages": 7,
                "totalElements": 65,
                "numberOfElements": 10,
                "limit": 10,
                "pageNumber": 1,
                "sort": []
            }
        }
        setTimeout(() => resolve(response), 2500)
    })
}

export default {
    login,
    findUser
}
