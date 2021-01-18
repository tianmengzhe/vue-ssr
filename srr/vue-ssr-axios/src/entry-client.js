// 客户端入口

import { createApp } from './main'

const { app } = createApp()
const router = app.$router

// 同步服务端信息 用服务端的state 替换 客户端的state
if(window.__INTIAL_STATE__){ 
    app.$store.replaceState(window.__INTIAL_STATE__)
}

window.onload = function(){
    app.$mount('#app',true)
}