<template>
  <div class="pa-2">
    <template v-if="currentUser !== null">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{fullName}}
            </v-list-item-title>
            <v-list-item-subtitle>{{currentUser.email}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    </template>
    <v-skeleton-loader
        v-if="currentUser === null"
        :loading="Boolean(currentUser)"
        v-bind="attrs"
        type="list-item-avatar, divider"
    ></v-skeleton-loader>
  </div>
</template>
<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/auth'

export default {
  data: () => ({
    fullName: '',
    attrs: {
      class: 'mb-6',
      elevation: 2,
    },
  }),
  computed: {
    ...mapState({
      currentUser: state => state.auth.currentUser
    }),
  },
  mounted(){
    if(this.currentUser !== null)
      this.fullName = `${this.currentUser.lastname} ${this.currentUser.firstname}`
    else
      this.$store.dispatch(actionTypes.loadCurrentUser)
  },
  methods: {

  },
  watch: {
    currentUser(val){
      if(this.currentUser)
        this.fullName = `${this.currentUser.lastname} ${this.currentUser.firstname}`
    }
  }
}
</script>