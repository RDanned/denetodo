<template>
  <v-list v-if="tasks.length" class="overflow-y-auto" height="350px">
    <v-list-item v-for="(task, index) in tasks" :key="index" two-line>
      <v-list-item-content>
        <v-list-item-title>{{ task.text }}</v-list-item-title>
        <v-list-item-subtitle v-if="task.dueDate">
          <v-icon>mdi-clock-time-five-outline</v-icon>
          {{task.dueDate}}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <div class="todo-item-actions-wrapper d-flex justify-space-between align-center">
          <toggle-task-completed-btn :task="task" />
          <start-edit-task-btn :task="task" />
          <delete-task-btn :id="task.id"/>
        </div>
      </v-list-item-action>
    </v-list-item>
  </v-list>
  <div v-else>
    {{$t('todo.no_tasks_title')}}
  </div>
</template>
<script>
import DeleteTaskBtn from '@/components/Todo/DeleteTaskBtn'
import EditTaskWindow from '@/components/Todo/EditTaskWindow'
import StartEditTaskBtn from '@/components/Todo/StartEditTaskBtn'
import ToggleTaskCompletedBtn from '@/components/Todo/ToggleTaskCompletedBtn'

export default {
  props: {
    tasks: {
      required: true,
      default: []
    }
  },
  components: {
    DeleteTaskBtn,
    EditTaskWindow,
    StartEditTaskBtn,
    ToggleTaskCompletedBtn
  }
}
</script>