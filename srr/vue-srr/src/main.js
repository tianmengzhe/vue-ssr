import Vue from 'vue'
import App from './App'
import { createRouter } from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })

export function createApp() {
  const app = new Vue({
    router: createRouter(),
    render: h => h(App)
  })
  return {app}
}

