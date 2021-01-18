const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
    configureWebpack:{
        plugins:[
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'), // 静态资源目录
                routes: [ '/', '/about' ], // 操作那些路由页面 home.vue about.vue
                // 这个配置很重要， 如果没有这个配置，就不会进行预编译
                renderer: new Renderer({
                  // Optional - The name of the property to add to the window object with the contents of `inject`.
                  // injectProperty: '__PRERENDER_INJECTED',
                  // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
                  inject: { // 注入信息 
                    foo: 'bar'
                  },
                  headless: false, // 是否插入 headless
                  // 在项目的入口(main.js)中使用 document.dispatchEvent(new Event('render-event'))
                  renderAfterDocumentEvent: 'render-event', 
                })
              }),
        ]
    }
}