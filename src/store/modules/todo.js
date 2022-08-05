import todoApi from '@/api/todo'

const state = {
    list: [],
    showNotification: false,
    notificationText: '',
    editTask: null
}

export const mutationTypes = {
    setTodoList: '[todo] Set todos list',
    addTask: '[todo] Add task',
    deleteTask: '[todo] Delete todo task',
    setShowNotification: '[todo] Set show notification',
    setNotificationText: '[todo] Set notification text',
    setEditTask: '[todo] Set edit task'
}

export const actionTypes = {
    getTodoList: '[todo] Get todos list',
    addTask: '[todo] Add todo task',
    deleteTask: '[todo] Delete todo task',
    updateTask: '[todo] Update todo task',
    setShowNotification: '[todo] Set show notification',
    setNotificationText: '[todo] Set notification text',
    setEditTask: '[todo] Start edit task'
}

const mutations = {
    [mutationTypes.setTodoList](state, payload) {
        state.list = payload.list
    },
    [mutationTypes.addTask](state, payload) {
        state.list = [...state.list, payload]
    },
    [mutationTypes.deleteTask](state, payload) {
        state.list = state.list.filter((item) => item.id !== payload.id)
    },
    [mutationTypes.setShowNotification](state, payload){
        state.showNotification = payload
    },
    [mutationTypes.setNotificationText](state, payload){
        state.notificationText = payload
    },
    [mutationTypes.setEditTask](state, payload) {
        state.editTask = payload.editTask
    },

}

const actions = {
    [actionTypes.getTodoList](context){
      return new Promise((resolve) => {
          todoApi.getTasks().then(response => {
              context.commit(mutationTypes.setTodoList, {list: response.data})
              resolve()
          })
      })
    },
    [actionTypes.addTask](context, {text, dueDate}) {
        let completed = false
        return new Promise((resolve) => {
            todoApi.addTask({text, completed, dueDate}).then(() => {
                context.commit(mutationTypes.addTask, {text, dueDate, completed})
                resolve()
            })
        })
    },
    [actionTypes.deleteTask](context, {id}) {
        return new Promise((resolve) => {
            todoApi.deleteTask(id).then(() => {
                context.commit(mutationTypes.deleteTask, {id})
                resolve()
            })
        })
    },
    [actionTypes.setShowNotification](context, showNotification){
        return new Promise(resolve => {
            context.commit(mutationTypes.setShowNotification, showNotification)
            resolve()
        })
    },
    [actionTypes.setNotificationText](context, notificationText){
        context.commit(mutationTypes.setNotificationText, notificationText)
        return new Promise(resolve => {
            context.commit(mutationTypes.setNotificationText, notificationText)
            resolve()
        })
    },
    [actionTypes.setEditTask](context, {editTask}){
        return new Promise(resolve => {
            context.commit(mutationTypes.setEditTask, {editTask})
            resolve()
        })
    },
    [actionTypes.updateTask](context, {task}){
        return todoApi.updateTask(task)
                .then(() => {
                    context.state.list = context.state.list.map(item => {
                        if(item.id === task.id) item = task
                        return item
                    })

                    context.commit(mutationTypes.setTodoList, {list: context.state.list})
                })
    }
}

export default {
    state,
    actions,
    mutations,
}
