<template>
  <div class='container'>
    <label class='mb-3' for='directionBtn'>Click the button to get the best direction from SCG Building to Central World</label>
    <b-button id='directionBtn' class="mb-3 btn btn-primary btn-lg btn-block" type='button' v-on:click='sendRequest'>Click</b-button>
    <div>
      <label>{{respStr3}}</label>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "direction",
  data: function() {
    return {
      respStr3: ''
    }
  },
  methods: {
    async sendRequest() {
        const res = await axios.get('http://localhost:3000/api/directions')
          .catch(() => null)
        if (!res) {
          this.respStr3 = 'Connection error'
          return
        }
        if (!res.data) this.respStr3 = 'Oops! Something went wrong'
        else this.respStr3 = JSON.stringify(res.data)
    }
  },
  mounted: function() {
    if (localStorage.getItem('respStr3')) this.respStr3 = JSON.parse(localStorage.getItem('respStr3'));
  },
  watch: {
    respStr3: {
      handler() {
        localStorage.setItem('respStr3', JSON.stringify(this.respStr3));
      },
      deep: true,
    },
  }
}
</script>