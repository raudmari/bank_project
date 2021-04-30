<template>
  <div class="home">
    <h2>Register e-mail</h2>
    <input v-model="email" placeholder="enter your email"/>
    <br>
    <button v-on:click="register()">Submit</button>
    <table align="center" border="0.5">
      <br>
      <tr v-for="email in emails">
        <td>{{email}}</td>
      </tr>
    </table>
  </div>
</template>

<script>


export default {
  data: function () {
    return {
      'email': '',
      'emails':[]
    }
  },
  methods: {
    'register': function () {
      this.emails.push(this.email);
    }
  }
}
</script>
