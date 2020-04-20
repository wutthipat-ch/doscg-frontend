<template>
  <div>
    <label for='inputMessage'>Please insert message to send to line bot</label>
    <input id='inputMessage' type='text' v-model="message" v-on:input='checkInputEmpty'>
    <button type='button' v-on:click='sendRequest'>Click</button>
    <br/>
    <label>{{respStr}}</label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "linebot",
  data: function() {
    return {
      message: '',
      respStr: ''
    }
  },
  methods: {
    async sendRequest() {
        const message = this.message
        const res = await axios.post('http://localhost:3000/linebot/messages', { message })
        if (res.status !== 200) this.respStr = 'Something went wrong, cannot send message to line bot'
        else this.respStr = 'Send message successfully'
    },
    checkInputEmpty() {
      if (this.message.length === 0) this.respStr = ''
    }
  }
}
</script>