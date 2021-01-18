
## 预渲染（prerender-spa-plugin）

如果只是用来改善少数营销页面的SEO。就可以使用预渲染，不需要使用 web 服务器实时动态编辑HTML， 而是使用预渲染方式，在构建时（build time）简单的生成针对路由的静态 HTML 文件。优点是预渲染更简单，并可以将前端作为一个完全静态的站点

## 服务端渲染 (SSR) (vue-server-renderer)

### 什么是服务端渲染

Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。
然而，也可以将同一个组件渲染为服务端的 HTML 字符串。将它们直接发送到服务器，最后将这些静态标记 激活 为客户端上完全可交互的应用程序。

### 安装依赖
```js
npm init -y
npm i vue express vue-server-renderer -S
```

服务端渲染的核心在于：通过vue-server-renderer插件的renderToString()方法，把Vue实例转换为字符串插入到html文件

为了弥补单页面应用Seo的不足

总结：服务端渲染可以帮助实现最佳的初始加载性能

#### 优点

1. 更好的SEO，搜索引擎爬虫工具可以直接查看完全渲染的页面
2. 更快内容到达时间（time-to-content），用户将会更快的看到完整渲染的页面，提示用户体验

#### 缺点

1. 开发条件有限，要使用通用代码（beforeMount,Mounted）
2. 构建设置和部署更麻烦
3. 更多的服务端负载


客户端渲染做 单页面操作 混合 服务端渲染 做SEO优化

数据预存取容器（Data Store）

vue-ssr-axios

思路
    也分为客户端和服务端

    服务端需要在渲染阶段前获取到相关的请求信息，然后将信息写入vue实例当中，在通过vue渲染器渲染成字符串，插入到html中。
    entry-server.js

    