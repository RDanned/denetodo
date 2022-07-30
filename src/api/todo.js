import axios from '@/api/axios'

const addTask = (data) => axios.post(`todolist`, data)

export default {
    addTask
}