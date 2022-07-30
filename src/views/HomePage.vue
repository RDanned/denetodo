<template>
  <div>
    <v-card>
      <v-toolbar color="primary" elevation="3" dark rounded="0">
        <v-toolbar-title>Tasks</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <v-card>
      <v-list>
        <v-list-item v-for="(task, index) in tasks" :key="index" two-line>
          <v-list-item-content
          ><v-list-item-title>{{ task.text }}</v-list-item-title>
<!--            <v-list-item-subtitle>{{ task.note }}</v-list-item-subtitle>-->
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data(){
    return {
      tasks: [
        {
          "id": 1,
          "text": "todo",
          "userId": {
            "id": 1,
            "firstname": "firstname",
            "lastname": "lastname",
            "email": "test@juno.one",
            "avatar": "1",
            "deleted": false
          },
          "completer": false,
          "updated_at": "2022-03-28 08:27:14",
          "created_at": "2022-03-28 08:27:14",
          "dueDate": "2022-03-28 08:27:14"
        },
        {
          "id": 2,
          "text": "todo 2",
          "userId": {
            "id": 1,
            "firstname": "firstname",
            "lastname": "lastname",
            "email": "test@juno.one",
            "avatar": "1",
            "deleted": false
          },
          "completer": false,
          "updated_at": "2022-03-28 08:27:14",
          "created_at": "2022-03-28 08:27:14",
          "dueDate": "2022-03-28 08:27:14"
        }
      ]
    }
  }
}
</script>