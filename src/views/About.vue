<template>
  <div class="home">
    <h2>Minimum</h2>
    <input v-model.number = "minA">
    <input v-model.number = "minB">
    <button v-on:click="min()">Get Minimum</button>
    {{minAnswer}}
    <h2>Maximum</h2>
    <input v-model.number = "maxA">
    <input v-model.number = "maxB">
    <button v-on:click="max()">Get Maximum</button>
    {{maxAnswer}}
    <h2>Absolute</h2>
    <input v-model.number = "absNum">
    <button v-on:click="abs()">Get Absolute</button>
    {{absAnswer}}
    <h2>isEven</h2>
    <input v-model.number = "num">
    <button v-on:click="isEven()">Is Even</button>
    {{isEvenAnswer}}
    <h2>Minimum of 3 numbers</h2>
    <input v-model.number = "numA">
    <input v-model.number = "numB">
    <input v-model.number = "numC">
    <button v-on:click="min3()">Get Min3</button>
    {{min3Answer}}
    <h2>Maximum of 3 numbers</h2>
    <input v-model.number = "num1">
    <input v-model.number = "num2">
    <input v-model.number = "num3">
    <button v-on:click="max3()">Get Max3</button>
    {{max3Answer}}
    <h2>Multiply Table</h2>
    <input v-model.number = "x">
    <input v-model.number = "y">
    <button v-on:click="multiTable()">Get Multiply Table</button>
    <table border="1">
      <tr v-for="row in table">
        <td v-for="column in row">{{column}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
function min() {
  if(this.minA < this.minB) {
    this.minAnswer = this.minA;
  } else {
    this.minAnswer = this.minB;
  }
}
function max() {
  if(this.maxA > this.maxB) {
    this.maxAnswer = this.maxA;
  } else {
    this.maxAnswer = this.maxB;
  }
}
function abs() {
  if(this.absNum < 0){
    this.absAnswer = this.absNum * -1;
  } else {
    this.absAnswer = this.absNum;
  }
}
function isEven() {
  if(this.num %2 == 0){
    this.isEvenAnswer = true;
  } else {
    this.isEvenAnswer = false;
  }
}
function min3() {
  if(this.numA < this.numB && this.numA < this.numC){
    this.min3Answer = this.numA;
  } else if (this.numB < this.numA && this.numB < this.numC) {
    this.min3Answer = this.numB;
  } else {
    this.min3Answer = this.numC;
  }
}
function max3() {
  if(this.num1 > this.num2 && this.num1 > this.num3){
    this.max3Answer = this.num1;
  } else if (this.num2 > this.num1 && this.num2 > this.num3) {
    this.max3Answer = this.num2;
  } else {
    this.max3Answer = this.num3;
  }

}
export default {
  data: function () {
    return {
      'minA': 0,
      'minB': 0,
      'minAnswer': '',
      'maxA': 0,
      'maxB': 0,
      'maxAnswer': '',
      'absNum': 0,
      'absAnswer': '',
      'num': 0,
      'isEvenAnswer': '',
      'numA': 0,
      'numB': 0,
      'numC': 0,
      'min3Answer': '',
      'num1': 0,
      'num2': 0,
      'num3': 0,
      'max3Answer': '',
      'x': 0,
      'y': 0,
      'table': [[]]
    }
  },
  methods: {
    'min': min,
    'max': max,
    'abs': abs,
    'isEven': isEven,
    'min3': min3,
    'max3': max3,
    'multiTable': function multiTable() {
      for (let i = 1; i <= this.x; i++) {
        this.table [i - 1] = [];
        for (let j = 1; j <= this.y; j++) {
          this.table [i - 1][j - 1] = i * j;
        }
      }
      this.table.splice();
    }
  }
}

</script>
