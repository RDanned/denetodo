<template>
  <v-text-field
      v-model="text"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="No more tasks, please!"
      append-icon="mdi-plus"
      hide-details
      clearable
  ></v-text-field>
</template>
<script>
import {actionTypes as todoActions} from '@/store/modules/todo'

export default {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    addTask() {
      this.$store.dispatch(todoActions.addTask, this.text)
      this.text = ''
    }
  }
}
</script>