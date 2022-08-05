import {actionTypes as todoActions} from '@/store/modules/todo'

export default {
    computed: {
        showNotification: {
            get () { return this.$store.state.todo.showNotification},
            set (value) { this.$store.dispatch(todoActions.setShowNotification, value) }
        },
        notificationText: {
            get () { return this.$store.state.todo.notificationText},
            set (value) { this.$store.dispatch(todoActions.setNotificationText, value) }
        },
    }
}