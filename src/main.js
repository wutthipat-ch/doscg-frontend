import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Sequence from './components/Sequence'
import Equation from './components/Equation'
import Direction from './components/Direction'
import Linebot from './components/Linebot'
import Resume from './components/Resume'


Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/sequence', component: Sequence },
  { path: '/equation', component: Equation },
  { path: '/direction', component: Direction },
  { path: '/linebot', component: Linebot },
  { path: '/resume', component: Resume },
]

const router = new VueRouter({ routes })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
