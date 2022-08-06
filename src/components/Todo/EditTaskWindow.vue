<template>
  <div class="text-center" v-if="form !== null && Object.keys(form).length > 0">
    <v-dialog
        v-model="dialog"
        width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{$t('todo.edit_task_title')}}
        </v-card-title>

        <v-card-text>
          <v-form ref="Form" v-model="valid">
            <v-row>
              <v-col cols="8">
                <v-text-field
                    v-model="form.text"
                    class="pa-3"
                    :label="$t('todo.task_text')"
                    :rules="rules"
                    :counter="maxLength"
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="4">
                <due-datepicker v-model="form.dueDate"/>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="save"
          >
            {{$t('todo.form.save_btn')}}
          </v-btn>
          <v-btn
              color="primary"
              text
              @click="cancel"
          >
            {{$t('todo.form.cancel_btn')}}
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
    valid: false,
    form: null,
    dialog: false,
    maxLength: 255,
    rules: [
      v => !!v || this.$t('todo.form.field_required', {field_name: this.$t('todo.task_text')}),
      v => v.length <= 255 || this.$t('todo.form.field_length', {field_name: this.$t('todo.task_text'), field_length: 255}),
    ],
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
      this.$refs.Form.validate()
      if(this.valid)
      this.$store.dispatch(todoActions.updateTask, {task: this.form})
          .then(() => {
            this.dialog = false
            this.notificationText = this.$t('todo.task_updated_mess')
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