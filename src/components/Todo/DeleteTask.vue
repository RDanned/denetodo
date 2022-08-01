<template>
  <v-btn
    color="secondary"
    fab
    x-small
    @click="deleteTask"
  >
    <v-icon>mdi-delete</v-icon>
  </v-btn>
</template>
<script>
import {actionTypes as todoActions} from '@/store/modules/todo'

export default {
  props: {
    id: {
      required: true
    }
  },
  computed: {
    showNotification: {
      get () { return this.$store.state.todo.showNotification},
      set (value) { this.$store.dispatch(todoActions.setShowNotification, {showNotification: value}) }
    },
    notificationText: {
      get () { return this.$store.state.todo.notificationText},
      set (value) { this.$store.dispatch(todoActions.setNotificationText, {notificationText: value}) }
    },
  },
  methods: {
    deleteTask(){
      this.$store.dispatch(todoActions.deleteTask, {id: this.id}).then(() => {
        this.notificationText = 'Task is deleted'
        this.showNotification = true
      })
    }
  }
}
</script>