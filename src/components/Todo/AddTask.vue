<template>
  <v-form ref="Form" v-model="valid">
    <v-row>
      <v-col cols="8">
        <v-text-field
            v-model="text"
            @click:append="addTask"
            @keyup.enter="addTask"
            @blur="reset"
            :rules="rules"
            :counter="maxLength"
            class="pa-3"
            :label="$t('todo.task_text')"
            append-icon="mdi-plus"
            required
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <due-datepicker v-model="dueDate"/>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import {actionTypes as todoActions} from '@/store/modules/todo'
import DueDatepicker from '@/components/Todo/DueDatepicker'
import notification from '@/mixins/notification'

export default {
  components: {
    DueDatepicker
  },
  data() {
    return {
      valid: false,
      text: '',
      dueDate: '',
      menu: false,
      maxLength: 255,
      rules: [
        v => !!v || this.$t('todo.form.field_required', {field_name: this.$t('todo.task_text')}),
        v => v.length <= 255 || this.$t('todo.form.field_length', {field_name: this.$t('todo.task_text'), field_length: 255}),
      ],
    }
  },
  mixins: [notification],
  methods: {
    addTask() {
      this.$refs.Form.validate()
      if(this.valid)
      this.$store.dispatch(todoActions.addTask, {text: this.text, dueDate: this.dueDate}).then(() => {
        this.showNotification = true
        this.notificationText = this.$t('todo.task_created_mess')
        this.text = ''
        this.dueDate = ''
        this.$refs.Form.resetValidation()
      })
    },
    reset(){
      this.$refs.Form.resetValidation()
    }
  }
}
</script>