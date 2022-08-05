<template>
  <v-checkbox
      v-if="form"
      v-model="form.completed"
      @change="change"
      color="primary"
  ></v-checkbox>
</template>
<script>
import {actionTypes as todoActions} from '@/store/modules/todo'
import notification from '@/mixins/notification'

export default {
  props: {
    task: {
      required: true
    }
  },
  mixins: [notification],
  data(){
    return {
      form: null
    }
  },
  mounted() {
    this.form = this.task
  },
  methods: {
    change(){
      this.$store.dispatch(todoActions.updateTask, {task: this.form})
          .then(() => {
            this.notificationText = 'Task is updated'
            this.showNotification = true
          })
    }
  },}
</script>