<template>
  <div class="home">
    <input v-model="email" placeholder="enter your e-mail"/>
    <button v-on:click="register()">Register</button>

  </div>
</template>

<script>


export default {
  data: function () {
    return {
      'email': ''
    }
  },
  methods: {
    register() {
      alert(this.email);
    }
  }
}
</script>
