<template>
  <div class='container'>
    <label for='inputEquation'>Please insert the array of equations</label>
    <b-input class='mb-3' id='inputEquation' type='text' v-model="equationStr" v-on:input='checkInputEmpty' />
    <b-button class='mb-3' type='button' v-on:click='sendRequest'>Click</b-button>
    <div>
      <label>{{respStr2}}</label>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "equation",
  components: {
  },
  data: function() {
    return {
      equationStr: '',
      respStr2: ''
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
        if (!res.data) this.respStr2 = 'There is no solution for these eqautions'
        else this.respStr2 = JSON.stringify(res.data)
    },
    checkInputEmpty() {
      if (this.equationStr.length === 0) this.respStr2 = ''
    }
  },
  mounted: function() {
    if (localStorage.getItem('equationStr')) this.equationStr = JSON.parse(localStorage.getItem('equationStr'));
    if (localStorage.getItem('respStr2')) this.respStr2 = JSON.parse(localStorage.getItem('respStr2'));
  },
  watch: {
    equationStr: {
      handler() {
        localStorage.setItem('equationStr', JSON.stringify(this.equationStr));
      },
      deep: true,
    },
    respStr2: {
      handler() {
        localStorage.setItem('respStr2', JSON.stringify(this.respStr2));
      },
      deep: true,
    },
  }
}
</script>