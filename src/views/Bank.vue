<template>
  <div class="home">
    <button v-on:click="createAccount()">Create Account</button>
    <br>
    <button v-on:click="deleteAccount()">Delete Account</button>
    <br>
    <input v-model="owner" placeholder="enter your full name"/>
    <br>
    <input v-model="iban" placeholder="enter your IBAN"/>
    <br>
    <button v-on:click="getBalance()">Get Balance</button>
    <br>
    <input v-model="amount" placeholder="enter amount"/>
    <br>
    <button v-on:click="depositMoney()">Deposit</button>
    <button v-on:click="withdrawMoney()">Withdraw</button>
    <br>
    <input v-model="ibanTo" placeholder="enter IBAN To number"/>
    <br>
    <button v-on:click="transferMoney()">Transfer</button>
    <br>
    {{ answerInfo }}
    <table border="0.5">
      <tr v-for="email in emails">
        <td>{{ email }}</td>
      </tr>
    </table>
  </div>
</template>
<script>


export default {
  data: function () {
    return {
      'email': '',
      'emails': [],
      'answerInfo': '',
      'owner': '',
      'iban': '',
      'amount': '',
      'ibanTo': ''
    }
  },
  methods: {
    'createAccount': function () {
      this.$http.post('http://localhost:8080/bankAccount/createAccount/', {
        iban: this.iban,
        owner: this.owner,
        balance: 0.0,
        accountStatus: true
      })
          .then(response => {
            console.log(response);
            this.answerInfo = "New account created!" + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    },
    'deleteAccount': function () {
      this.$http.get('http://localhost:8080/bankAccount/deleteAccount/' + this.iban)
          .then(response => {
            console.log(response);
            this.answerInfo = "Account deleted!" + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    },
    'getBalance': function () {
      this.$http.get('http://localhost:8080/bankAccount/getBalance/' + this.iban)
          .then(response => {
            console.log(response);
            this.answerInfo = "Account balance is EUR " + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })

    },
    'depositMoney': function () {
      this.$http.get('http://localhost:8080/bankAccount/depositMoney/' + this.iban + '/' + this.amount)
          .then(response => {
            console.log(response);
            this.answerInfo = "Account balance after deposit is EUR " + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    },
    'withdrawMoney': function () {
      this.$http.get('http://localhost:8080/bankAccount/withdrawMoney/' + this.iban + '/' + this.amount)
          .then(response => {
            console.log(response);
            this.answerInfo = "Account balance after withdraw is EUR " + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    },
    'transferMoney': function () {
      this.$http.get('http://localhost:8080/bankAccount/transferMoney/' + this.iban + '/' + this.amount + '/' + this.ibanTo)
          .then(response => {
            console.log(response);
            this.answerInfo = "Transfer done!" + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    }
  }
}
</script>