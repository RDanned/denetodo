<template>
  <div class="text-center" v-if="form !== null && Object.keys(form).length > 0">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Edit task
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="8">
              <v-text-field
                  v-model="form.text"
                  class="pa-3"
                  outlined
                  label="Due date"
                  hide-details
                  clearable
              ></v-text-field>
            </v-col>
            <v-col cols="4">
              <due-datepicker v-model="form.dueDate"/>
            </v-col>
          </v-row>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="save"
          >
            Save
          </v-btn>
          <v-btn
              color="primary"
              text
              @click="cancel"
          >
            Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import {actionTypes as todoActions} from '@/store/modules/todo'
import notification from '@/mixins/notification'
import DueDatepicker from '@/components/Todo/DueDatepicker'

export default {
  components: {
    DueDatepicker
  },
  mixins: [notification],
  data: () => ({
    form: null,
    dialog: false,
  }),
  computed: {
    editTask: {
      get () { return this.$store.state.todo.editTask},
      set (value) { this.$store.dispatch(todoActions.setEditTask, {editTask: value}) }
    }
  },
  methods: {
    cancel(){
      this.editTask = null
    },
    save(){
      this.$store.dispatch(todoActions.updateTask, {task: this.form})
          .then(() => {
            this.dialog = false
            this.notificationText = 'Task is updated'
            this.showNotification = true
          })
    }
  },
  watch: {
    editTask(val){
      if(val !== null){
        this.dialog = true
        this.form = {...val}
      } else {
        this.dialog = false
        this.form = null
      }
    }
  }
}
</script>