<template>
  <div class="home">
    <h2>Create new bank user</h2>
    <input v-model="username" placeholder="enter your username"/>
    <br>
    <input v-model="password" placeholder="enter your password"/>
    <br>
    <button v-on:click="createUser()">Create User</button>
    <br>
    <h2>Login to bank</h2>
    <input v-model="loginName" placeholder="enter your username"/>
    <br>
    <input v-model="loginPassword" placeholder="enter your password"/>
    <br>
    <button v-on:click="login()">Login</button>
    <br>
    {{ answerInfo }}
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      'username': '',
      'password': '',
      'loginName': '',
      'loginPassword': '',
      'answerInfo':''
    }
  },
  methods: {
    'createUser': function () {
      this.$http.post('/api/public/createUser', {
        username: this.username,
        password: this.password
      })
          .then(response => {
            this.answerInfo = "New user created!"
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    },
    'login': function () {
      this.$http.post('/api/public/login', {
        username: this.loginName,
        password: this.loginPassword
      })
          .then(response => {
            console.log(response);
            let token = response.data;
            localStorage.setItem('user-token', token)
            this.$http.defaults.headers.common['Authorization'] = "Bearer " + token
            this.answerInfo = "Login success!"
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    }
  }
}
</script>
