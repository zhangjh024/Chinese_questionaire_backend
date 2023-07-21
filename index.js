const Koa = require('koa')
const Router = require('koa-router')
const mockList = require('./mock/index')
const cors = require('@koa/cors');

const app = new Koa()
const router = new Router()

mockList.forEach((item)=>{
    const {url, method, response} = item
    router[method](url, async ctx=>{
        const res = await getRes(response,ctx)
        ctx.body = res
    })
})

async function getRes(fn, ctx){
    return new Promise(resolve=>{
        setTimeout(()=>{
            const res = fn(ctx)
            resolve(res)
        }, 1000)
    })
}
app.use(cors())
app.use(router.routes())

app.listen(3001)