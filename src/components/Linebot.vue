<template>
  <div class='container'>
    <label for='inputMessage'>Please insert message to send to line bot</label>
    <b-input class='mb-3' id='inputMessage' type='text' v-model="message" v-on:input='checkInputEmpty' />
    <b-button class='mb-3' type='button' v-on:click='sendRequest'>Click</b-button>
    <div>
      <label>{{respStr4}}</label>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "linebot",
  data: function() {
    return {
      message: '',
      respStr4: ''
    }
  },
  methods: {
    async sendRequest() {
        const message = this.message
        const res = await axios.post('http://localhost:3000/linebot/messages', { message })
        if (res.status !== 200) this.respStr4 = 'Something went wrong, cannot send message to line bot'
        else this.respStr4 = 'Send message successfully'
    },
    checkInputEmpty() {
      if (this.message.length === 0) this.respStr4 = ''
    }
  },
  mounted: function() {
    if (localStorage.getItem('message')) this.message = JSON.parse(localStorage.getItem('message'));
    if (localStorage.getItem('respStr4')) this.respStr4 = JSON.parse(localStorage.getItem('respStr4'));
  },
  watch: {
    message: {
      handler() {
        localStorage.setItem('message', JSON.stringify(this.message));
      },
      deep: true,
    },
    respStr4: {
      handler() {
        localStorage.setItem('respStr4', JSON.stringify(this.respStr4));
      },
      deep: true,
    },
  }
}
</script>