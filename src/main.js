import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloWorld'
import Sequence from './components/Sequence'
import Equation from './components/Equation'
import Linebot from './components/Linebot'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/sequence', component: Sequence },
  { path: '/equation', component: Equation },
  { path: '/linebot', component: Linebot },
]

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
