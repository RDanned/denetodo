<template>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <v-toolbar>
        <v-toolbar-title>Login</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
              prepend-icon="mdi-account"
              name="login"
              label="Login"
              type="text"
              v-model="email"
          ></v-text-field>
          <v-text-field
              id="password"
              prepend-icon="mdi-lock"
              name="password"
              label="Password"
              type="password"
              v-model="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="login">Login</v-btn>
      </v-card-actions>
    </v-flex>
  </v-layout>
</template>
<script>
import {mapState} from 'vuex'
import {actionTypes as authActions} from '@/store/modules/auth'

export default {
  name: 'LoginPage',
  data() {
    return {
      email: 'ruslanenwork@gmail.com',
      password: 'myjunoone2014',
    }
  },
  computed: {
    ...mapState({
      isFailed: (state) => state.auth.isFailed,
    }),
  },
  methods: {
    login: function () {
      this.$store
        .dispatch(authActions.login, {
          email: this.email,
          password: this.password,
        })
        .then(() => this.$router.push({name: 'home'}))
    },
  },
}
</script>