
const Mock = require('mockjs')
const Random = Mock.Random
const questionList = require('./data/getQuestionList')
module.exports = [
    {
        url:'/api/question/:id',
        method: 'get',
        response(){
            return{
                errno:0,
                data:{
                    id:Random.id(),
                    title:Random.ctitle()
                }
            }
        }
    },
    {
        url:'/api/question',
        method: 'post',
        response(){
            return{
                errno:0,
                data:{
                    id:Random.id()
                }
            }
        }
    },
    {
        //获取（查询）问卷列表
        url:'/api/question',
        method: 'get',
        response(ctx) {
            const{url='', query={}} = ctx
            const isDeleted = url.indexOf("isDeleted=true")>=0
            const isStar = url.indexOf("isStar=true")>=0
            const pageSize = parseInt(ctx.query.pageSize)||9
            return {
                errno:0,
                data:{
                    list:questionList({len:pageSize,isDeleted,isStar}),  //当前页
                    total:100, //总数
                }
            }
        }
    },
    // 更新问卷信息
    {
        url:'/api/question/:id',
        method: 'patch',
        response() {
            return{
                errno:0
            }
        }
    },
    {
        //复制问卷信息
        url:'/api/question/:id',
        method: 'post',
        response() {
            return{
                errno:0,
                data:{
                    id:Random.id()
                }
            }
        }
    },
    {
        //批量删除
        url:'/api/question',
        method: 'delete',
        response() {
            return{
                errno:0,
            }
        }
    }
]