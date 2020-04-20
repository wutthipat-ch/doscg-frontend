<template>
  <div>
    <label for='inputEquation'>Please insert the array of equations</label>
    <input id='inputEquation' type='text' v-model="equationStr" v-on:input='checkInputEmpty'>
    <button type='button' v-on:click='sendRequest'>Click</button>
    <br/>
    <label>{{respStr}}</label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "equation",
  data: function() {
    return {
      equationStr: '',
      respStr: ''
    }
  },
  methods: {
    async sendRequest() {
        let equations = JSON.parse(this.equationStr)
        equations = equations.map((row) => {
          return { x: row[0], y: row[1], z: row[2], c: row[3] }
        })
        console.log(equations);
        const res = await axios.post('http://localhost:3000/api/equations', { equations })
        if (!res.data) this.respStr = 'There is no solution for these eqautions'
        else this.respStr = JSON.stringify(res.data)
    },
    checkInputEmpty() {
      if (this.equationStr.length === 0) this.respStr = ''
    }
  }
}
</script>