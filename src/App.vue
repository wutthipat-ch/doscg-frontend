<template>
  <div id="app">
    <myheader />
    <div id="nav">
      <b-container class='mb-5'>
        <b-row align-h='center'>
          <b-col sm='1' align-v='center'>
            <router-link to="/">Home</router-link>
          </b-col>
          <b-col sm='1' align-v='center'>
            <router-link to="/sequence">Sequence</router-link>
          </b-col>
            <b-col sm='1' align-v='center'>
          <router-link to="/equation">Equation</router-link>
          </b-col>
          <b-col sm='1' align-v='center'>
            <router-link to="/direction">Direction</router-link>
          </b-col>
          <b-col sm='1' align-v='center'>
            <router-link to="/linebot">Linebot</router-link>
          </b-col>
          <b-col sm='1' align-v='center'>
            <router-link to="/resume">Resume</router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <router-view/>
    <myfooter />
  </div>
</template>

<script>
import header from './components/Header'
import footer from './components/Footer'
export default {
  name: 'app',
  components: {
    myheader: header,
    myfooter: footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
