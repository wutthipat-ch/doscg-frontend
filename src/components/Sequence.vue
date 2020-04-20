<template>
  <div>
    <label for='inputSeq'>Please insert the sequence, comma delimeter</label>
    <input id='inputSeq' type='text' v-model="sequenceStr" v-on:input='checkInputEmpty'>
    <button type='button' v-on:click='sendRequest'>Click</button>
    <br/>
    <label>{{respStr}}</label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "sequence",
  data: function() {
    return {
      sequenceStr: '',
      respStr: ''
    }
  },
  methods: {
    async sendRequest() {
        const seq = this.sequenceStr
        const res = await axios.post('http://localhost:3000/api/sequences', { seq })
        if (!res.data) this.respStr = 'There is no solution for this sequence'
        else this.respStr = JSON.stringify(res.data)
    },
    checkInputEmpty() {
      if (this.sequenceStr.length === 0) this.respStr = ''
    }
  }
}
</script>