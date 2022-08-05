<template>
  <v-row
    justify="center"
    no-gutters
  >
    <v-col md="6">
      <v-row>
        <v-col cols="12">
          <v-toolbar
            color="cyan"
            dark
            flat
          >
            <v-toolbar-title>Your Dashboard</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <template v-slot:extension>
              <v-tabs
                v-model="tab"
                align-with-title
              >
                <v-tabs-slider color="yellow"></v-tabs-slider>

                <v-tab>
                  Current tasks
                </v-tab>
                <v-tab>
                  Completed tasks
                </v-tab>
                <v-tab>
                  All tasks
                </v-tab>
              </v-tabs>
            </template>
          </v-toolbar>
        </v-col>
        <v-col cols="12">
          <add-task />
        </v-col>
        <v-col cols="12">
          <v-tabs-items v-model="tab">
            <v-tab-item>
              <v-card flat>
                <task-list :tasks="currentTasks" />
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <task-list :tasks="completedTasks" />
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <task-list :tasks="allTasks" />
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-col>
    <v-snackbar
        v-model="showNotification"
        :timeout="notificationTimeout"
    >
      {{notificationText}}
    </v-snackbar>
    <edit-task-window />
  </v-row>
</template>
<script>
import '@/assets/todolist.css'
import notification from '@/mixins/notification'
import {actionTypes as todoActions} from '@/store/modules/todo'
import {mapState} from 'vuex'
import { mdiClockTimeFiveOutline } from '@mdi/js';
import AddTask from '@/components/Todo/AddTask'
import EditTaskWindow from '@/components/Todo/EditTaskWindow'
import TaskList from '@/components/Todo/TaskList'

export default {
  name: 'HomePage',
  components: {
    AddTask,
    EditTaskWindow,
    TaskList
  },
  mixins: [notification],
  data(){
    return {
      tab: null,
      mdiClockTimeFiveOutline: mdiClockTimeFiveOutline,
      notificationTimeout: 2000,
    }
  },
  mounted() {
    this.$store.dispatch(todoActions.getTodoList)
  },
  computed: {
    ...mapState({
      allTasks: state => state.todo.list,
      currentTasks: state => state.todo.list.filter(item => !item.completed),
      completedTasks: state => state.todo.list.filter(item => item.completed)
    })
  }
}
</script>