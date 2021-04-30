<template>
  <div class="home">
    <button v-on:click="logOut()">LogOut</button>
    <h2>Banking services</h2>
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
    <button v-on:click="transferMoney()">Transfer</button>
    <br>
    <input v-model="ibanTo" placeholder="enter IBAN To number"/>
    <br>

    {{ answerInfo }}
    <h2>Accounts List</h2>
    <table align="center">
      <th>IBAN</th>
      <th>Balance</th>
      <tr v-for="account in allAccounts">
      <td align="left">{{account.iban}}</td>
      <td align="right">{{account.balance}}</td>
      </tr>
    </table>

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
      'ibanTo': '',
      allAccounts: []
    }
  },
  methods: {
    'createAccount': function () {
      this.$http.post('/api/bankAccount/createAccount/', {
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
      this.$http.get('/api/bankAccount/deleteAccount/' + this.iban)
          .then(response => {
            console.log(response);
            this.answerInfo = "Account deleted!" + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    },
    'getBalance': function () {
      this.$http.get('/api/bankAccount/getBalance/' + this.iban)
          .then(response => {
            console.log(response);
            this.answerInfo = "Account balance is EUR " + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })

    },
    'depositMoney': function () {
      this.$http.get('/api/bankAccount/depositMoney/' + this.iban + '/' + this.amount)
          .then(response => {
            console.log(response);
            this.answerInfo = "Account balance after deposit is EUR " + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    },
    'withdrawMoney': function () {
      this.$http.get('/api/bankAccount/withdrawMoney/' + this.iban + '/' + this.amount)
          .then(response => {
            console.log(response);
            this.answerInfo = "Account balance after withdraw is EUR " + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    },
    'transferMoney': function () {
      this.$http.get('/api/bankAccount/transferMoney/' + this.iban + '/' + this.amount + '/' + this.ibanTo)
          .then(response => {
            console.log(response);
            this.answerInfo = "Transfer done!" + response.data
          })
          .catch(response => {
            this.answerInfo = response.response.data.message
          })
    },
    'logOut': function() {
      this.$http.
    }
  },
  mounted() {
    this.$http.get('/api/bankAccount/getAllAccounts')
        .then(response => this.allAccounts = response.data);
  }

}
</script>