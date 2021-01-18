// 服务端入口
import {createApp} from './main'

export default context =>{
    return new Promise((resolve, reject)=>{
        const {app} = createApp()
        const router = app.$router

        const {url} = context
        const {fullPath} = router.resolve(url).route

        if(fullPath !== url){
            return reject({url:fullPath})
        }

        router.push(url)

        router.onReady(()=>{
            const matchedComponents = router.getMatchedComponents()

            if(!matchedComponents.length){
                return reject({code:404})
            }

            // 遍历路由下的所有组件，如果有需要服务端渲染的请求，则进行请求
            Promise.all(matchedComponents.map( component=>{
                if(component.serverRequest){
                    // 如果组件中有 serverRequest 对象,判断是否需要服务器请求数据，并差传入一个store测试
                    return component.serverRequest(app.$store)
                }
            })).then(()=>{
                context.state = app.$store.state
                resolve(app)

            }).catch(e=>{
                reject(e)
            })
            
        },reject)
    })
}