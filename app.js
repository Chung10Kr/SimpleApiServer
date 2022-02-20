const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
app.use(cors());

app.get('/set/menu', (req, res) => {
    console.log('menu')
    console.log( (req.body || req.query) )

    let result = {
        "menu":[
            { name : 'Setting' , src : '/set' },
            { name : 'Ajax' , src : '/ajax'   },
            { name : 'Paging' , src : '/paging' }
        ]
    };

    res.json(result)
})


app.get('/sample/name', (req, res) => {
    console.log( req.headers.Authorization )
    console.log( (req.body || req.query) )
    let result = {
        "name" : "get"
    };
    setTimeout(function(){
        res.json(result)
    },3000)
})

app.post('/sample/name', (req, res) => {

    console.log( (req.body || req.query) )
    let result = {
        "list" : [
            {v:"I" , t:"Incheon"},
            {v:"B" , t:"Busan"},
            {v:"J" , t:"Jeju"},
        ]
    };
    setTimeout(function(){
        res.json(result)
    },3000)

})


app.post('/login', (req, res) => {

    console.log( (req.body || req.query) )
    let result = {
        'accessToken' : '1akj1298n12jzx9812',
        'msg' : ''
    };
    res.json(result)

})

app.post('/login/token', (req, res) => {

    console.log( (req.body || req.query) )
    let result = {
        'accessToken' : '12312312asd',
        'msg' : '',
        'userInfo' : {
            'user_name' : '이충렬',
            'user_id' : 'crlee05',
            'user_role' : '07',
            'user_num' : '010-1234-5678'
        }
    };
    res.json(result)

})

app.post('/user/info', (req, res) => {

    console.log( (req.body || req.query) )
    let result = {
        'status' : true,
        'userInfo' : {
            'user_name' : '이충렬',
            'user_id' : 'crlee05',
            'user_role' : '07',
            'user_num' : '010-1234-5678'
        }
    };
    res.json(result)

})











app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})