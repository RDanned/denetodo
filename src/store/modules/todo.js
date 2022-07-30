import todoApi from '@/api/todo'

const state = {
    list: []
}

export const mutationTypes = {
    setTodoList: '[todo] Set todos list',
    addTask: '[todo] Add task',
}

export const actionTypes = {
    getTodoList: '[todo] Get todos list',
    addTask: '[todo] Add todo task',
    deleteTask: '[todo] Delete todo task',
    updateTask: '[todo] Update todo task',
}

const mutations = {
    [mutationTypes.setTodoList](state, payload){
      state.list = payload.list
    },
    [mutationTypes.addTask](state, payload){
        state.list = [...state.list, payload]
    },
}

const actions = {
    [actionTypes.setNeedReload](context, {needReload}){
        context.commit(mutationTypes.setNeedReload, {needReload})
    },
    [actionTypes.addTask](context, {text, dueDate}){
        let completed = false
        todoApi.addTask({text, dueDate, completed}).then(() => {
            context.commit(mutationTypes.addTask, {text, dueDate, completed})
        })
    }
}

export default {
    state,
    actions,
    mutations,
}
