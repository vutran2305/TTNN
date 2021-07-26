// Require packages 
var express = require('express');
var app = express();
var bodyParser= require('body-parser');
var jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.post('/api/dang-nhap',function(req,res){
    if(req.body.username=='vutran2305'&& req.body.password=='12345'){
        var token =jwt.sign({},'abcd',{algorithm:"TMA",expiresIn:'3h'});
        res.json({access_token:token});
    }
    else{
        res.send('Đăng nhập thất bại'); 
    }
});

app.use(function(req,res,next){
    next();
});

app.get('/api/test',function (req,res){
    res.send('TMA solution');
});


// Start the server
app.listen(3000,function(){
    console.log('Bạn đang chạy server trên port 3000');
});