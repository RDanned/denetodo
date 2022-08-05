<template>
  <v-menu
      ref="menu1"
      v-model="menu1"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      max-width="350px"
      min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
          v-model="date"
          label="Date"
          persistent-hint
          prepend-icon="mdi-calendar"
          v-bind="attrs"
          @blur="date = parseDate(dateFormatted)"
          v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
        v-model="date"
        no-title
        @input="menu1 = false"
    ></v-date-picker>
  </v-menu>
</template>
<script>
import moment from 'moment'

export default {
  props: {
    value: {
      required: true
    }
  },
  data(){
    return {
      date: '',
      dateFormatted: '',
      menu1: false,
      menu2: false,
    }
  },
  watch: {
    date () {
      this.dateFormatted = this.formatDate(this.date)
      this.$emit('input', this.dateFormatted)
    },
  },

  methods: {
    formatDate (date) {
      if (!date) return null
      return moment(date).toISOString()
    },
    parseDate (date) {
      if (!date) return null
      return moment(date).toISOString()
    },
  },
}
</script>