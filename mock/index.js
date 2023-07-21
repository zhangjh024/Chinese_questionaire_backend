const test =  require('./test')
const user = require('./user')
const question  =  require('./question')
const testArray = Array.from(test);
const questionArray = Array.from(question);
const mockList = [
    ...test,
    ...question,
    ...user
]
module.exports = mockList