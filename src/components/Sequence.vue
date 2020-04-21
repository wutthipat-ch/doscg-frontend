<template>
  <div class='container'>
    <label for='inputSeq'>Please insert the sequence, comma delimeter</label>
    <b-input class='mb-3' id='inputSeq' type='text' v-model="sequenceStr" v-on:input='checkInputEmpty' />
    <b-button class='mb-3' type='button' v-on:click='sendRequest'>Click</b-button>
    <div>
      <label>{{respStr1}}</label>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "sequence",
  data: function() {
    return {
      sequenceStr: '',
      respStr1: ''
    }
  },
  methods: {
    async sendRequest() {
        this.respStr1 = ''
        const seq = this.sequenceStr
        const res = await axios.post('http://localhost:3000/api/sequences', { seq })
          .catch(() => null)
        if (!res) {
          this.respStr1 = 'The request body format is invalid, or connection error'
          return
        }
        if (!res.data) this.respStr1 = 'There is no solution for this sequence'
        else this.respStr1 = JSON.stringify(res.data)
    },
    checkInputEmpty() {
      if (this.sequenceStr.length === 0) this.respStr1 = ''
    }
  },
  mounted: function() {
    if (localStorage.getItem('sequenceStr')) this.sequenceStr = JSON.parse(localStorage.getItem('sequenceStr'));
    if (localStorage.getItem('respStr1')) this.respStr1 = JSON.parse(localStorage.getItem('respStr1'));
  },
  watch: {
    sequenceStr: {
      handler() {
        localStorage.setItem('sequenceStr', JSON.stringify(this.sequenceStr));
      },
      deep: true,
    },
    respStr1: {
      handler() {
        localStorage.setItem('respStr1', JSON.stringify(this.respStr1));
      },
      deep: true,
    },
  }
}
</script>