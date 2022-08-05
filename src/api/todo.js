import axios from '@/api/axios'


//const getTasks = () => axios.get('todolist')
const getTasks = () => new Promise((resolve) => resolve({
    data: [
        {
            "id": 1,
            "text": "todo",
            "userId": {
                "id": 1,
                "firstname": "firstname",
                "lastname": "lastname",
                "email": "test@juno.one",
                "avatar": "1",
                "deleted": false
            },
            "completer": false,
            "updated_at": "2022-03-28 08:27:14",
            "created_at": "2022-03-28 08:27:14",
            "dueDate": "2022-03-28 08:27:14"
        },
        {
            "id": 2,
            "text": "todo 2",
            "userId": {
                "id": 1,
                "firstname": "firstname",
                "lastname": "lastname",
                "email": "test@juno.one",
                "avatar": "1",
                "deleted": false
            },
            "completer": false,
            "updated_at": "2022-03-28 08:27:14",
            "created_at": "2022-03-28 08:27:14",
            "dueDate": "2022-03-28 08:27:14"
        }
    ]
}))

/*const addTask = (data) => {
    if(!data.dueDate.length) data.dueDate = 'None'
    return axios.post(`todolist`, data)
}*/
const addTask = () => new Promise((resolve) => resolve())

//const deleteTask = (id) => axios.delete(`todolist/${id}`)
const deleteTask = () => new Promise((resolve) => resolve())

//const updateTask = (task) => axios.put(`todolist/${task.id}`, task)
const updateTask = (task) => new Promise((resolve) => resolve({
    data: task
}))

export default {
    addTask,
    deleteTask,
    getTasks,
    updateTask
}