
import Vue from 'vue'
import App from './App'
import router from './router'


import "./assets/css/reset.css"
import "./components/index.js"
import "./filters/index.js"
import store from "./store/index.js"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI)


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
