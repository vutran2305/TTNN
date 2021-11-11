var express = require('express');
var app = express();

//cấu hình body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extend:false}));
app.use(bodyParser.json());

//các routers
 require('./app/routers/home.router')(app);
 require('./app/routers/Product.router')(app);
require('./app/routers/user.router')(app);


app.post('/login',function(req,res){
    if(req.body.username=='vutran2305'&& req.body.password=='12345'){
        res.json('đăng nhập thành công');
    }
    else{
        res.send('Đăng nhập thất bại'); 
    }
});


app.listen(3000,function () {
    console.log("Server listenning on http://localhost:3000");

})