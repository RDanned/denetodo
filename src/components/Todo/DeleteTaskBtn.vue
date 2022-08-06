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
import notification from '@/mixins/notification'

export default {
  props: {
    id: {
      required: true
    }
  },
  mixins: [notification],
  methods: {
    deleteTask(){
      this.$store.dispatch(todoActions.deleteTask, {id: this.id}).then(() => {
        this.notificationText = this.$t('todo.task_deleted_mess')
        this.showNotification = true
      })
    }
  }
}
</script>