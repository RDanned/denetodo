<template>
  <v-row>
    <v-col cols="8">
      <v-text-field
          v-model="text"
          @click:append="addTask"
          @keyup.enter="addTask"
          class="pa-3"
          outlined
          label="Due date"
          append-icon="mdi-plus"
          hide-details
          clearable
      ></v-text-field>
    </v-col>
    <v-col cols="4">
      <due-datepicker v-model="dueDate"/>
    </v-col>
  </v-row>
</template>
<script>
import {actionTypes as todoActions} from '@/store/modules/todo'
import DueDatepicker from '@/components/Todo/DueDatepicker'

export default {
  components: {
    DueDatepicker
  },
  data() {
    return {
      text: '',
      dueDate: '',
      menu: false
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
    addTask() {
      this.$store.dispatch(todoActions.addTask, {text: this.text, dueDate: this.dueDate}).then(() => {
        this.showNotification = true
        this.notificationText = 'Notification is added'
        this.text = ''
        this.dueDate = ''
      })
    }
  }
}
</script>