import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  mounted(){
    document.dispatchEvent(new Event('render-event'))
  },
  render: function (h) { return h(App) }
}).$mount('#app')
