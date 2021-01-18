const Vue = require('vue')
const express = require('express')
const path = require('path')
const server = express()

// 创建服务端的渲染器
const renderer = require('vue-server-renderer').createRenderer()
// 服务端渲染build 
const createApp = require('./dist/build.server')['default']
// 客户端build
const clientBuildFileUrl = '/build.client.js'

// 设置静态目录
server.use(express.static(path.join(__dirname,'dist')))

server.get('/api/info', (req, res)=>{
    res.send(JSON.stringify([
        {name:"sre"},
        {name:"sre1"},
        {name:"sre2"},
        {name:"sre3"}
    ]))
})

const app = new Vue({
    template: '<div>hello</div>'
})
server.get('*', (req, res) => {
    const context = { url: req.url }
    createApp(context).then(app=>{
        renderer.renderToString(app, (err, html) => {
            if (err) return res.state(500).end('运行错误')
            res.send(`
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width,initial-scale=1.0">
                    <title>vue-ssr</title>
                    
                </head>
                <body>
                    ${html}
                    <script src="${clientBuildFileUrl}"></script>
                </body>
                </html>
            `)
        })
    })
})


server.listen(8881, () => {
    console.log('http://127.0.0.1:8881')
})