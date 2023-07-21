const mock  = require('mockjs')
const random = mock.Random
// const rawQuestionList = [
//     { _id: 'q1', title: '问卷1', isStar:true, isPublished: false, answerCount: 10,createdAt: "5.1" },
//     { _id: 'q2', title: '问卷2', isStar:false, isPublished: true, answerCount: 10, createdAt: "5.1"},
//     { _id: 'q3', title: '问卷3', isStar:true, isPublished: false,answerCount: 10, createdAt: "5.1"},
//     { _id: 'q4', title: '问卷4', isStar:true, isPublished: true, answerCount: 10, createdAt: "5.1"},
// ]
module.exports = function getQuestionList(opt={}){
    const {len,isDeleted, isStar} = opt
    const list = []
    for(let i=0;i<len;i++)
    {
        list.push({
            _id:random.id(),
            title:random.ctitle(),
            isStar,
            isPublished: random.boolean(),
            answerCount: random.natural(50,100),
            createdAt:random.datetime(),
            isDeleted            //假删除
        })
    }
    return list
}