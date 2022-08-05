<template>
  <v-btn
      color="secondary"
      fab
      x-small
      @click="startEditTask"
  >
    <v-icon>mdi-pen</v-icon>
  </v-btn>
</template>
<script>
import {actionTypes as todoActions} from '@/store/modules/todo'

export default {
  props: {
    task: {
      required: true
    }
  },
  computed: {
    editTask: {
      get () { return this.$store.state.todo.editTask},
      set (value) { this.$store.dispatch(todoActions.setEditTask, {editTask: value}) }
    },
  },
  methods: {
    startEditTask(){
      this.editTask = this.task
    }
  }
}
</script>