<template>
  <div class="home">
    <input v-model="email" placeholder="enter your e-mail"/>
    <button v-on:click="register()">Register</button>
    <table border="0.5">
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
