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
                <v-tab>
                  <v-icon>mdi-delete</v-icon>
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
                <v-progress-circular
                    v-if="!tasks"
                    :size="50"
                    color="primary"
                    indeterminate
                ></v-progress-circular>
                <v-list v-if="tasks" class="overflow-y-auto" height="350px">
                  <v-list-item v-for="(task, index) in tasks" :key="index" two-line>
                    <v-list-item-content>
                      <v-list-item-title>{{ task.text }}</v-list-item-title>
                      <v-list-item-subtitle v-if="task.dueDate">
                        <v-icon>{{mdiClockTimeFiveOutline}}</v-icon>
                        {{task.dueDate}}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <div class="todo-item-actions-wrapper d-flex justify-space-between align-center">
                        <v-checkbox
                            :input-value="task.completed"
                            color="primary"
                        ></v-checkbox>
                        <delete-task :id="task.id"/>
                      </div>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                completed
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                all
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                deleted
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-col>
      </v-row>
    </v-col>

<!--    <v-col md="6">
      <v-row>
        <v-col cols="12">
          <v-toolbar color="primary" elevation="3" dark rounded="0">
            <v-toolbar-title>Tasks</v-toolbar-title>
          </v-toolbar>
        </v-col>
        <v-col cols="12">
          <add-task />
        </v-col>
        <v-col cols="12">
          <v-list class="overflow-y-auto" height="350px">
            <v-list-item v-for="(task, index) in tasks" :key="index" two-line>
              <v-list-item-content>
                <v-list-item-title>{{ task.text }}</v-list-item-title>
                <v-list-item-subtitle v-if="task.dueDate">
                  <v-icon>{{mdiClockTimeFiveOutline}}</v-icon>
                  {{task.dueDate}}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <div class="todo-item-actions-wrapper d-flex justify-space-between align-center">
                  <v-checkbox
                    :input-value="task.completed"
                    color="primary"
                  ></v-checkbox>
                  <delete-task :id="task.id"/>
                </div>
              </v-list-item-action>
            </v-list-item>
          </v-list>
          <v-snackbar
              v-model="showNotification"
              :timeout="notificationTimeout"
          >
            {{notificationText}}
          </v-snackbar>
        </v-col>
      </v-row>
    </v-col>-->
    <v-snackbar
        v-model="showNotification"
        :timeout="notificationTimeout"
    >
      {{notificationText}}
    </v-snackbar>
  </v-row>
</template>
<script>
import '@/assets/todolist.css'
import {actionTypes as todoActions} from '@/store/modules/todo'
import {mapState} from 'vuex'
import { mdiClockTimeFiveOutline } from '@mdi/js';
import AddTask from '@/components/Todo/AddTask'
import DeleteTask from '@/components/Todo/DeleteTask'

export default {
  name: 'HomePage',
  components: {
    AddTask,
    DeleteTask
  },
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
      tasks: state => state.todo.list,
    }),
    showNotification: {
      get () { return this.$store.state.todo.showNotification},
      set (value) { this.$store.dispatch(todoActions.setShowNotification, {showNotification: value}) }
    },
    notificationText: {
      get () { return this.$store.state.todo.notificationText},
      set (value) { this.$store.dispatch(todoActions.setNotificationText, {notificationText: value}) }
    },
  }
}
</script>